// process.stdout.write("Hello ")
// process.stdout.write("world") //ye node enviroment ka func h isme hello world ayega
//
// let prompt = require('prompt-sync')();
// let num = Number(prompt("Enter a number"))10
// // // process.stdout.write(a) //10

// for (let i = 1; i <= num; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("1 ",)
//   }

//   console.log();


// }

//Q2.

// num = 5
// for (let i = 1; i <= num; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + " "); //1
//                                    // 1 2
//                                    // 1 2 3 and so onn
//   }
//   console.log();


// }

//Q3.

// for (let i = 1; i <= num; i++) {
//   let ascii = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(ascii) + " ")
//     ascii++;
//   } console.log();

// }

//Q4.

let prompt = require('prompt-sync')();
let num = Number(prompt("Enter a number"))

// for (let i = num; i <= num; i++) {
//   for (let j = i; j >= i; j--) {
//     console.log("* ");

//   }
//   console.log();

// }

//Q5. * pattern

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if (i == j || i + j == num + 1) {
      process.stdout.write("* ")
    } else process.stdout.write(" ")
  }
  console.log();

}


