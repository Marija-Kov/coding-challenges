// 77: https://leetcode.com/problems/add-two-numbers/

// Task: add 2 numbers and return as a linked list
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

