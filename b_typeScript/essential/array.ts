type Book = {
  title: string;
  copyright?: string;
  author?: string;
};

const books: string[] = [
  '헨리 6세',
  '리처드 3세',
  '실수 연발',
  '말괄량이 길들이기',
  '헨리 8세'
];

// 식을 이용한 배열순회 (forEach)
// forEach(원소데이터, index, 배열원본 전체)
// for문보다 성능이 떨어진다
books.forEach((book: string, idx: number, books: string[]) => {
  console.log(book, idx);
})

// map -> 순회가 끝나면 하나의 배열로 만든다음에 리턴함
// 원본 배열에서 데이터를 입력받아 함수가 리턴한 데이터로 새로운 배열을 만들어서 반환
const bookObjects: Book[] = books.map((book: string) => {
  return {
    title: book,
    author: undefined
  };
});

console.log(bookObjects);


// map 두번 연결하기 (중간 배열이 필요없을때 )
const ShakespeareOneBooks: Book[] = books.map((book: string) => ({
  title: book
})).map((book: Book) => ({
  ...book,
  author: "William Shakespeare"
}));

console.log(ShakespeareOneBooks);


// 표현이 더 쉽게..,
const bookTitleToBookObject = (book: string) => ({ title: book });
// 커링
const makeAuthor = (name: string) => (book: Book) => ({
  ...book,
  author: name
});

const shakespearTwoBooks: Book[] = books
  .map(bookTitleToBookObject)
  .map(makeAuthor("William Shakespeare"));

console.log(shakespearTwoBooks);

// filter 입력한 함수가 true인 경우만 모아서 리턴
const henry: Book[] = shakespearTwoBooks.filter((book: Book) =>
  book.title.includes("헨리")
)

console.log(henry);

const someNumbers: number[] = [10, 5, 3, 14, 56];

// reduce 누적함수
const sumNumber = someNumbers.reduce((a: number, b: number) => a + b, 0)

console.log(sumNumber);

type SomeObject = {
  [key: string]: string | number;
}

const someObjects: SomeObject[] = [
  { border: "none" },
  { fontSize: 24 },
  { className: "box sm-box" }
];

const someObject: SomeObject = someObjects.reduce(
  (a: SomeObject, b: SomeObject) => ({ ...a, ...b }), {}
)

console.log(someObject);


// 유사배열

function sumNumbers(): number {
  return Array.from(arguments).reduce((a: number, b: number) => a + b, 0)
}

//arguments reduce 함수x -> 유사배열이기 때문
// function sumNumbers1(): number {
//   return arguments.reduce((a: number, b: number) => a + b, 0)
// }

// console.log(sumNumbers(10, 20, 30, 40, 50));

// 유사배열 => 배열 로 변경
// Array.from(유사배열)

// 가변인자 처리하는 함수
function sumNumbersForTypescript(...args: number[]): number {
  return args.reduce((a: number, b: number) => a + b, 0)
}
console.log(sumNumbersForTypescript(10, 20, 30, 40, 50));