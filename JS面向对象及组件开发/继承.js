//属性的继承，调用父亲的构造函数，用call更改指向
//方法的继承：for in 拷贝继承
function CreatePerson(name,sex){   //父类
	this.name=name;
	this.sex=sex;
}
CreatePerson.prototype.showName=function(){
	console.log(this.name)
}

var p1=new CreatePerson("小米","男");


function CreateStar(name,sex,job){
	CreatePerson.call(this,name,sex)
	this.job=job
}
CreateStar.prototype=CreatePerson.prototype
var p2=new CreateStar("雷军","男","耍猴");

