package main

import "fmt"

// struct 속성(statement)/타입
type Student struct {
	name  string
	class int

	grade Grade
}

type Grade struct {
	name  string
	grade string
}

//Student struct가 가지고 있는 기능 (객체에 속한 매소드)
func (s Student) ViewGrade() {
	fmt.Println(s.grade)
}

func (s Student) InputGrade(name string, grade string) {
	s.grade.name = name
	s.grade.grade = grade
}

//일반함수
func ViewGrade(s Student) {
	fmt.Println(s.grade)
}

func InputGrade(s Student, name string, grade string) {
	s.grade.name = name
	s.grade.grade = grade
}

func main() {

	var s Student
	s.name = "joy"
	s.class = 1

	s.grade.name = "Math"
	s.grade.grade = "C"

	s.ViewGrade() //{Math C}
	ViewGrade(s)  //{Math C}

	s.InputGrade("English", "A")
	s.ViewGrade() //{Math C} *고랭 함수호출은 복사
}
