/**
 * purpose: 公共方法
 * @User：lihx
 * @Date：2018-04-23
 **/
/** 设置缓存 **/
export function localStorageSetItem(name, data) {
    window.localStorage.setItem(name, data)
}
/** 获取缓存 **/
export function localStorageGetItem(data) {
    return  window.localStorage.getItem(data);
}
/** 删除缓存 **/
export function localStorageRemoveItem(data) {
    window.localStorage.removeItem(data)
}
/** 删除全部缓存 **/
export function localStorageRemoveItemAll() {
    window.localStorage.clear()
}

/** 设置缓存 **/
export function sessionSetItem(name, data) {
    window.sessionStorage.setItem(name, data)
}
/** 获取缓存 **/
export function sessionGetItem(data) {
    return  window.sessionStorage.getItem(data);
}
/** 删除缓存 **/
export function sessionRemoveItem(data) {
    window.sessionStorage.removeItem(data)
}
/** 删除全部缓存 **/
export function sessionRemoveItemAll() {
    window.sessionStorage.clear()
}

export function getDomain(){
    var domain = document.domain;
    // if(domain != '127.0.0.1' && domain != 'localhost'){
    if(domain != '127.0.0.1' &&  domain != 'localhost' && domain != '10.130.223.122' && domain != '10.87.7.2'){
    // if(domain != '127.0.0.1' && domain != 'localhost' && domain != '10.87.7.3'){
        var dIndex = domain.indexOf(".");
        domain = domain.substring(dIndex,domain.length);
    }
    // console.log(domain);
    return domain;
}
/** 设置cookie **/
export function setCookie(c_name, value, expiredays) {
    var exp = new Date();
    // exp.setTime(exp.getTime() + 30*60*1000);
    document.cookie=  c_name +"="+value+";path=/;expires=" + ';domain='+getDomain();
}
/** 获取cookie **/
export function getCookie(c_name){
    if (document.cookie.length>0){
        let c_start,c_end;
        let l = document.cookie.split(';')
        for(let i=l.length-1;i>=0;i--){
            if(l[i].split('=')[0] == c_name || l[i].split('=')[0] == (' '+c_name) && l[i].split('=')[1] != ''){
                c_start = l[i].split('=')[1]
                return unescape(c_start)
            }
        }
    }
    return ""
}

/** 删除cookie **/
export function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
    document.cookie= name + "="+''+";path=/;expires="+exp.toGMTString();
}
export function getUrlData(url){
    console.log(url)
    var urlJson = {};
    var arr = url.substr(location.href.lastIndexOf('?') + 1).split('&');
    arr.forEach(function(item) {
        var tmp = item.split('=');
        urlJson[tmp[0]] = tmp[1];
    })
    return urlJson
}
/** 动态引入css **/
export function loadStyle(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
}
/** 动态引入js **/
export function loadScript(url) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
}
