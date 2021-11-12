//1. Declaration 선언
const arr1 = new Array1();
const arr2 = [1, 2]

//2. Index position
const colors = ['red', 'blue'];
console.log(colors)// (2) ['red', 'blue']
console.log(colors.length); //2
//배열의 첫번째를 찾을 경우 index "0" 활용
console.log(colors[0]); //red
console.log(colors[1]); //blue
console.log(colors[2]); //undefined
//배열의 마지막을 차즐 경우 "총 길이 - 1"
console.log(colors[colors.length - 1]); //blue

//3. Looping over an array
//a. for
for (let i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}
//b. for of
for(let color of colors) {
	console.log(color);
}
//c. forEach
colors.forEach(function () {
	console.log('ha');//ha => "2" => lenght 2개이기 때문에 2번 호출
});
colors.forEach(function (color, index, array) {
	console.log(color, index, array);
});
//화살표 함수 사용 & 정리
colors.forEach((color) => console.log(color));
//4. add, delete, copy
//push: add an item to the end
colors.push('orange', 'pink');
console.log(colors); //red, blue, orange, pink
//pop: remove an item from the end
colors.pop();
console.log(colors); //red, blue, orange
colors.pop();
console.log(colors); //red, blue 
//unshift: add an item to the beginning
colors.unshift('gray');
console.log(colors); //gray, red, blue
//shift: remove an item to the beginning
colors.shift();
console.log(colors); //red, blue
//*speed: shift, unshift (slow) < pop, push (fast)
// => pop & push 권장 (속도때문)

//splice: remove an item by index position
colors.push('pink', 'gray');
console.log(colors); //red, blue, pink, gray
colors.splice(1);
console.log(colors); //red
//spice(index#) => 인덱스만 적을 경우 적은 인덱스 이후 다 삭제
colors.splice(1, 1);
console.log(colors) //red, pink, gray
//splice(index#, delete#) => 지우고 싶은 인덱스, 지우고 싶은 갯수(optional)
colors.splice(1, 1, 'white');
console.log(colors); //red, white, gray
//splice(index#, delete#, addItems, addItems) => 삭제한 자리에 추가 가능

//combine two array
const color1 = ['blue', 'red'];
const color2 = ['white', 'black'];
const newColors = color1.concat(color2);
console.log(newColors); //blue, red, white, black


//searching
//indexOf: fine the index
console.log(colors); //red, white, gray
console.log(colors.indexOf('red')); //0
console.log(colors.indexOf('purple')); //-1 => 배열안에 없는 값이 출력될 경우
//includes: check present or not
console.log(colors.includes('gray')); //true
console.log(colors.includes('purple')); //false

//*
console.log(colors); //red, white, gray
colors.push('red');
console.log(colors); //red, white, gray, red
console.log(colors.indexOf('red')); //0 => 첫번째 값만 
console.log(colors.lastIndexOf('red')); //3 => 마지막 값만 


// document.getElementsByClassName
// document.getElementsByName
// document.getElementById
// document.getElementsByTagName
// document.getElementsByTagNameNS

// document.querySelector
// document.querySelectorAll
