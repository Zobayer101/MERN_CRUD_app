const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    date: {
        type: String,
        required:true,
    },
    city: String,
    photo: String,
     
}, {
    timestamps:true,
})

const UserDB = mongoose.model('People', schema);

module.exports = UserDB;