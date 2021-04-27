'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');
const authService = require('../services/auth-service');

//GET: /customers
router.get('/', controller.get);
//GET: /customers/:id
router.get('/:id', controller.getById);
//POST: /customers/authenticate
router.post('/authenticate', controller.authenticate);
//POST: /customers/refresh-token
router.post('/refresh-token', authService.authorize, controller.refreshToken);
//POST: /customers
router.post('/', controller.post);

module.exports = router;