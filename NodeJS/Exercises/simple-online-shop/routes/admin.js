const express = require('express');
const { loginHandler, loginPostHandler, adminHandler, logoutHandler, checkLogin } = require('../controllers/admin');
const app = express.Router();


app.all('*', checkLogin)
app.get('/login', loginHandler)
app.post('/login', loginPostHandler)
app.get('/', adminHandler)



app.get('/logout', logoutHandler)


module.exports = app;