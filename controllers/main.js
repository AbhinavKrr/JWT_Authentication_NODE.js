// check username, password in post(login) request
// if exist create new JWT
// sent to client end

// setup authentication so only the request with jwt cab access the dashbard

// login req -> response + signed JWT , for each dashboard req + signed JWT -> response

// JWT json web token encoded in base64url
// HEADER, PAYLOAD, SIGNATURE
// HEADER=> {Type of Token(JWT), signing algorith(HMAC SHA256 RSA)} encoded in base64url
// PAYLOAD=> contains Claims=> statements about the entity=>user and data->registerd, public, private claims
// Signature=> actual signature secret
// node package=> jsonwebtoken
// JWT

const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');

// login controller
const login = async (req, res) =>{
    const{username, password} = req.body;
    // check in controller
    if(!username || !password){
       throw new CustomAPIError("Please provide email and password", 400);
    }

    const token = jwt.sign({})


    res.send('Fake Login/Register/Signup'); 
}

// Dashboard controller
const dashboard = async (req, res) =>{
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg:`Hello, Boy`,secret: `here is your lucky number: ${luckyNumber}`});
}

module.exports = {login, dashboard};