'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

//CREATE: /products
router.post('/', controller.post);
//PUT: /products/:id
router.put('/:id', controller.put);
//DELETE: /products
router.delete('/', controller.delete);

module.exports = router;
