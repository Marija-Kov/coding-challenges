// 68. Calculate the recursive sum of all digits in a positive integer

// Input: positive integer, 1+ digits, no invalid input
// Output: one-digit positive integer
// Example: 128 --> 1+2+8 == 11 --> 1+1 == 2


// function digitalRoot(n) {
//   let arr = n.toString().split(''); 
//   let len = arr.length;
//   let sum = 0;
//   while(--len+1){ 
//    sum+=Number(arr[len]) 
//   }
//   if(sum>=10) return digitalRoot(sum)
//   return sum
// }

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



//console.log(duplicateEncode('keecheerrrf 2r4 5%'))

// WORK IN PROGRESS // 70. Snail sort 
// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

// Input: two-dimensional array s, size n x n where each element is s[i][j]
// Output: one-dimensional array a, length n^2

// Solution:
// It can be observed that:
//
// 1) the last input element pushed in the output array is 
//   s[Math.ceil((n-1)/2)][Math.floor((n-1)/2)];
//   So the iteration is completed when i === Math.ceil((n-1)/2) and j === Math.floor((n-1)/2)

// 2) During the iteration both indexes will switch between incrementing and decrementing
// 3) Only one index can be incremented/decremented at a time
// 4) The iteration starts with the incr of [j] followed by the incr of [i] 
// followed by decr of [j] then [i] and so on.. 
// 5) [j] then [i] incr until [n-x] where x=0 is incr by 1 after [i] finish incr
// 6) [j] then [i] decr until [y] where y=0 is incr by 1 after each [j] and [i] finish decr
// 7) at the point a.length === n^2 the process breaks and a is returned; this can happen
//    at the end of any loop
// 8) if a.length is < n^2 after both [i] and [j] have gone through incr and decr cycle,
//  the function is called recursively

function helix(arr){
    if (arr===[[]]) return [];
    if (arr[0].length===1) return arr[0]; 
     
    // const lastI = Math.ceil((n - 1) / 2);
    // const lastJ = Math.floor((n - 1) / 2);
    // const last = arr[lastI][lastJ];
    
    //let flat = [];
    // for (let i=0; i<n; ++i){
    //     flat = [...flat, ...arr[i]]
    // }
    let n = arr.length;
    let len = n**2; // final length of the output array
    let snail = arr[0];
    let i=1; let j=n-1; 
    let x=0;
    while(snail.length < len){
        while(i < n+x){
            snail.push(arr[i][j]); ++i
        }
        --j; 
        --i;
        while(j > x){
            snail.push(arr[i][j]); --j;
        }
        
        while(i > x){
            snail.push(arr[i][j]); --i;
        }
        ++j;
        ++x;
        while(j < n-x){
            snail.push(arr[i][j]); ++j
        }
        
    }

    
    return snail
}


//console.log(helix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))



// 71. Reorder an array so that, ex: [1,2,3,4,5,6] becomes [1,6,2,5,3,4]; [1,2,3,4,5] --> [1,5,2,4,3]

// Input: array, no invalid input;
// Output: array reordered;

// Solution: 
// This works for both odd and even length arrays:

function reorder(arr){
    let len = arr.length;
    let newArr;
      newArr = [...arr]
      for(let i=1; i<len-1; i+=2){
        newArr.splice(i,0,newArr[len-1]);
        newArr.pop()
      }
   return newArr 
}

function reorderEven(arr){
    let len = arr.length;
    if (len%2!==0){
        return 'array length not even'
    }else {
    let newArr =[];
    for (let i=0; i<len/2; ++i){
        newArr.push(arr[i], arr[len-i-1])
    }
     return newArr
    }
}

// Since we can see that in this type of reordering, in case arr.length is even
// the two elements in the middle of the input arr i.e
// at the end of the output arr stay in the same order, we can loop less times and just add them at the end
// which makes the program run consistently faster

function reorderEven2(arr) {
  let len = arr.length;
  if (len % 2 !== 0) {
    return "array length not even";
  } else {
    let mid = len/2-1;
    let newArr = [];
    for (let i = 0; i < mid; ++i) {
      newArr.push(arr[i], arr[len - i - 1]);
    }
    newArr.push(arr[mid], arr[mid+1])
    return newArr;
  }
}

// In case of arr.length being odd, we can do the similar thing: loop mid times and push the mid element at the end

