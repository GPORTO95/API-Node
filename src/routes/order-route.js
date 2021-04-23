'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');
const authService = require('../services/auth-service');

//GET: /orders 
router.get('/', authService.authorize, controller.get);
//CREATE: /orders
router.post('/', authService.authorize, controller.post);

module.exports = router;