const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Token = require('../models/access_token');
const Order = require('../models/order');
const Ticker = require('../models/ticker');
const Transaction = require('../models/stockTransaction');
const Conversation = require('../models/conversation');
const Message = require('../models/message');

/*
const Thread = require('../models/thread');
const Message = require('../models/message');
const FAQS = require('../models/faqs');
*/

const async = require('async');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const sendmail = require('sendmail')();

const multer = require('multer');
const shortid = require('shortid');
const mongo = require('mongodb').MongoClient;
const assert = require('assert');
const alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

var app = express();
let io;

function socketIO (IO) {
  io = IO;
  io.on('connection', socket => {
    socket.on('online', access_token => {
      //console.log('new user logged in');
      Token.findOne({
          token: access_token
        })
        .populate('user')
        .exec((err, access_token) => {
          if (access_token) {
            socket.join(access_token.user._id);
            console.log(access_token.user._id + ' online');
          }
        });
    });
  });
}

function normalize (str) {
  return str.trim().toLowerCase();
}

var url = process.env.DATABASE_URL;

// config nơi lưu trữ và tên ảnh đc upload lên server
var storage = multer.diskStorage({
  // nơi lưu trữ ảnh đc upload lên server
  destination: function(req, file, cb) {
    cb(null, "./public/uploads");
  },
  // quy định tên file đc upload lên : cấu hình tên file - giữ nguyên tên file gốc
  filename: function(req, file, cb) {
    cb(null, shortid.generate() + "--" + file.originalname);
  }
});
var upload = multer({
  storage: storage
});

function isAutheticated(req, res, next) {
  if (req.query.access_token || req.body.access_token) {
    var q = req.query.access_token || req.body.access_token;
    Token.findOne({
        token: q
      })
      .populate({
        path: 'user',
        select: 'name email avatar phone'
      })
      .exec((err, access_token) => {
        if (err || !access_token) return res.json({
          error: 'access_token invalid'
        });
        req.user = access_token.user;
        next();
      })
  } else if (req.session.user) {
    req.user = req.session.user;
    next();
  } else res.json({
    error: 'Please log in first'
  });
}

function isAdmin(req, res, next) {
  if (req.session.user && req.session.user.account_type == 'ADMIN') {
    next();
  } else if (req.query.acces_token || req.body.access_token) {
    var q = req.query.acces_token || req.body.access_token;
    Token.findOne({
      token: q
    }).populate('user').exec((err, access_token) => {
      if (err || !'access_token') return res.json({
        error: 'access_token invalid'
      });
      if (access_token.user.account_type == 'ADMIN') {
        req.session.user = access_token.user;
        next();
      } else res.json({
        error: 'Unauthorized'
      });
    })
  } else res.json({
    error: 'Unauthorized'
  });
}

function remainingQuantity(order) {
  var r = order.amount;
  if (order.related_buy_transactions) order.related_buy_transactions.forEach(t => r = r - t.amount);
  if (order.related_sell_transactions) order.related_sell_transactions.forEach(t => r = r - t.amount);
  return r;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'MonTeam API'
  });
});

/* USER API. */
router.post("/users/register", (req, res, next) => {
  var {
    name, email, password
  } = req.body;
  var model = new User({
    name: name,
    email: normalize(email),
    password: password
  });
  if (model.confirmed) {

  }
  model.save(err => {
    if (err) res.json({
      error: err.message //"Lưu không thành công"
    }).end();
    else {
      /*
      var {_id} = model;
      req.session.user = {
        name: name,
        email: email,
        _id: _id
      };
      */
      res.json({
        status: 'OK',
        redirect: '/login'
      }).end();
    }
  });
});
router.post('/users/login', (req, res) => {
  User.findOne({
    email: normalize(req.body.email),
    password: req.body.password
  }).select('name email picture account_type phone address company position').exec((err, user) => {
    if (user) {
      req.session.user = user;
      res.json({
        redirect: '/dashboard',
        user: user
      });
    } else res.json({
      error: "Login failed, Please check account"
    }).end();
  });
});
router.post('/users/auth', (req, res) => {
  User.findOne({
    email: normalize(req.body.email),
    password: normalize(req.body.password)
  })
  .select('name email picture account_type phone address company position')
  .exec((err, user) => {
    if (user) {
      var access_token = new Token({
        user: user._id,
        token: alphabet.random(32) + Date.now()
      });
      access_token.save(err => {
        if (err) return res.json({
          error: err
        });
        res.json({
          user: user,
          access_token: access_token.token
        });
      });
    } else res.json({
      error: "Login failed, Please check account"
    }).end();
  });
});
router.get('/users/logout', (req, res) => {
  req.session.destroy();
  res.json({
    success: true,
    redirect: '/'
  });
});

