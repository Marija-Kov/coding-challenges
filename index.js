


function expandedForm(num) {
  let str = num.toString();
  let len = str.length;
  let output = "";
  for (let i = 0; i < len; ++i) {
    let char = str.charAt(i);
    if (char != 0) {
      output = output + `${parseInt(char) * Math.pow(10, len - i - 1)} + `;
    }
  }
  console.log(output.slice(0, output.length - 3)); //pay attention to all empty spaces at the end
}

//expandedForm(324567)  // SOLVED


function breakCamelCase(string) { // SOLVED
  console.log(string.replace(/[A-Z]/g, function(match){
    return ' '+ match
  }));

  
}

//breakCamelCase('keechKeechKeech')









function convertToRoman(num) {
  let str = num.toString();
  let len = str.length;
  let output = "";
  for (let i = 0; i < len; ++i) {
    let char = str.charAt(i);
    let roman = parseInt(char) * Math.pow(10, len - i - 1);
   // for(let j = 0; j < parseInt(char); ++j){
     if (char != 0) {
      output = output
        .concat(roman)        
   // }
   }
  }
  console.log(output);

//positive integer
//max 3 same letters in a row
// I     1       IV   4   (1 + 5)        DC  600   (500 + 100)
// V     5       VI   6   (5 + 1)        CM  900   (100 + 1000)
// X     10      IX   9   (1 + 10)       III   111
// L     50      XL   40  (10 + 50)      XXX   101010
// C     100     LX   60  (50 + 10)      CCC   100100100
// D     500     XC   90  (10 + 100)     MMM   100010001000
// M     1000    CD   400 (100 + 500)
}

function findEvenIndex(nums) {
  //forfeited - no shame!
  let sumL = 0;
  // let sumR = nums.reduce((x, y) => x + y, 0);  //popular solution, also slower than for loop?..  https://stackoverflow.com/questions/43556132/javascript-performance-reduce-vs-for-loop
  function sum(a) {
    let total = 0;
    for (let i = 0; i < a.length; ++i) {
      total += a[i];
    }
    return total;
  }
  let sumR = sum(nums);
  let n = -1;
  for (let i = 0; i < nums.length; ++i) {
    i <= 0 ? sumL : (sumL += nums[i - 1]);
    sumR -= nums[i];
    sumL === sumR ? (n = i) : n;
  }
  console.log(n);
}

function titleCase(title, minorWords) {
  let titleC = title.toLowerCase().split(' ');
  let minor = minorWords.toLowerCase();
  for(let i = 0; i<titleC.length; ++i){
    if(!minor.includes(titleC[i])){
      titleC[i] = titleC[i].replace(`${titleC[i].charAt(0)}`,`${titleC[i].charAt(0).toUpperCase()}`);
    }
  }

let firstLetter = titleC.join(' ').charAt(0);
let titleCased = titleC.join(' ').replace(`${firstLetter}`, `${firstLetter.toUpperCase()}`)
console.log(titleCased)


}

// titleCase("THE WIND IN THE WILLOWS", "The In");   //Solved, but still needs to handle undefined

class Polygon {
  constructor(sides, length) {
  this.sides = sides;
  this.length = length;
  }

  total() {
    return this.sides * this.length
  }
}

let heptagon = new Polygon (5, 2);


let dog = {
  name: 'Keech',
  bark() {
    console.log(`${this.name}: "woof woof yap yap"`);
  }
};

// console.log(dog.bark())




let dogSound = dog.bark;
//console.log(dogSound()); 

let dogNoise = dog.bark.bind(dog);

// console.log(dogNoise());

function createPhoneNum(){
  const nums = [];
   for (let i = 0; i < 10; ++i){
    nums.push(Math.floor(Math.random() * 10));
   } 
   console.log(`(${nums[0]}${nums[1]}${nums[2]}) ${nums[3]}${nums[4]}${nums[5]}-${nums[6]}${nums[7]}${nums[8]}${nums[9]}`)
}

//createPhoneNum()

function maxBall(v0){
let g = 9.81;
let v = v0*5/18;
let h = v**2/g;
let t = Math.round(v/g * 10);
  console.log(`${t}, ${h}`)
  
}

// maxBall(37)
// maxBall(45);
// maxBall(99);
// maxBall(85);

