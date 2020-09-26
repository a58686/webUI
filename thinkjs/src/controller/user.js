const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    this.json({dfs:342})
    // return this.display();
  }
};
