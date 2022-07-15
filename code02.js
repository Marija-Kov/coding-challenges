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

  // toRange([
  //   -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  // ]);

  let myArr = [
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ];

  function oneRange(arr) { 
    let newArr = [];
    let len = arr.length;
    for(let i = 0; i < len; ++i){
      if(arr[i+1] != arr[i]+1){ 
        if(arr[i+1] != undefined){
        newArr.push(arr[i], arr[i+1])
        }else{
          newArr.push(arr[i])
        }
      }
    }
    console.log(newArr)
  }

  //oneRange(myArr)

const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element)); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every


  function theRanger(arr) {
    let len = arr.length;
    let rangePlus = []; // Array that will contain all ranges, including subsets
    let validRanges = []; // Array that will contain only longest ranges, which are the only ones I'm interested in.
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
    console.log(validRanges) 
  }

  theRanger(myArr)