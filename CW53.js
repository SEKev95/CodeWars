
// Is n divisible by x and y?
function isDivisible(n, x, y) {
  return n%x === 0 && n%y === 0
}
//p- given a number represented as n
//r true or false on if the n is divisable
//e n=3, x=1, y=3 would be true cause 3 is divisible by 1 and 3
//p % to go into it