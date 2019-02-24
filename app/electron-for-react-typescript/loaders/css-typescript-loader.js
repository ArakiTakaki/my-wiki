const {
  resolve
} = require('path');
const fs = require("fs");
const loaderUtils = require('loader-utils');

module.exports = function (source, map) {
  this.cacheable();
  /* debug */
  // mapを出力
  // fs.writeFile(
  //   resolve(__dirname, 'map.json'),
  //   JSON.stringify(map),
  //   err => {
  //     if (err != null){
  //       console.warn(err);
  //       return;
  //     }
  // });
  // // sourceを出力
  // fs.writeFile(
  //   resolve(__dirname, 'map.json'),
  //   JSON.stringify(source),
  //   err => {
  //     if (err != null){
  //       console.warn(err);
  //       return;
  //     }
  // });
  /* debug */

  const options = loaderUtils.getOptions(this);
  console.log('==========SOURCE==========');
  console.log(source);
  console.log('==========SOURCE==========');
  console.log('==========MAP==========');
  console.log(map);
  console.log('URL ROOT :', map.sourceRoot)
  console.log('URL ROOT :', map.sources)

  // map.sources.forEach(source => {
  //   let sourcePath = resolve(map.sourceRoot, source);
  //   console.log(sourcePath);
  // });
  console.log('==========MAP==========');
  console.log('==========LOADER UTILS==========');
  console.log(options);
  console.log('==========LOADER UTILS==========');
  console.log(loaderUtils);

  this.callback(null, source, map);
};