//Q3. Define a function reverse() that computes the reversal of a (full) string. For example, reverse("jag testar") should return the string "ratset gaj".

function reverse(str) {
	
	if(typeof str != "string")
		return str;


	var reverseStr = "";
	for (var i = str.length - 1; i >= 0 ; i--) {
		reverseStr += str[i];
	}

	console.log(reverseStr);
	return reverseStr;

}

// TEST CASES
console.log("Testing question 3");

//1. String has not been passed as an argument
assert(
	reverse(543), 
	543, 
	"Should return the same argument if it's not a string");

//2. String is passed as an argument and is reversed correctly
assert(
	reverse("hello world"),
	"eh",
	"String is not reversed correctly"
)