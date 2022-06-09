// JUNE 2022

import fetch from 'node-fetch';

function likes(names) {
  //takes in array of names
  //if array is empty, return: "no one likes this"
  //if arr.length is 1, return: arr[0] + " " + "likes this"
  //if arr.length is 2, return: arr[0] + " " +  "and" + " " + arr[1] + " " + "like this"
  //if arr. length is 3, return: arr[0]+ "," + " " + arr[1] + " " +  "and" + " " + arr[2] + " " + "like this"
  //if arr.length is 4+, return: arr[0]+ "," + " " + arr[1] + " " +  "and" + " " + (arr.length-2) + " " + "others like this"

  //some questions:
  //will the array contain only strings?
  //how do I handle the non-string values in the array? Filter them out? Replace them?


  if (names.length === 0){
      console.log('no one likes this')
  } else if (names.length === 1) {
      console.log(`${names[0]} likes this`)
  } else if (names.length === 2){
      console.log(`${names[0]} and ${names[1]} like this`);
  } else if (names.length === 3){
      console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
  } else if (names.length > 3){
      console.log(`${names[0]}, ${names[1]} and ${names.length - 2} others like this`)
  }

}

// likes([])
// likes(["keech"]);
// likes(["keech", "poozh"]);
// likes(["keech", "poozh", "cecee"]);
// likes(["keech", "poozh", "cecee", "pij", "chook", "woo"]);


// let arr = [];
// let v2 = arr.push(7);

// console.log(arr)
// console.log(v2)



async function getDeck(){
  try {
    let response = await fetch(  //** 
      "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    // console.log(response);  // this logs a 'raw' Response object 
    const result = await response.json();
     console.log(result); 
  } catch (err) {
    console.log(err);
     }

}

//** Error: "fetch is not defined"? The solution here: https://everythingfla.com/javascript-fetch-is-not-defined/




/// CLONING 

let greet = {
    esp: 'hola',
    eng: 'hi',

    sayHi(){
        return `${this.esp} is ${this.eng} in Spanish`
    }

} 

// console.log(greet)
// greet();

let copy = greet.toString()
let arr = Array.from(copy);
let copy2 = Object.assign({}, greet);
//console.log(copy);
//console.log(arr);
//console.log(copy2); // {}
//console.log(copy2()); //TypeError: not a function

function deepClone(greet) {
  
  if (!greet) return greet;

  let greetCopy = Array.isArray(greet) ? [] : {};

  let value;
  for (const key in greet) {
    if (Object.is(greet[key], greet)) continue;
    value = greet[key];
    greetCopy[key] = typeof value === "object" ? copy(value) : value;
  }

  console.log(greetCopy);
}

// deepClone(greet)



function isValidWalk(walk) {
  //walk is always an array of 10 one-alphabet-letter strings that can only be 'n', 's', 'w' and/or 'e'
  //walk is valid if for each 'n' there is an 's' and for each 'w' an 'e'
 if (walk.length === 10) {
  let north = 0; let south = 0; let west = 0; let east = 0;
  for (let i = 0; i<10; ++i) {
    if (walk[i] === "n") {
      ++north; 
    } else if (walk[i] === "s") {
      ++south; 
    } else if (walk[i] === "w") {
      ++west; 
    } else if (walk[i] === "e") {
      ++east; 
    }
  }
  return north === south && west === east;
}
return false

}

function countRice(){
  //array members will always be numbers
  let sum = 1;
  let chessboard = [1];
  for(let i = 1; i<64; ++i){
   chessboard.push(chessboard[i-1]*2);
   sum += chessboard[i - 1] * 2;
 }
 console.log(chessboard, sum, chessboard.length)
}

countRice()