router.get('/users/info', isAutheticated, (req, res) => {
  User.findOne({
    _id: req.user._id
  }).select('name email picture account_type phone address company position').exec((err, user) => {
    if (err) return res.json(err);
    else {
      //req.session.user = user;
      res.json(user);
    }
  })
});
router.put('/users/info', isAutheticated, (req, res) => {
  User.update({
    _id: req.user._id
  }, {
    $set: req.body
  }).exec(err => {
    if (err) res.json(err);
    else res.json({
      success: true
    });
  });
});

// Đổi mật khẩu

router.post('/user/changepassword', isAutheticated, (req, res) => {
  if (req.newpassword != req.newpassword_confirm) return res.json({
    error: "Xác nhận mật khẩu mới chưa chính xác"
  });
  User.findOne({
    _id: req.user._id,
    password: req.body.password
  }).exec((err, user) => {
    if (err) return res.json({
      error: err
    });
    if (!user) return res.json({
      error: 'Mật khẩu hiện tại không chính xác'
    });
    user.password = req.body.newpassword;
    user.save(err => {
      if (err) return res.json({
        error: err
      });
      res.json({
        success: true
      });
    });
  });
});

// Đặt lại mật khẩu **********************************
router.post('/forgot', function(req, res, next) {
  async.waterfall([
    function(callback) {
      //Tạo cụm 6 số ngẫu nhiên
      crypto.randomBytes(3, function(err, buffer) {
        var token = parseInt(buffer.toString('hex'), 16).toString().substr(0,6); 
        callback(err, token);
      });
    },
    function(token, callback) {
      User.findOne({ 
        email: normalize(req.body.email)
      }, function(err, user) {
        if (!user) return res.json({
          error: 'Email cung cấp không được đăng kí trên hệ thống'
        });
        user.confirmation_code = token;
        user.confirmation_code_expiration = Date.now() + 3600000; // 1 hour
        user.save(function(err) {
          callback(err, token, user);
        });
      });
    },
    function(token, user, callback) {
      var client = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: 'phamnho9x@gmail.com',
          pass: 'nho22101997'
        }
      });
      var email = {
        from: 'passwordreset@demo.com',
        to: user.email,
        subject: 'Monteam - Đặt lại mật khẩu',
        text: 'Bạn đang nhận được điều này bởi vì bạn (hoặc người khác) đã yêu cầu đặt lại mật khẩu cho tài khoản của bạn.\n\n' +
        'Đây là mã xác nhận đặt lại mậu khẩu cảu bạn:\n\n' + token + '\n\n' +
        'Nếu bạn không yêu cầu điều này, xin vui lòng bỏ qua email này và mật khẩu của bạn sẽ không thay đổi.\n\n' +
        'Mã xác thực có hiệu lực trong 1 giờ.'
      };
      client.sendMail(email, function(err){
        req.flash('info','Một email vừa được gửi tới ' + user.email + ' với hướng dẫn thêm.');////////////////////////////////////////////// Chưa thông báo được
        callback(err, 'done');
      });
    }
  ], function(err) {
    return res.json({
      error: err.message
    });
  });
});

