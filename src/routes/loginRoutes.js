const express = require('express');
const loginRouter = express.Router();
const {signUpModel} = require('../models/signUpModel');

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

    loginRouter.post('/validate',async (req,res) =>{
            var username = req.body.uname;
            var password = req.body.password;
            await signUpModel.findOne({$and:[{'uname':username},{'password':password}]},(error,data)=>{
                if(error){
                    res.json({"Status":"Error"});
                    throw error;
                }
                else if(!data){
                    res.json({"Status":"Invalid Username or Password"});
                    }
                else{
                    res.json({"Status":"Successfully Logged In"});
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