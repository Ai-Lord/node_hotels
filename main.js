// var hour = 15

// if(hour<12){
//     console.log("You are not allowed")
// }
// else{
//     console.log("You are allowed")
// }

// const ages =[32,43,25,10,16]
// const result = ages.filter(checkAge);

// function checkAge(age){
//      return age<=18
// }
// console.log(result)

var prompt = require('prompt-sync')()
const age = prompt("Please enter your age: ");
if(age<18){
    console.log("You get a 20% discount!")
}
else{
    console.log("You get a 30% senior discount!")
}
