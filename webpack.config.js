const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/main.js"),
    print: path.resolve(__dirname, "./src/print.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // filename: "index.html",
      // template: path.resolve(__dirname, "./public/index.html"),
      title: "管理输出",
    }),
    // new webpack.ids.DeterministicModuleIdsPlugin({
    //   maxLength: 5,
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      }, // 加载 ts
      {
        test: /\.(css|less|sass)$/i,
        use: ["style-loader", "css-loader"],
      }, // 加载样式文件
      {
        test: /\.(jpg|jpeg|png|gif|webp|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|tff|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@test": path.resolve(__dirname, "./src/test"),
    },
  },
  optimization: {
    chunkIds: "total-size",
    moduleIds: 'named' //模块id，可被require.reqsolve()获取
    // moduleIds: false
    // moduleIds: "deterministic",
  },
};
