'use strict';

const crypto = require('../../utils/crypto');
const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const req = this.ctx.request.body;
    let res;
    try {
      res = await this.ctx.service.user.register(req);
    } catch (error) {
      res = 'error';
    }

    this.ctx.body = res;
  }

  async login() {
    const req = this.ctx.request.body;
    let res = {};
    try {
      const user = await this.ctx.service.user.login(req.name, req.pass);
      const enc = crypto.encrypt(req.pass);
      if(user[0].pass === enc) {
        res = {
          status: 0,
          token: 'dvewhjdkqwedqwkdjqwdjqwdlkqwdwq'
        }
      }
    } catch (e) {
      res = {
        status: 500,
        token: ''
      };
    }

    this.ctx.body = res;
  }
}

module.exports = UserController;
