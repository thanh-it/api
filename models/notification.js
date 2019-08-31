
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notificationSchema = new Schema({
	titles:{
		type: String,
		default: null,
	},
	content:{
		type: String,
		default: null,
	}
});
module.exports = mongoose.model('notification', notificationSchema);