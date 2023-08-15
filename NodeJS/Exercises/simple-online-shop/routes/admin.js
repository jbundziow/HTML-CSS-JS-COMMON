const express = require('express');
const adminRoutes = require('../controllers/admin');
const app = express.Router();


app.all('*', adminRoutes.checkLogin)
app.get('/login', adminRoutes.loginHandler)
app.post('/login', adminRoutes.loginPostHandler)
app.get('/', adminRoutes.adminHandler)
app.get('/add_new_product', adminRoutes.getAddNewProduct)
app.post('/add_new_product', adminRoutes.postAddNewProduct)
app.get('/delete/:id', adminRoutes.deleteProduct)
app.get('/edit/:id', adminRoutes.getEditProduct)
app.post('/edit/:id', adminRoutes.postEditProduct)
app.post('/editOrderStatus', adminRoutes.postEditOrderStatus);


app.get('/logout', adminRoutes.logoutHandler)


module.exports = app;