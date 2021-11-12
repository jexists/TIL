

const body = document.querySelector("body");
const img_num = 3;
// Math.random() //랜덤 숫자
// Math.radom() * 5 //"1~5" 나오게
// Math.ceil() //ceiling(천장)
// Math.floor() //floor바닥
// Math.floor(Math.random() * 5)

// Math.floor(Math.random() * 3) //0,1,2

// function handleImgLoad(){
// 	console.log("finished loading")
// } //API

function paintImage(imgNumber){
	const image = new Image();
	image.src = `./img/${imgNumber +1}.jpg`;
	image.classList.add('bgImage')
	// body.appendChild(image);
	body.prepend(image);
	// image.addEventListener("loadend",handleImgLoad) //API
}

function genRandom(){
	const number = Math.floor(Math.random() * 3) 
	return number;
}

function init(){
	const randomNumber = genRandom(); 
	paintImage(randomNumber)
}

init();