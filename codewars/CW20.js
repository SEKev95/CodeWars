// a function that takes in 2 numbers, push every in between those number into an array

function twoNums(num1, num2){
    let arr = []
    if(num1==0 && num2==0){
       return "its zero"  
    }else if (num1==num2){
        return "oh shit its the same"
    }else {
        for(let i = num1; i <= num2; i++){
            arr.push(i)
        }
    }
  
}