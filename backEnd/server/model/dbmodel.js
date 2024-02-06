

const mongoose=require('mongoose');

const schema= new mongoose.Schema({
    name:{
        type:String,
        min:4,
        trim:true,
    },
    email:{
        type:String,
        min:5,
        trim:true,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        min:6,
        required:true
    },
    gendar:String,
    avatar:{
        type:String,
        default:'no-photo.jpg'
    },
    date:{
        type:String,
        default: Date.now().toLocaleString(),
    }

},{
    timestamps:true
})
const UserDB= mongoose.model('User',schema);

module.exports=UserDB;