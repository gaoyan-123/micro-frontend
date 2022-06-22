const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    output: {
      library: 'vue-app',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  }
}) 
