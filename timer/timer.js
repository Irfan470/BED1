// console.log("hi!");
// setTimeout(() => {
//     console.log("there!");
// }, 3000);
function print(text){
    console.log(text+"\n");
}
// function calculator(a, b, callback){
//     let result = a + b;
//     callback(result);   


// }
// print("wait for 3 seconds");
// const id= setTimeout(() => calculator(2, 3, print), 3000);
// setTimeout(()=>clearInterval(id), 30000)

function timer(callback){
    counter++;
    callback(counter)
}
print("waiting...")
var counter = 0;
const id= setInterval(()=>timer(print), 2000)
setTimeout(()=>clearInterval(id), 30000)