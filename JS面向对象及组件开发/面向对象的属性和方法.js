//hasOwnProperty 看看是不是自身下面的属性
var arr=[];
arr.num=10;
Array.prototype.num2=20;

console.log(arr.hasOwnProperty('num'));//true
console.log(arr.hasOwnProperty('num2'));//false

//constructor 查看对象的构造函数
function Aaa(){

}
var a1=new Aaa();
console.log(a1.constructor) //function Aaa(){}


//instanceof 

console.log(a1 instanceof Aaa) //true 可以用作判断

//toString 把对象转成字符串
var arr=[1,2,3]
Array.prototype.toString=function(){
	return this.join("+")
}
console.log(arr.toString()) //1+2+3
//转16进制
var num =255;
console.log(num.toString(16));
//toString做类型的判断
var arr=[];
console.log(Object.prototype.toString.call(arr)=='[object Array]') //object Array | object Object | object Date
