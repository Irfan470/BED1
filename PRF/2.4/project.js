function randomName() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
const tableCount = 15;
let tableSizes = Array.from(Array(tableCount).keys()).map(() =>
  getRandomInt(2, 10)
); //declares how many people can seat at table of certain index
customers = [];
let sneakyAttackId = 0;
function freeTable() {
  let index = parseInt(
    prompt(
      "Provide an index to free its table. It should be greater or equal to 0, but less than " +
        tableCount +
        "."
    )
  );
  while (index < 0 || index >= tableCount) {
    index = parseInt(
      prompt(
        "Wrong index. Provide an index to free its table. It should be greater or equal to 0, but less than " +
          tableCount +
          "."
      )
    );
  }
  console.log(customers);
  for (let i = customers.length - 1; i >= 0; i--) {
    if (customers[i][1] == index) customers.splice(i, 1);
  }
  console.log(customers);
}
function sneakyAttack() {
  sneakyAttackId = setInterval(() => {
    customers.push([randomName(), getRandomInt(0, tableSizes.length)]);
    console.log("Shhhhhhhh");
    return;
  }, 3000);
}
function stopSneakyAttack() {
  if (sneakyAttackId != 0) {
    clearInterval(sneakyAttackId);
    console.log("Sneaky attack stopped.");
  }
}
function newCustomer() {
  const name = prompt("Hello, what is your name?");
  let size = 0;
  let askAboutTableSize = "";
  while (true) {
    if (size == 0) {
      askAboutTableSize = "Hello " + name + "! Table for how many people?";
    } else {
      askAboutTableSize =
        "Unfortunately we don't have a table for that many people. Please ask the smaller table size.";
    }
    size = parseInt(prompt(askAboutTableSize));
    if (size != 0 && Math.max(...tableSizes) >= size) {
      break;
    }
  }
  let tableNumber = 0;
    let tableFound = [];
    for (let i = 0; i < tableSizes.length; i++) {
        let available = true;
        for (let j = 0; j < customers.length; j++) {
            if (customers[j][1] == i) {
                available = false;
                break;
            }
        }
          if (tableSizes[i] >=size && available) {
        tableFound.push(i);
    } 
    }
    if (tableFound.length>0){
        tableNumber = tableFound.reduce((minIndex, currentIndex)=>{
            if (tableSizes[minIndex]<tableSizes[currentIndex]){
                return minIndex;
            }else{
                return currentIndex;
            }
        });
        customers.push([name, tableNumber]);
    }else{
        console.log("Sorry, no table available for you.");
    }
    console.log(customers);
    console.log(tableSizes);
    
}