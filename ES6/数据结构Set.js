//创建一个set
	const s=new Set([1,2,3])

//Set类的属性
	console.log(s.size);//3类似于数组的length

//Set类的方法：
// set.add(value) 添加一个数据，返回Set结构本身
	s.add('a').add('b').add('c')
	console.log(s)

// set.delete(value) 删除指定数据，返回一个布尔值，表示删除是否成功
	console.log(s.delete('a')); //true

// set.has(value) 判断该值是否为set的成员，返回一个布尔值
	console.log(s.has('a')); //false

// set.clear()清楚所有数据，没有返回值
	s.clear();
