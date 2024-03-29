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


// * Divide 'n' Conquer attempts 

//function divnc(str, val){
 // iterate through the first half of the arr
 //if the val is not there, search in the first half of the second half..
 // etc
//  console.log('searching');
// let arr = [...str];
// let len = arr.length;
// let mid = Math.floor(len/2);
 
// if ([...(str.slice(0, mid))].includes(val)){
//     return `found it at position ${str.indexOf(val)} of ${str}`  // You might want this to be the index of the original string, not the slice! Btw, in this case, this implementation of divide and conquer is useless and inefficient 'cause: str.indexOf(val).
//  } else {
//      return divnc(str.slice(mid, len), val)
//  }
// }

// console.log(divnc('11111111111111111111cvefgefgec1cnufgh0ngigehic', '0'))

// // divide and conquer reduces the number of multiplications in exponentiation
// function expo(base, exponent) {
//  let x = exponent%2;  // if === 0, it splits down perfectly, if > 0, extra multiplication happens
//  let split = base**Math.floor(exponent/2);
//   if (x){
//     return (split**2)*base*x  
//   } else {
//     return split**2
//   }
  
// }

// console.log(expo(2, 17));
// console.log(expo(2, 8))



// 12. Instant runoff voting   
// takes in an array of arrays containing letters a-e each representing candidates
// the arrays represent votes of one voter in descending order of preference
// the candidate that gets over 50% votes wins
// if the winning candidate gets 50% votes or less, the candidate with least votes is removed and the votes are counted again
  // if there are 2 candidates tied for the least votes, they are both out and the votes are counted again

//  let ballots1 = [
//    ["RM", "DL", "AD", "JL"],
//    ["RM", "AD", "JL", "DL"],
//    ["DL", "AD", "JL", "RM"],
//    ["JL", "AD", "DL", "RM"],
//    ["AD", "JL", "RM", "DL"],
//    ["AD", "JL", "RM", "DL"]]; // undefined

//   // Why should it return undefined and not AD??
  

// let ballots = [
//    ["d", "a", "e", "b", "c"],
//    ["b", "e", "d", "c", "a"],
//    ["e", "a", "c", "b", "d"],
//    ["e", "d", "a", "b", "c"],
//    ["d", "b", "a", "e", "c"]];


// let ballots2 =[
//    ["a", "c", "b", "e", "d"],
//    ["c", "a", "e", "b", "d"],
//    ["e", "c", "b", "d", "a"],
//    ["a", "e", "c", "d", "b"],
//    ["d", "c", "e", "a", "b"]  //a
// ]

// function runoff(voters){
//    let arrays = voters;
//    let allVotes = arrays[0].length;
//   return count(arrays, allVotes)
// }

// function count(arrays, num){
//    let voteStats = toObj(arrays);
//    let max = getMax(voteStats, num);
//   if (max === null){
//    let newResults = removeMin(arrays, voteStats); 
//    return count(newResults, num)  // R E T U R N
//    } 
//      return max
// }

// function toObj(arrs){  
//   let len = arrs.length; 
//   let obj = {};
//     arrs[0].forEach(e => {
//         obj[e] = 0 
//     });
//     for (let i = 0; i < len; ++i){
//         ++obj[arrs[i][0]];
//     }
//     return obj
// } 


// function getMax(obj, num){
//   let options = Object.keys(obj);
//   let max = obj[options[0]];
//   let len = options.length;
//   for (let i = 1; i < len; ++i){ // loop to get max value
//     let curr = options[i];
//     if (obj[curr] > max){
//      max = obj[curr]
//     }
//   }  
//   if (max/num > 0.5){ // check if max is a winner amount
//       let maxVal = options.filter(e => obj[e] === max);
//        if (maxVal.length > 1){
//          return undefined
//         }
//        return maxVal.toString()
//         } else if(max/num <= 0.5) {
//         return null         
//    } else if (options.every(e => obj[options[e]] === obj[options[0]])){
//      //obj[options[0]] === obj[options[1]] === obj[options[2]] === obj[options[3]] === obj[options[4]]){ // Apparently, this took care of stack overflow by handling total ties (most of them)
//      return 'undefined'
//    }
// }
  
