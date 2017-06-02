/*rod cuting problem*/


/*
logic

1) Get all the combination of the length => whoes sum mathes to the required 
2) for each combination =>product the length with cost and sum them 
3) get the min sum of all the combination



1)get length combination

ip=>'[a,b,c]'

a ----> aa -->aa.a	aa.b	aa.c
		
		ab -->ab.a	ab.b	ab.c
		
		ac -->ac.a 	ac.b	ac.c

b ----> ba -->ba.a	ba.b	ba.c
		
		bb -->bb.a	bb.b	bb.c
		
		bc -->bc.a 	bc.b	bc.c

a ----> ca -->ca.a	ca.b	ca.c
		
		cb -->cb.a	cb.b	cb.c
		
		cc -->cc.a 	cc.b	cc.c

//need to find a recursive function , which when called with 3 arguments --> gives 9 calls stact --> which gives 27 calls

1) Depth = 3;newlist =[a,b,c];list=['a','b','c'];
	op-> ['aa','ab','ac','ba','bb','bc','ca','cb','cc']

2) depth =2 ;newlis = op ; list=['a','b','c'];
	op-->['aaa','aab','aac',.................'ccb','ccc']

3) set at depth =1 -> val = newlist and return
*/

function combination(list,newList,depth,val){
	var op =[];
	debugger;
	while(depth>1){

		for(var i=0;i<newList.length;i++){
			
			var str = newList[i];
			for(var j=0;j<list.length;j++){
				var newStr = str + list[j];
				op.push(newStr);
			}

		}
		depth--;
		val = combination(list,op,depth,val);
		return val;
	}
	if(depth == 1){
		console.log(newList);
		val = newList;
	}
	return val;	
}
/*var ip = 'abc';
var value = combination(ip.split(''),ip.split(''),ip.length);*/

function combinationModified(list,newList,depth,required,val){
	var op =[];
	debugger;
	while(depth>1){

		for(var i=0;i<newList.length;i++){
			
			var str = newList[i];
			for(var j=0;j<list.length;j++){
				var newStr = str +','+ list[j];
				op.push(newStr);
			}

		}
		depth--;
		val = combinationModified(list,op,depth,required,val);
		return val;
	}
	if(depth == 1){
		debugger;
		for(var m=0;m<newList.length;m++){
			var item = newList[m].split(',');
			var sum = 0;
			for(var n=0;n<item.length;n++){
				sum+=parseInt(item[n]);
			}
			if(sum===required){
					val.push(item);
			}	
		}
	}
	return val;	
}

function rodCutting(l,cost,required){
	debugger;
	//create a cost length map for easy use
	var map = {}
	for(var i=0;i<l.length;i++){
		map[l[i]] = cost[i];
	}

	var lengthCombinations;
	lengthCombinations = combinationModified(l,l,l.length,required,[]);
	debugger;

	var productArrayMap =[];
	for(var i=0;i<lengthCombinations.length;i++){
		var set = lengthCombinations[i];
		var costSum =0;
		for(var j=0;j<set.length;j++){
			costSum += parseInt(map[set[j]]);
		}
		productArrayMap[i] = {
			'cost' : costSum,
			'combination' : set
		}
	}

	//set some intialmincost
	var minCostObj = productArrayMap[0];

	for(var i=1;i<productArrayMap.length;i++){
		if(productArrayMap[i].cost<minCostObj.cost){
			 minCostObj = productArrayMap[i];
		}
	}

	return minCostObj;
}

var length =[1,2,5,7,10];
var cost =[3,5,2,12,2];
var required = 15;
rodCutting(length,cost,required);