
//export => 중괄호 (필요한애들만 불러온다)
import { a, App } from './a';
// b는 export안했기때문에 불러올수 없다
// import { a, App, b } from './a';


console.log(a);

let app = App;


//export default => 하나
import Angular from './a';

//다 가져온다 all은 변경가능
import * as all from './a';
all.App
all.a
all.default //Angular


// commonjs =========
// var a_1 = require('./a');
// console.log(a_1.a);
// var app = a_1.App;
// //# sourceMappingURL=b.js.map


//amd=========
// define(["require", "exports", './a'], function (require, exports, a_1) {
//   console.log(a_1.a);
//   var app = a_1.App;
// });