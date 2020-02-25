let fs = require("fs")

let str = fs.readFileSync('./arch.js', 'utf-8')

let pos = 1
let key = ''
let len = str.lastIndexOf('val')

while(pos < len ){

    pos = str.indexOf('key',pos)
    key = str.substr(pos + 6,4)
    pos = str.indexOf('val',pos)

    str = str.substring(0,pos + 4) + "keys['" + key + "']" + str.substring(pos + 7)
    pos += 100
}
fs.writeFileSync('./_arch.js', str)