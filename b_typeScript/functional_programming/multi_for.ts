const suits = ['ㅂ', 'ㅁ', 'ㅇ', 'ㅍ'];
const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const cards: Array<string> = [];
for (const suit of suits) {
  for (const number of numbers) {
    cards.push(suit + number)
  }
}

// 모든 카드 목록은 아래의 작업이 완료된 것
const cards2 =
  // 아래의 작업을 모든 무늬에 적용
  suits.map((suit) =>
    //  아래의 작업을 모든 숫자에 적용
    numbers.map((number) =>
      //   카드는 무늬와 숫자를 연결 한 문자열
      suit + number
    ))
    // => 배열에 중첩된 타입이 나옴 
    // 무늬별로 나누어진 카드를 하나로 합친다.
    // Array<Array<T>> => Array<T>
    .flat()
// 모든 카드 목록은 아래의 작업이 완료된 것

//-> 마지막에 flat() 따로 안하고 flatMap() 사용
const cards3 =
  suits.flatMap((suit) =>
    numbers.map((number) =>
      suit + number
    ))


// 카드는 무늬와 숫자를 연결한 문자열이다.


const main = () => {
  const app = document.getElementById('app');
  if (app === null) {
    return;
  }

  app.innerHTML = `
    <h1>cards</h1>
    <pre>
      ${JSON.stringify(null, null, 2)}
    </pre>
  `
}