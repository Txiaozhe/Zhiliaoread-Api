'use strict';

const Controller = require('egg').Controller;

class BooksController extends Controller {
  async top250() {
    const req = this.ctx.request.body;
    let res;
    try {
      res = {
        code: 0,
        data: await this.ctx.service.books.top250(req)
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

module.exports = BooksController;
