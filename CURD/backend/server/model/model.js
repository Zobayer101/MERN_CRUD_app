
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    fname: {
        type: String,
        required:true
    },
    lname: String,
    email: {
        type: String,
        required: true,
        unique: true,
        trim:true,
    },
    password: {
        type: String,
        required: true,
        
    },
    photo: String,
    barth: String,
    status: String,
    OTP:String,
}, {
    timestamps:true,
})

const UserDB = mongoose.model('User', schema);
module.exports = UserDB;