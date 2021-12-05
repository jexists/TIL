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
