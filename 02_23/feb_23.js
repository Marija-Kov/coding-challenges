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
// console.log(rankings([22, 33, 18, 9, 110, 4, 1, 88, 6, 50]));