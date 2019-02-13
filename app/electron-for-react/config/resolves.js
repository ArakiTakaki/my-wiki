const path = require('path');
console.log(path.resolve(__dirname, '../src/js/'));

module.exports = {
  extensions: [".js", ".jsx"]
  // alias: { '~': path.resolve(__dirname, '../src/js/'), 'sass': path.resolve(__dirname, '../src/sass') }
};
