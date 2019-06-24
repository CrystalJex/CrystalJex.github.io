/*Input: Temple data already provided.
Processing:Run a for loop to determine the smallest number in the second column.
Output: Output the temple associated with the lowest number.
*/

//Input
let table = document.getElementById("templeData");
let year = parseInt(table.rows[1].cells[1].innerHTML);
let rows = document.getElementById("templeData").rows.length;
let oldestTemple = table.rows[i].cells[0].innerHTML;

//Processing
for (let i=1; i<=rows; i++) {
	let compareYear = parseInt(table.rows[i].cells[1].innerHTML);
	if (year <= compareYear) {
		year = parseInt(table.rows[i].cells[1].innerHTML);
		
		//Output
		document.getElementById("output").innerHTML = oldestTemple;
	}
}
