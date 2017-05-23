import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackCleanupPlugin from "webpack-cleanup-plugin";

module.exports = {
  entry : {
    app : "./source/app/app.js"
  },
  output : {
    path : path.join(__dirname, "source/dist"),
    filename : "[name]-[hash].js",
    publicPath : "source/app"
  },
  plugins : [
    new HtmlWebpackPlugin({
      title : "Seoul Parking",
      template : path.join(__dirname, "source/index.html")
    }),
    new WebpackCleanupPlugin()
  ]
};
