const electron = require('electron');
const {app} = electron;

let tools = false;
exports.getTemplate = function (mainWindow) {
  const template = [
    {
      label: 'Menu',
      submenu: [
        {
          label: 'Tools Call',
          click() {
            console.log(mainWindow.getTitle())
            mainWindow.loadURL('http://g.co/hangouts');
          },
        },
        {
          label: 'Regular Call',
          click() {
            console.log(mainWindow.getTitle())
            mainWindow.loadURL('https://hangouts.google.com/');
          },
        },
        {
          label: 'Quit',
          accelerator: 'CmdOrCtrl+Q',
          click() {
            force_quit = true;
            app.quit();
          }
        }
      ],
    },
  ];
  return template;
};
