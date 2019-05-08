const electron = require('electron');
const path = require('path');

const { app, BrowserWindow } = electron;

app.on('ready', () => {

    const appWindow = new BrowserWindow({
        show: false,
        width: 500,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        }
    });

    appWindow.once('ready-to-show', () => {
        appWindow.show();
        appWindow.toggleDevTools();
    });

    appWindow.loadURL(`file://${path.join(__dirname, 'client', 'index.html')}`);

});
