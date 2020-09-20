/* 
*
*
* index
*/
$('.times').text(new Date().toLocaleTimeString());
var time = setInterval(function () {
    $('.times').text(new Date().toLocaleTimeString());
}, 1000);

/* 彩色文字 */
var str = "爱着JavaScript的每一天";
var index = 0;
var con = $('#lovejs');
var colors = new Array("pink", "lightblue", "orangered", "red"),
    color = colors[Math.floor(Math.random() * colors.length)];
function start() {
    con.text('');
    var time = setInterval(function () {
        con.append(str.charAt(index)).css('color', color);
        if (index++ === str.length) {
            clearInterval(time);
            index = 0;
            start();
        }
    }, 1000);
}
start();

/* tab 列表切换 */
$('.btn').click(function () {
    $(this).addClass('active');
    $('.btn').not($(this)).removeClass('active');
    inx = $(this).index('.btn');
    $('.tab_content').eq(inx).show(100);
    $('.tab_content').not($('.tab_content').eq(inx)).hide(100);
});
$('.tab_content').eq(0).show(100);

/* audio */
var audio = document.getElementById('audio');
var info = document.getElementById('audioinfo');
$('.plays').click(function () {
    if (audio.paused) {
        audio.play();
        $('#switch').attr('class', 'iconfont icon-zanting');
    } else {
        audio.pause();
        $('#switch').attr('class', 'iconfont icon-bofang');
    }
});

setInterval(function () {
    $('#audioinfo').text((audio.currentTime).toFixed(0) + "s / " + parseInt(audio.duration) + "s");
}, 0);
function setvolumn() {
    audio.volume = $('#range').val();
}

/* 
! 搜索功能
*/
$('#for').click(function () {
    $('body').addClass('background');
    $('.search').show();
    $('#every').focus();
    // console.log('test');

    $('#close').click(function () {
        $('.search').hide();
        $('body').removeClass('background');
        $('#every').val('');
    })
});
/* 动画回去加 */
$('#close').mouseover(function () {
    $(this).addClass('animated rotateIn');
});

/* 拖动js */
$(function () {
    // 鼠标按下时
    $('#luolijump').mousedown(function (e) {
        // 获取当前元素的 偏移量
        var positionDiv = $(this).offset();
        // 获取是否在当前事件下在当前元素上
        var distenceX = e.pageX - positionDiv.left;
        var distenceY = e.pageY - positionDiv.top;
        // 移动时
        $(document).mousemove(function (e) {
            // 获取
            var x = e.pageX - distenceX;
            var y = e.pageY - distenceY;
            if (x < 0) {
                x = 0;
            } else if (x > $(document).width() - $('#luolijump').outerWidth(true)) { // 判断是否超出浏览器宽度
                x = $(document).width() - $('#luolijump').outerWidth(true);
            }
            if (y < 0) {
                y = 0;
            } else if (y > $(document).height() - $('#luolijump').outerHeight(true)) { // 判断是否超出浏览器高度
                y = $(document).height() - $('#luolijump').outerHeight(true);
            }
            // 设置left值和top值
            $('#luolijump').css({
                'left': x + 'px',
                'top': y + 'px'
            });
        });
        // 解绑事件
        $(document).mouseup(function () {
            $(document).off('mousemove');
        });
    });
});

/* 置顶 */
// var scrollTop = $(window).scrollTop();
// console.log(scrollTop);

$(window).scroll(function (event) {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 100) {
        $('#top').show();
    }else if(scrollTop <= 0){
        $('#top').hide();
    }
});