
let s = "Hello how are you Contestant", k = 4

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  // s.split(' ').
  console.log('실행');
  console.log(s.split(' '));
  // [ 'Hello', 'how', 'are', 'you', 'Contestant' ]

  console.log(s.split(' ').slice(0, k).join(' '));

  return s.split(' ').slice(0, k).join(' ');
};

truncateSentence(s, k);