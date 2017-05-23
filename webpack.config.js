const path = require('path');

module.exports = {
  entry: "./src/index.jsx", // string | object | array

  output: {
    path: path.resolve(__dirname, "dist"), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    filename: "bundle.js", // string
    // 「入口分块(entry chunk)」的文件名模板（出口分块？）
  },

  module: {
    // 关于模块配置
    rules: [
      // 模块规则（配置 loader、解析器等选项）
      {
        test: /\.jsx?$/,
        // include: [
        //   path.resolve(__dirname, "src")
        // ],
        loader: "babel-loader",
        // 应该应用的 loader，它相对上下文解析
        options: {
          presets: ["es2015"]
        },
        // loader 的可选项
      },

    ],


  },

  resolve: {
    // 用于查找模块的目录
    extensions: [".js", ".json", ".jsx", ".css"],
    // 使用的扩展名

  },

  plugins: [
    // ...
  ],
  // 附加插件列表



}
