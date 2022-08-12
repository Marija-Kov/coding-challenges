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
//     let set1 = new Set();
//     let len2 = arr2.length;
//     for (let i = 0; i < len2; ++i){
//         set1.add(arr2[i])
//     }
//     let arr3 = [...set1];  // arr3 is arr2 minus the duplicates
//     let uniq = getUniq(arr2, arr3);

//     return arr[arr2.indexOf(uniq)]
// }

// console.log(findUniqStr([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]))
// console.log(findUniqStr([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]))
// console.log(findUniqStr([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]))


// function getUniqueChars(arr) {  //// returns an array of unique chars present in each string in the array in alphabetical order
//     let newArr = [];
//     let arrSet = new Set();
//     arr.forEach(a => newArr.push(Array.from(a.toLowerCase()).sort().join('').trim()));
//     Array.from(newArr.join('')).forEach(a => arrSet.add(a))
//     return Array.from(arrSet)
    
// }