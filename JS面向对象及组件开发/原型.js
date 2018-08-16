/*原型：可复用
普通方法：优先级高*/

var arr=[1,2,3,4,5]
var arr2=[1,2,3,4,5,6,7]

//普通方法
/*arr.sum=function(){
	var result =0;
	for(var i=0;i<this.length;i++){
		result+=this[i]
	}
	return result
}
arr2.sum=function(){
	var result =0;
	for(var i=0;i<this.length;i++){
		result+=this[i]
	}
	return result
}*/
Array.prototype.sum=function(){
	var result =0;
	for(var i=0;i<this.length;i++){
		result+=this[i]
	}
	return result
}
console.log(arr.sum());
console.log(arr2.sum());