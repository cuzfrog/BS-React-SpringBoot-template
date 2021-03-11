const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const Rules = {
  loadTypescript: {
    test: /\.tsx?$/,
    include: /src/,
    use: [
      {
        loader: 'ts-loader',
      },
    ]
  },
};

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: "[name].[contenthash].bundle.js",
  },
  devtool: 'source-map',
  module: { rules: Object.values(Rules) },
  optimization: {
    minimize: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/styles.[contenthash].css"
    }),
  ],
});
