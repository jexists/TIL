// 일급 함수
// 함수를 일반적인 값처럼 변수를 넣는다.

// 인자가 함수로 들어오는 케이스
function ul(child: string): string {
  return `<ul>${child}</ul>`;
}
function ol(child: string): string {
  return `<ul>${child}</ul>`;
}

function makeLi(
  container: (child: string) => string, // 함수
  contents: string[] // 문자열배열
): string {
  const liList = [];
  for (const content of contents) {
    liList.push(`<li>${content}</li>`);
  }
  return container(liList.join(''));
}

const htmlUL = makeLi(ul, ['월', '화', '수', '목', '금', '토', '일']);
const htmlOL = makeLi(ol, ['봄', '여름', '가을', '겨울']);

console.log(htmlUL);
console.log(htmlOL);


// 반환값으로 함수인 경우 =======

function salePrice(discountRate, price) {
  return price - (price * (discountRate * 0.01));
}

console.log('여름 세일 - ', salePrice(30, 567000));
console.log('겨울 세일 - ', salePrice(10, 567000));

function discountPrice(discountRate) {
  return function (price) {
    return price - (price * (price * 0.01))
  }
}

console.log('여름 세일 - ', discountPrice(30)(567000));
console.log('겨울 세일 - ', discountPrice(10)(567000));

let summerPrice = discountPrice(30);
let winterPrice = discountPrice(10);

// 변수에 넣을 수 있다는 장점이 생겨서 좋음 (아래 코드가 알기 쉽다.) -> 표현력 극대화
console.log('여름 세일 - ', summerPrice(567000));
console.log('겨울 세일 - ', winterPrice(567000));