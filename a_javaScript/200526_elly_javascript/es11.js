console.log('es11');

// 1. Optional Chaining

const person1 = {
  nickname: 'joy',
  job: {
    title: 'frontEnd',
    manager: {
      name: 'peace',
    },
  },
};
const person2 = {
  nickname: 'peace',
};

function printManager(person) {
  console.log(person.job.manager.name);
}
printManager(person1);
// printManager(person2); // manager없어서 에러

function printManagerFix(person) {
  console.log(
    person.job
      ? person.job.manager
        ? person.job.manager.name
        : undefined
      : undefined
  );
};
printManagerFix(person1);
printManagerFix(person2);


function printManagerFixed(person) {
  console.log(
    person.job && person.job.manager && person.job.manager.name
    );
  };
  printManagerFixed(person1);
  printManagerFixed(person2);

function printManagerFinal(person) {
  console.log(person.job ?.manager ?.name);
  };
  printManagerFinal(person1);
  printManagerFinal(person2);


// 2. Nullish Coalescing Operator

//Logical OR operator
//false: false, '', 0, null, undefined
const nickname = 'jexists';
const username = nickname || 'guest';
console.log(username);

const nickname1 = '';
const username1 = nickname1 || 'guest';
console.log(username1);

const nickname2 = '';
const username2 = nickname2 ?? 'guest';
console.log(username2);

const num = 0;
const price = num || 'undefined';
console.log(price); //undefined

const num1 = 0;
const price2 = num ?? 'undefined';
console.log(price2); //0