const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    // 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
    config.resolve.alias
    .set('@', path.join(__dirname,'src'))
    .set('components', path.join(__dirname,'src/components'))
    .set('views', path.join(__dirname,'src/views'))
    .set('router', path.join(__dirname,'src/router'))
    .set('assets', path.join(__dirname,'src/assets'))
 }
}