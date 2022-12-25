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

        const usertoken = await authenticate(userName, currPassword);
        res.send(usertoken);
        
        // user.findOne({ username: userName}, async function (err, found) {
        //     if (err){
        //         console.log(err);
        //         next();
        //     }
        //     else{
        //         if(found){
        //             console.log(found);
        //             console.log(found.password);
        //             if(currPassword == found.password){
        //                 console.log("Logged in");
        //             } else{
        //                 console.log("Incorrect Password");
        //             }
        //         } else{
        //             const newUser = ({
        //                 username: userName,
        //                 password: currPassword
        //             });

        //             // await user.create(newUser);
        //             res.send("User added");
        //         }
        //     }
        // });
    } catch (error) {
        console.log(error);
        next(error);
    }
})

module.exports = route;