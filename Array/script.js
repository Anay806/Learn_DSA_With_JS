//Array is linier data structure and  Array is the collection of value, means ak se jyada value aap sakh sakte ho means number, string, ya array ke array bhi rakh sakte ho
//let arr = []
// arr.push(20)
// arr.push(30)
// arr.push(40)
// arr.push(50)

// console.log(arr);

// console.log(arr[1]);

// arr.push("Anay")

// arr.pop()

// let arr = new Array(3)  yaha par nya array banaya aur uska size 3 de diya par js me  size ka limit nhi h
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr[3] = 40;

// arr[10] = 150; // arr ke 10th value me 150 store ho jayega

// console.log(arr);

//let arr = [10, 20, 30, 40, "Anay", "Shri"]

// let arr = new Array(3)
// arr.push(10);
// console.log(arr); // yaha par arr ki value  starting ka 3 value chodkar  4 value par ayegi

//prompt se value lena aur array me put karna

// let arr = new Array(5);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt("Enter a value"))
// }
// console.log(arr);

// let arr = [10, 20, 30, 40, 50, 60]

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i]
// }
// console.log(sum);

//Searching the max element

// let arr = [10, 3, 56, 34, 785, 3456, 2341, 5634, 7854, 9876]

// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i]
//   }
// }
// console.log(max);

//Q2. Second maxximam of the array

// let arr = [10, 35, 34, 345, 54647, 65656, 56557, 325465, 56578, 23457, 456376, 464567]

// let max = Math.max(arr[0], arr[1]);
// let max02 = Math.min(arr[0], arr[1])

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max02 = max
//     max = arr[i];
//   } else if (arr[i] > max02) {
//     max02 = arr[i]
//   }
// }
// console.log(max02);

//Reverse Array

// let arr = [10, 20, 30, 40, 50]
// let temp = new Array(arr.length);

// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   temp[j] = arr[i]
//   j++
// }
// console.log(temp);


//Second method of revere Array

// let arr = [10, 20, 30, 40, 50]
// let i = 0, j = arr.length - 1;

// while (i != j) {
//   let temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
//   i++
//   j--
// }
// console.log(arr);

// let arr = [1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0]

// let i = 0, j = 0
// while (i < arr.length) {
//   if (arr[i] == 0) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp;
//     j++
//   }
//   i++
// }

// let arr = new Array(5)
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt("Enter a value"))
// }
// console.log(arr);

//let arr = [10, 20, 30, 40, 50]
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i]
// }
// console.log(sum);
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i]
//   }
// }
// console.log(min);
















