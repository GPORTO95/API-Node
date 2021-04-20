'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

try {
    // Connect to the MongoDB cluster
     mongoose.connect(
        'mongodb+srv://gabriel:gabriel@cluster0.tapvz.mongodb.net/node-store?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }
// Carrega os models
const Product = require('../src/models/product');
const Customer = require('../src/models/customer');
const Order = require('../src/models/order');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);

module.exports = app;