let fs = require("fs")
// fs.writeFileSync('./keys.js', 'module.exports = ' + JSON.stringify(keys))
// fs.writeFile(path, data[, options], callback)
// let str = fs.readFileSync('../CustomKeys.txt', 'utf-8')
let str = fs.readFileSync('../originCustomKeys.txt', 'utf-8').replace(/\r\n/g, "|")

// 将整个文件按照换行符插入 | 号，并根据 || 号将字符串转为数组
let arr = str.replace(/\r\n/g, "|").split('||')

let maps = {}

for(let i=0;i<arr.length;i++){

    // itm 为数组元素，在此按 | 划分为一个数组，其形式为 [//文字注释,[技能关键字], Hotkey=X,X ,Researchhotkey=X]
    let itm = arr[i].split('|')
    //去掉技能关键字两中括号
    let key = itm[1].slice(1,-1)

    maps[key] = []

    for(let i=2;i<itm.length;i++){
        let kav = itm[i].split('=')

        let val = kav[1]

        if( val.includes(',')){
            let num = val.split(',').length
            for(let i=0;i<num;i++){
                maps[key].push(kav[0])
            }
        }
        else
            maps[key].push(kav[0])

    }

}

fs.writeFileSync('../maps.js', 'module.exports = ' + JSON.stringify(maps))
