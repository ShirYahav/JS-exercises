//exercise 1
const myArray = [1,5,8,10,4,5,11,2,3]

function arraySum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum;
}
//arraySum(myArray)

//exercise 2
function avg(arr){
    let average = 0;
    for(let i = 0; i < arr.length; i++){
        average = arraySum(arr) / arr.length
    }
    return average;
}
avg(myArray)

//exercise 3
function sumOfNumbersGreaterThan(arr, num){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > num){
            sum = sum + arr[i]
        }
    }
    return sum;
}
sumOfNumbersGreaterThan(myArray, 7)

//exercise 4
function howManyTimeANumberExist(arr, num){
    let times = 0
    for(let i = 0; i < arr.length; i++){
        if(num === arr[i]){
            times += 1
        }
    }
    return times;
}
howManyTimeANumberExist(myArray, 5)

//exercise 5
function newEvenArray(arr){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
newEvenArray(myArray)

//exercise 6 
const studentGrades = [
    {firstName : "Eli", grades: [90,80,60]},
    {firstName : "avi", grades: [95,100,78]}
]
function studentAvg(arr){
    let studentAvareg = [];
    for(let i = 0; i < arr.length; i++){
        let grades = arr[i].grades;
        studentAvareg.push
        ({ firstName: arr[i].firstName , avarage: avg(grades)})
    }
    return studentAvareg;
}
studentAvg(studentGrades)