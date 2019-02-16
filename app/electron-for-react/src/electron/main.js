const app = electron.app;
const WEBPACK_URL = 'http://localhost:3030';
const electron = require('electron');
const storage = require('electron-json-storage');
// Events
{
  require('./events/events');
}

let win = null;
const newWin = () => {
  win = new electron.BrowserWindow({});
  win.maximize();
  win.loadURL(WEBPACK_URL);
  win.on('closed', () => (win = null));
};

app.on('ready', newWin);
app.on('window-all-closed', () => {
  storage.set('log', { log: cacheLog }, err => console.error(err)); // eslint-disable-line
  app.quit();
});
// エントリーポイント
// const notifier = require('node-notifier');
// electron.ipcMain.on('client_to_electron', (event, args) => {
//   // notifier.notify({
//   //   title: 'My notification',
//   //   message: args
//   // });
//   cacheLog.push(args);
//   event.sender.send('electron_to_client', args);
// });

// electron.ipcMain.on('request_log_data', event => {
//   storage.get('log', (error, data) => {
//     console.log('データやで', data);
//     if (error) {
//       console.error(error); // eslint-disable-line
//     }
//     if (data.log != null) {
//       cacheLog = data.log;
//     }
//     event.sender.send('response_log_data', data.log);
//   });
// });

// app.on('activate', () => win === null && newWin());
