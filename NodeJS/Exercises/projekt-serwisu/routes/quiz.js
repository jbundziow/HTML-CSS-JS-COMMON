const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('quiz', { title: 'Quiz' });
});

router.post('/', function(req, res) {
  console.log(req.body.quizAnswer);
  res.render('quiz', { title: 'Quiz' });
});

module.exports = router;
