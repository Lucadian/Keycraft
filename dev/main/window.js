let win = nw.Window.get()


let pot = {
    saved:true,
    modal:false,
    saving:false,
    bugPage:0,
    tempWin:null,
    path :'',
    anch :null,
}

function closeWindow(){

    if(!pot.saved)
        document.getElementById('modal-quit').style.visibility = 'visible'
    else
        setTimeout(()=>{
            quit()
        },400)

}

function quit() {

    if(pot.saving) return

    win.close(true)
}

function save(quitAfterSave){
    pot.saving = true
    if(os.platform() !== 'win32'){
        alert('若保存后自定义快捷键无效，请设置 CustomKeys.txt 的存放目录')
    }

    //从模板的 path.custom.txt 中读取路径
    // let path = os.homedir() + '/Documents/Warcraft III/CustomKeyBindings/CustomKeys.txt'
    let path = fs.readFileSync(storage + '/path.custom.txt').toString() + '/CustomKeys.txt'

    let keys = require(storage + '/keys.js')
    let maps = require(storage + '/maps.js')
    let tips = require(storage + '/tips.js')

    let CustomKeys = ''

    for(let key in keys){
        let str = '\r\n' + tips[key] //添加注释
            str += '\r\n[' + key + ']' //添加技能名字

        console.log(key)
        let arr = maps[key]
        for(let i=0;i<arr.length;i++){ //添加 hotkey unhotkey 什么的
            if(arr[i] === arr[i-1])
                str += ',' + keys[key]
            else
                str += '\r\n' + arr[i] + '=' + keys[key]
        }

        CustomKeys += str
    }
    fs.writeFileSync(path,CustomKeys)
    pot.saving = false
    pot.saved = true
    if(quitAfterSave){
        quit()
    }
}
function openBugPage(){

    if(pot.tempWin){
        pot.tempWin.close(true)
    }

    nw.Window.open(
        'https://open-source-keycraft.obs-website.cn-east-3.myhuaweicloud.com?_=' + Date.now(),
        {
            "title": "Keycraft",
            "icon": "img/icon_fav.ico",
            "width": 750,
            "height": 500,
            "position": "center",
            "max_width": 750,
            "max_height": 500,
        },
        (new_win)=>{
            pot.tempWin = new_win

            new_win.on('loaded',()=>{
                pot.anch = new_win.window.document.getElementById('anchor')
                let href = new_win.window.document.getElementById('href').innerText
                pot.anch.onclick = function(){
                    let gui = require('nw.gui')
                    gui.Shell.openExternal(href)
                }
            })
        }
    )
    // alert(111)
    // pot.anch = document.getElementById('anchor')
    // console.log(pot.anch)
    // pot.anch.onclick = function(){
    //     alert(222)
    //     let hre = "https://pan.baidu.com/s/1pAg-iMgkmOqzPJ-xI3s7Kg"
    //     require('nw.gui').Shell.openExternal(hre)
    // }


}

function deleteStorage(){
    deleteFolder(storage)
    win.close(true)
}


function deleteFolder(path) {
    let files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            let curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                deleteFolder(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}


