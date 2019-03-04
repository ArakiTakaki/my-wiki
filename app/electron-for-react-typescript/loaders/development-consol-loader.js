const {
  resolve
} = require('path');
const fs = require("fs");
const loaderUtils = require('loader-utils');
const VARIABLE_DTS = 'export const {{className}}: string;\n';

module.exports = function (source, map) {
  this.cacheable();
  const sourcePath = resolve(map.sourceRoot, map.sources[0] + '.d.ts');
  const options = loaderUtils.getOptions(this);

  // node_modulesのsourcepathは必要ない
  if ( /node_modules/.test(map.sourceRoot) ) {
    this.callback(null, source, map);
  }

  console.log(source);
  console.log(map);

  this.callback(null, source, map);
};