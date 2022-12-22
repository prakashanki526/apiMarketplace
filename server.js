const express = require("express");

const app = express();


const host = process.env.HOST || "localhost";
const port = process.env.PORT || "3003";

app.listen(port,(req,res) => {
    console.log(`Server started at http://${host}:${port}`);
})