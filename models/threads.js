
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var threadsSchema = new Schema({
	threadName:{
		type: String,
		default: null,
	},
	threadContent:{
		type: String,
		default: null,
	}
});
module.exports = mongoose.model('threads', threadsSchema);