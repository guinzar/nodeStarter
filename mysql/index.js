const mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodeStarter'
});

con.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log('MySQL connected!');
});

module.exports = con;
