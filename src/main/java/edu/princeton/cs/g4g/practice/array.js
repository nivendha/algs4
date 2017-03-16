//http://www.geeksforgeeks.org/find-four-elements-that-sum-to-a-given-value-set-2/

var arr=[10, 2, 3, 7, 8];

var aux=[],c=0;

for (var i = 0; i < arr.length; i++) {
	for (var j = i+1; j < arr.length; j++) {
		aux[c]={};
		aux[c].p1=i;
		aux[c].p2=j;
		aux[c].sum=(arr[j]+arr[i]);c++;
	}
}
function nocommon(obj1,obj2){
	if(obj1.p1!=obj2.p1 || obj1.p1!=obj2.p2 ||
		 obj1.p2!=obj2.p1 || obj2.p2!=obj2.p2){
		return true;
	}
	return false;
}
function partition(arr,l,r){
	var ptr=arr[r];
	var i=l,pos=l;
	while(i<=r-1){
		if(arr[i]<ptr){
			var temp =arr[i];
			arr[i]=arr[pos];
			arr[pos]=temp;
			pos++;
		}
		i++;
	}
	var temp=arr[pos];
	arr[pos] = arr[r];
	arr[r] = temp;
	return pos;
}

function qSort(l,r,arr){
	if(l<r){
		var prt = partition(l,r,arr);
		qSort(l,prt-1,arr);
		qSort(prt+1,r,arr);
	}
}

function main(n){

	qSort(0,aux.length-1,aux.map(function(o){return o.sum}));
	var i=0,j=aux.length-1;
	while(j>=0 && i<aux.length){
		if((aux[i].sum + aux[j].sum ==n) && nocommon(aux[i],aux[j])){
			return [aux[i],aux[j]];
		}else if(aux[i].sum + aux[j].sum < n){
			i++
		}else{
			j--;
		}
	}
}

//http://www.geeksforgeeks.org/find-maximum-minimum-sum-subarray-size-k/

var arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
function main2(k){
	var max=-1;
	for(var i=0;(i+k)<arr.length;i++){
		var count=k,tmp=0;
		while(count>0){
			tmp+=arr[i+count];
			count--;
		}
		if(tmp>max){
			max=tmp;
		}
	}
	return max;
}

//http://www.geeksforgeeks.org/maximum-value-array-m-range-increment-operations/

function m2(){
	var a = [1,0,2], b = [2,0, 3];
	// value of k to be added at each operation
	var k = [603, 286, 882];
	var n = 4, m = 3
	//
	var MAX=0,j=k.length;
	while(j-->0){
		MAX = Math.max(MAX,k[j]);
	}

	var aux=[];
	for (var i = 0; i <MAX+1 ; i++) {
		aux[i]=0;
	}

	for(var i=0;i<a.length;i++){
		aux[i]+=k[i];
		aux[i+1]-=k[i];
	}
	var c=0,bigNum=0;
	for(var i=0;i<MAX+1;i++){
		c+=aux[i];
		bigNum= Math.max(c,bigNum)
	}
	return bigNum;
}