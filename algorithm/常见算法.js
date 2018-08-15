function bubbleSort(arr){
	var len=arr.length;
	for(var i=0;i<len;i++){	//每个元素执行一次比较
		for(var j=0;j<len-1-i;j++){//前一个元素和后一个元素进行比较
			if(arr[j+1]<arr[j]){
				var temp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
			}
		}
	}
	return arr;
}

function selectSoet(arr){
	var len=arr.length;
	var minIndex,temp;
	for(var i=0;i<len;i++){
		minIndex=i;
		for(var j=i+1;j<len;j++){
			if(arr[j]<arr[minIndex]){
				minIndex=j
			}
		}
		//将i和minIndex数调换位置
		temp=arr[i]
		arr[i]=arr[minIndex]
		arr[minIndex]=temp
	}
	return arr;
}
 function bubbleSort2(arr){  
            var i = arr.length -1;//开始时，扫描的最后位置  
            while(i>0){  
                var position = 0;//标志性变量，表示当前排序中交换的位置  
                for(var j = 0; j < i; j ++){  
                    if(arr[j]>arr[j+1]){  
                        position = j;  
                        var temp = arr[j+1];  
                        arr[j+1] = arr[j];  
                        arr[j] = temp;  
                    }  
                }  
                i = position;  
            }  
            return arr;  
}
function insertionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        var key=arr[i]
        for(var j=i+1;j<arr.length;j++){
        	if(arr[j]<key){
        		arr[j]=key;
        		
        	}
        	console.log(arr)
        }

    }
    return arr;
}

// console.log(bubbleSort2([5,6,3,9,1,8,5,2,0,1]))
// console.log(selectSoet([5,6,3,9,1,8,5,2,0,1]))
insertionSort([5,6,3,9,1,8,5,2,0,1])