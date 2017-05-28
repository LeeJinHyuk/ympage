const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");

module.exports = {
  entry : {
    app : "./source/app/app.js",
    vendor: ["react", "react-dom"]
  },
  output : {
    path : path.join(__dirname, "source/dist"),
    filename : "[name]-[hash].js"
  },
  module : {
    rules :
    [
      {
        test : /\.jsx?$/,
        loader : "babel-loader",
        options :
        {
          presets :
            [["es2015",{module:"false"}], "react"],
        },
        exclude :
        [
          "node_modules"
        ],
      }
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css']
  },
  plugins : [
    new HtmlWebpackPlugin({
      title : "Seoul Parking",
      template : path.join(__dirname, "source/index.html")
    }),
    new WebpackCleanupPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name : "vendor"
    })
  ]
};
