/* INPUT: Get the number the user guesses from the number input box and convert into an integer.
PROCESSING: If the number is <56 then display " is too low, guess again" and prompt the user to guess again. If the number is >56 then display " is too high, guess again" and prompt the user to guess again.
OUTPUT: Display correct answer along with how many attempts it took.
*/

function numberGuessGame() {
	let message =
		"I'm thinking of a number between 1 and 100.\n" +
		"Try to guess it!\n" +
		"Please enter an integer between 1 and 100.";
	let answer = 56;
	let guess;
	attempts = 0
	do {
		guess = parseInt(prompt(message));
		attempts += 1
		if (guess < answer) {
			message = guess + " is too low. Please enter another integer.";
			
		} else if (guess > answer) {
			message = guess + " is too high. Please enter another integer.";
		}
	} while (guess != answer);
	message = guess + " is correct! <br> It took " + attempts + " tries to guess right!";
	document.getElementById('output').innerHTML =message;
}