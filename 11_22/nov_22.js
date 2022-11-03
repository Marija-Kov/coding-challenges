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

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
