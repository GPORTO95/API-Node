'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');
const authService = require('../services/auth-service');
//GET: /products
router.get('/', controller.get);
//GET: /products
router.get('/admin/:id', controller.getById);
//GET: /products/:slug
router.get('/:slug', controller.getBySlug);
//GET: /products/:tag
router.get('/tags/:tag', controller.getByTag);
//CREATE: /products
router.post('/', authService.isAdmin, controller.post);
//PUT: /products/:id
router.put('/:id', authService.isAdmin, controller.put);
//DELETE: /products
router.delete('/', authService.isAdmin, controller.delete);

module.exports = router;
