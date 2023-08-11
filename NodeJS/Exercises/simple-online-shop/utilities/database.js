const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'test_password', //on 2nd PC 'my_password'
  database: 'node-online-shop',
  port: 3306, //on 2nd PC 3307
});


module.exports = pool.promise();