const { Router } = require("express");
const route = Router();
const {authenticate, verifyToken} = require("../auth");
const user = require("../modules/users");

route.get("/",(req,res,next)=>{
    res.send("public");
})

route.post("/login",async (req,res,next)=>{
    try {
        const userName = req.body.username;
        const currPassword = req.body.password;
        const userAge = req.body.age;
        
        const foundUser = await user.findOne({username: userName});

        if(foundUser){
            if(currPassword == foundUser.password){
                const usertoken = await authenticate(userName, currPassword);
                res.send(usertoken);
            } else{
                res.send("Incorrect Password");
            }
        } else{
            const newUser = new user({
                username: userName,
                password: currPassword
            });
    
            await user.create(newUser);
            const usertoken = await authenticate(userName, currPassword);
            res.send(usertoken);
        }


    } catch (error) {
        console.log(error);
        next(error);
    }
})

module.exports = route;