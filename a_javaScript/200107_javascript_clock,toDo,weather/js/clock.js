
const clockContainer = document.querySelector(".js-clock"),
	  clockTitle = clockContainer.querySelector("h1"),
	  clockHour = clockContainer.querySelector(".hour"),
	  clockMin = clockContainer.querySelector(".min"),
	  clockSec = clockContainer.querySelector(".sec"),
	  clockAmPm = clockContainer.querySelector(".ampm");

const date = new Date();
//date.getDay(); //
//date.getDate(); //
//date.getHours(); //시간
//date.getMinutes(); //분
// console.log(clockMin);
//시계만들기 
// function getTime() {
// 	const date = new Date();
// 	const minutes = date.getMinutes();
// 	const hours = date.getHours();
// 	const seconds = date.getSeconds();
// 	// clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
// }


function addZeros(num, digit) { // 자릿수 맞춰주기
	  var zero = '';
	  num = num.toString();
	  if (num.length < digit) {
	    for (i = 0; i < digit - num.length; i++) {
	      zero += '0';
	    }
	  }
	  return zero + num;
}

function getHour() {
	const date = new Date();
	// const hours = date.getHours();
	let hours = addZeros(date.getHours(),2);
	// clockHour.innerText = `${hours < 10 ? `0${hours}` : `0${hours - 12}`}`;
	if(hours >= 12){
    	hours = addZeros(hours - 12,2);
    }
	clockHour.innerText = hours;
}

function getMins() {
	const date = new Date();
	const minutes = date.getMinutes();
	clockMin.innerText = `${minutes < 10 ? `0${minutes}` : minutes}`;
}

function getSec() {
	const date = new Date();
	const seconds = date.getSeconds();
	clockSec.innerText = `${seconds < 10 ? `0${seconds}` : seconds}`;
	// clockSec.innerText = `${seconds >= 50 ? `0${seconds}` : seconds}`;
	seconds >= 55 ? clockSec.style.color = '#F6CECE' : clockSec.style.color = '#fff';
	// if (seconds >= 50) 
	// 	{clockSec.style.color = '#F6CECE';
	// }else 
	// 	{clockSec.style.color = '#fff';}
}

function getTime() {
	const date = new Date();
	const hours = date.getHours();
	clockAmPm.innerText = `${hours <= 12 ? `am` : `pm`}`;
}

// console.log(date);

function init() {
	getTime();
	getHour();
	getMins();
	getSec();
	setInterval(getTime,1000);
	setInterval(getHour,1000);
	setInterval(getMins,1000);
	setInterval(getSec,1000);
}


init();