// function removeMin(arrs, obj){ 
//     let options = arrs[0];
//     let min = getMinValue(obj)
//     let newArrs = [];
//     options.forEach(option => {
//       if(obj[option] === min){
//         for (let y = 0; y < arrs.length; ++y){ 
//           let index = arrs[y].indexOf(option);
//               arrs[y][index] = undefined
//             }
//          } 
//     });                                        
//    for(let i = 0; i < arrs.length; ++i){
//       newArrs.push(arrs[i].filter(e => e != undefined)) 
//    } 
//    return newArrs
// }

// function getMinValue(obj){
//     let arr = Object.keys(obj);
//     let len = arr.length;
//     let min = obj[arr[0]];
//     for (let i = 1; i < len; ++i){ 
//         let curr = arr[i];
//         if (obj[curr] < min){
//             min = obj[curr]
//     } 
//   } 
//   return min
// }

// console.log(runoff(ballots1))


// exceeds max call stack (again)

// some tests show returning an array of two instead one result

// some tests show incorrect results

//13. Persistent bugger
// split number into single digits and multiply them
// create an incrementable variable
// evaluate the result: if it's a single digit, return 0
// if not, increment by 1 and repeat the cycle

// function persistence(num){
//   let per = 0;
//   let curr = num;
//   while (curr > 9){
//     let result = 1;
//     let nums = [...curr.toString()];
//     for(let i = 0; i<nums.length; ++i){
//       result = result*Number(nums[i]);
//     }
//     curr = result
//     ++per;
//   }
//   console.log(curr)
//   return per
// }

// console.log(persistence(5993371))


//14. Unique in order

//a) takes in a string or array and returns it with only unique values in original order

// function uniqueInOrder(iterable) {
//   return [...new Set([...iterable])]
// }

//b) takes in a string/array and returns a single char from each sequence of same chars in the original order

// newArray.push(arr[0])
//let curr = arr[0]
// for loop 
//if arr[i] != curr, newArray.push(arr[i]), curr = arr[i]

// function uniqueInOrder(iterable) {
//   let arr = [...iterable];
//   if(arr.length === 0){
//     return []
//   }
//   let newArr = [arr[0]];
//   let curr = arr[0];
//   for (let i = 1; i < arr.length; ++i){
//     if (arr[i] != curr){
//       newArr.push(arr[i]);
//       curr = arr[i]
//     }
//   }
//   if(typeof iterable === 'string'){
//     return newArr.join()
//   }
//   return newArr
// }

//*** */ 'member array.filter((element, index) => element === array[index]   ..?

//15. Stop repeating yourself
// take in an array of numbers and a number (n)
// return a new array that will contain n instances of each array element (number) at maximum
// the order of the elements in the input array has to be preserved

// function deleteNth(arr, n) {
//   let vals = arr;
//   let unique = [...new Set(vals)];
//   unique.forEach(uniq => {
//     let counter = 0;
//     let last;
//     for (let i = 0; i < arr.length; ++i){
//       if(arr[i] === uniq){
//         last = i;
//         ++counter;
//       }
//       if (counter === n){
//         for (let y = last+1; y < arr.length; ++y){
//           if (arr[y] === uniq){
//             delete arr[y]
//           }
//         }
//       }
//     }
//   })
  
//   return vals.filter(e => e != undefined)
// }
// for every unique value in the array (uniq) 
//   create/start a counter at 0
//   loop through the array
//   increment ++counter each time an array element (e) === uniq
//   while counter is less than N
//   do nothing
// once counter hits N, create a reference to the last indexOf uniq in the array (last)
// loop through the rest of the array starting at arr[last+1]
// if any e === uniq, delete it / assign undefined to it

// once this is done for every uniq, take the modified array and filter out undefined 

