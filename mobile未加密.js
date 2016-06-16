document.writeln("<meta charset=\"UTF-8\">");
document.writeln("<div id=\"android-tip\" class=\"android-tip\"><p><img src=\"https://raw.githubusercontent.com/kisshosts/ddns/master/android.png\"/><span class=\"close\" title=\"关闭\" class=\"close\">X 关闭</span></p></div>");
document.writeln("<div id=\"iphone-tip\" class=\"iphone-tip\"><p><img src=\"https://raw.githubusercontent.com/kisshosts/ddns/master/iphone.png\"/><span class=\"close\" title=\"关闭\" class=\"close\">X 关闭</span></p></div>");

    var android_btn=document.getElementById('android-tip');
    var iphone_btn=document.getElementById('iphone-tip');
    var close_btn=document.getElementsByClassName('close');
    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone
                iPad: u.indexOf('iPad') > -1, //是否iPad
            };
        }(),
    }

    var is_visit=getCookie('is_visit');
    if (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {

        if(is_visit==''){
//        没有cookie,设置
            setCookie('is_visit','1',1);
            iphone_btn.style.display='block';
        }

    }
    if (browser.versions.android) {

        if(is_visit==''){
//        没有cookie,设置
            setCookie('is_visit','1',1);
            android_btn.style.display='block';
        }

    }
    var i;
    for(i=0;i<close_btn.length;i++){
        close_btn[i].onclick=function () {
            iphone_btn.style.display='none';
            android_btn.style.display='none';
        }
    }

    //设置cookie
    function setCookie(c_name,value,expiredays)
    {
        var exdate=new Date()
        exdate.setDate(exdate.getDate()+expiredays)
        document.cookie=c_name+ "=" +escape(value)+
                ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
    }
    //    读取cookie
    function getCookie(c_name)
    {
        if (document.cookie.length>0)
        {
            c_start=document.cookie.indexOf(c_name + "=")
            if (c_start!=-1)
            {
                c_start=c_start + c_name.length+1
                c_end=document.cookie.indexOf(";",c_start)
                if (c_end==-1) c_end=document.cookie.length
                return unescape(document.cookie.substring(c_start,c_end))
            }
        }
        return ""
    }