router.post('/reset/:token', function(req, res) {
  async.waterfall([
    function(callback) {
      User.findOne({ confirmation_code: req.params.token, confirmation_code_expiration: { $gt: Date.now() } }, function(err, user) {
        if (!user) return res.json({
          error: 'Mã thông báo đặt lại mật khẩu không hợp lệ hoặc đã hết hạn.'
        });

        user.password = req.body.password;
        user.confirmation_code = undefined;
        user.confirmation_code_expiration = undefined;

        user.save(function(err) {
          req.logIn(user, function(err) {
            callback(err, user);
          });
        });
      });
    },
    function(user, callback) {
     var client = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: 'phamnho9x@gmail.com',
          pass: 'nho22101997'
        }
      });
      var email = {
        to: user.email,
        from: 'passwordreset@demo.com',
        subject: 'Monteam - Mật khẩu của bạn đã được thay đổi',
        text: 'Xin chào,\n\n' +
          'Đây là một xác nhận rằng mật khẩu cho tài khoản của bạn ' + user.email + ' vừa được thay đổi.\n'
      };
      client.sendMail(email, function(err) {
        req.flash('info', 'Xong! Mật khẩu của bạn đã được thay đổi.');///////////////////////////////////////////// Chưa thông báo được
        callback(err);
      });
    }
  ], function(err) {
      return res.json({
        error: err.message
      });
    });
});

// Kết thúc đặt lại mật khẩu **********************************

router.get('/orders/filters',(req, res)=>{
  Order.find({}).exec((err, data) => {
      if (err) return res.json({
        error: err
      });
      else 
      res.json({
        data: data
      });
    })
});

/* get all orders */
router.get('/orders', isAutheticated, (req, res) => {
  var filter = req.query.filter || {};
    filter.by = req.user._id;
  Order.find({
    by: req.user._id,
    start: { $gte : req.query.from || 0, $lte: req.query.to || Infinity },
    ticker: { $regex: new RegExp(req.query.q, "i") },
    orderType: req.query.type.trim().toUpperCase() || '',
    canceled: req.query.canceled || ''
  })
    .populate({
      path: 'related_buy_transactions',
      select: 'buyOrder amount price time -_id confirmed',
      populate: {
        path: 'sellOrder',
        select: 'by -_id',
        populate: [{
          path: 'by',
          select: 'name phone company -_id'
        }, {
          path: 'conversation',
          select: '_id'
        }]
      }
    })
    .populate({
      path: 'related_sell_transactions',
      select: 'sellOrder amount price time -_id confirmed',
      populate: {
        path: 'buyOrder',
        select: 'by -_id',
        populate: [{ 
          path: 'by',
          select: 'name phone company -_id'
        }, {
          path: 'conversation',
          select: '_id'
        }]
      }
    })
    .populate({
      path: 'conversation',
      select: '_id',
    })
    .exec((err, data) => {
      if (err) return res.json({
        error: err
      });
      else 
      res.json({
        data: data
      });
    })
});
router.get('/fullorders', (req, res) => {
  Order.find({}).populate('by').exec((err, data) => {
    if (err) return res.json({
      error: err.message
    });
    else res.json({
      data: data
    });
  });
});
/* NEW ORDER */
router.post('/order', isAutheticated, (req, res) => {
  var this_order = new Order(req.body);
  this_order.by = req.user._id;
  this_order.save(err => {
    if (err) return res.json(err);
    Order.find({ //tim cac order khac thoa man dieu kien
        ticker: this_order.ticker,
        orderType: this_order.orderType == 'SELL' ? 'BUY' : 'SELL',
        canceled: false,
        price: this_order.orderType == 'SELL' ? {
            $gte: this_order.price
          } : {
            $lte: this_order.price
          },
        //amount: this_order.amount,
        start: this_order.start,
        end: this_order.end,
        foreign: this_order.foreign //foreign order chi match voi foreign order
      })
      .populate('related_sell_transactions related_buy_transactions')
      .exec((err, matched_orders) => {
        var remaining = this_order.amount;
        matched_orders.forEach(match_order => {
          if (remaining <= 0) return;
          if (match_order.by == this_order.by) return; //neu 2 order do cung 1 nguoi dat thi ko khop
          var matched_amount = Math.min(remaining, remainingQuantity(match_order)); //khoi luong khop = khoi luong con lai nho hon
          /* neu 1 trong 2 order la block order va khoi luong khop < khoi luong cua order do thi ko khop */
          if (this_order.block && matched_amount < this_order.amount) return;
          if (match_order.block && matched_amount < match_order.amount) return;
          
          if (matched_amount) {
            var transaction = new Transaction({
              buyOrder: this_order.orderType == 'SELL' ? match_order._id : this_order._id,
              sellOrder: this_order.orderType == 'SELL' ? this_order._id : match_order._id,
              ticker: this_order.ticker,
              amount: matched_amount,
              price: match_order.price
            });
            transaction.save(err => {
              if (err) console.log(err);
              else new Conversation({
                participants: [this_order.by, match_order.by],
                transaction: transaction._id,
              }).save(err => console.log(err));
            });
          }
          remaining = remaining - matched_amount;
        });
      });
    res.json({
      id: this_order._id
    });
  });

});
/* edit order */
router.put('/order/:id', isAutheticated, (req, res) => {
  Order.findOne({
    _id: req.body.id
  }, function(err, model) {
    if (err) {
      res.redirect('back');
    }
    model = req.body;
    model.save(function(err) {
      if (err) {
        res.json(err);
      }
      res.json({
        success: true
      });
    })
  })
});
/* ADMIN API */
/* get all users */
router.get('/users', (req, res) => {
  User.find({}, (err, data) => {
    res.json({
      data: data
    });
  })
});
/* get 1 user */
router.get('/user/:id', isAdmin, (req, res) => {
  User.findOne({
    _id: req.params.id
  }).exec((err, user) => {
    if (err) return res.json(err);
    else {
      //req.session.user = user;
      res.json(user);
    }
  })
});
router.get('/user/search/:mail', isAdmin, (req, res) => {
  User.findOne({
    email: req.body.email
  }).exec((err, user) => {
    if (err) return res.json(err);
    else {
      //req.session.user = user;
      res.json(user);
    }
  })
});
/* edit 1 user */
router.put('/user', isAdmin, (req, res) => {
  User.update({
    _id: req.body.id
  }, {
    $set: req.body
  }).exec(err => {
    if (err) return res.json(err);
    res.json({
      message: "Cập nhật thành công",
      success: true
    });
  });
});
/* delete 1 user */
router.delete('/user/:id', isAdmin, (req, res) => {
  User.deleteOne({
    _id: req.params.id
  }, function(err) {
    if (err) return handleError(err);

    // deleted at most one tank document
    res.json({
      success: true
    });
  });
});
/* get all tickers */
router.get('/tickers', (req, res) => {
  Ticker.find({}).limit(50).exec((err, data) => {
    res.json({
      data: data
    });
  })
});

