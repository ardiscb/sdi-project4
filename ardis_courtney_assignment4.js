

//Strings
var courtneyLib = function() {

	var isPhoneNum = function (phoneNum) {
		//TODO: Fill in working code here that tests whether a string follows a phone number pattern such as 123-456-7890
		return {};
	};

	//Function: tests whether a string follows an email address pattern such as aaa@bbb.ccc
	//Not outputting correctly when going through if statement to see if there is a "." in the email address
	var isEmail = function (email) {
		//var email = "ardiscb@fullsail.edu"
		if (email.match("@") && email.match(".")) {
			console.log("This is an email address.");
		}
		else {
			console.log("This is not an email address");
		};
	};

	//isEmail();

	//Function: tests whether a string is a URL. Does it start with http: or https:?
	var isURL = function (url) {
		var url = "https://online.fullsail.edu";
		if (url.match("http:") || url.match("https:")) {
			console.log("This is a URL.");
		}
		else {
			console.log("Not a URL");
		};
		return {};
	};

	//isURL();

	var makeTitle = function (words) {
		//TODO: Fill in working code here that takes a string, splits into words, then uppercases the first letter of each word
		return {};
	};

	var changeSeparator = function (string, string2) {
		//TODO: Fill in working code here that given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: 
		//"a,b,c" + "," + "/" --> "a/b/c".
		return {};
	};

	return {
		//"phoneNumber": isPhoneNum,
		"email": isEmail,
		"url": isURL,
		//"title": makeTitle,
		//"separator": changeSeparator

	};
};

var library = courtneyLibrary();

//functionName.isPhoneNum("123-456-7890");
console.log(library.isEmail("ardiscb@fullsail.edu"));
library.isURL("http://online.fullsail.edu");

//Numbers
var formatNum = function (number) {
	//TODO: Fill in working code here that formats a number to use a specific number of decimal places such as money: 2.1 --> 2.10
	return {};
}

var matchNum = function (number) {
	//TODO: Fill in working code that fuzzy-matches a number: is the number above or below a number within a certain percent?
	return {};
}

var findDays = function (dates) {
	//TODO: Fill in working code that finds the number of days difference between two dates.
	return {};
}

var convertString = function (string) {
	//TODO: Fill in working code that given a string version of a number such as "42", return the value as an actual Number, such as 42.
	return {};
}

//Arrays
var findNum = function (number) {
	//TODO: Fill in working code that finds the smallest value in an array that is greater than a given number.
	return {};
}

var findValue = function (numbers) {
	//TODO: Fill in working code that finds the total value of just the numbers in an array, even if some of the items are not numbers.
	return {};
}

var sort = function (array) {
	//TODO: Fill in working code that given an array of objects and the name of a key, rturn the array sorted by the value of that key in each of the objects: "a" + [{a:2}, {a:3}, {a:1}] --> [{a:1}, {a:2}, {a:3}]
	return {};
}


/* 

//Make Up: String Variable, Deliverable 2
var name = "Courtney";

//Make Up: While Loop, Deliverable 2
while () {

};

//Make Up: Scope, Deliverable 2


//Make Up: Arguments, Deliverable 2


//Make Up: Returns, Deliverable 2


*/

