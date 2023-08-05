const express = require('express');
const { showHomepage } = require('../controllers/shop');
const app = express.Router();


app.get('/', showHomepage)

app.get('/cart', (req,res,next) => {
    res.render('shop/cart')
})


module.exports = app;