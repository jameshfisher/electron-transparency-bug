const { app, BrowserWindow } = require('electron');
app.whenReady().then(() => {
    const window = new BrowserWindow({ transparent: true, frame: false });
    window.loadFile('page.html');
});