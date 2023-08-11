const express = require('express');
const { showHomepage, showProductDetailsPage, showCartPage } = require('../controllers/shop');
const app = express.Router();


app.get('/', showHomepage)

app.get('/cart', showCartPage)


app.get('/product/:id', showProductDetailsPage);



module.exports = app;