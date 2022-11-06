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
  const arr = text.toLowerCase().match(new RegExp(/\w+\'\w+|'[a-z]+'|\w'|\w+[a-z']|['a-z]\w+|[a-z]/gi));
  const len = arr.length;
  const stats = {};
  let top3 = [];
  for(let i=0; i<len; ++i){
   if(stats[arr[i]]){
     ++stats[arr[i]];
     if (stats[arr[i]] > stats[top3[0]] || top3[0] == null){
      top3.unshift(arr[i]);
     }
     if(top3.length > 3){
      top3.pop()
     }    
   }else{
    stats[arr[i]] = 1;
    top3.push(arr[i]);
    if (top3.length > 3) {
      top3.pop();
    } 
   }  
 }
  return top3
}

console.log(topThreeWords(`In a village of of a lance
in the a lean hack, and a for.`))



