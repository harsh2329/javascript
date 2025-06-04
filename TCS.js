// factorial code 
var num = prompt(" Enter a number");
let factorial = 1;
if (num == 0){
    console.log("Factorial of 0 is 1");
}else if (num < 0){
    console.log("Factorial of negative number is not defined");
}else {
    for (let i=1;i<0; i ++){
        factorial = factorial * i;
    }
}
console.log("Factorial of " + num + " is " + factorial);