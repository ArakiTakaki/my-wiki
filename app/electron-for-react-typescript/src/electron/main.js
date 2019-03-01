const electron = require('electron');
const { LOCAL_HOST } = require('../constatnts');
const app = electron.app;

let win = null;
const mainWindow = () => {
  win = new electron.BrowserWindow({});
  win.maximize();
  win.loadURL(LOCAL_HOST);
};

app.on('ready', mainWindow);
app.on('window-all-closed', () => {
  app.quit();
});
