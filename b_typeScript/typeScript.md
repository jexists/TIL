# 타입 검사

## 정적 타입 검사

 - statically type checking

 - ex) 자바, C++

## 동적 타입 검사

 - dynamically type checking

 - 실행 시간에 타입 검사 수행

 - 값을 변수에 할당할 때 타입 결정

 - ex) 자바스크립트

## 점진적 타입 검사

 - gradually type checking

 - 컴파일 시간에 타입 검사 수행

 - ex) 타입스크립트, 파이썬

## * typeof

 - 변수 타입

```tsx
let myValue;
console.log(typeof myValue);
```

---

## Any

 - 타입의 최상위 타입

 - 동적 타입과 정적 타입의 경계선

 - 제약이 없는 타입으로 어떠한 타입 & 타입이 없는 변수 O

## 기본 타입 (primitive types)

 - 내장 타입

### 문자열 (String)

 - 작은따옴표(' '), 큰따옴표(" ") 사용 (큰따옴표 권장)

 - 역따옴표(backtick/backquote: ``) 

⇒ 줄 구분 없이 문장 입력 & 내장 표현식(embedded expressions: `${expressions}형태`) 이용

### 숫자 (Number)

 - 10진수, 16진수, 2진수, 8진수 지원

### 불리언 (Boolean)

 - true / false 

### 심볼 (symbol)

 - symbol() 함수 이용해 생성한 고유하고 수정 불가능한 데이터 타입

 - 객체 속성(object property)의 유일하고 불변적인 식별자

 - 변수를 불변 상수로 선언하려면 const제한자 이용해 변수 선언

 - 호출될 때마다 Symbol 값을 생성 → 변경 불가능한 원시 타입의 값

```tsx
Symbol("foo") === Symbol("foo"); // false
```

 - new 연산자 X

```tsx
var sym = new Symbol(); // TypeError
```

 - 문자열을 인자로 전달

→ 문자열은 Symbol 생성에 어떠한 영향 X 

→ 생성된 Symbol에 대한 설명(description)으로 디버깅 용도로만 사용

 - unique한 프로퍼티 → Symbol 로 추가 이름 충돌 걱정하지 않고 새 속성을 계속 추가

```tsx
let hello = Symbol("hello");
//심벌 객체를 반환 → 유일한 식별자 생성 → 팩토리 함수 역할 → "hello" 인수는 심벌의 설명 의미 
//설명은 심벌에 접근 할 때 사용하거나 생략 가능
```

### enum

[형식] enum 바인딩 식별자 {속성: 값, 속성: 값, 속성: 값, ...  };

 - number 타입의 확장 타입

 - Enumeration, 열거형

 - 첫번째 속성값의 인덱스 0값 할당 → 1씩 증가 (숫자 수정 가능)

 - enum 객체 { ... } → (속성: 값)의 목록 포함

### 문자열 리터럴

 - string 타입의 확장 타입

```tsx
type EventType = "keyup" | "mouseover";
```


## 객체 타입 (object types)

 - 속성 포함

 - 호출 시그니처 (call signature), 생성자 시그니처 (construct signature)등 구성

### 배열 (Array)

 - 배열 요소 [ ], colloections

 - 여러개의 값을 하나의 변수에 담아 관리하는 자료 구조

```tsx
//배열타입
let array1: string[] = ["a", "b", "c"];

//제네릭 배열 타입
let array2: Array<string> = ["a", "b", "c"];
```

- **배열 타입**
    
    [형식] 선언자 변수명: 요소타입[ ];
    
     - 요소타입(element type) = string, number, boolean, 클래스. 인터페이스
    
    ```tsx
    let numberArray: number[];
    let stringArray: string[];
    let anyArray: any[] = [1, "string", true];
    let unionArry: (number | string | boolean)[] = [1, "string", true];
    ```
    
- **제네릭 배열 타입**
    
    [형식] ARRAY<T>
    
    ```tsx
    let num: Array<number | string> = [1, "hello"];
    ```
    
    ****타입쿼리(type queries)** 
    
    - 타입을 참조할 때 & typeof 연산자 이용 참조할 변수의 타입 얻어와 타입 지정
    
    ```tsx
    let num: Array<number | string> = [1, "hello"];
    let num2: typeof num = [1, "hello"]; //타입쿼리로 num 변수 타입 참조
    ```
    

### Tuple

 - 배열 요소가 n 개로 정해질 때 각 요소별로 타입을 지정한 타입

 - n개의 요소로 이뤄진 배열에 대응하는 타입

 - 선언된 타입 수와 할당될 배열의 요소 수가 일치

