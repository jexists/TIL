package main

import (
	"fmt"
)

// func main() {
// 	i := 0

// 	for i < 5 {
// 		fmt.Println(i)
// 		// i = i + 1
// 		i++
// 	}
// 	fmt.Println("최종 i 값", i)
// 	// 0
// 	// 1
// 	// 2
// 	// 3
// 	// 4
// 	// 최종 i 값 5
// }

func main() {
	var i int
	for i = 0; i < 5; i++ {
		fmt.Println(i)
	}
	fmt.Println("최종 i 값", i) //ERROR
}
