// ! Har bir masalaga 10 daqiqadan vaqt sarflang oshib ketmasin...

// Masala - 1

// Arraydagi eng katta sonni topish kerak for loop bilan

// const numbers = [23, 45, 67, 89, 34, 56, 33, 151, 78, 20];
// let maxNum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (maxNum < numbers[i]) {
//     maxNum = numbers[i];
//   }
// }
// console.log(maxNum);

// 4 mins done

// Masala - 2

// Arraydagi eng uzun so'zni topib uning oxirgisidan bitta oldingi harfini topish

// const fruits = ["Olma", "Nok", "Anor", "Chegara"];

// function findLongestWord(fruits) {
//   let longestWord = "";
//   let secondToLastLetter;
//   for (const fruit of fruits) {
//     if (fruit.length > longestWord.length) {
//       longestWord = fruit; // Update the longest word
//       secondToLastLetter = longestWord[longestWord.length - 2]; 
//     }
//   }
//   return secondToLastLetter;
// }
// const secondToLastLetter = findLongestWord(fruits);
// console.log(`Second-to-last letter of the longest word: ${secondToLastLetter}`);

// done


// Masala - 3

// Arraydagi barcha stringning lengthini topish

// const fruites = ["Olma", "anor", "Nok"];
// let result = 0;
// for (let i = 0; i < fruites.length; i++) {
//   result += fruites[i].length;
// }
//   console.log(result);  
// done



// Masala - 4

// Arrayda kamida 6 ta toq va juft son bor, va shundan juft sonlarning yarmini ya'ni 18 juft soni bo'lsa uning yarmi 9 sonini bir arrayga solib qaytarib bersin ya'ni hamma juftlarning yarmini bitta arrayga joylash kerak

// const numbers = [23, 58, 96, 31, 74, 44, 152, 531, 26];
// let arrNumbers = [];
// let res = 0;
// for (const iterator of numbers) {
//   if (iterator % 2 == 0) {
//     res = iterator / 2;
//     arrNumbers.push(res);
//   }

// }
// console.log(arrNumbers);
// done


// Masala - 5

// Arraydagi katta harf bilan boshlangan so'zlarning birinchi harfini kichik qolgan harfini katta qilib, kichik harf bilan boshlanganlarini birinchi harfini katta qolganlarini kichkina qib bersin

// const fruites = ["olma", "o'rik", "Nok", "avacado"];
// const fruites = ["olma", "o'rik", "Nok", "avacado"];
// const modifiedFruites = [];
// for (let word of fruites) {
//   if (word[0] == word[0].toUpperCase()) {
//     modifiedFruites.push(word[0].toLowerCase() + word.slice(1).toUpperCase());
//   } else if(word[0] == word[0].toLowerCase()) {
//     modifiedFruites.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
//   }

// }
// console.log(modifiedFruites);

// done



// Masala - 6

// Promptdan bir so'z kiritish kerak va shu so'zni 3 marta space bilan chiqarib berish kerak for loop da

// example: olma => olma olma olma

// let word = prompt("Enter a word");
// let res = "";
// for (let i = 0; i < 3; i++) {
//   res += " " + word;
// }
// console.log(res);
// done


// Masala - 7
// Ichma ich array bor va shu arrayning juft arraylarning birinchi elementining birinchi harflarini birlashtirib qaytarib bersin

// example: const fruitesArray = [["Olma"],["Bexi"],["Anor"],["Xurmo"],["GIlos"],["Kiwi"],["Banan"],];  => BXK
const fruitesArray = [["Olma"], ["Bexi"], ["Anor"], ["Xurmo"], ["GIlos"], ["Kiwi"], ["Banan"]];
let res = "";
for (let i = 0; i < fruitesArray.length; i++) {
  if (i % 2 == 1) {
    res += fruitesArray[i][0][0];
  }
}
console.log(res);
// done