const express = require('express');
const {getProductsOfIDs} = require('../controllers/api');
const app = express.Router();


app.put('/products-data', getProductsOfIDs)



module.exports = app;