package main

import "fmt"

func main() {
	var arr [5]int //Array 생성시 길이 명시

	for idx := range arr {
		fmt.Println(idx)
	}

	//idx:인덱스 val: value
	for idx, val := range arr {
		fmt.Println(idx, val)
	}
}
