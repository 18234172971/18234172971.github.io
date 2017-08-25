/*
* @Author: lenovo
* @Date:   2017-05-04 15:04:44
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-06 14:08:02
*/

'use strict';

//获取指定元素的子元素节点
//1.左右子节点获取
//2筛选
function getChilds(obj){
	let childs=obj.childNodes;
	let arr=[];
	childs.forEach(function(value){
		if(value.nodeType==1){
			arr.push(value);

		}

	})
	return arr;

}


function getFirst(obj){
	return getChilds(obj)[0];

}
function getLast(obj){
	let childs=getChilds(obj);
	return childs[childs.length-1];

}
function getNum(obj,num){
	let childs=getChilds(obj);
	return childs[num];

}



//getNext
function getNext(obj){
	let a=obj.nextSibling;
	if(a===null){
		return false;

	}
	while(a.nodeType==1){
		a=a.nextSibling;
		if(a===null){
		return false;

		}

	}
	return a;
}