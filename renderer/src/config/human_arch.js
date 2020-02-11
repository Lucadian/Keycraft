export { human_arch }

let human_arch = {
    城镇中心:{
        key:'[htow]',
        val:'H',
        ico:[1,5],
        btn:[
            {
                tip:'城镇中心升级',
                ico:[10,7],
                pos:[1,3],
                key:['[hkee]','[hcas]'],
                val:'U',
            },
            {
                tip:'训练农民',
                ico:[1,2],
                pos:[1,1],
                key:'[hpea]',
                val:'Q',
            },
            {
                tip:'警钟(召唤附近农民变为民兵)',
                ico:[6,1],
                pos:[2,3],
                key:'[Amic]',
                val:'Q',
            },
            {
                tip:'人类背包升级',
                ico:[12,6],
                pos:[4,1],
                key:'[Rhpm]',
                val:'B',
            },
            {
                tip:'设置集结点(所有单位通用)',
                ico:[5,1],
                pos:[4,2],
                key:'[CmdRally]',
                val:'Y',
            },
        ]
    },
    兵营:{
        key:'[hbar]',
        val:'B',
        ico:[2,5],
        //训练步兵 训练火枪手 训练骑士 升级防御技能 长管火枪 动物训练 裂甲之刃
        btn:[
            {
                tip:'训练步兵',
                ico:[2,2],
                pos:[1,1],
                key:'[hfoo]',
                val:'F',
            },
            {
                tip:'训练火枪手',
                ico:[3,2],
                pos:[2,1],
                key:'[hrif]',
                val:'R',
            },
            {
                tip:'训练骑士',
                ico:[4,2],
                pos:[3,1],
                key:'[hkni]',
                val:'A',
            },
            {
                tip:'升级防御技能',
                ico:[7,1],
                pos:[1,3],
                key:'[Rhde]',
                val:'D',
            },
            {
                tip:'升级长管火枪',
                ico:[5,4],
                pos:[2,3],
                key:'[Rhri]',
                val:'L',
            },
            {
                tip:'动物作战训练(骑士和狮鹫的生命值 +100)',
                ico:[6,4],
                pos:[3,3],
                key:'[Rhan]',
                val:'X',
            },
            {
                tip:'升级裂甲之刃',
                ico:[7,4],
                pos:[3,2],
                key:'[Rhsb]',
                val:'B',
            },
            {
                tip:'设置集结点(所有单位通用)',
                ico:[5,1],
                pos:[4,2],
                key:'[CmdRally]',
                val:'Y',
            }
        ]
    },
    伐木场:{
        key:'[hlum]',
        val:'L',
        ico:[3,5],
        btn:[
            {
                tip:'伐木工升级',
                ico:[7,5],
                pos:[1,1],
                key:'[Rhlh]',
                val:'Q',
                map:2
            },
            {
                tip:'建筑强度升级',
                ico:[8,5],
                pos:[2,1],
                key:'[Rhac]',
                val:'M',
                map:3
            }
        ]
    },
    铁匠铺:{
        key:'[hbla]',
        val:'S',
        ico:[4,5],
        btn:[
            {
                tip:'钢制武器升级',
                ico:[5,5],
                pos:[1,1],
                key:'[Rhme]',
                val:'S',
                map:3
            },
            {
                tip:'火药升级',
                ico:[6,5],
                pos:[2,1],
                key:'[Rhra]',
                val:'G',
                map:3
            },
            {
                tip:'钢制护甲升级',
                ico:[5,6],
                pos:[1,2],
                key:'[Rhar]',
                val:'P',
                map:3
            },
            {
                tip:'皮制护甲升级',
                ico:[6,6],
                pos:[2,2],
                key:'[Rhla]',
                val:'A',
                map:3
            },
        ]
    },
    农场:{
        key:'[hhou]',
        val:'F',
        ico:[1,6],
    },
    国王祭坛:{
        key:'[halt]',
        val:'A',
        ico:[2,6],
        btn:[
            {
                tip:'召唤大法师',
                ico:[1,1],
                pos:[1,3],
                key:'[Hamg]',
                val:'A'
            },
            {
                tip:'召唤山丘之王',
                ico:[2,1],
                pos:[2,3],
                key:'[Hmkg]',
                val:'M'
            },
            {
                tip:'召唤圣骑士',
                ico:[3,1],
                pos:[3,3],
                key:'[Hpal]',
                val:'L'
            },
            {
                tip:'召唤血法师',
                ico:[4,1],
                pos:[1,2],
                key:'[Hblm]',
                val:'B'
            },
            {
                tip:'设置集结点(所有单位通用)',
                ico:[5,1],
                pos:[4,2],
                key:'[CmdRally]',
                val:'Y',
            }
        ]
    },
    神秘圣地:{
        ico:[3,6],
        btn:[
            {
                tip:'训练女巫',
                ico:[1,3],
                pos:[1,1],
                key:'[hsor]',
                val:'S',
            },
            {
                tip:'训练牧师',
                ico:[2,3],
                pos:[2,1],
                key:'[hmpr]',
                val:'R',
            },
            {
                tip:'训练破法者',
                ico:[3,3],
                pos:[3,1],
                key:'[hspt]',
                val:'B',
            },
            {
                tip:'女巫升级',
                ico:[5,7],
                pos:[1,3],
                key:'[Rhst]',
                val:'O',
                map:2
            },
            {
                tip:'牧师升级',
                ico:[6,7],
                pos:[2,3],
                key:'[Rhpt]',
                val:'E',
                map:2
            },
            {
                tip:'研究魔法控制',
                ico:[8,7],
                pos:[3,2],
                key:'[Rhss]',
                val:'G',
            },
            {
                tip:'研究隐形侦测',
                ico:[7,7],
                pos:[3,3],
                key:'[AHta]',
                val:'R',
            },
            {
                tip:'设置集结点(所有单位通用)',
                ico:[5,1],
                pos:[4,2],
                key:'[CmdRally]',
                val:'Y',
            }
        ]
    },
    车间:{
        ico:[4,6],
        btn:[
            {
                tip:'矮人直升机',
                ico:[1,4],
                pos:[1,1],
                key:'[hgyr]',
                val:'F',
            },
            {
                tip:'迫击炮小队',
                ico:[2,4],
                pos:[2,1],
                key:'[hmtm]',
                val:'A',
            },
            {
                tip:'蒸汽机车',
                ico:[3,4],
                pos:[3,1],
                key:['[hmtt]','hrtt'],
                val:'E',
            },
            {
                tip:'研究直升机炸弹',
                ico:[9,5],
                pos:[1,2],
                key:'[Rhgb]',
                val:'B',
            },
            {
                tip:'研究速射机炮',
                ico:[12,5],
                pos:[1,3],
                key:'[Rhfc]',
                val:'C',
            },
            {
                tip:'研究爆炸碎片',
                ico:[10,5],
                pos:[2,2],
                key:'[Rhfs]',
                val:'S',
            },
            {
                tip:'研究轰天弹幕',
                ico:[11,5],
                pos:[3,2],
                key:'[Rhrt]',
                val:'G',
            },
            {
                tip:'研究照明弹',
                ico:[8,4],
                pos:[2,3],
                key:'[Rhfl]',
                val:'R',
            },
            {
                tip:'设置集结点(所有单位通用)',
                ico:[5,1],
                pos:[4,2],
                key:'[CmdRally]',
                val:'Y',
            }
        ]
    },
    哨塔:{
        ico:[1,7],
        btn:[
            {
                tip:'升级为箭塔',
                ico:[9,6],
                pos:[1,3],
                key:'[hgtw]',
                val:'Q',
            },
            {
                tip:'升级为炮塔',
                ico:[10,6],
                pos:[2,3],
                key:'[hctw]',
                val:'E',
            },
            {
                tip:'升级神秘之塔',
                ico:[11,6],
                pos:[3,3],
                key:'[hatw]',
                val:'R',
            }
        ]
    },
    狮鹫笼:{
        ico:[2,7],
        btn:[
            {
                tip:'训练龙鹰骑士',
                ico:[4,3],
                pos:[1,1],
                key:'[hdhw]',
                val:'D',
            },
            {
                tip:'训练狮鹫骑士',
                ico:[4,4],
                pos:[2,1],
                key:'[hgry]',
                val:'G',
            },
            {
                tip:'研究蔽目乌云',
                ico:[8,3],
                pos:[1,3],
                key:'[Rhcd]',
                val:'C',
            },
            {
                tip:'研究风暴战锤',
                ico:[7,6],
                pos:[2,3],
                key:'[Rhhb]',
                val:'H',
            },
            {
                tip:'设置集结点(所有单位通用)',
                ico:[5,1],
                pos:[4,2],
                key:'[CmdRally]',
                val:'Y',
            }
        ]
    },
    人族商店:{
        ico:[3,7],
        btn:[
            {
                tip:'选择交易目标(共用技能)',
                ico:[10,8],
                pos:[4,3],
                key:'[Anei]',
                val:'F',
            }
        ]
    },
    人类建造:{
        ico:[4,7],
        btn:[
            {
                tip:'城镇大厅',
                ico:[1,5],
                pos:[1,1],
                key:'[htow]',
                val:'H',
            },
            {
                tip:'兵营',
                ico:[2,5],
                pos:[2,1],
                key:'[hbar]',
                val:'B',
            },
            {
                tip:'伐木场',
                ico:[3,5],
                pos:[3,1],
                key:'[hlum]',
                val:'L',
            },
            {
                tip:'铁匠铺',
                ico:[4,5],
                pos:[4,1],
                key:'[hbla]',
                val:'S',
            },
            {
                tip:'农场',
                ico:[1,6],
                pos:[1,2],
                key:'[hhou]',
                val:'F',
            },
            {
                tip:'国王祭坛',
                ico:[2,6],
                pos:[2,2],
                key:'[halt]',
                val:'A',
            },
            {
                tip:'神秘圣地',
                ico:[3,6],
                pos:[3,2],
                key:'[hars]',
                val:'R',
            },
            {
                tip:'车间',
                ico:[4,6],
                pos:[4,2],
                key:'[harm]',
                val:'W',
            },
            {
                tip:'哨塔',
                ico:[1,7],
                pos:[1,3],
                key:'[hwtw]',
                val:'T',
            },
            {
                tip:'狮鹫笼',
                ico:[2,7],
                pos:[2,3],
                key:'[hgra]',
                val:'G',
            },
            {
                tip:'人族商店',
                ico:[3,7],
                pos:[3,3],
                key:'[hvlt]',
                val:'V',
            },

        ]
    }

}