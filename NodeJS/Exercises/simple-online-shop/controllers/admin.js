const express = require('express');
const { admin } = require('../utilities/config');
const Product = require('../models/Product');
const { isProductDataValidated } = require('../data_validation/productValidation');

exports.checkLogin = (req,res,next) => {
    if(!req.session.admin && req.path !== '/login') {
        res.redirect('/admin/login');
    }
    next();
}

exports.adminHandler = (req,res,next) => {
        Product.fetchAll()
        .then(data => data[0])
        .then(products => {
            res.render('admin/index', {
            products: products
            }
        );
        })
        .catch(err => console.log(err));
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