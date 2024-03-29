const express = require('express');
const { admin } = require('../utilities/config');
const Product = require('../models/Product');
const Order = require('../models/Order');
const { isProductDataValidated, isEditProductDataValidated } = require('../data_validation/productValidation');

// ############################ DO NOT DELETE OR MOVE ############################
exports.checkLogin = (req,res,next) => {
    if(!req.session.admin && req.path !== '/login') {
        res.redirect('/admin/login');
    }
    else {
        next();
    }
}
// ##############################################################################

exports.adminHandler = async (req,res,next) => {
    let products = await Product.fetchAll();
    let orders = await Order.fetchAll();

            res.render('admin/index', {
            products: products[0],
            orders: orders[0]
            })

}

exports.loginHandler = (req,res,next) => {
        res.render('admin/login')
}

exports.loginPostHandler = (req,res,next) => {
    const correctLogin = req.body.login;
    const correctPassword = req.body.password;
    
    if (admin.login !== correctLogin) {
        res.render('admin/login', {message: 'User not found!'});
    }
    else if (admin.password !== correctPassword){
        res.render('admin/login', {message: 'Bad password!'})
    }
    else {
        req.session.admin = 1;
        res.redirect('/admin');
    }
}

exports.logoutHandler = (req,res,next) => {
    delete req.session.admin;
    res.redirect('/admin/login');
}

exports.getAddNewProduct = (req,res,next) => {
    res.render('admin/add_new_product', {error: false});
}

exports.postAddNewProduct = (req,res,next) => {
    const obj = req.body
    if(isProductDataValidated(obj)) {
        const newProduct = new Product(null, obj.title, obj.description, obj.price);
        newProduct.insertOne()
        .then(res.redirect('/admin'))
        .catch(err => console.log(err))
    }
    else {
        res.render('admin/add_new_product', {error: true});
    }
}

exports.deleteProduct = (req,res,next) => {
    Product.deleteProduct(req.params.id)
    .then(res.redirect('/admin'))
    .catch(err => console.log(err))
}

exports.getEditProduct = (req,res,next) => {
    productID = req.params.id;

    Product.fetchOneProduct(productID)
    .then(data => data[0])
    .then(product => {
    if(product.length === 1) {
        let isError = false;
        if(req.query.error !== undefined) {
            isError = req.query.error.toLowerCase() === 'true'; //convert string to boolean
        }
        res.render('admin/edit_product', {error: isError, productData: product[0]})
}
    else {
        res.render('404');
    }
    })
    
}

exports.postEditProduct = (req,res,next) => {
    const {id} = req.params;
    const {title, description, price} = req.body;
    const productToEdit = new Product(id, title, description, price);
    if(isEditProductDataValidated(productToEdit)) {
    productToEdit.updateOne()
    .then(res.redirect('/admin'))
    .catch(err => console.log(err))
    }
    else {
        res.redirect(`/admin/edit/${id}?error=true`)
    }
}


exports.postEditOrderStatus = (req,res,next) => {
    const {orderId, newStatus} = req.body;
    Order.changeStatus(orderId, newStatus)
    .then(res.redirect('/admin'))
    .catch(err => {
        console.log(err);
        res.redirect('/admin')
    })
}