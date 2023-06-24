


// function sum2 (n){
//     if( n == 1 ) return 1;

//     return n + sum2(n-1)

// }



// console.log("sum2 of n : " , sum2(5))

// function sum (n){
//     if(n == 0) return n;
//     return n + sum(n-1)
// }

// n= 5
// console.log(sum(n))



// Week 10 – Day 5: Coding Challenge

// Q-1 ) Given two number x and y, find product using recursion.


// Input : x = 5, y = 2
// Output : 10




// recursive function to calculate
// multiplication of two numbers
// function product(x, y)
// {
//     // if x is less than
//     // y swap the numbers
//     // if (x < y)
//     //     return product(y, x);
 
//     // iteratively calculate
//     // y times sum of x
//     // if (y != 0)
//     if( y == 0) return y;

//     return (x + product(x, y - 1));
 
//     // if any of the two numbers is
//     // zero return zero

// }

// console.log(product(5, 2));

// Q1.

// function fib(n) {
   
    
//     if(n == 0 || n == 1) return n;
    
//     return fib(n - 2) + fib(n - 1 );
    
    
// };
// console.log(fib(5));

// // Q2.

// var reverseString = function(s) {
//     return s.reverse();
//  };

// a = [3,1,2,4];
// function so(a){

function rec (x,y){

    if(x == 1 || y == 1) return 1;

    return rec(x-1,y) + rec(x,y-1);


}

let x = 4;
let y = 4;

console.log(rec(x,y));


