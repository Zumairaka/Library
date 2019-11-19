const mongoose = require('mongoose');

addAuthorSchema = new mongoose.Schema(
     {
         name:{
             type:String,
             required:true
         },
         country:{
             type:String,
             required:true
         },
         age:{
             type:Number,
             required:true
         },
         image:{
             type:String,
             required:true
         }
});

const addAuthorModel = mongoose.model('Authors',addAuthorSchema);

module.exports = {addAuthorModel};