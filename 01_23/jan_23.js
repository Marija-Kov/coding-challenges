// 68. Calculate the recursive sum of all digits in a positive integer

// Input: positive integer, 1+ digits, no invalid input
// Output: one-digit positive integer
// Example: 128 --> 1+2+8 == 11 --> 1+1 == 2


function digitalRoot(n) {
  let strArr = n.toString().split('');
  let firstSum = 0;
  for (let i=0; i<strArr.length; ++i){
   firstSum+=Number(strArr[i])
  }
   function sumDigit(sum){
    let strArr = sum.toString().split("");
    let nextSum = 0;
      for (let i = 0; i < strArr.length; ++i) {
        nextSum += Number(strArr[i]);
      }
      if (nextSum.toString().split("").length > 2) return sumDigit(nextSum)
     return nextSum
   }
   
   return sumDigit(firstSum)
}

console.log(digitalRoot(128));
