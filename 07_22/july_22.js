const { before } = require('lodash');
const _ = require('lodash');

// const asciiConverter = function asciiConverter(string) {
//   for (let i = 0; i < string.length; ++i) {
//     return string
//       .split("")
//       .map((letter) => letter.charCodeAt(i))
//       .join("");
//   }
// }

//Fannkuch-redux
  //takes in an array of positive integers
  //takes the array[0], assigns it to n
  //takes the first n number of array elements and reverses their order
     // Steps to reverse the order of numbers:
      // 1. a new empty array should be created - call it arrX
      // 2. arrX[0]...arrX[n] should be array[n-i] where i starts with 1 and increments until n
      // 3. an arrY should be created containing array[n]...array[array.length-1] i.e. all the elements from the array not being flipped
      // 4. assign [...arrX, ...arrY] to array
  //repeats it until array[0] === 1 


  // function fannkuchRedux(arr) {
  //     if (arr[0] !== 1) {
  //     let n = arr[0];    
  //     let arrX = arr.slice(0, n);
  //     let arrY = arr.slice(n)
  //     let arrXrev = [];
  //     for (let i = 1; i <= n; ++i){ 
  //         arrXrev.push(arrX[n-i]) // subtract i (that increments by one with every cycle) from n until i = n -- until arrX[n-n] = arrX[0] -- until the first element of arrX is pushed into the last spot in arrXrev
  //     }
  //     //console.log(arrY);
  //     //console.log(arrXrev);
  //     let newArr = [...arrXrev, ...arrY];
  //     console.log(newArr)
  //     arr = newArr;
  //     fannkuchRedux(arr)
  //   }else{
  //       console.log('arr[0] is 1 now')
  //   }
  // }

  // //fannkuchRedux([4,2,1,5,3])

  // for(let i = 1; i<5; ++i){
  //   document[`value${i}`] = i;
  //   console.log
  // }


  // function toRange(arr) {
  //   let newArr = [];
  //   let len = arr.length;
  //   for (let i = 0; i < len-1; i=i+2){
  //     if(arr[i+1] - arr[i] >= 2){
  //       newArr.push(`${arr[i]}-${arr[i+1]}`)
  //     } else {
  //       newArr.push(arr[i], arr[i+1])
  //     }
  //   }
  //   console.log(newArr.join(','))
  // }




  // let myArr = [
  //   -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
  //   19, 20,
  // ];


  // const isSubset = (array1, array2) =>  
  // array2.every((element) => array1.includes(element)); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every


  // function theRanger(arr) {
  //   let nonRange = []; // Array that will contain all the values that don't belong to any range.
  //   let len = arr.length;
  //   let rangePlus = []; // Array that will contain all ranges, including subsets
  //   let validRanges = []; // Array that will contain only longest ranges, which are the only ones I'm interested in.
  //   let enranged = []; // This will contain ranges in the correct form ('first-last') and non-range numerals. p.s. I know it's not a real word.

  //   for (let i = 0; i < len-1; ++i){ 
  //     if (arr[i]+1 === arr[i+1]){ // This conditional checks if the element to the right of the current element is greater by one than the current element; in other words: whether the current element is eligible for being the start of a range.
  //      let x = 1;  // Introducing an incrementable.
  //      let range = [arr[i]];  // Declaring a range with the current value as range[0].
  //       while ( arr[i+x] === arr[i] + x ) { // Looping through every arr element to the right of arr[i] and while each of them is larger by one than the previous(i.e. larger by x than arr[i])...
  //         range.push(arr[i+x]) // ..keep adding them to the range;
  //         ++x;  // Incrementing by one; x denotes the equal numerical difference in index as well as value between the current and arr elements to the right from it.
  //       }
  //       if (range.length >= 3) {  // Only ranges that contain 3+ elements are considered in this case. 
  //       rangePlus.push(range);  
  //      } 
  //     }
  //   }

  //   rangePlus.forEach(ran => {  // Here we'll go through all the ranges that we stored in rangePlus...
  //     for(let j=rangePlus.indexOf(ran)+1; j<rangePlus.length; ++j){  // ..and compare each to every range to the right from it.. 
  //      if (isSubset(ran, rangePlus[j])){ //..in order to check if there are any ranges that contain the exact values that are already within the range they're being compared to..
  //       delete rangePlus[j]  //...and get rid of them, leaving behind undefined values.
  //      }
  //     }
  //   })

  //   rangePlus.forEach(ran => {  // This loops through rangePlus again..
  //     if(ran != undefined){   // ..in order to only get defined values...
  //       validRanges.push(ran) // ..and push them into a new array.
  //     }
  //   })

  //   let combined = validRanges.join(','); 
  //   arr.forEach(e => {      
  //     if(!combined.includes(e)){ // This conditional is looking for the arr elements that aren't in the string which is made out of all values that fall within a range.
  //       nonRange.push(e)
  //     }
  //   })

  //   for (let i = 0; i < len; ++i){     // This will take each arr element...
  //     for(let k = 0; k < validRanges.length; ++k){  // ...and every valid range...
  //       if(arr[i]===validRanges[k][0]){  // .. and will check if an array element is equal to the first element in every valid range,...
  //         arr[i] = `${validRanges[k][0]}-${validRanges[k][validRanges[k].length - 1]}`; // ...and will replace the arr element with the 'first-last' signature using the first and last element of the corresponding valid range
  //         for(let y = 1; y < validRanges[k].length; ++y){ //...also, it will delete every arr value on the right side of the current arr element to the extent of the length of the corresponding valid range.
  //           delete arr[i+y]
  //         }
  //       }
  //     }
  //    } 
    
  //   for (let i = 0; i < len; ++i){  
  //     if(arr[i] != undefined){
  //       enranged.push(arr[i])  // Finally, this will get all the remaining (defined) values into a new array.
  //     }
  //    } 
  //   console.log(enranged.join(','));
  // }
    
  //theRanger(myArr)



