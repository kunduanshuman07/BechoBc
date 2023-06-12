const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    about:{
        type:String,
        required:true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    productcart:[],
    bookeditems:[],
    isAdmin: {
        type: Boolean,
        default: false
    }
},{
    timestamps:true
})

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;
