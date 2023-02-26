// 68. Calculate the recursive sum of all digits in a positive integer

// Input: positive integer, 1+ digits, no invalid input
// Output: one-digit positive integer
// Example: 128 --> 1+2+8 == 11 --> 1+1 == 2

// Solution I - Recursive approach:

// function digitalRoot(n: number): number {
//   let str = n.toString()
//   let len = str.length;
//   let sum = 0;
//   while (--len + 1) {
//     sum += Number(str.charAt(len));
//   }
//   if (sum >= 10) return digitalRoot(sum);
//   return sum;
// }

// Solution II - Iterative approach;

// function digitalRoot(n: number): number {
//   let arr = n.toString().split("").map(e=>Number(e));
//   let sum = arr.reduce((a,b) => (a+b));
//   while (sum >= 10) {
//     arr = sum
//       .toString()
//       .split("")
//       .map((e) => Number(e));
//     sum = arr.reduce((a, b) => a + b);
//   }
//   return sum;
// }

// Solution III - Iterative approach without converting to array and built-in array methods;

// function digitalRoot(n: number): number {
//   let str: string = `${n}`;
//   let len = str.length;
//   let sum: number = 0;
//   for(let i=0; i<len; ++i){
//    sum+=Number(str.charAt(i))
//   }
//   while(sum >= 10){
//     str = `${sum}`;
//     len = str.length;
//     sum = 0;
//     for (let i = 0; i < len; ++i) {
//       sum += Number(str.charAt(i));
//     }
//   }
//   return sum;
// }

// Solution IV - Iterative approach without any type conversion:
// * starts as the fastest, slows down as the input value goes up

function digitalRoot(n: number): number {
  let num = n;
  let sum = num;
  while(sum>=10){
    sum=0;
    while(num){
      sum+=num%10;
      num = Math.trunc(num/10);
    }
    num = sum
  }
  return sum;
}

//console.log(digitalRoot(345));

// https://mathworld.wolfram.com/DigitalRoot.html

// 69. Given a string, return another string that replaces every single-time-occurring (in the input string) char 
// with "(" and multiple-times-occurring chars with ")"

// Input: string, may contain any character, including empty spaces and round brackets; no invalid input;
// Output: a string of round brackets;
// Example: "keech" --> "())(("

// Solution 1: - create a newStr (empty); compare every char with every remaining char; 
//if at least one match is found, concat ')' to the newStr; if no matches are found, concat '('

// Solution 2: - create a newStr (empty); create a cache {obj};
// for each char check if it's in cache; if not add it to cache; if yes


// function duplicateEncode(str) {
//  let arr = str.split(""); // adds space complexity
//  let len = arr.length;
//  let cache = {}; // adds space complexity
//  let newStr = '';
//  for (let i=0; i<len; ++i) cache[arr[i]] ? cache[arr[i]]=')' : cache[arr[i]]='(';
//  for (let i = 0; i < len; ++i) newStr+=cache[arr[i]]
//  return newStr;
// }


function duplicateEncode(str: string): string{
    interface Temp {
    [key: string]: number[]
    }
    let len = str.length;
    let arr = str.toLowerCase().split('');
    let cache: Temp = {};
    let newArr: string[] = [];
    for (let i=0; i< len; ++i){
        let letter: string = arr[i];
        if (cache[letter]) {
        cache[letter] = [...cache[letter], i];
        newArr.push(')');
        let j = cache[letter][0];
        newArr[j] = ')'
        } else {
            cache[letter] = [i];
            newArr.push('(')
        }
    }
    return newArr.join('')
}

//console.log(duplicateEncode('keecheerrrf 2r4 5%'))

// 71. Reorder an array so that, ex: [1,2,3,4,5,6] becomes [1,6,2,5,3,4]; [1,2,3,4,5] --> [1,5,2,4,3]

// Input: array, no invalid input;
// Output: array reordered;

// Solution: 
// This works for both odd and even length arrays:

// function reorder(arr: number[]): number[] {
//     let len = arr.length;
//      let newArr = [...arr]
//       for(let i=1; i<len-1; i+=2){
//         newArr.splice(i,0,newArr[len-1]);
//         newArr.pop()
//       }
//    return newArr 
// }

// function reorderEven(arr: number[]): number[] | string {
//     let len = arr.length;
//     if (len%2!==0){
//         return 'array length not even'
//      } else {
//     let newArr = [];
//     for (let i=0; i<len/2; ++i){
//         newArr.push(arr[i], arr[len-i-1])
//     }
//      return newArr
//     }
// }

