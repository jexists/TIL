// 13 goroutine

package main

import (
	"fmt"
	"net/http"
	"sync"
	// "time"
)

func main() {
	// goroutine: 경량 쓰레드, go run타임
	// 같은 주소의 공간에서 실행되고, 따라서 공유된 메모리는 synchronous(동기적)
	// 동시성
	wg := sync.WaitGroup{}
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go Print(&wg)
	}
	// time.Sleep(2 * time.Second) //2초만에 처리
	wg.Wait()
}

func Print(wg *sync.WaitGroup) {
	defer wg.Done()
	// time.Sleep(1 * time.Second) //비동기 작업
	// fmt.Println("hello")

	res, err := http.Get("https://example.com")
	if err != nil {
		panic(err)
	}
	fmt.Println(res.StatusCode)
}
