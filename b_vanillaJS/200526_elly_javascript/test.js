console.log("test");

function B(name) {
  this.name = name;
}

console.dir(B);
console.log(B.prototype);

console.log("---화살표---");
const A = (name) => {
  this.name = name;
}

console.dir(A);
console.log(A.prototype);