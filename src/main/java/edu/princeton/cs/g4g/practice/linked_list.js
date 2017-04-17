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
	i<5?list.addNode(i):list.addNode(10-i);
}
//search in Linked list
function search (list,val){
	if(list.head==undefined || list==undefined || val==undefined){
		return;
	}
	var curent = list.head;
	while(curent.next!=null){
		if(curent.val === val){
			return curent.val;
		}
		curent = curent.next;
	}
	return null;
}

//swap subsequent j node in LL
function swap (list,j){
	if(list.head==undefined || list==undefined || j==undefined ){
		return;
	}
	if(list.head.val === j){
		var nextNode = list.head.next;
		if(nextNode!==null){
			list.head.next = nextNode.next;
			nextNode.next = list.head;
			list.head = nextNode;
		}
		return;
	}
	var previous = list.head;
	var curent = previous.next;
	while(curent.next){
		if(curent.val === j){
			var nextNode = curent.next;
			curent.next = nextNode.next;
			nextNode.next = curent;
			previous.next = nextNode;
			return;
		}
		previous = curent;
		curent = curent.next;
	}
}

//reverse all node in LL
function reverse (list){
	var previous = null;
	var curent = list.head;
	var next = curent.next;

	while(next!=null){
		curent.next = previous;
		previous = curent;
		curent = next;
		next = next.next;
	}
	//debugger;
	curent.next = previous;
	list.head = curent;
}

//reverse recursively
function repeat(node,list){
	if(node.next!==null){
		var curent = node;
		var next = repeat(curent.next,list);
		next.next = curent;
	}else{
		list.head = node;
	}
	return node;
}

function recursiveReverse (list){
	var curent = list.head;
	var head = repeat(curent,list);
	head.next = null;
}


//palindrome check of LL
function palindrome(list){
	var size = 0;
	var curent = list.head;
	while(curent!=null){
		size++;
		curent = curent.next;
	}
	debugger;
	var curent = list.head;
	var centre = parseInt(size/2);
	var curent = list.head;
	while(centre>0){
		centre--;
		curent = curent.next;
	}
	//reverse
	var head = curent;
	debugger;
	var previous = curent;
	var node = previous.next;
	var next = node.next;
	while(next!=null){
		node.next = previous;
		previous = node;
		node = next;
		next = next.next;
	}
	debugger;
	node.next = previous;

	var end = head.next;
	head.next = node;
	end.next = null;
	debugger;
	//check palindrome
	var start1 = list.head;
	var start2 = head.next;

	centre = parseInt(size/2);
	var isPalindrome = true;

	while(centre>0){
		if(start1.val!==start2.val){
			isPalindrome = false
			return isPalindrome;
		}
		start1 = start1.next;
		start2 = start2.next;
		centre--;
	}

	return isPalindrome;
}