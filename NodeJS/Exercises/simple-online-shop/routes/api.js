const express = require('express');
const {getProductsOfIDs} = require('../controllers/api');
const app = express.Router();


app.put('/data', getProductsOfIDs)



module.exports = app;