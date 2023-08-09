const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'my_password', //on 2nd PC 'test_password'
  database: 'node-online-shop',
  port: 3307, //on 2nd PC 3306
});


module.exports = pool.promise();