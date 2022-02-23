# Proxy

- 목차

**Proxy, Proxy Trap, Reflect**

→ getter로 값을 구하면 바로 엔진이 처리

→ proxy가 먼저 처리한 후, 엔진에게 넘겨주는 형태

→ 확장성 부여

# Proxy

→ [사전적의미] 대리, 대신

→ 중개자

→ 기본 오퍼레이션(operation)을 중간에서 가로채어 오퍼레이션을 대리, 대신하여 실행

→ 가로채어 실행하더라도 전체 괘도를 벗어날 수 없으므로 오퍼레이션을 완전하게 변경 불가능

## 기본 오퍼레이션

```jsx
//커리를 주문하는 기본 오퍼레이션: 
//1. 주문을 받는 카운터로 가서 커피주문
//2. 카운터가 커피를 전달
//counter.order = getter
const counter = {order: '커피'};
//counter.order실행하면 '커피;를 구하는 행위(값 구하는 메소드 필요)
// -> 엔진은 getter기능을 가진 내부 메소드 "GET" 호출
const 주문자 =  counter.order;
console.log(주문자); //커피
```

### ECMAScript 스펙의 기본 오퍼레이션 (13)

**Internal Method / Handler Method**

1. [[GetPrototypeOf]]	getPrototypeOf
2. [[SetPrototypeOf]]	setPrototypeOf 
3. [[IsExtensible]]	isExtensible 
4. [[PreventExtensions]]	preventExtensions 
5. [[GetOwnProperty]]	getOwnPropertyDescriptor 
6. [[DefineOwnProperty]]	defineProperty 
7. [[HasProperty]]	has 
8. [[Get]]	get 
9. [[Set]]	set 
10. [[Delete]]	deleteProperty 
11. [[OwnPropertyKeys]]	ownKeys 
12. [[Call]]	apply 
13. [[Construct]]	construct

