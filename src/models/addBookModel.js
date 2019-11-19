const mongoose = require('mongoose');

const addBookSchema = new mongoose.Schema(
    {
        booktitle:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true},
        genre:{
            type:String,
            required:true},
        authorimage:String
    }
);
const addBookModel = mongoose.model('Books',addBookSchema);

module.exports = {addBookModel};