var webpack = require('webpack');
//var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            ['import', [{ libraryName: "antd", style: 'css' }]],
          ],
        },
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },

    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  plugins: [
   
  ]
};
