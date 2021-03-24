function squareSum(numbers){
return numbers.reduce((ac,el)=> ac+(el)*el, 0)
}
//p-array of numbers
//r -sum of the numbers
//e- [1,2,2] return 9
//p- for each map, iterate an array reduce