
let fs = require("fs")
let str = fs.readFileSync('./general_unit.js', 'utf-8')

str = str.replace(/'\[/g, "['")
str = str.replace(/]'/g, "']")

fs.writeFileSync('./_general_unit.js', str)

// str = fs.readFileSync('./arch.js', 'utf-8')
// str = str.replace(/'\[/g, "['")
// str = str.replace(/]'/g, "']")
//
// fs.writeFileSync('./_arch.js', str)