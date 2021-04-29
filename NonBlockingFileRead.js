var fs=require('fs');
// call back function
var x=function(err,data) {
	if (err != null)
		console.log("err is "+err.toString());
	if (data !=null)
		console.log("Data is "+data.toString());
	
	
}
fs.readFile('sample1.txt',x); // IO operation

console.log('End'); // this line need not wait for completion of line 2 - 4
var x=2;
if (x<5)
	console.log("x is smaller than 5");