// 객체 & 배열 => 하나의 값이지만 여러개의 값을 담고 있다.
// 객체 -> 각각의 이름과 값 (이름의 묶음값)
// 배열 -> 여러개의 값이 묶여있는데 (위치 값 존재)

// 배열 기본 개념

// 배열 생성
const books = []; // 빈배열
const books_list = ['a', 'b', 1, 2];

// 배열 데이터 넣기
books[0] = '핸리 6세 제1부'
books[1] = '핸리 6세 제2부'
books[2] = '핸리 6세 제3부'

// 배열 데이터 넣기 (마지막에 추가)
books.push('리처드 3세');
books.push('실수 연발');
books.push('말괄량이 길들이기');

console.log(books);
console.log(books.length); //6
// 마지막 인덱스 == length - 1

books.pop();
books.pop();

// 데이터 꺼내오기 (마지막)
console.log(books);
console.log(books.length); // 4

// 꺼내올 데이터 위치 지정가능
const oneBooks = books.slice(1, 2); 

console.log(oneBooks);
console.log(books); // slice는 원래 있는 배열 수정X
console.log(books.length); // 4

// 꺼내온자리에 추가도 가능 (원본배열 수정)
const twoBooks = books.splice(1, 2, '햄릿', '오셀로', '리어왕');

console.log(twoBooks);
console.log(books); // 원래있는 배열 변화
console.log(books.length); // 5


// 앞 데이터 빼기
twoBooks.shift();
console.log(twoBooks);

// 앞 데이터 추가
twoBooks.unshift('한여름 밤의 꿈')
console.log(twoBooks);

// 배열의 모든 원소를 하나의 문자열로 만듬
const allBooks = books.join(); // default ,
console.log(allBooks);

// 문자열 -> 배열 (구분자)
const newBooks = allBooks.split(',');

console.log(newBooks);

console.log(oneBooks);
console.log(twoBooks);

// 배열 합치기
const nextBooks = oneBooks.concat(twoBooks);
console.log(nextBooks);

const nextBooksList = [...oneBooks, twoBooks];
console.log(nextBooksList);