const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/main.js"),
    print: path.resolve(__dirname, "./src/print.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash].bundle.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Devepoment",
    }),
    new WebpackManifestPlugin({
      fileName: "manifest.json",
      filter: (file) => {
        if (!(file instanceof Object)) {
          return false;
        }
        return true;
      },
    }),
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
      }, // 加载图片
      {
        test: /\.(woff|woff2|eot|tff|otf)$/i,
        type: "asset/resource",
      }, // 加载字体文件
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimization: {
    // chunkIds: "total-size",
    moduleIds: "named", //模块标识符，可被require.reqsolve()获取
  },
  // devtool: 'inline-source-map'
};
