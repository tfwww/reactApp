var winW = document.documentElement.clientWidth;
var desW = 640;
var rem = desW / 100;
var isWeiXin = false;
var isApp = false;
var isIosApp = false;
var isAndroidApp = false;
var isIosSys = false;
var isAndroidSys = false;
var needUnlock = !1;
var isNative = false;
var baseFontSize = document.documentElement.style;
if (winW > desW) {
    winW = desW;
    baseFontSize.fontSize = winW / rem / 1.5 + "px";
} else {
    baseFontSize.fontSize = document.documentElement.clientWidth / rem + "px";
};
if(window.location.href.indexOf('/jx/') >=0 || window.location.href.indexOf('/wxfront/bind') >= 0){
    document.documentElement.className +=' jx';
}
function adjustToClient(){
    var ua = navigator.userAgent.toLowerCase();
    var doc = document.documentElement;
    //wechat
    if(ua.indexOf("micromessenger") >= 0) {
        doc.className +=' wx-browser';
        isWeiXin = true;
    }
    //native
    if(ua.indexOf("apicloud") >= 0 || window.location.href.indexOf('apicloud') >=0){
        doc.className +=' native';
        isNative = true;
    }
    //app
    if(ua.indexOf('x5app') >=0){
        doc.className +=' app-browser';
        isApp = true;
    }
    //ios
    if(ua.indexOf("ipad") >= 0 || ua.indexOf("iphone") >= 0){
        doc.className +=' isIosSys';
        isIosSys =true;
    }
    //android
    if(ua.indexOf('android') >=0){
        doc.className +=' isAndroidSys';
        isAndroidSys = true;
    }
    if (isApp) {
        if(isIosSys){
            doc.className +=' ios-browser';
            isIosApp = true;
        }else if(isAndroidSys){
            doc.className +=' android-browser';
            isAndroidApp = true;
        }
    }
}
// !function(){
//     var d = new Date().getTime();
//     //月份从零开始计数
//     var expire = new Date(2017,11,16).getTime();
//     if(d >= expire){
//         document.documentElement.className +=' activity-end';
//     }

// }();

export default adjustToClient

export {isWeiXin, isApp, isIosApp, isAndroidApp, isIosSys, isAndroidSys, needUnlock, isNative}