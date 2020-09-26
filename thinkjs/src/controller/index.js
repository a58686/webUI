const Base = require('./base.js');
var https = require('https');
var fs = require('fs');
var iconv = require('iconv-lite');
module.exports = class extends Base {
  async indexAction() {

    return this.display();
  }
  demoAction() {

   return  'demo';
  }
};
