'use strict';

//JavaScript is synchronous.
//execute the code block by orger after hoisting
//hoisting: var, function declareation 
//var 변수와 함수 호출은 맨 위로 나온다.

console.log('1');

//Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(()=> console.log('hello'));


//Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(()=> console.log('async callback'), 2000);

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(()=> {
      (id === 'jexist' && password === '1234') ||
      (id === 'code' && password === '4321')
    })
  }
  getRoles(user,)
}
