const sourceObject = {
  traits: {
    first_name: {
      value: 'joy',
      source_id: 1,
      updated_at: 162323232323,
    },
    email_opened_last_30_days: {
      value: 33,
      source_id: 2,
      updated_at: 162323232323
    }
  },
  cursor: {
    url: '/vv1/spaces/lgjsa',
    has_more: false,
    next: ''
  }
  // 얇은 복사일 경우 traits & cursor만 복사됨 
  // first_name, email 복사안됨
};

// 객체 -> 참조형
// 참조 매커니즘: 변수를 옮겨 다녀도 원본은 하나이기 때문에 다른곳에서 바뀌면 원본도 변경

// 깊은 복사 deep copy
// -> 객체를 완전하게 복사
// -> 문자열로 만든후 다시 객체로 변환
// 새롭게 만든 객체로 완전하게 연결을 끊고 복사 시키는 것
// 객체의 데이터가 클경우 성능이 안좋음
const newObject1 = JSON.parse(JSON.stringify(sourceObject));

// 얕은 복사 shallow copy
// 첫번째 객체는 복사 안쪽에 있는 객체는 참조
const newObject2 = Object.assign({}, sourceObject);
// object.assign 새로운 객체를 만들고 복사할 object주기
const newObject3 = { ...sourceObject };

console.log(sourceObject.traits.first_name.source_id); // 1

newObject1.traits.first_name.source_id = 100; // 깊은 복사

console.log(sourceObject.traits.first_name.source_id); // 1

newObject2.traits.first_name.source_id = 100; // 얕은 복사

console.log(sourceObject.traits.first_name.source_id); // 100

newObject3.traits.first_name.source_id = 500; // 얕은 복사

console.log(sourceObject.traits.first_name.source_id); // 500

// 복사하는 유틸리티 함수
function deepCopyObject(obj) {
  const clone = {}; // x8 
  for (const key in obj) {
    if (typeof obj[key] == "object" && obj[key] != null) { // x18
      // 재귀호출
      clone[key] = deepCopyObject(obj[key]);
    } else {
      clone[key] = obj[key]; // x12
    }
  }

  return clone; // x8
}

const newObject4 = deepCopyObject(sourceObject);

console.log(sourceObject.traits.first_name.source_id); // 500

newObject4.traits.first_name.source_id = 1000; // 깊은 복사 (함수)

console.log(sourceObject.traits.first_name.source_id); // 500

const store = {
  user: null,
  cart: [],
  config: {
    multiDevice: false,
    lastLoginDate: 'Wed Jun 09 2021 20:46:55 GMY+0900',
  }
}

// object를 새롭게 병합하면서 만들수 있음
const newObject5 = {
  ...deepCopyObject(store),
  config: {
    ...store.config,
    lastLoginDate: new Date(),
  },
};

console.log(newObject5);

const DefaultSyle = {
  color: '#fff',
  fontColor: '#999',
  fontSize: 14,
  fontWeight: 200,
};

// 디폴트 값을 설정하는 테크닉
// 디폴트를 적고 사용자가 준 옵션 덮어쓰기
function createParagraph(config) {
  config = { ...DefaultSyle, ...config };

  console.log(config);
}

createParagraph({ fontSize: 12 });