/*INPUT: Get today's date, holidays and weekends.
PROCESSING: Determine if the day is a regular weekday and the alarm should display "Wake Up", or if the day is a weekend of holiday and the alarm should display "Sleep In"
OUTPUT: Display date and message.
*/

//Input
let today = new Date();
let day = today.getDay();
let month = today.getMonth();
let date = today.getDate();

	document.getElementById('theDate').innerHTML = today;

//Processing
if ( (month == 0 && day == 1) || (month == 6 && day == 4) || (month == 11 && day == 25) || day == 6 || day == 0) {
	result = "Yay! Sleep In!";
} else {
	result = "Get Up!";
}

//Output
document.getElementById('alarm').innerHTML = result;