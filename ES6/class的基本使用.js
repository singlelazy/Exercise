/*
const Miaov=function(a,b){
	this.a=a;
	this.b=b;
	return this;
}

Miaov.prototype={
	constructor:Miaov,
	print:function(){
		console.log(this.a+" "+this.b);
	}
}

const miaov=new Miaov('hello','world').print();
*/
class Miaov {
	constructor(a,b){
		this.a=a;
		this.b=b;
		return this;
	}
	print(){
		console.log(this.a+" "+this.b)
	}
}
const miaov=new Miaov('hello','world').print();

/*1.Miaov中的constructor方法是构造方法，this关键字代表实例对象。
也就是说,ES5中的构造函数Miaov，对应Es6中的Miaov这个类的构造方法*/

/*2.Miaov这个类除了构造方法,还定义了一个print方法。注意，定义"类"的方法的时候，前面不需要加上
function这个关键字，直接把定义的函数放进去就可以了。另外，方法之间不需要用逗号分割，加了会报错*/

/*3.构造函数的prototype属性，在ES6的"类"上面继续存在。而且类的方法都定义在类的prototype属性上面*/

/*4.定义在类中的方法都是不可以枚举的*/

/*5.constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法
，如果没有显示定义，一个空的constructor方法会被默认被添加*/