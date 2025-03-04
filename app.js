const express = require('express');
const unknown = require('./middleware/uknown-routes');
const errorhandler = require('./middleware/errorhandler');
const mainRouter = require('./routes/main');
require('dotenv').config();

const app = express();

// AYSC WRAPPER MIDDLE WARE FUNCTIONANLITY IN THIS BELOW PACKAGE
require('express-async-errors');

// Middlewares - 1
app.use(express.json());
app.use(express.static('./public'));

// Routes
app.use('/api/v1', mainRouter);

//This should be placed after Routes
// Middlewares - 2
app.use(unknown);
app.use(errorhandler);



portNo = process.env.PORT || 3000


const start = async ()=>{
    try{
        app.listen(portNo, ()=>{
            console.log("server is running on port "+ portNo);
        })
    }catch(err){
        console.log("something went wrong");
    }
}

start();
