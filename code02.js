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


  function fannkuchRedux(arr) {
      if (arr[0] !== 1) {
      let n = arr[0];    
      let arrX = arr.slice(0, n);
      let arrY = arr.slice(n)
      let arrXrev = [];
      for (let i = 1; i <= n; ++i){ 
          arrXrev.push(arrX[n-i]) // subtract i (that increments by one with every cycle) from n until i = n -- until arrX[n-n] = arrX[0] -- until the first element of arrX is pushed into the last spot in arrXrev
      }
      //console.log(arrY);
      //console.log(arrXrev);
      let newArr = [...arrXrev, ...arrY];
      console.log(newArr)
      arr = newArr;
      fannkuchRedux(arr)
    }else{
        console.log('arr[0] is 1 now')
    }
  }

  fannkuchRedux([4,2,1,5,3])