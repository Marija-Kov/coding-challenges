// 29. Mask all but last 4 characters
// Input: string; may be any length (including zero), all valid;
// Output: string; all input string characters but last 4 replaced with a hashtag

function maskify(cc) {
  let arr = [...cc];
  let len = arr.length-4;
  for (let i=0; i<len; ++i){
      arr[i] = '#'
  }
  return arr.join('')
}

// console.log(maskify('4556364607935616'));

// 30. Get the middle character(s)
// Input: string; alphabetical; any case; any length; all valid;
// Output: 1 or 2 consecutive characters in the middle of input; 
          // string; alphabetical; any case; 
          // length: 2 if input length is even. 1 if input length is odd;


function getMiddle(str){
  const len = str.length;
  let mid;
  if (len % 2 === 0){
   mid = str.slice(len/2-1, len/2+1)   
  }else{
   mid = str.slice(Math.floor(len/2), len/2+1)
  }
  return mid
}

// console.log(getMiddle('test'));
// console.log(getMiddle('testyes'));

//31. Find the highest scoring word (substring) in the string. Every letter in a word has the score of its order number in the alphabet.
// If there are 2 same value words in the string, return the first-occurring one.
// Input: string; alphabetical; at least one empty char; lowercase only; always valid;
// Output: string; alphabetical; no empty spaces; included in input;

// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function high(str){
    const words = str.split(' ')
    let max = [''];
    let maxSum = 0;
    const len = words.length;
    for (let i=0; i<len; ++i){
        let word = words[i];
        let sum = [...word]
                    .map(e => alphabet.indexOf(e)+1)
                    .reduce((a,b) => a+b, 0)
        if(sum>maxSum){
            max[0] = word;
            maxSum = sum;
            console.log(max, maxSum)
        } 
    }
   return max[0]
}

// console.log(high('aa b'))
//console.log(high('what time are we climbing up the volcano'))

// 32. Find the largest block of connected black cells on a 10x10 grid;
// Blocks may be horizontal, vertical or any combination of horizontally and vertically oriented sub-blocks.
// Input: comma-separated string of black cell identifiers; any length, including 0; unordered in any way;
//       -first digit is column, second is row;
//        Invalid format: two or more identical cell identifiers, single-digit, non-numerical - should be treated as 00.
// Output: Largest number of connected blocks

// Solution:
// First we need to split the string into an array of identifiers;
// Then we need to look at the sets of identifiers that make blocks to determine how they relate to each other;
// It can be observed that one or the other of these statements is true for such sets:
// 1) Digits at position 0 are the same and digits at position 1 are consequential positive integers;
// 2) Digits at position 1 are the same and digits at position 0 are consequential positive integers.
// * Using this insight we could identify only vertical or only horizontal blocks with quite a bit of calculation.
// Then we would have to figure out if and how any horizontal can be combined with any vertical blocks, which would be quite complicated.
// We could be looking for a little more complex rule of the block, in case it's doable as the shapes of blocks can vary wildly.
// Another approach:
// 1) Get all vertical blocks
// 2) Get all horizontal blocks
// 3) Get the largest block (horizontal or vertical) and make it the largest(max)
// 4) Check if there is any valid contact - overlap - with any opposite-oriented blocks
// 5) If yes, add the number of the opposite-oriented blocks and subtract by 1 (because they overlap/share one cell) to the max and make that new max
// BUT FIRST, how to identify the blocks? How to check if a horizontal/vertical sequence of cells is a block?

