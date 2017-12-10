'use strict';

/**
 * Creator: Tang Xiaoji
 * Time: 2017-12-10
 */

var crypto = require('crypto');

var secret = 'sdfjgkjha.smnkqjwhbsjnwsqjkw';

function encrypt(pass) {
  return crypto.createHmac('sha256', secret).update(pass).digest('hex');
}

module.exports = {
  encrypt: encrypt
};
//# sourceMappingURL=crypto.js.map