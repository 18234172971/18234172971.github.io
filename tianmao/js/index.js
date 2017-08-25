/*
 * @Author: Administrator
 * @Date:   2017-07-18 00:06:51
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-07-18 21:37:21
 */

'use strict';
{
    var item = document.querySelectorAll(".pinpaiR ul li");
    var mask = document.querySelectorAll(".pinpaiR ul li .mask1");
    var big = document.querySelectorAll(".pinpai .Lone .item");
    var small = document.querySelectorAll(".pinpai .Ltwo div a");
    var masks = document.querySelectorAll(".pinpai .Ltwo div a .mask");
    item.forEach(function (ele, index) {
        ele.onmouseover = function () {
            mask[index].style.opacity = 10;
        }
        ele.onmouseout = function () {
            mask[index].style.opacity = 0;
        }
    });
    small.forEach(function (value, index) {
        value.onmouseover = function () {
            big.forEach(function (ele, index) {
                ele.style.zIndex = 1;
                ele.style.display = "none";
                masks[index].style.display = "none";
            });
            big[index].style.zIndex = 2;
            big[index].style.display = "block";
            masks[index].style.display = "block";
        }
    });
}
//轮播图
{
    const banner = document.querySelectorAll(".banner1 .lunbotu");
    const dianlist = document.querySelectorAll(".wheel li a");
    const bannerboxs = document.querySelector(".banner1");
    var colorarr = ["#E8E8E8", "#010109", "#E8E8E8", "#6A31D6", "#1F92EF", "#E8E8E8"];
    let zindex=10;
    let num=0;
    dianlist.forEach(function (ele, index) {
        ele.onmouseover = function () {
            banner.forEach(function (value, index1) {
                banner[index1].classList.remove("active");
                dianlist[index1].classList.remove("active");
            })
            banner[index].classList.add("active");
            dianlist[index].classList.add("active");
            bannerboxs.style.background = colorarr[index];
            num = index;
        }
    });
    let t;
    let move = function () {
        clearTimeout(t);
        // t = setTimeout = (function () {
            num++;
            if (num == dianlist.length) {
                num = 0;
            }
            for (var i = 0; i < banner.length; i++) {
                banner[i].classList.remove("active");
                dianlist[i].classList.remove("active");
            }
            banner[num].classList.add("active");
            dianlist[num].classList.add("active");
            bannerboxs.style.background = colorarr[num];

        // })

    }
    let st = setInterval(move, 5000);
    bannerboxs.onmouseover = function () {
        clearInterval(st);
    }
    bannerboxs.onmouseout = function () {
        st = setInterval(move, 3000);
    }
}
// 直播轮播
{
    let bannerinner = document.querySelector(".pinpai .Ltwo>div")
    let next = document.querySelector(".jright");
    let pre = document.querySelector(".jleft");
    let num = 0;//往左边动了几格
    setInterval(function () {
        num++;
        if (num == 4) {
            bannerinner.style.marginLeft = "-492px";
            pre.style.display = "block";
            next.style.display = "none";
        }
        if (num == 7) {
            bannerinner.style.marginLeft = "0px";
            pre.style.display = "none";
            next.style.display = "block";
            num = 1;
        }
    }, 2000);
    next.onclick = function () {
        num++;
        if (num == 1) {
            bannerinner.style.marginLeft = "-492px";
            num = 0;
        }
        pre.style.display = "block";
        next.style.display = "none";
    }
    pre.onclick = function () {
        num++;
        if (num == 1) {
            bannerinner.style.marginLeft = "0px";
            num = 0;
        }
        next.style.display = "block";
        pre.style.display = "none";
    }
}
//猫头循环
{
    let masks = document.querySelectorAll(".pinpai .Ltwo>div>a .mask");
    let items = document.querySelectorAll(".pinpai .Lone .item");
    let num = 0;
    let move = function () {
        if (num == items.length) {
            num = 0;
        }
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = "none";
            masks[i].style.display = "none";
        }
        items[num].style.zIndex = 2;
        items[num].style.display = "block";
        masks[num].style.display = "block";
        num++;
    }
    var st = setInterval(move, 2000);
    masks.onmouseover = function () {
        clearInterval(st);
    }
}
//文字滚动
{
    const wenzi01 = document.querySelector(".Lthree ul");
    const wenzi1 = document.querySelectorAll(".Lthree ul li");
    let num = 0;
    setInterval(function () {
        num++;
        if (num == wenzi1.length) {
            num = 0;
        }
        wenzi01.style.marginTop = -num * 42 + "px";
    }, 1000);
}
{
    let wenzi02 = document.querySelectorAll(".title-ctn>ul");
    for(let i=0;i<wenzi02.length;i++){
        move(wenzi02[i]);
    }
    function move(wenzi02) {
        let num = 0;
        var wenzi2 = wenzi02.querySelectorAll("li");
        let st = setInterval(function () {
            wenzi02.style.transition = "all 1s";
            num++;
            if (num == wenzi2.length) {
                num = 0;
            }
            wenzi02.style.marginTop = -num * 30 + "px";
        }, 2000);
        wenzi02.addEventListener("transitionend", function () {
            if (num == wenzi2.length-1) {
                clearInterval(st);
                wenzi02.style.transition = "null"
                wenzi02.style.marginTop = "0px";
                st = setInterval(function () {
                    wenzi02.style.transition = "all 1s"
                    num++;
                    if (num == wenzi2.length) {
                        num = 0;
                    }
                    wenzi02.style.marginTop = -num * 30 + "px";
                }, 2000);
            }
        });

    }
}
//隐藏搜索
{
    let topbar = document.querySelector(".topbar");
    console.log(topbar);
    let obj = document.body.documentElement == 0 ? document.documentElement : document.body;
        window.onscroll = function () {
            if (obj.scrollTop >= 758) {
                topbar.style.top = 0;
            } else if (obj.scrollTop < 758) {
                topbar.style.top = "-50px";
            }
        }
}
//滚动事件
{
    let dianji = document.querySelector(".memeda");
    let floors = document.querySelectorAll(".floor");
    let zuobian=document.querySelector(".fix-right>li:last-child");
    console.log(zuobian);
    let arr = [];
    let obj = document.body.scrollTop == 0 ? document.documentElement : document.body;
    let sc = obj.scrollTop;
    let speed = sc / 1000 * 50;
    dianji.onclick = function () {
        let st = setInterval(function () {
            sc -= speed;
            obj.scrollTop = sc;
            window.addEventListener("scroll",function () {
                if (obj.scrollTop <= 0) {
                    obj.scrollTop = 0;
                    clearInterval(st);
                }
            })
        }, 1000)
    }
    zuobian.onclick = function () {
        let st = setInterval(function () {
            sc -= speed;
            obj.scrollTop = sc;
            window.addEventListener("scroll",function () {
                if (obj.scrollTop <= 0) {
                    obj.scrollTop = 0;
                    clearInterval(st);
                }
            })
        }, 1000)
    }
    floors.forEach(function (value, index) {
        arr.push(value.offsetTop);//每个元素距离浏览器顶部的距离
    })
    let flag = true;
    window.onscroll = function () {
        if (!flag) {
            return;
        }
        let tops = document.body.scrollTop;
        for (let i = 0; i < arr.length; i++) {
            if (tops + window.innerHeight > arr[i] + 200) {
                //图片
                let imgs = floors[i].querySelectorAll('.jiazai img');
                for (let j = 0; j < imgs.length; j++) {
                    imgs[j]['src'] = imgs[j]['title'];
                }
            }
        }
    }
}
//楼层跳转
{
    let cons = document.querySelectorAll(".floor1");
    let left = document.querySelector(".fix-right");
    let lefts = document.querySelectorAll(".fix-right>li");
    let obj = document.documentElement.scrollTop == 0 ? document.body : document.documentElement;
    let colorarr = ["#FF0036", "#EA5F8D", "#19C8A9", "#0AA6E8", "#64C333", "#F15453", "#F7A945", "#000", "rgba(0,0,0,.3);"];
    
    window.addEventListener("scroll", function () {
        if (obj.scrollTop >= 600) {
            left.style.cssText = "width:35px;height:340px";
        } else if (obj.scrollTop < 600) {
            left.style.cssText = "width:0;height:0";
        }
        //  滚动添加颜色
        cons.forEach(function (value, index) {
            let oc = obj.scrollTop;
            if (oc >= cons[index].offsetTop) {
                for (let a = 0; a < lefts.length; a++) {
                    lefts[a].style.background = "";
                }
                lefts[index].style.background = colorarr[index];
            }
        })


        //点击滚动
        lefts.forEach(function (value, index) {
            lefts[index].onclick = function () {
                let ot = cons[index].offsetTop;
                obj.scrollTop = ot;
                animate(obj, {scrollTop: ot}, 1000);
            }

        })


        //移入变色

//        for(let i=0;i<lefts.length;i++){
//            lefts[i].style.background = "";
//
//        }


    })
}




//右边位移

{
    const items = document.querySelectorAll(".fix-left>div>a.weiyi");
    console.log(items);
    const tips = document.querySelectorAll(".fix-left>div>a>div");
    console.log(tips);
    window.onload=function () {
        let st;
        items.forEach(function (ele,index) {
            hover(ele,function(){
                clearTimeout(st);
                st=setTimeout(function () {
                    tips[index].classList.add("flyIn");
                },1000);
            },function(){
                clearTimeout(st);
                if(tips[index].classList.contains("flyIn")){
                    tips[index].classList.add("flyOut");
                }
            })
            tips.forEach(function (ele) {
                ele.addEventListener("animationend", function () {
                    if (ele.classList.contains("flyOut")) {
                        ele.classList.remove("flyIn");
                        ele.classList.remove("flyOut");
                    }
                })
            })
        })

    }


}



