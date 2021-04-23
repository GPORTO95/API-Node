'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');

//GET: /customers
router.get('/', controller.get);
//GET: /customers/:id
router.get('/:id', controller.getById);
//POST: /customers/authenticate
router.post('/authenticate', controller.authenticate);
//CREATE: /customers
router.post('/', controller.post);

module.exports = router;