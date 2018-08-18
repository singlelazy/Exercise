//类：JS是没有类的概念的,把JS中的构造函数看做的类
//要做属性和方法继承的时候,要分开继承
	function Aaa(){		//父类
	this.name=[1,2,3];
}
Aaa.prototype.showName=function(){
	console.log(this.name);
}

function Bbb(){ //子类
	Aaa.call(this);
}

var F=function(){};
F.prototype=Aaa.prototype;
Bbb.prototype=new F();
Bbb.prototype.constructor=Bbb;

var b1=new Bbb();
b1.name.push(4)
var b2=new Bbb();
console.log(b2.name)	