//Another approach:
//What if we could represent the grid as a pattern of 0s and 1s where 0 is empty and 1 is a black cell?
// How can we derive this pattern out of the given input identifiers? We can see them as coordinates of the black cells in a 10x10 grid.
// Let the grid be an array of 10 arrays of 10 elements where each subarray represents a row.
// Meaning grid[i] would be a row and grid[i][y] would be a single cell in a row, which is a schema for each of the identifiers that we get in our input string.
// So which digit is [i] and which one is [y]? When we look at the example grid in challenge instructions (https://www.codewars.com/kata/5a306685e1ce0e3fa500010b/train/javascript)
// We see that what we see as grid[0] is in the bottom row and grid[9] at the top. 
// That isn't a reason for concern because the upside-down grid shows the blocks with the same number of cells and that's what we're interested in ultimately.
// So, to start with drawing the pattern based on the input, first we need to make sure that all the identifiers are valid.
// We will filter out any identifiers that are described as invalid in the instructions // runs filter for every arr element 
// ..And remove all the duplicates
// We can also convert all the valid identifiers to numbers and maybe name that array 'ids'
// BUILDING THE PATTERN:
// 1) Create an array 'grid' of 10 arrays of 10 0s
// 2) iterate through the ids array
//  2.1) let row = Math.floor(id/10);
//  2.2) let col = id % 10;
//  2.3) grid[row][col] = 1;
// The pattern is done.
// ⟡ ⦝ √ ⬭ ⦔ ≡ ≢ 
// What do we get out of this pattern, tho? Are we just back to the start?
// Using this pattern we can get the largest number of consecutive 1s in a row/subarray.
// What do we do with that? 
// Can we maybe make the addition of adjacent black cells by checking for values in the same index of two arrays at the same time?
// Btw, adjacent black cells would be ex: grid[0][1] and grid[1][1] or grid[0][1] and grid[0][2];
// That is to say, x and y are adjacent if x = grid[i][j], y = grid[i+1][j] or
//                                         x = grid[i][j], y = grid[i][j+1] . 
// The fact that one cell can have 4 adjacent cells may sound complicated.
// But since we're iterating through our pattern top to bottom/left to right, we will only be checking the cells ahead of the current cell.
// THe thing is, we don't want to be only able to calculate the sum of adjacent black cells to the right and below the current black cell..
// And compare only that sum to the maxSum that we have memoized.
// We want our algorithm to be able to identify more complex blocks of cells that spread in the variety of directions.
// What we can do is mark every black cell(1) that we take into account. We can do it in our pattern by changing 1 to 2 for example.
// So each time we run into a 2 instead of 1, we add the sum to maxSum, instead of comparing it with maxSum -
// But this will only return correct result if we assigned something to maxSum in our previous iteration i.e. 
//..if we were sure that we're going towards larger blocks with every iteration.
// We have to consider that the blocks of random sizes may be scattered all over the grid!

// Let's try some implementation:
// √ Can write pattern
// √ Can count all black cells
// √ Can count max cells in a row
// √ Can count max adjacent cells in a row 
// √ Can count max adjacent cells in a column 


// WHAT IF we could get every black cell to show the number of cells connected to it in the current row + the previous rows 
// so we can conveniently grab the size of a block when we need it?
// Given the example of a block, we can take into account that starting value of every cell is 1 and that the size is 8
// .. we can come up with a rule of addition that would end up giving 8s at the bottom row.
// Example:
//           step 1)        step 2)        step 3)        step 4)        step 5)       step 6)        step 7)      step 8) 
//          [0,0,0,1,0]    [0,0,0,1,0]    [0,0,0,1,0]    [0,0,0,1,0]    [0,0,0,1,0]   [0,0,0,1,0]   [0,0,0,1,0]   [0,0,0,1,0]     
//          [0,0,1,1,0]    [0,0,1,3,0]    [0,0,3,3,0]    [0,0,3,3,0]    [0,0,3,3,0]   [0,0,3,3,0]   [0,0,3,3,0]   [0,0,3,3,0]   
//          [1,1,1,0,0]    [1,1,1,0,0]    [1,1,1,0,0]    [1,2,1,0,0]    [1,2,6,0,0]   [6,6,6,0,0]   [6,6,6,0,0]   [6,6,6,0,0]   
//          [0,0,1,1,0]    [0,0,1,1,0]    [0,0,1,1,0]    [0,0,1,1,0]    [0,0,1,1,0]   [0,0,7,1,0]   [0,0,7,8,0]   [0,0,8,8,0]   
// 
// If for every black tile: grid[i][j] = grid[i][j-1] + grid[i][j] + grid[i-1][j];
// ..and also all the adjacent cells in the current row take the max value in that section of the block
// ..we can see that the number we get at he bottom section of a block is exactly the nnumber of cells in the block
// Since, besides the current value, we're looking at the values above and behind, the iterations should start from index 1 in both directions;
//* We still need to come up with a solution that would, upon reaching the end of the adjacent cell section in one row/array, 
// take the last/highest calculated value, go back and assign it to every adjacent black cell of that block section.

// ⟡ Solution returns the expected output, but very, very slow. Pls optimize.

