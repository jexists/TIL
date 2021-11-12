package main

import "fmt"

func pop(c chan int) {
	println("Pop Func")
	v := <-c
	fmt.Println(v)
}
func main() {
	var c chan int //선언
	// c = make(chan int, 1) //초기화
	c = make(chan int) // <- DeadLock발생
	go pop(c)
	c <- 10
	// v := <-c

	// println(v) //10
	println("End of Program")
}
