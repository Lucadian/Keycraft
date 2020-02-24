const storage = require('main/const/storage')
let keys = require(storage + '/keys')

let { 互动 } = require("../general_arch")


let arch = {
    地精商店:{
        ico:[2,5],
        btn:[
            互动
        ]
    },
    酒馆:{
        ico:[1,5],
        btn:[
            {
                tag:'娜迦',
                tip:'',
                ico:[1,1],
                pos:[1,2],
                key:['Nngs'],
                val:keys['Nngs'],
            },
            {
                tag:'黑暗游侠',
                tip:'',
                ico:[2,1],
                pos:[2,2],
                key:['Nbrn'],
                val:keys['Nbrn'],
            },
            {
                tag:'熊猫酒仙',
                tip:'',
                ico:[3,1],
                pos:[3,2],
                key:['Npbm'],
                val:keys['Npbm'],
            },
            {
                tag:'火焰领主',
                tip:'',
                ico:[4,1],
                pos:[4,2],
                key:['Nfir'],
                val:keys['Nfir'],
            },
            {
                tag:'深渊魔王',
                tip:'',
                ico:[1,2],
                pos:[1,3],
                key:['Nplh'],
                val:keys['Nplh'],
            },
            {
                tag:'兽王',
                tip:'',
                ico:[2,2],
                pos:[2,3],
                key:['Nbst'],
                val:keys['Nbst'],
            },
            {
                tag:'地精修补匠',
                tip:'',
                ico:[3,2],
                pos:[3,3],
                key:['Ntin'],
                val:keys['Ntin'],
            },
            {
                tag:'炼金术士',
                tip:'',
                ico:[4,2],
                pos:[4,3],
                key:['Nalc','Nalm','Nal2','Nal3'],
                val:keys['Nalc'],
            },
        ]
    },
}

module.exports = arch

