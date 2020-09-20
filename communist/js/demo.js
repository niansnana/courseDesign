/* 

 * js
 *轮播图
*/
var div_c = document.getElementById('div_c');
var oul = document.getElementById('oul');
var imgs = div_c.getElementsByTagName('img');
var lis = document.getElementsByTagName('li');

var i = 0;
setInterval(function () {
    if (i == 0) {
        imgs[0].className = "zindex";
        imgs[1].className = "zindex0";

        lis[0].classList.add = "nodeActive";
        lis[1].classList.remove = "nodeActive";
    } else {
        imgs[i].className = "zindex";
        imgs[i - 1].className = "zindex0";

        lis[i].classList.add = "nodeActive";
        lis[i - 1].classList.remove = "nodeActive";
    }
    i++;
    i = i % 2;
}, 2000);




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
