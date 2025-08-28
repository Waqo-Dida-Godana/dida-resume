const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // entry point of your React app
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true, // cleans dist folder before each build
    assetModuleFilename: "assets/[hash][ext][query]", // for images/fonts
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // for JS/React files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // for styles
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // for images
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // for fonts
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // allows importing without specifying extension
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // template for HTML
      filename: "index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    open: true, // auto open in browser
    hot: true, // hot reload
  },
  mode: "development",
};
