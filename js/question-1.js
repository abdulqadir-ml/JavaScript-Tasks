//Q1. Write a function findLongestWord() that takes an array of words and returns the length of the longest word.

function findLongestWord(wordArr) {

	if (!Array.isArray(wordArr)) {
		return 0;
	}

	var firstWordIndex = null;

	for (var i = 0; i < wordArr.length; i++) {
		if(typeof wordArr[i] == "string") {
			firstWordIndex = i;
			break;
		}
	}

	if(firstWordIndex === null) {
		return 0;
	}

	var longestLength = wordArr[firstWordIndex].length;

	for( var j = firstWordIndex; j < wordArr.length; j++ ) {

		if(wordArr[j].length > longestLength) {
			longestLength = wordArr[j].length;
		}
	}

	return longestLength;

}


//TEST CASES
console.log("Testing question 1");

//1. argument passed is not an array - tested - OK
assert(findLongestWord(1), 0, "The return value should be -1 as argument passed is not an array");
assert(findLongestWord("abcdefg"), 0, "The return value should be -1 as argument passed is not an array");

//2. argument passed is an "array" of words only - tested - OK
assert(findLongestWord(["abdul", "qadir", "shahra-e-faisal", "gulshan-e-jauhar", "nazimabad"]), 16, "The function should return 16 which is the longest length");

//3. argument passed has no strings - tested - OK 
assert(findLongestWord([1, {firstName: "Abdul", lastName: "Qadir"}, 3, 4, 5]), 0, "return value should be -1 as the array has no strings");

//4. argument passed in an hetergenous array of object/integers/arrays combined - only consider the strings and ignore the rest
//	- tested - OK
assert(findLongestWord([1, 2, "someWord", 4, 5, "longerWord"]), 10, "Couldn't handle array with multiple data types");