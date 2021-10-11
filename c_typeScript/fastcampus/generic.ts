function createPromise<T>(x: T, timeout: number) {
  return new Promise((resolve: (v: T) => void, reject) => {
    setTimeout(() => {
      resolve(x);
    }, timeout);
  })
}

createPromise(1, 100)
  .then(v => console.log(v));

function createTuple2<T, U>(v: T, v2: U): [T, U] {
  return [v, v2]
}

function createTuple3<T, U, D>(v: T, v2: U, v3: D): [T, U, D] {
  return [v, v2, v3]
}

const t1 = createTuple2('user1', 1000)