// Promise 약속 : 비동기 간편 처리 (object)


// javascript object for asynchronous operation
// 1. state: pending -> fulfilled (완료) or rejected
// 2. producer vs consumer

// 1. producer
// when new promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
	//doing some heave work(network, read files)
	condole.log('doing somethings...');

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
	.then(value => {
		console.log(value);
	})
	.catch(error => {
		console.log(error);
	});