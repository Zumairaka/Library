const mongoose = require('mongoose');

signUpSchema = new mongoose.Schema(
    {
        fname:{
            type:String,
            required:true
        },
        lname:String,
        uname:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        confirmpassword:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true
        },
        dob:{
            type:Date,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        lngg:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        }

});

const signUpModel = mongoose.model('SignUp',signUpSchema);
module.exports = {signUpModel};
