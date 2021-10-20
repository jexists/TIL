
 // union 사용할경우 type 가드를 사용하면 좋다.

function compare(x: string, y: string) 
function compare(x: number, y: number)

function compare(x: string | number, y: string | number) {
  // x.toString
  // x.valueOf

  if (typeof x === 'number' && typeof y === 'number') {
    return x === y ? 0 : x > y ? 1 : -1;
  }

  if (typeof x === 'string' && typeof y === 'string') {
    return x.localeCompare(y);
  }
  throw Error('not supported type');
}

// const v1 = compare("a", 1) //함수 overloading해서 사용 불가
const v2 = compare(1, 2)
const v3 = compare("a", "b")
console.log([3,2,1].sort(compare))
console.log(['c','b','a'].sort(compare))

interface User {
  name: string;
}

interface Action {
  do(): void;
}

// type 가드 

function isAction(v: User | Action): v is Action {
  return (<Action>v).do !== undefined;
}

function process(v: User | Action) {
  // if ((<Action>v).do) {
  //   (<Action>v).do();
  // }

  if(isAction(v)) {
    v.do()
  } else {
    console.log(v.name);
  }
}