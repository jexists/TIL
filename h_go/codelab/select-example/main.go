package main

// import (
// 	"fmt"
// 	"time"
// )

// // 16
func main() {
	// 	// wg := sync.WaitGroup{}
	// 	in := make(chan string, 1000)
	// 	out := make(chan int)

	// 	go Worker(in, out)
	// 	go Print(out)

	// 	for i := 0; i < 100; i++ {
	// 		in <- "https://example.com"
	// 	}
	// 	time.Sleep(2 * time.Second)
}

// func Worker(in chan string, out chan int) {
// 	// defer wg.Done()
// 	for val := range in {
// 		go Request(val, out)
// 		// time.Sleep(1 * time.Second) //request 보냄
// 		// resp, err := http.Get(<-in)
// 		// if err != nil {
// 		// 	panic(err)
// 		// }
// 		// fmt.Println(val)
// 		// out <- 200
// 		// out <- resp.StatusCode
// 	}
// }

// func Print(in chan int) {
// 	for val := range in {
// 		fmt.Println(val)
// 	}
// }

// func request(val, out) {
// 	time.Sleep(1 * time.Second)
// }
