//permuttions of a string
//==> HELDO


function main(string){
	var str = string;
	var strMain = str[0];
	var str2 = str.substring(1);
	var op;
	op = swap(strMain,str2);
	return op;
}

function swap(main,str){
	var results = new Array();
	if(str.length>1){
		var strMain = str[0];
		var str2 = str.substring(1);
		results = swap(strMain,str2);
	}else{
		var twoWords = new Array();
		twoWords.push(str);
		return (twoWords);
	}
		//now we have "D"->main and "O"->str
		//we return an array of all its combinations

	debugger;

	var newResults = new Array();
	for (var j=0;j<results.length;j++){
		
		var strResult = results[j];

		for(var i=0;i<strResult.length;i++){
			var temp = strResult.split('');
			temp.splice(i,i,strMain);
			var swapedStr = strResult[i] + temp.join("");
			newResults.push(swapedStr);
		}

	}

	return newResults;

}