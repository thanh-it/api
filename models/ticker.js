var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tickerSchema = new Schema({
    code: {
        type: String,
        require: true,
        unique: true
    },
    company: {
        type: String,
        default: null,
        require: true
    },
    lastprice: {
        type: Number,
        default: 0,
        require: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    published: {
    	type: Boolean,
    	default: false
    }, 
    stock_exchange: {
        type: String,
        enum: ['OTC', 'HNX', 'HSX', 'UPCOM'],
        default: null
    }
});
module.exports = mongoose.model('ticker', tickerSchema);