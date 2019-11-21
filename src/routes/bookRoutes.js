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
                    res.json({"Status":"Success"});
                }
            });
        }
    );

    booksRouter.get('/update',(req,res)=>{
        res.render('update',{
            nav,
            title:'Update Book'
        });
    });
    
    booksRouter.post('/delete',(req,res)=>{
        addBookModel.findOneAndDelete({'bookid':req.body.bookid},(error,data)=>{
            if(error){
                res.json({"Status":"Error"});
                throw error;
            }
            else if(!data){
                res.json({"Status":"The Book Is Not Available"});
            }
            else{
                res.json({"Status":"Successfully Deleted The Book"});
            }
        });
    });

    booksRouter.post('/modify',(req,res)=>{
        addBookModel.findOneAndUpdate({'bookid':req.body.bookid},req.body,(error,data)=>{
            if(error){
                res.json({"Status":"Error"});
                throw error;
            }
            else if(!data){
                res.json({"State":"The Book Is Not Available"});
            }
            else{
                res.json({"State":"Successfully Updated The Details"});
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

    booksRouter.route('/:id')
        .get((req, res) =>{
            const id = req.params.id;

            res.render(
                'book',
                {
                    nav,
                    title: "Books",
                    book:test[id]
                }
            );
        }
    );

    return booksRouter;
}

module.exports = router;