let number = prompt("What number to convert?");
let originalNumber = number;
let storedNumber
let binaryStorage = [];

while (+number > 0) {

    storedNumber = number % 2;

    if (storedNumber === 1) {
        binaryStorage.push(storedNumber);
        number -= 1
        number /= 2;
    }
    else if (storedNumber === 0) {
        binaryStorage.push(storedNumber);
        number /= 2;
    }
    else if (number === 0) {
        binaryStorage.push(0);
    }
}

binaryStorage.reverse();
alert(originalNumber + " = " + binaryStorage.join("") + " in binary");

