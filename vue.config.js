const port = process.env.port || process.env.npm_config_port || 9009 // dev port
module.exports = {

  // ...

  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // 配置反向代理
    proxy: {
      // 当地址中有/api的时候会触发代理机制
      '/api': {
        target: 'http://localhost:8082', // 要代理的服务器地址  这里不用写 api
        changeOrigin: true // 是否跨域
        // 重写路径
        // pathRewrite: {
        //   '^/api': '/'
        // }
      }
    }
  }

}
