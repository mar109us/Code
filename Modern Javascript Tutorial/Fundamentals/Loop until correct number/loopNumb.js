// let answer

// answer = prompt("Write a number higher than 100");

// while (answer < 100){
//     answer = prompt(`Try again, ${answer} is less than 100`)
// }
// if (answer > 100){
//     alert(`great! ${answer} is greater than 100`)
// }
// else if (answer === 100){
//     alert(`${answer} is not greater than 100`)
// }
// else if (answer === null){
//     alert(`Cancelled`);
// } 
///////////////knoooooob

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);