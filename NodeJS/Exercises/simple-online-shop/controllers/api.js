const express = require('express');
const Product = require('../models/Product');


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