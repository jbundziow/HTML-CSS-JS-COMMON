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


exports.showProductDetailsPage = (req,res,next) => {
    const reqID = Number(req.params.id);

    Product.getAllIDs()
    .then(data => data[0].map(item => item.id))
    .then(idsArr => {
        if(idsArr.includes(reqID)) {
            Product.fetchOneProduct(reqID)
            .then(data => data[0])
            .then(product => {
            res.render('./shop/productDetailsPage', {
                product: product[0]
            })
            })
            .catch(err => console.log(err))
        }
        else {
           next()
        }
    })
    .catch(err => console.log(err))
}

