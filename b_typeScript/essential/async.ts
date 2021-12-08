// 비동기 함수

// 인자로 ms millisecond 단위를 받는다.
// return promise에 resolve, reject 될때 문자열
// 랜덤으로 성공 또는 실패 반환
function delay(ms: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.floor(Math.random() * 10) % 2 === 0) {
        resolve('success');
      } else {
        reject('failure');
      }
    }, ms);
  });
}

delay(3000)
  .then((result: string) => {
    console.log('done promise!' + result);
  })
  .catch((error: string) => {
    console.error('fail promise!' + error);
  });

async function main() {
  try {
    console.log('start job');
    
    const result = await delay(3000);
    console.error('done async!' + result);
  } catch(e) {
    console.error('fail aynct' + e);
  }
}

main();