

async function fn() {
  console.log('a');
  console.log('b');
  //ajax console.log('c'); //외부 API work => API
  //api로 보내는 작업
  //이래서 await을 사용
  console.log('d');
  console.log('c');
  console.log('e');
}

// 디바운스 => loadah, underscore
// 검색창 예치는대로 실시간 검색

//쓰로뜨 => 10초동안 막는다.

// await fun() //에러: async내에서 await 함수를 사용해야함

let a = `{"_name": 10, "babo": 13}`;
let b = `true`;
const obja = JSON.parse(a)
const objb = JSON.parse(b)

// fetch => res.json()

const fetch = fetch('naver.com');
console.log(fetch); //promise pending
// fetch에서는 promise 리턴함

fetchData(); //외부에서 데이터를 받아오는 녀석
try {
  await fetchData();

  if (result[1]) throw new Error();
  //에러가 발생했다면
} catch (err) {
  console.log(err);
}

await fetchData().catch((err) => console.log(err));

const errorHandle = (promise) => {
  return promise.then((result) => [null, result])
    .catch((err) => [errpr, result]);
}

const result = await errorHandle(fetchData); // []
//fullfill [null, 결과]
//reject [error, null]
if (result[1]) throw new Error();


fetchData()// 3초

await fetchData(); //3초후에 완료
await fetchData(); //3초후에 완료
await fetchData(); //4초후에 완료
await fetchData(); //3초후에 완료
//total 13초

const result = Promise.all([fetchData(),fetchData(),fetchData(),fetchData()]).catch(err => console.log(err));
//total 4초후 

userArr = await userFetch() || [];
userArr.forEach((_user)=>{ //hash값
  const _name = UTILITES.getValueFromHash(_user.name);
  // const email = _user;
  _user.name = _name; //undefined (forEach에서는 await에서 사용못함)
});

//for문에서는 await을 사용가능하지만 시간을 다 기달려서 시간이 많이 걸림

//=> 그래서 프로미스올 사용

const promises = userArr.map((_user) => {
  UTILITES.getValueFromHash(_user.name)
  // 실행순서는 보장안됨..
})

const result = await Promise.all(promises) || []
//모아놓은 프로미스 all병렬처리 (한꺼번 처리) [user1, user2, user3] //저장할경우는 다르게 나옴..[인덱스 컬럼을 넣음]