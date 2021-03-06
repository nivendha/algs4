/*BST*/

var BST = function(){
	this.head = null,
	this.node = function(key,val,left,right){
		return {
			key:key || null,
			val:val || null,
			left:left || null,
			right:right || null
		}
	}
}

BST.prototype.insert = function(key,val,curent){
	if(!key){
		return;
	}

	debugger;
	if(this.head === null){
		var node = new this.node(key,val);
		this.head = node;
	}else{
		var ptr = (typeof curent=="undefined")?this.head:curent;
		var flag = false;
		if(ptr === null){
			return true;
		}

		if(val>ptr.val){
			flag = this.insert(key,val,ptr.right);
			
			if(!flag){
				return;
			}

			var node = new this.node(key,val);
			ptr.right = node;
		}else{
			flag = this.insert(key,val,ptr.left);
			
			if(!flag){
				return;
			}
			
			var node = new this.node(key,val);
			ptr.left = node;
		}
	}
}

BST.prototype.inOrder = function(node){
	debugger;
	if(this.head === null || node === null){
		return;
	}
	var ptr = (typeof node==="undefined")?this.head:node;

	this.inOrder(ptr.left);
	console.log(ptr.val);
	this.inOrder(ptr.right);
}
BST.prototype.preOrder = function(node){
	debugger;
	if(this.head === null || node === null){
		return;
	}
	var ptr = (typeof node==="undefined")?this.head:node;

	console.log(ptr.val);
	this.inOrder(ptr.left);
	this.inOrder(ptr.right);
}
BST.prototype.postOrder = function(node){
	debugger;
	if(this.head === null || node === null){
		return;
	}
	var ptr = (typeof node==="undefined")?this.head:node;

	this.inOrder(ptr.left);
	this.inOrder(ptr.right);
	console.log(ptr.val);
	
}

var tree = new BST();
for (var i = 0; i < 10; i++) {
	var val = parseInt(Math.random()*100);
	tree.insert(i,val);
};
