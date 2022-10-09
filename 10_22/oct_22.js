// 29. Mask all but last 4 characters
// Input: string; may be any length (including zero), all valid;
// Output: string; all input string characters but last 4 replaced with a hashtag

// function maskify(cc) {
//   let arr = [...cc];
//   let len = arr.length-4;
//   for (let i=0; i<len; ++i){
//       arr[i] = '#'
//   }
//   return arr.join('')
// }

// console.log(maskify('4556364607935616'));

// 30. Get the middle character(s)
// Input: string; alphabetical; any case; any length; all valid;
// Output: 1 or 2 consecutive characters in the middle of input; 
          // string; alphabetical; any case; 
          // length: 2 if input length is even. 1 if input length is odd;


// function getMiddle(str){
//   const len = str.length;
//   let mid;
//   if (len % 2 === 0){
//    mid = str.slice(len/2-1, len/2+1)   
//   }else{
//    mid = str.slice(Math.floor(len/2), len/2+1)
//   }
//   return mid
// }

// console.log(getMiddle('test'));
// console.log(getMiddle('testyes'));

//31. Find the highest scoring word (substring) in the string. Every letter in a word has the score of its order number in the alphabet.
// If there are 2 same value words in the string, return the first-occurring one.
// Input: string; alphabetical; at least one empty char; lowercase only; always valid;
// Output: string; alphabetical; no empty spaces; included in input;

// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// function high(str){
//     const words = str.split(' ')
//     let max = [''];
//     let maxSum = 0;
//     const len = words.length;
//     for (let i=0; i<len; ++i){
//         let word = words[i];
//         let sum = [...word]
//                     .map(e => alphabet.indexOf(e)+1)
//                     .reduce((a,b) => a+b, 0)
//         if(sum>maxSum){
//             max[0] = word;
//             maxSum = sum;
//             console.log(max, maxSum)
//         } 
//     }
//    return max[0]
// }

// console.log(high('aa b'))
//console.log(high('what time are we climbing up the volcano'))