package main

import (
	"net/http"
	"tucker_web/myapp"
)

func main() {

	http.ListenAndServe(":3000", myapp.NewHttpHandler())
}
