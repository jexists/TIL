package main

import "fmt"

// func main() {
// 	for i := 0; i < 5; i++ {
// 		for j := 0; j < i+1; j++ {
// 			fmt.Print("*") //줄바꿈없음
// 			// fmt.Println('*') // +\n 자동줄바꿈
// 		}
// 		fmt.Println()
// 	}
// }
// *
// **
// ***
// ****
// *****

// func main() {
// 	for i := 0; i < 5; i++ {
// 		for j := 0; j < 5-i; j++ {
// 			fmt.Print("*") //줄바꿈없음
// 			// fmt.Println('*') // +\n 자동줄바꿈
// 		}
// 		fmt.Println()
// 	}
// }
// *****
// ****
// ***
// **
// *

// func main() {
// 	for i := 0; i < 3; i++ {
// 		for j := 0; j < i+1; j++ {
// 			fmt.Print("*")
// 		}
// 		fmt.Println("")
// 	}

// 	for i := 0; i < 3; i++ {
// 		for j := 2; j > i; j-- {
// 			fmt.Print("*")
// 		}
// 		fmt.Println("")
// 	}
// }
//*
//**
//***
//**
//*

// func main() {
// 	for i := 0; i < 3; i++ {
// 		for j := 0; j < i+1; j++ {
// 			fmt.Print("*")
// 		}
// 		fmt.Println("")
// 	}

// 	for i := 0; i < 2; i++ {
// 		for j := 0; j < 2-i; j++ {
// 			fmt.Print("*")
// 		}
// 		fmt.Println("")
// 	}
// }

// *
// **
// ***
// **
// *

// func main() {
// 	for i := 0; i < 4; i++ {
// 		for j := 4; j > i; j-- {
// 			fmt.Print(" ")
// 		}
// 		for k := 0; k < 2*i+1; k++ {
// 			fmt.Print("*")
// 		}
// 		fmt.Println("")
// 	}
// }
//  *
// ***
// *****
// *******

// func main() {
// 	for i := 0; i < 4; i++ {
// 		for j := 0; j < 3-i; j++ {
// 			fmt.Print(" ")
// 		}
// 		for j := 0; j < i*2+1; j++ {
// 			fmt.Print("*")
// 		}
// 		fmt.Println("")
// 	}
// }

//  *
// ***
// *****
// *******

// func main() {
// 	for i := 0; i < 4; i++ {
// 		for j := 4; j > i+1; j-- {
// 			fmt.Print(" ")
// 		}
// 		for k := 0; k < 2*i+1; k++ {
// 			fmt.Print("*")
// 		}
// 		fmt.Println()
// 	}

// 	for i := 0; i < 4; i++ {
// 		for l := 0; l < i+1; l++ {
// 			fmt.Print(" ")
// 		}
// 		for m := 6; m > 2*i+1; m-- {
// 			fmt.Print("*")
// 		}
// 		fmt.Println()
// 	}
// }
// 	*
// ***
// *****
// *******
// *****
// ***
//  *

func main() {
	for i := 0; i < 3; i++ {
		for j := 0; j < 2-i; j++ {
			fmt.Print(" ")
		}
		for j := 0; j < 2*i+1; j++ {
			fmt.Print("*")
		}
		fmt.Println()
	}

	for i := 0; i < 2; i++ {
		for j := 0; j < i+1; j++ {
			fmt.Print(" ")
		}
		for j := 0; j < 3-i*2; j++ {
			fmt.Print("*")
		}
		fmt.Println()
	}
}

// 	*
// ***
// *****
// *******
// *****
// ***
//  *
