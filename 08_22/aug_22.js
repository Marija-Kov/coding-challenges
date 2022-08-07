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

// console.log(arrayDiff([2,2,2], [2]))