///JULY 2022

//Fannkuch-redux
  //takes in an array of positive integers
  //takes the array[0], assigns it to n
  //takes the first n number of array elements and reverses their order
     // Steps to reverse the order of numbers:
      // 1. a new empty array should be created - call it arrX
      // 2. arrX[0]...arrX[n] should be array[n-i] where i starts with 1 and increments until n
      // 3. an arrY should be created containing array[n]...array[array.length-1] i.e. all the elements from the array not being flipped
      // 4. assign [...arrX, ...arrY] to array
  //repeats it until array[0] === 1 


  // function fannkuchRedux(arr) {
  //     if (arr[0] !== 1) {
  //     let n = arr[0];    
  //     let arrX = arr.slice(0, n);
  //     let arrY = arr.slice(n)
  //     let arrXrev = [];
  //     for (let i = 1; i <= n; ++i){ 
  //         arrXrev.push(arrX[n-i]) // subtract i (that increments by one with every cycle) from n until i = n -- until arrX[n-n] = arrX[0] -- until the first element of arrX is pushed into the last spot in arrXrev
  //     }
  //     //console.log(arrY);
  //     //console.log(arrXrev);
  //     let newArr = [...arrXrev, ...arrY];
  //     console.log(newArr)
  //     arr = newArr;
  //     fannkuchRedux(arr)
  //   }else{
  //       console.log('arr[0] is 1 now')
  //   }
  // }

  // //fannkuchRedux([4,2,1,5,3])

  // for(let i = 1; i<5; ++i){
  //   document[`value${i}`] = i;
  //   console.log
  // }


  // function toRange(arr) {
  //   let newArr = [];
  //   let len = arr.length;
  //   for (let i = 0; i < len-1; i=i+2){
  //     if(arr[i+1] - arr[i] >= 2){
  //       newArr.push(`${arr[i]}-${arr[i+1]}`)
  //     } else {
  //       newArr.push(arr[i], arr[i+1])
  //     }
  //   }
  //   console.log(newArr.join(','))
  // }


  //  ([ -6, -3-1, , , , , 3-5, , , 7-11, , , , , 14, 15, 17-20, , , ]);

  let myArr = [
    -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
  ];

const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element)); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every


  function theRanger(arr) {
    let nonRange = []; // Array that will contain all the values that don't belong to any range.
    let len = arr.length;
    let rangePlus = []; // Array that will contain all ranges, including subsets
    let validRanges = []; // Array that will contain only longest ranges, which are the only ones I'm interested in.
    let enranged = []; // This will contain ranges in the correct form ('first-last') and non-range numerals. p.s. I know it's not a real word.

    for (let i = 0; i < len-1; ++i){
      if (arr[i]+1 === arr[i+1]){ // This conditional checks if the element to the right of the current element is greater by one than the current element; in other words: whether the current element is eligible for being the start of a range.
       let x = 1;  // Introducing an incrementable.
       let range = [arr[i]];  // Declaring a range with the current value as range[0].
        while ( arr[i+x] === arr[i] + x ) { // Looping through every arr element to the right of arr[i] and while each of them is larger by one than the previous(i.e. larger by x than arr[i])...
          range.push(arr[i+x]) // ..keep adding them to the range;
          ++x;  // Incrementing by one; x denotes the equal numerical difference in index as well as value between the current and arr elements to the right from it.
        }
        if (range.length >= 3) {  // Only ranges that contain 3+ elements are considered in this case. 
        rangePlus.push(range);  
       } 
      }
    }

    rangePlus.forEach(ran => {  // Here we'll go through all the ranges that we stored in rangePlus...
      for(let j=rangePlus.indexOf(ran)+1; j<rangePlus.length; ++j){  // ..and compare each to every range to the right from it.. 
       if (isSubset(ran, rangePlus[j])){ //..in order to check if there are any ranges that contain the exact values that are already within the range they're being compared to..
        delete rangePlus[j]  //...and get rid of them, leaving behind undefined values.
       }
      }
    })

    rangePlus.forEach(ran => {  // This loops through rangePlus again..
      if(ran != undefined){   // ..in order to only get defined values...
        validRanges.push(ran) // ..and push them into a new array.
      }
    })

    let combined = validRanges.join(','); 
    arr.forEach(e => {      
      if(!combined.includes(e)){ // This conditional is looking for the arr elements that aren't in the string which is made out of all values that fall within a range.
        nonRange.push(e)
      }
    })

    for (let i = 0; i < len; ++i){     // This will take each arr element...
      for(let k = 0; k < validRanges.length; ++k){  // ...and every valid range...
        if(arr[i]===validRanges[k][0]){  // .. and will check if an array element is equal to the first element in every valid range,...
          arr[i] = `${validRanges[k][0]}-${validRanges[k][validRanges[k].length - 1]}`; // ...and will replace the arr element with the 'first-last' signature using the first and last element of the corresponding valid range
          for(let y = 1; y < validRanges[k].length; ++y){ //...also, it will delete every arr value on the right side of the current arr element to the extent of the length of the corresponding valid range.
            delete arr[i+y]
          }
        }
      }
     } 
    
    for (let i = 0; i < len; ++i){  
      if(arr[i] != undefined){
        enranged.push(arr[i])  // Finally, this will get all the remaining (defined) values into an new array.
      }
     } 
    console.log(enranged.join(','));
  }
    
  theRanger(myArr)