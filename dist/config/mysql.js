'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '106.15.227.154',
  port: 3306,
  user: 'root',
  password: 'Zhiliaoread.club2017',
  database: 'zhiliaoread'
});

connection.connect();

function query(sql, field) {
  return new Promise(function (resolve, reject) {
    connection.query(sql, field, function (error, results) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  connection: connection,
  query: query
};
//# sourceMappingURL=mysql.js.map