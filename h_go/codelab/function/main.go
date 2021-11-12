// 8.function

package main

import "fmt"

func main() {
	function1(1, 2)
	fmt.Println("func2", function2(1, 2))
	val1, val2 := function3(1, 2)
	fmt.Println("func3", val1, val2)
	val1, val2 = function4(1, 2)
	fmt.Println("func4", val1, val2)

	//함수도 value취급
	function5 := func(a int, b int) (int, int) {
		return a * b, a / b
	}
	fmt.Println(function5(1, 2))

	function6(function5)
}

func functionName(a int, b int) {
}

func function1(a int, b int) {
	fmt.Println("func1", a, b)
}

func function2(a int, b int) int {
	return a + b
}

// 여러값 리턴 ()필수 & 리턴값 컴마 구분
// 한개의 함수에 여러개의 결과 반환 가능
func function3(a int, b int) (int, int) {
	return a + b, a - b
}

// func function4(a int, b int) (c int, d int) {
// 	return
// }

// //function 4 = function 5 비슷
// func function5(a int, b int) (int, int) {
// 	var c, d int
// 	return c, d
// }

func function4(a int, b int) (c int, d int) {
	c = 100
	d = 1000
	return
}

func function6(f func(int, int) (int, int)) {
	fmt.Println(f(10, 20))
}

// 같은 type일 경우 마지막 변수를 제외한 type 생략 가능
func function7(x, y int) int {
	return x + y
}
