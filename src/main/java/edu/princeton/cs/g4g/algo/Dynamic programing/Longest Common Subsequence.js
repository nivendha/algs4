/*
http://www.geeksforgeeks.org/dynamic-programming-set-4-longest-common-subsequence/

*/
var t1 =  "XMJYAUZ";
var t2 = "MZJAWXU";
var  a =[];
	for (var i = 0; i < t1.length+1; i++) {
		a[i] = new Array();
		for (var j = 0; j < t2.length+1; j++)
			a[i][j]= 0;
	}

var lcs = function (){
	for (var i = 0; i < t1.length+1; i++) {
		for (var j = 0; j < t2.length+1; j++) {
			if(i==0 || j ==0){
				a[i][j]= 0;
			}else if(t1[i-1] == t2[j-1]){
				a[i][j] = a[i-1][j-1] + 1;
			}else{
				a[i][j] = Math.max( a[i-1][j] , a[i][j-1] );
			}
		}
	}
	return a[t1.length][t2.length];
}