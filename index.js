


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
  let output = "";
  for (let i = 0; i < len; ++i) {
    let char = str.charAt(i);
    let roman = parseInt(char) * Math.pow(10, len - i - 1);
    for(let j = 0; j < parseInt(char); ++j){
     if (char != 0) {
      output = output
        .concat(roman / char)
        .replace("1000", "M")
        .replace("CCCCCCCCC", "CM")
        .replace("LXXXX", "XC")
        .replace("100", "C")
        .replace("XXXXXX", "LX")
        .replace("XXXXX", "L")
        .replace("XXXX", "XL")
        .replace("10", "X")
        .replace("11111", "V")
        .replace("1", "I");
                     
    }
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

convertToRoman(1990)