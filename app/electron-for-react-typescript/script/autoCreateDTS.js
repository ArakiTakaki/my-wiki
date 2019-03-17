const { resolve } = require('path');
const configPath = resolve('watcher.config.json');
const a = require(configPath);
console.log(a);


function _createIndex(dirPath) {
  lib.readFiles(dirPath)
    .then((values) => {
      // データは1個だけの想定
      const { dir, files } = values[0];
      const vueFiles = files.map((fileName) => fileName.replace(/\.vue$/, ''));
      const importStr = vueFiles.map((vueFile) => `import ${vueFile} from './${dir}/${vueFile}.vue';`).join('\n');
      const exportStr = 'export default {\n' + vueFiles.map((vueFile) => '  ' + vueFile).join(',\n') + '\n};';

      // 実際に書き込む文字列を生成
      const codeStr = lib.AUTO_COMMENT_STR + '\n' + importStr + '\n\n' + exportStr + '\n';
      fs.writeFile(path.resolve(dirPath, 'index.js'), codeStr, (err) => {
        if (err) {
          console.error(err);
        }
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
/**
 * pagesファイルの監視してIndexを自動で更新する
 * @param {string} dirPath - 監視対象のディレクトリパス
 */
function autoCreateIndex(dirPath) {
  const relativePath = path.relative(__dirname, dirPath);
  // ファイルの監視
  gaze([`${relativePath}/**/*`, `!${relativePath}/index.js`], { cwd: __dirname }, (err, watcher) => {
    if (err) throw err;
    watcher.on('all', () => {
      _createIndex(dirPath);
    });
  });
  // 先に一度Indexを生成する
  _createIndex(dirPath);
}