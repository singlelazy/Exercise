// 工厂方式：封装函数
/*function createperson(name){
	//原料
	var obj=new Object();
	//加工
	obj.name=name;
	obj.showName=function(){
		console.log(this.name)
	}
	//出厂
	return obj
}
var p1=createperson("小明");
p1.showName();
var p2=createperson("小强");
p2.showName();*/

//提取new后
//当new去调用一个函数：这时候函数中this就是创建出来的对象，而且函数的返回值就是this(隐式返回)
//new后面的函数就叫做构造函数
/*function createperson(name){
	this.name=name;
	this.showName=function(){
		console.log(this.name)
	}
}*/

//原型的方法：
function createperson(name){
	this.name=name;
}
createperson.prototype.showName=function(){
	console.log(this.name)
}
var p1=new createperson("小明");
p1.showName();
var p2=new createperson("小强");
p2.showName();
