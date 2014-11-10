function assert(condition, expectedValue, errorMessage) {
	if(condition === expectedValue) {
		console.log("test passed - OK");
	} else {
		console.log("test failed - " + condition + "===" + expectedValue + " - Error: " + errorMessage); 
	}
}

function assertArray(condition, expectedValue, errorMessage) {
	if (condition.toString() === expectedValue.toString() ) {
		console.log("test passed - OK");	
	} else {
		console.log("test failed - " + condition + "===" + expectedValue + " - Error: " + errorMessage); 
	}
}