// Commenting someone else's solution as a personal note:
// function deleteNth(arr,x) {
//   let cache = {}; // will store key(arr[i])-value(number of times it is found in the arr) pairs 
//   return arr.filter(n => { // will return an array of elements where each element (n)...
//     cache[n] = (cache[n] || 0) + 1; //... will map into the corresponding key in cache whose value(*) will be incremented by one (whether it's already been defined or not)
//     return cache[n] <= x; // ..and finally, only elements whose corresponding key in cache has a value less or equal to x will be returned
//   }); 
// }
// (*) at the point cache[n] is created, it's value is empty (falsy) by default. 
// By using (cache[n] || 0) we make sure that the value of cache[n] is a (falsy) number at the time it's created so it can be incremented.
// The syntax (a || b) in translates into: take A as the value unless A is falsy, in which case you'll take B (which can be truthy or falsy itself).
// The order of operands matters. If we wrote (0 || cache[n]) we'd get an empty string in return.


// console.log(deleteNth([11, 19, 2, 19, 2, 32, 11, 12, 46, 32, 19, 12, 12, 32, 5, 32, 32, 46, 19, 5], 2));

// 16. Build a tower
// build nFloors strings with nFloors*2-1 empty spaces
// convert to array and 

// function towerBuilder(nFloors) {
//   let tower = [];
//   let n = nFloors*2-1; // length of each floor/level according to the expected result
//   let floor = ' ';
//   while (n > 0){  
//   floor = floor + ' '
//   --n;
//   }
//   for(let i=0; i < nFloors; ++i){ 
//   let arr = [...floor];
//   let empties = arr.splice(nFloors+i+1, nFloors-i, multiplyChar('*', i)); 
//   tower.push([...empties, arr.splice(nFloors+i+1, nFloors), ...empties].join(''))
//   }
//   return tower
// }

// function multiplyChar(char, n){  // this function will return correct number of blocks on each floor according to the expected result
//   let multi = char;
//   for(let i = 0; i<n; ++i){
//   multi = multi.concat(char, char)
//   }
//   return multi
// }

// console.log(towerBuilder(9))

// (*) Oh, hai, String.repeat() !  PickAStringAnd.repeat(thisManyTimes) !

// function buildMuhTower(manyFloors){
//   const tower = [];
//   for(let i = 0; i < manyFloors; ++i){
//     tower.push(" ".repeat(manyFloors-1-i) + "*".repeat(i*2+1) + " ".repeat(manyFloors-1-i))
//   }
//   return tower
// }

// console.log(buildMuhTower(9))

//17. x and o
// takes in a string of random chars
// counts x and o occurrences
// returns true if x and o counts are equal, else false
// if no x or o are found in the string, also returns true
// is case insensitive

// function XO(str) {
//    let arr = [...str];
//    if(!arr.includes('x', 'o', 'X', 'O')){
//      return true
//    }
//    let Xs, Os;
//     let len = arr.length;
//     for (let i=0; i<len; ++i){
//      if (arr[i].toLowerCase() === 'x'){
//        Xs = (Xs || 0) + 1;
//      } else if(arr[i].toLowerCase() === 'o'){
//        Os = (Os || 0) + 1;
//      }
//     }
//   if(Xs === Os){
//     return true
//   } else {
//     return false
//   }
// }

// 18. Build tower with defined block size
// function takes 2 args: a number of floors (integer) and a size of block (array of 2 integers, each > 0)

//--block size, ex: [2,1] === '**'
// one floor height corresponds to the second integer in the arg

// function towerBuilder(nFloors, blockSz) {
//  let floor = []; 
//  let tower = [];
//  let s = 1; // denotes the increasing floor width/number of blocks per floor
//  for(let i = 1; i <= nFloors; ++i){
//   for(let j=0; j<blockSz[1]; ++j){
//     floor.push(" ".repeat(blockSz[0]*(nFloors-i)) + "*".repeat(blockSz[0] * s) + " ".repeat(blockSz[0]*(nFloors-i)))
//   }
//   s+=2; // the next floor is always 2 block widths wider than the previous
//    tower = [...floor];
//   }
//  return tower
// }

// console.log(towerBuilder(4, [3,2]))