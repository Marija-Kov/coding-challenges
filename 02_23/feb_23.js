// 77: https://leetcode.com/problems/add-two-numbers/

// The array way..
// Input: two arrays of non-negative integers
// Output: an array of non-negative integers, representing the sum of input linked lists
// Example: l1 = [2,4,3], l2 = [5,6,4]; should return [7,0,8] because 342 + 465 = 807

const addTwoNumbers = function(l1, l2) {
 let num1 = Number(l1.reverse().join(''))
 let num2 = Number(l2.reverse().join(""));
 return `${num1+num2}`.split('').map(n=>Number(n)).reverse()
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
console.log(addTwoNumbers([0], [0]));
// 78. https://www.codewars.com/kata/56269eb78ad2e4ced1000013
// Input: sq, integer, no invalid input
// Output: -1 or integer: pow(sqrt(sq)+1)

// Solution:
// Check if sqrt(sq) is an integer
// if no, return -1
// if yes, return pow(sqrt(sq)+1)

function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq)
  if(parseInt(sqrt) === sqrt) return (sqrt+1)**2
  return -1;
}

// console.log(findNextSquare(121))
// console.log(findNextSquare(114));// console.log(findNextSquare(114));

// In other words: Replace the number in the array with the number corresponding to what its index+1 would be if the array was sorted in the descending order
// Input: array of random positive integers, no invalid input
// Output: array of positive integers
// Solution: 
// 1. Sort the input array in the descending order (this would be a new array named 'desc')
// 2. create a new empty array (named 'ranked') 
// 3. Iterate through the input array; for each value of the input, get its index in the desc array and push it into ranked
// 4. return ranked

// a)
// function rankings(arr){
//     let desc = arr.map((a)=>a).sort((a,b)=>a-b).reverse();
//     return arr.map(a=>desc.indexOf(a)+1) 
// }

// b) 30+% faster than a):
// function rankings(arr) {
//   let len = arr.length;
//   let desc = arr
//     .map((a) => a)
//     .sort((a, b) => a - b)
//     .reverse();
//   let ranked = [];
//   for (let i = 0; i < len; ++i) {
//     ranked.push(desc.indexOf(arr[i])+1);
//   }
//   return ranked;
// }

// c) 40+% faster than b):
function rankings(arr) {
  let len = arr.length;
  let arrCopy = [];
  for(let i=0; i<len; ++i){
    arrCopy.push(arr[i])
  }
  let desc = arrCopy
    .sort((a, b) => a - b)
    .reverse();
  let ranked = [];
  for (let i = 0; i < len; ++i) {
    ranked.push(desc.indexOf(arr[i]) + 1);
  }
  return ranked;
}

// interesting solution (the way positions of numbers were obtained without using extra space): https://www.codewars.com/kata/reviews/58e19f807bf60324f30002ca/groups/63c96e55424ee40001084a26

// console.log(rankings([10, 20, 40, 50, 30]));
// console.log(rankings([22, 33, 18, 9, 110, 4, 1, 88, 6, 50]));// console.log(rankings([22, 33, 18, 9, 110, 4, 1, 88, 6, 50]));
// Input: num: positive integer > 0, no invalid input
// Output: positive integer, sum of all integers in the range 1-num inclusive

// Solution:
// a) Using for loop to add numbers to sum - O(n) time complexity:

// function summation(num){
//     let sum = 1;
//     for(let i=2;i<=num;++i){
//         sum+=i;
//     }
//     return sum
// }


// Play around and find a rule that can get correct sum for any num..
// num * num/2 + num/2

// b) Using math - O(1) complexity:

function summation(num){
    return num/2*(num + 1)
}

//console.log(summation(2))//console.log(summation(2))
// Input: 1. points - array of 26 positive integers, each representing the number of points for letters A-Z in alphabetical order;
//        2. words - array of strings, uppercase; no invalid input, empty array, non-string values nor empty strings; may be actual words as well as strings of random alphabetical characters
// Output: shortest string worth the most points; if two strings are worth the same number of points, return the shorter one;
//          if there are two strings that carry max points and the same number of chars, return the one with the lower index number in the array;

// Solution:
// Before anything else, map every letter and the corresponding number of points into key-value pairs

// Pick a word to memoize first with its calculated value, then go to the next word and check if it's worth more points;
// if yes, replace the currently stored word with it (word being an array that stores [sumOfPoints, length, index] of the word)
// if no, check the remaining words
// if it's worth the same as the currently stored word, check its length
  // if it's longer than the currently stored word, check the remaining words
  // if it's shorter than the currently stored word of equal worth, replace the currently stored word with it

 let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let points = [
    1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10,
    10, 10,
  ];

function getBestWord(points, words){
 let len = points.length;
 let letterPts = {};
 for(let i=0; i<len; ++i){
  letterPts[alphabet.charAt(i)] = points[i]
 }
 let theBest = sumPts(words[0], 0);
 for(let i=1; i<words.length; ++i){
    let wordVal = sumPts(words[i], i);
    if (wordVal[0] > theBest[0]){
        theBest = wordVal
    } else if (wordVal[0] === theBest[0]){
        if (wordVal[1] < theBest[1]){
          theBest = wordVal;
        }
    }
 }
 return theBest[2];

 function sumPts(word, index){
    let len = word.length;
    let sum = 0;
    for(let i=0; i<len; ++i){
     sum+=letterPts[word.charAt(i)]
    }
    return [sum, len, index]
 }

}

// console.log(
//   getBestWord(points, [
//     "NOQ",
//     "TXAY",
//     "S",
//     "OM",
//     "ESFT",
//     "CJUKQ",
//     "QL",
//     "QO",
//     "ASTK",
//     "Y",
//   ])
// );

// 82. Create a function that generates n random strings of random length (2-l inclusive)
// Input:  1. n: number of strings to be generated, integer > 2,
//         2. l: max length of strings generated
// Output: array of random strings;

function genRandomStrArr(n, l) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let arr = [];
   for(let i=0; i<n; ++i){
    arr.push(randomStr())
   }
   return arr

   function randomStr(){
    let len = Math.random() * (l-1) + 2;
    let str = '';
     while(len>1){
      str+=alphabet.charAt(Math.random()*26);
      --len
     }
    return str;
   }
}

//console.log(genRandomStrArr(5, 7))