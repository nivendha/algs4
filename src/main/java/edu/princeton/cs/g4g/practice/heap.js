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
heap = [16,14,10,8,7,9,3,2,4,1];

function delHeap(heap,val){
	var index;
	for(var i=0;i<heap.length && index===undefined;i++){
		if(heap[i]==val){
			index = i;
		}
	}
	debugger;
	if(index!==undefined){
		
		var replaceWithindex =heap.length-1;
		
		heap[index] = heap[replaceWithindex];

		bDown(heap,index,replaceWithindex);

		heap.splice(heap.length-1,1);
		return heap;
	}else{
		return ;
	}
}

function bDown(heap,index){
	//check left and right child, if exist , get bigtest of two and if it is less than parent value
	//yes=>move index to point to parent and repeat check
	//no=>switch items in index and replaceWithindex and move pointer to replacement index and continue
	if(index<0 || index>heap.length){
		return heap;
	}else{
		debugger;
		var lChild = (2*index)+1;
		var rChild;
		var replaceWithindex;
		//replaceWithindex => bigest of the child index
		
		if(heap[lChild]){
			replaceWithindex = lChild;
			rChild = (2*index)+2;
			if(heap[rChild]){
				replaceWithindex = heap[lChild] > heap [rChild]?lChild:rChild;
			}
		}else{
			//no child
			return heap;
		}

		if(replaceWithindex){
			//check wether parent or child is big

			if(heap[index]>heap[replaceWithindex]){
				//parent big so go up the tree to check on
				var parentIndex;
				parentIndex = Math.ceil(index/2)-1
				bDown(heap,parentIndex);
			}else{
				//replace the nodes and go doen the tree
				var temp = heap[index];
				heap[index] = heap[replaceWithindex];
				heap[replaceWithindex] = temp;

				bDown(heap,replaceWithindex);
			}
		}
	}
	return heap;
}

function maxHeap(heap){
for(var i=0;i<heap.length;i++){
	bDown(heap,i);
}
return heap;
}

function heapSort(heap){
	var sortArray=[];
	//build max heap
	maxHeap(heap);
	while(heap.length>0){
		sortArray.push(heap[0]);
		delHeap(heap,heap[0]);
	}
	return sortArray;
}
/*function deleteHeap(heap,val){
	var node,nodeObject;
	nodeObject = getNode(heap,val);
	debugger;
	if(nodeObject===undefined){
		//nothing found
		return;
	}

	if(nodeObject.direction === 'right'){
		node = nodeObject.parent.right;
	}else{
		node = nodeObject.parent.left;
	}

	var rightMostNode;
	var temp = node;
	var parentTemp;

	while(temp.right!==undefined){
		parentTemp = temp;
		temp = temp.right;
	}
	rightMostNodeParent = parentTemp;

	bubbleDown(heap,nodeObject.parent,nodeObject.direction,rightMostNodeParent);
}

function getNode(node,val){
	var done,child;
	debugger;
	if((node.right && node.right.val===val) || (node.left && node.left.val===val)){
		if(node.right.val==val)
			{	
				return{
					parent:node,
					direction:'right'
				}

			}
		else{
			return{
				parent:node,
				direction:'left'
				}
			}
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

function bubbleDown(heap,parentNode,direction,replaceNodeParent){
	debugger;
	
	
}*/

