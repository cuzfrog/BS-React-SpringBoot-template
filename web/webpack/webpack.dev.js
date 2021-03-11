const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const Rules = {
  loadTypescript: {
    test: /\.tsx?$/,
    include: /src/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ]
  },
};

const config = {
  mode: "development",
  devtool: 'cheap-source-map',
  module: { rules: Object.values(Rules) },
  devServer: {
    contentBase: path.resolve(__dirname, 'build/dist'),
    compress: true,
    port: 9000,
    host: '0.0.0.0',
    stats: {
      children: false,
    },
    publicPath: '/',
    historyApiFallback: true,
  },
  watchOptions: {
    ignored: ["**/node_modules", "coverage", "build"]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}'
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/styles.css"
    }),
  ],
};

module.exports = merge(common, config);
