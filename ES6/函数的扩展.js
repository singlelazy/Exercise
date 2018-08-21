//1.为函数的参数指定默认值

// function fn(a,b){
// 	a=a||10;
// 	b=b||20;
// }

function fn(a=10,b=20){
}

//2.rest
//rest参数的形式为('...变量名')，用于获取函数的多余参数，这样就不用使用arguments对象了。
//rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中

// function sum(){
// 	var args=arguments;
// 	var res=0;
// 	for(var i=0;i<args.length;i++){
// 		res+=args[i];
// 	}
// 	console.log(res)
// }
sum(10,1,2,3,4,5)
function sum(a,...arr){
	var res=a;
	for(var i in arr){
		res+=arr[i]
	}
	console.log(res)
}
//箭头函数
const fn=(a,b)=>a+b
const fn=(a,b)=>({a,b})//{a:1,b:2}
fn(1,2)
//箭头函数没有自己的this对象，所以在使用的过程中，其内部的this就是定义时所在环境的对象，而不是使用时所在环境的对象
function fn(){
	setTimeout(function(){
		console.log(this)
	},1000);//window
	setTimeout(()=>{
		console.log(this)
	},1000)//obj
}
fn.call(obj)
//不能给箭头函数使用call apply bind 去改变其内部的this指向

//箭头函数体内没有arguments对象，如果要用，可以用rest参数代替
const fn=(...arr)=>arr

// 不可以当作构造函数，不可以使用new命令，否则会抛出一个错误


