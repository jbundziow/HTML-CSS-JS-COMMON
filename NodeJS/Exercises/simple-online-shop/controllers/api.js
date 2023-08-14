const express = require('express');
const Product = require('../models/Product');
const { isOrderDataValidated } = require('../data_validation/orderValidation');


exports.getProductsOfIDs = (req,res,next) => {
    const ids = req.body.ids;
    if(ids === undefined || ids.length === 0) {
        res.json([])
    }
    else {
        Product.fetchProductsOfIds(ids)
        .then(response => res.json(response[0]))
        .catch(err => console.log(err))
    }
    
}

exports.submitOrder = (req,res,next) => {
    const data = req.body;
    if (isOrderDataValidated(data)) {
        // TODO: insert data to database
        // TODO: if succes: show ok
        // TODO: clear form and localstorage on frontend
        res.status(200).send('ok')
    }
    else {
        res.status(400).send('bad data')
    }
    
}