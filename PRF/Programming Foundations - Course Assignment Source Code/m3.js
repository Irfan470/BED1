let global;

function storeValue() {
    const result = prompt("Provide the new data if you want to change it. Otherwise click Cancel.");
    if(result !== null) {    
        global = result;

    } else {
        alert("The data is still the same.");
    }
    confirm(global); 
}

function addTwoNumbers() {
  let num1 = parseInt(prompt("Provide the first number:"));
  let num2 = parseInt(prompt("Provide the second number:"));

  if (isNaN(num1) || isNaN(num2)) {
    alert("Wrong data"); // Handle the case where the user does not provide valid numbers
  } else {
    // The correct syntax for `alert` with multiple arguments is to concatenate them into a string
    alert("The final score is: " + (num1 + num2));
  }
}

function extractMiddleString() {
    const text = prompt("Provide string containing at least 5 characters.")
    if(text.length < 5) {  
        alert("Wrong data");
        return;
    }
const middle = Math.floor(text.length / 2);
const middleSize = Math.ceil(text.length / 2);
const startIndex = middle - Math.floor(middleSize / 2);
const endIndex = startIndex + middleSize;
  const middleString = text.substring(startIndex, endIndex);
  alert(middleString);
}

function stringReplace() {
  let text = prompt("Provide a string containing at least 5 characters.");

  if (!text || text.length < 5) {
    alert("Please provide a valid string with at least 5 characters.");
    return;
  }

  text = text.replace(/a/gi, "@").replace(/e/gi, "3").replace(/o/gi, "0");

  alert(text);
}



function ifExample() {
  const age = parseInt(prompt("How old are you?"));

  if (!isNaN(age) && age > 1) {
    if (confirm("Are you sure that your age is: " + age + "?")) {
      if (confirm("Definitely?")) {
        alert("Your age is " + age + "!");
        return;
      }
    }
  }

  alert("I still don't know your age :(");
}


function switchExample() {
  const number = parseInt(prompt("Please provide a number from 1 to 5"));

  if (isNaN(number) || number < 1 || number > 5) {
    alert("Wrong data");
    return;
  }

  switch (number) {
    case 1:
      alert(
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare mauris eget tortor accumsan posuere. Mauris pharetra pellentesque libero, ut cursus eros consectetur nec. Suspendisse id erat vitae tellus cursus rutrum ut sit amet nisi. Aliquam cursus ultrices nisl in vestibulum. Nunc lacinia metus a venenatis pretium. Nullam vitae tincidunt ante. Duis posuere, dolor ac accumsan consequat, ex mi congue sem, sit amet fringilla tellus velit at neque. Donec luctus mi eu ligula volutpat semper. Maecenas vulputate bibendum velit, at finibus velit consectetur sed. Maecenas commodo feugiat lorem, vitae eleifend velit iaculis ut. Duis ac suscipit nisl. Sed vel metus."
      );
      break;
    case 2:
      alert(
        "Your favourite number is 2. It means you probably are a very creative person!"
      );
      break;
    case 3:
      alert(
        "Your favourite number is 3. It means you probably don't like to take a risk!"
      );
      break;
    case 4:
      alert(
        "Your favourite number is 4. It means you probably are not afraid of anything!"
      );
      break;
    case 5:
      alert(
        "Your favourite number is 5. It means you probably are a perfect student!"
      );
      break;
    default:
      alert("Something went wrong.");
      break;
  }
}


const spliceText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare mauris eget tortor accumsan posuere. Mauris pharetra pellentesque libero, ut cursus eros consectetur nec. Suspendisse id erat vitae tellus cursus rutrum ut sit amet nisi. Aliquam cursus ultrices nisl in vestibulum. Nunc lacinia metus a venenatis pretium. Nullam vitae tincidunt ante. Duis posuere, dolor ac accumsan consequat, ex mi congue sem, sit amet fringilla tellus velit at neque. Donec luctus mi eu ligula volutpat semper. Maecenas vulputate bibendum velit, at finibus velit consectetur sed. Maecenas commodo feugiat lorem, vitae eleifend velit iaculis ut. Duis ac suscipit nisl. Sed vel metus.";
spliceText = spliceText.replace(/\./g, '');
spliceText = spliceText.replace(/\,/g, '');
function spliceExample() {
    //text from: https://www.lipsum.com/ - 100 words
    const array = spliceText.split(",");    
    console.log(array);
    const length = parseInt(prompt("Specify the word's length:"));
    if(isNaN(length) && length <= 0) {  
        alert("Wrong length");
        return;
    }
    const index = array.find(x => x.length == length);  
    if(index >= 0) {
        const element = array[index];
        array.splice(index + 1, 2, element);
        console.log(array);
        spliceText = array.join(" ");
    }
}

function iteratorMethods() {
  const userText = prompt("Please provide some text to add to every word:");

  if (!userText) {
    alert("You need to provide some text.");
    return;
  }

  let wordArray = spliceText.split(" ");

  let modifiedArray = wordArray.map((word) => word + userText);

  let modifiedString = modifiedArray.join(" ");

  console.log("Modified string:", modifiedString);
}


function infiniteLoop() {
  let input;

  // Create an infinite loop using while(true)
  while (true) {
    // Prompt the user for input
    input = prompt("Type 'STOP' to end the loop:");

    // Check if the input is "STOP" (case-sensitive)
    if (input === "STOP") {
      alert("You have successfully stopped the loop!");
      break; // Exit the loop when "STOP" is entered
    }
  }
}

function ultimateExample() {
  const n = parseInt(prompt("Enter the size of the grid (n):"));

  if (isNaN(n) || n <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  const characters = [" ", "|", "_", "X", "."];


  let grid = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      grid += characters[Math.floor(Math.random() * characters.length)];
    }
    grid += "\n";
  }

  console.log(grid);
}


