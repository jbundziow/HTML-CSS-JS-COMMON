const express = require('express');
const config = require('../config')
const router = express.Router();

router.all('*', (req,res,next) => {
    if(!req.session.admin && req.path !== '/login') { //user not logged
        res.redirect('/admin/login')
        return;
    }
    next();
  });


router.get('/', function(req, res) {
        res.render('index', { title: 'Admin' });
  });

router.get('/login', function(req, res) {
    res.render('login', { title: 'Login' });
  });

router.post('/login', function(req, res) {
    const login = config.loginData.correctLogin;
    const password = config.loginData.correctPassword;

    if (req.body.login === login && req.body.password === password) {
        req.session.admin =1; //set cookie
        res.redirect('/admin')
    }
    else {
        res.render('login', {title: 'Wrong login data!'})
    }
    
  });

module.exports = router;
