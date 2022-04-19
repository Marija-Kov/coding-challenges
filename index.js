


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


function breakCamelCase(string) {
  let len = string.length;
  let char = "";
  for (let i = 0; i < len; i++) {
    char = string.charAt(i);
    preChar = string.charAt(i - 1);
    if (char === char.toUpperCase() && preChar !== "") {
      string = string.replace(char, ` ${char}`);
    }
  }
  console.log(string.toString());
  console.log(typeof string);
}
//breakCamelCase('keechKeechKeech')

function convertToRoman(num) {
  let str = num.toString();
  let len = str.length;
  let output = [];
  let output2 = [];
  for (let i = 0; i < len; ++i) {
    let char = str.charAt(i);
    let roman = parseInt(char) * Math.pow(10, len - i - 1);
    for(let j = 0; j < parseInt(char); ++j){
     if (char != 0) {
      output.push(roman/char);
    }
   }
  }
  console.log(output);

//positive integer
//max 3 same letters in a row
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1000
}

convertToRoman(2022)