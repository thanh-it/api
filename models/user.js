var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: { // unique: không trùng ; required : bắt buộc ; dropDups : nếu trùng được phép xóa luôn
        type: String,
        unique: true,
        required: true,
        dropDups: true
    }, 
    confirmed:{
        type:Boolean,
        default: false,
        required: true,
    },
    password: {
        type: String,
        default: null,
        required: true,
        select: false
    },
    name: {
        type: String,
        default: null,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
    phone: {
        type: Number,
        default: null,
    },
    company: {
        type: String,
        default: null,
    },
    position: {
        type: String,
        default: null,
    },
    address: {
        type: String,
        default: null,
    },
    avatar: {
        type: String,
        default: 'http://busy.monteam.net:3001/images/avatar.png'
    },
    account_type: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER',
        require: true
    },
    permissions: [{
        type: String,
        enum: ['LOGIN', 'TICKER_PUBLISH', 'ORDER_PUBLISH', 'ORDER_CONFIRM', 'PERMISSION_PUBLISH', 'ACCOUNT_PUBLISH', 'ALL_ORDER_PUBLISH']
    }],
    confirmation_code: String,
    confirmation_code_expiration: Date
});
module.exports = mongoose.model('users', userSchema);