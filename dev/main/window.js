let win = nw.Window.get()

let pot = {
    saved:true,
    modal:false,
    saving:false,
    bugPage:0,
    tempWin:null,
    path:''
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
        alert('若保存后自定义快捷键无效，请使用导出功能，将自定义快捷键导出，然后手动覆盖即可')
    }

    //从模板的 path.custom.txt 中读取路径
    // let path = os.homedir() + '/Documents/Warcraft III/CustomKeyBindings/CustomKeys.txt'
    let path = fs.readFileSync('main/template/path.custom.txt').toString() + '/CustomKeys.txt'

    let keys = require('main/template/keys.js')
    let maps = require('main/template/maps.js')
    let tips = require('main/template/tips.js')

    let CustomKeys = ''

    for(let key in keys){
        let str = '\r\n' + tips[key] //添加注释
            str += '\r\n[' + key + ']' //添加技能名字

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
    if(pot.tempWin)
        pot.tempWin.close(true)

    nw.Window.open(
        'https://open-source-keycraft.obs-website.cn-east-3.myhuaweicloud.com?_=' + Date.now(),
        {
            "title": "BUG反馈",
            "icon": "dev/img/icon_fav.ico",
            "frame": true,
            "width": 750,
            "height": 500,
            "position": "center",
            "min_width": 300,
            "min_height": 150,
        },
        (new_win)=>{
            pot.tempWin = new_win
        }
    )

}



