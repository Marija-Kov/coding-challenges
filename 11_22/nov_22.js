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

// const table = {
//   ".-": "A",
//   "-...": "B",
//   "-.-.": "C",
//   "-..": "D",
//   ".": "E",
//   "..-.": "F",
//   "--.": "G",
//   "....": "H",
//   "..": "I",
//   ".---": "J",
//   "-.-": "K",
//   ".-..": "L", 
//   "--": "M",
//   "-.": "N",
//   "---": "O",
//   ".--.": "P",
//   "--.-": "Q",
//   ".-.": "R",
//   "...": "S",
//   "-": "T",
//   "..-": "U",
//   "...-": "V",
//   ".--": "W",
//   "-..-": "X",
//   "-.--": "Y",
//   "--..": "Z",
//   ".----": "1",
//   "..---": "2",
//   "...--": "3",
//   "....-": "4",
//   ".....": "5",
//   "-....": "6",
//   "--...": "7",
//   "---..": "8",
//   "----.": "9",
//   "-----": "0",
//   ".-.-.-": ".",
//   "--..--": ",",
//   "..--..": "?",
//   "---...": ":",
//   ".-...": "&",
//   "...---...": "SOS",
//   "-.-.--": "!",
//   "": " "  // added this for the convenience of solving this challenge
// };

// function decodeMorse(code){
// const words = code.trim().split("  ");
// let letters = [];
// let alphabetic = [];
// const wordsLength = words.length;
// for(let i=0; i<wordsLength; ++i){
//     let word = words[i].split(" ");
//     letters = [...letters, ...word];
// }
// const lettersLength = letters.length;
// for(let i=0; i<lettersLength; ++i){
//  alphabetic.push(table[letters[i]])
// }
// return alphabetic.join("")
// }

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

console.log(topThreeWords("a a c b b"));

console.log(topThreeWords("  //wont won't won't "));

