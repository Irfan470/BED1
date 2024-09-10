

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function MinMax(numbers){
    return [Math.min(...numbers), Math.max(...numbers)];
}
console.log(MinMax(numbers));

function Parse(str, num){
    let num1 = parseInt(str);
    return num1*num;

}
console.log(Parse("5", 2));

function SplitStrAdd(string){
    let arr = string.split("+");
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += parseInt(arr[i]);
    }
    return sum;
}
console.log(SplitStrAdd("1+2+3+4+5"));
  