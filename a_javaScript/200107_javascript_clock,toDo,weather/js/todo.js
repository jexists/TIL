


const toDoform = document.querySelector(".js-toDoForm"),
	  toDoInput = toDoform.querySelector("input"),
	  toDoList = document.querySelector(".js-toDoList");

const todos_Ls = 'toDos';



function filterFn(toDo){
	return toDo.id === 1;
}

// const toDos = []; //toDos = cleanToDos; let으로 변환
let toDos = []; 


function deleteTodo(event){
	// console.log(event);
	// console.log(event.target);
	// console.dir(event.target); //parentNode
	// console.log(event.target.parentNode); //부모찾기
	const btn = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);
	// const cleanToDos = toDos.filter(filterFn);
	const cleanToDos = toDos.filter(function(toDo){
		// console.log(li.id); //문자
		// console.log(toDo.id); //숫자
		// console.log(li.id, toDo.id); //같지않음
		// return toDo.id !== li.id; 
		return toDo.id !== parseInt(li.id); 
	});
	console.log(cleanToDos)
	toDos = cleanToDos;
	savetoDos()
}

function savetoDos(){
	localStorage.setItem(todos_Ls, JSON.stringify(toDos));
}
//JSON.stringify = 자바스크립트 object를 문자열(string)으로 변환

function paintTodo(text){
	// console.log(text);
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const span = document.createElement("span");
	const newId = toDos.length+1;
	delBtn.innerText = "완료";
	delBtn.addEventListener("click",deleteTodo);

	span.innerText = text;
	li.appendChild(delBtn);
	li.appendChild(span);

	li.id = newId;
	toDoList.appendChild(li);
	const toDoObj = {
		text: text,
		id: newId
	};
	toDos.push(toDoObj);
	savetoDos()
}

function handleSubmit(e){
	e.preventDefault();
	const currentValue = toDoInput.value;
	paintTodo(currentValue);
	toDoInput.value = ""; //value 초기화
}

// function something(toDo){
// 	console.log(toDo.text)
// }

function loadToDos(){
	const loadToDos = localStorage.getItem(todos_Ls);
	if (loadToDos !== null){
		// console.log(loadToDos);
		const parsedToDos = JSON.parse(loadToDos); // strings->object
		// console.log(parsedToDos);
		parsedToDos.forEach(function(toDo){
			// console.log(toDo.text)
			paintTodo(toDo.text);
		});
		// parsedToDos.forEach(something);
	}
}
//JSON:JavaScript Object Notation:데이터를 전달할때, 자바스크립트가 다룰수있도록 object로 바꿔주는 기능
//string - object //object - string
function init(){
	loadToDos();
	toDoform.addEventListener("submit",handleSubmit)
}

init();