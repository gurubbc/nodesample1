var fs=require('fs'); // this is similar to java's import statement
	var data=fs.readFileSync('sample.txt'); // this line is blocked due to reading
	console.log(data.toString()); // only when all data is read, this will be printed
console.log('End'); // this will be printed at the last, sequential programming
var x=5;
if (x<5)
	console.log("x is smaller than 5");
