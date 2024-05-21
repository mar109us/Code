// let x = prompt("write number")

// switch(x) {

//     case '10':
//         alert("10")
//         break;
    
//     case '20':
//         alert("20")
//         break;

//     default:
//         break;

// }

/*

rewrite switch into if:

switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }

  */


// let answer = prompt("what browser?")
// let otherBrowsers = ["chrome", "firefox", "safari", "opera"]

// answer = answer.toLowerCase()

// if (answer === "edge") {
//     alert( "You've got the Edge!" )
// }

// else if (otherBrowsers.includes(answer)) {
//     alert(`Okay we support ${answer} too`)
// }

// else {
//     alert( 'We hope that this page looks ok!' )
// }

/*

Rewrite the code below using a single switch statement:

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

*/

let a = +prompt('a?');

switch(a) {

    case 0:
        alert('0');
        break;

    case 1:
        alert('1');
        break;

    case 2:
    case 3:
        alert('2,3');
        break;

}


  