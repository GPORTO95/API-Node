'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');

//GET: /orders 
router.get('/', controller.get);
//CREATE: /orders
router.post('/', controller.post);

module.exports = router;