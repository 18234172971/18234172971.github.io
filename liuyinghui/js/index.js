

{
    let pre=document.querySelector(".guding>div>ul .jiantou");
    let next=document.querySelector(".guding>div>ul .jiantou1");
    let wheels=document.querySelectorAll(".guding>div>ul .dian");
    let wheels1=document.querySelectorAll(".row1>div:nth-child(2)>ul>li");
    let lis=document.querySelectorAll(".bannerbox>ul>li");
    let pink=document.querySelector(".bannerbox>ul>li>div .pink");
    let dianji=document.querySelector("dianji");
    console.log(pre);
    console.log(next);
    console.log(wheels);
    console.log(lis);
    console.log(pink);
    console.log(wheels1);
    let now=0;
    let next1;
    let z=10;
    lis.forEach(function (ele) {
        ele.addEventListener("animationend",function () {
            ele.className="";
        })
    });
    let st=setInterval(move,1500);
    function move() {
        let index;
        index=now+1;
        if(index==lis.length){
            index=0;
        }
        lis[now].classList.add("rightout");
        lis[index].classList.add("rightin");
        lis[index].style.zIndex=z++;
        wheels[now].classList.remove("dian1");
        wheels[index].classList.add("dian1");
        wheels1[now].classList.remove("li-active");
        wheels1[index].classList.add("li-active");
        now=index;
    }
    pre.onclick=function () {
        clearInterval(st);
        next1=now+1;
        if(next1==lis.length){
            next1=0;
        }
        lis[now].classList.add("leftout");
        lis[next1].classList.add("leftin");
        lis[next1].style.zIndex=z++;
        wheels[now].classList.remove("dian1");
        wheels[next1].classList.add("dian1");
        now=next1;
    }
    next.onclick=function () {
        clearInterval(st);
        next1=now-1;
        if(next1==-1){
            next1=lis.length-1;
        }
        lis[now].classList.add("rightout");
        lis[next1].classList.add("rightin");
        lis[next1].style.zIndex=z++;
        wheels[now].classList.remove("dian1");
        wheels[next1].classList.add("dian1");
        now=next1;
    }
    pink.onclick=function () {
        dianji.style.display="block";
        alert(1);
    }

}
    // var bb=$(".bb");
    // $(".bb").each().$(".bb").on("mouseover",function () {
    //     $(this).css({opacity:1,transition:".5s all"});
    //     $(".b").slideUp(500).css({background:"none",bottom:"100px"});
    // })
    // $(".bb").on("mouseout",function () {
    //     $(this).css({opacity:0,transition:".5s all"})
    //     $(".b").slideDown(500).css({background:"#00bfff",bottom:"0px"});
    // });
//标题
$("#right-fix").click(function () {

})



