// ! Har bir masalaga 10 daqiqadan vaqt sarflang oshib ketmasin...

// Masala - 1

// Arraydagi eng katta sonni topish kerak for loop bilan

// Array of numbers
// const numbers = [23, 45, 67, 89, 34, 56, 33, 151, 78, 20];

// // Initialize the maximum number variable
// let maxNum = 0;

// // Loop through each number in the array
// for (let i = 0; i < numbers.length; i++) {
//   // Check if the current number is greater than the current maximum
//   if (maxNum < numbers[i]) {
//     // Update the maximum number if the current number is greater
//     maxNum = numbers[i];
//   }
// }

// // Print the maximum number
// console.log(maxNum);


// 4 mins done

// Masala - 2

// Arraydagi eng uzun so'zni topib uning oxirgisidan bitta oldingi harfini topish

// Array of fruits
// const fruits = ["Olma", "Nok", "Anor", "Chegara"];

// // Function to find the longest word and its second-to-last letter
// function findLongestWord(fruits) {
//   // Initialize variables to store the longest word and its second-to-last letter
//   let longestWord = "";
//   let secondToLastLetter;

//   // Loop through each fruit in the array
//   for (const fruit of fruits) {
//     // Check if the current fruit's length is greater than the length of the longest word found so far
//     if (fruit.length > longestWord.length) {
//       // If so, update the longest word
//       longestWord = fruit;
//       // Get the second-to-last letter of the current longest word
//       secondToLastLetter = longestWord[longestWord.length - 2];
//     }
//   }

//   // Return the second-to-last letter of the longest word
//   return secondToLastLetter;
// }

// // Call the function to find the second-to-last letter of the longest word
// const secondToLastLetter = findLongestWord(fruits);

// // Print the result
// console.log(`Second-to-last letter of the longest word: ${secondToLastLetter}`);


// done


// Masala - 3

// Arraydagi barcha stringning lengthini topish
// Array of fruits
// const fruites = ["Olma", "anor", "Nok"];

// Initialize a variable to store the total length of all strings in the array
// let result = 0;

// Loop through each fruit in the array
// for (let i = 0; i < fruites.length; i++) {
// Add the length of the current fruit to the total result
//   result += fruites[i].length;
// }

// Print the total length of all strings in the array
// console.log(result);

// done



// Masala - 4

// Arrayda kamida 6 ta toq va juft son bor, va shundan juft sonlarning yarmini ya'ni 18 juft soni bo'lsa uning yarmi 9 sonini bir arrayga solib qaytarib bersin ya'ni hamma juftlarning yarmini bitta arrayga joylash kerak

// // Array of numbers
// const numbers = [23, 58, 96, 31, 74, 44, 152, 531, 26];

// Initialize an empty array to store the results
// let arrNumbers = [];

// Initialize a variable to store the result of division
// let res = 0;

// Loop through each number in the array
// for (const iterator of numbers) {
  // Check if the current number is even
  // if (iterator % 2 == 0) {
    // If even, divide the number by 2
    // res = iterator / 2;
    // Push the result into the array
    // arrNumbers.push(res);
  // }
// }

// Print the array containing the results
// console.log(arrNumbers);

// done


// Masala - 5

// Arraydagi katta harf bilan boshlangan so'zlarning birinchi harfini kichik qolgan harfini katta qilib, kichik harf bilan boshlanganlarini birinchi harfini katta qolganlarini kichkina qib bersin

//// Array of fruits
// const fruites = ["olma", "o'rik", "Nok", "avacado"];

// // Initialize an empty array to store the modified fruits
// const modifiedFruites = [];

// // Loop through each word in the array
// for (let word of fruites) {
//   // Check if the first letter of the word is uppercase
//   if (word[0] == word[0].toUpperCase()) {
//     // If uppercase, make the first letter lowercase and the rest uppercase
//     modifiedFruites.push(word[0].toLowerCase() + word.slice(1).toUpperCase());
//   } else if(word[0] == word[0].toLowerCase()) {
//     // If lowercase, make the first letter uppercase and the rest lowercase
//     modifiedFruites.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
//   }
// }

// // Print the modified fruits array
// console.log(modifiedFruites);


// done



// Masala - 6

// Promptdan bir so'z kiritish kerak va shu so'zni 3 marta space bilan chiqarib berish kerak for loop da

// example: olma => olma olma olma

//// Prompt the user to enter a word
// let word = prompt("Enter a word");

// // Initialize an empty string to store the result
// let res = "";

// // Repeat the word three times with spaces in between
// for (let i = 0; i < 3; i++) {
//   res += " " + word;
// }

// // Print the result
// console.log(res);

// done


// Masala - 7
// Ichma ich array bor va shu arrayning juft arraylarning birinchi elementining birinchi harflarini birlashtirib qaytarib bersin

// example: const fruitesArray = [["Olma"],["Bexi"],["Anor"],["Xurmo"],["GIlos"],["Kiwi"],["Banan"],];  => BXK
// Array containing arrays of fruits
const fruitesArray = [["Olma"], ["Bexi"], ["Anor"], ["Xurmo"], ["GIlos"], ["Kiwi"], ["Banan"]];

// Initialize an empty string to store the result
let res = "";

// Loop through each sub-array in the fruitesArray
for (let i = 0; i < fruitesArray.length; i++) {
  // Check if the index of the sub-array is odd
  if (i % 2 == 1) {
    // If odd, append the first letter of the first fruit in the sub-array to the result
    res += fruitesArray[i][0][0];
  }
}

// Print the result
console.log(res);

// done