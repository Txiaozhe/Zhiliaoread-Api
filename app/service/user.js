'use strict';

const Service = require('egg').Service;
const mysql = require('../../config/mysql');

class UserService extends Service {
  async register(uid) {
    const user = uid; // await this.ctx.db.query('select * from user where uid = ?', uid);
    return user;
  }

  async login(name, pass) {
    return await mysql.query('SELECT * FROM ?? WHERE name = ?', [
      'user', name
    ]);
  }
}

module.exports = UserService;
