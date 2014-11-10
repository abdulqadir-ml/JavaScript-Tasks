//Q4. Write a function to sort a list of words (an array) in alphabetical order

//bubble sort
function sort(wordArr)
{

	var sortedWordArr = [];

	if ( !Array.isArray(wordArr) )
	{
		return sortedWordArr;
	}

	var index = 0;

	for( var i = 0; i < wordArr.length; i++ )
	{
		if(typeof wordArr[i] == "string") {
			sortedWordArr[index++] = wordArr[i];
		}
	}

	var swapTemp = "";
	var swapBool = false;
	do
	{
		swapBool = false;
		for( var j = 0; j < sortedWordArr.length - 1; j++)
		{

			for ( var k = 0; k < sortedWordArr[j].length; k++ )
			{
				if ( sortedWordArr[j+1].charCodeAt(k) < sortedWordArr[j].charCodeAt(k) || isNaN(sortedWordArr[j+1].charCodeAt(k)) )
				{
					swapTemp = sortedWordArr[j];
					sortedWordArr[j] = sortedWordArr[j+1];
					sortedWordArr[j+1] = swapTemp;
					swapBool = true;
					//console.log(wordArr);
					break;
				}
				else if ( sortedWordArr[j+1].charCodeAt(k) == sortedWordArr[j].charCodeAt(k) )
				{
					continue;
				}
				else
				{
					break;
				}
			}

		}
	} while(swapBool === true);

	return sortedWordArr;
	
}

// TEST CASES
console.log("Testing question 4");

//1. Argument passed is not an array
assertArray(
	sort("string"),
	[],
	"Should return an empty array if argument is not an array");


sort(["abdulqadir", "hasnain", "arsalan", "zeeshan", "abid", "burhan", "hassan"]);
//2. Argument passed has an array of strings and is sorted correctly
assertArray(
	sort(["abdulqadir", "hasnain", "arsalan", "zeeshan", "abid", "burhan", "hassan"]),
	["abdulqadir", "abid", "arsalan", "burhan", "hasnain", "hassan", "zeeshan"],
	"List is not sorted correctly"
	);

//3. Argument passed has an array of multiple data types along with strings
assertArray(
	sort(["spoon", 1, 5, {name:"abdulqadir"}, "sponser", "sponsers"]),
	["sponser", "sponsers", "spoon"],
	"List is not sorted correctly"
	);

//4. Argument passed has an array of multiple data types but no strings
assertArray(
	sort([1, 5, {name:"abdulqadir"}]),
	[],
	"List is not sorted correctly"
	);

