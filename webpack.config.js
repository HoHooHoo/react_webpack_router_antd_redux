var webpack = require('webpack')
var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  // devServer: {
  //   hot: true, // 告诉 dev-server 我们在使用 HMR
  //   contentBase: path.resolve(__dirname, 'dist'),//告诉服务器从哪里提供内容,只有在你想要提供静态文件时才需要
  //   publicPath: '/',//确定应该从哪里提供 bundle，并且此选项优先
  //   port: 8080,
  //   compress: false,// 一切服务都启用gzip 压缩(true)
  //   lazy: true, //使用惰性加载
  //   filename: "bundle.js"//使用 filename，可以只在某个文件被请求时编译。在不使用惰性加载时没有效果
  // },
  module: {
    rules: [
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
  resolve: {
    //使用户在引入模块时不带扩展
    extensions: ['.js', '.jsx', '.json']
  },
  //报错时显示代码具体位置
  devtool: "cheap-eval-source-map",
  plugins: [
    // webpack-dev-server 强化插件 启用 HMR
    new webpack.HotModuleReplacementPlugin(),

    new webpack.optimize.OccurrenceOrderPlugin(),
    //压缩代码
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     drop_console: false,
    //   }
    // }),
    // 编译时(compile time)插件
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
  ],
};