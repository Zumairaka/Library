const express = require('express');
const signupRouter = express.Router();
const {signUpModel} = require('../models/signUpModel');

function router(nav){
    signupRouter.route('/')
        .get((req,res)=>{
            res.render(
                'signUp',
                {
                    nav,
                    title : 'Sign Up'
                }
            );
        }
    );

    signupRouter.route('/save')
        .post((req,res) =>{
            var signUp = new signUpModel(req.body) ;
            signUp.save((error,data)=>{
                if(error){
                    res.json({"Status":"Error"});
                    throw error
                }
                else{
                    res.json({"Status":"Success"});
                }
            });
        });

    signupRouter.get('/viewAllapi',(req,res)=>{
            signUpModel.find((error,data)=>{
                if(error){
                    throw error;
                }
                else{
                    res.send(data);
                }
            });
        });

    return signupRouter;
}

module.exports = router;