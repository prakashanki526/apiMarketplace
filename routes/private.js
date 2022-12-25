const {Router} = require("express");
const route = Router();

route.get("/",(req,res,next)=>{
    res.send("private");
})

module.exports = route;