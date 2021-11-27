
const arr = ['a', 'b', 'c', 'd'];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 'a', 'b', 'c', 'd' x 4
}

let i = 0;
// while, do while 반복을 컨트롤 하는 변수를 바깥쪽 만들어야함

// while: 반복을 시작하기 전에 비교 (조건에 따라 실행이 안될수 있음 )
while (i < arr.length) {
  console.log(arr[i]); // 'a', 'b', 'c', 'd' x 4
  i++;
}

i = 0;

// do: 코드 실행 후 비교 (무조건 한번 실행됨)
do {
  console.log(arr[i]); // 'a', 'b', 'c', 'd' x 4
  i++;
} while (i < arr.length)

// 읽기만 하면 const / 변경시 let
// 처음부터 끝까지 배열을 순회할때 (특정위치에 관심X 경우 사용)
for (const item of arr) {
  console.log(item); // 'a', 'b', 'c', 'd' x 4
}

// arr 키값 위치값 (키의 값을 하나씩 꺼낼 때 사용)
for (const index in arr) {
  console.log(arr[index]); // 'a', 'b', 'c', 'd' x 4
}

const obj = {
  color: 'red',
  width: 200,
  height: 300
}
// obj 키의 값을 필요할때 
for (const index in arr) {
  console.log(arr[index]); // 'color', 'width', 'height' X 3
}