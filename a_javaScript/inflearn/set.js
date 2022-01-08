
//ES6에서 새롭게 도입한 데이터 자료구조 => map, set

// map => key와 value를 한쌍으로 묶는다는 점에서 객체(object와 비슷
// set은 중복을 허용하지 않는다는 특징을 빼면 배열과 유사)

// SET =============
// 집합
// key, value의 쌍이 있다면 value들의 집합 또는 컬렉션.
// 파이썬 set 비슷
// 특징: 배열은 같은 값을 가질 수 있지만, set(집합)은 같은 값을 중복해서 가질 수 없음.
// 중복해서 같은 값을 추가해봤자 추가 X
// 중복을 제거하는 용도로 많이 씀

// 배열예제
let ar2 = [1,2,3,4,5,5];
console.log(ar2); // 1,2,3,4,5
console.log(ar2[4]); // 5
console.log(ar2[5]); // 5

// set 사용법 =============

// 생성 -> new
// 추가 -> add
// 삭제 -> delete

// 생성 =============
let ar3 = new Set(); 
// 비어있는 set(집합)을 하나 생성
alert(ar3) // object set
// object set 객체를 반환

// 추가 =============
ar3.add('A');
ar3.add('B');
ar3.add('C');
ar3.add('C'); // 중복해도 사이즈 변경X (의미없음)
ar3.add('C');
console.log(ar3); // A, B, C
// 배열: length x -> 집합: size
console.log(ar3[0]); // undefined

// 사이즈 =============
console.log(ar3.size); // 3

// 삭제 =============
ar3.delete('B');
console.log(ar3); // A, C

// 삭제 한꺼번에 모두 삭제: clear()
ar3.clear();
console.log(ar3); //