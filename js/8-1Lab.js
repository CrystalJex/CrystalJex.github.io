/*INPUT: Get integer that user entered from input box.
PROCESSING: Starting with 1 write a loop to determine if each number has a remainder of 0 when divided by 2. Add all numbers between 1 and the number from input box that are odd.
OUTPUT: Display sum of odd numbers.
*/

//Input
function oddSum() {
	let number = parseInt(document.getElementById('n').value);
	let sum = 0;

	//Processing
	for (let i = 1; i <= number; i++) {
		if ((i % 2) != 0) {
			sum += i;
		}
	}
	//Output
	document.getElementById('output').innerHTML = sum;
}