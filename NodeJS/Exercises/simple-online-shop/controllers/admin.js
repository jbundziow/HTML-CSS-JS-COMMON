const express = require('express');
const { admin } = require('../utilities/config');

exports.adminHandler = (req,res,next) => {
    console.log(req.session.admin);
    if(req.session.admin) {
        res.render('admin/index');
    }
    else {
        res.redirect('/admin/login')
    }
}

exports.loginHandler = (req,res,next) => {
    console.log(req.session.admin);
    if(req.session.admin) {
    res.redirect('/admin')
    }
    else {
    res.render('admin/login')
    }
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
        req.session.admin = 1; //set cookie
        console.log(req.session.admin);
        // res.cookie('user', correctLogin, { maxAge: 900000, httpOnly: true });
        res.redirect('/admin'); // Redirect to a dashboard page after successful login
        // res.render('shop/cart')
    }
}

exports.logoutHandler = (req,res,next) => {
    delete req.session.admin;
    res.redirect('/admin/login');
}