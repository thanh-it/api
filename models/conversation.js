/** thread = cuộc hội thoại **//** message = tin nhắn */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var conversationSchema = new Schema({
  // messages : [{
  //   type : mongoose.Schema.Types.ObjectId,
  //   ref : 'message'
  // }],
  created: {
    type: Number,
    default: Date.now()
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }],
  meta: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    delivered : Boolean,
    read : Boolean,
    last_seen : Date
  }],
  transaction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'stockTransaction',
    required: false
  },
  lastUpdate: {
    type: Number,
    default: Date.now()
  },
  lastRead: {
    type: Number,
    default: Date.now()
  }
}, {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true 
  }
});
conversationSchema.virtual('messages', {
  ref: 'message',
  localField: '_id',
  foreignField: 'conversation'
});
module.exports = mongoose.model('conversation', conversationSchema);