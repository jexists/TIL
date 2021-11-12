
// console.log("날씨");

// API(Application Programming Interface) - 다른 서버로부터 손쉽게 데이터를 가져올 수 있는 수단
// https://openweathermap.org/current#geo (By geographic coordinates)
//로그인후 API KEY 받기
const weather = document.querySelector('.js-weather');
const API_KEY = 'b873a5fdac61b9d12970bfcb752dcf17';
const COORDS = 'coords'; //string


function getWeather(lat, lon){
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
		// `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
		).then(function(response){
			// console.log(json)
			// console.log(response.json())
			return response.json();
		})
		.then(function(json){
			// console.log(json)
			const temperature = json.main.temp;
			const place = json.name;
			weather.innerText = `${temperature} @ ${place}`
		})
	// .then
	// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`) +APPID추가
	// fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}`) +&추가
	//fetch()안에 가져올 데이터가 들어와야함 
	//앞:https:// API.CALL  (backtick``사용)
}

function saveCoords(coordsObj){
	localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
	// console.log(position);
	// console.log(position.coords.latitude);
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};
	saveCoords(coordsObj)
	getWeather(latitude, longitude)
}

function handleGeoError(){
	console.log('위치를 찾을수없습니다.')
	weather.innerText = '위치를 찾을수없습니다. 인터넷 연결이 필요합니다.'
}

function askForCoords(){
	navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
	const loadedCoords = localStorage.getItem(COORDS);
	if(loadedCoords === null){
		askForCoords();
	}else{
		//getWeather
		const parseCoords = JSON.parse(loadedCoords)
		// console.log(parseCoords);
		getWeather(parseCoords.latitude, parseCoords.longitude);
	}
}

function init(){
	loadCoords();
}
init();