//heap

var heap = [20,14,18,8,9,5]

function show(heap,obj,i){
	var obj = obj || {};
	var i = i||0;
	debugger;

	if(i<heap.length){
		obj.val = heap[i];

		if(heap[(2*i)+1]){
			obj.right ={};
			show(heap,obj.right,(2*i)+1);
		}

		if(heap[(2*i)+2]){
			obj.left ={};
			show(heap,obj.left,(2*i)+2);
		}
	}
	return obj;
}

function insert (heap,val) {
	heap[heap.length] = val;
	//check if heap length< array length
	bubbleUp(heap,heap.length);
	return heap;
}

function bubbleUp(heap,i){
	index = i-1;
	parentIndex = Math.ceil(i/2)-1;
	debugger;
	
	
	while(heap[index]>heap[parentIndex] && parentIndex>=0){
		var saveIndex = parentIndex;
		var temp = heap[parentIndex];
		heap[parentIndex] = heap[index];
		heap[index] = temp;

		parentIndex = 	Math.ceil(parentIndex/2)-1;
		index	= saveIndex;
	}
}

function deleteHeap(heap,val){
	var node;
	node = getNode(heap,val);
	//return node;
	var rightMostNode;
	var temp = node;
	var parentTemp;

	while(temp.right!==undefined){
		parentTemp = temp;
		temp = temp.right;
	}
	rightMostNodeParent = parentTemp;

	bubbleDown(heap,val,rightMostNode);
}

function getNode(node,parent,val){
	var done,child;
	//var parent;

	if(node.val===val){
		return node;
	}else{
		if(done===undefined && node.right){
			child =node.right;
			done = getNode(child,val);
		}
		if(done===undefined && node.left){
			child =node.left;
			done = getNode(child,val);	
		}

	}
	return done;
}

function bubbleDown(heap,val,replaceNodeParent){
	debugger;
	
	var 
}

/*
function delete(heap,val){
	var index;
	for(var i=0;i<heap.length;i++){
		if(heap[i]===val){
			index = i;
		}
	}

	if(index){
		heap[index] = heap[heap.length-1];
		bubbleDown(heap,index);
	}
}

function bubbleDown(heap,i){
	var rIndex = (i*2)+1;
	var lIndex = (i*2);


}
*/