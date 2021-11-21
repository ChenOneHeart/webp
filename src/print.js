export default function printMe() {
  cosnole.log('I get called from print.js!');
 }

// require.cache
// console.log(require.cache[module.id] === module); //true
// console.log(require("./print.js") === module.exports); //true
// delete require.cache[module.id];
// console.log(require.cache[module.id] === undefined); //true
// console.log(module.exports, require("./print.js") !== module.exports); // 理论上是不相等的；实际运行中，则会导致堆栈溢出
// console.log(require.cache[module.id] !== module); //true

// require.ensure
// require.ensure(
//   ["./a", "./b", "./test"],
//   function (require) {
//     console.dir(require);
//   },
//   function (err) {
//     console.log(err);
//   },
//   "a-b-test"
// );