//let 
//----------------------------------------
//1.变量只在命令所在的代码块内有效
/*	{
		let a=1;
		var b=2;
		console.log(a);
	}
		console.log(a);
		console.log(b)*/

//2.变量在域解析时不会被提升
	/*console.log(a);
	var a=1;

	console.log(b);
	let b=2;*/

	/*let f=10;
	function fn(){
		f=7;	//暂时性死区
		let f=2;
	}
	fn();
	console.log(f)*/

//3.不允许在用一作用域下声明已经存在的变量
	// var a=1;
	// let a;

//4.let在循环语句中是一个父作用域，在循环体之中是一个子作用域
	/*for(let i=0;i<3;i++){
		let i=10;
		console.log(i)
	}
	console.log(i)*/

//--------------------------------------------------------------
//const
//声明的常量存储简单的数据类型的时候是不可改变其值的，
//如果存储的是对象，那么引用不可以被改变,至于对象里面的数据是如何变化的，没关系

const obj ={a:10}
obj.a=20;

