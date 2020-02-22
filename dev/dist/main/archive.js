
require('dist/main/functions/initDefaultPath')() //为前端生成一个默认目录 path.default.txt

function setCustomPath(path){
    fs.writeFileSync('dist/main/template/path.custom.txt', path.toString())
}

function archive(){

    return {
        human:{
            unit:require("dist/main/template/human/unit"),
            arch:require("dist/main/template/human/arch")
        },
        elf:{
            unit:require("dist/main/template/elf/unit"),
            arch:require("dist/main/template/elf/arch")
        },
        orc:{
            unit:require("dist/main/template/orc/unit"),
            arch:require("dist/main/template/orc/arch")
        },
        ud:{
            unit:[],
            arch:require("dist/main/template/ud/arch")
        },
        neutral:{
            unit:[],
            arch:[]
        },
    }
}

function remap(key,val){
    pot.saved = false
    let path = 'dist/main/template/keys.js'
    let keys = require(path)
    keys[key] = val
    fs.writeFileSync(path, 'module.exports = ' + JSON.stringify(keys))
}

