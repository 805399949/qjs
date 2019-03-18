const BASE_URL = process.env.NODE_ENV === 'production' ? '/qjs' : '/'

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
  //打包时不生成.map文件
  productionSourceMap: false
  //跨域代理
  // devServer: {
  //   proxy: ''
  // }
}
