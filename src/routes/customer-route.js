'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');

//GET: /customers
router.get('/', controller.get);
//GET: /customers/:id
router.get('/:id', controller.getById);
//CREATE: /customers
router.post('/', controller.post);

module.exports = router;