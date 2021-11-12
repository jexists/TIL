

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");


canvas.width = 600;
canvas.height = 400;

const initialColor = "#2c2c2c" 
// ctx.fillcolor
// ctx.strokeStyle = "#2c2c2c"; //선색깔 ->반복
// ctx.fillStyle = "#2c2c2c"; //사각형 색깔 ->반복
ctx.fillStyle = "#fff"; //도화지 투명X 흰색만들기
ctx.fillRect(0,0,600,400)
ctx.strokeStyle = initialColor; //선색깔 
ctx.fillStyle = initialColor; //선색깔 
ctx.lineWidth = 2.5; //선두께

// ctx.fillRect(50,20,100,49); //x,y,얼마나 커지는지
// ctx.fillStyle = "green"; //사각형 색깔

let painting = false;
let filling = false;

function stopPainting(){
	painting = false;
}

function startPainting(){
	painting = true
;}

function onMouseMove(e){
	// console.log(e);
	const x = e.offsetX;
	const y = e.offsetY;
	// console.log(x , y);
	if(!painting){
		console.log("creating path", x, y);
		ctx.beginPath();
		ctx.moveTo(x, y);
	}else{
		console.log("creating line", x, y);
		ctx.lineTo(x, y);
		ctx.stroke();
	}
}
// function onMouseDown(e){
// 	//console.log(e);
// 	painting = true;
// }

// function onMouseUp(e){
// 	painting = false;
// 	stopPainting();
// }

// function onMouseLeave(e){
// 	painting = false;
// }

function changeColor(e){
	// console.log(e.target.style);
	const color = e.target.style.backgroundColor;
	// console.log(color);
	ctx.strokeStyle = color; //선색깔
	ctx.fillStyle = color; //fill/사각형 색깔
}

function rangeChange(e){
	console.log(e.target.value);
	const size = e.target.value;
	ctx.lineWidth = size;
}
function modeClick(){
 if (filling === true){
 	filling = false;
 	mode.innerText = "fill"

 }else{
 	filling = true;
 	mode.innerText = "paint"
 	// ctx.fillStyle = ctx.strokeStyle
 }
}

function canvasClick(){
	if(filling ===true){
	ctx.fillRect(0,0,600,400);
	}
}
function handleCM(e){
	// console.log(e);
	e.preventDefault(); //우클릭 방지
}
function saveClick(e){
	// console.log(e);
	const image = canvas.toDataURL(); //png로 하기
	// const image = canvas.toDataURL("image/jpeg"); //jpge로 만들기
	// console.log(image);
	const link = document.createElement("a");
	link.href = image; //경로설정
	link.download = "PaintJS"; //다운받을때 이름
	// link.download = image;
	// console.log(link);
	link.click();
}
if (canvas) {
	canvas.addEventListener("mousemove",onMouseMove);
	//MouseEvent {isTrusted: true, screenX: 827, screenY: 257, clientX: 827, clientY: 154, …}
	//clientX,Y: 윈도우 전체의 범위 내에서 마우스 위치값을 나타냄
	//offset이 필요! 캔버스 범위

	// canvas.addEventListener("mousedown",onMouseDown); //삭제-stratpainting
	canvas.addEventListener("mousedown",startPainting);
	// canvas.addEventListener("mouseup",onMouseUp); //삭제-stoppaining
	canvas.addEventListener("mouseup",stopPainting);
	// canvas.addEventListener("mouseleave",onMouseLeave);//삭제-stoppaining
	canvas.addEventListener("mouseleave",stopPainting);

	canvas.addEventListener("click",canvasClick); //캔버스 클릭해서 전체색깔 변경
	canvas.addEventListener("contextmenu", handleCM); //우측클릭 저장버튼
}

// console.log(colors); //HTMLCollection(9)
// console.log(Array.from(colors));

Array.from(colors).forEach(color => color.addEventListener("click",changeColor));

if(range){
	range.addEventListener("input",rangeChange);
}
if(mode){
	mode.addEventListener("click",modeClick);
}

if(save){
	save.addEventListener("click",saveClick);
} //HTMLCanvasElement.toDataURL() = png저장