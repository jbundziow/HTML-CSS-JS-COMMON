const express = require('express');
const app = express.Router();


app.get('/', (req,res,next) => {
    res.render('shop/index')
})

app.get('/cart', (req,res,next) => {
    res.render('shop/cart')
})


module.exports = app;