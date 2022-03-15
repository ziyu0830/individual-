// 定义随机取整函数，取出0到2任意一个数组索引
var currentImg = Math.floor(Math.random() * 3);
//定义一个存放照片位置的数组，可以放任意个，在这里放3个
var arr = new Array();
arr[0] = "img/hlxy04.webp";
arr[1] = "img/hlxy01.jpg";
arr[2] = "img/hlxy04.jpg";
// 定义显示图片函数
function changeImg() {
    document.body.style.backgroundImage = "url(" + arr[currentImg] + ")";  //显示对应的图片
}
// 调用函数
changeImg();
// 忘记密码时调用函数
function forget() {
    alert("请联系管理员重置")
}
var clickuser = document.getElementById("user");
var click = document.getElementById("phone");
var tabuser = document.getElementById("tabuser");
var tabphone = document.getElementById("tabphone");
var fontuser = document.getElementById("fontuser");
var fontphone = document.getElementById("fontphone");
function changeLogin() {
    if (click.style.display == "block") {
        tabuser.style.display = "none";
        tabphone.style.display = "block";
        click.style.display = "none";
        clickuser.style.display = "block";
        // fontuser.style.display = "block";
        // fontphone.style.display = "none";
    } else {
        // fontuser.style.display = "none";
        // fontphone.style.display = "block";
       
        click.style.display = "block";
        clickuser.style.display = "none";
        tabphone.style.display = "none";
        tabuser.style.display = "block";
    }
}