// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // 실패한 풀이
    // let plus = parseFloat(digits.join('')) + 1;
    // console.log(plus);
    // return plus.toString(10).split("");


    // 성공한 풀이

    for (var i = digits.length - 1; i >= 0; i--) {
        if (++digits[i] > 9) {
            digits[i] = 0
        } else {
            return digits
        };
    }
    console.log('##', digits);
    digits.unshift(1);
    return digits;
};


// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([0]));
console.log(plusOne([9]));
console.log(plusOne([1, 2, 9]));

// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));