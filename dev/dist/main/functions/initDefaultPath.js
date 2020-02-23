
let os  = require('os')
let fs = require('fs')

module.exports = function(){

    let pathStr = (os.homedir() + '/Documents/Warcraft III/CustomKeyBindings').replace(/\\/g,"/")
    fs.writeFileSync('dist/main/template/path.default.txt',pathStr)

}