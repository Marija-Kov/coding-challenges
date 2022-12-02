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

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
