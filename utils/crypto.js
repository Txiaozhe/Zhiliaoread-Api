/**
 * Creator: Tang Xiaoji
 * Time: 2017-12-10
 */

const crypto = require('crypto');

const secret = 'sdfjgkjha.smnkqjwhbsjnwsqjkw';

function encrypt(pass) {
  return crypto.createHmac('sha256', secret)
    .update(pass)
    .digest('hex');
}

module.exports = {
  encrypt
};
