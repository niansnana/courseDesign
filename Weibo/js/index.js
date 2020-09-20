/* 
    jquery实现当页面滚动超过一屏时显示返回顶部按钮
*/


$(document).ready(function () {
    $("#totop").hide();
    $(function () {
        //检测屏幕高度
        var height = $(window).height();
        //scroll() 方法为滚动事件
        $(window).scroll(function () {
            if ($(window).scrollTop() > height) {
                $("#totop").fadeIn(500);
            } else {
                $("#totop").fadeOut(500);
            }
        });
        $("#totop").click(function () {
            $('body,html').animate({ scrollTop: 0 }, 100);
            return false;
        });
    });
});
