const express = require('express');
const Product = require('../models/Product');
const { isOrderDataValidated } = require('../data_validation/orderValidation');
const Order = require('../models/Order');


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
    let productsTitles = [];
    let productsPrices = [];
    let finalPrice = 0;
    const orderDate = Date.now();
    const orderStatus = 0;
    if (isOrderDataValidated(data)) {
        Product.fetchProductsOfIds(data.productIDsInCart)
        .then(fetchedProducts => {
            productsTitles = fetchedProducts[0].map(product => product.title)
            productsPrices = fetchedProducts[0].map(product => Number(product.price.toFixed(2)))

            const assumedLength = data.productIDsInCart.length;
            if(data.productQtyInCart.length === assumedLength && productsTitles.length === assumedLength && productsPrices.length === assumedLength) {
                for (let i = 0; i < productsPrices.length; i++) {
                    finalPrice += data.productQtyInCart[i]*productsPrices[i];
                }
                const newOrder = new Order(1, data.name, data.surname, data.productIDsInCart, data.productQtyInCart, productsTitles, productsPrices, finalPrice, orderDate, orderStatus);
                newOrder.insertOne()
                .then(result => {
                    if(result[0].affectedRows) {
                        res.status(200).send('Success! Your order has been sent to the administrator.')
                    }
                })
                .catch((err) => res.status(400).send(err));
            }
            else {
                res.status(400).send('There is a problem with fetching data from the database.')
            }
        })
    }
    else {
        res.status(400).send('You have passed a bad data!')
    }
    
}