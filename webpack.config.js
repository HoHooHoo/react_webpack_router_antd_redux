var webpack = require('webpack')
var path = require('path');

module.exports = {
  entry: [
    //'webpack/hot/dev-server',
    //'webpack-dev-server/client?http://localhost:3000',
    path.resolve(__dirname, "index.js"),
  ],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/, exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
        query: {
          presets: ['react', 'es2015'],
          plugins: [
            ["import", { libraryName: "antd", style: "css" }] // `style: true` 会加载 less 文件
          ]
        },
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }

    ]
  },
  /*
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],*/
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}
