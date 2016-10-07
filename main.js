const electron = require('electron');
const {app, BrowserWindow, Menu} = electron;

const customMenu = require('./libs/custom-menu');

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
  });
  mainWindow.loadURL('https://hangouts.google.com/');

  const template = customMenu.getTemplate(mainWindow);
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}



app.on('ready', createWindow);
