package main

import (
	"fmt"
	"package/dataStruct"
)

func main() {
	list := &dataStruct.LinkedList{}
	list.AddNode(0)

	for i := 1; i < 10; i++ {
		list.AddNode(i)
	}

	list.PrintNodes()
	// 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9

	list.RemoveNode(list.Root.Next)

	list.PrintNodes()
	// 0 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9

	list.RemoveNode(list.Root)

	list.PrintNodes()
	// 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9

	list.RemoveNode(list.Tail)

	list.PrintNodes()
	// 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8

	fmt.Printf("Tail:%d\n", list.Tail.Val)
	// Tail:8

	list.PrintReverse()
	// 8 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2

	a := []int{1, 2, 3, 4, 5}
	a = append(a[0:2], a[3:]...)
	fmt.Println(a) // [1 2 4 5]
}
