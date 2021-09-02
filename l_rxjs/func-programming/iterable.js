const item = "fastcamp";

const fastcampIterable = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        const value = item[i];
        i++;
        const done = i > item.length;
        return {
          value, done
        }
      }
    }
  }
}

for (const v of fastcampIterable) {
  console.log(v);
}

const newArray = ["!", ...fastcampIterable, "!"]
console.log(newArray);

const f = fastcampIterable[Symbol.iterator]();
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());