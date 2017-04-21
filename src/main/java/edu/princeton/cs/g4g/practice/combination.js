//combination
//ex:1234

function getCominations (str,count){
	var op=[];
	debugger;
	for(var i=0;i<str.length;i++){
		var charStart = str[i];
		var temp = charStart;
		op.push(temp);
		var j=i+1;
		while(j<str.length){
			var k =j;
			var saveChar  = charStart;
			while((saveChar + str[k]).length<=count){
				saveChar = saveChar + str[k];
				op.push(saveChar);
				k++;
			}
			j++;
		}
	}
	return op;
}