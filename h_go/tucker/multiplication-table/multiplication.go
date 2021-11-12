package main

import "fmt"

func main() {

	for num := 2; num < 10; num++ {
		fmt.Printf("%d단 \n", num)
		// if num == 5 {
		// 	continue
		// }

		for num2 := 1; num2 < 10; num2++ {
			if num == 3 && num2 == 2 {
				continue
			}
			fmt.Println(num, num2, num*num2)
		}
	}
}
