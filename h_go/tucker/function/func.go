package main

import "fmt"

// func add(x int, y int) int {
// 	return x + y
// }

// func main() {
// 	for i := 0; i < 10; i++ {
// 		fmt.Printf("%d + %d = %d\n", i, i+2, add(i, i+2))
// 	}
// }

// func main() {
// 	// a, b := fun1(2, 3)
// 	// fmt.Println(a, b) //3 2

// 	// f1(10)

// 재귀호출
// 	s := sum(10, 0)
// 	fmt.Println(s) //55
// }

func main() {
	//재귀호출 -> 반복문으로

	s := 0
	for i := 1; i <= 10; i++ {
		s += i
	}
	fmt.Println(s) //55

}

// func fun1(x, y int) (int, int) {
// 	return y, x
// }

// func fun1(x, y int) (int, int) {
// 	fun2(x, y)
// 	return y, x
// }

// func fun2(x, y int) {
// 	fmt.Println("func2", x, y) //func2 2 3
// }

// func f1(x int) {
// 	if x == 0 {
// 		return
// 	}
// 	fmt.Printf("f1(%d) before call f1(%d)\n", x, x-1)
// 	f1(x - 1)
// 	fmt.Printf("f1(%d) after call f1(%d)\n", x, x-1)
//재귀호출: 반복문
// f1(10) before call f1(9)
// f1(9) before call f1(8)
// f1(8) before call f1(7)
// f1(7) before call f1(6)
// f1(6) before call f1(5)
// f1(5) before call f1(4)
// f1(4) before call f1(3)
// f1(3) before call f1(2)
// f1(2) before call f1(1)
// f1(1) before call f1(0)
// f1(1) after call f1(0)
// f1(2) after call f1(1)
// f1(3) after call f1(2)
// f1(4) after call f1(3)
// f1(5) after call f1(4)
// f1(6) after call f1(5)
// f1(7) after call f1(6)
// f1(8) after call f1(7)
// f1(9) after call f1(8)
// f1(10) after call f1(9)
// }

func sum(x, s int) int {
	if x == 0 {
		return s
	}
	s += x
	return sum(x-1, s)
}
