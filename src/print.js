// const test = require('./test1')
// console.log(test);
// if(module.hot) {
//   require.ensure(['b'],function(re) {console.log(re);},function(re) {console.log(re);},chunkName:'test.js')
// }
require.ensure(
  ['./a','./b','./test'],
  function (require) {console.dir(require);},
  function (err) {
    console.log(err);
  },
  'a-b-test'
);

module.exports = {
  main: () => "main",
  hello: () => "hello",
  printMe() {
    console.log("I get called from print.js!");
  },
};

// console.log(
//   require.cache[module.id],
//   module,
//   require.cache[module.id] === module
// ); //true
// console.log(require("./print.js") === module.exports); //true
// delete require.cache[module.id];
// console.log(require.cache[module.id] === undefined); //true
// console.log(module.exports,require("./print.js") !== module.exports); // 理论上是不相等的；实际运行中，则会导致堆栈溢出
// console.log(
//   require.cache[module.id],
//   module,
//   require.cache[module.id] !== module
// ); //true

// console.dir(require.__proto__);
// console.dir(require.cache);
// console.dir(require.ensure);

// test()
