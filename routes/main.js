const express = require('express');
const mainRouter = express.Router();

const {login, dashboard} = require('../controllers/main');




mainRouter.route('/dashboard').get(dashboard);
mainRouter.route('/login').post(login);

module.exports = mainRouter;