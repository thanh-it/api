const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var stockTransactionSchema = new Schema({
    buyOrder: {
        type: Schema.Types.ObjectId, ref: 'order',
        //type: String,
        require: true,
        //select: false
    },
    sellOrder: {
        type: Schema.Types.ObjectId, ref: 'order',
        //type: String,
        require: true,
        //select: false
    },
    ticker: {
        type: String,
        default: null,
        require: true
    },
    amount: {
        type: Number,
        default: 0,
        require: true
    },// unique: không trùng ; required : bắt buộc ; dropDups : nếu trùng được phép xóa luôn
    price: {
        type: Number,
        default: 0,
        require: true
    },
    time: {
        type: Number,
        required: true,
        default: Date.now()
    },
    confirmed: {
        type: Boolean,
        required: true,
        default: true
    }
},  { 
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true 
    }
});
stockTransactionSchema.virtual('conversation', {
  ref: 'conversation',
  localField: '_id',
  foreignField: 'transaction'
});
module.exports = mongoose.model('stockTransaction', stockTransactionSchema);