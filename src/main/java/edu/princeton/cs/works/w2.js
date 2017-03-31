//stack

//with array
var stackArr = function(size){
	this.arr = new Array(size),this.i=0;
};

stackArr.prototype.push = function(data){
	if(this.i<=this.arr.length){
		this.arr[this.i++] = data;
	}else{
		//dynamicaly inc siz of array
	}
}

stackArr.prototype.pop = function(){
	if(this.i>0){
		var data =  this.arr[--this.i];
		this.arr[this.i] = null;
		return data;
	}else{
		//dynamicaly reduce siz of array
	}
}

var s= new stackArr(10);

for (var i = 0; i < 10; i++) {
	s.push('a'+i);
}

//with linked list
var stackList = function(){
	this.head = null;
}

stackList.prototype.push = function(val){
	if(val){
		var node = {
			dt:val,
			next:null
		}
		if(this.head == null){
			this.head = node;
		}else{
			var curent = this.head;
			while(curent.next){
				curent = curent.next;
			}
			curent.next = node;
		}
	}
}

stackList.prototype.pop = function(){
	if(this.head){
		var curent = this.head;
		var val;
		var previous = curent;
		while(curent.next){
			previous = curent;
			curent = curent.next;
		}
		val = curent.dt;
		if(previous.next){
			previous.next = null;
		}else{
			this.head = null;
		}
		return val;
	}
}

var l = new stackList();

//quee

//with array
var queeArr = function(size){
	this.arr = new Array(size);
	this.head = 0;
	this.tail = 0;
	this.end = size;
}
queeArr.prototype.enquee=function(val){
	if(this.tail<this.end){
		this.arr[this.tail++] = val;
	}
}

queeArr.prototype.dequee = function(){
	if(this.head < this.tail){
		var val = this.arr[this.head];
		this.arr[this.head++] = null;
		return val;
	}
}

var st = new queeArr(10);

for (var i = 0; i <10; i++) {
	st.enquee('a'+i);
}

//with linked list
