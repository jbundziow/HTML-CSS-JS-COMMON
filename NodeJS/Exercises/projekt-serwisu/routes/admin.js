const express = require('express');
const config = require('../config')
const router = express.Router();

//mongodb database
const db = require('./database');
const uri = config.database.uri;

const getCurrentDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return formattedDateTime;
}


router.all('*', (req,res,next) => {
    if(!req.session.admin && req.path !== '/login') { //user not logged
        res.redirect('/admin/login')
        return;
    }
    next();
  });


router.get('/', function(req, res) {
  db(uri, 'articles', 'showAll')
  .then(data => {res.render('admin', { title: 'Admin', db: data})})
  });

router.get('/add', (req,res) => {
  res.render('add-article', {title: 'Add article'});
})
router.post('/add', (req,res) => {
  const title = req.body.title;
  const description = req.body.description;
  db(uri, 'articles', 'insert', {title, description, date: getCurrentDateTime(), dateRaw: Date.now()});
  res.redirect('/admin');
})

router.get('/delete/:id', (req,res) => {
  db(uri, 'articles', 'delete', req.params.id)
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
