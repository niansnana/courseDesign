$('#btn').mouseenter(function(){
    // $('.items').toggle();
    $('.items').show();
})
$('.items').mouseleave(function(){
    $('.items').hide();
})


/* 切换 */
$('.togglebtn').mouseenter(function () {
    // $(this).addClass('liactive');
    // $('.togglebtn').not($(this)).removeClass('liactive');

    var inx = $(this).index('.togglebtn');
    $('.tab_msg').eq(inx).show(100);
    $('.tab_msg').not($('.tab_msg').eq(inx)).hide();
})
$('.tab_msg').eq(0).show(100);

$('.tabli').mouseenter(function(){
    $(this).addClass('liactive');
    $('.tabli').not($(this)).removeClass('liactive');
})