//属性的继承，调用父亲的构造函数，用call更改指向
//方法的继承：for in 拷贝继承
function CreatePerson(name,sex){   //父类
	this.name="1";
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
extend(CreateStar.prototype,CreatePerson.prototype)
var p2=new CreateStar("雷军","男","耍猴");

function extend(obj1,obj2){
	for(var attr in obj2){
		obj1[attr]=obj2[attr];
	}
}	
