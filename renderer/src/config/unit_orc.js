export { unit_orc }

import { hitground } from './general_hitground'
import { selectSkill } from "./general_selectSkill"
import { orders } from "./general_orders"

let unit_orc = {
    剑圣:{
        ico:[1,1],
        btn:[
            {
                tag:'疾风步',
                tip:'',
                ico:[9,3],
                pos:[1,3],
                key:'[AOwk]',
                val:'W',
                map:['Hotkey','Researchhotkey']
            },
            {
                tag:'镜像',
                tip:'',
                ico:[10,3],
                pos:[2,3],
                key:'[AOmi]',
                val:'R',
                map:['Hotkey','Researchhotkey']
            },
            {
                tag:'致命一击',
                tip:'',
                ico:[11,3],
                pos:[3,3],
                key:'[AOcr]',
                val:'C',
                map:['Researchhotkey']
            },
            {
                tag:'剑刃风暴',
                tip:'',
                ico:[12,3],
                pos:[4,3],
                key:'[AOww]',
                val:'B',
                map:['Hotkey','Researchhotkey']
            },
            selectSkill
        ]
    },
    先知:{
        ico:[2,1],
        btn:[
            {
                tag:'闪电链',
                tip:'',
                ico:[9,4],
                pos:[1,3],
                key:'[AOcl]',
                val:'C',
                map:['Hotkey','Researchhotkey']
            },
            {
                tag:'透视',
                tip:'',
                ico:[10,4],
                pos:[2,3],
                key:'[AOfs]',
                val:'F',
                map:['Hotkey','Researchhotkey']
            },
            {
                tag:'幽灵狼',
                tip:'',
                ico:[11,4],
                pos:[3,3],
                key:'[AOsf]',
                val:'T',
                map:['Hotkey','Researchhotkey']
            },
            {
                tag:'地震术',
                tip:'',
                ico:[12,4],
                pos:[4,3],
                key:'[AOeq]',
                val:'E',
                map:['Hotkey','Researchhotkey']
            },
        ]
    },
    牛头人酋长:{
        ico:[3,1],
        btn:[
            
        ]
    },
    巨魔巫医:{
        ico:[4,1],
        btn:[

        ]
    },
    苦工:{
        ico:[1,1],
        btn:[

        ]
    },
    兽人步兵:{
        ico:[1,1],
        btn:[

        ]
    },
    猎头者:{
        ico:[1,1],
        btn:[

        ]
    },
    投石车:{
        ico:[1,1],
        btn:[

        ]
    },
    狼骑兵:{
        ico:[1,1],
        btn:[

        ]
    },
    双足飞龙:{
        ico:[1,1],
        btn:[

        ]
    },
    科多兽:{
        ico:[1,1],
        btn:[

        ]
    },
    自爆蝙蝠:{
        ico:[1,1],
        btn:[

        ]
    },
    萨满:{
        ico:[1,1],
        btn:[

        ]
    },
    巫医:{
        ico:[1,1],
        btn:[

        ]
    },
    灵魂行者:{
        ico:[1,1],
        btn:[

        ]
    },
    牛头人:{
        ico:[1,1],
        btn:[

        ]
    },
}