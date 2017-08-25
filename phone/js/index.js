
//文本内容
$("#text").on("keydown keyup",function(){
    var l=$(this).val().length;
    if(l>40){
        l=40;
        $(this).val(function(i,val){
            alert("文字已超出")
            return val.slice(0,40);
        })
    }
    $(".notic span:first-child").text(function(){
        return l<10?"0"+l:l;
    })
})

//加号
$(".leftbar i").click(function(){

    $(".wait").slideUp(300);
    $(".add").slideDown(200);
    $(".done").hide(300);

})

//查看
$(".leftbar span").click(function(){
    $("footer").slideDown(200);
})

//关闭
$(".guanbi").click(function(){
    $(".add").slideUp(300);
    $(".wait").delay(200).slideDown(300)
})


//选项卡
$(" ul li").click(function(){
    var index=$(this).index();
    $(".item").hide().eq(index+1).show();
})


//点击提交
$("#submit").click(function(){
    var val=$("#text").val();
    if(val==""){
        alert("请输入内容");
        return;
    }
    var data=getData();
    var date=new Date();
    var time=date.getTime();
    data.push({text:val,time,isDone:false,isStar:false});
    saveData(data);
    alert("添加成功")
    $("#text").val("");
    $(".notice span:first-child").text("00");
    reWrite();
})

//获取信息部分
function getData(){
    if(localStorage.todo){
        return JSON.parse(localStorage.todo);
    }else{
        return [];
    }
}

//保存信息部分
function saveData(data){
    localStorage.todo=JSON.stringify(data);
}


//重绘页面
function reWrite(){
    $(".item ul").empty();
    var data=getData();
    var str1="",str2="";
    $.each(data,function(index,val){
        if(val.isDone==false){
            str1+=`<li id="${index}">
                    <input type="checkbox">
                    <p>${val.text}</p>
                    <time><i>&#xe602;</i>${time(val.time)}</time>
                `;
            if(val.isStar){
                str1+=`<i class="active">&#xe601;</i></li>`;
            }else{
                str1+=`<i>&#xe601;</i></li>`;
            }
        }else{
            str2+=`<li id="${index}">
                    <input type="checkbox">
                    <p>${val.text}</p>
                    <time><i>&#xe602;</i>${time(val.time)}</time>
                    `;
            if(val.isStar){
                str2+=`<i class="active">&#xe601;</i></li>`;
            }else{
                str2+=`<i>&#xe601;</i></li>`;
            }
        }
    })
    $(".wait ul").html(str1);
    $(".done ul").html(str2);
}
reWrite();


//移动到已完成
$(".movebtn").click(function(){
    var data=getData();
    $(".wait ul li").each(function(index,ele){
        if($(this).find("input").prop("checked")){
            var index=$(this).attr("id");
            data[index].isDone=true;
        }
    })
    saveData(data);
    reWrite();
})


//删除已完成
$(".clearbtn").click(function(){
    var data=getData();
    $(".done ul li").each(function(index,value){
        if($(this).find("input").prop("checked")){
            var index =$(this).attr("id");
            data[index].isDelete=true;
        }
    })
    data=data.filter(function(ele){
        return !ele.isDelete;
    })
    saveData(data);
    reWrite();
})


//事件委派
$(".wait ul").on("click","i",function(){
    var data=getData();
    var index=$(this).parent().attr("id");
    data[index].isStar=!data[index].isStar;
    saveData(data);
    reWrite();
})
$(".item ul").on("click","p",function(){
    alert($(this).html());
})
console.log($("#text"));


//跳转到添加页面
$(".addbtn").click(function(){
    $(".item").hide().siblings(".add").slideDown(500);
})










//时间函数
function time(ms){
    var date=new Date();
    date.setTime(ms);
    var year=date.getFullYear();
    var month=addZero(date.getMonth()+1)
    var day=addZero(date.getDate());
    var hour=addZero(date.getHours());
    var min=addZero(date.getMinutes());
    var sec=addZero(date.getSeconds());
    return year+"/"+month+"/"+day+" "+hour+":"+min+":"+sec;
}
function addZero(num){
    return num<10?"0"+num:num;
}


