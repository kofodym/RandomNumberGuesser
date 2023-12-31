// Random Number Guessing Game
// Develop a program that generates a random number between 1 and 100.
// Allow the user to guess the number and provide feedback on
// whether the guess is too high, too low, or correct.

function guessNumber(x) {
  // Declare user input
  let userInput = x;

  // generate a random Number between 1 and 100.
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  //   console.log("Random Number: " + randomNumber);

  if (userInput === randomNumber) {
    return "Bravo! You are correct!";
  } else if (userInput > randomNumber) {
    return "Your guess is too high, try again";
  } else {
    return "Your guess is too low, try again";
  }
}

console.log(guessNumber(25));
