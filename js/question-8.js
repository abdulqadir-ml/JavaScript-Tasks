//Q8. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

function rotatePeriodically(str)
{
	if(typeof str != "string")
		return str;

	if(str.length == 1){
		return str[0];
	}
	return rotatePeriodically(str.substr(1)) + str[0];
}

//TEST CASES
console.log("Testing question 8");

//invalid argument
assert(
	rotatePeriodically(1234),
	1234,
	"Invalid arguments properly were not handled properly"
);

//valid argument
assert(
	rotatePeriodically("w3resource"),
	"ecruoser3w",
	"The string was not reversed properly"
);