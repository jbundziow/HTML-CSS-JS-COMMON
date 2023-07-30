const express = require('express');
const { loginHandler, loginPostHandler, adminHandler, logoutHandler, checkLogin, addNewProduct } = require('../controllers/admin');
const app = express.Router();


app.all('*', checkLogin)
app.get('/login', loginHandler)
app.post('/login', loginPostHandler)
app.get('/', adminHandler)
app.get('/add_new_product', addNewProduct)



app.get('/logout', logoutHandler)


module.exports = app;