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


