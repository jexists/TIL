package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type User struct {
	FirstName string
	LastName  string
	Email     string
	CreateAt  time.Time
}

type fooHandler struct{}

func (f *fooHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	user := new(User)
	err := json.NewDecoder(r.Body).Decode(user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprint(w, err)
		return
	}

	user.CreateAt = time.Now()
	//json 형태로 변경
	data, _ := json.Marshal(user)
	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, string(data))

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
