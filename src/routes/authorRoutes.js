const express = require('express');
const authorRouter = express.Router();
const {addAuthorModel} = require('../models/addAuthorModel');
var test = 0;

function router(nav){

    authorRouter.route('/')
        .get((req, res) => {
            addAuthorModel.find((error,data)=>{
                if(error){
                    throw error;
                }
                else{
                    test = data;
                    res.render(
                        'authors',
                        {
                            nav,
                            title: "Authors",
                            authors:data
                        }
                    );
                }
            });
        });

    authorRouter.route('/addAuthor')
        .get((req,res)=>{
            res.render('addAuthor',
            {
                nav,
                title:"Add Authors"
            });
        });

    authorRouter.route('/save')
        .post((req,res)=>{
            var author = new addAuthorModel(req.body);
            author.save((error,data)=>{
                if(error){
                    res.json({"Status":"Error"});
                    throw error;
                }
                else{
                    res.json({"Status":"Success"});
                }
            });
        });

    authorRouter.get('/viewAllapi',(req,res)=>{
            addAuthorModel.find((error,data)=>{
                if(error){
                    throw error;
                }
                else{
                    res.send(data);
                }
            });
        });

    authorRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render(
                'author',
                {
                    nav,
                    title: "Authors",
                    author: test[id]
                }
            );
        }
    );

    return authorRouter;
}

module.exports = router;