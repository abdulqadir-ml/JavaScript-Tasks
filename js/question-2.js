//Q2. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

function filterLongWord(wordArr, lowerLimit) {
	
	var index = 0;
	var longerWordArr = [];

	if ( !Array.isArray(wordArr) )
		return longerWordArr;

	if ( lowerLimit < 0 || isNaN(lowerLimit) )
		lowerLimit = 0;

	for ( var i = 0; i < wordArr.length; i++ ) {
		if ( typeof wordArr[i] == "string" && wordArr[i].length > lowerLimit) {
			longerWordArr[index++] = wordArr[i]; 
		}
	}

	return longerWordArr;

}

//TEST CASES
console.log("Testing question 2");

//1. first argument is not an array
assertArray(
	filterLongWord("abdulqadir", 5), 
	[], 
	"Should return an empty array");

//2. second argument is either not a number or is less than zero
assertArray(
	filterLongWord(["hello", "world", "abdulqadir", 4, 5], {lowerLimit: 5}), 
	["hello", "world", "abdulqadir"], 
	"Should return all the strings in the array if lowerLimit is not a number or is less than zero");

//3. Array contains no strings
assertArray(
	filterLongWord([1, 3, {key:"value"}], 5), 
	[], 
	"Should return an empty array if there are no strings in the array");

//4. There are "no" strings with length greater than the second argument
assertArray(
	filterLongWord(["hello", "world", "this", "that"], 5), 
	[], 
	"Should return an empty array if there are no strings in the array");

//5. There are strings with length greater then the second argument
assertArray(
	filterLongWord(["abdulqadir", "hello", "world", "stadium", "strings", "run"], 5), 
	["abdulqadir", "stadium", "strings"], 
	"Not returning the words with length greater than the lower limit");