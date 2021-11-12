// 6. struct

package main

import (
	"fmt"

	"codelab/struct/sub"
)

type Num int

// struct(구조체) = 필드의 집합체

type User struct {
	Name string
	Age  int
	Info Info
}

type Info struct {
	Phone string
}

type Admin struct {
	User
	Permission int
}

func main() {
	user := sub.User{}
	fmt.Println(user)

	user1 := sub.User{
		Name: "jexist",
	}
	fmt.Println(user1)

	user2 := sub.User{
		Name: "jexist",
		Age:  27,
	}
	fmt.Println(user2.Age)

	user3 := sub.User{
		Name: "jexist",
		Age:  27,
		// phone: "010-1234-5678", //error => 소문자 export
	}
	fmt.Println(user3)

	user4 := User{
		Name: "jexist",
		Age:  27,
		Info: Info{
			Phone: "010-9876-6543",
		},
	}
	fmt.Println(user4)

	admin1 := Admin{
		User: User{
			Name: "joy",
			Age:  10,
			Info: Info{
				Phone: "010-9876-6543",
			},
		},
	}
	fmt.Println(admin1)

}
