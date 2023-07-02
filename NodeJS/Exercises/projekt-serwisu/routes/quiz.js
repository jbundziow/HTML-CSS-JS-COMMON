const express = require('express');
const router = express.Router();
const db = require('./database');
const config = require('../config')
const uri = config.database.uri;



/* GET home page. */
router.get('/', function(req, res) {
  if (!req.session.isVoted) {
  res.render('quiz', { title: 'Quiz' });
  }
  else {

    db(config.database.uri, 'quiz1', 'showAll')
    .then(data => {
    let sum = 0;
    let answers = [];
    for (const [key, value] of Object.entries(data[0])) {
      if(key !== '_id') {
        answers.push(value);
        sum+=value;
      }
    }
    answers = answers.map(val => (val/sum*100).toFixed(2)); //show in %

    
    res.render('quiz_answers', { title: 'Quiz', answer: answers});
    })
  }

});

router.post('/', function(req, res) {

  db(config.database.uri, 'quiz1', 'showAll')
  .then(data => data[0])
  .then(data => {
    db(uri, 'quiz1', 'update', {key: req.body.quizAnswer, value: data[req.body.quizAnswer]+=1})

    let sum = 0;
    let answers = [];
    for (const [key, value] of Object.entries(data)) {
      if(key !== '_id') {
        answers.push(value);
        sum+=value;
      }
    }
    answers = answers.map(val => (val/sum*100).toFixed(2)); //show in %
    req.session.isVoted = 1; //set cookie
    res.render('quiz_answers', { title: 'Quiz', answer: answers});
  })
  
});

module.exports = router;
