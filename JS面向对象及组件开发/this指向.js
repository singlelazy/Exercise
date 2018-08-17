// div.onclick=function(){
// 	this: div
// }

// div.onclick=show;
// function show(){
// 	this :div
// }

// div.onclick=function(){
// 	show()
// }
// function show(){
// 	this :window
// }
var div=new Object();
div.a=function(){
	setInterval(function(){
		console.log(this)
	},1000)
}
div.a()