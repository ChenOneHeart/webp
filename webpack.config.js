const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  optimization: {
    usedExports: true,
  },
  module: {
    rule: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};

// const webpack = require("webpack");
// const path = require("path");

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

// module.exports = {
//   mode: "development",
//   entry: {
//     index: path.resolve(__dirname, "./src/index.js"),
//   },
//   output: {
//     path: path.resolve(__dirname, "./dist"),
//     filename: "[name].[contenthash].js",
//     clean: true,
//     // publicPath: "./",
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   optimization: {
//     moduleIds: "deterministic", // 模块标识符，可被require.reqsolve()获取
//     chunkIds: "named",
//     runtimeChunk: "single",
//     splitChunks: {
//       cacheGroups: {
//         vendor: {
//           test: /[\\/]node_modules[\\/]/,
//           name: "vendors",
//           chunks: "all",
//         },
//       },
//     },
//   },
//   // devtool: "inline-source-map",
//   devServer: {
//     static: "./dist",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: "ts-loader",
//       }, // 加载 ts
//       {
//         test: /\.(css|less|sass)$/i,
//         use: ["style-loader", "css-loader"],
//       }, // 加载样式文件
//       {
//         test: /\.(jpg|jpeg|png|gif|webp|svg)$/i,
//         type: "asset/resource",
//       }, // 加载图片
//       {
//         test: /\.(woff|woff2|eot|tff|otf)$/i,
//         type: "asset/resource",
//       }, // 加载字体文件
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: "Devepoment",
//     }),
//     // new WebpackManifestPlugin({
//     //   fileName: "manifest.json",
//     // }), // 生成manifest文件
//   ],
// };
