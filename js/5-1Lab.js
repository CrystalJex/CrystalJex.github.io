// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table
INPUT: Get radius from the "Cylinder Radius" input box. Get height from "Cylinder Height" box.
PROCESSING: Multiply the height, pi and the radius squared. V=πr2h
OUTPUT: Display volume in liters.
*/
function volume() {
	//Input
	let r = parseFloat(document.getElementById("radius").value);
	let h = parseFloat(document.getElementById("height").value);
	//Processing
	let v = Math.PI * Math.pow(r,2) * h;

//Output
document.getElementById("output").innerHTML = v.toFixed(2)+ " Liters";
}
