const express = require('express');
const booksRouter = express.Router();
const {addBookModel} = require('../models/addBookModel');
var test = 0;

function router(nav){

    booksRouter.route('/')
        .get((req, res) =>{

            addBookModel.find((error,data)=>{
                if(error)
                {
                    throw error;
                }
                else
                {
                    test = data;
                    res.render(
                        'books',
                        {
                            nav,
                            title: "Books",
                            books:data
                        }
                    );
                }
            });



            
        }
    );

    booksRouter.route('/addBooks')
        .get((req, res) =>{
            res.render(
                'addBooks',
                {
                    nav,
                    title: "Add Books"
                });
            });

    booksRouter.route('/save')
        .post((req,res) =>{
            var books = new addBookModel(req.body);
            books.save((error,data)=>{
                if(error)
                {
                    res.json({"Status":"Error"});
                    throw error;
                }
                else
                {
                    res.redirect("/books");
                }
            });
        }
    );
    
    booksRouter.post('/delete',(req,res)=>{
        addBookModel.findByIdAndDelete(req.body.hidden,(error,data)=>{
            if(error){
                res.json({"Status":"Error"});
                throw error;
            }
            else{
                res.redirect("/books");
            }
        });
    });

    booksRouter.post('/update',(req,res)=>{
        addBookModel.findById(req.body.hidden,(error,data)=>{
            if(error){
                res.json({"Status":"Error"});
                throw error;
            }
            else{
                res.render('update',
                {
                    nav,
                    title:'Update Book',
                    data
                });
            }
        });
    });

    booksRouter.post('/modify',(req,res)=>{
        addBookModel.findByIdAndUpdate(req.body.hidden,req.body,(error,data)=>{
            if(error){
                res.json({"Status":"Error"});
                throw error;
            }
            else{
                res.redirect("/books");
            }
        });
    });

    booksRouter.get('/viewAllapi',(req,res)=>{
        addBookModel.find((error,data)=>{
            if(error)
            {
                throw error;
            }
            else
            {
                res.send(data);
            }
        });
    })

    booksRouter.route('/:_id')
        .post((req, res) =>{
            addBookModel.findById(req.params._id,(error,data)=>{
                if(error){
                    res.json({'Status':"Error"});
                    throw error;
                }
                else if(data){
                    res.render(
                    'book',
                    {
                        nav,
                        title: "Books",
                        book:data
                    });
                }
            });
        });

    return booksRouter;
}

module.exports = router;