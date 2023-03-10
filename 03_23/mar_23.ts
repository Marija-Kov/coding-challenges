// 88. Calculate n!
// Input: n - integer, no invalid input

function factorial1(n: number): string | null {
    if(n==0) return "1"
    if(n<0) return null
    let f = 1;
    for (let i=2; i<=n; ++i){
     f *= i
    }
    return f.toString()
}

// 88.a) but what if the result is a very large integer and you can't use any built-in methods? 

//console.log(factorial(100)) 
// console.log(factorial(0))
// console.log(factorial(-5))  

// 89. Calculate the sum of two very large integers without using any of the built-in methods
// Input: x, y - numerical strings representing very large integers
// Output: s - numerical string representing the sum of x and y 

// Solution: 
// Think of the "school" way that we add two multi-digit numbers starting from the last digit.
// If the sum of two digits exceeds 9, we write down the last digit and "carry" the first one over adding it to the next sum 
// and repeat the steps as long as necessary to get the result.
// STEPS:
// 1. Convert both x and y into arrays arrX and arrY * or leave them as strings and later get the chars
// 2. get the length of the longer array (len) and add the number of zeros equal to the difference in length to the front of the shorter array 
// 3. Initialize a variable carry = 0 and variable res = []
// 4. Loop through the arrays len times starting from the last element 
// 5. Calculate the sum of Number(arrX[len-i]) + Number(arrY[len-i]) + carry (where 0<=i<=len)
// 6. If the sum has one digit, unshift it to the res array and assign 0 to carry
// 7. If the sum has 2 digits (which is the max):
//  - Get the last digit of the sum: sum % 10 and unshift() it to res
//  - Get the first digit of the sum: Math.floor(sum/10) and assign it to carry 
// Once the end of the loop is reached, we return the res joined into a string

function sumLargeInt(x: string, y: string): string {
    const res: string[] = [];
    const arrX = x.split("");
    const arrY = y.split("");
    const [largerArr, smallerArr ] = arrX.length > arrY.length ? [arrX, arrY] : [arrY, arrX];
    let len = largerArr.length;
    let diff = len - smallerArr.length;
    while(--diff+1){
        smallerArr.unshift("0")
    }
    let carry = 0;
    while(--len+1){
     let sum = Number(largerArr[len]) + Number(smallerArr[len]) + carry;
     if(sum<10){
       res.unshift(String(sum));
       carry = 0 
     } 
     if(sum>=10) {
        res.unshift(String(sum%10));
        carry = Math.floor(sum/10)
     }
    }
    return res.join("")
}

//console.log(sumLargeInt("979797948985892123654789626985", "644761279595954751762464125"));