var phoneNumber = prompt("Please enter your phone number with dashes: \nxxx-xxx-xxxx");

while(phoneNumber.charAt(3) !== '-' && phoneNumber.charAt(7) !== '-') {
	phoneNumber = prompt("The number you entered is invalid.\n" +  
			"Please enter in the following format: xxx-xxx-xxxx");	
}
	alert("Thank you! Your phone number is valid.");

var birthDate = prompt("Please enter your birth date: \nxx/xx/xx");

while(birthDate.charAt(2) !== '/' && birthDate.charAt(5) !== '/') {
	birthDate = prompt("The date you entered is invalid.\n" +  
			"Please enter in the following format: xx/xx/xx");	
}
	alert("Thank you! Your birth date is valid.");

var postalCode = prompt("Please enter your postal code: \nxxxxx OR xxxxx-xxxx");

if(postalCode.charAt(5) === '-' || postalCode.charAt(5) === '') {
	alert("Thank you! Your postal code is valid.");
}
else {
	postalCode = prompt("Invalid postal code. Please enter your postal code: \nxxxxx OR xxxxx-xxxx");
}

var state = prompt("Please enter your state. Two letter code only: \n XX").toUpperCase();

while(state.length !== 2) {
	prompt("You did not enter a valid state code. \nPlease enter your state. Two letter code only: \n XX");
}

console.log("Your state code is valid.");

var married = prompt("Are you married? Yes or no only").toLowerCase();

if(married === 'yes' || married === 'no') {
	alert("Your response was valid. Thanks!");
}
else {
	var married = prompt("Not a valid response. Are you married? Yes or no only").toLowerCase();	
}

alert("Here is the info you entered: \n\t Phone Number: " + phoneNumber + 
	"\n\t Birth Date: " + birthDate + 
	"\n\t Postal code: " + postalCode + 
	"\n\t State: " + state + 
	"\n\t Married: " + married +
	"\n Thanks!");

// var isNumber = function(n) {
//  return !isNaN(parseFloat(n)) && isFinite(n);
// };