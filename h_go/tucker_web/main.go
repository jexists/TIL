package main

import (
	"fmt"
	"net/http"
)

type fooHandler struct{}

func (f *fooHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello Foo")
}

func main() {
	// http.HandleFunc("경로", func(w 응답받는 writer, r *사용자가 요청한 request) { 경로일 경우 실행되는 함수})
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Hello world") //writer에다가 print
	})

	http.HandleFunc("/bar", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Hello Bar")
	})

	// instance로  (interface)
	http.Handle("/foo", &fooHandler{})

	http.ListenAndServe(":3000", nil) // 웹서버 실행
}
