
// https://leetcode.com/problems/two-sum/


let nums = [2, 7, 11, 15], target = 9
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /*
  let final;
  nums.reduce((acc, cur, i) => {
    console.log('i', i);
    console.log('acc', acc);
    console.log('cur', cur);
    if (acc + cur == target) {
      console.log("#", target);
      final = i;
      return i;
    } else {
      return acc + cur;
    }
  }, nums[0])
  console.log("###", final, final + 1);
  */

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] + nums[i + 1] == target) {
  //     return [i, i + 1];
  //   }
  // }
  // ERROR

  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;
    if (map.has(num2)) {
      return [i, map.get(num2)]
    }
    map.set(num1, i);
  }
};

// twoSum(nums, target);
// twoSum([3,2,4], 6);

console.log(twoSum(nums, target));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));