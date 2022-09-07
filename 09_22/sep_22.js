//19. Detect a pangram
// return true or false depending on whether the word includes all letters(case-insensitive) of the alphabet

// I will probably create an alphabet array
// then, I will take the input string and convert it to lowercase and an array
// I will filter out any non-alphabetical chars
// which means I could also create a set out of the lowercased input string, then spread it into an array and then filter out non-alphabetical chars
// Now that I have an arr of lowercase unique alphabetical chars from the input string
// I can loop through the alphabet and check if the arr includes all of the elements from the alphabet
// if at least one letter from the alphabet is not in the arr, the isPangram returns false
// this means that the function can return false at the first alphabet letter that's not found in the arr 
// otherwise, the function returns true

// function isPangram(string){
// const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// let chars = new Set(string.toLowerCase());
// let arr = [...chars].filter(e => alphabet.includes(e));
// for(let i = 0; i<alphabet.length; ++i){
//     if (!arr.includes(alphabet[i])){
//         return false
//     }
// }
// return true
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog."))
// console.log(isPangram("This is not a pangram."))

//20. Calculate max product of n numbers from the array of unordered numbers

//a) Brute force approach: multiply every possible combination of n numbers and then compare them all until you find the max 
//b) Find n largest numbers in the array and multiply them
// *If n is an even number and if every arr number is a negative integer,
//..the algorithm should be looking for the max absolute value

// function maxProduct(input, n){
//     let val;
//     let product;
//     if(input.every(e => e < 0) && n%2 === 0){
//       val = Math.min(...input);
//       product = val;
//     for(let i = 1; i < n; ++i){
//      input[input.indexOf(val)] = input[input.length-1];
//      input.pop();
//      val = Math.min(...input);
//      product *= val;
//     }
// }else{
//      val = Math.max(...input);
//      product = val;
//    for(let i = 1; i < n; ++i){
//      input[input.indexOf(val)] = input[input.length-1];
//      input.pop();
//      val = Math.max(...input);
//      product *= val;
//   }
//  }
//  return product
// }

// console.log(maxProduct([2,4,8,1,6], 2))
// console.log(maxProduct([-2,-4,-7,-1,-5], 2))

// 21. Calculate max profit - input: array of stock prices in chronological order
// you have to buy before you sell!

//1) Find minimum price 
//2) Look for maximum price from one spot after the min price
//3) subtract max from min
//4) store it in a variable named profit
//
// repeat: 1), 2), 3)
//5) if the new value is greater than current profit, profit=greater value

// function maxProfit(prices) {
//      let min;
//      let profit = 0;
//      let indexMin;
// for (let j = 0; j < prices.length; ++j){
//     min = Math.min(...prices);
//     indexMin = prices.indexOf(min);
//     let p = Math.max(...prices.slice(indexMin)) - min;
//     if(profit < p) {
//         profit = p
//     }
//     prices.splice(indexMin, indexMin+1); 
//    }
//    return profit
// }

// console.log(maxProfit([11,7,10,70,100,8,9,2,3]))

// 22. Reverse array

// function reverseArr(arr){
//     const len = arr.length;
//     let temp;
// for (let i=0; i<Math.floor(len/2); ++i){
//   temp = arr[i];
//   arr[i] = arr[len-1-i];
//   arr[len-1-i] = temp;
// }
// return arr
// }

// console.log(reverseArr([1,2,3,4,5,6,7,8,9]))

// 23. "Same"
// the function takes in arrays 'a' and 'b' to be compared
// if every element of the array 'a' maps into its squared value in the array 'b',
//..and the arrays are the same length, the function returns true
// in any other case it returns false
// if one of the arrays is null, returns false
// one of the arrays may be empty or contain empty objects
//*'b' can include squared values of every 'a' element but not have the right length
//* 'b' can include squared values of every 'a' element but not have an instance of a squared value for every instance of the root value in 'a'

// function comp(array1, array2){
//   if (array1 == null || array2 == null){
//       return false
//    } else if (array1.every(e=> array2.includes(e**2) && count(e, array1) === count(e**2, array2))){
//       return true
//    } else {
//       return false
//    }
// }

// function count(num, arr){
//  let c = 0;
//  let len = arr.length;
//  for(let i = 0; i < len; ++i){
//   if (arr[i]===num){
//       ++c
//   }
//  }
//  return c
// }

// 24. Merge two sorted arrays 
// Both input arrays may contain only numbers sorted in ascending order
// They may or may not be the same length
// Any array may be any length, including 0

// Solution 1:
// function mergeTwo(arr1, arr2){
//     return[...arr1, ...arr2].sort()
// }

// Solution 2:
// function mergeTwo(arr1, arr2){
//     let len;
//     let long; 
//     let short; // The sorting will happen to the length of the shorter array. The rest of the long array can just be iterated through and pushed into the array of sorted numbers.
//      if(arr1.length > arr2.length){
//        short = arr2;
//        len = arr2.length;
//        long = arr1; 
//       } else {
//          short = arr1;
//          len = arr1.length;
//          long = arr2;
//       }
//      if (len === 0) return long;
//      if (len === 1){
//       for(let i = 0; i < long.length; ++i){
//         if (short[0] < long[i]){
//             long.splice(i, 0, short[0])
//             return long
//         } 
//       }
//      } 
// // If both arrays are longer than 1 element..
// let merged = arr1[0]<arr2[0] ? [arr1[0], arr2[0]] : [arr2[0], arr1[0]]; // initialize array merged with first members of each input array making sure they're in ascending order

// for (let i=1; i<len; ++i){                                                                  
//    let a = arr1[i]; 
//    let b = arr2[i];
//    let last = merged[merged.length-1];
//    if(a<b){
//      if(a>last){
//         merged.push(a,b)
//       }else{
//         merged.pop(); 
//         merged.push(a, last, b)
//       }
//     }else{
//        if(b>last){
//            merged.push(b,a)
//        }else{
//         merged.pop(); 
//         merged.push(b,last,a)
//       }
//    }
// }
// for (let i=len; i<long.length; ++i){
//        merged.push(long[i])
//    }
// return merged
// // return [...merged, ...long.slice(len)]
// }

// Solution 3:
// function mergeTwo(arr1, arr2) {
// let arr = [...arr1, ...arr2].filter(e=> e); // filter if an array has empty spots. Might be faster if input arrays are filtered before merging them into one.
// let sorted=[];
// let m;
// for (let i=0; i<arr.length; ++i){
//  m = Math.min(...arr);
//  sorted.push(m)
//  arr[arr.indexOf(m)] = arr[arr.length -1];
// }
// return sorted
// }

// console.log(`1.  ${mergeTwo([2,2,4,5,5,7,9], [0,1,3,6,8,8,9,20])}`)
// console.log(`2.  ${mergeTwo([1, ,2], [0, ,7])}`)
// console.log(`3.  ${mergeTwo([2], [0,1,4,7])}`)
// console.log(`4.  ${mergeTwo([], [0,1,3,6,8,8,9,20])}`)

