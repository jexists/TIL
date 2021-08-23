// Promise 약속 : 비동기 간편 처리 (object)


// javascript object for asynchronous operation
// 1. state: pending -> fulfilled (완료) or rejected
// 2. producer vs consumer

// 1. producer
// when new promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
	//doing some heave work(network, read files)
	console.log('doing somethings...');

	setTimeout(() => {
		resolve('jexists');
		reject(new Error('no network'));
	}, 2000);
});

// promise  사용
// consumers: then, catch, finally

//성공적인 건만
promise.then((value) => {
	console.log(value);
});

//성공 & 에러
promise
	//성공
	.then(value => {
		console.log(value);
	})
	//실패
	.catch(error => {
		console.log(error);
	})
	//성공하던 실패 상관없이 마지막 실행
	.finally(() => {
		console.log('finally');
	});

// promise chaining
const fetchNumber = new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 1000);
});

fetchNumber
	.then(num => num * 2)
	.then(num => num * 3)
	.then(num => {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(num - 1), 1000);
		});
	})
	.then(num => console.log(num));

//Error Handling
const getHen = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve('chicken'), 1000);
	});
const getEgg = hen =>
	new Promise((resolve, reject) => {
		// setTimeout(() => resolve(`${hen} => EGG`), 1000);
		setTimeout(() => reject(new Error(`Error ${hen} => EGG`)), 1000);
	});
const cook = egg =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${egg} => chicken`), 1000);
	});

// getHen()
// 	.then(hen => getEgg(hen))
// 	.then(egg => cook(egg))
// 	.then(meal => console.log(meal))

//짧게 코드 적기
getHen()
	.then(getEgg)
	.then(cook)
	.then(console.log);

//에러 체크
getHen()
	.then(getEgg)
	.catch(err => {
		return 'RICE';
	})
	.then(cook)
	.then(console.log)
	.catch(console.log);