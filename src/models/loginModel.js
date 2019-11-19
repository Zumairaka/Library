const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema(
    {
        uname:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
);

const loginModel = mongoose.model('Login',loginSchema);

module.exports = {loginModel};