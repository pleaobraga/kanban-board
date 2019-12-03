const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
    hot: true,
    port: 4000,
    inline: true,
    historyApiFallback: true
  },

  mode: 'development'
})
