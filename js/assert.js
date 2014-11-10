function assert(inputValue, expectedValue, errorMessage) {
	if(inputValue === expectedValue) {
		console.log("test passed - OK");
	} else {
		console.log("test failed - " + inputValue + "===" + expectedValue + " - Error: " + errorMessage); 
	}
}