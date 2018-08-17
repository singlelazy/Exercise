//浅拷贝
//问题：如果父对象的属性等于数组或另一个对象，那么实际上，子对象获得的只是一个内存地址

function extend(obj1,obj2){
	for(var attr in obj2){
		obj1[attr]=obj2[attr];
	}
}
var Chinese={};
Chinese.birthPlaces = ['北京','上海','香港'];
/*extend(Doctor,Chinese)
Doctor.birthPlaces.push('厦门')
console.log(Chinese.birthPlaces)*/
//深度拷贝
 	// JSON.parse(JSON.stringify(obj))
		var Doctor=JSON.parse(JSON.stringify(Chinese))
		Doctor.birthPlaces.push('厦门');
		console.log(Chinese.birthPlaces)

	//递归拷贝
	/*　function deepCopy(p, c) {
	　　　　var c = c || {};
	　　　　for (var i in p) {
	　　　　　　if (typeof p[i] === 'object') {
	　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {};
	　　　　　　　　deepCopy(p[i], c[i]);
	　　　　　　} else {
	　　　　　　　　　c[i] = p[i];
	　　　　　　}
	　　　　}
	　　　　return c;
	　　}*/