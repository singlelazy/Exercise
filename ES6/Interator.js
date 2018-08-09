//1.手写Interator接口
	/*const arr=[1,2,3]

	function Interator(arr){
		let index=0;
		return{
			next:function(){
				return index< arr.length ?
				{value:arr[index++],done:false} :
				{value:undefined,done:true}
			}
		}
	}

	const it=Interator(arr);
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());*/

//2.凡是具有Symbol.interator属性的数据结构都具有Interator接口
	const arr=[1,2,3];
	const set=new Set(['a','b','c']);
	const map=new Map([['a',1]]);

	const itArr=arr[Symbol.iterator]();
	const itSet=set[Symbol.iterator]();
	const itMap=map[Symbol.iterator]();

	console.log(itArr);
	console.log(itSet);
	console.log(itMap);

	console.log(itSet.next());
	console.log(itSet.next());
	console.log(itSet.next());
	console.log(itSet.next());

	const obj={}
	console.log(obj[Symbol.iterator]);//undefined 对象原生不具备
/*3.具备interator接口的数据结构都可以进行以下操作
			解构赋值
			扩展运算符*/
	let [x,y]=set
	console.log(x,y)

	let str='miao'
	let arrStr=[...str];
	console.log(arrStr)  //[ 'm', 'i', 'a', 'o' ]
	//数组去重
	const arr2=[{},1,'a',1,'a','b',[]];
	console.log([...new Set(arr2)]) //[ {}, 1, 'a', 'b', [] ]
//4.for...of循环
	const ofArr=[1,2,3,4]

	for(let i of ofArr){
		console.log(i)
	}

	const m=new Map();
	m.set('a',1).set('b',2).set('c',3)

	 for( let data of m){
	 	console.log(data)
	 }

	 for(let[key,value] of m){
	 	console.log(key,value)
	 }