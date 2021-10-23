
// import classA, { Hello, user } from './type'
import HelloHi, { Hello, user } from './type'

const helloMessage: Hello = {
  text: 'hello world'
}
console.log('hello world');

console.log(user.name);

// new classA().a();

const u: HelloHi = {
  hi() { },
  text: 'h'
}