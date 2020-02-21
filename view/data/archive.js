// let fs = require('fs')

function archive(){

    return {
        human:{
            unit:require("./template/human/unit"),
            arch:require("./template/human/arch")
        },
        elf:{
            unit:require("./template/elf/unit"),
            arch:require("./template/elf/arch")
        },
        orc:{
            unit:require("./template/orc/unit"),
            arch:require("./template/orc/arch")
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






// fs.readFileSync('../CustomKeys.txt', 'utf-8')
// fs.writeFileSync('', archive)
// archive.elf.unit.弓箭手.btn[5].val='AABB'
// console.log(archive.orc.unit.牛头人.btn)


