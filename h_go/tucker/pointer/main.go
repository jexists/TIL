package main

import "fmt"

func main() {
	var a int
	var b int
	var p *int

	// p = a ERROR
	p = &a

	a = 3
	b = 2

	fmt.Println(a)  //3
	fmt.Println(p)  //0xc00000a0b8
	fmt.Println(*p) //3

	p = &b

	fmt.Println(b)  //2
	fmt.Println(p)  //0xc00000a0d0
	fmt.Println(*p) //2
}
