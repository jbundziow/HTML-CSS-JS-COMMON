const express = require('express');
const Product = require('../models/Product')


exports.showHomepage = (req,res,next) => {
    Product.fetchAll()
    .then(data => data[0])
    .then(products => {
        res.render('./shop/index', {
            products: products
        })
    })
    .catch(err => console.log(err));
}