let global;
function storeValue(){
    result = parseInt(prompt("Provide a value to store in the global variable"));
    if(result !== null){
        global = result;
        alert("Value stored is: " + global);
    }
    else{
        alert("Value not stored");
    }
}
function addTwoNumbers(){
    let num1 = parseInt(prompt("Provide the first number"));
    let num2 = parseInt(prompt("Provide the second number"));
    if( isNaN(num1) || isNaN(num2)){
        alert("Please provide a valid number");
    }
    else{
        alert("The sum of the two numbers is: " + (num1 + num2));
    }
}