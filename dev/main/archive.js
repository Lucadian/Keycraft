
function setCustomPath(path){
    path = path.toString()

    let t = path[path.length-1]
    if(t === '/' || t === '\\'){
       path =  path.substr(0,path.length-1)
    }

    fs.writeFileSync(storage + '/path.custom.txt', path)
}

function archive(){
    return {
        human:{
            unit:require("main/template/human/unit"),
            arch:require("main/template/human/arch")
        },
        elf:{
            unit:require("main/template/elf/unit"),
            arch:require("main/template/elf/arch")
        },
        orc:{
            unit:require("main/template/orc/unit"),
            arch:require("main/template/orc/arch")
        },
        ud:{
            unit:require("main/template/ud/unit"),
            arch:require("main/template/ud/arch")
        },
        neutral:{
            unit:require("main/template/neutral/unit"),
            arch:require("main/template/neutral/arch")
        },
    }
}


function remap(key,val){
    pot.saved = false
    let path = storage + '/keys.js'
    let keys = require(path)
    keys[key] = val
    fs.writeFileSync(path, 'module.exports = ' + JSON.stringify(keys))
}

