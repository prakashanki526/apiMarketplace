const express = require("express");
const connect = require("./config/db");
const public = require("./routes/public");
const private = require("./routes/private");

connect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/health",(req,res)=>{
    res.send(`Up and running at ${new Date()}`);
})

app.use("/public",public);
app.use("/private",private);


app.use((req,res,next) => {
    res.status(404).send("Page not found!!");
});

app.use((err,res,req,next) =>{
    res.status(500).send("Something went wrong");
});

const host = process.env.HOST || "localhost";
const port = process.env.PORT || "3003";

app.listen(port,(req,res) => {
    console.log(`Server started at http://${host}:${port}`);
})