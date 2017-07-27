/**
 * Created by Administrator on 2017/7/17.
 */
  /**
   * webpack配置文件
   * */
var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: {
    index:'./src/main.js',
  },
  output: {
    //path 是 nodeJS 的一个基础模块，这里用来获取绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },{
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=2048'
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          "presets": ["es2015"]
        }
      },{
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
  },
  plugins:[
    //代码压缩
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true
      }
    })
  ]
}

