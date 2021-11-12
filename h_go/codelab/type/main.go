//3. 타입 알아보기
package main

import (
	"fmt"
)

func main() {
	var intType int = 10
	fmt.Printf("%v %T\n", intType, intType) //10 int

	var float32Type float32 = 3.14
	fmt.Printf("%v %T\n", float32Type, float32Type) //3.14 float32

	fmt.Println(intType + int(float32Type)) //형변환 후 13

	var stringType string = "Hello"
	fmt.Printf("%v %T\n", stringType, stringType) //Hello string

	// 포인터 => 값의 메모리 주소
	// *T 타입은 T 값을 가리키는 포인터입니다. 이것의 zero value는 nil 입니다.
	var intpType *int
	fmt.Printf("%v %T\n", intpType, intpType) //<nil> *int

	// & 연산자는 이것의 피연산자에 대한 포인터를 생성합니다.
	intpType = &intType
	fmt.Println(&intType) //0xc0000b4008
	fmt.Println(intpType) //0xc0000b4008

	// * 연산자는 포인터가 가리키는 주소의 값을 나타냅니다.
	var p *int
	n := 42
	p = &n
	fmt.Println(*p) // 포인터 p를 통해 i 읽기
	*p = 21         // 포인터 p를 통해 i 설정

	*intpType = 100
	fmt.Println(intType) //100
	//포인터는 있지만 연산/산술은 지원 안함

	var i int = 42
	var f float64 = float64(i)
	fmt.Println(f)

	// 간단한 코드
	i2 := 42
	f2 := float64(i2)
	fmt.Println(f2)

}

// 기본 타입/////////////////////////////////////
// bool

// string

// int  int8  int16  int32  int64
// uint uint8 uint16 uint32 uint64 uintptr

// byte // uint8의 별칭

// rune // int32의 별칭
//      // 유니코드에서 code point를 의미합니다.

// float32 float64

// complex64 complex128

// zero value //////////////////////

// 숫자 type에는 0
// boolean type에는 false
// string에는 "" (빈 문자열)
