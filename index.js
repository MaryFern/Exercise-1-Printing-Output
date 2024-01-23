// Exercise 1: Printing Output

// Task 1: Declare Variables:
let a = 3;
let b = 5;
let c;

let output = `
let a = 3;
let b = 5;
let c;
----------
a + b = ${a + b},
a - b = ${a - b},
a * b ${a * b },
a / b = ${a / b},
a % b = ${a % b},
a += b = ${a += b},
a -= b = ${a -= b},
a *= b = ${a *= b},
a /= b = ${a /= b},
a %= b = ${a %= b},
a != b = ${a != b},
a > b = ${a > b},
a < b = ${a < b},
!a && !c = ${!a && !c},
!a || !c  = ${!a || !c},

`;

console.log(output);


// Alert( "description of alerted_value: " + alerted_value );
/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/

// Task 2:
// Declare the variable first_name and assign it with the value of your first name;
// Declare the variable last_name and assign it with the value of your last name;
// Declare the variable email and assign it with the value of your email;
// Declare the variable output;

let fname = "Mary";
let lname = "Fernandez";
let email = "fern0222@algonquinlive.com";
let sentence;

sentence = "My name is";
sentence += " ";
sentence += fname;
sentence += " ";
sentence += lname;
sentence += ".";
sentence += "You can contact me at";
sentence += " ";
sentence += email;
sentence += ".";


console.log(sentence); 