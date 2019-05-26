// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table
INPUT: Get hours from the "hours worked" input box. Get wage from "hourly wage" box.
PROCESSING: Multiply the hours worked and hourly wage and subtract 15%.
OUTPUT: Display net pay.
*/
function net() {
	//Input
	let h = parseFloat(document.getElementById("hours").value);
	let w = parseFloat(document.getElementById("wage").value)
	let t = .85;
	//Processing
	let n = h * w * t;

//Output
document.getElementById("output").innerHTML = "$" + n.toFixed(2);
}
