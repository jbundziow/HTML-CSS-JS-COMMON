const express = require('express');
const router = express.Router();
const config = require('../config');
const db = require('./database');


/* GET home page. */
router.get('/', function(req, res) {
  db(config.database.uri, 'articles', 'showAll', 'descending')
  .then(data => {
    res.render('news', { title: 'News', db: data, searchText: ''});
  })
});

router.post('/', (req,res) => {
  db(config.database.uri, 'articles', 'showAll', {search: req.body.search})
  .then(data => res.render('news', { title: 'News', db: data, searchText: req.body.search}));
})

module.exports = router;