/* add new ticker */
router.post('/ticker', isAdmin, (req, res) => {
  var data = req.body
  var tickers = new Ticker(data);
  tickers.save(function(err) {
    if (err) {
      res.json(err);
    }
    res.json({
      success: true,
      //redirect: '/admin',
      message: 'Đã thêm mã thành công'
    });
  })
});
/* edit a ticker */
router.put('/ticker/:id', isAdmin, (req, res) => {
  Ticker.findOne({
    _id: req.body.id
  }, function(err, model) {
    if (err) {
      res.redirect('back');
    }
    model = req.body;
    model.save(function(err) {
      if (err) {
        res.json(err);
      }
      res.json({
        success: true
      });
    })
  })
});
/* delete a ticker */
router.delete('/ticker/:id', isAdmin, (req, res) => {
  Ticker.deleteOne({
    _id: req.params.id
  }, function(err) {
    if (err) return handleError(err);
    // deleted at most one tank document
    res.json({
      success: true,
      message: 'Đã xóa mã'
    });
  });
});
/* search ticker */
router.get('/search/ticker', (req, res) => {
  //?q=
  Ticker.find({ $or: [
    { code: { $regex: new RegExp(req.query.q, "i") }},
    { company: { $regex: new RegExp(req.query.q, "i") }}
  ]})
  .exec((err, tickers) => {
    if (err) return handleError(err);
    res.json({data: {data: }{data: }tickers});
    // saved!
  });
});
router.get('/admin/messages', isAdmin, (req, res) => {
  Messages.find({}, (err, data) => {
    res.json({
      data: data
    });
  })
});
/* get all orders */
router.get('/admin/orders', isAdmin, (req, res) => {
  Order.find({}, (err, data) => {
    res.json({
      data: data
    });
  })
});
router.get('/admin/transactions', isAdmin, (req, res) => {
  Transaction.find({}, (err, data) => {
    res.json({
      data: data
    });
  })
});
/* get 1 order */
router.put('/admin/order/:id', isAdmin, (req, res) => {
  Order.findOne({
    _id: req.body.id
  }, function(err, model) {
    if (err) {
      res.redirect('back');
    }
    model = req.body;
    model.save(function(err) {
      if (err) {
        res.json(err);
      } else res.json({
        success: true
      });
    })
  })
});
/* MESSAGE SYSTEM */

