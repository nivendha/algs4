/*
SelectionSort
*/

var arr=[64,25,12,22,11];

var selSort= function(){

	for (var i = 0; i < arr.length; i++) {
		var min=arr[i];
		for (var j = i; j < arr.length; j++) {
			if(arr[j]<min){
				min=arr[j];
			}
		}
		var temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}
}

/*
bubble sort
*/

var bSort = function(){
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length-i-1; j++) {
			if(arr[j]>arr[j+1]){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp ;
			}
		}
	}
}

/*
Insertion sort
*/
var inSort = function(){
	for (var i = 0; i < arr.length; i++) {
		var j= i-1;
		var key = arr[i];

		while(j>=0 && arr[j]>key){
			arr[j+1] = arr[j]
			j--;
		}

		arr[j+1] = key;
	}
}

/*
merge sort
*/
var arr=[64,25,12,22,11];
function merge(arr,m,l,r){
	var la=[],ra=[];

	for (var x = 0; x <(m-l)+1; x++) {
		la[x] = arr[x+l]
	}

	for (var x = 0; x <(r-m); x++) {
		ra[x]= arr[x+(m+1)]
	}
	
	var i=0,j=0;ptr=l;
	
	while(i<la.length && j<ra.length){
		if(la[i]<=ra[j]){
			arr[ptr]=la[i];i++;
		}else{
			arr[ptr]=ra[j];j++;
		}
		ptr++
	}

	while(i<la.length){
		arr[ptr]=la[i];i++;
		ptr++;
	}
	
	while(j<ra.length){
		arr[ptr]=ra[j];j++;
		ptr++;
	}

}

function mergeSort(l,r,arr){	
	if(l<r){
		var m= parseInt((l+r)/2);

		 mergeSort(l,m,arr);
		 mergeSort(m+1,r,arr);

		 merge(arr,m,l,r);
	}
}

var mSort = function(){
	mergeSort(0,arr.length-1,arr);
}

function partition(arr,l,r){
	var piv= arr[r];
	var i=l,j=l;
	while(j<=r-1){
		if(arr[j]<=piv){
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			i++;
		}
		j++;
	}
	var temp=arr[i];
	arr[i] = piv;
	arr[r] = temp;
	return i;
}

function quicksort(arr,l,r){
	if(l<r){
		var piv = partition(arr,l,r);

		quicksort(arr,l,piv-1);
		quicksort(arr,piv+1,r);
	}
}
var qSort = function(){
	quicksort(arr,0,arr.length-1)
}