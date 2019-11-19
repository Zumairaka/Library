const express = require('express');
const loginRouter = express.Router();
const {loginModel} = require('../models/loginModel');

function router(nav){
    loginRouter.route('/')
        .get((req,res)=>{
            res.render(
                'login',
                {
                    nav,
                    title : 'Login'
                }
            );
        }
    );

    loginRouter.route('/save')
        .post((req,res) =>{
            var login = new loginModel(req.body);
            login.save((error,data)=>{
                if(error){
                    res.json({"Status":"Error"});
                    throw error;
                }
                else{
                    res.json({"Status":"Success"});
                }
            });
        }
    );

    loginRouter.get('/viewAllapi',(req,res)=>{
        loginModel.find((error,data)=>{
            if(error){
                throw error;
            }
            else{
                res.send(data);
            }
        });
    });

    return loginRouter;
}

module.exports = router;