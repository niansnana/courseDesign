/* 获取音频 */
/* for long long with you.mp3 */
var audioOne = document.getElementsByTagName("audio")[0],
    /* thta's beautiful with you.mp3 */
    audioTwo = document.getElementsByTagName("audio")[1],
    /* big big floor.mp3 */
    audioThree = document.getElementsByTagName("audio")[2];
/* 获取监听按钮 */
// var prev = document.getElementsByTagName("button")[0];
var show = document.getElementsByTagName("button")[0];
// var ext = document.getElementsByTagName("button")[2];

var prev = document.getElementsByTagName("a")[0],
    next = document.getElementsByTagName("a")[1];

var stop = document.getElementById("stop");

/* 遍历所有歌曲 */
var audio = document.getElementsByTagName("audio");
var btn = document.getElementsByTagName("button");
// for (var i = 0; i < 3; i++) {

// var arr = new Array();
// arr += audio[i];
// console.log(arr);

/* 切换上一首 */
// function toPrev() {
//     // arr[i + 1].pause();
//     // arr[i - 1].play();
// }
// /* 切换下一首 */
// function toNext() {
//     // arr[i - 1].pause();
//     // arr[i + 1].play();
// }
// }
/* 播放歌曲 */
function showTime(audio) {
    if (audio.paused) {
        audio.play();
        stop.classList.remove("icon-bofang");
        stop.classList.add("icon-zantingicon");
    } else {
        audio.pause();
        stop.classList.remove("icon-zantingicon");
        stop.classList.add("icon-bofang");
    }

    // if(audioOne.play() && audioTwo.play() || 
    // audioOne.play() && audioThree.play()){
    //     audioOne.pause();
    // }else if(audioTwo.play() && audioOne.play() ||
    // audioTwo.play() && audioThree.play()){
    //     audioTwo.pause();
    // }else if(audioThree.play() && audioOne.play() ||
    // audioThree.play() && audioTwo.play()){
    //     audioThree.pause();
    // }

}

/* 背景图片 */
var img = document.querySelector(".container .player img");

/* 切换上一首 */
function toPrev() {
    audioOne.pause();
    audioThree.pause();
    img.src = "img/good.jpg";
    /* thta's beautiful with you.mp3 */
    showTime(audioTwo);
    // show.onclick = showTime(audioTwo);
    show.onclick = function () {
        if (audioTwo.paused) {
            audioTwo.play();
            stop.classList.remove("icon-bofang");
            stop.classList.add("icon-zantingicon");
        } else {
            audioTwo.pause();
            stop.classList.remove("icon-zantingicon");
            stop.classList.add("icon-bofang");
        }
    };
}
/* 切换下一首 */
function toNext() {
    audioOne.pause();
    audioTwo.pause();
    img.src = "img/floor.jpg";
    /* big big floor.mp3 */ 
    showTime(audioThree);
    show.onclick = function () {
        if (audioThree.paused) {
            audioThree.play();
            stop.classList.remove("icon-bofang");
            stop.classList.add("icon-zantingicon");
        } else {
            audioThree.pause();
            stop.classList.remove("icon-zantingicon");
            stop.classList.add("icon-bofang");
        }
    };
}

/* 滚动歌词 */
var to = document.querySelector(".container .words div i"),
    div = document.querySelector(".container .words"),
    all = document.getElementById("all");

function toload() {
    all.style.bottom = 45 + "%";
    to.style.color = "orangered";
    div.style.top = 50 + "%";

    div.style.height = 120 + "px";
    to.classList.remove("icon-shangjiantou2");
    to.classList.add("icon--arrow-down");
}
var myvolumn = document.getElementById('volumn');
function setvolumn(){
	audio.volume = myvolumn.value;
}

