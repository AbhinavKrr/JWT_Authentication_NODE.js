// check username, password in post(login) request
// if exist create new JWT
// sent to client end

// setup authentication so only the request with jwt cab access the dashbard

const CustomAPIError = require('../errors/custom-error');

// login controller
const login = async (req, res) =>{
    const{username, password} = req.body;
    // check in controller
    if(!username || !password){
       throw new CustomAPIError("Please provide email and password", 400);
    }

    res.send('Fake Login/Register/Signup');
}

// Dashboard controller
const dashboard = async (req, res) =>{
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg:`Hello, Boy`,secret: `here is your lucky number: ${luckyNumber}`});
}

module.exports = {login, dashboard};