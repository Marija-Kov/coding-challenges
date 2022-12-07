// 52. Move zeros to the end
// Input: an array of values of different types
// Output: an array of exact input characters where zeros (number) are moved to the end of array
// the order of non-zero characters must be preserved

// Qs for clarification:
// Handling invalid input?

// Solution
// count and filter out zeros, then push the counted number of zeros into the array

function moveZeros(arr) {
  let len = arr.length;
  let count=0;
for(let i=0; i<len; ++i){
    if(arr[i]===0){
        ++count;
    }
}
let modified = arr.filter(e=>e!==0);
for(let i=0; i<count; ++i){
    modified.push(0)
}
  return modified
}

//console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// 53. Reverse an array with 30 bytes to spare

reverse=a=>a.map(a.pop,[...a]);

//console.log(reverse([1,3,2,77,101,6,7,18,9,0,11,22,33,19,55]))


// printFoo=()=> console.log(foo)
// foo = 'foo' // initialization (assignment)
// printFoo()
// var foo; // declaration


// 54. Check if 2 rectangles are intersecting
// Input: 2D array of 2 arrays of 4 integers each, representing bottom left and top right corner coordinates;
// Output: boolean;

// Solution: determine conditions of intersection using input values only
// [[0,1,2,3],[0,1,2,3]]
function areIntersecting(rectangles) {
  let a = rectangles[0];
  let b = rectangles[1];
  if (
    (a[0] < b[2] && a[2] > b[0] && a[1] < b[3] && a[3] > b[1]) ||
    (b[0] < a[2] && b[2] > a[0] && b[1] < a[3] && b[3] > a[1])
  )return true;
     return false
}

//console.log(areIntersecting([[1, 1, 2, 3],[1, 2, 4, 4],]));

// 55. Calculate the intersection surface of two rectangles

function intersectionSurface(rectangles){
    let a = rectangles[0];
    let b = rectangles[1]; 
    // there must be a condition or something
    // get Math.max of x0 and x1 and Math.min of y0 and y1
    return Math.min(
      (a[2] - a[0]) * (b[3] - b[1]),
      (b[2] - b[0]) * (a[3] - a[1])
    );
    // the greater result is the surface of the rectangle with outermost coordinates - min x0, x1 and max y0, y1
}

//console.log(intersectionSurface([[2,3,9,6], [5,1,8,7]]));

// 56. Convert into human-friendly format
// Input: positive integer denoting number of seconds
// Output: string, ex: `${numY} years, ${numD} days, ${numH} hours, ${numM} minutes and ${numS} seconds`
// Every time unit expression should be viewed as a component that is displayed conditionally, depending on the amount of seconds,
// Also the occurence of the letter 's' depends on whether a time unit amount is > 1 or not

// Solution: 
// 1y -- 365days -- 8760h -- 525600min -- 31536000s
// 1day -- 24h -- 1440min -- 86400s
// 1h -- 60min -- 3600s
// 1min -- 60s
// sec = y*31536000 + d*86400 + h*3600 + m*60 + s

function formatDuration(sec) {
  let components = [];
  let tempSec = sec;
  const y = Math.floor(tempSec/31536000);
  if(y) {
   components.push(y>1?`${y} years`:`${y} year`); 
   tempSec -= y * 31536000;
  }
  const d = Math.floor(tempSec / 86400);
  if (d){
   components.push(d > 1 ? `${d} days` : `${d} day`);
   tempSec -= d * 86400;
  } 
  const h = Math.floor(tempSec / 3600);
    if (h) {
      components.push(h > 1 ? `${h} hours` : `${h} hour`);
      tempSec -= h*3600;
    } 
  const m = Math.floor(tempSec / 60);
    if (m) {
      components.push(m > 1 ? `${m} minutes` : `${m} minute`);
      tempSec -= m*60;
    } 
  const s = tempSec;
    if (s) {
      components.push(s > 1 ? `${s} seconds` : `${s} second`);
    } 
let len = components.length;
if(len>1){
 components[len-1] = `and ${components[len-1]}`;   
}
let expression=`${components[0]}`;
for(let i=1; i<len-1; ++i){
 expression+=`, ${components[i]}`
}
if(len>1){
  expression+=` ${components[len-1]}`  
}

  return expression
}

//console.log(formatDuration(32534580))
//console.log(formatDuration(86400));