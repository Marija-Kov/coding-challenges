// 52. Move zeros to the end
// Input: an array of values of different types
// Output: an array of exact input characters where zeros (number) are moved to the end of array
// the order of non-zero characters must be preserved

// Qs for clarification:
// Handling invalid input?

// Solution
// count and filter out zeros, then push the counted number of zeros into the array

function moveZeros(arr) {
  let len = arr.length;
  let count=0;
for(let i=0; i<len; ++i){
    if(arr[i]===0){
        ++count;
    }
}
let modified = arr.filter(e=>e!==0);
for(let i=0; i<count; ++i){
    modified.push(0)
}
  return modified
}

//console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// 53. Reverse an array with 30 bytes to spare

reverse=a=>a.map(a.pop,[...a]);

//console.log(reverse([1,3,2,77,101,6,7,18,9,0,11,22,33,19,55]))


// printFoo=()=> console.log(foo)
// foo = 'foo' // initialization (assignment)
// printFoo()
// var foo; // declaration


// 54. Check if 2 rectangles are intersecting
// Input: 2D array of 2 arrays of 4 integers each, representing bottom left and top right corner coordinates;
// Output: boolean;

// Solution: determine conditions of intersection using input values only
// [[0,1,2,3],[0,1,2,3]]
function areIntersecting(rectangles) {
  let a = rectangles[0];
  let b = rectangles[1];
  if (
    (a[0] < b[2] && a[2] > b[0] && a[1] < b[3] && a[3] > b[1]) ||
    (b[0] < a[2] && b[2] > a[0] && b[1] < a[3] && b[3] > a[1])
  )return true;
     return false
}

//console.log(areIntersecting([[1, 1, 2, 3],[1, 2, 4, 4],]));

// 55. Calculate the intersection surface of two rectangles

function intersectionSurface(rectangles){
    let a = rectangles[0];
    let b = rectangles[1]; 
    // there must be a condition or something
    // get Math.max of x0 and x1 and Math.min of y0 and y1
    return Math.min(
      (a[2] - a[0]) * (b[3] - b[1]),
      (b[2] - b[0]) * (a[3] - a[1])
    );
    // the greater result is the surface of the rectangle with outermost coordinates - min x0, x1 and max y0, y1
}

//console.log(intersectionSurface([[2,3,9,6], [5,1,8,7]]));

// 56. Convert into human-friendly format
// Input: positive integer denoting number of seconds
// Output: string, ex: `${numY} years, ${numD} days, ${numH} hours, ${numM} minutes and ${numS} seconds`
// Every time unit expression should be viewed as a component that is displayed conditionally, depending on the amount of seconds,
// Also the occurence of the letter 's' depends on whether a time unit amount is > 1 or not

// Solution: 
// 1y -- 365days -- 8760h -- 525600min -- 31536000s
// 1day -- 24h -- 1440min -- 86400s
// 1h -- 60min -- 3600s
// 1min -- 60s
// sec = y*31536000 + d*86400 + h*3600 + m*60 + s

function formatDuration(sec) {
  let components = [];
  let tempSec = sec;
  const y = Math.floor(tempSec/31536000);
  if(y) {
   components.push(y>1?`${y} years`:`${y} year`); 
   tempSec -= y * 31536000;
  }
  const d = Math.floor(tempSec / 86400);
  if (d){
   components.push(d > 1 ? `${d} days` : `${d} day`);
   tempSec -= d * 86400;
  } 
  const h = Math.floor(tempSec / 3600);
    if (h) {
      components.push(h > 1 ? `${h} hours` : `${h} hour`);
      tempSec -= h*3600;
    } 
  const m = Math.floor(tempSec / 60);
    if (m) {
      components.push(m > 1 ? `${m} minutes` : `${m} minute`);
      tempSec -= m*60;
    } 
  const s = tempSec;
    if (s) {
      components.push(s > 1 ? `${s} seconds` : `${s} second`);
    } 
let len = components.length;
if(len>1){
 components[len-1] = `and ${components[len-1]}`;   
}
let expression=`${components[0]}`;
for(let i=1; i<len-1; ++i){
 expression+=`, ${components[i]}`
}
if(len>1){
  expression+=` ${components[len-1]}`  
}

  return expression
}

