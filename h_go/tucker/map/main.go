package main

import "fmt"

// type Key struct {
// 	v int
// }

// type Value struct {
// 	v int
// }

func main() {
	// var m map[string]string
	// var m1 map[int]string
	// var m2 map[Key]Value
	// var m3 map[Key]*Value

	// m["abc"] ="bbb" // ERROR (초기화 필수)

	// 선언 후 초기화 하는 방식
	var m map[string]string
	m = make(map[string]string)

	m["bca"] = "ccc"
	fmt.Println(m["bca"]) //ccc

	//선언 & 초기화 같이 하는 방식
	m1 := make(map[int]string)
	m1[53] = "ddd"
	fmt.Println(m1[53]) //ddd

	//없는 값 출력할 경우 기본값(default) 출력
	fmt.Println("빈값 string = ", m["bcd"]) //빈값 =

	m2 := make(map[int]int)
	m2[4] = 4
	fmt.Println("빈값 int = ", m2[10]) //빈값 int =  0

	m3 := make(map[int]bool)
	m3[4] = true
	fmt.Println("빈값 bool = ", m3[10]) //빈값 bool =  false

	//value값을 세팅했는지 안했는지 확인

	m2[5] = 0
	fmt.Println("m2[5]", m2[5])

	// value, 키값이 있는지 없는지(bool)
	v, ok1 := m2[5]
	v1 := m2[4]
	v2 := m2[10]
	v2, ok2 := m2[10]

	fmt.Println(v, v1, v2)       // 0 4 0
	fmt.Println(v, ok1, v2, ok2) // 0 true 0 false

	// 값 삭제
	delete(m2, 5)
	v, ok1 = m2[5]
	fmt.Println(v, ok1, v2, ok2) // 0 false 0 false

	m2[2] = 98
	m2[10] = 1245

	for key, value := range m2 {
		fmt.Println(key, " = ", value)
		// 순서가 무작위로 나옴
		// 10  =  1245
		// 4  =  4
		// 2  =  98
	}
}
