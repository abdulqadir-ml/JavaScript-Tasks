//Q5. Write a JavaScript function that checks whether a passed string is palindrome or not

function isPalindrome(str)
{

	str = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();

	if(str == reverse(str)) {
		return true;
	}

	return false;

}


//TEST CASES

console.log("Testing question 5");

assert(
	isPalindrome("dad"),
	true,
	"Dad is a palindrome!!"
	);

assert(
	isPalindrome("A man, a plan, a canal, Panama!"),
	true,
	"'A man, a plan, a canal, Panama!' is a palindrome"
	);

assert(
	isPalindrome("aroma"),
	false,
	"aroma is not a palindrome"
)
