


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

function findEvenIndex(arr) {
  //forfeited - no shame!
  let sumL = 0;
  // let sumR = arr.reduce((x, y) => x + y, 0);  //popular solution, also slower than for loop?..  https://stackoverflow.com/questions/43556132/javascript-performance-reduce-vs-for-loop
  function sum(a) {
    let total = 0;
    for (let i = 0; i < a.length; ++i) {
      total += a[i];
    }
    return total;
  }
  let sumR = sum(arr);
  let n = -1;
  for (let i = 0; i < arr.length; ++i) {
    i <= 0 ? sumL : (sumL += arr[i - 1]);
    sumR -= arr[i];
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

titleCase("THE WIND IN THE WILLOWS", "The In");