var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var tokenSchema = new Schema({
	 token: {
	 	type: String, 
	 	unique: true, 
	 	required: true, 
	 	dropDups: true
	 },
	 created: {
		type: Date, 
		default: Date.now(),
		require: true,
	 },
	 expiration: { 
	 	type: Date, 
	 	default: null,
	 	require: true,
	 },
	 user: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "users"
	 }
});

module.exports = mongoose.model('tokens', tokenSchema);