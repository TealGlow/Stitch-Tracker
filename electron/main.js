// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow () {
    const startUrl = "http://localhost:3000";
    const window = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    window.loadURL(startUrl);
    window.show();
    window.webContents.openDevTools({ mode: 'detach' });
  }
  

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});