//console.log(formatDuration(32534580))
//console.log(formatDuration(86400));

// 57. Twice linear
// Consider a sequence that consists of n positive integers and for every n there's 2*n+1 and 3*n+1 within the same sequence
// n[0] is 1 and the sequence is in ascending order

function dblLinear1(n){
  let set = new Set();
  set.add(1);
  let arr = [...set];
 for(let i=0; i<n; ++i){
    set.add(arr[i] * 2 + 1);
    set.add(arr[i] * 3 + 1);
    arr = [...set].sort((a,b)=>a-b);
  }
  return arr[n];
};

function dblLinear2(n){
  let arr = [1];
  let val;
 for(let i=0; i<n; ++i){
    val = arr[i] * 2 + 1;
    if(!arr.includes(val)){
        arr.push(val);
    }
    val = arr[i] * 3 +1;
     if (!arr.includes(val)) {
       arr.push(val);
     } 
    arr.sort((a,b)=>a-b); 
  }
  return arr[n];
};


twiceLinear2 = (number) => {
  let series = { 1: 1 };
  let keys = Object.keys(series);
  let index = 0;

  while (index < number) {
    series[keys[index] * 2 + 1] = 1;
    series[keys[index] * 3 + 1] = 1;
    index++;
    keys = Object.keys(series);
  }

  return Number(keys[number]);
};

  // Since the sequence needs to be sorted in ascending order 
   // and simple push(arr[i]*2+1, arr[i]*3+1) won't return such sequence
  // (and sort()-ing after every push() is time-consuming),
  // there needs to be a way to check if a[i+x]<a[i] (where x>=1) and postpone
  // the pushing of a[i] in favour of a[i+x] as many times as necessary.
  // This can be accomplished by introducing 2 different variables (a, b), each to denote
  // an index of a value that may or may not be pushed into the array at the current time
  // depending on how it compares to another value. 

function dblLinear(n){
    let arr=[1];
    let a=0, b=0;
    for(let i=0; i<n; ++i){
       let nextA = arr[a]*2+1;
       let nextB = arr[b]*3+1; 
       let min = Math.min(nextA, nextB);
       arr.push(min);
       min===nextA && ++a;
       min===nextB && ++b;
    }
    console.log(arr)
    return arr[n]
}

// console.log(`with Set: ${dblLinear1(200)}`);
// console.log(`array only: ${dblLinear2(200)}`);
// console.log(`Object keys: ${twiceLinear2(200)}`);
//console.log(`lesser of the two first: ${dblLinear(20)}`)

// 57.a) Thrice linear

function thriceLinear(n){
        let arr = [1];
        let a = 0, b = 0, c = 0;
        for (let i = 0; i < n; ++i) {
          let nextA = arr[a] * 2 + 1;
          let nextB = arr[b] * 3 + 1;
          let nextC = arr[c] * 4 + 1;
          let min = Math.min(nextA, nextB, nextC);
          arr.push(min);
          min === nextA && ++a;
          min === nextB && ++b;
          min === nextC && ++c;
        }
        console.log(arr);
        return arr[n];
}

//console.log(thriceLinear(80))


// 58. Find the divisors
// Input: integer n
// Output: array of integers where input n%arr[i]===0

//Solution:
//Brute force: check the remainder of n%x where 1 < x < n
// if remainder is 0, arr.push(x)

function divisors(n){
 let arr = [];
 for (let i=2; i<n; ++i){
  if (n%i===0) arr.push(i)
 }
 return arr
}

//console.log(divisors(12))

// 59. Tribonacci sequence
// Input: signature -- array of first three numbers in the sequence, n -- integer, the number of values in the returned array
// Output: array of length n

function tribonacci(sign, n) {
  let arr = [...sign];
  while(arr.length < n){
    let len = arr.length;
    arr.push(arr[len-1]+arr[len-2]+arr[len-3])
  }
  return arr
}

