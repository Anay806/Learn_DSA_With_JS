

//if-else

// if (23 > 11) {
//   console.log("Valid num");

// }  code run hoga

//Q1. chek valid vooter
// let age = prompt("Enter your age")

// if (age >= 18) {
//   console.log("You are valid Vooter", age);


// } else {
//   console.log("You are not Valid Vooter");

// }

//Q2. shoup discount

// let amount = prompt("Enter your total purchasing value")
// let dis = 0;

// if (isNaN(amount)) {
//   console.log("Wroung input");

// }

// if (amount > 0 && amount <= 5000) {
//   console.log("Your total amount, no discount of this range: ", amount);

// } else if (amount > 5000 && amount <= 7000) {
//   dis = 5;

// } else if (amount > 7000 && amount <= 9000) {
//   dis = 10;

// }
// else if (amount > 9000) {
//   dis = 20;

// }
// console.log(amount - Math.floor(amount * dis) / 100);


// let currUnit = Number(prompt("Enter your total unit of electricity"))

// if (currUnit > 0 && currUnit <= 100) {
//   console.log("Your Total Electric Bill: ", currUnit * 4.2);

// } else if (currUnit > 100 && currUnit <= 200) {
//   console.log(currUnit * 6);

// } else if (currUnit > 200 && currUnit <= 400) {
//   console.log(currUnit * 8);

// } else if (currUnit > 400) {
//   console.log(currUnit * 13);

// }

// let unit = Number(prompt('Enter Your Total unit'))//700
// let amount = 0;

// if (isNaN(unit)) {
//   console.log("Wroung Input");

// }
// if (unit > 400) {
//   amount = (unit - 400) * 13 // suppose 700-300 //3900
//   unit = 400
// }//400
// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8 //1600
//   unit = 200;

// } //200
// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 6 // 600
//   unit = 100;
// }

// amount += unit * 4

// console.log(amount);

let amount = Number(prompt("Enter a number"));

if (isNaN(amount)) {
  console.log('Not a Number');

}
if (amount >= 500) {
  console.log(Math.floor(amount / 500)); //9 notes
  amount = amount % 500;

}
if (amount >= 200) {
  console.log(Math.floor(amount / 200));
  amount = amount % 200;

}
if (amount >= 100) {
  console.log(Math.floor(amount / 100));
  amount = amount % 100

} if (amount >= 50) {
  console.log(Math.floor(amount / 50));
  amount = amount % 50

}
if (amount >= 20) {
  console.log(Math.floor(amount / 20));
  amount = amount % 20

} if (amount >= 10) {
  console.log(Math.floor(amount / 10));
  amount = amount % 10

}
if (amount >= 5) {
  console.log(Math.floor(amount / 5));
  amount = amount % 5

} if (amount >= 2) {
  console.log(Math.floor(amount / 2));
  amount = amount % 2

} if (amount === 1) {
  console.log(Math.floor(amount / 1));


}





