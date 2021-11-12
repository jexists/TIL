package main

// 10.method
import "fmt"

func main() {
	user := User{
		ID:   "kkk1234",
		Name: "jexists",
	}
	fmt.Printf("%p\n", &user) // 0xc00000c060
	user.Print()              // 	ID:  kkk1234
	user.ChangeID("new id")
	user.Print() //ID:  new id

	// User.Print(user)
	// (*User).ChangeID(&user, "newID")

	name := Name("Hello World")
	name.Print() //Name:  Hello World
}

type User struct {
	ID   string
	Name string
}

// struct와 method 완전하게 분리 가능
func (u User) Print() {
	// 값변경이 없을경우
	fmt.Printf("%p\n", &u) //0xc00000c080 user value 복사됨 포인터가 다르다.
	fmt.Println("ID: ", u.ID)
	fmt.Println("Name: ", u.Name)
	// u.ID = "no change" user값 변경 안됨
}

func (u *User) ChangeID(new string) {
	// 값변경이 할경우 / struct사이즈가 클 경우 복사 안해서 성능 좋음
	fmt.Printf("%p\n", u) //0xc00000c060 주소값 같음
	u.ID = new

	//정석
	(*u).ID = new
}

// func (매서드 receiver) 1. value receiver 2. pointer receiver

type Name string

func (n Name) Print() {
	fmt.Println("Name: ", n)
}
