// 14 channel

package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	//channel
	// <- 통해 값을 주고 받을 수 있는 하나의 분리된 통로
	// channel make함수
	c := make(chan int)
	//int타입을 사용하는 채널
	//동기화 작업

	go func() {
		c <- 10
		c <- 20
		c <- 30
	}()

	fmt.Println(<-c)
	fmt.Println(<-c)
	fmt.Println(<-c)

	//버퍼 사이즈가 3인 채널 만들기
	bc := make(chan int, 3)
	bc <- 10
	bc <- 20
	bc <- 30
	// bc <- 40 //blocking

	fmt.Println(<-bc)
	fmt.Println(<-bc)
	fmt.Println(<-bc)
	// fmt.Println(<-bc) //blocking
	close(bc) //채널 닫기

	// range 연산 가능 (range blocking 될때까지 돌기)
	for val := range bc {
		fmt.Println(val)
	}
}

func Print(wg *sync.WaitGroup) {
	defer wg.Done()
	time.Sleep(1 * time.Second)
}
