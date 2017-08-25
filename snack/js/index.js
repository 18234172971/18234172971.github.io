/**
 * Created by Administrator on 2017/8/10.
 */
let flag=true;
let scorenum=0;
let statenum=1;
let speed=5;
var score=$("#score");
for (var i=0; i < 20; i++) {
    for (var j=0; j < 20; j++) {
        $("<div></div>").addClass("block").attr("id", j + "-" + i).appendTo(".scene");
    }
}
var snackArr=[{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}];
var snackHead=snackArr[snackArr.length - 1];
function drawSnack() {
    $(".snackbody").removeClass("snackbody");
    $(".snackheadr").removeClass("snackheadr");
    $(".snackheadl").removeClass("snackheadl");
    $(".snackheadt").removeClass("snackheadt");
    $(".snackheadb").removeClass("snackheadb");
    $.each(snackArr, function (index, value) {
        $("#" + value.x + "-" + value.y).addClass("snackbody");
    });
    switch(dir){
        case "r": $("#"+snackHead.x+"-"+snackHead.y).addClass("snackheadr");break;
        case "l": $("#"+snackHead.x+"-"+snackHead.y).addClass("snackheadl");break;
        case "t": $("#"+snackHead.x+"-"+snackHead.y).addClass("snackheadt");break;
        case "b": $("#"+snackHead.x+"-"+snackHead.y).addClass("snackheadb");break;
    }
}
var dir="r";
function move() {
    switch (dir) {
        case "r":
            snackHead={x: snackHead.x + 1, y: snackHead.y};
            break;
        case "l":
            snackHead={x: snackHead.x - 1, y: snackHead.y};
            break;
        case "t":
            snackHead={x: snackHead.x, y: snackHead.y - 1};
            break;
        case "b":
            snackHead={x: snackHead.x, y: snackHead.y + 1};
            break;
    }

    snackArr.push(snackHead);
    var head=$("#"+snackHead.x+"-"+snackHead.y);
    if(head.hasClass("snackbody")||head.length===0){
        alert(`游戏结束，得分${scorenum}`);
            clearInterval(st);
            location.reload();
            flag=true;
    }
    if(head.hasClass("food")){
        head.removeClass("food");
        scorenum++;
        $("#score").html(scorenum);
        createFood();
        if(scorenum%2===0){
            statenum++;
            $("#state").html(statenum);
            speed++;
            console.log(1);
        }
    }else{
        snackArr.shift();
    }
    drawSnack();
}

let st=setInterval(move,500);
$(document).keydown(function (e) {
    switch (e.keyCode) {
        case 65:
        case 37:
            dir="l";
            break;
        case 87:
        case 38:
            dir="t";
            break;
        case 68:
        case 39:
            dir="r";
            break;
        case 83:
        case 40:
            dir="b";
            break;
    }
});
function createFood() {
    do {
        var rx=Math.floor(Math.random() * 20);
        var ry=Math.floor(Math.random() * 20);
    }while($("#"+rx+"-"+ry).hasClass("snackbody"));
    $("#"+rx+"-"+ry).addClass("food");
}
let kaiguan=false;
$("#start").click(function(){
    if(kaiguan===false){
        flag=false;
        drawSnack();
        st=setInterval(move,500);
        kaiguan=true;
        createFood();
    }
})
if(flag===true){
    clearInterval(st);
}
$("#stop").click(function(){
    if(kaiguan===true){
        if($(this).html()==="暂停"){
            $(this).html("继续");
            clearInterval(st);
        }else{
            $(this).html("暂停");
            st=setInterval(move,500);
        }
    }
})
