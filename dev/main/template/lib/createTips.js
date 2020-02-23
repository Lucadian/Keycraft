let fs = require("fs")

let str = fs.readFileSync('../originCustomKeys.txt', 'utf-8').replace(/\r\n/g, "|")

// 将整个文件按照换行符插入 | 号，并根据 || 号将字符串转为数组
let arr = str.replace(/\r\n/g, "|").split('||')

let tips = {}

for(let i=0;i<arr.length;i++){

    // itm 为数组元素，在此按 | 划分为一个数组，其形式为 [//文字注释,[技能关键字],Hotkey=X,Researchhotkey=X]
    let itm = arr[i].split('|')
    //去掉技能关键字两边中括号
    let key = itm[1].slice(1,-1)

    tips[key] = itm[0]


}

fs.writeFileSync('../tips.js', 'module.exports = ' + JSON.stringify(tips))
