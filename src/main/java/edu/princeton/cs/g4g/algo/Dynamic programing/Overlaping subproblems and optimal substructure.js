/*
Overlapping Subproblems Property

used when solutions of same subproblems are needed again and again.
ex:fibonacci

2 ways of storing values, of previous problems
==============
1 Memoization (top down)
2 Tabulation (bottom up)
*/

/*
Memoization
>	intialize lookup with nul values
>	Whenever we need solution to a subproblem, we first look into the lookup table. 
If the precomputed value is there then we return that value
*/

var lookup1={};

var fib1=function(n){
	if(lookup1[n]){
		return lookup1[n];
	}else{
		//fibonzcci 
		if(n<=1){
			return 1
		}else{
			return (fib1(n-1)+fib1(n-2));
		}
	}
}

/*
Tabulation

>builds a table in bottom up fashion and returns the last entry from table
*/

var fib2 = function(n){
	var a=[];
	a[0]=1,a[1]=1;
	for (var i = 2; i <= n; i++) {
		a[i]=a[i-1]+a[i-2]
	}
	return a[n];
}

/*
*Optimal Substructure Property
*/