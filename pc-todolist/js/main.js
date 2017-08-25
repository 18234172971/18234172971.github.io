//控制字数
$("#text").on("keydown keyup",function () {
    // console.log($(this).val())
    var l=$(this).val().length;
    if(l>40){
        alert("字数超过限制");
        l=40;
        // $(this).val($(this).val().slice(0,40));
        $(this).val(function (i,val) {
            return val.slice(0,40);
        })
    }
    $(".notice span").text(function () {
        return l<10?"0"+l:l;
    });
})

//点击提交部分
$("#submit").click(function () {
    var val=$("#text").val();
    if(val===""){
        alert("请输入要提交的内容");
    }
    var data=getData();
    var date=new Date();
    var time=date.getTime();
    data.push({text:val,time:time,isDone:false,isStar:false,isDelete:false});
    saveData(data);
    $("#text").val("");
    $(".notice span").text("00");
    location.reload();
})

//关闭添加界面
$(".close").click(function () {
    $(".add").slideUp(500);
    $(".wait").delay(500).slideDown(1000);
})

//获取信息的函数
function getData() {
    if(localStorage.todo){
        return JSON.parse(localStorage.todo);
    }else{
        return [];
    }
}

//保存信息的函数
function saveData(data) {
    localStorage.todo=JSON.stringify(data);
}

//重绘页面
function reWrite() {
    $(".item ul").empty();
    var data=getData();
    var str1="",str2="";
    $.each(data,function (index,value) {
        if(value.isDone===false){
            str1+=`<li id="${index}">
                    <input type="checkbox" class="checkbox">
                    <p>${value.text}</p>
                    <time>${time(value.time)}</time>
                `;
            if(value.isStar){
                str1+=`<i class="iconfont active">&#xe602;</i></li>`;
            }else{
                str1+=`<i class="iconfont">&#xe602;</i></li>`;
            }
        }else{
            str2+=`<li id="${index}">
                    <input type="checkbox" class="checkbox">
                    <p>${value.text}</p>
                    <time>${time(value.time)}</time>
                `;
            if(value.isStar){
                str2+=`<i class="iconfont active">&#xe602;</i></li>`;
            }else{
                str2+=`<i class="iconfont">&#xe602;</i></li>`;
            }
        }
    })
    $(".wait ul").html(str1);
    $(".done ul").html(str2);
}
reWrite();

//处理时间格式的函数
function time(ms) {
    var date=new Date();
    date.setTime(ms);//保存时间
    var year=date.getFullYear();
    var month=addZero(date.getMonth()+1);
    var day=addZero(date.getDate());
    var hour=addZero(date.getHours());
    // var min=date.getUTCMinutes();
    var min=addZero(date.getMinutes());
    var sec=addZero(date.getSeconds());
    return year+"/"+month+"/"+day+" "+hour+":"+min+":"+sec;
}
function addZero(num) {
    return num<10?"0"+num:num;
}

$(".searchwait").click(function () {
    $(".container>div").hide().siblings(".wait").slideDown(800);
});
$(".searchdone").click(function () {
    $(".container>div").hide().siblings(".done").slideDown(800);
});

//移动到已完成
$(".movedone").click(function () {
    var data=getData();
    $(".wait ul li").each(function () {
        if($(this).find("input").prop("checked")){
            var index=$(this).attr("id");
            data[index].isDone=true;
        }
    });
    saveData(data);
    reWrite();
});

//删除已完成
$(".clearbtn").click(function () {
    var data=getData();
    $(".done ul li").each(function () {
        if($(this).find("input").prop("checked")){
            var index=$(this).attr("id");
            data[index].isDelete=true;
        }
    });
    data=data.filter(function (ele) {
        return !ele.isDelete;
    });
    saveData(data);
    reWrite();
});
//跳转/到添加页面
$(".addsubmit").click(function () {
    $(".item").hide().siblings(".add").slideDown(800);
});

//点击星星的效果
$(".wait ul").on("click","i",function () {
    var data=getData();
    var index=$(this).parent().attr("id");
    data[index].isStar=!data[index].isStar;
    saveData(data);
    reWrite();
})

// $(".item ul").on("click","p",function () {
//    
// })

//复选框
$(".all").click(function () {
    $(this).css("display","none");
    $(".none").css("display","block");
    $(".checkbox").each(function () {
        $(this).prop("checked",true);
    })
})
$(".none").click(function () {
    $(this).css("display","none");
    $(".all").css("display","block");
    $(".checkbox").each(function () {
        $(this).prop("checked",false);
    })
})
