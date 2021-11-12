package main

import (
	"fmt"
)

func main() {
	// 1. 선언하고 대입하는 방법
	// var a = int
	// a = 4
	// 2. 타입적지않고 쓰는방법
	// var a = 4
	// 3. 타입적고 대입
	// var a int = 4
	// 4. 한줄로 적는 방법

	// a := 4
	// b := 2

	// fmt.Printf("a&b = %v\n", a&b) //a&b = 0
	// fmt.Printf("a|b = %v\n", a|b) //a|b = 6
	// fmt.Println("result", a^b)    //result 6

	a := 21
	c := a % 10                              //1
	a = a / 10                               //2
	d := a % 10                              //2.1 -> 2
	fmt.Printf("첫번째 수 %v, 두번째 수 %v\n", c, d) //첫번째 수 1, 두번째 수 2

	if 3 > 4 {
		fmt.Println('참')
	}
}
