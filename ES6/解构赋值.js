//数组的结构赋值
let [a,[[b],c]]=[1,[[2],3]]
console.log(a,b,c);  //1,2,3

let[,,c]=[1,2,3]
consle.log(c) //3

let [x]=[];
console.log(x) //undefined

let [y=1]=[];
console.log(x) //1

//-------------------------------------------
//对象的解构赋值

let {a,b}={b:"bbb",a:"aaa"};
console.log(a,b) //aaa,bbb

let{a:b}={a:1}
console.log(b)  //1
console.log(a)  //undefined

//---------------------------------------------
//基本类型的解构赋值

let [a,b,c,d]='1,2,3,4'
console.log(a,b,c,d) //1,2,3,4

let{length:len}='miaov';
console.log(len)   //5

let {toString:ts}=1;
let {toString:bs}=true;

console.log(ts=== Number.prototype.toString);
console.log(bs=== Boolen.prototype.toString);

//null 和undefined不能进行解构赋值
