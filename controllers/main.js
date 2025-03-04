
// login controller
const login = async (req, res) =>{
    res.send('Fake Login/Register/Signup');
}

// Dashboard controller
const dashboard = async (req, res) =>{
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg:`Hello, Boy`,secret: `here is your lucky number: ${luckyNumber}`});
}

module.exports = {login, dashboard};