//传统字符串操作

var str="asdjad1231jkn2n31k289sndic293";
/*var arr=[];
var tmp="";
function findNum(str){
	for(let i=0;i<str.length;i++){
		if(str.charAt(i)<="9" && str.charAt(i)>="0"){
			tmp+=str.charAt(i);
		}
		else{
			if(tmp){
				arr.push(tmp)
				tmp=""
			}
		}
	}
	if(tmp){
		arr.push(tmp)
	}
}
findNum(str)
console.log(arr)*/

//用正则的方式

function findNum(str){
	return str.match(/\d+/g);
}
console.log(findNum(str))