const DEVELOPMENT = true;
const getRealData = () => {
    //time consuming operation
}
const getFakeData = () =>( {
name: "John Doe",
nationality: "Norway"})
const getData = DEVELOPMENT ? getFakeData : getRealData;

// class Data ={

// }
class FakeData extends Data {
    getData(){
        return {
            name: "John Doe",
            nationality: "Norway"
        }
    }
}
class RealData extends Data {
    getData(){
        //time consuming operation
    }
}
const data = DEVELOPMENT ? new FakeData() : new RealData();


const double = (x) => x * 2;
const addFour = (x) => x + 4;
const subtractTwo = (x) => x - 2;
const triple = (x) => x * 3;
const functionsArray = [double, addFour, subtractTwo, triple, Math.sqrt];
var number = 5;
functionsArray.forEach((fn) => {
    number = fn(number);
});
console.log(number); 
const getNumber = function(index, currentResult, array) {
    if (index == 0) {
        return array[index](currentResult);  // Base case: apply the first function (index 0)
    }
    return array[index](getNumber(index - 1, currentResult, array));  // Recursive case: apply previous functions first
};

getNumber(functionsArray.length - 1, 10, functionsArray);
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const combine =func => (x, y) => func(x, y);
const addFunc = combine(add);
const subtractFunc = combine(subtract);
// const combine = (x, y, fn) => fn(x, y);
// console.log(combine(10, 5, add));
// console.log(combine(10, 5, subtract));

const addNumber = y=>x=>x+y;
const addTen = addNumber(10); // x=>x+10
const addFive = addNumber(5);   // x=>x+5
addTen(5); // 15
addFive(5); // 10

const addString = y=>x=>x+y;
const addHello = addString("Hello, "); // x=>x+"Hello, "
const addWorld = addString("World!"); // x=>x+"World!"
addHello("John"); // "Hello, John"
addWorld("John"); // "World! John"
