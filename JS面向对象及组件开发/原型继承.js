var a={
	name:"小明"
}
var b=cloneObj(a);
function cloneObj(obj){
	var F=function (){}
	F.prototype=obj;
	return new F();
}


