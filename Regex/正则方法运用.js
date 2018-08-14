// test
/*var str='218372378d19273'

var re=/\D/

if(re.test(str)){
	console.log('不全是数字')
}else{
	console.log('全是数字')
}*/

//search
/*var str='sadjasdasida'

var re=/A/i
var re=new RegExp('A',"i")
console.log(str.search(re))*/

//match
/*var str="asdjad1231jkn2n31k289sndic293";
var re=/\d+/g

console.log(str.match(re))*/
//replace
/*var str="华为和三星的强势入场，也改变不了智能音箱的变现困局"

var re=/华为|三星|智能音箱/g

console.log(str.replace(re,(str)=>{
	var result= "";
	for(var i=0;i<str.length;i++){
		result+="*";
	}
	return result;
})
)*/
//匹配子项
/*var date ="2018-8-14"

var re=/(\d+)(-)/g
console.log(date.replace(re,(str,child)=>{
	child+="."	
	return child
}))*/

//字符类
/*var str="<h3 class='box'>标题</h3>"

var re=/<[^>]+>/g

console.log(str.replace(re,""))*/

//寻找出现次数最多的字符以及出现的次数
var str='asjdaosiadjasdsadsjidassdnajmcnzczjdjadsjadjaasjdjjsjjjj';
var arr=str.split("");
str=arr.sort().join("");

var len=0;
var value="";

var re=/(\w)\1+/g
str.replace(re,function(str,child){
	if(len<str.length){
		len=str.length
		value=child
	}
	console.log(str)
})
console.log(len+" "+value)
