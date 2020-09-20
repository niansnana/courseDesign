/* 

 * js
 *轮播图
*/
$(function () {
    var time = setInterval(loop, 3000);
    var index = 0;
    var width = $('#img').width();
    function loop() {
        index++;
        if (index >= 3) {
            index = 0;
        }
        $('.picture').animate({ "left": -width * index }, 300);
        $('#li').eq(index).css('background', 'red').siblings().css('background', 'rgba(100,100,100,.5)');
    }
    $('.carousel').hover(function () {
        clearInterval(time);
        $('.arrow').show();
    }, function () {
        time = setInterval(loop, 3000);
        $('.arrow').hide();
    })

    var li = document.querySelectorAll('.wrapper .container .carousel ul li');
    $(li).mouseover(function () {
        $(this).css('background-color', 'red').siblings().css('background-color', 'rgba(100,100,100,.3)');
        index = $(this).index();
        $('.picture').animate({ "left": -width * index }, 300);
    })

    $("#left").click(function () {
        index--;
        if (index == -1) {
            index = 3;
        }
        $(".picture").animate({ "left": -width * index }, 300);
        $("#li").eq(index).css("background-color", "red").siblings().css("background-color", "rgba(100,100,100,0.3)");
    })
    $("#right").click(function () {
        index++;
        if (index == 4) {
            index = 0;
        }
        $(".picture").animate({ "left": -width * index }, 300);
        $("#li").eq(index).css("background-color", "red").siblings().css("background-color", "rgba(100,100,100,0.3)");
    })
})
/* 
* 汉堡菜单
*/

if(document.body.clientWidth <= 768){
    $('#menuul li').toggle();
}
$('.ulbtn').click(function(){
    $('#menuul').css('z-index','1000');
    $('#menuul li').toggle();
});

/* 
* 所有的Microsoft产品
*/
$('.moreul').toggle();
$('#all').click(function(){
    // console.log('test');
    $('.moreul').toggle();
})

/* 
* 自动刷新
*/
$(window).resize(function(){
    location.reload()
});
