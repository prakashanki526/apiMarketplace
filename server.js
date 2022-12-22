const express = require("express");
const connect = require("./config/db");

connect();

const app = express();

app.get("/health",(req,res)=>{
    res.send(`Up and running at ${new Date()}`);
})


const host = process.env.HOST || "localhost";
const port = process.env.PORT || "3003";

app.listen(port,(req,res) => {
    console.log(`Server started at http://${host}:${port}`);
})