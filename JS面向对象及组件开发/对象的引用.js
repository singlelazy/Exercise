/*基本类型赋值：赋值的时候只是值的复制*/
var a=5;
var b=a;
b+=3;
console.log(b)  //8
console.log(a)  //5

/*对象类型赋值：赋值不仅是值的复制,而且也是引用的传递*/
var a=[1,2,3]
var b=a;
b.push(4);
console.log(b); //[1,2,3,4]
console.log(a); //[1,2,3,4]
b=[1,2,3,4,5]
console.log(a)  //[1,2,3,4]

/*基本类型比较：值相同就可以*/
var a=5;
var b=5;
alert(a==b); //true
/*对象类型比较：值和引用都相同*/
var a=[1,2,3]
var b=[1,2,3]

console.log(a==b); //false