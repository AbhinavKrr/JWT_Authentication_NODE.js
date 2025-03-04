// check username, password in post(login) request
// if exist create new JWT
// sent to client end

// setup authentication so only the request with jwt cab access the dashbard



// login controller
const login = async (req, res) =>{
    console.log(req.body);
    res.send('Fake Login/Register/Signup');
}

// Dashboard controller
const dashboard = async (req, res) =>{
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg:`Hello, Boy`,secret: `here is your lucky number: ${luckyNumber}`});
}

module.exports = {login, dashboard};