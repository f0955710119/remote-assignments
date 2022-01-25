const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
});
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const miniCssExtractPlugin = new MiniCssExtractPlugin();

// const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');
// const webpackBundleAnalyzer = new WebpackBundleAnalyzer.BundleAnalyzerPlugin();

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  // devServer: {
  //   port: 3000,
  //   watchContentBase: true,
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // plugins: [htmlPlugin, miniCssExtractPlugin, webpackBundleAnalyzer],
  plugins: [htmlPlugin, miniCssExtractPlugin],
};
