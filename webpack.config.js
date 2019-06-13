const HtmlWebPackPlugin = require("html-webpack-plugin");
var config = {
    entry: './src/main.js',     // 設定最先開始執行檔案，並進行編譯及包裝 
  
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
      ]
}
module.exports = config;    // 模組匯出