import * as Electron from 'electron';
import * as CONST from '../constatnts/index';
const app = Electron.app;

let win;
const mainWindow = () => {
  win = new Electron.BrowserWindow({});
  win.maximize();
  win.loadURL(CONST.LOCAL_HOST);
};

app.on('ready', mainWindow);
app.on('window-all-closed', () => {
  app.quit();
});
