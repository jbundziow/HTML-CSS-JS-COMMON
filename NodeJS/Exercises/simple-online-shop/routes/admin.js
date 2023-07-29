const express = require('express');
const { loginHandler, loginPostHandler, adminHandler, logoutHandler } = require('../controllers/admin');
const app = express.Router();


app.get('/', adminHandler)

app.get('/login', loginHandler)
app.post('/login', loginPostHandler)

app.get('/logout', logoutHandler)


module.exports = app;