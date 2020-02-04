let path = require('path')
let electron = require('electron')

const app = electron.app
const Menu = electron.Menu

let browserWindow = null

app.on('ready',function(){

    browserWindow = new electron.BrowserWindow({
        width: 1280, height: 800,
        minWidth: 1280, minHeight: 800,
        resizable: true,
        allowRunningInsecureContent: true,
        experimentalCanvasFeatures: true,
        icon: './renderer/src/img/brain.png'
    })

    Menu.setApplicationMenu(null)

    browserWindow.loadFile('./renderer/index.html')

    // browserWindow.webContents.openDevTools()

    browserWindow.on('close',()=>{
        browserWindow = null
    })
    
})