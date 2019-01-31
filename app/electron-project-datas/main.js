/*
 **  Nuxt
 */
const http = require('http');
const { Nuxt, Builder } = require('nuxt');
const config = require('./nuxt.config.js');
config.rootDir = __dirname; // for electron-builder
// Init Nuxt.js
const nuxt = new Nuxt(config);
const builder = new Builder(nuxt);
const server = http.createServer(nuxt.render);
// Build only in dev mode
let _NUXT_URL_ = '';
if (config.dev) {
  builder.build().catch(err => {
    console.error(err); // eslint-disable-line no-console
    return;
  });
  // Listen the server
  server.listen();
  _NUXT_URL_ = `http://localhost:${server.address().port}`;
  console.log(`Nuxt working on ${_NUXT_URL_}`);
} else {
  _NUXT_URL_ = `file://${__dirname}/dist/index.html`;
}

/*
 ** Electron
 */
let win = null; // Current window
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
        .get(_NUXT_URL_, res => {
          if (res.statusCode === 200) {
            win.loadURL(_NUXT_URL_);
          } else {
            setTimeout(pollServer, 300);
          }
        })
        .on('error', pollServer);
    };
    pollServer();
  } else {
    return win.loadURL(_NUXT_URL_);
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
