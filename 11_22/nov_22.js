// 43. Build the Morse code decoder
// A morse code consists of dots and dashes to represent letters,
// single space to separate letters and triple space to separate words;
// letter case is ignored.
// Input: a string of dots, dashes, single and triple spaces; no invalid input;
// Output: a string of words and single spaces between words;

// Solution: 
// Morse code table is provided
// split the code by double empty space, this will return an array of Morse words
// each string can be split into a subarray of "letters" inside a word

const table = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L", 
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  "---...": ":",
  ".-...": "&",
  "...---...": "SOS",
  "-.-.--": "!",
  "": " "  // added this for the convenience of solving this challenge
};

function decodeMorse(code){
const words = code.trim().split("  ");
let letters = [];
let alphabetic = [];
const wordsLength = words.length;
for(let i=0; i<wordsLength; ++i){
    let word = words[i].split(" ");
    letters = [...letters, ...word];
}
const lettersLength = letters.length;
for(let i=0; i<lettersLength; ++i){
 alphabetic.push(table[letters[i]])
}
return alphabetic.join("")
}

// console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));

// 44. Find top 3 most frequently used words
// Words are strings containing letters(upper and/or lowercase) and apostrophes. Any other characters should be treated as whitespace.
// Input: String, containing alphabetic and non-alphabetic characters, upper and/or lowercase;
// May contain only non-letter characters, May be empty; No invalid input; 
// Output: array of 0-3 lowercase strings of letters and/or apostrophes; *does a standalone apostrophe count as a word?
// array sorted in a descending order of frequency of strings in input

  // Solution: get words that contain letters and maybe apostrophes: 
  // words that contain apostrophes inside 
  // words that are surrounded by apostrophes
  // words that have apostrophes at the beginning or end
  // words without apostrophes
  // letters with or without apostrophes (1 before or after the letter or 2 surrounding the letter);
  // we are only interested in the "hierarchy", not the numbers themselves
  // chances are that most words will appear only once and storing key:1 pairs for each of them might be unnecessary

