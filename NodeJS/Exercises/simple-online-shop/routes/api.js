const express = require('express');
const {getProductsOfIDs, submitOrder} = require('../controllers/api');
const app = express.Router();


app.put('/products-data', getProductsOfIDs)
app.post('/submit-order', submitOrder)



module.exports = app;