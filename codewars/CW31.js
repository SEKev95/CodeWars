// Get the mean of an array
function getAverage(marks){
  let x = marks.reduce((accumulator, currentValue) => accumulator + currentValue)
  return parseInt(x/marks.length)
}