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

const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');

// login controller
const login = async (req, res) =>{
    const{username, password} = req.body;
    // check in controller
    if(!username || !password){
       throw new CustomAPIError("Please provide email and password", 400);
    }

    const id = new Date().getDate()

    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'});

    res.status(200).json({msg:"user created", token});
}

// Dashboard controller
const dashboard = async (req, res) =>{

    const {id, username} = req.user;

    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg:`Hello, ${username}`,secret: `here is your lucky number: ${luckyNumber}`});
  
}

module.exports = {login, dashboard};