function topThreeWords(text) {
if(text == false) return [];
  const arr = text.toLowerCase().match(new RegExp(/\w+\'\w+|'[a-z]+'|\w+[a-z']|['a-z]\w+|[a-z]/gi));
  if(!arr) return [];
  const len = arr.length;
  if (len === 1) return arr;
  const obj = {};
  const sorted = [];
  for(let i=0; i<len; ++i){
   obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }
 let words = Object.entries(obj);
 let wLength = words.length;
 while (sorted.length <= 3 && sorted.length < wLength) {
  let max = findMax(words)
   sorted.push(max[0]);
   words = shortenArr(words, max);  
 }
return sorted
}

function findMax(arr){
  if(arr.length === 1) return arr[0]
  let max = arr[0][1];
  let maxWord = arr[0];
  const len = arr.length;
  for(let i=1; i<len; ++i){
    if(arr[i][1] > max){
      max = arr[i][1];
      maxWord = arr[i];
    }
  }
  return maxWord
}

function shortenArr(arr, maxWord){
  let len = arr.length;
  let index = arr.indexOf(maxWord);
  arr[index] = arr[len - 1];
  arr.pop();
  return arr
}

// console.log(topThreeWords("a a c b b"));

// console.log(topThreeWords("  //wont won't won't "));


// 45. Battleship field validator
// Input: 2D array 10 x 10 size containing zeros and ones where ones represent battleships; no invalid input;
// Output: Boolean
// A battleship contains 1-4 horizontally OR vertically lined-up ones, exactly:
// 1 x 4 cells, 2 x 3 cells, 3 x 2 cells, 4 x 1 cell
// so 20 cells total must be filled
// the ships may not overlap or touch by the side or corner for the field or be a valid battlefield.
// * count the number of each sort of ship:


function validateBattlefield(field){
 const flat= flatten(field);
 return noShipsTouching(flat) && hasExactShips(flat)
}

// * hasExactShips probably covers for has20FilledCells
 function noShipsTouching(arr){
  for (let i = 10; i < 90; ++i) {
    if (
      arr[i] &&
      (arr[i - 9] ||
        arr[i - 11] ||
        arr[i + 9] ||
        arr[i + 11] ||
        (arr[i + 1] && arr[i - 10]) ||
        (arr[i - 1] && arr[i + 10]) ||
        (arr[i + 10] && arr[i + 1]) ||
        (arr[i - 10] && arr[i - 1]))
    ) {
      return false;
    }
  }
  return true;
 }

 function flatten(arr) {
  // return `${arr}.split(',') // a wee bit slower
   const len = arr.length;
   let flat = [];
   for (let i = 0; i < len; ++i) {
     flat = [...flat, ...arr[i]];
   }
   return flat;  
 }

//  function has20FilledCells(arr) {
//    let sum = 0;
//    for (let i = 0; i < 100; ++i) {
//      if (arr[i]) ++sum;
//    }
//    return sum === 20;
//  }

 function hasExactShips(arr) {
  // less code than hasExactShips1, but takes up more space for no speed improvement
   let ships = {};
   for (let i = 0; i < 100; ++i) {
     if (arr[i] && !arr[i - 1] && !arr[i - 10]) {
       if (!arr[i + 1] && !arr[i + 10]) {
         ships["1"] = ships["1"] + 1 || 1;
       }
       if ((arr[i + 1] && !arr[i + 2]) || (arr[i + 10] && !arr[i + 20])) {
         ships["11"] = ships["11"] + 1 || 1;
       }
       if (
         (arr[i + 1] && arr[i + 2] && !arr[i + 3]) ||
         (arr[i + 10] && arr[i + 20] && !arr[i + 30])
       ) {
         ships["111"] = ships["111"] + 1 || 1;
       }
       if (
         (arr[i + 1] && arr[i + 2] && arr[i + 3] && !arr[i + 4]) ||
         (arr[i + 10] && arr[i + 20] && arr[i + 30] && !arr[i + 4])
       ) {
         ships["1111"] = ships["1111"] + 1 || 1;
       }
     }
   }
   if (
     ships["1"] !== 4 ||
     ships["11"] !== 3 ||
     ships["111"] !== 2 ||
     ships["1111"] !== 1
   ) {
     return false;
   }
   return true;
 }
 // number of x-cell ship is Math.ceil(4/x)
//  function noShipsTouching1(field) {
//   for (let i = 1; i < 9; ++i) {
//     for (let j = 1; j < 9; ++j) {
//       if (
//         field[i][j] &&
//         (field[i - 1][j + 1] ||
//           field[i + 1][j + 1] ||
//           field[i - 1][j - 1] ||
//           field[i + 1][j - 1] ||
//           (field[i - 1][j] && field[i][j + 1]) ||
//           (field[i][j - 1] && field[i + 1][j]) ||
//           (field[i][j + 1] && field[i + 1][j]) ||
//           (field[i - 1][j] && field[i][j - 1]))
//       ) {
//         return false
//       }
//     }
//   }
//   return true
//  }
//  const flatTest = flatten([
//             [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//             [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//             [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//             [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//             [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//             [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//             [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//             [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//             [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//         ])

 function hasExactShips1(arr){
 let ships = 0;
 // count 1 cell ships
  for(let i=0; i<100; ++i){
    if (arr[i] && !arr[i - 1] && !arr[i - 10] && !arr[i + 1] && !arr[i + 10]) {
      ++ships;
    }
  }
  if(ships!==4) return false;
// count 2 cell ships
  ships = 0;
  for(let i=0; i<100; ++i){
    if (
      arr[i] &&
      !arr[i - 1] &&
      !arr[i - 10] &&
      ((arr[i + 1] && !arr[i + 2]) ||
       (arr[i + 10] && !arr[i + 20]))
    ) {
      ++ships;
    }
  }
  if(ships!==3) return false;
// count 3 cell ships
  ships = 0;
  for(let i=0; i<100; ++i){
  if (
      arr[i] &&
      !arr[i - 1] &&
      !arr[i - 10] &&
      ((arr[i + 1] && arr[i + 2] && !arr[i+3]) ||
       (arr[i + 10] && arr[i + 20] && !arr[i+30]))
    ){
      ++ships;
    }
  }
  if (ships !== 2) return false;
// count 4 cell ships
  ships = 0;
    for (let i = 0; i < 100; ++i) {
      if (
        arr[i] &&
        !arr[i - 1] &&
        !arr[i - 10] &&
        ((arr[i + 1] && arr[i + 2] && arr[i + 3] && !arr[i + 4]) ||
          (arr[i + 10] && arr[i + 20] && arr[i + 30] && !arr[i+4]))
      ) {
        ++ships;
      }
    }
    if (ships !== 1) return false;
    return true
    
 }

// console.log(
//   validateBattlefield([
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],

//     [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],

//     [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],

//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],

//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],

//     [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],

//     [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],

//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],

//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

//     [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
//   ]) // false
// );


// 46. Find ranges of consecutive numbers (current == previous+1) 
// Input: array of integers sorted in ascending order
// Output: ranges of consecutive numbers, any type

function getConsecutiveDigits(arr){
  const len = arr.length;
  const obj ={};
function getRange(start) {
  let range = [arr[start]];
  let j = 1;
    while (arr[start] + j === arr[start + j]) {
      range.push(arr[start + j]);
      ++j;
      }
      if (range.length >= 3) {
        obj[`range${arr[start]}-${arr[start+j-1]}`] = range;
      }
      let newStart = start+j;
    if(newStart<len){
      return getRange(newStart)
    }

 return obj
}
return getRange(0)
}
//console.log(getConsecutiveDigits([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))

// 46.1 : Return an array where ranges of consecutive numbers are replaced with their representation, ex: 1,2,3,4 --> "1-4"

function arrRange(arr) {
  const len = arr.length;
  const newArr = [...arr];
  function getRange(start) {
    let range = [arr[start]];
    let j = 1;
    while (arr[start] + j === arr[start + j]) {
      range.push(arr[start + j]);
      ++j;
    }
    if (range.length >= 3) {
      newArr.splice(newArr.indexOf(arr[start]), j, `${arr[start]}-${arr[start+j-1]}`)
      console.log(newArr)
    }
    let newStart = start + j;
    if (newStart < len) {
      return getRange(newStart);
    }

    return newArr.join(",");
  }
  return getRange(0);
}

// console.log(
//   arrRange([
//     -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20
//   ])
// );

// 47. valid parentheses
// Check if every opening is paired with a closing parens in the string
// Input: string of parentheses only (or an empty string), length 0-100 inclusive, no invalid input;
// Output: boolean

//Solution: 
// Keep extracting and removing '()' substring out of the input string (or its clone, depending on the needs of the program)
// as long as the peripheral parentheses enclose the rest; 
//if there are no chars left in the string at the end of the loop, return true

function validParentheses(p) {
  let parens = p;
  while (
     parens.length > 1 && // this prevents the infinite loop
     parens.charAt(0) !== ")" && parens.charAt(parens.length - 1) !== "("
   ) {
     parens = parens.split("()").join("");
   }
   return Boolean(!parens)
}

// console.log(validParentheses("(())(())"));
// console.log(validParentheses("(())((()()())"));
// console.log(validParentheses("))))(((("));

// Max-sum subarray refactored
// Input: unsorted array of integers (arr) (positive and negative); array.length >= 0
// Output: an integer that equals the sum of consecutive input array array elements
// if input array consists of only negative integers, return 0

// function maxSequence(arr){
//   let len = arr.length;
// 	let currMax = arr[0];
//   let globalMax = currMax;
  
//   for (let i = 1; i < len; ++i) {
//     currMax = Math.max(arr[i], currMax + arr[i]);

//     if (currMax > globalMax) {
//       globalMax = currMax;
//     }
//   }

//   return globalMax;
// }

function maxSequence(arr){
  let len = arr.length;
  let maxVals = [];
  let currMax = -Infinity;
  let sequence;
  let sum;
  for(let i=0; i<len; ++i){
    sequence = arr.slice(i, len);
    sum = sequence.reduce((a,b)=>a+b,0);
    if(sum > currMax){
      currMax = sum
    }
  }
  console.log(currMax)
  maxVals.push(currMax);
  for(let i=0; i<len; ++i){
    sequence = arr.slice(0, len-i);
    sum = sequence.reduce((a,b)=>a+b,0);
    if(sum > currMax){
      currMax = sum
    }
  }
  console.log(len)
  console.log(currMax);
  const mid = Math.floor(len/2);
    for (let i = 0; i < mid; ++i) {
      sequence = arr.slice(i, len - i);
      sum = sequence.reduce((a, b) => a + b, 0);
      if (sum > currMax) {
        currMax = sum;
      }
    }

    return currMax
}

//console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

console.log(
  maxSequence([
    -38, 30, 24, -4, -6, 20, 46, 50, 20, -43, -37, 4, 33, -3, 46, -41, 1, -1,
    -26, -28, -47, -4, 4, -47, 36, -9, 49, -44, 3, -45, -48, 0, -28, 12, 13, 49,
    -12, 6, -36, 9, -4, -30, -22, -22, 20, 19, 46, 49, 10, 13, -38, 4, 49, 24,
    -31, -21, -23, 2, -12, -25, -33, -15, 23, 44, -47, -23, 1, -41, -7,
  ]) // 196
);

