package main

import "fmt"

func main() {
	var s []int
	var t []int

	s = make([]int, 3)

	s[0] = 100
	s[1] = 200
	s[2] = 300

	fmt.Println(s, len(s), cap(s)) //[100 200 300] 3 3

	// s = append(추가하고자 하는 slice, 넣을 요소들)
	t = append(s, 400)
	s = append(s, 400, 500, 600, 700)

	fmt.Println(t, len(t), cap(t)) //[100 200 300 400] 4 6
	fmt.Println(s, len(s), cap(s)) //[100 200 300 400 500 600 700] 7 8
}
