//stack

//with array
var stack = function(size){
	this.arr = new Array(size),this.i=0;
};

stack.prototype.push = function(data){
	if(this.i<=this.arr.length){
		this.arr[this.i++] = data;
	}else{
		//dynamicaly inc siz of array
	}
}

stack.prototype.pop = function(){
	if(this.i>0){
		var data =  this.arr[--this.i];
		this.arr[this.i] = null;
		return data;
	}else{
		//dynamicaly reduce siz of array
	}
}

var s= new stack(10);

for (var i = 0; i < 10; i++) {
	s.push('a'+i);
}

//with linked list
