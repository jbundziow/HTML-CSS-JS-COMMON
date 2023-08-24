const express = require('express');
const Product = require('../models/Product')


exports.showHomepage = async (req,res,next) => {
    try {
    const products = await Product.fetchAll();
    res.render('./shop/index', {
        products: products[0]
    })
    }
    catch (err) {
        console.log(err);
    }
}



exports.showProductDetailsPage = async (req,res,next) => {
    try {
    const reqID = Number(req.params.id);

    const allIDs = await Product.getAllIDs()
    const idsArr = allIDs[0].map(item => item.id)
   
    if(idsArr.includes(reqID)) {
        const product = await Product.fetchOneProduct(reqID)

        res.render('./shop/productDetailsPage', {
            product: product[0][0]
        })

    }
    else {
        next()
    }
    }
    catch(err) {
        console.log(err);
        res.redirect('404')
    }
    }

exports.showCartPage = (req,res,next) => {
    res.render('shop/cart')
}