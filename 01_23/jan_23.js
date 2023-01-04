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

function duplicateEncode(str){
    let len = str.length;
    let arr = str.toLowerCase().split('');
    let cache = {};
    let newArr = [];
    for (let i=0; i< len; ++i){
        let letter = arr[i];
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



console.log(duplicateEncode('keecheerrrf 2r4 5%'))

