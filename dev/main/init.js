const storage = require('main/const/storage')


if(!fs.existsSync(storage)){

    mkdirsSync(storage)

    let files = fs.readdirSync('config')

    files.forEach((file)=>{
        fs.copyFileSync('config/' + file,storage + '/' + file)
    })

    let defaultPathStr = (os.homedir() + '/Documents/Warcraft III/CustomKeyBindings').replace(/\\/g,"/")
    fs.writeFileSync(storage + '/path.default.txt',defaultPathStr)
    fs.writeFileSync(storage + '/path.custom.txt',defaultPathStr)
}


function mkdirsSync (dirname){
    if (fs.existsSync(dirname)) {
        return true
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname)
            return true
        }
    }
}