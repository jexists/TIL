package main

import (
	"bufio"   // 한줄 입력 받아야해서
	"fmt"     //print 사용
	"os"      //표준 입력받아야해서
	"strconv" //문자열 -> 숫자로
	"strings" //스트링 찌거기 제거
)

func main() {
	//선언
	// var a int //정수
	// var b int

	//대입
	// a = 3
	// a = 3.14 //float ERROR
	// a = "abc" //string ERROR
	// b = 4

	// fmt.Println(a + b) //7

	fmt.Println("숫자를 입력하세요")
	reader := bufio.NewReader(os.Stdin)
	line, _ := reader.ReadString('\n')
	line = strings.TrimSpace(line)

	n1, _ := strconv.Atoi(line)

	line, _ = reader.ReadString('\n')
	line = strings.TrimSpace(line)

	n2, _ := strconv.Atoi(line)

	fmt.Printf("입력하신 숫자는 %d, %d 입니다.", n1, n2)

	fmt.Println("연산자를 입력하세요")

	line, _ = reader.ReadString('\n')
	line = strings.TrimSpace(line)

	if line == "+" {
		fmt.Printf("%d + %d = %d", n1, n2, n1+n2)
	} else if line == "-" {
		fmt.Printf("%d - %d = %d", n1, n2, n1-n2)
	} else if line == "*" {
		fmt.Printf("%d * %d = %d", n1, n2, n1*n2)
	} else if line == "/" {
		fmt.Printf("%d / %d = %d", n1, n2, n1/n2)
	} else {
		fmt.Println("잘못 입력")
	}
}
