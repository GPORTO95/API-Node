'use strict';

const express = require('express');
const router = express.Router();

//CREATE: /products
router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});
//PUT: /products/:id
router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});
//DELETE: /products
router.delete('/', (req, res, next) => {
    res.status(200).send({item: req.body});
});

module.exports = router;
