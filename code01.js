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
  // for i = 2**[i]
  let sum = 1;
  let chessboard = [1];
  for(let i = 1; i<64; ++i){
   chessboard.push(chessboard[i-1]*2);
   sum += chessboard[i - 1] * 2;
 }
 console.log(chessboard, sum, chessboard.length)
}

async function randomArray(){
//will create an array of random integers 0 - 100
let arr = [];
for (let i = 0; i < 10; ++i){
  let num = Math.round(Math.random()* 100); 
  arr.push(num);
}
return arr
}


async function getMinIndex() {
  let arr = await randomArray();
  let m = Math.min(...arr);
  let iMin = arr.indexOf(m)
  console.log(arr, m, iMin)
}

// getMinIndex();


let arrrr = [1, 2, 3, 5];
let arr1 = [1, 2, 3, 5];
delete arrrr[0] // unlike in object literals, where the whole key:value pair is deleted, only the value under the stated index is deleted - the length stays the same and everything else is where it was before the deletion 
arr1.length = 3; // resizes the array removing / adding items from the end; the added items are empty items
arr1.length = 10;



function convertToString(input){

  let converted;
  if (typeof input === "number" || typeof input === "boolean") {
    converted = `"${input}"`;
  } else if (typeof input === "object") {
    //assign empty array to converted
    //loop through the array
    //if val is a number, converted.push(val)
    //if val is a string, converted.push( ** double quotes removed, single added : slice off the first)
    converted = double2Single(input);
  }
  console.log(converted)
}

// convertToString(Math.PI)
// convertToString(true)
// convertToString([1, 2, 3, "bleep"])

function double2Single(arr){
  let str = '';
  for (let i = 0; i < arr.length; ++i){
    if(typeof arr[i] === 'string'){
    str += `'${arr[i]}', `
    } else if ( typeof arr[i] === 'number'){
      str += `${arr[i]}, `;
    }
  }
  console.log(`[${str.slice(0, Number(str.length-2))}]`)
}

const collection = []; // array literal
collection.length = 100;
collection[50] = 'a';
//console.log(collection);

const another = new Array('a', 50);  //constructor
//console.log(another);

let url = `https://api.nasa.gov/planetary/apod?api_key=UZFUhnbzOzEyEcXZQNXcWHmzlq6af93DHddH1BOU&date=2022-04-22`;
async function getData(){
  let res = await fetch(url);
  let data = await res.json();
  console.log(res, data)
}


let keech = "poozh" //simple assignment


//console.log(keech.charCodeAt(3)) // ASCII code
//console.log(String.fromCharCode(80, 111, 111, 122, 104)) 

//on .bind():

let spareRoom = {  
  shelf : 'book', // there's a shelf in the spareRoom with a book on it
  getBook : function() {
    return `Please get me the ${this.shelf} from this shelf`
  }
}

let livingRoom = spareRoom.getBook;  

//console.log(livingRoom()) // imagine going to the livingRoom and asking about the book that you left on a shelf in a different room without being explicit about the location of the shelf (the name of the room) the book is on


let itsInTheSpareRoom = livingRoom.bind(spareRoom); // binding context(.bind(context)) is like specifying where the shelf the book you're asking for is on (spareRoom)
console.log(`${itsInTheSpareRoom()}. But go to the spareRoom first, it's where the shelf is`)

//console.log(livingRoom())
//console.log(`I've put a book on this shelf in the spare room. ${spareRoom.getBook()}`)

let c = [1, 2, 3, 4]

function* generateY(){
  yield 1;
  yield 2; 
  yield 3;
  yield 4;
}
function* generateS(){
  let len = c.length;
for (let i = 0; i < len; ++i){
  yield c[i]
}
return
}
let gen1 = generateY();
let gen = generateS()
console.log(gen.next())
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
