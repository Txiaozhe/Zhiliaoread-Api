'use strict';

const Service = require('egg').Service;
const mysql = require('../../config/mysql');

class BooksService extends Service {
  async top250(req) {
    const SQL = `SELECT id, bid, title, alias, url, img, mark, judge, abstract, info FROM books_top250 WHERE id >= ${req.start} and id < ${req.start + req.pagesize}`;
    return mysql.query(SQL);
  }
}

module.exports = BooksService;
