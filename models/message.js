/** message = tin nhắn */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
	user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'users'
  },
	conversation : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'conversation'
  },
  text : {
    type: String,
  },
  createdAt: {
    type: Number,
    default: Date.now()
  }
});
// messageSchema
//   .virtual('createdAt')
//   .get(function () {
//     return new Date(this.created);
//   });
module.exports = mongoose.model('message', messageSchema);