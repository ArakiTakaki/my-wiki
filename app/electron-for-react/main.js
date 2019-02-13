const WEBPACK_URL = 'http://localhost:3030';
let win = null; // Current window
const http = require('http');
const electron = require('electron');
const app = electron.app;
const storage = require('electron-json-storage');

let cacheLog = [];

const newWin = () => {
  win = new electron.BrowserWindow({});
  win.maximize();
  win.on('closed', () => (win = null));
  if (config.dev) {
    const pollServer = () => {
      http
        .get(WEBPACK_URL, res => {
          if (res.statusCode === 200) {
            win.loadURL(WEBPACK_URL);
          } else {
            setTimeout(pollServer, 300);
          }
        })
        .on('error', pollServer);
    };
    pollServer();
  } else {
    return win.loadURL(WEBPACK_URL);
  }
  return null;
};

const notifier = require('node-notifier');
electron.ipcMain.on('client_to_electron', (event, args) => {
  // notifier.notify({
  //   title: 'My notification',
  //   message: args
  // });
  cacheLog.push(args);
  event.sender.send('electron_to_client', args);
});

electron.ipcMain.on('request_log_data', event => {
  storage.get('log', (error, data) => {
    console.log('データやで', data);
    if (error) {
      console.error(error); // eslint-disable-line
    }
    if (data.log != null) {
      cacheLog = data.log;
    }
    event.sender.send('response_log_data', data.log);
  });
});

app.on('ready', newWin);
app.on('window-all-closed', () => {
  storage.set('log', { log: cacheLog }, err => console.error(err)); // eslint-disable-line
  app.quit();
});
app.on('activate', () => win === null && newWin());
