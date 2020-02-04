document.getElementById('test').innerHTML = 123

let myNotification = new Notification('标题123', {
    body: '通知正文内容'
})

myNotification.onclick = () => {
    console.log('通知被点击')
}