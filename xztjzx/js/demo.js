var div_c = document.getElementById('div_c');
var oul = document.getElementById('oul');
var imgs = div_c.getElementsByTagName('img');
var lis = oul.getElementsByTagName('li');

var i = 0;
setInterval(function () {
    if (i == 0) {
        imgs[0].className = "zindex";
        imgs[4].className = "zindex0";

        lis[0].classList.add = "nodeActive";
        lis[4].classList.remove = "nodeActive";
    } else {
        imgs[i].className = "zindex";
        imgs[i - 1].className = "zindex0";

        lis[i].classList.add = "nodeActive";
        lis[i - 1].classList.remove = "nodeActive";
    }
    i++;
    i = i % 5;
}, 2000);


/* 切换 */
$('.togglebtn').mouseenter(function () {
    $(this).addClass('activeaa');
    $('.togglebtn').not($(this)).removeClass('activeaa');

    var inx = $(this).index('.togglebtn');
    $('.msg').eq(inx).show(100);
    $('.msg').not($('.msg').eq(inx)).hide();
})
$('.msg').eq(0).show(100);
