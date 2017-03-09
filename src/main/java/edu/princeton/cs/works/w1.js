//quick find
var qf={};
qf.t = [0,1,2,3,4,5,6,7,8,9];

qf.conecton = function(i,j){
 return qf.t[i] == qf.t[j];
}

qf.union = function(i,j){
	var iId=qf.t[i];
	var jId=qf.t[j];
	for(var x=0;x<qf.t.length;x++)
		if(qf.t[x] == iId){
			qf.t[x]=jId
		}
	return qf.t;
}

//quick union
var qu={}

qu.t = [0,1,2,3,4,5,6,7,8,9];

qu.getRoot = function(i){
	while(qu.t[i]!=i){
		i = qu.t[i];
	}
	return i;
}

qu.union = function(p,q){
	var i = qu.getRoot(p);
	var j = qu.getRoot(q);
	qu.t[i] = j;
	return qu.t;
}

//quick union - weighted
var qu={}

qu.t = [0,1,2,3,4,5,6,7,8,9];
qu.sz = [1,1,1,1,1,1,1,1,1];
qu.getRoot = function(i){
	while(i!=qu.t[i]){
		i = qu.t[i];
	}
	return i;
}

qu.union = function(p,q){
	var i = qu.getRoot(p);
	var j = qu.getRoot(q);
	if(i==j){
		return	qu.t;
	}
	if(qu.sz[j]>qu.s[i]){
		qu.t[i] = j;
		qu.sz[j]=qu.sz[j]+qu.sz[i];
	}else{
		qu.t[j] = i;
		qu.sz[i]=qu.sz[i]+qu.sz[j];
	}
}