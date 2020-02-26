// 用法：在需要调用AJAX的地方使用new AJAX({
//      method:'get'/'post',
//      data:'name=张三&age=30&' + Date.now(),
//      url:'../Category/data.php',
//      callback(result){
//          console.log(result)
//      }
// })
// 兼容性：兼容IE
// 缓存：相同 url 地址会自动禁用缓存
// GET 方式提交数据，汉字需要用encodeURI('汉字')处理：'?name='+encodeURI('张三')+'&age=30',再到接收文件中使用 decodeURI 即可
export { AJAX }

class AJAX{

    constructor(option){

            //如果不写 method ，则默认使用 GET 方式请求
        let method = option.method ? option.method.toLowerCase() : 'get',

            //无论何种方式提交的数据，其格式必须严格遵守 'name=张三&age=30' 的样式
            data = option.data,

            //无论何种方式提交请求，为屏蔽缓存，url末尾应加上不重复内容，比如 '&' + Date.now()
            url = method === ('get' && data) ?
                option.url + '?' + encodeURI(data) + '&_=' + Date.now() : option.url + '?_=' + Date.now(),

            XHR = AJAX.getXHR()

        XHR.open(method,url,true)

        switch (method){
            case 'get':
                XHR.send()
                break
            case 'post':
                //POST 方式提交数据，须设置请求头
                XHR.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                //POST 方式提交的数据，数据放在 send 中发送
                //POST 方式提交的数据，数据格式与 GET 方式相同，例如：'name=张三&age=30' 但汉字无需处理可直接发送
                XHR.send(data)
                break
            default:
                alert('参数错误！method 只能是 "get" 或 "post"')
        }

        XHR.onreadystatechange = function(){
            if(XHR.readyState === 4)
                if(XHR.status === 200 || XHR.status === 304)

                    option.callback( XHR.responseText )

                else console.log('错了错了，Error: ' + XHR.status)
        }

    }

    static getXHR(){
        return window.XMLHttpRequest ? new XMLHttpRequest() : window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : null
    }

}