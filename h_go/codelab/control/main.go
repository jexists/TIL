//5. 흐름제어
//if, switch, for

package main

import (
	"fmt"
	"time"
)

func main() {
	var ok bool = true

	//if 문
	// ()옵션  {}필수
	if ok {
		fmt.Println("hello")
	}

	var num int = 0

	if num != 0 {
		fmt.Println("world")
	}

	//if 문에서 선언과 동시에 사용할수있다
	if str := "hello world"; str == "HelloWorld" {
		fmt.Println(str)
	} else {
		fmt.Println("else", str)
	}
	//if문안에 선언된 변수는 else에서 사용 가능
	//다른곳에서는 str 사용불가

	// if n, err := bytes.NewBuffer(nil).Read(); err != nil {}
	// 에러값만 선언할때 많이 사용함

	//swtich => break 필요없음
	//기본 자동 break가 있음 (fallthrough사용해야 break)
	//성공한 케이스가 있을 경우 끝
	str := "hello"
	switch str {
	case "hello":
		fmt.Println("123")
	case "world":
		fmt.Println("456")
	default:
		fmt.Println("default")
	}
	fmt.Println(str)

	t := time.Now()
	switch {
	case t.Hour() < 12:
		fmt.Println("Good morning!")
	case t.Hour() < 17:
		fmt.Println("Good afternoon.")
	default:
		fmt.Println("Good evening.")
	}

	//while 없음 대신 ; 생략하면 같음
	//for true = while

	//for문
	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}

	sum := 0
	for i := 0; i < 10; i++ {
		sum += i
	}
	fmt.Println(sum)

	sum2 := 1
	for sum2 < 1000 {
		sum2 += sum2
	}
	fmt.Println(sum2)

	// j := 0
	// for j < 3 {
	// 	fmt.Println(j)
	// }
	//모두 생략할때 무한루프
	//반복조건 생략 하면 무한 루프

	//for 초기화구문; 조건표현; 사후구문 {}
	//초기화구문: 첫번째 반복전 수행 (옵션)
	//조건표현: 모든 반복 이전 판별 (false일 경우 종료)
	//사후구문: 모든 반복 마지막에 수행 (옵션)

	//()X  {}필수

}
