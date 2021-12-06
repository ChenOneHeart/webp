import _ from "lodash";
console.log("NODE_ENV=", process.env.NODE_ENV);
import './style.css'
async function getComponent() {
  function component() {
    // const element = document.createElement("div");
    // const _ = await import(/* webpackChunkName: "lodash" */ "lodash");
    // const button = document.createElement("button");
    // const br = document.createElement("br");

    // button.innerHTML = "Click me and look at the console!";
    // element.innerHTML = _.join(["Hello", "webpack"], " ");
    // element.appendChild(br);
    // element.appendChild(button);

    // // Note that because a network request is involved, some indication
    // // of loading would need to be shown in a production-level site/app.
    // button.onclick = (e) =>
    //   import(/* webpackChunkName: "print" */ "./print").then((module) => {
    //     const print = module.default;

    //     print();
    //   });

    // return element;
  }

  // getComponent().then((component) => {
  //   document.body.appendChild(component);
  // });
  // document.body.appendChild(component());
}

const div =document.createElement('div')
div.classList = ['hello']
div.innerText = "hello my name is chenyiheng,I'm 20 years old1"
document.body.appendChild(div)
