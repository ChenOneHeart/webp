import _ from "lodash";
import printMe from "./print.js";
// import './test/iconfont.css'

// var d1 = require('./test1.js');
// console.log(require('./test1.js') === d1)
// // delete require.cache[require.resolve('./test1.js')];
// console.log(require('./test1.js') === d1)

// console.dir(require.resolve("./main.js")); // moduleIds
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
