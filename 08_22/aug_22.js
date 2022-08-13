//1. Generate Hashtag
//will take any string, convert it to camelCase + the first letter must be capitalized
//the result must have # as the first char
//all whitespace must be removed
//if the final result is longer than 140 chars, must return false // including or excluding the # ?
//if the string is "", also returns false // what about "   "  ?
// what about numerical chars? how to handle other non-letter chars ? What about special letter chars?
//1. all first letters to uppercase
//2. trim whitespace
//3. add hashtag

//const { countBy } = require("lodash");

// function generateHashtag(str) {
//  if (str==false){
//      return false
//  };
//  let words = str.split(' ').filter(e => !e===false);
//  let capped = [];
//  for (let i = 0; i < words.length; ++i){
//     capped.push(words[i].charAt(0).toUpperCase() + words[i].slice(1)); // cat --> "C" + "at" --> Cat
//  };
//  if (capped.join('').length + 1 > 140) {
//      return false
//  } else {
//  return `#${capped.join('')}`
//  };
// }


// console.log(generateHashtag("            Hello there thanks              for trying my Kata"));
// console.log(generateHashtag(""));


// 2. Baker Bad at Math
// given an object of recipe ingredients and an object of available ingredients
// calculate max number of cakes that can be made
// ingredient amounts are just numbers


// function cakes(recipe, available) {
//   let rec = Object.keys(recipe); 
//   let ava = Object.keys(available);
//   let chancesOfCake = [];
//   for (let i=0; i < rec.length; ++i) {
//       if (ava.includes(rec[i])) {
//         chancesOfCake.push(Math.floor(available[rec[i]] / recipe[rec[i]])) // for every available recipe ingredient, the cakeable amount is calculated and pushed into an array.
//         } else {
//             return 0 // if a single recipe ingredient is unavailable, no cake can be made.
//         }
//   }

//   return Math.min(...chancesOfCake) // if all of the recipe ingredients are available, the least cakeable one denotes the total cakeability.
 
// }



// console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
// console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));


// 3. to titleCase with revenge
// function takes in a string(title) and/or a list of minor words
// if the title is an empty string returns an empty string
// else, if the title is not empty and minor words are not provided
//  converts title to lowercase and array
//  loops through the title array of words
//   converts first letters to uppercase
//    join words into a title
// else, if the title is not empty amd minor words are provided
//  converts minor words to lowercase and array
//   if the word is a minor word and not of index 0, convert to lowercase, else
//   if the word is not a minor word or a minor word with index 0, convert first letter to uppercase 
//    join words into a title


// function titleCase (title, minor) {
//     let titleCased = [];
//     if(title===''){
//         return ''
//     } else {
//         let titleArr = title.toLowerCase().split(' ');
//         if (title != '' && minor==null){
//          for(let i = 0; i < titleArr.length; ++i){
//           titleCased.push(titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1));
//          }
//          return titleCased.join(' ');
        
//         } else if (title != '' && minor != null){
//           let minorArr = minor.toLowerCase().split(' ');
//           for(let i = 0; i < titleArr.length; ++i){
//            if(!minorArr.includes(titleArr[i]) || i === 0){
//             titleCased.push(titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1))
//             } else {
//              titleCased.push(titleArr[i])
//          }
//        }
//           return titleCased.join(' ')
//         }
    
//     } 
    
// }

// console.log(titleCase('a clash of KINGS', 'a an the of'))
// console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))
// console.log(titleCase(''))
// console.log(titleCase('the Quick brown fox'))

//4. toString(), but on foot

// function convertToString(input){
//   let i = input;
//   if (typeof i === "number" || typeof i === "boolean") {
//     return converted = `"${i}"`;
//   } else if (typeof i === "object") {
//     return `"[${i}]"`;
//   }
// }

// console.log(convertToString(Math.random()))


// 5. The Difference
// Takes in two arrays (a, b), subtracts - removes ALL occurrences of - one from another and returns the result


