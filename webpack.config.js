const { VueLoaderPlugin } =  require('vue-loader')
module.exports = {
  devtool: 'eval-source-map', // Source Map , 'eval-source-map'模式安全性较低，只能在开发模式下使用
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  mode: 'development', // development, production
  devServer: {
    contentBase: "./public", // 服务器加载页面所在目录
    historyApiFallback: true, // 单页开发时非常有用，所有的跳转指向index.html
    inline: true, // 实时刷新
    port: 8080 // 端口号
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "env", "react"
            ]
          }
        },
        exclude: /node_nodules/
      },
      {
        test: /.vue$/,
        use: {
          loader: "vue-loader",
          options: {
            presets: [
              "vue"
            ]
          }
        },
        exclude: /node_nodules/
      },
      {
        test: /\.scss$/, 
        use: [
          {loader:'style-loader'},
          {
            loader: 'css-loader'
          },
          {loader: 'sass-loader'}
          
          
          
        ], 
      },
      {
        test: /\.(css|less)$/, 
        // 注意:use 的别名 是 loaders。下面3个加载的执行顺序是 3 2 1
        use: [
          // 1.不用传递参数可以简写
          'style-loader',
          {
            loader: 'css-loader',
            // 2.给css-loader传递参数
            options: {
              url: true,
              import: true
            }
          },
          'less-loader'
        ], 
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
