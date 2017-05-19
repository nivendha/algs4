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
	if((this.head || node) === null){
		return;
	}
	var ptr = (typeof node==="undefined")?this.head:node;
	var curent = ptr;
	if(ptr.left!==null){
		ptr = ptr.left;
		this.inOrder(ptr);
		
			if(ptr.right!==null){
				ptr = ptr.right;
				this.inOrder(ptr);
				return;
			}else{
				console.log(ptr.val);
				return;
			}
	}else{
		console.log(ptr.val);
		return;
	}
}

var tree = new BST();
for (var i = 0; i < 10; i++) {
	var val = parseInt(Math.random()*100);
	tree.insert(i,val);
};
