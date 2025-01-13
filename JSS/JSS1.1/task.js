const readline = require("readline");

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askForNumber = () => {
  rl.question("Please provide a number between 0 and 10: ", (input) => {
    const number = parseInt(input, 10);

    // Check if the input is a valid number
    if (isNaN(number)) {
      console.log("The input isn't a valid number. Program will exit.");
      rl.close();
      return;
    }

    // Check if the number is between 0 and 10
    if (number >= 0 && number <= 10) {
      if (number === 7) {
        console.log("Congratulations! You guessed the right number.");
        rl.close();
      } else {
        console.log("Wrong number, try again.");
        askForNumber(); // Ask again
      }
    } else {
      console.log("The number is out of range. Program will exit.");
      rl.close();
    }
  });
};

// Start the program
askForNumber();
