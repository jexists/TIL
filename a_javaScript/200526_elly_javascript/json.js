// JSON.

//Object to JSON
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json); //true

json = JSON.stringify(['apple', 'banana']);
console.log(json);//["apple", "banana"];

const rabbit = {
  name: 'tori',
  color: 'white',
  size: 'null',
  birthDate: new Date(),
  // symbol: Symbol('id'),
  jump: () => {
    console.log(`${name} can jump!`);
    
  }
};

json = JSON.stringify(rabbit);
console.log(json);
//함수,Symbol:('id') => JSON에 포함 X

//replacer
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json); //{'name':'tori', 'color':'white'}


json = JSON.stringify(rabbit, (key, value) => {
  console.log((`key: ${key}, value: ${value}`));
  return value;
});
console.log(json);


json = JSON.stringify(rabbit, (key, value) => {
  console.log((`key: ${key}, value: ${value}`));
  return key === 'name' ? 'ellie': value;
});
console.log(json); 


// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
let obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump() //error

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); //error

//reviver
obj = JSON.parse(json, (key, value) => {
  console.log((`key: ${key}, value: ${value}`));
  return value;
});
// console.clear();
console.log(obj);

obj = JSON.parse(json, (key, value) => {
  console.log((`key: ${key}, value: ${value}`));
  return value;
});
console.log(obj);
console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate());

obj = JSON.parse(json, (key, value) => {
  console.log((`key: ${key}, value: ${value}`));
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

//json diff.com - json 비교 (디버깅)
//json beautifier - json 포멧 이쁘게
// json parser - json 타입 -> object로 확인
// json validator - json 유효성 확인