//console.log(tribonacci([1,1,1], 10))

// 60. Multiples of 3 or 5
// Input: integer, n
// Output: integer, sum of all numbers divisible by 3 or 5 and less than n
// Should handle invalid input?

// Solution: 
// Brute force O(n): check every number from 3-n and push into a new array
// check for presence of the number that passed the divisibility test in the array first

function sumMultiples(num){
  if(num<3) return 0;
  let sum = 0;
  for (let i=3; i<num; ++i){
    if(i%3===0 || i%5===0){
      sum+=i
    }
  }
  return sum
}

// Reduced time complexity O(1):
// Range 0-n(excluded) contains floor((n-1)/x) multiples of x, floor((n-1)/y) multiples of y and floor((n-1)/xy) multiples of xy
// So the number of multiples of x || y is: floor((n-1)/x) + floor((n-1)/y) - floor((n-1)/xy), or: floor( (n-1)(1/x + 1/y - 1/xy) )
// 

function sumMultiples2(n){
  function numMultiples(x){
    return Math.floor((n-1)/x)
  }
const m3 = numMultiples(3);
const m5 = numMultiples(5);
const m15 = numMultiples(15);
console.log(Math.floor((n-1)*7/15)) // 4
function helper(x, m) {
  return x*(m*m+m)/2  // sum of multiples(m) of x
}
 return helper(3,m3)+ helper(5,m5) - helper(15,m15);
}

// console.log(sumMultiples(10))
// console.log(sumMultiples2(10))

//61. Complementary DNA strand
// Input: string containing uppercase letters only: A, G, T, C; no invalid input;
// Output: -----||----- , A replaced by T, G by C and vice versa

//Solution: 
// create a "cache" of all letter pairs;
// create an empty string str;
// for each letter in the input string, concatenate cache.letter to str
function DNAStrand(dna){
 let pair = {
  "A":"T", "T":"A", "C":"G", "G":"C"
 };
 let str = "";
 const len = dna.length;
 for (let i=0; i<len; ++i){
  str+=pair[dna.charAt(i)];
 }
 return str
}

//console.log(DNAStrand("ACGT"))

// 62. Sort the string
// Input: string, a sentence where each word will contain a number(1-9); may be empty; no invalid input;
// Output: string, rearranged so the words and spaces are preserved, but the order of the words is changed
// so the numbers within the words are in the ascending order within the string; if input is an empty string, return an empty string

// Solution:
// Split the sentence into array of words (wordsArr)
// create a newArray with length === wordsArr.length
// iterate through wordsArr and extract the number out of each word
// use the number to put the word in the correct spot in the newArray
// join the array elements/words

function order(words){
if(!words) return "";
 const wordsArr = words.split(" ")
 const len = wordsArr.length;
 let orderArr = new Array(len);
 const rx = new RegExp(/\d/);
for (let i=0; i<len; ++i){
  let num = wordsArr[i].match(rx);
  orderArr[num-1] = num.input;
}
return orderArr.join(' ')
}

//console.log(order("is2 Thi1s T4est 3a"));


// 63. concatenate one or more letters to the end of a given input string to create a string that reads the same forward as backward.
// Input: string, length >=1, letters only, upper and lower case; no invalid input;
// Output: string;

// Solution:
// create an array from input string
// start the counter i from 1
// while (arr !== arr.reverse())
// arr+=[...arr.slice(0,len), ...arr.slice(0,i).reverse()


const complete = (str) => {
  let base = str.split("");
  let arr = [...base, str.charAt(0)];
  let i = 2;
  while (arr.join("") !== [...arr].reverse().join("")) {
    arr = [...base, ...arr.slice(0, i).reverse()];
    ++i;
  }
  return arr.join("");
}; 

//console.log(complete("aaBB"))

// 64. create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Input: an array of strings and other types of values
// Output: an array of non-strings

