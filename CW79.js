// Odd or Even?
function oddOrEven(array) {
    return array.reduce((start,next)=>start+next,0)%2==0?`${'even'}`:`${'odd'}`
}
 
 //P given a list og integers
 //R odd or even, sum of integers
 //E Input: [0, 1, 4]
 //     Output: "odd"
 //P ${} the string in, .reduce method