function solution(input) {
  const grid =[[0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0]];
   const inp = [...new Set((input.split(',')).filter(e => e.length===2 && Number(e) >= 0))];
   if (inp==false) return 0;
   const len = inp.length;
   for (let i=0; i<len; ++i){
     let row = Math.floor(Number(inp[i])/10);
     let col = Number(inp[i])%10;
     grid[row][col] = 1;
   }
const cellSums = () => {
  const allSums = [];
  for (let i=1; i<10; ++i){
    for (let j=1; j<10; ++j){
      if (grid[i][j]===1){
       grid[i][j] = grid[i][j-1] + grid[i][j] + grid[i-1][j]; 
        if (grid[i][j+1]===0){
          allSums.push(grid[i][j]);
          while (grid[i][j-1]!== 0){
            grid[i][j-1] = grid[i][j]
            --j;
          }
        }
      }
    }
  }
  return Math.max(...allSums)
}
// const maxAdjRow = () => {
//   let maxSum = 0;
//   let sum = 0;
//  for (let i=0; i<10; ++i){
//      for (let j=0; j<10; ++j){
//        if (grid[i][j] === 1){
//          ++sum;
//          grid[i][j] = sum; 
//        }
//      if(grid[i][j+1] === 0){
//       if(sum > maxSum){
//        maxSum = sum;
//       } 
//       sum = 0;
//      }
//     }
//    }
//    return maxSum
//   }
// const maxAdjCol = () => {
//   let maxSum = 0;
//   let sum = 0;
//  for(let j=0; j<10; ++j){
//    for(let i=0; i<10; ++i){
//      if(grid[i][j] === 1){
//        ++sum;
//        grid[i][j] = sum; 
//        if(!grid[i+1] || grid[i+1][j] === 0){
//          if(sum > maxSum){
//            maxSum = sum;
//           } 
//           sum = 0;
//         }
//       }
//     }
//   }
//  return maxSum
// }  
//console.log(`cols: ${maxAdjCol()}, rows: ${maxAdjRow()}`)
return cellSums()  
}

// console.log(solution('18,00,95,40,36,26,57,48,54,65,76,87,97,47,00')) // 3 , max 2
// console.log(solution('18,00,95,40,36,26,57,48,54,65,76,87,97,47,00,46'))// 6 , max 5
// console.log(solution('31,32,33')) // 3 , max 3
// console.log(solution('1,a1,-10,100'))







// 33. A special treat ⟡ Roundtrip tickets deal
// You want your mom to visit you at town A, but she's never been in A and is afraid of flying alone all the way from town Z.
// She asks you to come to Z first so you two can travel back to A together and then she returns to Z on her own.
// So you know that you need to book two roundtrip tickets from opposite directions and also consider that
// both of you need to be in the same plane on your flight from Z to A.
// You also want to get the most affordable ticket prices.
// The air travel company can give you the info about the prices for departures on certain days,
// but in order to look for the best price they need to check all the flight date combinations manually
// which is extremely time-consuming, because you're looking into a month's worth database of flights.
// Can you come up with an algorithm that will find the minimum total price for a pair of roundtrip tickets ?
// There is one direct flight from A to Z and one from Z to A each day.
// There are 30 days in the month.
// Each flight has a number and a direction and the ticket price.
// You know that you want to spend 7 days in Z which is also the amount of time your mom wants to spend in A.

// Input: array of flights/objects with number(random 4 digit number), price(random number 100-500) and direction(string 'A-Z' or 'Z-A') properties;
// Output: minimum total ticket prices and numbers of flights taken.




// 34. Return a missing letter in the array
// Input: an array (length >=2) of single-letter strings sorted in alphabetical order. Letters are always in upper OR lower case.
// Output: a single-letter string;

//Solution:
 // write down the alphabet as an array
 // get the length of the input
 // get the alphabetic index of the first letter in the input
 // compare each letter from the input with each letter from the alphabet
 // starting with the index of the first letter in the alphabet
 // pay attention to the case of the input when returning the result

function missingLetter(arr){
 const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
 let start = alphabet.indexOf(arr[0].toLowerCase());
 let len = arr.length;
 for (let i=start, y=0; i<start+len, y<len; ++i, ++y){
   let letter = arr[y].toLowerCase();
   if (alphabet[i]!==letter){
     return arr[y] === letter ? alphabet[i] : alphabet[i].toUpperCase()
   }
 }
}

// console.log(missingLetter(['a','b','c','d','f']))
// console.log(missingLetter(['O','Q','R','S']))

