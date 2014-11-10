//Q6. Write a JavaScript program to validate a date in dd/mm/yyyy format. If the user input matches with the format, the program will display a message "Valid Date" otherwise display a message "Invalid Date!"

function validateDate(dateStr)
{

	if(typeof dateStr != "string") {
		return false;
	}

	dateStr = dateStr.replace(/\s+/g, '');

	dateStr = dateStr.split("/");
	if(dateStr.length != 3) {
		return false;
	}
	var day = dateStr[0];
	var month = dateStr[1];
	var year = dateStr[2];

	var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	if ( isNaN(year) || year < 1920 || year.toString().length != 4 ) {
		return false;
	}

	if ( isNaN(month) || month < 1 || month > 12 ) {
		return false;
	}

	if( isNaN(day) || day < 1 || day > days[month-1] ) {
		return false;
	}

	return true;

}


//TEST CASES

console.log("Testing question 6");

//1. Passing an argunment which is not a string
assert(
	validateDate(1224),
	false,
	"Should return false when a data type other than string is passed as an argument"
	);

//2. Passing a string with special / alpha numeric characters
assert(
	validateDate("12-12-2014"),
	false,
	"Should return false if the string contains any special or alpha numeric characters other than '/' character"
	);


assert(
	validateDate("12.1.2014."),
	false,
	"Should return false if the string contains any special or alpha numeric characters other than '/' character"
	);

assert(
	validateDate("1/jan/2015"),
	false,
	"Should return false if the string contains any special or alpha numeric characters other than '/' character"
	);


//3. Passing an invalid date

//invalid day with respect to the month
assert(
	validateDate("32/1/2014"),
	false,
	"Should validate the days with respect to the month"
	);

//invalid month
assert(
	validateDate("1/13/2014"),
	false,
	"Month should be between 1 and 12"
	);

//invalid year with more than 4 digits
assert(
	validateDate("1/13/20001"),
	false,
	"Year should be between 1920 - any four digit number"
	);

//4. Entering spaces 

assert(
	validateDate("12 / 12 / 2014"),
	true,
	"Should ignore the spaces"
	);