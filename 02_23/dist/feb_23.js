"use strict";
// 77: https://leetcode.com/problems/add-two-numbers/
// The array way..
// Input: two arrays of non-negative integers
// Output: an array of non-negative integers, representing the sum of input linked lists
// Example: l1 = [2,4,3], l2 = [5,6,4]; should return [7,0,8] because 342 + 465 = 807
function addTwoNumArr(l1, l2) {
    let num1 = Number(l1.reverse().join(''));
    let num2 = Number(l2.reverse().join(""));
    return `${num1 + num2}`.split('').map(n => Number(n)).reverse();
}
//console.log(addTwoNumArr([2, 4, 3], [5, 6, 4]));
// 78. https://www.codewars.com/kata/56269eb78ad2e4ced1000013
// Input: sq, integer, no invalid input
// Output: -1 or integer: pow(sqrt(sq)+1)
// Example: sq = 121 --> sqrt(121) --> 11 + 1 -->  Output: 12**2 -->144
// Solution:
// Check if sqrt(sq) is an integer
// if no, return -1
// if yes, return pow(sqrt(sq)+1)
function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq);
    let diff = sqrt - Math.floor(sqrt);
    if (!diff)
        return Math.pow((sqrt + 1), 2);
    return -1;
}
// console.log(findNextSquare(121))
// console.log(findNextSquare(114));
// 79. https://www.codewars.com/kata/58e16de3a312d34d000000bd/train/javascript
// In other words: Replace the number in the array with the number corresponding to what its index+1 would be if the array was sorted in the descending order
// Input: array of random positive integers, no invalid input
// Output: array of positive integers
// Solution: 
// 1. Sort the input array in the descending order (this would be a new array named 'desc')
// 2. create a new empty array (named 'ranked') 
// 3. Iterate through the input array; for each value of the input, get its index in the desc array and push it into ranked
// 4. return ranked
// a)
// function rankings(arr: number[]): number[]{
//     let desc = arr.map((a)=>a).sort((a,b)=>a-b).reverse();
//     return arr.map(a=>desc.indexOf(a)+1) 
// }
// b)
// function rankings(arr: number[]): number[] {
//   let len: number = arr.length;
//   let desc: number[] = arr
//     .map((a) => a)
//     .sort((a, b) => a - b)
//     .reverse();
//   let ranked: number[] = [];
//   for (let i = 0; i < len; ++i) {
//     ranked.push(desc.indexOf(arr[i])+1);
//   }
//   return ranked;
// }
// c) 
function rankings(arr) {
    let len = arr.length;
    let arrCopy = [];
    for (let i = 0; i < len; ++i) {
        arrCopy.push(arr[i]);
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
// console.log(rankings([10, 20, 40, 50, 30]));
// console.log(rankings([22, 33, 18, 9, 110, 4, 1, 88, 6, 50]));
// 80. https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
// Input: num: positive integer > 0, no invalid input
// Output: positive integer, sum of all integers in the range 1-num inclusive
// Solution:
// a) Using for loop to add numbers to sum - O(n) time complexity:
// function summation(num: number): number{
//     let sum = 1;
//     for(let i=2;i<=num;++i){
//         sum+=i;
//     }
//     return sum
// }
// Play around and find a rule that can get correct sum for any num..
// num * num/2 + num/2
// b) Using math - O(1) complexity:
function summation(num) {
    return num / 2 * (num + 1);
}
//console.log(summation(2))
// 81. https://www.codewars.com/kata/563f960e3c73813942000015/train/javascript
// Input: 1. points - array of 26 positive integers, each representing the number of points for letters A-Z in alphabetical order;
//        2. words - array of strings, uppercase; no invalid input, empty array, non-string values nor empty strings; may be actual words as well as strings of random alphabetical characters
// Output: positive integer - index of the shortest string worth the most points; if two strings are worth the same number of points, return the shorter one;
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
function getBestWord(points, words) {
    let len = points.length;
    let letterPts = {};
    for (let i = 0; i < len; ++i) {
        letterPts[alphabet.charAt(i)] = points[i];
    }
    let theBest = sumPts(words[0], 0);
    for (let i = 1; i < words.length; ++i) {
        let wordVal = sumPts(words[i], i);
        if (wordVal[0] > theBest[0]) {
            theBest = wordVal;
        }
        else if (wordVal[0] === theBest[0]) {
            if (wordVal[1] < theBest[1]) {
                theBest = wordVal;
            }
        }
    }
    return theBest[2];
    function sumPts(word, index) {
        let len = word.length;
        let sum = 0;
        for (let i = 0; i < len; ++i) {
            sum += letterPts[word.charAt(i)];
        }
        return [sum, len, index];
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
    for (let i = 0; i < n; ++i) {
        arr.push(randomStr());
    }
    return arr;
    function randomStr() {
        let len = Math.random() * (l - 1) + 2;
        let str = '';
        while (len > 1) {
            str += alphabet.charAt(Math.random() * 26);
            --len;
        }
        return str;
    }
}
//console.log(genRandomStrArr(5, 7))
// 83. https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript
// Input: unsorted array of integers, positive and negative; may be of any length including 0;
// Output: integer, sum of the differences of every n[i] and n[i+1] where i = 0 -- arr.length-1 exclusive
// Solution: 1. sort the array in the descending order;
//           2. initiate a variable sum to the value 0;
//           3. iterate through the array, take each number (except the last one) and the one after that
//              - calculate the difference an add it to sum
//           4. return sum
// function sumOfDifferences(arr: number[]): number {
// if(arr.length<2) return 0;
//  let l = arr.length-1;
//  let arrCopy = Array(...arr).sort((a,b)=> -a+b);
//  let sum = 0;
//   for(let i=0; i<l; ++i){
//    sum += arrCopy[i] - arrCopy[i+1];
//   }
//  return sum
// }
// Or, with a bit of math..
// In a sorted array [A,B,C] where a is the highest value, we can observe that the sum of the differences is A-B+B-C
// or simply A-C
function sumOfDifferences(arr) {
    if (arr.length < 2)
        return 0;
    return Math.max(...arr) - Math.min(...arr);
}
//console.log(sumOfDifferences([1, 2, -10, 22, 12]))
// 84. https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/javascript
// Input: x, y : integers from 1 to very large, no invalid input
// Output: gcd : greatest common divsor
// Solution I:
// 0. ANY SOLUTION: Absolute values of input integers must be used to avoid incorrect results when an input value is negative
// 1. The gcd can be as large as the lesser of |x| and |y|, so first assume that's the common divisor
// 2. then decrement the gcd by one as long as x%gcd or y%gcd have a remainder
// 3. return gcd
// function mygcd(a: number, b: number): number {
//   let x = Math.abs(a);
//   let y = Math.abs(b);
//   let gcd = x > y ? x : y;
//    while(x%gcd || y%gcd) {
//     --gcd;
//    }
//   return gcd
// }
// Solution II:
// Taking into consideration that gcd of (|x|,|y|), where |x|>|y|, is also the gcd of (|x|, |y|, x%y),
// we could be moving towards the gcd value by re-running the function passing |y| (in place of |x|) and x%y (in place of |y|) as arguments..
// as long as x%y > 0. As the input values are being replaced by the remainders with every recursion, once x%y === 0, y is returned as the gcd;
// We have to make sure that the lower value is the divisor with every recursive function call (which takes care of itself after the initial destructuring assignment)
// function mygcd(a: number, b: number): number {
//   let x = Math.abs(a);
//   let y = Math.abs(b);
//   [x,y] = x > y ? [x, y] : [y, x]; // make sure x stores the greater value so that x%y makes sense
//   if (x%y) return mygcd(y, x%y)
//   return y
// }
// Solution III:
// Iterative version;
// Here we're overwriting input values with the remainders until one of them reaches the value of 0;
// Then, the other value is returned as the gcd;
function mygcd(a, b) {
    let [x, y] = [Math.abs(a), Math.abs(b)];
    if (y > x)
        [x] = [y]; // make sure x stores the greater value
    while (x !== 0 || y !== 0) {
        if (y === 0)
            return x;
        x %= y; // x being overwritten by x%y
        if (x === 0)
            return y;
        y %= x;
    }
    return 1;
}
// console.log(mygcd(60, -36),"______" );
// console.log(mygcd(43438, 610), "______");
// console.log(mygcd(1,3333), "______");
// 85. https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript
// Input: m: integer 1-12 inclusive, no invalid input
// Output: integer 1-4 inclusive
// Solution I:
// Quarters: | 1 2 3 | 4 5 6 | 7 8 9 | 10 11 12 |
// We could write a series of if statements to check which range the number is in:
// const quarterOf = (m: number): number => {
//   if(m < 4) return 1
//   if(m < 7) return 2
//   if (m < 10) return 3;
//   return 4
// };
// Solution II:
// How would you ask: "What quarter of 12 is m?" in Math ?
// x/4 * 12 = m --> 3*x = m --> x = m/3 , but --> x = ceil(m/3) because we need integers 1-4
const quarterOf = (m) => {
    return Math.ceil(m / 3);
};
//console.log(quarterOf(9))
// 86. Convert number to reversed array of digits
// Example: 54321 --> [1,2,3,4,5]
// Input: n: integer, positive, no invalid input;
// Output: array of integers of n in reversed order
// Solution I: 
// 1. convert the input to string and 
// 2. pick the chars one by one from the back, convert them to numbers and push them into the array
//   --chars can also be picked from the front and "unshifted" into the array
// 3. return the arr
//function digitize(num: number): number[] {
//   let str = n+"";
//   let len = str.length;
//   let arr = [];
//   while(--len+1){
//     arr.push(Number(str.charAt(len)))
//   }
//   return arr
// }
// Solution II:
// 1. divide the input (n) by 10 and push the remainder into the array
// 2. replace n with the value of n/10 only taking the digits on the left side of the decimal point
// 3. repeat until n === 0
// 4. return the array
function digitize(num) {
    if (num === 0)
        return [num];
    let n = num;
    let arr = [];
    while (n) {
        arr.push(n % 10);
        n = Math.trunc(n / 10);
    }
    return arr;
}
//console.log(digitize(54321))