// function theMostOfOnes(arr){
//   let len = arr.length;
//   let zeroAt; // This variable will hold the last index of a zero which, if replaced by one, would give the longest sequence of ones within the array.
//   let ones = 0; // This will hold the maximum number of ones in sequence in an array upon the replacement of a zero.
//   for(let i = 0; i < len; ++i){
//     if (arr[i]===0){
//       let y = 1; // Holds a number of ones to the right of a zero at the current index...
//       let x = 1; // ...and to the left; 
//       while(arr[i+y]===1) ++y; // These loops will count 1s to the right.. 
//       while(arr[i-x]===1) ++x;// ..and to the left from a zero.
//       if(x + y >= ones){ 
//         //console.log(arr)
//         ones = x + y; 
//         zeroAt = i;
//       }    
//     }  
//   }
//   console.log(`max ones in a row : ${ones} with zero replaced at index: ${zeroAt}`); 
// }


////   ---- CURRYING 


// function sum(a, b){
//   return a+b
// }
// // ^ This can only be called wholly : sum(1,2)

// function keech(f){
//   return function(a) {  // The number of nested anonymous functions corresponds to the number of arguments.
//     return function(b) {
//       return f(a, b)  
//     }
//   }
// }

// let curryKeech = keech(sum);  // Curry - keech - is a wrapper to sum.

// console.log(curryKeech(1)(2));

/////  Currying with Lodash

// function log(date, importance, message){
//   console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`)
// }

// log = _.curry(log);

// // log(new Date(), "DEBUG", "some debug");
// // log(new Date())("DEBUG")("some debug")

// let logNow = log(new Date()); // function with a fixed argument --> partial(ly applied function) 

// // logNow("INFO", "message")

// let debugNow = logNow("DEBUG");

// debugNow("using partials")

// log(new Date(), "ANNOUNCING", "log is called normally")

// function sum(a, b){
//   return a+b
// }

// function keech(...args){
//   if (args.length >= sum.length){
//   return sum.apply(this, args);
//   }else{
//     return function(...args2){
//      return keech.apply(this, args.concat(args2))
//     }
//   }
// }

// console.log(keech(2)(3))

// Function that takes an array of numbers
// Picks a random number ran
// array[array.indexOf(ran)] = array[len-1];
// array.length = len-1


// let nums = [22,33,67,44,34,90,10,23];

// function pickRandom(arr) {
//   let len = arr.length;
//   let shuff = [];
// function* generateRandom() {
//   for (let i = 0; i < len; ++i){
//     let ran = Math.floor(Math.random() * arr.length)
//     yield arr[ran];
//     shuff.push(arr[ran])
//     arr[ran] = arr[arr.length-1]; 
//     arr.pop();
//     //console.log(arr)
//   }
//   return `${shuff}`
// }
// let gen = generateRandom(arr);
// for (let i = 0; i <= len ; ++i){
//   console.log(gen.next())
// }

// }
       
// pickRandom(nums);


// Task: converting strings to corresponding integers
// Min "zero" inclusively, max "million"
// assuming all tested numbers are valid

// determine the string : integer pairs in a form of key : value
// map()

const numbers = {
  "zero" : 0,
  "one" : 1,
  "two" : 2,
  "three": 3,
  "four" : 4,
  "five" : 5,
  "six" : 6,
  "seven" : 7,
  "eight" : 8,
  "nine" : 9,
  "ten" : 10,
  "eleven" : 11,
  "twelve" : 12,
  "thirteen" : 13,
  "fourteen" : 14,
  "fifteen" : 15,
  "sixteen" : 16,
  "seventeen" : 17,
  "eighteen" : 18,
  "nineteen" : 19,
  "twenty" : 20,
  "thirty" : 30,
  "forty" : 40,
  "fifty" : 50,
  "sixty" : 60,
  "seventy" : 70,
  "eighty" : 80,
  "ninety" : 90,
  "hundred" : 100,
  "thousand" : 1000,
  "million" : 1000000,
  "and": "+",
};

function parseInt(str){
  let nums = str.split("-").join(" ")
  .split(' ')
  .map(e => numbers[e])
  .filter(i => typeof i === 'number');

  for(let i = 0; i < nums.length; ++i){
    if(nums[i] === 100) {
    nums.splice(i-1, 2, nums[i-1]*100)
    }
  }
  after1000(nums);
  before1000(nums);
  
  return before1000(nums) * 1000 + after1000(nums)
  
};

console.log(parseInt("one million"))  // fix the one million !

// helper functions

  function before1000(nums) {
    let tho = nums.indexOf(1000);
    let before = [];
    for (let i = 0; i < tho; ++i){
     before.push(nums[i])
    }
    let sum = before.reduce((a,b)=> a+b, 0);
    return sum
  }

    function after1000(nums) {
    let len = nums.length;
    let tho = nums.indexOf(1000);
    let after = [];
    for (let i = tho+1; i < len; ++i){
     after.push(nums[i])
    }
    let sum = after.reduce((a,b)=> a+b, 0);
    return sum
  }

function dashDitch(str) {
 return str.split("-").join(" ")

}

//console.log(dashDitch("two-hundred and twenty-one"))
