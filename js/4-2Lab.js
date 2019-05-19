// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table
INPUT: Get city, state and zip code from their input boxes.
PROCESSING: Concantenate city, state and zip code.
OUTPUT:Display city, state and zip code on one line.
*/

function address() {
	//INPUT
	let city = document.getElementById("yourCity").value;
	let state = document.getElementById("yourState").value;
	let zip = document.getElementById("yourZip").value;
	//PROCESSING
	let yourAddress = city + ", " +state +" "  +zip;
	//OUTPUT
	document.getElementById("output").innerHTML = yourAddress;
}