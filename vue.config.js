const BASE_URL = process.env.NODE_ENV === 'production' ? '/qjs' : '/'
var webpack = require('webpack')
const path = require('path')

const resolve = dir => path.join(__dirname, dir)
module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: ["popper.js", "default"]
      })
    ]
  },
  //打包时不生成.map文件
  productionSourceMap: false
  //跨域代理
  // devServer: {
  //   proxy: ''
  // }
}
