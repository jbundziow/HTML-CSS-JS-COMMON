const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'my_password',
  database: 'node-online-shop',
  port: 3307,
});

// const fetchAll = () => {
    
// pool.execute(
//   'SELECT * FROM `products`',
//   function(err, results, fields) {
//     console.log(results[0]); // results contains rows returned by server
//     // console.log(fields); // fields contains extra meta data about results, if available
//   }
// );


// }

// fetchAll()

module.exports = pool.promise();