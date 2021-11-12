package main

import "fmt"

func main() {
	// 동적배열 vs 정적배열
	// 정적배열: fixed size array (배열의 길이가 변하지 않는)
	// ex) [10]int

	// 동적배열: 길이가 늘어난다. / 실제 배열을 포인트하고 있다.

	// 메모리 할당

	// 동적배열
	// c++ STL vector
	// python slice
	// java Array List
	// C# List
	// go slice

	//1. 빈배열 만드는 방법 var a []int
	//2. 초기값 a := []int{1,2,3,4}
	//3. make 사용 a:= make([]int,3)
	//4. make 사용 with cap a:= make([]int, 0, 8)

	// capicity : 확보해놓은 공간
	// length: 쓰고있는 길이

	// 빈배열 만드는 방법
	var a []int
	fmt.Printf("len(a) = %d\n", len(a)) //0
	fmt.Printf("cap(a) = %d\n", cap(a)) //0

	// 초기값 지정
	b := []int{1, 2, 3, 4, 5}
	fmt.Printf("len(b) = %d\n", len(b)) //5
	fmt.Printf("cap(b) = %d\n", cap(b)) //5

	// make 사용
	c := make([]int, 0, 8)
	fmt.Printf("len(c) = %d\n", len(c)) //0
	fmt.Printf("cap(c) = %d\n", cap(c)) //8

	// append 추가
	c = append(c, 1)
	// slice = append(slice, 추가할 항목)
	// 반환값 => slice (cap여유가 있을 경우는 입력한 slice /  cap자리가 없을 경우 새로운 slice)
	fmt.Printf("len(c) = %d\n", len(c)) //1
	fmt.Printf("cap(c) = %d\n", cap(c)) //8

	// 공간이 없을 경우 새로운 메모리에 복사
	d := []int{1, 2}
	d[0] = 1
	d[1] = 2
	e := append(d, 3)
	fmt.Println(d) //[1 2]
	fmt.Println(e) //[1 2 3]
	e[0] = 4
	e[1] = 5
	fmt.Println(d) //[1 2]
	fmt.Println(e) //[4 5 3]

	fmt.Printf("%p %p\n", d, e)
	//0xc0000b4040 0xc0000b8000

	for i := 0; i < len(d); i++ {
		fmt.Printf("%d, ", e[i]) //1, 2,
	}
	fmt.Println()

	for i := 0; i < len(e); i++ {
		fmt.Printf("%d, ", e[i]) //1, 2, 3,
	}
	fmt.Println()

	fmt.Println(cap(d), " ", cap(e)) //2   4

	// 공간이 남을 경우 같은 메모리 주소
	f := make([]int, 2, 4)
	f[0] = 1
	f[1] = 2
	g := append(f, 3)
	fmt.Println(f) //[1 2]
	fmt.Println(g) //[1 2 3]
	g[0] = 4
	g[1] = 5
	fmt.Println(f) //[4 5]
	fmt.Println(g) //[4 5 3]

	fmt.Printf("%p %p\n", f, g)
	//0xc000016180 0xc000016180

	n := []int{1, 2}
	n[0] = 1
	n[1] = 2
	m := make([]int, len(n))

	// 복사
	for i := 0; i < len(n); i++ {
		m[i] = n[i]
	}
	m = append(m, 3)

	fmt.Printf("%p %p\n", n, m)
	//0xc0000121b0 0xc00001a050
	m[0] = 4
	m[1] = 5
	fmt.Println(n) //[1 2]
	fmt.Println(m) //[4 5 3]

	//동적배열 -> 길이 늘어남
	//추가 -> append (여유없을때 두배 / 같은 메모리반환 또는 다른 메모리 반환할 경우 있음)

}
