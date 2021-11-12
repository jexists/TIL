package main

import "fmt"

func main() {
	// 변수 -> 메모리 주소 (길이)
	// 배열 -> 메모리 주소 (길이: type x 원소갯수)

	// 문자열 -> 배열 (문자: 1~3byte)

	// s := "Hello World"

	s := "Hello 월드"

	s2 := []rune(s)

	fmt.Println("len(s2) =", len(s2)) //8
	for i := 0; i < len(s2); i++ {
		// fmt.Print(s2[i], ", ")
		// 72, 101, 108, 108, 111, 32, 50900, 46300
		fmt.Print(string(s2[i]), ", ")
		// H, e, l, l, o,  , 월, 드,
	}

	fmt.Println("len(s)", len(s)) //len(s) 12 (월=3 드=3)

	for i := 0; i < len(s); i++ {
		// fmt.Print(s[i], ", ")
		// 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, %

		// fmt.Print(string(s[i]), ", ")
		// H, e, l, l, o,  , W, o, r, l, d, %

		// fmt.Print(s[i], ", ")
		// 72, 101, 108, 108, 111, 32, 236, 155, 148, 235, 147, 156, %

		// fmt.Print(string(s[i]), ", ")
		// H, e, l, l, o,  , ì, , ë, , , %

	}
}
