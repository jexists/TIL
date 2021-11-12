package main

import "fmt"

func main() {
	var a int
	a = 1
	b := 1
	increase(a)
	increaseByPointer(&b)

	fmt.Println(a) //1
	fmt.Println(b) //2
}

func increase(x int) {
	x++
}

func increaseByPointer(x *int) {
	*x = *x + 1
}
