//...作用
//1 将一个数组，变为参数序列
    let add = (x, y) => x + y;
    let numbers = [3, 45];
    console.log(add(...numbers))//48
//2 使用扩展运算符展开数组代替apply方法，将数组转为函数的参数
	//ES5 取数组最大值
	console.log(Math.max.apply(this, [654, 233, 727]))；
	//ES6 扩展运算符
	console.log(Math.max(...[654, 233, 727]))
	//相当于
	console.log(Math.max(654, 233, 727))
//3 使用push将一个数组添加到另一个数组的尾部
	// ES5  写法  
	var arr1 = [1, 2, 3];  
	var arr2 = [4, 5, 6];  
	Array.prototype.push.apply(arr1, arr2); 
	//push方法的参数不能是数组，通过apply方法使用push方法 
	// ES6  写法  
	let arr1 = [1, 2, 3];  
	let arr2 = [4, 5, 6];  
	arr1.push(...arr2); 
//4 合并数组
	var arr1 = ['a', 'b'];  
	var arr2 = ['c'];  
	var arr3 = ['d', 'e'];  
	// ES5 的合并数组  
	arr1.concat(arr2, arr3);  
	// [ 'a', 'b', 'c', 'd', 'e' ]  
	// ES6 的合并数组  
	[...arr1, ...arr2, ...arr3]  
	// [ 'a', 'b', 'c', 'd', 'e' ] 
//5 将字符串转换为数组
	//ES5
	str.split('')
	//ES6
	[...'hello'] 
//6 转换伪数组为真数组
	var nodeList = document.querySelectorAll('p');  
	var array = [...nodeList]; 
	//具有iterator接口的伪数组，非iterator对象用Array.from方法
//7 map结构
	let map = new Map([  
	[1, 'one'],  
	[2, 'two'],  
	[3, 'three'],  
	]);  
	let arr = [...map.keys()]; // [1, 2, 3]