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