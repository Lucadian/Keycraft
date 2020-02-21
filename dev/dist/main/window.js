let win = nw.Window.get()
let os  = require('os')
let pot = {
    saved:false,
    modal:false,
}

function closeWindow(){

    if(!pot.saved)
        document.getElementById('modal').style.visibility = 'visible'
    else
        setTimeout(()=>{
            quit()
        },400)

}

function quit() {
    win.close(true)
}

function save(quitAfterSave){
    let homedir = os.homedir()

    if(os.platform() !== 'win32'){
        alert('若保存后自定义快捷键无效，请使用导出功能，将自定义快捷键导出，然后手动覆盖即可')
    }
    console.log(os.platform())
}

