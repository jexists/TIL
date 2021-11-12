package main

import "fmt"

func main() {
	// //배열 복사
	// arr := [5]int{1, 2, 3, 4, 5}
	// clone := [5]int{}

	// for i := 0; i < 5; i++ {
	// 	clone[i] = arr[i]
	// }

	// fmt.Println(clone) //[1 2 3 4 5]

	// //배열 역순
	// arr := [5]int{1, 2, 3, 4, 5}
	// temp := [5]int{}

	// for i := 0; i < len(arr); i++ {
	// 	temp[i] = arr[len(arr)-1-i]
	// }

	// for i := 0; i < len(arr); i++ {
	// 	arr[i] = temp[i]
	// }
	// fmt.Println("temp", temp) //[5 4 3 2 1]
	// fmt.Println("arr", arr)   //[5 4 3 2 1]

	//배열 역순
	arr := [5]int{1, 2, 3, 4, 5}

	for i := 0; i < len(arr)/2; i++ {
		arr[i], arr[len(arr)-1-i] = arr[len(arr)-1-i], arr[i]
	}

	fmt.Println("arr", arr) //[5 4 3 2 1]
}
