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
books.forEach((book: string, idx: number, books:string[]) => {
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
const bookTitleToBookObject = (book:string) => ({title: book});
// 커링
const makeAuthor = (name: string) => (book: Book) => ({
  ...book,
  author: name
});

const shakespearTwoBooks: Book[] = books
  .map(bookTitleToBookObject)
  .map(makeAuthor("William Shakespeare"));

console.log(shakespearTwoBooks);