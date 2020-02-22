
let { 移动,停止,保持,攻击,巡逻,采集,修理,攻击地面,选择技能 } = require("../general_unit")
let keys = require('../keys')

let unit = {
    死亡骑士:{

    },
    恐惧魔王:{

    },
    巫妖王:{

    },
    地穴领主:{

    },
    寺僧:{

    },


}

let orders = [移动,停止,保持,攻击,巡逻]
for(let item in unit){
    if(!unit[item].btn) unit[item].btn = []
    unit[item].btn.push(...orders)
}

module.exports = unit