function reorderOdd(arr){
    let len = arr.length;
    if(len % 2 === 0){
        return "array not odd"
    } else {
        let mid = Math.floor(len/2);
        let newArr = [];
        for (let i = 0; i < mid; ++i) {
          newArr.push(arr[i], arr[len - i - 1]);
        }
        newArr.push(arr[mid])
        return newArr
    }
}

//console.log(reorderOdd([1,2,3,4,5,6,7,8,9]))
//console.log(reorderOdd([1, 2, 3, 4, 5, 6, 7, 8]));


// 72. Reverse the order of letters in words
// a word is a string of contiguous non-empty characters

// Input: a string consisting of contiguous non-empty characters and a number of empty chars
// Output: a string consisting of contiguous non-empty characters in reverse order relative to the input and a number of empty chars

// Solution: 
// 1) split the string by a single empty space
//  - this will return strings of non empty characters as well as empty characters if any length of adjacent empty chars 
//    happens to exceed 1
// 2) loop through the array and reverse each string by splitting it into an array first
//   - this will reverse the order of chars leaving the strings consisting of empty chars in essentially unaltered condition
//   - join the array by a single empty space and put it in the place of the existing string (a[i])
// 3) after looping is over, join the array by a single empty char


function reverseWords(str){
 let arr = str.split(' ');
 let len = arr.length;
 for (let i = 0; i<len; ++i){
  arr[i]=arr[i].split('').reverse().join('') 
 }
 return arr.join(' ')
}

// The above solution runs 3 functions per array element i.e. goes over every string in the array 3 times (at least). Eek!

// Solution 2:
// 1) initiate a variable word as an empty string
//  - it will temporarily store word (non-empty char) substrings
// 2) initiate a variable reversed as an empty string
// 3) looping through the input string characters from backwards, concatenate every non-empty char 
// with the word variable 
// 4) every time you reach an empty char, do " " + word + reverse concatenation and 
// make sure to assign '' to word in case there are multiple contiguous empty chars to consider
// 5) since the while loop ends at the time the last word is reversed but before it's concatenated,
// make sure it's concatenated with reversed before it's returned


function reverseWords2(str){
    let len = str.length;
    let word = '';
    let reversed = '';
    while(--len+1){   
        let char = str.charAt(len);
        if(char !== " "){
            word+=char;
        } 
        if (char === " "){
            reversed = " " + word + reversed;
            word = ''
        }
    }
    return word + reversed
}

//console.log(reverseWords2('ab cd'))

// 73. Count the number of characters that occur more than once

// Input: string containing numeric and alphabetic (both cases) characters; no invalid input
// Output: integer
// Example: 'Invincible334' --> 3 (3 times i/I, n twice, 3 twice)

// Solution:

// create an object to store the key:val pairs of chars and their counts
// loop through the input str and +1 a char every time it occurs 
// get object entries
// loop through the entries to count the number of vals >= 2

function duplicateCount(str) {
 let len = str.length;   
 let obj = {};
 let count = 0;
 while(--len+1){
    let char = str.charAt(len).toLowerCase();
    obj[char] = obj[char]+1 || 1
 }
 let vals = Object.values(obj)
 len = vals.length;
 while(--len+1){
    if (vals[len] > 1) ++count
 }
 return count
}

// Solution 2:
// Since we only care if a character appears once or more than once and not about which character it is
// nor how many times exactly it appears in the string, we can:
// 1) initialize an array that will store unique characters of the string
// 2) loop through the chars, check if a char is present in the array
// 3) if yes. increment count by one and replace char with `+char`
// 4) if `+char` is present, do nothing (this prevents counting one repeated char multiple times)
// 5) if the char nor `+char` are present, push the char into the array
// 6) return count

function duplicateCount2(str){
    let vals = [];
    let count = 0;
    let len = str.length;
    while (--len+1){
        let char = str.charAt(len).toLowerCase();
       if(vals.includes(char)){
        ++count;
        vals[vals.indexOf(char)] = `+${char}`
       }else if(vals.includes(`+${char}`)){
        null
       } else {
        vals.push(char)
       }
    }
   return count
}

// console.log(duplicateCount2('Invincible334'))
// console.log(duplicateCount2("aaaaaaaaaaaaab"));