// Since we can see that in this type of reordering, in case arr.length is even
// the two elements in the middle of the input arr i.e
// at the end of the output arr stay in the same order, we can loop less times and just add them at the end
// which makes the program run consistently faster

function reorderEven(arr: number[]): number[] | string {
  let len = arr.length;
  if (len % 2 !== 0) {
    return "array length not even";
  } else {
    let mid = len/2-1;
    let newArr = [];
    for (let i = 0; i < mid; ++i) {
      newArr.push(arr[i], arr[len - i - 1]);
    }
    newArr.push(arr[mid], arr[mid+1])
    return newArr;
  }
}

// In case of arr.length being odd, we can do the similar thing: loop mid times and push the mid element at the end

function reorderOdd(arr: number[]): number[] | string {
    let len = arr.length;
    if(len % 2 === 0){
        return "array not odd"
    } else {
        let mid = Math.floor(len/2);
        let newArr = [];
        for (let i = 0; i < mid; ++i) {
          newArr.push(arr[i], arr[len - i - 1]);
        }
        newArr.push(arr[mid])
        return newArr
    }
}

// console.log(reorderEven([1,2,3,4,5,6,7,8,9]))
// console.log(reorderEven([1, 2, 3, 4, 5, 6, 7, 8]));

// 72. Reverse the order of letters in words
// a word is a string of contiguous non-empty characters

// Input: a string consisting of contiguous non-empty characters and a number of empty chars
// Output: a string consisting of contiguous non-empty characters in reverse order relative to the input and a number of empty chars

// Solution: 
// 1) split the string by a single empty space
//  - this will return strings of non empty characters as well as empty characters if any length of adjacent empty chars 
//    happens to exceed 1
// 2) loop through the array and reverse each string by splitting it into an array first
//   - this will reverse the order of chars leaving the strings consisting of empty chars in essentially unaltered condition
//   - join the array by a single empty space and put it in the place of the existing string (a[i])
// 3) after looping is over, join the array by a single empty char


function reverseWords(str: string): string{
 let arr = str.split(' ');
 let len = arr.length;
 for (let i = 0; i<len; ++i){
  arr[i]=arr[i].split('').reverse().join('') 
 }
 return arr.join(' ')
}

// The above solution runs 3 functions per array element i.e. goes over every string in the array 3 times (at least). Eek!

// Solution 2:
// 1) initiate a variable word as an empty string
//  - it will temporarily store word (non-empty char) substrings
// 2) initiate a variable reversed as an empty string
// 3) looping through the input string characters from backwards, concatenate every non-empty char 
// with the word variable 
// 4) every time you reach an empty char, do " " + word + reverse concatenation and 
// make sure to assign '' to word in case there are multiple contiguous empty chars to consider
// 5) since the while loop ends at the time the last word is reversed but before it's concatenated,
// make sure it's concatenated with reversed before it's returned


function reverseWords2(str: string): string {
    let len = str.length;
    let word = '';
    let reversed = '';
    while(--len+1){   
        let char = str.charAt(len);
        if(char !== " "){
            word+=char;
        } 
        if (char === " "){
            reversed = " " + word + reversed;
            word = ''
        }
    }
    return word + reversed
}

//console.log(reverseWords2('ab cd'))

// 73. Count the number of characters that occur more than once

// Input: string containing numeric and alphabetic (both cases) characters; no invalid input
// Output: integer
// Example: 'Invincible334' --> 3 (3 times i/I, n twice, 3 twice)

// Solution:

// create an object to store the key:val pairs of chars and their counts
// loop through the input str and +1 a char every time it occurs 
// get object entries
// loop through the entries to count the number of vals >= 2

// function duplicateCount(str: string): number {
//     interface Obj {
//         [key: string]: number
//     }
//  let len = str.length;   
//  let obj: Obj = {};
//  let count = 0;
//  while(--len+1){
//     let char = str.charAt(len).toLowerCase();
//     obj[char] = obj[char]+1 || 1
//  }
//  let vals = Object.values(obj);
//  len = vals.length;
//  while(--len+1){
//     if (vals[len] > 1) ++count
//  }
//  return count
// }

// Solution 2:
// Since we only care if a character appears once or more than once and not about which character it is
// nor how many times exactly it appears in the string, we can:
// 1) initialize an array that will store unique characters of the string
// 2) loop through the chars, check if a char is present in the array
// 3) if yes. increment count by one and replace char with `+char`
// 4) if `+char` is present, do nothing (this prevents counting one repeated char multiple times)
// 5) if the char nor `+char` are present, push the char into the array
// 6) return count

