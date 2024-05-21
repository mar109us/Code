/*

function showMessage(from = "no thing", text = "no thingy") {
    alert(from + ", " + text);
}

showMessage("hi", "you");

*/


/*

Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

    Using a question mark operator ?
    Using OR ||


function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

*/


/*

both works!!!

whops, needs to be a function, rewriting

let age = prompt("what is your age?");

function checkAge(age) {
age = age > 18 ? true : "Did parents allow you?" 
}

alert(age);



let age = prompt("what is your age?") > 18 || "Did parents allow you?"
alert(age);

*/

// let age = prompt();

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
//   }


// checkAge();

/*
Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

/*
function min(a,b) {
    if (a < b) {
        alert(a);
    }
    else if (a > b) {
        alert(b);
    }
    else if (a === b) {
        alert(a);
    }
}

bad bad, actual answer:

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
*/

/*
Write a function pow(x,n) that returns x in power n. Or, in other words, 
multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

Run the demo

P.S. In this task the function should support only 
natural values of n: integers up from 1.
*/


// function min(a, b) {
//     if (a < b) {
//         return a
//     }
//     else if (a > b) {
//         return b
//     }
// }


let x = prompt("1st number?");
let n = prompt("to the power of what number?");
let result

function pow(x, n) {
    return result = (x ** n)
}
pow(x, n);
alert(result);