const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        required: true,
        unique:true,
    },
    phonenumber:{
        type:String,
        unique:true
    },
    Password:{
        type:String,
        required: true,

    },
    Age:Number
});

const UserModule = mongoose.model('User', UserSchema);
// key / refers / to dataBase

module.exports = UserModule