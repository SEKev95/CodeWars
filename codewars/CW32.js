// Generate range of integers
function generateRange(min, max, step){
let arr = []
for(let i = min; i <= max; i+=step){
  arr.push(i)
 }
  console.log(min, max, step)
  return arr 
}