function validBraces(braces) {
//for each opening brace has to be a symmetrically positioned closing brace
//in other words each set of open/close braces 
//has to be positioned so the opening brace index is lower 
//than a closing brace index
//and can't contain anything between them
//but null or other symmetrical sets of open-close braces 
const br = Array.from(braces);
let i;
let n = 0;
let l = br.length-1;
   for( i = 0; i < br.length/2; ++i ){
     if (`${br[n + i]}${br[l - i]}` === "{}") {
       console.log(`valid - ${br[n + i]}${br[l - i]}`);
     } else if (`${br[n + i]}${br[l - i]}` === "()") {
       console.log(`valid - ${br[n + i]}${br[l - i]}`);
     } else if (`${br[n + i]}${br[l - i]}` === "[]") {
       console.log(`valid - ${br[n + i]}${br[l - i]}`);
     } else {
       console.log(`not valid - ${br[n + i]}${br[l - i]}`);
     } 
   }

  for( i = 0; i < br.length-1; ++i ){
    if(`${br[i]}${br[i+1]}` === '()') {
      console.log(`valid - ${br[i]}${br[i + 1]}`);
    } else if (`${br[i]}${br[i + 1]}` === "{}" ) {
      console.log(`valid - ${br[i]}${br[i + 1]}`);
    } else if (`${br[i]}${br[i + 1]}` === "[]" ) {
      console.log(`valid - ${br[i]}${br[i + 1]}`);
    } else {
      console.log(`not valid - ${br[i]}${br[i + 1]}`);
    }
    }

}

// validBraces('{{{[][(){}]]}}}')


class Contractor {
  constructor(name, role) {
    this._name = name;
    this._role = role;  //without underscore after "this." returns an error
    }

    get name(){   // without the getter returns undefined
      return this._name
    } 

    get role(){ 
      return this._role
    } 

    sayHello(){
      console.log(`hello, my name is ${this._name} and I'm on the ${this._role} team`)
    }

}

class Front extends Contractor{
  constructor(name, role, tech){
    super(name, role)
    this._tech = tech;
    this._role = 'front';
  }

  get tech() {
    return this._tech
  }

  sayHello() {
    console.log(`hello, I'm ${this._name}, I work on the ${this._role} end and I write cool ${this._tech}`)
  }
}

class Back extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }

  sayHello() {
    console.log(
      `hello, I'm ${this._name}, I work on the back end and I write cool ${this._tech}`
    );
  }
}


// let keech = new Front ('keechy', 'front', 'javascript')
// // console.log(keech.sayHello());


// let poozh = new Back ('poozha', 'back', 'node')

// console.log(keech.name)
// console.log(poozh.role);



class Bread {
  constructor(flour, liquid, yeast) {
    this._flour = flour;
    this._liquid = liquid;
    this._yeast = yeast;
  }

  get flour() {
    return this._flour
  }

  get liquid() {
    return this._liquid
  }

  get yeast() {
    return this._yeast
  }

  mixBread() {
    console.log(`add ${this._liquid} to ${this._flour} with a little ${this._yeast}`);
  }
}

class flatBread extends Bread {
  constructor(flour, liquid, yeast, gear){
    super(flour, liquid, yeast)
    this._gear = gear;
  }

  get gear() {
    return this._gear
  }

  makeFlat(){
    console.log(`add any flour to oat milk with no yeast and take a ${this._gear}`)
  }
}

let oatMilkFlatBread = new flatBread('wheat flour', 'oat milk', 'no yeast', 'pan');

let ryeBread = new Bread('rye flour', 'water', 'dry yeast');

console.log(oatMilkFlatBread.gear)
console.log(oatMilkFlatBread.flour);
console.log(ryeBread.mixBread())

// function addItem(item, arr = []) {
//   arr.push(item);
//   console.log(arr)
// }

// addItem('foo')
// addItem('bar')

// let upperBody = {
//   head: [
//     {
//       ears: 2,
//       nose: 'alright',
//       cheeks(){
//         return 'not to be confused with buttcheeks'
//       }
//     },
//     {
//       mouth: 'opens when needed',
//       speak() {
//         if(this.mouth){
//           console.log(`mouth ${this.mouth}, good job!`)
//         }

//       }
//     }
//   ],
//   shoulders: 'wide',
//   arms: 'flappy',
//   torso: 'flexible'
// }

// let lowerBody = {
//   pelvis: 'mobile',
//   legs: 'strong',
//   feet: 'piscean'
// }

// let body = {...upperBody, ...lowerBody, hasSoul: false, tellMeMore(){
//   return `the torso is ${this.torso} while arms are ${this.arms} and the pevis is quite ${this.pelvis}. ${this.head[0].cheeks()}`
// } };

// console.log(body.tellMeMore())

// let clone = Object.assign({chill: true}, body);

// console.log(clone.head[1].speak());

