/*
http://www.geeksforgeeks.org/dynamic-programming-set-3-longest-increasing-subsequence/
n^2 complexity

*/
var arr=[10, 22, 9, 33, 21, 50, 41, 60, 80]

var lis = function(){
	var l=[];
	for (var i = 0; i < arr.length; i++) {
		l[i]=1;
	}

	for (var i = 1; i < arr.length; i++) {
		var temp=[];
		for (var j = 0; j < i; j++) {
			if(arr[j]<arr[i] && l[i]<(l[j]+1)){
				l[i]=l[j]+1;
				//temp.push(arr[j]);
			}
		}
		//console.log(temp)
	}
	return l;
}
