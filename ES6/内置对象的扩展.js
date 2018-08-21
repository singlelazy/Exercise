//字符串扩展
//模板字符串
	// `${变量}`
//repeat
	let str1='a';
	let str2=str1.repeat(3);
	console.log(str2)
//includes() startsWith() endsWith()
	let str3='jasdsia'
	console.log(str3.includes('as'));//true
	console.log(str3.includes('aa'))//false
	
	console.log(str3.startsWith('m'))//false
	console.log(str3.startsWith('j'))//true
//数组的拓展
//将类数组转换为数组
	// Array.from()
//Array.of()创建数组
	const arr=Array.of(1)
	console.log(arr)//[1]
//Array.find()，findIndex()查找数组中符合条件的元素，并返回第一个符合这个条件的元素,和该元素的下标
	const arr1=[1,2,3,4]
	let res=arr1.find(function(a){
		return a<2
	})
	console.log(res)//1
//Array.fill对数组进行填充
	arr1.fill('abc',1,3)
	console.log(arr1)//[ 1, 'abc', 'abc', 4 ]
// 对象的扩展
// 对象的简介表示方法
	let a=1;
	const obj={
		a:a
	}
	const obj={a}
	const obj2={
		fn:function(){

		},
		fn2(){

		}
	}
// Object.is
	console.log(Object.is(NaN,NaN))//true
	console.log(Object.is(+0,-0))//true
// Object.assign()
//用于对象的合并，将原对象的所有可枚举属性，复制到目标属性
	let obj1={a:1}
	let obj2={a:2,b:3};
	let obj3={c:'abc'}
	Object.assign(obj1,obj2,obj3)//{a:2,b:3,c:'abc'}