package main

import (
	"fmt"
	"log"
)

// 11.interface
type Stringer interface {
	// interface 끝에 er붙임
	String() string
}

type Name string

func (n Name) Print() {
	fmt.Println("Name: ", n)
}

func (n Name) String() string {
	return string(n)
}

func (n Name) Error() string {
	return string(n)
}

func main() {
	// a := io.Writer()
	name := Name("jexitst")
	PrintString(name)

	LogError(name)

	// errors.New()
}

// Error => interface builtin

func LogError(err error) {
	log.Println(err)
}

func PrintString(s Stringer) {
	fmt.Println("stringer: ", s.String()) //stringer:  jexitst
}
