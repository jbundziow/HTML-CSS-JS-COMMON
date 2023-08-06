const express = require('express');
const { loginHandler, loginPostHandler, adminHandler, logoutHandler, checkLogin, getAddNewProduct, postAddNewProduct } = require('../controllers/admin');
const app = express.Router();


app.all('*', checkLogin)
app.get('/login', loginHandler)
app.post('/login', loginPostHandler)
app.get('/', adminHandler)
app.get('/add_new_product', getAddNewProduct)
app.post('/add_new_product', postAddNewProduct)



app.get('/logout', logoutHandler)


module.exports = app;