let path = require('path')
let electron = require('electron')

const app = electron.app
const Menu = electron.Menu

let browserWindow = null

app.on('ready',function(){

    browserWindow = new electron.BrowserWindow({
        width: 1680, height: 900,
        minWidth: 1680, minHeight: 900,
        resizable: true,
        allowRunningInsecureContent: true,
        experimentalCanvasFeatures: true,
        icon: path.resolve('./','renderer/dist/icon_fav.ico')
    })

    // Menu.setApplicationMenu(null)

    browserWindow.loadFile(path.resolve('./','renderer/dist/index.html'))
    // browserWindow.loadFile('D:\\9. Git\\Keycraft\\renderer\\dist\\index.html')
    browserWindow.webContents.openDevTools()

    browserWindow.on('close',()=>{
        browserWindow = null
    })
    
})