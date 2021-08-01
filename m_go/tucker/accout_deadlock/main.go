package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

type Account struct {
	balance int
	mutex   *sync.Mutex
}

func (a *Account) Widthdraw(val int) {
	a.balance -= val
}

func (a *Account) Deposit(val int) {
	a.balance += val
}

func (a *Account) Balance() int {
	balance := a.balance
	return balance
}

var accounts []*Account

func Transfer(sender, receiver int, money int) {
	accounts[sender].mutex.Lock()
	fmt.Println("Lock", sender)
	time.Sleep(1000 * time.Millisecond)
	accounts[receiver].mutex.Lock()
	fmt.Println("Lock", sender)
	//PROGRAM 동작 막힘 (Deadlock) => 간헐적으로 에러 생김
	// 작게 Lock 작게 잡기 vs 크게 Lock 잡기
	//컨베이어 벨트 방식
	// 생산자 소비자 패턴 (producer consumer pattern) => channel 제공 (queue)
	//channel => thread safe / fixed size

	accounts[sender].Widthdraw(money)
	accounts[receiver].Deposit(money)

	accounts[sender].mutex.Unlock()
	accounts[receiver].mutex.Unlock()

	fmt.Println("Transfer", sender, receiver, money)
}

func GetTotalBalance() int {
	total := 0
	for i := 0; i < len(accounts); i++ {
		total += accounts[i].Balance()
	}
	return total
}

func RandomTranfer() {
	var sender, balance int
	for {
		sender = rand.Intn(len(accounts))
		balance = accounts[sender].Balance()
		if balance > 0 {
			break
		}
	}

	var receiver int
	for {
		receiver = rand.Intn(len(accounts))
		if sender != receiver {
			break
		}
	}

	money := rand.Intn(balance)
	Transfer(sender, receiver, money)
}

func GoTransfer() {
	for {
		RandomTranfer()
	}
}

func PrintTotalBalance() {
	fmt.Printf("Total: %d\n", GetTotalBalance())
}

func main() {
	for i := 0; i < 20; i++ {
		accounts = append(accounts, &Account{balance: 1000, mutex: &sync.Mutex{}})
	}

	go func() {
		for {
			Transfer(0, 1, 100)
		}
	}()

	go func() {
		for {
			Transfer(1, 0, 100)
		}
	}()

	for { //thread
		// PrintTotalBalance()
		time.Sleep(100 * time.Millisecond)
	}
}