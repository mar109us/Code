// Task:

// Write the code which outputs prime numbers in the interval from 2 to n.

// For n = 10 the result will be 2,3,5,7.

// P.S. The code should work for any n, not be hard-tuned for any fixed value.



// Chatgpt explain prime number:

// A prime number is a positive integer greater than 1 that has no positive 
// integer divisors other than 1 and itself. In other words, a prime number 
// is a number that is only divisible by 1 and itself. For example, 2, 3, 5, 
// 7, 11, 13, 17, 19, 23, 29, and 31 are all prime numbers. The number 1 is 
// not considered a prime number because it only has one positive integer divisor, 
// which is itself.

/*

Here i will figure out the written logic for the program

I dont need to calculate n / 1, everything can be divided evenly by 1

I have not learned to check for decimals yet, so the solution must be something else

i can use remainder operator? "%""

if n %= 

*/

// let start = 2
// let n = 10

// while (start; start < n && start %=; start++){

// }

/*

Dont think this will work

need to go back to course and read some more
___

i think i need to use a "do while" loop

___

checking how to calculate remainder

___

i need to check if its not prime, to find prime!
if counter + hmmmm
*/

// let counter = 2
// const n = 10

// do {

//     if (counter /) {
//     alert(`${counter} is prime`)
//     counter++
//     }
//     else {
//     ++counter
//     }
   
// } while(counter < n);

/* 

its difficult, will look at answer from task

*/

// let counter = 2
// const n = 10
// let check = 1
// const maxCheck = 10
// let test

// do {

// if ((test = counter / check) + test % !0) {
//     alert("counter " + counter);
//     alert("check " + check);
//     alert("test " + test);
//     check++
// }
// } while (check <= maxCheck);

/* 

actual answer from task

*/

let n = 500;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}