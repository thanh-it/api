String.prototype.random = function(length) {
  var out = '';
  for (var i = 0; i < length; i++) out += this[Math.floor(Math.random() * this.length)];
  return out;
};

process.on('uncaughtException', function(error) {
  console.log(error);
  return;
});
require('dotenv').config({
  path: `./env-files/${process.env.NODE_ENV || 'development'}.env`,
  //path: `./env-files/${process.env.NODE_ENV || 'development'}.env`,
});

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index').router;
const usersRouter = require('./routes/users');

//session
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisStoreConfig = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
};
if (process.env.REDIS_URL) {
  redisStoreConfig.url = process.env.REDIS_URL; // this will use the REDIS_URL required for logging into the Redis addon provided by Heroku
}
if (process.env.REDIS_PASSWORD) {
  redisStoreConfig.password = process.env.REDIS_PASSWORD; // this will use the REDIS_PASSWORD if required
}
const redisStore = new RedisStore(redisStoreConfig);

var app = express();
let io;

var cors = require('cors');
const {
  COOKIE_EXPIRATION_MS
} = process.env;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    store: redisStore,
    secret: 'keyboard cat',
    name: process.env.SESSION_COOKIE_NAME,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      expires: Date.now() + parseInt(COOKIE_EXPIRATION_MS, 10),
      maxAge: parseInt(COOKIE_EXPIRATION_MS, 10),
    },
  })
);
/*
app.use(cors({
  origin: 'http://busy.monteam.net:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));
*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", 'http://darkpool.monteam.net');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Cache-Control");
  res.header('Access-Control-Allow-Credentials', "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

var hbs = require('hbs');
hbs.registerHelper('if_eq', function(a, b, opts) {
  if (a == b) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
});
hbs.registerHelper('if_eqa', function(a, b, opts) {
  if (a != b) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
});


app.use('/', indexRouter);
app.use('/users', usersRouter);

/*===========Config mongoose=============*/
var mongoose = require("mongoose");
// let mongoDB = process.env.MONGODB_URI;
let mongoDB = "mongodb://localhost:27017/darkpool";
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
/*======================================*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    error: err
  });
});

module.exports = {
  app: app,
  passIO: IO => require('./routes/index').passIO(IO)
};