// Loop through array b 
// for each b[i] loop through array a and delete all occurences of b[i] in a
// filter out the empties from array a and return


// function arrayDiff(a, b){
//     let aa = a;
//     let bb = b;
//     for (let i = 0; i < bb.length; ++i){
//         for (let y = 0; y < aa.length; ++y){
//             if (aa[y] === bb[i]){
//                 delete aa[y]
//             }
//         }
//     }
//     return aa.filter(e => e != undefined)
// }

// console.log(arrayDiff([1,2,2,2,3,4,4,5,4], [2,4]))


// 6. RGB to hex
// function toRGB(hex){
//   let chars = Array.from(hex.toLowerCase().slice(1,8)); // "#ee5566" --> "ee5566" --> ['e','e','5','5','6','6']
//   let nums = chars.map(e => alphaNum[e]);  // ['e','e','5','5','6','6'] --> [14,14,5,5,6,6]
//   let rgbArr = [];
//   for (let i = 0; i < nums.length; ++i){
//     if(i%2 === 0){
//     rgbArr.push(nums[i]*16 + nums[i+1]) // [14,14,5,5,6,6] --> [238, 153, 0]
//     }
//   }
//   let RGB = {r: rgbArr[0], g: rgbArr[1], b: rgbArr[2]};
//   return RGB

// }

// console.log(toRGB("#EE9900"))

///// 'member parseInt, tho ? parseInt(h.slice(1,3), 16) : null


//  7. Find a unique number in the array, length over 3 guaranteed
// 

// function findUniq(arr){
//   let len = arr.length;
//   let uniq = arr[0]; // Assume 1st arr item is the unique one...
//   for (let i = 1; i<len-1; ++i) {  // and for each remaining array item (except the very last one)...
//     if (arr[i]!== arr[i+1] && arr[i]===uniq){ // check if it's not equal to the one next to it and if it's equal to the current uniq..
//       uniq = arr[i+1]; // If the condition is true, the one next to it is assigned to uniq...
//       break // ..and the process stops at the first occurrence of a unique value, since there is only one unique value in the arr..
//     } else if (arr[i]!== arr[i+1] && arr[i+1]===uniq){ // In case the value next to the current arr[i] is equal to current uniq value..
//       uniq = arr[i]; // arr[i] is assigned to uniq..
//       break // and the process stops
//     } 
//   }
//    return uniq
// }

// console.log(findUniq([2,2,2,23,2,2]))

//What if there are multiple non-unique values?
//What if there are multiple unique values?

// function findUniq2(arr) {
//  let vals = new Set();
//  let len = arr.length;
//  for(let i = 0; i < len; ++i){
//      vals.add(arr[i])
//  };
//  let valsArr = Array.from(vals);

//  return getUniq(arr, valsArr)
// }

// function getUniq(arr1, arr2){ // returns arr2[i] that appear(s) only once in arr1
//     let len1 = arr1.length;
//     let len2 = arr2.length;
//     let uniques = []
//     for (let i = 0; i < len2; ++i ){
//      let count = 0;
//      for(let j = 0; j < len1; ++j){
//          if (arr2[i]===arr1[j]){
//              ++count;
//          }  
//        }
//      if (count === 1){
//              uniques.push(arr2[i]);
//          } 
//     }
//     return uniques.join(',')
// }



// console.log(findUniq2([22,22,22,24,25,2,2]))


// 8. Find a unique string - by unique meaning that it contains a set of chars(letters) that is not found in any other string
// the order, number and case of chars as well as empty spaces do not matter

// function findUniqStr(arr) {
//     let newArr = [];
//     arr.forEach(a => newArr.push(Array.from(a.toLowerCase()).sort().join('').trim())); // 'Tom Marvolo Riddle' --> 'tom marvolo riddle' --> '  addeillmooorrtv' --> 'addeillmooorrtv' --> 
//     let len = newArr.length;
//     let arr2 = []; // will store strings of unique chars from each (newArr[i]) string
//     for (let i = 0; i < len; ++i){
//         let uniqueChars = new Set();
//         [...newArr[i]].forEach(e => uniqueChars.add(e));
//         arr2.push([...uniqueChars].join(''))
//     }  
//     let uniq = findUniq(arr2);

