const webpack = require("webpack");

const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const IgnoreNotFoundExportPlugin = require("./IgnoreNotFoundExportPlugin.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const packageJson = require("../package.json");

const MiniCssExtractLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    esModule: true,
  },
};
const CssModuleLoader = {
  loader: "css-loader",
  options: {
    modules: {
      localIdentName: "[name]_[local]_[contenthash:base64:5]",
    },
    sourceMap: false,
    url: false
  }
};

const config = {
  entry: {
    app: "./src/app/index.tsx"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../build/dist")
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "../src")
    },
    extensions: [".ts", ".tsx", ".js"],
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif|ico|ttf)$/,
        include: /src/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // "style-loader",
          MiniCssExtractLoader,
          CssModuleLoader,
          "postcss-loader",
          "sass-loader"
        ],
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: "public"
      }]
    }),
    // new IgnoreNotFoundExportPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        PACKAGE_VERSION: JSON.stringify(packageJson.version),
        REPOSITORY_URL: JSON.stringify(packageJson.repository),
      }
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
      minify: false,
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  bail: process.env.NODE_ENV === "CI",
  externals: [
    { "react": "React" },
    { "react-dom": "ReactDOM" },
    { "react-router-dom": "ReactRouterDOM" },
    { "prop-types": "PropTypes" },
    "immer"
  ],
};

module.exports = config;
