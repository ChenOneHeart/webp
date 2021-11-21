import _ from "lodash";
import printMe from "./print.js";
// import './test/iconfont.css'

// var d1 = require('./test1.js');
// console.log(require('./test1.js') === d1)
// // delete require.cache[require.resolve('./test1.js')];
// console.log(require('./test1.js') === d1)

// console.log(require.cache[module.id] === module);
// console.log(require('./main.js') === module.exports);
// delete require.cache[module.id];
// console.log(require.cache[module.id] === undefined);
// // require('./main.js') !== module.exports; // 理论上是不相等的；实际运行中，则会导致堆栈溢出
// console.log(require.cache[module.id] !== module);
// require.ensure





console.dir(require.resolve('./main.js')) // moduleIds
function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
