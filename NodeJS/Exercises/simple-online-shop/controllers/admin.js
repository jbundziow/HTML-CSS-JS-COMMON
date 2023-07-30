const express = require('express');
const { admin } = require('../utilities/config');

exports.checkLogin = (req,res,next) => {
    if(!req.session.admin && req.path !== '/login') {
        res.redirect('/admin/login');
    }
    next();
}

exports.adminHandler = (req,res,next) => {
        res.render('admin/index');
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

exports.addNewProduct = (req,res,next) => {
    res.render('admin/add_new_product');
}