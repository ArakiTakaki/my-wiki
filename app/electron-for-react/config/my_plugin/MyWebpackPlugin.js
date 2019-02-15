const exec = require('child_process').exec;
class MyWebpackPlugin {
  // コンパイラを引数として受ける apply メソッド
  apply(compiler) {
    compiler.plugin('compile', params => {
      console.log('compile開始時の処理');
    });

    compiler.plugin('compilation', (compilation, params) => {
      // compirationもまたpluginメソッドを持つので、各イベントに処理を追加できる。
      compilation.plugin('optimize', () => {
        console.log('最適化開始字の処理');
      });
    });

    // 最後に出力されるっぽい？
    compiler.plugin('emit', (compilation, callback) => {
      // compilationがあるので、こちらでも色々設定できるんじゃないの
      console.log('emit(アセット出力)開始時の処理');
      callback();
    });

    compiler.plugin('after-emit', (compilation, callback) => {
      console.log('最終出力');
      // callbackをやらないと実行が止まるっぽい
      exec('open http://localhost:3030');
      callback();
    });

    compiler.plugin('done', (stats) => {
      console.log('DONE!');
    });
  }
}

module.exports = MyWebpackPlugin;