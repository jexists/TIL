package main

import (
	"fmt"
	"net/http"
)

func main() {
	// HandleFunc
	// -> 핸들러 등록
	// 어떤 경로에 해당하는 Request가 들어왔을 때 어떤 일을 할것인지 핸들러 등록
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Hello World")
	})
	// "/" -> 초기경로 / index 경로 / 첫번째 도메인경로
	// func(w http.ResponseWriter, r *http.Request) {}
	// -> 정해진 형태의 함수를 받음
	// -> response Write(보낼수 있음) , 사용자가 요청
	// fmt.Fprint(w, "Hello World")
	// -> w(http.ResponseWriter)에 해당하는 곳에 문자열을 출력해라

	// 웹서버 실행
	http.ListenAndServe(":3000", nil)
	// request를 기달림
	// 기다라는 포트는 3000번
}

// 패키지 단위로 관리 할 경우
// $go mod init 폴더이름

// 실행
// go run main.go
