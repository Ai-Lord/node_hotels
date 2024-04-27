var fs = require('fs');
var os = require('os');
// fs file system to create file and link it
// os module get details from pc
var user = os.userInfo();
console.log(user);

fs.appendFile('greeting.txt', 'Hi ' +user.username+ '!\n', ()=> console.log('File is created'));