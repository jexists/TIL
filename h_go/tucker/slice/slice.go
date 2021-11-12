package main

import "fmt"

func main() {
	a := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

	b := a[4:8] //[slice 시작하는 index +1:slice 끝나는 index]
	// b := []int{5, 6, 7, 8}

	c := a[4:] //[slice 시작하는 index +1:] 끝나는 것을 생략했을 경우 끝까지 slice

	d := a[:4] //[:slice 끝나는 index] 시작하는 거 생략했을 경우 처음부터 slice

	fmt.Println(b) //[5 6 7 8]
	fmt.Println(c) //[5 6 7 8 9 10]
	fmt.Println(d) //[1 2 3 4]

	e := []int{1, 2, 3, 4, 5, 6, 7, 8, 9}
	f := e[4:8]
	f[0] = 1
	f[1] = 2
	fmt.Println(e) //[1 2 3 4 1 2 7 8 9]
	// 일부분을 가져오는 것 (같은 메모리)

	for i := 0; i < 5; i++ {
		// var back int
		var front int
		// a, back = RemoveBack(a)
		a, front = RemoveFront(a)
		// fmt.Printf("%d, ", back) // 10, 9, 8, 7, 6,
		fmt.Printf("%d, ", front) // 1, 2, 3, 4, 5,
	}
	fmt.Println()
	fmt.Println(a) // [1 2 3 4 5] //[6 7 8 9 10]
}

func RemoveBack(a []int) ([]int, int) {
	return a[:len(a)-1], a[len(a)-1]
}

func RemoveFront(a []int) ([]int, int) {
	return a[1:], a[0]
}
