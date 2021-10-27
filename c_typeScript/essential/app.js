
function addAgeJS(age) {
  return age + 1;

  // 체크해야하는 코드를 만들어야한다.
  // if (typeof age === 'number') {
  //   return age + 1;
  // } else {
  //   return 
  //   throw 'ERROR/!'
  // }
}

let ageJS = addAgeJS(30);
console.log(ageJS); // 30

ageJS = addAgeJS('30');
console.log(ageJS); // 301