const express = require('express');
const router = express.Router();
const config = require('../config');
const db = require('./database');


/* GET home page. */
router.get('/', function(req, res) {
  db(config.database.uri, 'articles', 'showAll', 'descending')
  .then(data => {
    res.render('news', { title: 'News', db: data});
  })
  
});

module.exports = router;
