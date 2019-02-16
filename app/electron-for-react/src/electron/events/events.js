const electron = require('electron');
const C = require('../../constants/global');
const { MESSAGE } = C.IPC;

electron.ipcMain.on(MESSAGE.CLIENT_TO_SERVER, (event, args) => {
  console.log('test');
  console.log(args);
  event.sender.send(MESSAGE.SERVER_TO_CLIENT, args);
});
