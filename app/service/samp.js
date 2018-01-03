'use strict';

const Service = require('egg').Service;
const mysql = require('../../config/mysql');

class SampService extends Service {
  async register(req) {
    const SQL = `INSERT INTO \`samp\` (\`name\`, \`phone\`, \`brand\`, \`duration\`, \`location\`, \`area\`, \`plan\`) VALUES ('${req.name}', '${req.phone}', '${req.brand}', '${req.duration}', '${req.location}', '${req.area}', '${req.plan}')`;
    return mysql.query(SQL);
  }
}

module.exports = SampService;
