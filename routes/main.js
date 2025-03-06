const express = require('express');
const mainRouter = express.Router();

const {login, dashboard} = require('../controllers/main');

const authenticationMiddleware = require('../middleware/auth');


mainRouter.route('/dashboard').get(authenticationMiddleware ,dashboard);
mainRouter.route('/login').post(login);

module.exports = mainRouter;