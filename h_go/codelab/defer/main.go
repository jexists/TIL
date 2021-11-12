// 9. defer
//끝나는 시점에서 뒤에서부터 시작(역순 실행)
//함수호출을 지연시켜서 호출하기위한 키워드
// defer문은 자신을 둘러싼 함수가 종료할 때까지 어떠한 함수의 실행을 연기합니다
// 연기된 호출의 인자는 즉시 평가되지만 그 함수 호출은 자신을 둘러싼 함수가 종료할 때까지 수행되지 않습니다.

package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	function1()
	defer function1()
	function2()
	defer function2()
	function3()
	defer function3()

	fmt.Println("counting")

	for i := 0; i < 10; i++ {
		defer fmt.Println(i)
	}

	fmt.Println("done")
}

func useDeferRead() {
	//open 파일 읽고
	//상위함수 defer 예제
	f, err := os.Open("../go.mod")
	if err != nil {
		log.Fatalln(err)
	}
	defer f.Close()
	if err != nil {
		return
	}
	return
}

func noDeferRead() {
	//open 파일 읽고
	//상위함수 defer 예제
	f, err := os.Open("../go.mod")
	if err != nil {
		log.Fatalln(err)
	}
	if err != nil {
		f.Close()
		return
	}
	f.Close()
}

func function1() {
	fmt.Println("1")
}
func function2() {
	fmt.Println("2")
}
func function3() {
	fmt.Println("3")
}
