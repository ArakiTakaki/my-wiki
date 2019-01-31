const notifier = require('node-notifier');
const open = require('open');

notifier.notify(
  {
    /**
     * 通知タイトル
     */
    title: 'node-notifier',
    /**
     * 通知メッセージ
     */
    message: 'Hi',
    /**
     * 通知のアイコンを設定する（初期だとシェルのアイコンなのでちょっと寂しい)
     */
    icon: 'http://heroaca.com/images/special/twittericon2/icon02.jpg',
    sound: true, // ファイルを記述することもできる

    /**
     * 通知がきてもクリックするまでコールバックを起動しない。(本来は通知がきた瞬間にコールバックが起動する)
     */
    wait: true
  },
  function() {
    open('https://qiita.com');
  }
);
