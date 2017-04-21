/*
1. Given one array, can you use it to store two data structures, one stack and one queue?
2. Same as above but with linked list
3. What kind of a sort can be used on linked list
4. Convert single linked list to double linked list.
	 Assume that member attribute previous is empty initially
5. Can you find loop in linked list
*/

//insertion sort on linked list

var List = function(){
	this.head = null;
	
	this.addNode  = function(val){
		if(val==null){
			return;
		}
		var node = {
			val:val,
			next:null
		}
		if(this.head==null){
			this.head = node;
		}else{
			var curent = this.head;
			while(curent.next!=null){
				curent = curent.next;
			}
			curent.next = node;
		}
	}

	this.removeNode = function(val){
		if(this.head==null){
			return;
		}
		var node;
		if(this.head.val === val){
			node =this.head;
			this.head = this.head.next || null;
			return node.val;
		}
		else{
			var previous = this.head;
			var curent = previous.next;
			while(curent.next!==null){
				if(curent.val == val){
					node = curent;
					previous.next = curent.next;
					return node.val;
				}
				previous = curent;
				curent = curent.next;
			}
			if(curent.val === val){
				node = curent;
				previous.next = null;
				return node.val;
			}
		}
	}

	this.show = function(){
		var curent = this.head
		while(curent!=null){
			console.log(curent.val);
			curent = curent.next;
		}
	}
}

var list = new List();
for (var i = 0; i <=10 ; i++) {
	list.addNode(parseInt(Math.random()*100));
}


function swapNodes(previous,node1){
	var node2 = node1.next;
	node1.next = node2.next;
	previous.next = node2;
	node2.next = node1;
}

function sort(list){
	if(list){
		var l =list;
		if(l.head!==null){

			//add tempNode to start
			var tempNode = {
				val:'temp',
				next:l.head
			}
			l.head = tempNode;

			//insertion sort
			var start = tempNode.next;
			tempNode.next = start.next;
			start.next = tempNode;

			l.head = start;
			//begin sort now
			var curent = tempNode.next;
			var node1 = tempNode;
			var previous = start;

			while(curent!=null){
				
				curent = curent.next;
			}
		}
	}
}