const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'my_password', //'test_password' or 'my_password'
  database: 'node-online-shop',
  port: 3307, //3306 or 3307
});


module.exports = pool.promise();