package main

import (
	"fmt"
	"package/dataStruct"
)

func main() {
	h := &dataStruct.Heap{}

	// h.Push(9)
	// h.Push(8)
	// h.Push(7)
	// h.Push(6)
	// h.Push(5)

	// h.Print()
	// // [9 8 7 6 5]
	// fmt.Println(h.Pop()) // 9
	// fmt.Println(h.Pop()) // 8
	// fmt.Println(h.Pop()) // 7

	h.Push(2)
	h.Push(6)
	h.Push(9)
	h.Push(6)
	h.Push(7)
	h.Push(8)

	h.Print()
	// [9 7 8 2 6 6]
	fmt.Println(h.Pop()) // 9
	fmt.Println(h.Pop()) // 8
	fmt.Println(h.Pop()) // 7
}