// 35. 3D to 1D array index
// Find the index of a 3D array item ( p[i,j,k] ) in its 1D mapping ( a[y] ).
// Input: i, j, k (as 3D indexes) n, m, l (as array lengths) all positive integers; 0 <= i < n,  0 <= j < m, 0 <= k < l; 
// Output: y, positive integer

// Solution: To get the flattened array item index, we need to 
// know that the flat array length would be n * m * l (n sets of m sets of l).
// We can then say that the range 0,0,0 - i,j,k contains at least i * m * l items 
// to that we add j * l (j sets of l) and the number of items in the last set of l: k
// So the index we're looking for is: y = i * m * l + j * l + k , or:
// y = l * (i * m + j) + k 


function flatArrIndex(i,j,k,n,m,l){
  if(i>=n || j>=m || k>=l){
    throw Error (`You've entered a coordinate that's beyond the scope of the array.`)
  }
  return l * (j + i * m) + k;
}

// console.log(flatArrIndex(2,3,4,3,4,5))

// 36. reverse 35: 
// given the flat array index y and the length of each of 3 dimensions n, m, l
// calculate the coordinates / 3D array index of the same item
// Input: y, n, m, l; all positive integers where: y < n * m * l;
// Output: array of 3 positive integers;

// Solution: 
// Since we know that:  0 <= y <= n*m*l, and:
// 0 <= i < n, 0 <= j < m, 0 <= k < l and also:
// An element with index k is an element of an el. w/ index j is an element of an el. w/ index i and
// y has i * m * l ; So to get the integer i, we'll say: i = Math.floor(y/(m*l));
// To get the integer j, we'll take the remaining portion: y - i * m * l and see how many l-s it contains, so:
// j = Math.floor((y-m*l*i)/l) . Lastly, we get k by subtracting i * m * l and j * l from y.


function threeDIndex(y,n,m,l){
  if (y >= n*m*l){
    throw Error (`Array index argument is out of range`)
  }
 const i = Math.floor(y/(m*l)); 
 const j = Math.floor((y-m*l*i)/l); 
 const k = y - i * m * l - j * l;
 const coordinates = [i,j,k];
 return coordinates

}

// console.log(threeDIndex(45,3,4,5))

// 37. Count smileys - return a number of valid smileys in an array
// Input: Array of strings
// Output: number

// Solution: Given the limited list of valid strings, we can store them in an array: 
// validSmileys = [':)', ';)', ':~)', ';~)', ':-)', ';-)', ':D', ';D', ':-D', ';-D', ':~D', ';-D']
// We can iterate through the input array and ask for each element if validSmileys includes it - that would fire includes() function input.length-1 times


function countSmileys(arr){
  const validSmileys = [
    ":)",
    ";)",
    ":~)",
    ";~)",
    ":-)",
    ";-)",
    ":D",
    ";D",
    ":-D",
    ";-D",
    ":~D",
    ";~D",
  ];
  let len = arr.length;
  let count = 0;
  for (let i = 0; i<len; ++i){
    if (validSmileys.includes(arr[i])){
      ++count;
    }
  }
  return count
}

// console.log(countSmileys([':D',':~)',';~D',':)']));
// console.log(countSmileys([":)", ":(", ":D", ":O", ":;", ":~)", ":D", ";~D"]));
// console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));
// console.log(countSmileys([]));

// 38. Is the number prime ?
// Input: integer
// Output: boolean

// Solution: A number is prime if it's greater than 1 and only divisible by itself and 1;
// 2 is the only even prime number
// If a number > 2 is an even number, it's not prime
// A multi-digit number ending with 3 is prime only if the digit 3 is preceeded by another number n where: n%3 > 0
// if a number ends in 5, it's not prime


// The most trivial, naive solution is better than no solution.

function isPrime(num){
if(num<2){
  return false
} else {
  let prime = true;
    let m = Math.sqrt(num);
    for (let i = 2; i <= m; ++i ){
      if (num % i === 0){
      prime = false;
      break;
      } 
     } 
    return prime 
  }    
}

// console.log(`1. ${isPrime(3)}`);
// console.log(`2. ${isPrime(2)}`)
// console.log(`3. ${isPrime(67280421310721)}`);

// 39. Odd/even one out
// Input: an array of integers, positive and negative; length >= 3; no invalid inputs;
// Output: an integer included in the input array

