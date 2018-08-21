let s1=Symbol('ys');
let s2=Symbol('ys');

console.log(s1===s2);

//Symbol数据类型的转换
console.log(String(Symbol('ys')))
console.log(Symbol('ys').toString())
console.log(!!Symbol())//true
console.log(Number(Symbol('ys')))//报错，不能转化数字

console.log(Symbol('momo')+"pangzi")//报错，不能做任何运算

//作为对象的属性名
let yyy=Symbol('yyy');
const obj={};
obj[yyy]='hello';
console.log(obj)

let ss=Symbol('ss');

const data={
	[ss]:'miaov'
}

//不能被for in遍历，但是可以通过Object.getOwnPropertySymbols方法获得一个对象的所有Symbol属性