const loaderUtils = require('loader-utils');
module.exports = function (source, map) {
  this.cacheable();
  const config = loaderUtils.getOptions(this);
  // console.log('============================================================')
  // console.log(`====================== ${config.now} ===========================`)
  // console.log('============================================================')
  // console.log('source');
  // console.log(source);
  // console.log('map');
  // console.log(JSON.stringify(map));
  // console.log('============================================================')
  // console.log(`====================== ${config.now} ===========================`)
  // console.log('============================================================')
  this.callback(null, source, map);
}