// Solution: Since there is only one outlier, so if any pair of integers in the input array is odd, the output should be even - and vice versa.
// That means we only need to check 3 numbers in the array to know whether the output will be odd or even
// After we determine whether output is odd or even (and if the outlier doesn't happen to be one of the 3 numbers we just checked),
// we search the rest of the array to find the outlier.

function findOutlier(arr){
  const len = arr.length;
  let even = 0;
  for(let i=0; i<3;++i){
    if(arr[i]%2 ===0){
      ++even;
    }
  }
  if(even>=2){
    for (let i = 0; i<len; ++i){
      if(arr[i]%2 !== 0){
        return arr[i]
      }
    }
  } else {
    for (let i = 0; i < len; ++i) {
      if (arr[i] % 2 === 0) {
        return arr[i];
      }
    }
  }
}

// 40. Is this number too good for you?
// Check if the number is narcissistic.
// Input: Any integer > 0; no invalid inputs;
// Output: boolean

// Solution: A narcissistic number is a number N with a number of digits d where the sum of each digit to the power of d returns N;
// The input can be converted to string and we can loop string.length times to get each of the digits, convert them back to numbers 
// and raise each to the power of string.length. Then we calculate the sum of them and compare it with the input number.

function narcissistic(num){
 let sum = 0;
 let str = num.toString();
 let len = str.length;
 for (let i=0; i<len; ++i){
  let digit = Number(str.charAt(i));
  sum+=Math.pow(digit, len);
 }
 if (sum === num) return true;
 return false
}

// console.log(`1. ${narcissistic(153)}`)
// console.log(`2. ${narcissistic(22)}`);
// console.log(`3. ${narcissistic(45)}`);

// 41. Sum pow digits
// Return an array of numbers indexed 0-i inclusive whose sum of all digits raised to the power of i+1 equals themselves
// Input: two integers, no invalid input
// Output: an array of integers within the range of input values inclusive

// Solution: This is a lot like narcissistic number solution..
// Any single-digit number is automatically included in the output

function sumDigPow(a, b){
  const arr = [];
  for (let i=a; i<=b; ++i){
   if(i<10){
    arr.push(i);
   }else{
    let str = i.toString();
    let len = str.length;
    let sum = 0;
    for(let j=0; j<len; ++j){
      let digit = Number(str.charAt(j))
     sum+=digit**(j+1);
    }
    if(sum === i){
      arr.push(i)
    }
   }
   
  }
  return arr
}

// console.log(sumDigPow(10, 150))

// 42. Given an array of numbers and a target value number, return the indexes of any pair of array numbers whose sum === target value number;
// Make sure time complexity of the algorithm is O(n)
// Input: array of integers, may or may not be unique; no invalid inputs;
// Output: array of two integers - input elements' indexes.

// Solution: 
// In order to access the array values, we need to look by their indexes and in order to 
// check if any pair of values adds up to the target value, we need to do it twice.
// To cut down on time complexity, we'll need to sacrifice some space to a data structure 
// that would allow us to store the input values and their indexes so that we can 
// access them more easily for the purpose of the challenge. Since we need to check for the values that add up to the target and we
// need their indexes only if that turns out to be true, it would be convenient to be able
// to access the value's index by the value itself. We can do this with an object storing 'arr[i]' : i key-value pairs for every value that we check.
// How many values/indexes do we need to store/check? Since we need two values to add up to the target value, that makes it at least 2.
// And it's easy to assume that we don't need to store or even check all the value:index pairs. 
// In this situation it's helpful to think of each value as the value that, subtracted from the target value, either gives or does not give another value from the same array.
// So for every arr[i] we can store its "complementary" value: target - arr[i] with i as one key-value pair.
// That way we made a connection between the value's index and its complementary value that's potentially included in the array.
// Knowing that not every value has the complementary value within the input array we can first ask whether obj[arr[i]] exists 
// (since we're storing indexes as values, we have to consider that 0 is a valid index despite being a falsy value).
// And since we're actually asking whether the current value's complementary's (previously stored as: obj[target-arr[j]], where 0 <= j < i) index has already been stored in the object
// we can not only know whether it's true, but also automatically gain access to the complementary value's index that we need to return.

function sumTarget(nums, target){
    const len = nums.length;
    const obj = {};
  for (let i=0; i<len; ++i){
    if (obj[nums[i]] >= 0) { 
    return [obj[nums[i]], i]
    } 
      obj[target-nums[i]] = i; 
   }
  return null
  }

// console.log(sumTarget([5, 2, 4], 6));