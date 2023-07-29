const express = require('express');
const app = express.Router();


app.get('/', (req,res,next) => {
    res.send('hello admin')
})


module.exports = app;