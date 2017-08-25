/*
* @Author: Administrator
* @Date:   2017-05-13 13:54:07
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-31 17:08:58
*/

'use strict';
function $(selector,ranger=document){
	let type=typeof selector;
	if(type=='string'){
		let select=selector.trim();
		let first=select.charAt(0); 
		if(first=='.'){
			//截取第一个字符
			return ranger.getElementsByClassName(select.substring(1));
		}else if(first=='#'){
			return document.getElementById(select.substring(1));
			//判断字符串是否符合标签的规则    正则
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
			return ranger.getElementsByTagName(select);
		}
	}else if(type=='function'){
		window.onload=function(){
			selector();
		}
	}
}

$(function(){
	//标题栏
	let topbar3=$('.topbar3')[0];
	let topbar3A=$('a',topbar3)[0];
	let topbars=$('.topbars')[0];
	topbar3.onmouseenter=function(){
		topbar3.style.background='#fff';
		topbar3A.style.color='#FF6700';
		topbars.style.display='block';
	}
	topbar3.onmouseleave=function(){
		topbar3.style.background='#424242';
		topbar3A.style.color='#B0B0B0';
		topbars.style.display='none';
	}
	
	//导航栏
	let dao=$('.dao0')[0];
	let lis=$('.ds');
	let lia=$('.link');
	let daoChild=$('.dao-child');
	for(let i=0;i<lis.length-2;i++){
		lis[i].onmouseenter=function(){
			lia[i].style.color='#ff6700';
			daoChild[i].style.display='block';
		}
		lis[i].onmouseleave=function(){
			lia[i].style.color='#333';
			daoChild[i].style.display='none';
		}
	}

	//banner
	let banner=$('.banner')[0];
	let imgb=$('.imgb')[0];
	let imgs=$('li',imgb);
	let imgWidth=parseInt(getComputedStyle(imgb,null).width);
	let slider=$('.slider')[0];
	let slider0=$('li',slider);
	let leftb=$('.leftb')[0];
	let rightb=$('.rightb')[0];	
	let current=0,next=0;
	let flag=true;
	let t;
	for(let i=0;i<imgs.length;i++){
		if(i==0){
			continue;
		}
		imgs[i].style.left=imgWidth+"px";
	}
	t=setInterval(move,3000);
	for(var i=0;i<slider0.length;i++){
			slider0[i].index=i;
			slider0[i].onclick=function(){
				if(this.index==current){
					return;
				}
				if(this.index>current){
					slider0[current].className='';
					this.className='slider0';
					imgs[this.index].style.left=imgWidth+'px';
					animate(imgs[current],{left:-imgWidth});
					animate(imgs[this.index],{left:0});
					current=next=this.index;
				}else if(this.index<current){
					slider0[current].className='';
					this.className='slider0';
					imgs[this.index].style.left=-imgWidth+'px';
					animate(imgs[current],{left:imgWidth});
					animate(imgs[this.index],{left:0});
					current=next=this.index;
				}
			}
		}
	function move(){
		next++;
		if(next==imgs.length){
			next=0
		}
		imgs[next].style.left=imgWidth+'px';
		animate(imgs[current],{left:-imgWidth});
		animate(imgs[next],{left:0},function(){flag=true});
		slider0[current].className='';
		slider0[next].className='slider0';
		current=next;		
	}
	function moveDown(){
		next--;
		if(next==-1){
			next=imgs.length-1;
		}
		imgs[next].style.left=-imgWidth+'px';
		animate(imgs[current],{left:imgWidth});
		animate(imgs[next],{left:0},function(){flag=true});
		imgs[next].style.left=0;
		slider0[current].className='';
		slider0[next].className='slider0';
		current=next;
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	leftb.onclick=function(){
		if(flag){
			flag=false;
			moveDown();
		}
	}
	rightb.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		move();
	}

	//侧边栏
	let side=$('.side')[0];
	let sides=$('.sides',side);
	let side0=$('.side0',side);
	for(let i=0;i<sides.length;i++){
		sides[i].onmouseenter=function(){
			sides[i].style.background='#ff6700';
			side0[i].style.display='block';
		}
		sides[i].onmouseleave=function(){
			sides[i].style.background='';
			side0[i].style.display='none';
		}
	}

	//推荐
	let tui=$('.tui')[0];
	let tuiss=$('.tuiss',tui);
	let tuiic=$('i',tui);
	for(let i=0;i<tuiss.length;i++){
		tuiss[i].onmouseenter=function(){
			tuiss[i].style.color='#fff';
			tuiic[i].style.color='#fff';
		}
		tuiss[i].onmouseleave=function(){
			tuiss[i].style.color='';
			tuiic[i].style.color='';
		}
	}

	//小米明星单品
	let pinbox=$('.pinbox')[0];
	let pinboxs=$('.pinboxs',pinbox);
	let widths=parseInt(getStyle(pinboxs[0],'width'))+parseInt(getStyle(pinboxs[0],'margin-right'));
	let danl=$('.danl')[0];
	let danr=$('.danr')[0];
	let youjt=$('.youjt')[0];
	let zuojt=$('.zuojt')[0];
	let t1;
	t1=setInterval(movel,3000);
	danl.onclick=function(){
		if(flag=true){
			movel();
			flag=false;			
		}
	}
	danr.onclick=function(){
		if(flag!=false){
			mover();
			flag=true;
		}		
	}
	function movel(){
		pinbox.style.left=0;
		animate(pinbox,{left:-5*widths},function(){
			for(let i=0;i<5;i++){
				let first=getFirst(pinbox);
				pinbox.appendChild(first);
				pinbox.style.left=0;
			}
			//flag=true;
		})
	}
	function mover(){
		for(let i=0;i<5;i++){
			let last=getLast(pinbox);
			let first=getFirst(pinbox);
			pinbox.insertBefore(last,first);
			pinbox.style.left=-widths+'px';
			animate(pinbox,{left:0},function(){
				//flag=false;
			})
		}
	}
	function getStyle(obj,attr){
		if(window.getComputedStyle){
			return getComputedStyle(obj,null)[attr];
		}else{
			return obj.currentStyle[attr];
		}
	}

	//智能硬件
	let nengb=$('.nengb')[0];
	let tabl=$('.tab-list',nengb);
	let tabn=$('li',nengb);
	let tab=$('.tab')[0];
	let taba=$('li',tab);
	taba[0].style.color='#ff6700';
	taba[0].style.borderBottom='2px solid #ff6700';
	for(let i=0;i<taba.length;i++){
		taba[i].onmouseenter=function(){
			for(let j=0;j<tabl.length;j++){
				taba[j].style.color='';
				taba[j].style.borderBottom='';
				tabl[j].style.display='none';
			}
			taba[i].style.color='#ff6700';
			taba[i].style.borderBottom='2px solid #ff6700';
			tabl[i].style.display='block';
		}
	}

	//搭配
	let huilb=$('.huilb')[0];
	let tablh=$('.tab-list',huilb);
	let tabh=$('li',huilb);
	let tabs=$('.tab')[1];
	let tabas=$('li',tabs);
	tabas[0].style.color='#ff6700';
	tabas[0].style.borderBottom='2px solid #ff6700';
	for(let i=0;i<tabas.length;i++){
		tabas[i].onmouseenter=function(){
			for(let j=0;j<tablh.length;j++){
				tabas[j].style.color='';
				tabas[j].style.borderBottom='';
				tablh[j].style.display='none';
			}
			tabas[i].style.color='#ff6700';
			tabas[i].style.borderBottom='2px solid #ff6700';
			tablh[i].style.display='block';
		}
	}

	//配件
	let huilb1=$('.huilb')[1];
	let tablh1=$('.tab-list',huilb1);
	let tabh1=$('li',huilb1);
	let tabs1=$('.tab')[2];
	let tabas1=$('li',tabs1);
	tabas1[0].style.color='#ff6700';
	tabas1[0].style.borderBottom='2px solid #ff6700';
	for(let i=0;i<tabas1.length;i++){
		tabas1[i].onmouseenter=function(){
			for(let j=0;j<tablh1.length;j++){
				tabas1[j].style.color='';
				tabas1[j].style.borderBottom='';
				tablh1[j].style.display='none';
			}
			tabas1[i].style.color='#ff6700';
			tabas1[i].style.borderBottom='2px solid #ff6700';
			tablh1[i].style.display='block';
		}
	}

	//周边
	let huilb2=$('.huilb')[2];
	let tablh2=$('.tab-list',huilb2);
	let tabh2=$('li',huilb1);
	let tabs2=$('.tab')[3];
	let tabas2=$('li',tabs2);
	tabas2[0].style.color='#ff6700';
	tabas2[0].style.borderBottom='2px solid #ff6700';
	for(let i=0;i<tabas2.length;i++){
		tabas2[i].onmouseenter=function(){
			for(let j=0;j<tablh2.length;j++){
				tabas2[j].style.color='';
				tabas2[j].style.borderBottom='';
				tablh2[j].style.display='none';
			}
			tabas2[i].style.color='#ff6700';
			tabas2[i].style.borderBottom='2px solid #ff6700';
			tablh2[i].style.display='block';
		}
	}

	//为你推荐
	let nibox=$('.nibox')[0];
	let niboxs=$('.niboxs',nibox);
	let widthss=parseInt(getStyle(niboxs[0],'width'))+parseInt(getStyle(niboxs[0],'margin-right'));
	let ls=$('.ls')[0];
	let rs=$('.rs')[0];

	ls.onclick=function(){
		if(flag=true){
			movels();
			flag=false;			
		}
	}
	rs.onclick=function(){
		console.log(flag)
		if(flag!=false){
			movers();
			flag=true;
		}		
	}
	function movels(){
		nibox.style.left=0;
		animate(nibox,{left:-5*widthss},function(){
			for(let i=0;i<5;i++){
				let first=getFirst(nibox);
				nibox.appendChild(first);
				nibox.style.left=0;
			}
			flag=true;
		})
	}
	function movers(){
		for(let i=0;i<5;i++){
			let last=getLast(nibox);
			let first=getFirst(nibox);
			nibox.insertBefore(last,first);
			nibox.style.left=-widthss+'px';
			animate(nibox,{left:0},function(){
				flag=true;
			})
		}
	}

	//内容
	let rongs=$('.rongs');
	//内容1
	let nei1=$('.nei')[0];
	let neis1=$('.neis',nei1);
	let dbl1=$('.dbl')[0];
	let dbr1=$('.dbr')[0];
	let pager1=$('.pager')[0];
	let pagers1 = pager1.querySelectorAll('.rongpage ul li');
	let dot1=pager1.querySelectorAll('.rongpage ul li span');
	console.log(dot1)
	let widthsn=parseInt(getStyle(neis1[0],'width'));
	lunbo(neis1,widthsn,pagers1,dbl1,dbr1,dot1);


	//内容2
	let nei2=$('.nei')[1];
	let neis2=$('.neis',nei2);
	let dbl2=$('.dbl')[1];
	let dbr2=$('.dbr')[1];
	let pager2=$('.pager')[1];
	let pagers2=pager2.querySelectorAll('.rongpage ul li');
	let dot2=pager2.querySelectorAll('.rongpage ul li span');
	console.log(dot2)
	lunbo(neis2,widthsn,pagers2,dbl2,dbr2,dot2);

	//内容3
	let nei3=$('.nei')[2];
	let neis3=$('.neis',nei3);
	let dbl3=$('.dbl')[2];
	let dbr3=$('.dbr')[2];
	let pager3=$('.pager')[2];
	let pagers3=pager3.querySelectorAll('.rongpage ul li');
	let dot3=pager3.querySelectorAll('.rongpage ul li span');
	lunbo(neis3,widthsn,pagers3,dbl3,dbr3,dot3);

	//内容4
	let nei4=$('.nei')[3];
	let neis4=$('.neis',nei4);
	let dbl4=$('.dbl')[3];
	let dbr4=$('.dbr')[3];
	let pager4=$('.pager')[3];
	let pagers4=pager4.querySelectorAll('.rongpage ul li');
	let dot4=pager4.querySelectorAll('.rongpage ul li span');
	lunbo(neis4,widthsn,pagers4,dbl4,dbr4,dot4);

    function lunbo(obj,widths,pagers,dbl,dbr,dot){
    	let current=0,next=0;
    	for(let i=0;i<obj.length;i++){
    		if(i==0){
    			continue;
    		}
    		obj[i].style.left=widths+'px';
    	}
    	pagers[next].className='pagersActive';
    	dot[next].className='dot0';
    	dbr.onclick=function(){
    		movedbl();
    	}
    	dbl.onclick=function(){
    		movedbr();
    	}
    	function movedbl(){
    		next++;
    		if(next==obj.length){
    			next=0;
    		}
    		console.log(pagers)
    		pagers[current].className='';
    		dot[current].className='';
    		pagers[next].className='pagersActive';
    		dot[next].className='dot0';
    		obj[next].style.left=widths+'px';
    		animate(obj[next],{left:0})
    		animate(obj[current],{left:-widths})
    		current=next;
    	}
    	function movedbr(){
    		next--;
    		if(next<0){
    			next=obj.length-1;
    		}
    		obj[next].style.left=-widths+'px';
    		pagers[current].className='';
    		dot[current].className='';
    		pagers[next].className='pagersActive';
    		dot[next].className='dot0';
    		animate(obj[next],{left:0})
    		animate(obj[current],{left:widths})
    		current=next;
    	}

    }

})	