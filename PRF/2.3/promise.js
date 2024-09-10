// function print(text){
//     console.log(text + "\n")
// }
// let promise = new Promise( function(resolve, reject){
//     let x = 0;
//     if (x==1){
//         resolve("Ok")
//     }else{
//         reject("Error")
//     }
   
// })
// promise.then(
//     function(value){print(value);},
//     function(error){print(error);}
// )

function print(text) {
  console.log(text + "\n");
}
async function display() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("done!"), 1000);
  });
  const result = await promise;
  print(result);
  console.log(promise);
}
display();