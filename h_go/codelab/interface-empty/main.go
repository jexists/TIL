// 12. empty-interface

package main

import (
	"fmt"
)

// func main() {
// 	a := Any("234h")
// 	fmt.Println(a)

// 	a = 123
// 	fmt.Println(a)
// }

// type Any interface {
// }

// func Print() {
// 	fmt.Println()
// }

func main() {
	Print(1)
	Print("string")
	Print(true)
	// Print([]int{1, 2, 3})
}

type Any interface {
}

func Print(v interface{}) {
	// fmt.Println(reflect.TypeOf(v))
	// //int(타입은 int지만 interface에서 받아왔기 때문에 바로 사용 불가)

	// a := v.(int) //int가 아닐경우 ERROR
	// fmt.Println(reflect.TypeOf(a)) //int

	// 검사 type assortion
	// a, ok := v.(int)
	// if !ok {
	// 	fmt.Println(a) //0
	// 	a = 100
	// }
	// fmt.Println(a) // 1 / 100

	//스위치 사용
	switch val := v.(type) {
	case int:
		fmt.Println(val + 1)
	case string:
		fmt.Println(val + " 123")
	default:
		fmt.Println("invalidtype")
	}
}
