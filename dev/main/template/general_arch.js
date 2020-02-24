const storage = require('main/const/storage')
let keys = require(storage + '/keys.js')

module.exports = {
    互动:{
        tag:'选择交易目标',
        tip:'各种族商店、中立商店 通用快捷键',
        ico:[10,8],
        pos:[4,2],
        key:['Anei'],
        val:keys['Anei'],
        map:['Hotkey']
    },
    集结点:{
        tag:'集结点',
        tip:'通用命令',
        ico:[5,1],
        pos:[4,2],
        key:['CmdRally'],
        val:keys['CmdRally'],
        map:['Hotkey']
    },
    吃树 : {
        tag:'吃树',
        tip:'生命之树、战争古树、知识古树、风之古树 通用快捷键',
        ico:[12,8],
        pos:[3,3],
        key:['Aeat'],
        val:keys['Aeat'],
        map:['Hotkey']
    },

    拔起 : {
        tag:'拔起',
        tip:'生命之树、战争古树、知识古树、风之古树 通用快捷键',
        ico:[6,1],
        pos:[4,3],
        key:['Aroo'],
        val:keys['Aroo'],
        map:['Hotkey','Unhotkey']
    }
}