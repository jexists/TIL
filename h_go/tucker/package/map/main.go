package main

import (
	"fmt"
	"package/dataStruct"
)

func main() {
	//3571보다 작은값이 나온다.
	fmt.Println("abcde = ", dataStruct.Hash("abcde"))
	// abcde =  2598
	fmt.Println("abcde = ", dataStruct.Hash("abcde"))
	// abcde =  2598
	fmt.Println("abcdf = ", dataStruct.Hash("abcdf"))
	// abcde =  2599
	fmt.Println("abcdf = ", dataStruct.Hash("tbcde"))
	// abcde =  3494
	fmt.Println("jexistshahahah = ", dataStruct.Hash("jexistshahahah"))
	// abcde =  238

	m := dataStruct.CreateMap()
	m.Add("AAA", "0107777777")
	m.Add("BBB", "0108888888")
	m.Add("CDEFRGTEFVDF", "01111111111")
	m.Add("CCC", "01757575757")

	fmt.Println("AAA = ", m.Get("AAA"))                   //AAA =  0107777777
	fmt.Println("BBB = ", m.Get("BBB"))                   //BBB =  0108888888
	fmt.Println("CDEFRGTEFVDF = ", m.Get("CDEFRGTEFVDF")) //CDEFRGTEFVDF =  01111111111
	fmt.Println("DDD = ", m.Get("DDD"))                   //DDD =
	fmt.Println("CCC = ", m.Get("CCC"))                   //CCC =  01757575757
}
