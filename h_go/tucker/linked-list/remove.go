package main

import "fmt"

type Node struct {
	next *Node
	val  int
}

func main() {
	var root *Node
	var tail *Node

	root = &Node{val: 0}
	tail = root

	for i := 1; i < 10; i++ {
		tail = AddNode(tail, i)
	}

	PrintNodes(root)
	// 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9

	root, tail = RemoveNode(root.next, root, tail)

	PrintNodes(root)
	// 0 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9

	root, tail = RemoveNode(root, root, tail)

	PrintNodes(root)
	// 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9

	root, tail = RemoveNode(tail, root, tail)

	PrintNodes(root)
	// 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8

	fmt.Printf("tail: %d\n", tail.val)
	// tail: 8
}

func AddNode(tail *Node, val int) *Node {
	node := &Node{val: val}
	tail.next = node

	return node
}

func RemoveNode(node *Node, root *Node, tail *Node) (*Node, *Node) {
	if node == root {
		root = root.next
		if root == nil {
			tail = nil
		}
		return root, tail
	}

	prev := root
	for prev.next != node {
		prev = prev.next
	}

	if node == tail {
		prev.next = nil
		tail = prev
	} else {
		prev.next = prev.next.next
	}

	return root, tail
}

func PrintNodes(root *Node) {
	node := root
	for node.next != nil {
		fmt.Printf("%d -> ", node.val)
		node = node.next
	}
	fmt.Printf("%d \n", node.val)
}
