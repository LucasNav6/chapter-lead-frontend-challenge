const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const packageJson = require("./package.json");
const Dotenv = require("dotenv-webpack");

const webpackConfig = (env) => ({
  entry: "./src/index.tsx",
  ...(env.production || !env.development ? {} : {devtool: "eval-source-map"}),
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin()],
    alias: {
      "@Tests": path.resolve(__dirname, "src/__tests__/"),
      "@Mocks": path.resolve(__dirname, "src/_mocks_/"),
      "@Adapters": path.resolve(__dirname, "src/adapters/"),
      "@Components": path.resolve(__dirname, "src/components/"),
      "@Models": path.resolve(__dirname, "src/models/"),
      "@Pages": path.resolve(__dirname, "src/pages/"),
      "@Routes": path.resolve(__dirname, "src/routes/"),
      "@Services": path.resolve(__dirname, "src/services/"),
      "@Styles": path.resolve(__dirname, "src/scss/"),
      "@Hooks": path.resolve(__dirname, "src/hooks/"),
      "@Storages": path.resolve(__dirname, "src/storage/")
    }
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "build.js",
    publicPath: "./"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        },
        exclude: /dist/
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new webpack.DefinePlugin({
      "process.env.PRODUCTION": env.production || !env.development,
      "process.env.NAME": JSON.stringify(packageJson.name),
      "process.env.VERSION": JSON.stringify(packageJson.version)
    }),
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({files: "./src/**/*.{ts,tsx,js,jsx}"}),
    new Dotenv()
  ],
  devServer: {
    historyApiFallback: true
  }
});

module.exports = webpackConfig;