```tsx
let x: [string, number];
x = ["string", 100]; 
```

### Function

 - 호출 시그니처 포함 

### 생성자

 - 하나의 객체(클래스로부터 생성) 여러 생성자 시그너처로 구성 될때 포함

 - 생성자 타입 리터럴(constructor type literal) 사용

- 생성자 시그니처를 구성하는 타입 매개변수, 매개변수 목록, 반환타입으로 구성

[형식] new < 타입1, 타입2, ... > (매개변수1, 매개변수2, ...) ⇒ 타입

### Class

 - 객체 타입(object types)

 - 객체 지향 프로그래밍, 구조 타이핑 등 활용

### Interface

 - 객체 타입(object types)

 - 객체 지향 프로그래밍, 구조 타이핑 등 활용

## 기타 타입

### 유니언(union)

 - 2개 이상의 타입을 하나의 타입으로 정의

```tsx
let x: stirng | number;
```

### 인터섹션 (intersection)

 - 두 타입을 합쳐 하나로 만들 수 있는 타입

```tsx
interface Cat { leg: number; }
interface Bird { wing: number; }
let birdCat: Cat & Bird = { leg:4, wing:2 };
```

### 특수 타입 - void, null, undefined

**void**

 - 빈 값 나타내는 타입 

 - 함수에 반환 값이 없을 때 사용

 - null, undefined만 할당

```tsx
function hello(): void {
	console.log("return 값 없음");
}
console.log(hello, typeof hello); //undefined 'undefined'
```

**null**

 - 빈 객체로 초기화

**undefined**

 - 어떠한 빈 값으로도 초기화 되지 않은 타입

---

# 타입 지정

### 명시적 타입 표기: explicit type annotation

[형식] 선언자 <변수식별자>:<타입> = <값>;

```tsx
let myVariable: string = "string타입지정";
```

---

# 자바스크립트 내장 타입

 - boolean, number, string, symbol, null, undefined, object, function

 - 전역 객체(global object) 통해 직접 생성

```tsx
let type1 = new Boolean(false);
let type2 = new Number(123);
let type3 = new String("Hello");
//아래방식으로 호출
type1.valueOf(); //<- false
```

---

## TypeScript 기본타입

1. boolean - true / false
2. number - 부동소수점 (16진수, 10진수, 8진수 지원)
               - decimal, hex, binary, octal
3. string - 문자열 (문자데이터)
           - 큰따옴표(" "), 작은따옴표(' ') 사용
4. array - 배열 [ ]
    
    ```tsx
    let array: number[] = [1, 2, 3];
    let array: Array<number> = [1, 2, 3];
    ```
    
5.  tuple - 투플
          - 고정된 수의 요소 타입
          - 문자열, 숫자 같이 표현
    
    ```tsx
    let x: [string, number];
    x = ['hello', 10];
    console.log(x[0].sibstr(1));
    ```
    
6. enum - 숫자값 , data set
    
    ```tsx
    enum color {Red, Green, Blue};
    let c: color = color.Green;
    
    enum color {Red = 1, Green = 2, Blue = 4}
    let c: color = color.Green;
    
    ```
    
    기본 0부터 시작하지만 수동 설정 변경 가능하다
    
7. any - 알지 못하는 변수 유형 (편리)
    
    ```tsx
    let list: any[] = [1, true, 'string'];
    list [1] = 100;
    ```
    
8. void - 함수 반환 유형
         - undefined / null 만 할당
9. never - 절대로 발생하지 않는 값의 타입
10. undefined / null
11. object - "non-primitive" (API 표현)
            - number, string, boolean, symbol, null, undefined 아닌 데이터 타입
12. enum - 숫자 → 문자로 표현 
    
    ```tsx
    enum Color {Blue, Green, Red}
    let color1 = Color.Green;
    console.log(color1); // 1
    console.log(Color.Blue); // 0
    console.log(Color.Green); // 1
    console.log(Color.Red); // 2
    
    enum Color {Blue, Green = 10, Red}
    console.log(Color.Green); // 10
    console.log(Color.Red); // 11
    console.log(Color.Blue); // 0
    ```
    

<aside>
💡 any: 모든 타입이 가능하나 타입스크립트의 의도에 맞지 않는다. (권장X)

</aside>

글자로 된 모든 object 속성의 타입은 string

```go
type Member = {
	[key: string]: string
}
```