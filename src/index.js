import _ from "lodash";
// import './test/iconfont.css'
// import './style.css'
console.dir(require.resolve("./index.js")); // moduleIds
async function getComponent() {
  const element = document.createElement("div");
  const { default: _ } = await import(
    /* webpackChunkName: "my-chunk-name" */
    /* webpackMode: "lazy" */
    /* webpackPrefetch: true */
    "lodash"
  );
  element.innerHTML = _.join(["webpack"], " ");

  element.onclick = async () => {
    const { default: test } = await import(
      /* webpackPrefetch: true */
      /* webpackMode:'lazy' */
      "./test/test"
    );
    let span = document.createElement("span");
    span.innerHTML = test();
    element.appendChild(span);
  };

  return element;
}
getComponent().then((component) => {
  document.body.appendChild(component);
});