/** thread **/
// router.post('/thread', isAutheticated, (req, res) => {
//   var threads = new Thread(data);
//     threads.save(function (err) {
//         if (err) return handleError(err);
//         // saved!
//     })
// });
// router.post('/message', isAutheticated, (req, res) => {
//   var messages = new Message(data);
//     messages.save(function (err) {
//         if (err) return handleError(err);
//         // saved!
//     })
// });
// router.get('/messages', isAutheticated, (req, res) => {
//   Message.find({}, (err, data) => {
//     res.json({
//       data: data
//     });
//   })
// });
router.get('/me', isAutheticated, (req, res) => {
  res.json(req.user);
});
router.put('/me', isAutheticated, (req, res) => {
  User.findOne({
    _id: req.body.id
  }, function(err, model) {
    if (err) {
      res.redirect('back');
    }
    model = req.body;
    model.save(function(err) {
      if (err) {
        res.json(err);
      } else res.json({
        success: true
      });
    })
  })
});
router.get('/me/conversations', isAutheticated, (req, res) => {
  Conversation.find({
      participants: req.user._id
    })
    .sort('-lastUpdate')
    .populate({
      path: 'messages',
      limit: 25,
      populate: {
        path: 'user',
        select: 'name avatar'
      },
      options: {
        sort: { 'createdAt': -1 }
      }
    })
    .populate({
      path: 'transaction',
      select: 'ticker amount price'
    })
    .populate({
      path: 'participants',
      select: 'name picture'
    })
    .exec((err, data) => {
      if (err) res.json({
        error: err
      });
      else res.json({
        data: data
      });
    });
});
router.post('/conversation/:id', isAutheticated, (req, res) => {
  Conversation.findOne({
      _id: req.params.id,
      participants: req.user._id
    })
    .select('participants')
    .exec((err, conversation) => {
      if (err) return res.json({
        error: err
      });
      if (conversation) {
        var model = new Message({
          user: req.user._id,
          text: req.body.message,
          conversation: conversation._id
        });
        model.save(err => {
          if (err) return res.json({
            error: err
          });
          conversation.lastUpdate = Date.now();
          conversation.save(err => console.log(err));
          Message.findOne(model)
          .populate({
            path: 'user',
            select: 'name avatar'
          })
          .exec((err, msg) => {
            conversation.participants.map((user, index) => {
              console.log(user, msg.text);
              io.to(user).emit('message', msg);
              //io.emit('message', msg);
            })
          });
          res.json({
            id: model._id 
          });
        });
      } else res.json({
        error: 'Invalid conversation'
      });
    });
});
router.get('/conversation/:id', isAutheticated, (req, res) => {
  Conversation.findOne({
    _id: req.params.id,
    participants: req.user._id
  }, (err, data) => {
    res.json({
      data: data
    });
  })
});

/*Feedback
router.post('/feedback/:id', isAutheticated, (req, res) => {
  
});*/
/*FAQ
router.get('/faq', isAutheticated, (req, res) => {
  FAQS.find({}, (err, data) => {
    res.json({
      data: data
    });
  })
});*/
module.exports = {
  router: router,
  passIO: IO => socketIO(IO)
};