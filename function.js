// function add(a,b){
//     return a+b
// }

// var add = function(a,b){
//     return a+b
// }

// var add = (a,b) => {return a+b}

// var add = (a,b) => a+b

// var result = add(808,18)
// console.log(result)

function callback(){
    console.log("Now adding is successfully completed")
}

const add = function(a,b,callback){
    var result=a+b;
    console.log('result: ' +result);
    callback();
}
const index = require('./index.js');
add(333,3324,callback);

var result = index.c
console.log(result)