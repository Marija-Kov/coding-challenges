
function solution(string) {
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
  console.log(output.slice(0, output.length - 3)); //pay attention to empty spaces at the end
}

expandedForm(324567)
