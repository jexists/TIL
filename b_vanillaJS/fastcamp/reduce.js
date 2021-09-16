const numbers = [1, 2, 3, 4, 5]

// let sum = 0;
// numbers.forEach(n => {
//   sum +=n;
// })
// console.log(sum);

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

// reduce((accumulator누적된값, current현재값)=> 어떻게 연산할지, accumulator기본값/초기값)

const sum = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);
console.log(sum);

// reduce((accumulator누적된값, current현재값, index몇번째아이템, array총자신)=> 어떻게 연산할지, accumulator기본값/초기값)