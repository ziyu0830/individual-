// 控制导航栏打开与关闭
var a =document.getElementById("nav3");
function click() {
    if (a.style.display == "none") {
        a.style.display= "block";
    }
    else{
        a.style.display = "none";
    }
}

// 控制插图进行轮播
var carousel = document.getElementById("carousel");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var pic = document.getElementById("pic");
    var ulLis = pic.children;
    var sub = document.getElementById("sub");
    var olLis = sub.children;

    //信号量编程
    //通过一个全局变量的信号量, 在不同的事件函数中进行信息传递

    //全局信号量, 存储的是要展示的图片所在的li的下标
    var idx = 0;

    // right.onclick = function () {
    //     rightHandel();
    // };

    left.onclick = function () {
        idx--;
        if (idx < 0) {
            idx = ulLis.length - 1;
        }

        //切换函数
        change();
    };


    // //点击小圆点
    // for(var i = 0; i<olLis.length;i++){

    //     //绑定下标
    //     olLis[i].index = i;

    //     olLis[i].onclick = function(){
    //         idx = this.index;
    //         change();
    //     }
    // }


    var timer;
    //自动播放
    timer = setInterval(rightHandel,5000);


    carousel.onmouseover = function(){
        clearInterval(timer);
    }

    carousel.onmouseout = function(){
        timer = setInterval(rightHandel,5000);
    }


    //右按钮事件函数
    function rightHandel(){
        idx++;
        if (idx > ulLis.length - 1) {
            idx = 0;
        }
        change();
    }

    //切换函数
    function change() {
        //排他思想
        //对应控制
        for (var i = 0; i < ulLis.length; i++) {
            ulLis[i].className = "";
            olLis[i].className = "";
        }
        ulLis[idx].className = "current";
        olLis[idx].className = "current";
    }
