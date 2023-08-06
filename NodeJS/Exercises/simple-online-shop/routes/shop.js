const express = require('express');
const { showHomepage, showProductDetailsPage } = require('../controllers/shop');
const app = express.Router();


app.get('/', showHomepage)

app.get('/cart', (req,res,next) => {
    res.render('shop/cart')
})


app.get('/product/:id', showProductDetailsPage);

module.exports = app;