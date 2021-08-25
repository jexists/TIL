// async.await

// syntactic sugar
// clear style of using promise

// 1. async
/*
function fetchUser() {
  //do newwork request in 10 secs...
  return 'jexists';
}
//promise 사용
function fetchUser() {
  return new promise((resolve, reject) => {
    // return 'jexists'
    resolve('jexists');
  });
}
*/
//async 사용
async function fetchUser() {
  // promise로 변경됨
  return 'jexists'
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return 'apple';
}

async function getBanana() {
  await delay(3000);
  return 'banana';
}

// promise로 변경시
// function getBanana() {
//   return delay(3000)
//     .then(() => 'banana');
// }

/*
// callback지옥
function pickFruits() {
  return getApple().then(apple => {
    return getBanana().then(banana => `${apple} + ${banana}`);
  });
}

pickFruits().then(console.log);

*/


// async function pickFruits() {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }

async function pickFruits() {
  try {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
  } catch (err) {
    return '에러처리가능';
  }
}

pickFruits().then(console.log);