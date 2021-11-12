package main

import "fmt"

type Student struct {
	name string
	age  int

	grade string
	class string
}

// func (s Student) PrintGrade() {
// 	fmt.Println(s.class, s.grade)
// }

// func (s Student) InputGrade(class string, grade string) {
// 	s.class = class
// 	s.grade = grade
// }

// func main() {
// 	var s Student = Student{name: "Joy", age: 27, class: "math", grade: "A"}

// 	s.InputGrade("English", "C")
// 	s.PrintGrade() //math A
// }

//POINTER
func (s *Student) PrintGrade() {
	fmt.Println(s.class, s.grade)
}

func (s *Student) InputGrade(class string, grade string) {
	s.class = class
	s.grade = grade
}

func main() {
	var s Student = Student{name: "Joy", age: 27, class: "math", grade: "A"}

	s.InputGrade("English", "C")
	s.PrintGrade() //English C
}
