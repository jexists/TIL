const a = 3;
const b = 3;

console.log(a + b);

function ab() {
  // 비동기처리
  setTimeout(() => {
    console.log("in setTimeout");
  })
}

const d = ab();
console.log("end of line...");

// callback hell -> promise 처리

console.log('-------------');

function asyncFunc(param) {
  return new Promise((resolve, reject) => {
    // 비동기
    setTimeout(() => {
      if (param) resolve({ data: 'resolve' });
      else reject(new Error('rejected!'));
    }, 1000)
  })
}
console.log('try.....');
asyncFunc(true)
  .then(v => {
    console.log(v.data);
    // return v.data.length
    // return asyncFunc(v.data.length > 4);
    return asyncFunc(v.data.length > 14); //ERROR
  })
  // .then(length => console.log(length));
  .then(({data}) => 
    console.log(data)
  )
  .catch(error => {
    console.log(error.message);
  });

  // 3개 promise 동시 실행 -> 전체가 다 resolve 됬을 때 배열로 리턴
  Promise.all([ //all vs race
    asyncFunc(true),
    asyncFunc(true),
    // asyncFunc(false),//REJECT
    asyncFunc(true)
  ]).then(v => {
    console.log(v);
  }).catch(error => {
    console.log(error)
  });

  console.log('end.....');
  