// Solution: 
//- array.filter(leave all non-strings)
// step by step: 
// 1. create an empty array
// 2. iterate through input
// 3. check for array elements that are not strings
// 4. push them into new array
// 5. return new array when there's no more elements left



// function filter_list(l) {
//  return l.filter(e=> typeof e !== 'string')
// }

function filter_list(l) {
  const len = l.length;
  let noStr = [];
 for(let i=0; i<len; ++i){
   let e = l[i];
  if(typeof e !== 'string'){
    noStr.push(e)
  }
 }
 return noStr
}

//console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

// 65. Count the number of divisors of a positive integer n.
// Input: positive integer
// Output: positive integer

// Solution: 
// Brute force:
// 0. set counter to 2 
// 1. check remainder of n/x where 1<=x<=n/2 -- n/2 is the largest divisor of n after itself
// 2. if no remainder, increment the counter (previously initialized to 2)
// 3. return the counter value


function getDivisorsCnt(n) {
  let count = 2; // counting in 1 and n right away
  let maxDiv = n/2;
  for (let i = 2; i<=maxDiv; ++i){
    if (n%i == false) ++count;
  }
  return count
}


//console.log(getDivisorsCnt(20))


// 66. Given two congruent circles a and b of radius r, return the area of their intersection rounded down to the nearest integer.


//Input: 2 arrays of 2 integers each (coordinates of each circle), one integer (r); no invalid input;
//Output: integer, area of the intersection

// Solution:
// I - intersection area, S - sector area, T - area of the triangle inside S
// I =  2 * (S - T)
// d - distance between centers
// d = sqrt((x1-x2)^2 + (y1-y2)^2)
// r = small radius 
// if d > 2*r return 0 (no intersection)

// calculating T 
// p - 1/2 distance between two intersection points
// p = sqrt(r^2 - (d/2)^2)
// T  = p * d / 2    

// calculating S
// a - angle opposite 2p
// a = 2 * acos(d/2/r) // radians
// S = r^2 * a / 2 

// calculating I
// I = 2 * (S - T)



function intersectionArea(c1, c2, r){
  const d = Math.sqrt((c1[0] - c2[0]) ** 2 + (c1[1] - c2[1]) ** 2);
  if (d > 2 * r) return 0;
  const p = Math.sqrt(r ** 2 - (d / 2) ** 2); 
  const T = (p * d) / 2; 
  const a = 2 * Math.acos(d / 2 / r); 
  const S = (r ** 2 * a) / 2;

  // console.log(`d = ${d}`)
  // console.log(`p = ${p}`)
  // console.log(`T = ${T}`)
  // console.log(`a = ${a}`)
  // console.log(`S = ${S}`)

  return Math.floor(2 * (S - T));
}
//console.log(`should be: ${intersectionArea([1,2],[5,1], 3)}`)
//console.log(`test: ${intersectionArea([-53, -92], [24, 86], 53)}`);

// 66.b -- 131 chars when bundled
let circleIntersection=(a, b, r)=>{
   m = Math, s = m.sqrt, d = (a[0]-b[0])**2 + (a[1]-b[1])**2;
  return m.floor(r * r * 2 * m.acos(s(d) / 2 / r) - s(d * (r * r - d / 4)));
}

//console.log(circleIntersection([1, 2], [5, 1], 3));

// 67. Reverse the stream of data

// Input: array of n*8 zeros and/or ones representing n bytes; n is a positive integer
// Output: array with bytes/segments of 8 elements in reversed order

// Solution :
// 1. get the number of bytes (input.length/8)
// 2. create a newArray
// 3. for i = bytes; i>0; ++i slice the input array from index 8*(i-1) to 8*i starting from the end
// 4. push the sliced byte to the newArray

function dataReverse(data) {
  const bytes = data.length/8;
  let newArr = [];
  for (let i=bytes; i>0; --i){
    let byte = data.slice(8*(i-1), 8*i)
    newArr.push(...byte)
  }
  return newArr
}

// console.log(
//   dataReverse([
//     1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
//     1, 1, 1, 1, 1, 1, 1,
//   ])
// );



