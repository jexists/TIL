package main

func main() {
	var c chan int        //선언
	c = make(chan int, 1) //초기화
	// c = make(chan int) // <- DeadLock발생

	c <- 10
	v := <-c

	println(v) //10
}
