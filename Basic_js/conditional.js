

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

let totalPer = prompt("Enter your total purchasing value")

if (totalPer > 0 && totalPer <= 5000) {

  console.log("Sorry no discount, Your Amount is : ", totalPer);


} else if (totalPer > 5001 && totalPer <= 7000) {
  let price = totalPer;
  let proPrice = price / 100 / 10 %
    console.log("Your discounted Amounted: ", proPrice);

} else if (totalPer > 7000 && totalPer < 9000) {
  let tPrice = totalPer;
  let PPrice = tPrice / 100 / 10 %
    console.log("Your discounted price:", PPrice);

} else {
  let finalPrice = totalPer;
  let price = finalPrice / 100 / 10 %
    console.log('Funally your got this big Discounted:', price);

}
