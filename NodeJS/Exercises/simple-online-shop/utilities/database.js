const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'test_password',
  database: 'node-online-shop',
  port: 3306,
});


module.exports = pool.promise();