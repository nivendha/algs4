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
	this.next = function(){
		console.log(this);
	}
}

var list = new List();
for (var i = 0; i <10 ; i++) {
	list.addNode(i);
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
	debugger;
	var previous = list.head;
	var curent = list.head.next;
	
	while(curent.next!=null){
		var next = curent.next;
		curent.next = previous;
		previous = curent;
		curent = next;
	}
}