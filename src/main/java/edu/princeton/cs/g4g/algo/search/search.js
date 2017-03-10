/*
Jump search
*/

var arr= [0, 1, 1, 2, 3, 5, 8, 13, 21,34, 55, 89, 144, 233, 377, 610];

var jSrch= function(n){
	var step = parseInt(Math.sqrt(arr.length)),pre;
	var l =arr.length;
	while(n>arr[Math.min(step,l)-1]){
		pre= step;
		step+=parseInt(Math.sqrt(arr.length));
		if(pre>=l){
			return;
		}
	}
	while(n>arr[pre]){
		pre++;
		if(pre==Math.min(step,l)){
			return
		}
	}
	if(arr[pre]==n){
		return pre;
	}

	return;
}

/*
Interpolation_search
*/

var iSrch = function(n){
	var lo=0,
	hi=arr.length-1,
	ptr;

	while(lo<=hi && n>=arr[lo] && n<=arr[hi]){
		ptr= parseInt(lo +( (n-arr[lo]) / (arr[hi]-arr[lo]) )*(hi-lo));

		if(arr[ptr]==n){
			return ptr;
		}

		if(n>arr[ptr])
			{	lo=ptr+1; }
		else
			{	hi=ptr-1; }
	}
	return ;
}