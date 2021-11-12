function compare(x, y) {
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
var v2 = compare(1, 2);
var v3 = compare("a", "b");
console.log([3, 2, 1].sort(compare));
console.log(['c', 'b', 'a'].sort(compare));
