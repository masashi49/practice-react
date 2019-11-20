const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devServer: {
    port:"3030",
    hot: true, //jsの変更をwatch
    open: true, //起動時にブラウザopen
  },

  module: {
    rules:[
      {
        test: /\.js(x?)$/,
        loader:'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x?)$/,
        loader:'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ //htmlファイルも一緒にbandle
      template: './src/index.html'
    })
  ],

  resolve: {
    extensions: ['.js','.ts','.tsx'] //拡張子を忖度してくれる
  }

}