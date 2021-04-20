'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');

//CREATE: /customers
router.post('/', controller.post);

module.exports = router;