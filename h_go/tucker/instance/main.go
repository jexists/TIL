package main

import "fmt"

type Student struct {
	name  string
	age   int
	grade int
}

func SetName(t Student, newName string) {
	t.name = newName
}

//Function 형태 - 기능 단위, procedure절차 (Input), -> 기능 순서 중요
func SetNameFix(t *Student, newName string) {
	t.name = newName
}

//매소드 형태의 표현 - object단위
//(OOP, 주체(object)/관계(relationship/주체(object)) -> object와 object의 관계 relationship 중요 (Entity-Relatioship)
func (t *Student) SetNameFixM(newName string) {
	t.name = newName
}

func (t *Student) SetAge(age int) {
	t.age = age
}

func PrintStudent(u *Student) {
	fmt.Println(u)
}

func main() {
	a := Student{"aaa", 20, 10}

	b := a
	b.age = 30

	// Value type
	fmt.Println(a) // {aaa 20 10}
	fmt.Println(b) // {aaa 30 10}

	c := Student{"aaa", 20, 10}

	var d *Student
	d = &c
	d.age = 30

	// Pointer (reference 타입형태 - 참조)
	fmt.Println(c) // {aaa 30 10}
	fmt.Println(d) // &{aaa 30 10}

	SetName(a, "bbb") //Value Type
	fmt.Println(a)    //{aaa 20 10}

	SetNameFix(&a, "bbb") //Reference Type
	fmt.Println(a)        //{bbb 20 10}

	a.SetNameFixM("bbb") //a=> instance
	fmt.Println(a)       //{bbb 20 10}

	var e *Student
	e = &Student{"aaa", 20, 10}

	e.SetNameFixM("bbb")
	e.SetAge(30)
	fmt.Println(e) //&{bbb 30 10}

	PrintStudent(e)
}