function duplicateCount(str: string): number{
    let vals: string[] = [];
    let count = 0;
    let len = str.length;
    while (--len+1){
        let char = str.charAt(len).toLowerCase();
       if(vals.includes(char)){
        ++count;
        vals[vals.indexOf(char)] = `+${char}`
       }else if(vals.includes(`+${char}`)){
        null
       } else {
        vals.push(char)
       }
    }
   return count
}

// console.log(duplicateCount('Invincible334'))
// console.log(duplicateCount("aaaaaaaaaaaaab"));


// 74. https://www.codewars.com/kata/59302a6af1c4f0a8fe0000a6/train/javascript

// Input: 1. one array, may be empty or containing arrays of integers of various lengths
//        2. an optional callback that takes in at least one argument of type number
// Output: integer 

// Solution: 
// If an empty array is passed as an argument, return 0;
// If there's no callback argument, simply calculate the sum of all values in all input arrays (passed as number[][]);
// If there is a callback argument:
//   1. Using a helper function (getLargestArrayLength) get the length of the largest array (L) 
//   2. Using another helper (getArrayOfElsWithIndex) create as many arrays containing elements with the same index (y, where 0 <= y < L) from every input array (arr[i] where 0 <= i < arr.length)
//   example of one such array: [arr[i][y], arr[i+1][y],...arr[arr.length-1][y]]
//   - since for the purpose of the challenge all of the said arrays need to be the same length, "even out" their lengths by pushing zeros 
//   3. Loop L times running the input callback function with the parameters returned from running getArrayOfElsWithIndex
//    - each time add the value returned by the callback to the sum;
//   4. return the sum
function sum(args: number[][] | [], callB?: (...nums: number[]) => number) {
  if(args.length===0) return 0
  let len = args.length;
   // get the length of the input array i.e. the number of arrays within it
  let arr = [...args];
  let sum = 0;
  if(!callB){
    let a: any[] = [];
    for(let i=0; i<len; ++i){
      a = [...a, ...args[i]]
    }
    sum = a.reduce((x,y)=>x+y)
  } else {
    // get the length of the largest array-parameter:
    function getLargestArrayLength(): number {
      let L = 0;
      for (let i = 0; i < len; ++i) {
        if (args[i].length > L) L = args[i].length;
      }
      return L;
    }
    let largestArr = getLargestArrayLength();
    // the helper function right below will return a new array composed out of elements 
    // from each input array with the index 'num' 
    // (or 0 as a filler if an element with a certain index doesn't exist in the array):
    function getArrayOfElsWithIndex(num: number): number[] {
      let a = [];
      for (let i = 0; i < len; ++i) {
        a.push(arr[i][num] || 0);
      }
      return a;
    }
    // this loop will create j arrays using the helper f(), pass all elements from each of them to the callback and add the result to the sum
    for (let j = 0; j < largestArr; ++j) {
      sum += callB(...getArrayOfElsWithIndex(j));
    }
  }
  return sum;
}

// console.log(sum([[3, 3, 3],[4, 5]], (a, b) => a * b))
// console.log(sum([[1,2],[3]]))
// console.log(sum([]))


// 75. Convert Roman to Integer
// Input: a string containing of uppercase alphabetical characters always representing a valid Roman number 1-3999
// Output: an integer

// Solution:
// 1. create a chart of individual letters and their integer values
// 2. create an array out of the input string chars
// 3. replace the chars in the array with the corresponding integers using the chart
//   -- keeping the "composite" numbers like IV, XL, CD in mind, check if char[i] makes a "composite" with char[i+1]
//    - if yes, replace the char with its negative integer value
//    - if no, replace it with its positive integer value
// 4. calculate the sum of the integers in the array and return it  

function romanToInt(inp: string): number{
  interface Chart { [key: string]: number }
  const rom: Chart = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let chars: any[] = [...inp];
  let len = chars.length;
  for(let i=0; i<len; ++i){
      let curr = chars[i];
      let next = chars[i+1];
    if (
      (curr === "I" && next === "V") ||
      (curr === "I" && next === "X") ||
      (curr === "X" && next === "L") ||
      (curr === "X" && next === "C") ||
      (curr === "C" && next === "D") ||
      (curr === "C" && next === "M")
    ) {
      chars[i] = -rom[curr];
    } else {
      chars[i] = rom[curr];
    }   
    
  }
  return chars.reduce((a,b)=>a+b)
}

// console.log(romanToInt("MCM")) 
// console.log(romanToInt("XXIV")) 
// console.log(romanToInt("CXL")) 
// console.log(romanToInt("XC"))
// console.log(romanToInt("MCDIX")) 