

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