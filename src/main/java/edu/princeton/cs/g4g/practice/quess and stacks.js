/*
implement stack/q with max space pre-defined
implement stack/q using unlimited space
convert stack to q
convert q to stack
reverse a stack
reverse a queue
reverse a stack recursively using a temp stack only as extra space
reverse a queue recursively using a temp queue only as extra space
Sort elements using a queue with a q for temporary storage
Sort elements using a stack with a stack for temporary storage
*/

//stack implement

//using LL
var ListStack = function  () {
	this.head = null;
	this.push = function(val){
		if(val){
			var node = {
				next:null,
				val:val
			}
			if(this.head===null){
				this.head = node;
				return;
			}

			var current = this.head;
			while(current.next!==null){
				current= current.next;
			}
			current.next = node;
		}
	}
	this.peek =function(){
		if(this.head!==null){
			var current = this.head;
			while(current.next!==null){
				current = current.next;
			}
			return current.val;
		}
		return null;
	}
	this.pop = function(){
		if(this.head!==null){
			var current = this.head;
			
			if(current.next===null){
				var val = current.val;
				this.head = null;
				return val;
			}

			var previous = current;
			current = current.next;
			
			while(current.next!==null){
				previous = current;
				current = current.next;
			}

			var val = current.val;
			previous.next = null;
			return val;
		}
	}
	this.show = function(){
		if(this.head!=null){
			var current = this.head;
			while(current!==null){
				console.log(current.val);
				current = current.next;
			}
		}else{
		return null;
		}
	}
}

var stack = new ListStack();
for (var i = 1; i <11; i++) {
	stack.push(i);
};

//quee
var ListQuee = function(){
	this.head = null;
	this.tail = null;

	this.enquee = function(val){
		if(val){
		var node = {
			next:null,
			val:val
		}
			if(this.head===null){
				this.head = node;
				this.tail = node;
				return;
			}else{
				this.tail.next = node;
				this.tail= node;
			}

		}
	}

	this.dequee = function(){
		debugger;
		if(this.head!==null){
			//if head and tail are same , reset after dequee
			if(this.head.next === null){
				var val = this.head.val;
				this.head = null;
				this.tail = null;
				return val;
			}
			var node = this.head;
			this.head = node.next;
			return node.val;
		}
	}
	this.isEmpty = function(){
		return this.head==null?true:false;
	}
	this.show =function(){
		if(this.head!==null){
			var current = this.head;
			while(current!==null){
				console.log(current.val);
				current = current.next;
			}
		}else{
		return null;
		}
	}
}


var quee = new ListQuee();
for (var i = 1; i <11; i++) {
	quee.enquee(i);
};

//conver stack to quee
// a LL stack to LL quee

function stackToQuee (stack){
	this.stack = stack;
	this.tempStack = new ListStack();
	this.enquee = function(val){
		this.stack.push(val);
	}
	this.dequee = function(){
		var val = this.tempStack.pop();
		if(!val){
			var item = this.stack.pop();
			while(item!== undefined){
				this.tempStack.push(item);
				item = this.stack.pop();
			}
			val = this.tempStack.pop();
		}
		return val;
	}
}

//conver quee to stack

function queeTostack (quee){
	this.quee = quee;
	this.tempQuee = new ListQuee();
	this.push = function(val){
		this.quee.enquee(val);
	}
	this.pop = function(){
		var val = this.tempQuee.dequee();
		if(!val){
			var item = this.quee.dequee();
			while(item!==undefined){
				this.tempQuee.enquee(item);
				item = this.quee.dequee();
			}
		val = this.tempQuee.dequee();
		}
		return val;
	}
}

//reverse a stack recursively using a temp stack only as extra space
function reverseStackWithTemp (stack){
	var temp = new ListStack();
	copyStack(stack,temp);
	rStack(temp,stack);
	return stack;
}

function copyStack(stack,temp){
	if(stack.peek()!=null){
		var val = stack.pop();
		temp.push(val);
		copyStack(stack,temp);
	}
}
function rStack(stack,temp){
	if(stack.peek()!=null){
		var val = stack.pop();
		rStack(stack,temp);
		temp.push(val);
	}
}

function pushToBottom (val,stack){
	if(stack.peek()===null){
		stack.push(val);
	}else{
		var item = stack.pop();
		pushToBottom(val,stack);
		stack.push(item);
	}
}
//reverse a stack
function reverseStack (stack){
	var val ;
	if(stack.peek()!=null){
		val = stack.pop();
		reverseStack(stack);
		pushToBottom (val,stack);
		return stack;
	}
}
//reverse a quee
function reverseQuee (quee){
	var val;
	if(!quee.isEmpty()){
		val = quee.dequee();
		reverseQuee (quee);
		quee.enquee(val);
	}
}