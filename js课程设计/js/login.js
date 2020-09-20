// setInterval(function(){
//     $('.dots').removeClass('animate');
//     setTimeout(function(){
//         $('.dots').addClass('animate');
//     },200)
// },3750);

var dots = document.getElementById('dots');
$('.container').hide();
setInterval(function () {
    dots.classList.remove('animate');
    setTimeout(function () {
        dots.classList.add('animate');
    }, 200);
}, 3750);

var time = setTimeout(function () {
    $('.wrapper').hide();
    $('.container').show();
    $('.account').focus();
}, 3751);

/* 
? 点击验证登录
*/
var user = [
    { name: "admin", pass: "admin" },
    { name: "nian", pass: "nian" }
];
$(".btn").click(function () {
    judge();
});
/* 
? 键盘验证登录
* Enter 13
*/
$(document).keydown(function (event) {
    var event = event || window.event || event.which;
    if (event.keyCode == 13) {
        judge();
    }
})

/* 判断验证 */
function judge() {
    for (var i = 0; i <= user.length; i++) {
        if ($('.account').val() == user[i].name && $('.password').val() == user[i].pass) {
            console.log("YES YES YES!");
            window.location.href = './index.html';
            break;
        } else if ($('.account').val() == "" || $('.password').val() == "") {
            $('#error').css('color', 'red');
            $('#error').text("用户名或密码为空！");
            if ($('.account').val() == "") {
                $('.account').focus();
            } else if ($('.password').val() == "") {
                $('.password').focus();
            }
        } else {
            $('#error').css('color', 'red');
            $('#error').text("用户名或密码错误！");
            console.log("NO NO NO!");
            break;
        }
    }
}

