package main

import "fmt"

type Node struct {
	next *Node
	val  int
}

func main() {
	// root 뿌리 (첫번째 Node)
	var root *Node
	root = &Node{val: 0}

	//element 추가하는 방법?
	//-> 마지막 Node를 알아야한다.그다음에 추가해야한다.
	//1. 맨끝/마지막 Node를 찾아서 (next가 없어야 마지막 Node)
	//2. 항상 맨끝을 기억 (추가할때 새로 추가한걸 마지막으로 바꾼다.)

	for i := 1; i < 10; i++ {
		AddNode(root, i)
	}
	node := root
	for node.next != nil {
		fmt.Printf("%d -> ", node.val)
		node = node.next
	}
	fmt.Printf("%d \n", node.val)
	//0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
}

func AddNode(root *Node, val int) {
	var tail *Node
	tail = root
	for tail.next != nil {
		tail = tail.next
	}

	node := &Node{val: val}
	tail.next = node
}
