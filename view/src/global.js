let os = require("os")
let fs = require("fs")


let CustomKeys = ''
let path = ''

if(os.platform() !== 'win32')
    alert('检测到非 windows 系统，修改快捷键后，先导出生成的快捷键文件，再将其覆盖进对应的目录内即可')
else
    let path = os.homedir() + '\\Documents\\Warcraft III\\CustomKeyBindings\\CustomKeys.txt'

// function saveKeys(){
//     fs.writeFileSync(path, CustomKeys)
// }


