// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table
INPUT: Get name from the "Your Name" input box.
PROCESSING: Insert name from the input box into the scripture passage, replacing the original name in the scripture.
OUTPUT: Display scripture with name from input box.
*/

function personalize() {
	//INPUT
	let firstName = document.getElementById("yourName").value;
	//PROCESSING
	let scripture = "Moroni 1:3 And I, "+ firstName +", will not deny the Christ; wherefore, I wander whithersoever I can for the safety of mine own life."
	//OUTPUT
	document.getElementById("output").innerHTML = scripture;
	}