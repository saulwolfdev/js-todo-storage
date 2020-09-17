const path = require('path');
const HtmlWepbackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/js/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
	],
	// resolve: {
	// 	extensions: ['*', '.js'],
	//   },
  },
  devServer: {
    port: 4000,
  },
  plugins: [
    new HtmlWepbackPlugin({
      // template: './src/index.html',
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: './css/app.bundle.css',
    }),
  ],
};
