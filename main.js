const { app, BrowserWindow, screen, ipcMain } = require('electron');

function sleep() {
    return new Promise(resolve => setTimeout(resolve, 500));
}

app.whenReady().then(async () => {
    const window = new BrowserWindow({ transparent: true, frame: false });
    window.loadFile('page.html');
    await sleep();
    window.setPosition(-50, -50);
    await sleep();
    window.setPosition(50,  50);
});