var newObject={}
//var newObject=new Object(); 

//1."点"语法
//设置属性
newObject.someKey="Hello World";
//获取属性
var key=newObject.someKey

//2.中括号语法
//设置属性
newObject["someKey"]="Hello World";
//获取属性
var key=newObject["someKey"]

//3.Object.defineProperty

//设置属性
Object.defineProperty(newObject,"someKey",{
    value:"Hello world",
    writable:true,
    enumerable:true,
    configurable:true
})
//简写版
/* var defineProp=function(obj,key,value){
    config.value=value;
    Object.defineProperty(obj,key,config);
}

var person=Object.create(null);
defineProp(person,"car","Delorean"); */

//4.Object.defineProperties
//设置属性
Object.defineProperties(newObject,{
    "someKey":{
        value:"Hello World",
        writable:true
    },
    "anotherKey":{
        value:"Foo bar",
        writable:false
    }
});
console.log(newObject.anotherKey)
