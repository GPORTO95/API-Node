'use strict';
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get= async() => {
    var res = await Customer.find({});
    return res;
}

exports.getById = async(id) => {
    const res = await Customer.findById(id);
    return res;
}

exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save();
}