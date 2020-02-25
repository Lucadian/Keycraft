
let fs = require("fs")
let str = fs.readFileSync('./origin.txt', 'utf-8').replace(/\r\n/g, "|")
let arr = str.replace(/\r\n/g, "|").split('||')

let keys = {}

for(let i=0;i<arr.length;i++){

    let tmp = arr[i].split('|')
    let val = tmp[2].split('=')

    if(tmp[1] !== '[Rupm]'){
        if(val[1].includes(','))
            keys[tmp[1].slice(1,-1)] = val[1].split(',')[0]
        else
            keys[tmp[1].slice(1,-1)] = val[1]
    }
    else
        keys[tmp[1].slice(1,-1)] = tmp[3].split('=')[1]

}

fs.writeFileSync('./keys.js', 'module.exports = ' + JSON.stringify(keys))

