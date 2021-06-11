// Can we divide it?

const isDivideBy = (number, a, b) => 
number % a === 0 && number % b === 0;

//P create function
//R if an integer number is divisible by each out of two arguments.
//E (-12, 2, -6)  ->  true
//  (-12, 2, -5)  ->  false
//P numbers, a b
