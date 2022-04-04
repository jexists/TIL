## Array - 배열

- Table of Contents

## Array

- 값을 순차적으로 저장하는 용도
- 표기형식: 대괄호 [ ]

### 배열 생성하기

```jsx
let colors = ['red', 'green', 'blue'];

//배열 요소의 개수 확인하기
console.log(colors.length); //3

console.log(colors);
//(3) ["red", "green", "blue"]
```

### 인덱스 사용해서 배열 요소 찾기

```jsx
let colors = ['red', 'green', 'blue'];
//배열의 첫번째 요소는 0부터 시작
colors[0] //"red"
colors[1] //"green"
colors[2] //"blue"
colors[3] //undefined

//배열의 마직막 요소 찾기
colors[colors.length - 1] //"blue"
```


### 배열 요소 새로운 값 할당하기 = 대입 연산자 사용

```jsx
let colors = ['red', 'green', 'blue'];

console.log(colors);
//(3) ["red", "green", "blue"]

colors[0] = 'black';
console.log(colors);
//(3) ["black", "red", "blue"]
```

### 배열 반복하기

```jsx
let colors = ['red', 'green', 'blue'];
colors.forEach(function(item, index, array) {
	console.log(item, index);
});
//red 0
//green 1
//blue 2
```


## 원본 배열 수정하는 메서드

### push() - 배열 마지막에 새로운 요소 추가 → 배열 요소 개수 반환

```jsx
let colors = ['red', 'green', 'blue'];
let lastAdd = colors.push('black'); //4

console.log(colors);
//(4) ["red", "green", "blue", "black"]
```

### pop() - 배열 마지막 요소 삭제 → 제거한 요소 반환

```jsx
let colors = ["red", "green", "blue", "black"];
let lastDel = colors.pop(); //"black"

console.log(colors);
//(3) ["red", "green", "blue"]
```

### unshift() - 배열 처음에 새로운 요소 추가 → 배열 요소 개수 반환

```jsx
let colors = ["red", "green", "blue", "black"];
let firstAdd =// colors.unshift("white"); //5

console.log(colors);
//(5) ["white", "red", "green", "blue", "black"]
```

### shift() - 배열 첫번째 요소 삭제 → 제거한 요소 반환

```jsx
let colors = ["red", "green", "blue", "black"];
colors.shift(); //"red"

console.log(colors);
//(3) ["green", "blue", "black"]
```

### splice() - 원하는 위치에 배열 요소 추가 & 삭제

array.splice(start, deleteCount, addElem);

[**삭제하는 경우]**

- array.splice(시작할 배열 요소, 삭제할 요소 개수);

```jsx
let colors = ["red", "green", "blue", "black"];

//삭제하는 경우 (원본 배열 수정)
let removedColor = colors.splice(0, 1);

console.log(removedColor); //["red"]
console.log(colors); //(3) ["green", "blue", "black"]
```

[**추가하는 경우]**

- array.splice(수정할 배열 요소, 삭제할 요소 개수/default:0, 추가할 요소);

### reverse()

### sort()

### indexOf() - 배열요소 인덱스 찾기

```jsx
let colors = ["red", "green", "blue", "black"];
let indexNo = colors.indexOf('black');

console.log(indexNo); //3
```

from()

참고자료

[DevDocs](https://devdocs.programmers.co.kr/javascript/global_objects/array)