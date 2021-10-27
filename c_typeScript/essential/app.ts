
function addAgeTS(age: number): number {
  return age + 1;
}

let ageTS: number = addAgeTS(30);
console.log(ageTS);

// ageTS = addAgeTS('30'); //ERROR