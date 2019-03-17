const {
  resolve
} = require('path');
const fs = require("fs");
const loaderUtils = require('loader-utils');
const VARIABLE_DTS = 'export const {{className}}: string;\n';

/**
 * リストのアイテムをユニークにする。
 * @param {Array<any>} itemList - ユニークにしたいリスト
 */
const unique = (itemList) => {
  return itemList.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

/**
 * cssからクラスを抽出する
 * @param {string} source - css sourceを流し込む
 */
const cssClassExtraction = (source) => {
  // . から始まり、 { か 空白 の間を抽出する。
  let classNameList = source.match(/\.+([a-z]|[A-Z]|\-|\_){1,}/g);
  if (classNameList == null) {
    return [];
  }

  // Classに使える様に整形
  let itemList = classNameList.map(className => {
    return className.replace(/(\s|\{|\.)/g, '');
  });

  return unique(itemList);
}

module.exports = function (source, map) {
  this.cacheable();
  console.log('sourceRoot', map.sourceRoot);
  const sourcePath = resolve(map.sourceRoot, map.sources[0] + '.d.ts');
  const options = loaderUtils.getOptions(this);

  // node_modulesのsourcepathは必要ない
  console.log(sourcePath);
  if ( /node_modules/.test(map.sourceRoot) ) {
    this.callback(null, source, map);
  }

  /**
   * sourceの中身が無い場合はスキップする
   */
  if (source == null || source == '') {
    this.callback(null, source, map);
    return;
  }

  // classNameを抽出したリスト
  let classNameList = [];
  // DTSのファイルを出力するための文字列格納場所
  let outputDTS = '';

  /**
   * sources から pクラスネームを算出する。
   */
  map.sourcesContent.forEach(source => {
    classNameList = [...cssClassExtraction(source), ...classNameList];
  });
  // クラスネームがない場合は必要ない。
  if (classNameList.length === 0){
    this.callback(null, source, map);
    return;
  }

  /**
   *
   *
   * d.tsの中身をpushしていく。
   */
  classNameList.forEach(className => {
    outputDTS += VARIABLE_DTS.replace('{{className}}', className);
  });

  /**
   * ファイルへの書き込みをおこなう。
   */
  fs.writeFile(sourcePath, outputDTS, error => {
    if (error != null) {
      console.error(error);
      return;
    }
  });
  this.callback(null, source, map);
};