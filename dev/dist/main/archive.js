let fs = require('fs')
let path = require('path')

function archive(){

    return {
        human:{
            unit:require(path.resolve("./dist/main/template/human/unit")),
            arch:require(path.resolve("./dist/main/template/human/arch"))
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
            arch:[]
        },
        neutral:{
            unit:[],
            arch:[]
        },
    }
}

function remap(key,val){
    let path = 'dist/main/template/keys.js'
    let keys = require(path)
    keys[key] = val
    fs.writeFileSync(path, 'module.exports = ' + JSON.stringify(keys))
}

