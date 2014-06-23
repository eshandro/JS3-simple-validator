var phoneNumber = prompt("Please enter your phone number with dashes: \nxxx-xxx-xxxx");

while(phoneNumber.charAt(3) !== '-' && phoneNumber.charAt(7) !== '-') {
	phoneNumber = prompt("The number you entered is invalid.\n" +  
			"Please enter in the following format: xxx-xxx-xxxx");	
}
	alert("Thank you! Your phone number is valid.");


