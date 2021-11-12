
const form = document.querySelector(".js-form"),
	  input = form.querySelector("input"),
	  greeting = document.querySelector(".js-greetings");
// application - local storage(작은 자바스크립트) = 결과: 문자열("strings")
//localStorage.setItem("juae",true)
//localStorage.getItem("juae")
const User_LS = "currentUser",
	  Showing_Cn = "showing";

//사용자 이름기억하기
function saveName(text){
	localStorage.setItem(User_LS,text);
}

//이벤트 없애고 이름나오고 저장하기
function handleSubmit(event){
	event.preventDefault();
	const currentValue = input.value;
	// console.log(currentValue);
	paintGreeting(currentValue);
	saveName(currentValue);
}

//application - storage - local storage
//이름물어보기
function askForName(){
	form.classList.add(Showing_Cn);
	form.addEventListener("submit", handleSubmit)
}

//이름환영문구
function paintGreeting(text){
	form.classList.remove(Showing_Cn);
	greeting.classList.add(Showing_Cn);
	greeting.innerText = `${text}의 오늘 할일`;
}

//이름불러오고 환영 if문
function loadName(){
	const currentUser = localStorage.getItem(User_LS)
	if(currentUser === null){
		askForName()
	}else{
		paintGreeting(currentUser);
	}
}

function init(){
	loadName();
}

init();