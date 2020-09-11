const { app, BrowserWindow } = require('electron');
app.whenReady().then(() => {
    const window = new BrowserWindow({ transparent: true, frame: false });
    window.loadFile('page.html');
    window.on('move', (ev) => {
        // Awful hack to force repainting the whole window
        const b = window.getBounds();
        window.setBounds({ width: b.width+1, height: b.height+1 });
        window.setBounds({ width: b.width, height: b.height });
    });
});