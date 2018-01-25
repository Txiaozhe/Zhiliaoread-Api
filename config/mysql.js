'use strict';

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '106.15.227.154',
  port: 3306,
  user: 'root',
  password: 'zhiliaoread-club',
  database: 'zhiliao',
});

connection.connect();

function query(sql, field) {
  return new Promise((resolve, reject) => {
    connection.query(sql, field, (error, results) => {
      if(error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  })
}

module.exports = {
  connection,
  query
};
