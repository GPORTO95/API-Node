'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');
//GET: /products
router.get('/', controller.get);
//GET: /products
router.get('/admin/:id', controller.getById);
//GET: /products/:slug
router.get('/:slug', controller.getBySlug);
//GET: /products/:tag
router.get('/tags/:tag', controller.getByTag);
//CREATE: /products
router.post('/', controller.post);
//PUT: /products/:id
router.put('/:id', controller.put);
//DELETE: /products
router.delete('/', controller.delete);

module.exports = router;