[Proxy와 Reflect](https://ko.javascript.info/proxy)

[ECMAScript® 2019 Language Specification](https://262.ecma-international.org/10.0/#sec-proxy-object-internal-methods-and-internal-slots)

## Proxy 모습

→ 왼쪽 사람의 말을 받아 오른쪽 사람에게 말하고 오른쪽 사람에게서 밥을 받아 왼쪽 사람에게 전달 (중간에서 대리 역할)

→ 왼쪽 사람이 오른쪽 사람에게 직접 말하고 밥을 받으면 Proxy가 필요X

## Proxy 논리

```jsx
const target = { food: '밥' };
const middle = new Proxy(target, {});
const left = middle.food;
console.log(left); //밥
```

→ middle.food 실행하면 proxy의 getter가 호출되며 proxy에서 target의 getter를 호출하면서 'food'를 파라미터로 넘겨줌, new Proxy()파라미터에 target을 작성하므로 middle에서 target을 알 수 잇음.

# target

→ Proxy 대상 오브젝트

→ Array, Object 등 사용

→ const obj = new Proxy(target, {}) 형태

→ 첫번째 파라미터에 target 작성

→ Proxy 인스턴스 생성 = Proxy인스턴스, target 연결

# trap

→ OS(operating System)에서 사용하는 용어

→ 실행 중인 프로그램에 이상이 발생했을 때 실행을 중단하고 사전에 정의된 제러로 전환

→ const handler = {...}

→ 오브젝트에 get(), set()

→ handler(핸들러): 핸들러 오브젝트

```jsx
const target = {food: '밥'};
const handler = {
	get(target, key) {
		return target[key] + ', 수저';
	},
	set(target, key) {
	}
};
const middle = new Proxy(target, handler);
const left = middle.food;
console.log(left); //밥, 수자
```

- get(), get() → trap

# new Proxy()

→ 파라미터: target(대상오브젝트), handler  오브젝트

→ 반환: 생성한 Proxy인스턴스

→ Proxy 인스턴스 생성하여 반환

→ 첫번째 파라미터: Proxy대상 target 오브젝트 작성, Object, Array Function 등

→ 두번째 파라미터: 핸들러 작성

```jsx
const target = ['a', 'b'];
const handler = {
	get(target, key) {
		return target[key] + ', 첫번째';
	}
};
const obj = new Proxy(target, handler);
console.log(obj[0]); //a, 첫번째
```

- new연산자 사용안하고 Proxy()호출 → TypeError발생

# Proxy.revocable()

→ 파라미터: target(대상오브젝트), handler  오브젝트

→ 반환: 생성한 오브젝트

→ Proxy를 사용할 수 없는 상태로 바꿀 수 있는 오브젝트를 생성, 반환

```jsx
const target = {point: 100};
const handler = {
	get(target, key) {
		return target[key];
	}
};
const obj = Proxy.revocable(target, handler); //=new Proxy(target, handler) 같다
console.log(obj.proxy.point); //100

obj.revoke();
//[isRevoked]=>true (obj.proxy.point실행하면 에러 발생)
try {
	obj.proxy.point;
} catch {
	console.log('proxy기능 사용불가');
};
```

### revoke()

→ [[isRevoked]] 값을 true로 설정하여 Proxy가 실행되지 않도록 설정

# set()트랩

→ 파라미터: target(대상 오브젝트), key(프로퍼티key), value(프로퍼티값), receiver(설명참조)

→ 프로퍼티를 설정하는 트랩으로 target 또는 receiver에 프로퍼티(key, value)설정

**set()트랩을 작성하지 않은 형태**

```jsx
const target = {};
const obj = new Proxy(target, {});
obj.point = 100;
console.log(obj.point) //100
```

→ set()트랩이 호출되면 엔진이 실행 환경을 분석하여 파라미터 값 설정

```jsx
const target = {};
const handler = {
	set(target, key, value, receiver) {
		target[key] = value + 200;
	}
};
const obj = new Proxy(target, handler);
obj.point = 100;
console.log(obj.point) //100
```

## set()트랩 호출

→ 값을 할당하면 set() 트랩이 호출

→  Object.create(proxy, {프로퍼티})

**인스턴스에 없는 프로퍼티 설정**

```jsx
const target = {};
const handler = {
	point: 700,
	set(target, key, value, receiver) {
		target[key] = value + 200;
	}
};
const proxy = new Proxy(target, handler);
const obj = Object.create(proxy, {
	bonus: {value: 500, writable: true}
});
obj.point = 100;
console.log(obj.point); //
```

**인스턴스에 있는 프로퍼티 설정**

```jsx
const target = {};
const handler = {
	set(target, key, value, receiver) {
		target[key] = value + 200;
	}
};
const proxy = new Proxy(target, handler);
const obj = Object.create(proxy, {
	point: {value: 100, writable: true} //값 변경할려면 writable: true
});
obj.point = 700;
console.log(obj.point); //700
console.log(target.point); // undefined
```

→ Reflect.set()

→ set()트랩에서 target값 설정

```jsx
const target = {};
const handler = {
	set(target, key, value, receiver) {
		//target[key] = value + 200;
	}
};
const obj = new Proxy(target, handler);
obj.point = 100;
console.log(obj.point); //undefined
```

## set()트랩 준수사항 (invariant)

→ 준수사항을 지키지 않으면 에러 발생하거나 처리되지 않는다.

→ target의 프로퍼티가 data 디스크립터일 때 [[Writable]]: false또는 [[Cofigurable]]: false이면 프로퍼티값을 설정 불가 (DEFAULT값 = writable :false)

```jsx
const target = {};
Object.defineProperty(target, "point", {
	value: 500, writable: false
});
const handler = {
	set(target, key, value, receiver) {
		target[key] = value + 200;
	}
};
const obj = new Proxy(target, handler);
console.log(obj.point = 100); //100
console.log(obj.point); //500
```

→ target의 프로퍼티가 악세서 디스크립터일 때 [[Cofigurable]]: false이면 프로퍼티값을 설정 불가

set()트랩의 4번째 파라미터에 Proxy 인스턴스 설정

```jsx
const target = {point: 100};
const handler = {
	set(target, key, value, receiver) {
		console.log(Object.is(target, receiver)); //false
		console.log(receiver.point); //100
	}
};
const obj = new Proxy(target, handler);
obj.point = 500;
```

Object.create()로 생성한 인스턴스 설정

```jsx
const target = {point: 100};
const handler = {
	set(target, key, value, receiver) {
		target[key] = value + 200;
		target.title = receiver.title + '.js';
		return true;
	}
};
const proxy = new Proxy(target, handler);
const obj = Object.create(proxy, {
	title: {value: "책"}
});
obj.point = 100;
console.log(obj.title); //책
console.log(target.title); //책.js
```

### set()트랩에서 this는 handler오브젝트 참조

```jsx
const target = {point: 100};
const handler = {
	point: 123,
	set(target, key, value, receiver) {
		console.log(this.point); //123
		this.book = '책';
	}
};
const obj = new Proxy(target, handler);
obj.point = 500;
console.log(handler.book); //책
console.log(target.book); //undefined
```

# get() 트랩

→ 파라미터: target(대상오브젝트), key(프로퍼티 key), receiver(설명참조)

→ 반환: 프로퍼티 값

→ 값을 구하는 트랩(target, receiver에서 값 구함)

→ get() 트랩이 호출되면 엔진이 실행 환경을 분석하여 파라미터 값 설정

```jsx
const target = {point: 100};
const handler = {
	get(target, key, receiver) {
		return target[key] + 200;
	}
};
const obj = new Proxy(target, handler);
console.log(obj.point); //300
console.log(obj.bonus); //NaN
```

**get()트랩활용: 조건 체크**

```jsx
const target = {point: 100};
const handler = {
	get(target, key, receiver) {
		const value = target[key];
		return this.book.check ? value + 200 : value;
	}
};
const obj = new Proxy(target, handler);
handler.check = true;
console.log(obj.point); //300
```

## get()트랩 호출

 → get()트랩이 호출되는 형태

- proxy[key]
- Object.create(proxy, {프로퍼티})
- Reflect.get()

```jsx
const target = {point: 600, bonus:100};
const handler = {
	get(target, key, value, receiver) {
		return target[key] + 200;
	}
};
const proxy = new Proxy(target, handler);
const obj = Object.create(proxy, {
	point: {value: 500}
});
console.log(obj.point); //500
console.log(obj.bonus); //300
```

## get()트랩 준수사항 (invariant)

→ target의 프로퍼티가 data 디스크립터일 때 [[Writable]]: false또는 [[Cofigurable]]: false이면 반환 값을 변경하여 return 불가 (DEFAULT값 = writable :false)

```jsx
const target = {};
Object.defineProperty(target, "point", {
	value: 500, writable: false
});
const handler = {
	get(target, key, receiver) {
		//return target[key] + 200; //ERROR
		return target[key];
	}
};
const obj = new Proxy(target, handler);
console.log(obj.point); //500
```

→ target의 프로퍼티가 악세서 디스크립터일 때 [[Cofigurable]]: false이면 반환 값을 변경하여 return 불가

→ get()트랩에 try-catch사용불가

# has()트랩

→ 파라미터: target(대상 오브젝트), key(프로퍼티 key / Symbol작성가능)

→ 반환: 존재하면 true, 아니면 false

→ in 연산자의 트랩

→ target에 key의 존재 여부 반환

→ 프로퍼티 값을 true/false로 변환하여 반환

→ 두번째 파라미터에 Symbol 작성가능

```jsx
const target = {point:100}
const handler = {
	has(target, key) {
		return target[key];
	}
};
const obj = new Proxy(target, handler);
console.log('point' in obj); //true
console.log('book' in obj); //false
```

## has() 트랩 호출

→ key in proxy

→ key in Object.create(proxy, {프로퍼티})

→ Reflect.has()

```jsx
const target = {point: 600, bonus: 100};
const handler = {
	has(target, key) {
		return target[key];
	}
};
const proxy = new Proxy(target, handler);
const obj = Object.create(proxy, {
	point: {value: 500}
});
console.log('point' in obj); //true
console.log('bonus' in obj); //true
```

## has()트랩 준수사항 (invariant)

→ 오브젝트에 프로퍼티가 있으면서 오브젝트가 프로퍼티 추가 금지이거나 [[Cofigurable]]: false이면 false를 지정하여 반환할 수 없지만 true는 지정하여 반환할 수 있습니다. 

→ 강제로 true/false를 반환하지 않고 has()트랩에서 구한 값을 true/false로 변환하여 반환하여 반환

```jsx
const target = {point: 100};
Object.preventExtensions(target);
const handler = {
	has(target, key) {
		console.log('has트랩 실행');
		//return false; //ERROR (추가금지상태)
		return target[key];
	}
};
const obj = new Proxy(target, handler);
console.log('point' in obj); //true
```

# deleteProperty() 트랩

→ 파라미터: target(대상 오브젝트), key(프로퍼티 key)

→ 반환: 처리 성공 true, 실패 false

→ delete 연산자의 트랩

→ 오브젝트 프로퍼티 삭제

→ 프로퍼티가 없어도 true를 반환하므로 코드처럼 조건을 체크하여 true/false 반환하면 완전하게 처리

```jsx
const target = {point: 100};
const handler = {
	deleteProperty(target, key) {
		if (key in target) {
			delete target[key];
			return true;
		}
		return false;
	}
};
const obj = new Proxy(target, handler);
console.log(delete obj.point); //true
console.log(target.point); //undefined
console.log(delete obj.point); //false
console.log(delete target.point); //true
```

## deleteProperty() 트랩 호출

→  delete[key]

→ Reflect.deleteProperty()

## deleteProperty() 트랩 준수사항

→ target 오브젝트의 프로퍼티가 [[Configurable]]: false이면 프로퍼티를 삭제할 수 없으며 에러 발생

```jsx
const target = {};
Object.defineProperty(target, "point", {
	value: 500, configurable: false
});
const handler = {
	deleteProperty(target, key) {
		Object.getOwnPropertyDescriptor(target, key);
		if (descriptor.configurable) {
			delete target[key];
			return true;
		}
		return false;
	}
};
const obj = new Proxy(target, handler);
console.log(delete obj.point); //false
```

# defineProperty() 트랩

→ 파라미터: target(대상 오브젝트), key(프로퍼티 key), descriptor(추가/변경할 디스크립터)

→ 반환: 처리 성공 true, 실패 false

→ target에 프로퍼티를 추가하거나 속성 값을 변경

```jsx

const target = {};
const handler = {
	defineProperty(target, key, desc) {
		if (desc.value > 0) {
			desc.value = desc.value * -1;
		};
		Object.defineProperty(target, key, desc);
		return true;
	}
};
const proxy = new Proxy(target, handler);
Object.defineProperty(proxy, 'point', {
	value: 100, writable: true
});
console.log(target.point); // -100
```

## defineProperty() 트랩 호출

→ Object.defineProperty()

→ Reflect.defineProperty()

## defineProperty()트랩 준수사항

→ strict mode일 때 트랩에서 false를 반환하면 TypeError

→ target 오브젝트가 확장 불가이면 프로퍼티 추가 불가능: Object.preventExtensions(target);

→ target 오브젝트의 프로퍼티가 [[Writable]]: false또는 [[Configurable]]: false이면 프로퍼티 값 변경 불가

# preventExtensions()

→ 파라미터: target(대상 오브젝트)

→ 반환: 처리성공 true, 실패 false

→ target 오브젝트에 오브젝트의 확장금지 설정

```jsx
const target = {point: 100};
const handler = {
	preventExtensions(target) {
		if (target.point) {
			Object.preventExtensions(target);
			return true;
		};
		return false;
	}
};
const proxy = new Proxy(target, handler);
const obj = Object.PreventExtensions(proxy);
console.log(obj.point); //100
console.log(Object.isExtensible(target)); //false
```

## preventExtensions() 트랩 호출

→ Object.preventExtensions()

→ Reflect.preventExtensions()

## preventExtensions() 트랩 준수사항

→ target 오브젝트가 확장 불가일 때 = Object.isExtensible(target) 결과 false

 ⇒ false 반환(TypeError) true만 반환 가능

# isExtensible()트랩

→ 파라미터: target(대상오브젝트)

→ 반환: 확장 가능 true, 불가 false

→ target의 확장 가능 여부 반환

→ false를 반환하는 오브젝트 상태

- Object.seal()
- Object.freeze()
- Object.preventExtensions()
- Reflect.preventExtensions()

```jsx
const target = {point: 100};
const handler = {
	isExtensible(target) {
		return Object.isExtensible(target);
	}
};
const obj = new Proxy(target, handler);
console.log(Object.isExtensible(obj)); //true
Object.seal(target);
console.log(Object.isExtensible(obj)); //false
```

## isExtensible()트랩 호출

→ Object.isExtensible()

→ Reflect.isExtensible()

## isExtensible() 트랩 준수사항

→ Object.isExtensible(target) 결과와 같은 값 반환

→ 결과 변경 불가

→ 같이 않으면 TypeError

# getPrototypeOf()트랩

→ 파라미터: target(대상오브젝트)

→ 반환: 오브젝트 또는 null

→ target의 prototype 반환

→ target이 확장불가라도 prototype을 반환

→ string, number처럼 값을 반환하면 TypeError

## getPrototypeOf()트랩 호출

→ Object.getPrototypeOf()

→ __proto__

→ instanceof

→ Object.prototype.isPrototypeOf()

→ Reflect.getPrototypeOf()

```jsx
//__proto__: 조건에 따라 반환되는 prototype을 변경 가능
class Point {
	getPoint() {return 100;}
};
const handler = {
	getPrototypeOf(target) {
		return this.list ? Array.prototype : target.prototype;
	}
};
const obj = new Proxy(Point, handler);
handler.list = true;
const proto = obj.__proto__;
console.log(proto.map); //function map() { [nativecode] }
```

```jsx
//instanceof
class Point {
	getPoint() {return 100;}
};
const handler = {
	getPrototypeOf(target) {
		return Point.prototype;
	}
};
const target = new Point();
console.log(target instanceof Point); //true
console.log(Point.prototype instanceof Point); //false
const obj = new Proxy(target, handler);
console.log(proto.map); //true
```

## getPrototypeOf() 트랩 준수사항

→ target이 확장 불가일 때 Object.getPrototypeOf(target)와 같은 값을 반환

```jsx
class Point {
	getPoint() {return 100;}
};
const handler = {
	getPrototypeOf(target) {
		return target.prototype;
	}
};
const obj = new Proxy(Point, handler);
const proto = Object.getPRototypeOf(obj);
console.log(proto.getPoint); //getPoint() {return 100;}
```

# setPrototypeOf()트랩

→ 파라미터: target(대상오브젝트), prototype(prototype 또는 null)

→ 반환: 처리 성공 true, 실패 false

→ target의 **__proto__** 에 두번째 파라미터 설정

→ Object.setPrototypeOf()의 트랩

```jsx
class Book {setTitle() { return '책'; }};
class Point {getPoint() { return 100; }};
Object.setPrototypeOf(Book, Point.prototype);

console.log(Book.prototype.getPoint); //undefined
console.log(Book.__proto__.getPoint); //getPoint() {return 100;}
const obj = new Book();
console.log(obj.getPoint); //undefined
```

## setPrototypeOf()트랩 호출

→ Object.setPrototypeOf()

→ Reflect.setPrototypeOf()

## setPrototypeOf() 트랩 준수사항

→ target이 확장 불가일 때

→ 두 번재 파라미터의 prototype과 Object.getPrototypeOf(target)로 구한것과 같아야 함.

```jsx
class Book {setTitle() { return '책'; }};
class Point {getPoint() { return 100; }};
const handler = {
	setPrototypeOf(target, proto) {
		Object.setPrototypeOf(target, proto);
		return true; //true반환 안할경우 ERROR
	}
};
const obj = new Proxy(Book, handler);
Object.setPrototypeOf(obj, Point.prototype);
console.log(Book.prototype.getPoint); //undefined
console.log(Book.__proto__.getPoint); //getPoint() {return 100;}
console.log(obj.getPoint); //getPoint() {return 100;}
```

# construct()트랩

→ 파라미터: target(대상오브젝트), argumentsList(Array 또는 Array-like), newTarget(선택)

→ 반환: 생성한 인스턴스

→ 인스턴스를 생성하여 반환

→ construct() {...} 트랩처리

→ 트랩을 호출할 때마다 정리하지 않고 트랩에서 일괄적으로 정리하면 호율이 높다.

## **construct() 트랩이 호출되는 형태**

→ const obj = new Proxy(Point, handler); 

- new obj()를 실행할 떄 호출

→ Reflect.construct()

```jsx
class Point {
	constructor(point) {
		this.point = point;
	}
};
const handler = {
	construct(target, args, proxy) {
		let point = args[0];
		if (Object.is(args[1], 'add')) {
			point += args[2];
		};
		return new target(point);
	}
};
const obj = new Proxy(Book, handler);
const pointObj = new obj(100, 'add', 300);
console.log(pointObj.point); //400
// Point클래스의 constructor를 호출하기 전에 조건에 따라 인스턴스의 초깃값을 정리
```

# apply()트랩

→ 파라미터: target(호출할 함수), this(선택: this로 참조할 오브젝트), 호출할 함수에 넘겨 줄 파라미터(선택)

→ 반환: 호출된 함수에서 반환한 값

→ 함수 호출 트랩

→ Proxy 인스턴스 호출로 트랩이 실행된 형태

→ call(), apply() 호출로 트랩이 실행된 형태

```jsx
function getPoint(...values) {
	return values.map((value) => {
		return value + 10;
	});
};
const handler = {
	apply(target, that, params) {
		return target.apply(this, params);
	}
};
const obj = new Proxy(getPoint, handler);
console.log(obj(100,200)); //[110, 210]
```

## apply()트랩 호출

→ Function.prototype.apply()

→ Function.prototype.call()

→ proxy(...args): Proxy 인스턴스

→ Reflect.apply()

```jsx
//Function.prototype.apply()
function getPoint(...values) {
	return values.map((value) => {
		return value + this.bonus;
	});
};
const handler = {
	apply(target, that, params) {
		return target.apply(this, params);
	}
};
const obj = new Proxy(getPoint, handler);
const add = {bonus: 10};
console.log(obj.apply(add, [100,200])); //[110, 210]
```

```jsx
//Function.prototype.call()
function getPoint(values) {
	return values.map((value) => {
		return value + this.bonus;
	});
};
const handler = {
	apply(target, that, ...params) {
		return target.apply(this, params);
	}
};
const obj = new Proxy(getPoint, handler);
const add = {bonus: 10};
console.log(obj.call(add, 100, 200)); //[110, 210]
```

# ownKeys()트랩

→ 파라미터: target(대상오브젝트)

→ 반환: Array, 프로퍼티 키

→ Object.getOwnPropertyNames()의 트랩

→ target의 모든  key를 배열로 반환

→ [[Configurable]]: false 이거나 오브젝트가 확장 불가라도 반환

```jsx
const target = {};
Object.defineProperties(target, {
	point: {value: 100, enumerable: true},
	bonus: {value: 200}, //enumerable: false (반환x)
});
const handler = {
	ownKeys(target) {
		return Object.getOwnPropertyNames(target);
	}
};
const obj = new Proxy(target, handler);
console.log(Object.getOwnPropertyNames(obj)); //[point, bonus]
console.log(Object.keys(obj)); //[point]
```

## ownKeys()트랩 호출

→ Object.getOwnPropertyNames()

→ Object.getOwnPropertySymbols()

→ Object.keys()

→ Reflect.ownKeys()

# getOwnPropertyDescriptor()트랩

→ 파라미터: target(대상오브젝트), key(프로퍼티 key)

→ 반환: 디스크립터 또는 undefined

→ 프로퍼티 디스크립터 반환

```jsx
const target = {};
Object.defineProperty(target, 'point', {
	value: 100, configurable: true
});
const handler = {
	getOwnPropertyDescriptor(target, key) {
		const desc = Object.getOwnPropertyDescriptor(target, key);
		if (desc.configurable) {
			return {value: 300, configurable: true};
		}
		return desc;
	}
};
const obj = new Proxy(target, handler);
console.log(Object.getOWnPropertyDescriptor(obj, 'point')); 
```

## getOwnPropertyDescriptor()트랩 호출

→ Object.getOwnPropertyDescriptor()

→ Reflect.getOwnPropertyDescriptor()