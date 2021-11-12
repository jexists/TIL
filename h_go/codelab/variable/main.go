//4. 변수 적는방법
package main

import (
	"fmt"
	"reflect"
)

//전역변수는 무조건 var 키워드 사용!
//함수 밖에서는 모든 선언이 키워드(var, func 등) 시작해서 := 사용 불가

func main() {
	var a int = 10
	fmt.Println(reflect.TypeOf(a))

	//타입추론
	var b = "string"
	fmt.Println(reflect.TypeOf(b))

	//var 키워드 제외 := 선언법
	c := int32(1234)
	fmt.Println(c, reflect.TypeOf(c))

	// var {
	// 	//여러개 변수 할당 가능
	// 	d int
	// 	c string
	// }
	// var d, e int32 = 10, 20

	//CamelCase = 변수
	//export => 대문자 시작
	//전역변수는 var 키워드
	//타입 생략 가능 => 타입 추론 (정적타입)/

	//상수 const 키워드 =>
	//:= 사용불가
	//character, string, boolean, number

}
