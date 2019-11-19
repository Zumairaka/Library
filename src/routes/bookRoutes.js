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