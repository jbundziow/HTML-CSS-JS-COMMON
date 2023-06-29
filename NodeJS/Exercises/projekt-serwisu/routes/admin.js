const express = require('express');
const config = require('../config')
const router = express.Router();

//mongodb database
const db = require('./database');
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://admin:test_password@cluster0.bqorlqk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
db(client, 'insert', {id: 'sd'});

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

router.get('/add', (req,res) => {
  res.render('add-article', {title: 'Add article'});
})
router.post('/add', (req,res) => {
  const title = req.body.title;
  const description = req.body.description;
  console.log('title: ' + title);
  console.log('description: ' + description);

  res.redirect('/admin');
})

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
