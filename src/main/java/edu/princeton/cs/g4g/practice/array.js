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

