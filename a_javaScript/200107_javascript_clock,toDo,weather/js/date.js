const mydate = document.querySelector('.js-date');
	const myM = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
	const myW = ['일','월','화','수','목','금','토']

	setInterval(function(){
		const date = new Date();
		let nowY = date.getFullYear(); //현재 연도
		let nowM = date.getMonth(); //0부터 시작해서 이상하게 나온댜 ㅠ (0=1월 / 0~11)
		let nowD = date.getDate(); //날짜는 1부터 잘나온다. (1~31)
		let nowW = date.getDay(); //숫자로 0부터 나온다. (0=일 / 0~6)
		//txt.innerText = "순수하게 입력"
		// if (nowMin<10){nowMin += "0"}else{nowMin};
		mydate.innerText = nowY + '년 ' + myM[nowM] +" " + nowD + '일' + " " + myW[nowW] + '요일';
		/*noM = 11이 나오는 이유 = 0부터 시작해서*/
	},100);