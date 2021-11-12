// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    // console.log(x);
    const original = x.toString().split("");
    
    // console.log(original.join(''));
    // console.log(original.reverse().join(''));
    return original.join('') == original.reverse().join('') ? true : false;
};

// split -> number 불가능 (문자열 변환필요: toString)
// reverse -> array 거꾸로 뒤집기
// join -> array 합치기 *('')없을경우 따음표포함 합쳐짐
console.log(isPalindrome(121)); // 121 true
console.log(isPalindrome(-121)); // 121- false
console.log(isPalindrome(10)); // 01 false
console.log(isPalindrome(-101)); // 101- false
console.log(isPalindrome(123)); // 321 false