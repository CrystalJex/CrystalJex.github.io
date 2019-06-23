/*Input: Get integer from the input box.
Processing: Take the number from the input box and multiply from 1-12 using a loop.
Output:Display list of multiplication problems from 1-12 and the input number from user.
*/


function showTable() {
	let number = parseInt(document.getElementById("number").value);
	let timeTable = "";

	for (let i = 1; i <= 12; i++) {
		timeTable += number + "x" + i + "=" + number * i + "<br>";
	}

	document.getElementById("output").innerHTML = timeTable;
}