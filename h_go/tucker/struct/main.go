package main

import "fmt"

type Person struct {
	name string
	age  int
}

func (p Person) PrintName() {
	fmt.Print(p.name)

}

func main() {
	var p Person                       //초깃값 { 0}
	p1 := Person{"sadness", 17}        //{sadness 17}
	p2 := Person{name: "joy", age: 21} //{joy 21}
	p3 := Person{name: "anger"}        //{anger 0}
	p4 := Person{}                     //{ 0}

	fmt.Println(p, p1, p2, p3, p4) //{ 0} {sadness 17} {joy 21} {anger 0} { 0}

	p.name = "happy"
	p.age = 27

	fmt.Println(p, p1, p2, p3, p4) //{happy 27} {sadness 17} {joy 21} {anger 0} { 0}

	p.PrintName() //happy%
}
