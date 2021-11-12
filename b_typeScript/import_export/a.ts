export let a = 10;
let b = 30;
export class App {

}

class Angular {
  name = "angular"
}
export default Angular
//default 한개만 내보내겠다라는 의미

// commonjs =========
// exports.a = 10;
// var App = (function () {
//     function App() {
//     }
//     return App;
// })();
// exports.App = App;
// //# sourceMappingURL=a.js.map

//amd ========
// define(["require", "exports"], function (require, exports) {
//   exports.a = 10;
//   var App = (function () {
//       function App() {
//       }
//       return App;
//   })();
//   exports.App = App;
// });