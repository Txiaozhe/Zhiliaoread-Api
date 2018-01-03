'use strict';

const Controller = require('egg').Controller;

class SampController extends Controller {
  async register() {
    const req = this.ctx.request.body;
    let res;
    try {
      res = {
        code: 0,
        data: await this.ctx.service.samp.register(req)
      };
    } catch (err) {
      res = {
        code: 500,
        data: err.toString()
      }
    }

    this.ctx.body = res;
  }
}

module.exports = SampController;
