//Q7. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function convertToCamelCase(str)
{

	var camelCaseStr = "";

	if(typeof str != "string") {
		return camelCaseStr;
	}

	var space = true;
	for (var i = 0; i < str.length; i++)
	{

		if(space) {
			camelCaseStr += str[i].toUpperCase();
		} else {
			camelCaseStr += str[i];
		}

		if(str[i] === " ") {
			space = true;
		} else {
			space = false;
		}
	
	}

	return camelCaseStr;

}

//TEST CASES
console.log("Testing question 7");

//1. Argument passed is not a string
assert(
	convertToCamelCase(1234),
	"",
	"Should return empty string if the argument is not a string"
);

assert(
	convertToCamelCase({name: "Abdul Qadir"}),
	"",
	"Should return empty string if the argument is not a string"
);

//2. Argument passed is a string
assert(
	convertToCamelCase("This is some string"),
	"This Is Some String",
	"Did not convert to camel case properly"
);

assert(
	convertToCamelCase("This is another string with - special characters .. !!"),
	"This Is Another String With - Special Characters .. !!",
	"Did not convert to camel case properly"
);