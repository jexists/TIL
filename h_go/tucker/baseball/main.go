package main

import (
	"fmt"
	"math/rand"
	"time"
)

type ResultGame struct {
	strikes int
	balls   int
}

func main() {
	//랜덤 시드값 지정 (안할경우 숫자가 계속 똑같음)
	rand.Seed(time.Now().UnixNano())

	// 무작위 숫자 3개 만들기
	numbers := MakeNumbers()

	cnt := 0

	for {
		cnt++
		// 사용자의 입력
		inputNumbers := InputNumbers()

		// 결과 비교
		result := CompareNumbers(numbers, inputNumbers)

		PrintResult(result)

		if IsGameEnd(result) {
			// 게임끝
			break
		}
	}

	// 게임끝 결과
	fmt.Printf("%d 번만에 맞췄습니다. \n", cnt)
}

func MakeNumbers() [3]int {

	// 0~9 겹치지 않는 랜덤 숫자 3개 반환
	var result [3]int

	for i := 0; i < 3; i++ {
		for {
			n := rand.Intn(10)
			duplicated := false
			for j := 0; j < i; j++ {
				if result[j] == n {
					duplicated = true
					break
				}
			}
			if !duplicated {
				result[i] = n
				break
			}
			if result[0] == 0 {
				duplicated = true
				continue
			}
		}
	}
	fmt.Println(result)
	return result
}

func InputNumbers() [3]int {
	// 사용자 0~9 겹치지 않는 숫자 3개 입력받아 반환
	var result [3]int

	for {
		fmt.Println("겹치지 않는 0~9 사이의 숫자 3개를 입력")
		var num int
		// _ -> 이름없는 변수, 사용하지않는 변수
		_, err := fmt.Scanf("%d\n", &num)

		//에러가 있는 경우
		if err != nil {
			fmt.Println("잘못 입력하셨습니다.")
			continue
		}
		index := 0

		success := true
		for num > 0 {
			n := num % 10
			num = num / 10

			duplicated := false
			for j := 0; j < index; j++ {
				if result[j] == n {
					duplicated = true
					break
				}
			}
			if duplicated {
				fmt.Println("숫자가 겹치지 않아야 합니다.")
				success = false
				break
			}

			if index >= 3 {
				fmt.Println("3개보다 많은 숫자를 입력하였습니다.")
				success = false
				break
			}

			result[index] = n
			index++
		}

		if success && index < 3 {
			fmt.Println("3개의 숫자를 입력하세요.")
			success = false
		}

		if !success {
			continue
		}
		break
	}

	result[0], result[2] = result[2], result[0]
	fmt.Println(result)
	return result
}

func CompareNumbers(numbers, inputNumbers [3]int) ResultGame {
	//두개의 숫자 비교를 해서 결과 반환
	strikes := 0
	balls := 0

	for i := 0; i < 3; i++ {
		for j := 0; j < 3; j++ {
			if numbers[i] == inputNumbers[j] {
				if i == j {
					strikes++
				} else {
					balls++
				}
				break
			}
		}
	}

	return ResultGame{strikes, balls}
}

func PrintResult(result ResultGame) {
	fmt.Printf("%dS %dB \n", result.strikes, result.balls)
}

func IsGameEnd(result ResultGame) bool {
	return result.strikes == 3
}
