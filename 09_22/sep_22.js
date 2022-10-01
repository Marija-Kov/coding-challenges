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
// let arr = [...arr1, ...arr2].filter(e=> e); // filter if an array has empty replacedItems. Might be faster if input arrays are filtered before merging them into one.
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

// 25. Is the string an isogram? - Ignore case. The strings may contain empty spaces.

// function isIsogram(str){
//  if(str=="") return true;
//   const inp = [...str.toLowerCase()].filter(e=> e !== " ").sort();
//   for(let i=0; i<inp.length; ++i){
//     if (inp[i] === inp[i+1]){
//       return false
//     } 
//   }
//   return true
// }

// console.log(`1. ${isIsogram("  isogram")}`)
// console.log(`2. ${isIsogram("aba")}`)
// console.log(`3. ${isIsogram("moOse")}`)
// console.log(`4. ${isIsogram("isIsogram")}`)
// console.log(`5. ${isIsogram("")}`)

//26. Sort an array of numbers in an ascending order so that even numbers keep their original positions.


// function sortArray(array) {
//   const arr = [...array];
//   let len = arr.length;
//  for(let i = 0; i<len; ++i){
//    if(arr[i]%2 !== 0){
//    for(let y = i+1; y<len; ++y){
//     if(arr[y]%2 !== 0 && arr[y]<arr[i]){
//       let temp = arr[i];
//       arr[i] = arr[y];
//       arr[y] = temp;
//     }
//    }
//   }
//  }
//  return arr
// }

// console.log(`1. ${sortArray([5, 3, 2, 8, 1, 4])}`) //[1, 3, 2, 8, 5, 4]
// console.log(`2. ${sortArray([5, 3, 1, 8, 0])}`)  //[1, 3, 5, 8, 0]  
// console.log(`3. ${sortArray([])}`) // []

// 27. Find max sum subsequence of an array of integers
// if all integers are negative, return 0
// if all integers are positive, return sum of all integers
// empty array is a valid input 
// the length of the subsequence is not fixed, may be from 0 to input.length


// 1) O(n^2) 

// function maxSequence(arr){
//   if(arr.every(e => e<0) || arr.length===0){   // slow - runs a function every() for every array element
//     return 0
//   }
//   if(arr.every(e=>e>=0)){
//     return sumArr(arr)
//   }
//   let tempSubArr;
//   let tempSum=Number.NEGATIVE_INFINITY;
//   let len = arr.length;
//   for(let i=0; i<len; ++i){
//     for(let y=i; y<len; ++y){
//       tempSubArr=arr.slice(i, y+1);
//      if(sumArr(tempSubArr) > tempSum){
//       tempSum = sumArr(tempSubArr)
//      } 
//     }
//   }
//   return tempSum
// }

// function sumArr(arr){
//   return arr.reduce((prev,curr) => prev + curr, 0)
// }

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))


// 27. Consider a side of a die as a 3 x 3 grid.
// Write a function that will return an array of arrays of numbers that represent each side of the die as a colour-by-number pattern.
// ex: side 1 has a mark on area 5 left to right, so side 1 : '5', then side 2: "19", side 3: "159" etc.
//       []
//      [5]
//     [1,9]
//    [1,5,9]
//   [1,3,7,9]
//  [1,3,5,7,9]
// [1,3,4,6,7,9]

// function diePattern(){
//     const areas = 9;  
//     const sides = new Array(6);
//     let mid = Math.ceil(areas/2); // 5
//     let m = mid.toString();
//     sides[0] = m; // side one has one dot in the center;
//     for (let i=1; i< 6; ++i){
//         let prev = sides[i-1];
//         if([...prev].includes(m)){
//             if(prev === mid.toString()){
//              sides[i] = prev.replace(m, '1'+ areas.toString())
//             }else{
//              let y = prev.indexOf(mid);
//              sides[i] = prev.replace(m, ((mid + Number([...prev][y-1]))/2).toString() + ((mid + Number([...prev][y+1]))/2).toString())
//             }

//         }else{
//             let len = [...prev].length;
//             sides[i] = prev.slice(0, len/2) + mid + prev.slice(len/2, len)
//         }
    
//     }
//     return sides.map(side => side.split('').map(num => Number(num)))
// }

// console.log(diePattern())

// 28. Simplified directions
// given an array of directions (strings), which might be any combination of "north", "west","south", "east"
// and knowing that "north" and "south" as well as "west" and "east" cancel each other out
// return an array of simplified directions, 
// i.e. the one that excludes pairs of adjacent directions that cancel each other out

// More details:
// - all-caps strings only?
// - only 4 directions?
// - only alphabetical strings?
// - should work for empty arrays? 

// const dirsObj = {"NORTH":"SOUTH", "SOUTH":"NORTH", "EAST":"WEST", "WEST":"EAST"}; 
// function dirReduc(arr){
//     let newDirs=[];
//     let i=0;
//     while (i<arr.length){
//      if(arr[i] !== dirsObj[arr[i+1]]){
//         newDirs.push(arr[i]) 
//         ++i;
//       }else{
//        i=i+2;
//       }
//     }
//     return newDirs.join('').includes("NORTHSOUTH") ?
//            dirReduc(newDirs) :
//            newDirs.join('').includes("SOUTHNORTH") ?
//            dirReduc(newDirs) :
//            newDirs.join('').includes("WESTEAST") ?
//            dirReduc(newDirs) :
//            newDirs.join('').includes("EASTWEST") ?
//            dirReduc(newDirs) : newDirs
// }

// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST", "WEST"]));
// console.log(dirReduc(["NORTH","SOUTH","WEST","EAST","NORTH","SOUTH","NORTH","EAST","WEST","EAST","SOUTH","NORTH","EAST","WEST"])); 
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
// console.log(dirReduc(["NORTH","NORTH","NORTH","SOUTH","SOUTH","SOUTH"]))