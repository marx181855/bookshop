const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        network: '@/network',
        utils: '@/utils',
        views: '@/views'
      }
    },
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/,
        threshold: 0,
        deleteOriginalAssets: true
      })
    ]
  },
  chainWebpack: config => {
    config.optimization
      .minimizer('terser')
      .tap(args => {
        Object.assign(args[0].terserOptions.compress, { // 生产模式 console.log 去除
          // warnings: false , // 默认 false
          // drop_console:  ,
          // drop_debugger: true, // 默认也是true
          pure_funcs: ['console.log']
        })
        return args
      })
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/bookshop/dist/' : '/',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  productionSourceMap: false
}
