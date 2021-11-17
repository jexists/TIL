package main

import (
	"fmt"
	"net/http"
)

type fooHandler struct{}

func (f *fooHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello Foo")
}

func barHandler(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("name")
	if name == "" {
		name = "world~"
	}
	fmt.Fprintf(w, "Hello %s", name)
}

func main() {

	// instance 만들어서 등록
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Hello world") //writer에다가 print
	})

	mux.HandleFunc("/bar", barHandler)

	mux.Handle("/foo", &fooHandler{})

	http.ListenAndServe(":3000", mux) // 웹서버 실행
}
