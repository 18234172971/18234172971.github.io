   (function(){
       var designWidth=375;
       var fontSize=100;
       function resize(){
         var width=document.documentElement.clientWidth;
         var size=width/375*100;
         document.querySelector("html").style.fontSize=size+"px";
       }
        resize();
        window.onresize=resize;
     })();