const {app, BrowserWindow} = require('electron')

    /** Creates a new Browser Window */
    function createWindow () {

      win = new BrowserWindow({Width: 2000, Height: 2000})

      win.loadFile('../Studious/below_main/home.html')

      win.webContents.openDevTools()

      win.on('closed', () => {
        win = null
      })

    }

    app.on('ready', createWindow)

    // Quit when all windows are closed.
    app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })

    app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow()
    }
  })