//     return arr[arr2.indexOf(uniq)]
// }

// console.log(findUniqStr([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]))
// console.log(findUniqStr([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]))
// console.log(findUniqStr([ 'aaa', 'BbBb', 'aaaaa', 'Aa', 'Aaaa', 'AaAaAa', 'a' ]))


// function getUniqueChars(arr) {  //// returns an array of unique chars present in each string in the array in alphabetical order
//     let newArr = [];
//     let arrSet = new Set();
//     arr.forEach(a => newArr.push(Array.from(a.toLowerCase()).sort().join('').trim()));
//     Array.from(newArr.join('')).forEach(a => arrSet.add(a))
//     return Array.from(arrSet)
    
// }

// 9. function disemvowel(str){
//     return str.replaceAll(/a|e|i|o|u/gi, '')

// }

// console.log(disemvowel("This website is for losers LOL!"))

// 10. Longest common subsequence 
// Takes in two strings (length >= 1 chars)  
// returns a string of chars found (consecutively or non-consecutively) in both strings (intersection), but non-consecutively

// function LCS(x, y) {
//  let arrX = [...x];
//  let arrY = [...y];
//  let arr = YinX(arrX, arrY);
//  let arrAlt = XinY(arrX, arrY);
//  // Checking for arrX[i] in arrY(XinY) and arrY[i] in arrX (YinX) returns 2 different arrays and the longer one will make the final result.
//   if (arr.length > arrAlt.length){
//     return arr.join('')
//   }else{
//     return arrAlt.join('')
//   }
// }

// function YinX(arrX, arrY){ 
//    let arr = [];
//    for(let i=0; i<arrY.length; ++i){
//       if (arrX.includes(arrY[i])){ 
//           arr.push(arrY[i]);
//           arrX = arrX.slice(arrX.indexOf(arrY[i])+1, arrX.length) // Since we want to return a sequence, we can't be checking the whole arrY for every arrX[i], but only the section of arrY starting right after the arrY index where the last arrX[i] being checked for was found.
//       }
//   };
//   return arr
// }

// function XinY(arrX, arrY){
//    let arr = []; 
//       for(let i=0; i<arrX.length; ++i){
//       if (arrY.includes(arrX[i])){
//           arr.push(arrX[i]);
//           arrY = arrY.slice(arrY.indexOf(arrX[i])+1, arrY.length)
//       }
//   }
//   return arr
// }

// console.log(LCS("abcdef", "abc"))
// console.log(LCS("9132535365", "123456789" ))
// console.log(LCS("nettles","settle" ))
// console.log(LCS("divides","available" ))
// console.log(LCS("a", "b"))



// * 11.a) return an array of all possible substrings of a string:
// only strings of 2 chars and over 

// For each char, we will iterate through the Array.from(str) where the current char will be the starting point of iteration as well as first arg of slice method.

// function subStr(str){
//  let arr = []; 
//  for (let y = 0; y < [...str].length; ++y) {  
//    for(let i = y; i < [...str].length-1; ++i){
//       arr.push(str.slice(y, i+2))  
//     }
//   }
//   return arr
// }

// console.log(subStr('1234567'))

// * 11.b) Return all possible subsequences of a string that are not substrings (i.e. that do not consist of consecutive chars only)

// Towards the solution - the function below does not return a complete result

// function subsequences1(str){
// let arr = [];
// let len = [...str].length;
// for(let x = len; x > len/2; --x){
//   for(let i = 0; i < x-2; ++i){
//      for(let y = i+1; y<x-1; ++y){
//         for(let z = y+1; z<x; ++z){
//             arr.push(str.slice(i,y).concat(str.slice(z, x)))
//         }
//      }
//    }
// }
// return arr
// }

// console.log(subsequences1("123456"))