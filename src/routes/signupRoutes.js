const express = require('express');
const signupRouter = express.Router();

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
            console.log(req.body);
        }
    );

    return signupRouter;
}

module.exports = router;