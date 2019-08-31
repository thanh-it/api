const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Transaction = require('../models/stockTransaction');

var orderSchema = new Schema({
    by: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: "users"
    },
    orderType: { //buy / sell
        type: String,
        enum: [ "BUY", "SELL" ],
        require: true,
        default: "BUY"
    },
    ticker: {
        type: String,
        default: null,
        require: true
    },
    price: {
        type: Number,
        default: 0,
        require: true
    },
    amount: {
        type: String,
        default: null,
        require: true,
        validate: {
          validator: v => {
            return v > 0 && v % 10 == 0;
          },
          message: props => `Khối lượng không hợp lệ`
        },
    },// unique: không trùng ; required : bắt buộc ; dropDups : nếu trùng được phép xóa luôn
    start: {
        type: Number,
        required: true,
        default: Date.now()
    },
    end: {
        type: Number,
        required: true,
        default: 0
    },
    canceled: {
    	type: Boolean,
    	require: true,
    	default: false
    }
},  { 
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true 
    }
});

orderSchema.virtual('related_sell_transactions', {
  ref: 'stockTransaction',
  localField: '_id',
  foreignField: 'sellOrder'
  //foreignField: 'buyOrder'
});
orderSchema.virtual('related_buy_transactions', {
  ref: 'stockTransaction',
  localField: '_id',
  foreignField: 'buyOrder'
});
orderSchema.virtual('status').get(() => {
    if (this.canceled) return 'CANCELED';
    if (this.end) return this.end > Date.now() ? 'ACTIVE' : 'EXPIRED';
    else return 'ACTIVE';
});
/*
orderSchema.virtual('remaining').get(function () {
  var r = this.amount;
  this.transactions.forEach(transaction => r = r - transaction.amount);
  return r;
});
*/

module.exports = mongoose.model('order', orderSchema);