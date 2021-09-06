//exercise 1: function who prints all numbers that divide by 3 without extract
function  divideBy3(num){
    for(let i = 3; i <= num ; i++){
        if(i % 3 === 0 ){
            console.log(i)
        }
    }
}
divideBy3(17)



//exercise 2: function who recieves 2 numbers ans will print all numbers betweem :
function allNumbersBetween(x,y){
    while(x <= y){
       console.log(x++)
    }
}
allNumbersBetween(4,8);



//exercise 3: function who recieve 1 num and check if its a prime number
let isPrime = true
function isPrimeNumber(number){
    for(let i = 2; i < number; i++){
        if (number % i === 0){
           isPrime = false
        }
    }
    if(isPrime){
        console.log("is a prime number")
    } else{
        console.log("is not a prime number")
    }
}
isPrimeNumber()


//exercise 4
function isAbleToSum(x,y){
    while(y % x === 0){
        y++ //just for stopping the loop
        console.log(true)
    }
    return false
}
isAbleToSum(4,12) // true false

//without loop
function isAbleToSum(x,y){
        if(y % x === 0){
            console.log(true)
        } else {
            console.log(false)
        }
}
isAbleToSum(4,12) 




//exercise 5 
function loveMeNot(num) {
   for(let i = 1; i <= num; i++){
       if(i % 2 !== 0){
           console.log("love me")
       } 
       else if (i % 2 === 0) {
           console.log("love me not")
        }
    }
}
loveMeNot(5)