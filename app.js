const express = require('express');
require('dotenv').config();
const unknown = require('./middleware/uknown-routes');
const errorhandler = require('./middleware/errorhandler');
const mainRouter = require('./routes/main');

const app = express();

// AYSC WRAPPER MIDDLE WARE FUNCTIONANLITY IN THIS BELOW PACKAGE
require('express-async-errors');


app.use(express.json());
app.use(express.static('./public'));

// Routes
app.use('/api/v1', mainRouter);

// Middlewares
app.use(unknown);
app.use(errorhandler);





portNo = process.env.PORT || 5000


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
