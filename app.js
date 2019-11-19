const express = require('express');
const chalk = require('chalk');
const path = require('path');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = new express();

app.set('views','./src/views');

app.use(express.static(path.join(__dirname,"/public")));
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
  
app.set('view engine','ejs');

//app.get('/',function(request,response){          //using normal html 
    //response.sendFile(path.join(__dirname,"/src/views/index.html"));
//});
var nav=[
            {link:'/',title:'Home'},
            {link:'/signUp',title:'Sign Up'},
            {link:'/login',title:'Login'},
            {link:'/books',title:'Books'},
            {link:'/authors',title:'Authors'},
            {link:'/books/addBooks',title:'Add Books'},
            {link:'/authors/addAuthor',title:'Add Authors'}
        ];


const booksRouter = require('./src/routes/bookRoutes')(nav); //Passing nav to booksRouter
const authorRouter = require('./src/routes/authorRoutes')(nav); 
const signupRouter = require('./src/routes/signupRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);


app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/signUp',signupRouter);
app.use('/login',loginRouter);

mongoose.connect("mongodb://localhost:27017/Library");


app.get('/',function(req,res){
    res.render('index',
    {
        nav,
        title:"Library"
    });        //using ejs view engine
});



app.listen(3061,function(){
    console.log("Listeing to Port"+chalk.blue(" 3061"));
});
