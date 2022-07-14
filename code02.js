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
    let rangePlus = [];
    let validRanges = [];
    for (let i = 0; i < len-1; ++i){
      if (arr[i]+1 === arr[i+1]){
       let x = 1; 
       let range = [arr[i]];  
        while ( arr[i+x] === arr[i] + x ) {
          range.push(arr[i+x])
          ++x;    
        }
        if (range.length >= 3) {
        rangePlus.push(range);  
       } 
      }
     
    }
    rangePlus.forEach(ran => {
      for(let j=rangePlus.indexOf(ran)+1; j<rangePlus.length; ++j){
       if (isSubset(ran, rangePlus[j])){
        delete rangePlus[j]
       }
        }
    })
    rangePlus.forEach(ran => {
      if(ran != undefined){
        validRanges.push(ran)
      }
    })
    console.log(validRanges) // I have isolated all the ranges
  }

  theRanger(myArr)