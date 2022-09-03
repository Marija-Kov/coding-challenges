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

// function maxProduct(arr, n){
//     let input = arr;
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

// Find minimum price and buy on that day
// Look for maximum price from one spot after the min price
// subtract max from min
function maxProfit(prices) {
 return Math.abs(Math.min(...prices) - Math.max(...prices.slice(prices.indexOf(Math.min(...prices)))))
}

console.log(maxProfit([11,7,10,6,10,8,9,11]))

