const jwt = require("jsonwebtoken");


async function authenticate(username,password, callback){
    const payload = {username: username};
    let result;

    if(!username || !password){
        result = "Invalid credentials";
        return;
    }

    result = await generateAuthToken(payload);
     return ({token: result});
}

async function generateAuthToken(payload){
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET,{
        algorithm: "HS256",
        expiresIn: 50
    });

    return accessToken;
}

async function verifyToken(token,callback){
    try {
        callback(null, jwt.verify(token, process.env.ACCESS_TOKEN_SECRET));
    } catch (error) {
        console.log(error);
        return {};
    }
}

module.exports = {authenticate, verifyToken};