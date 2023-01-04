// 68. Calculate the recursive sum of all digits in a positive integer

// Input: positive integer, 1+ digits, no invalid input
// Output: one-digit positive integer
// Example: 128 --> 1+2+8 == 11 --> 1+1 == 2


function digitalRoot(n) {
  let arr = n.toString().split(''); 
  let len = arr.length;
  let sum = 0;
  while(--len+1){ 
   sum+=Number(arr[len]) 
  }
  if(sum>=10) return digitalRoot(sum)
  return sum
}

console.log(digitalRoot(345));

// https://mathworld.wolfram.com/DigitalRoot.html
