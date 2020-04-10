
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/vue-demo" : "/",
    // css: {
    //   requireModuleExtension: false
    // },
    chainWebpack: (config) => {
        config.module
        .rule('css')
        .test(/\.css$/)
        .oneOf('vue')
        .resourceQuery(/\?vue/)
        .use('px2rem')
        .loader('px2rem-loader')
        .options({
            remUnit: 75
        })
    },
    configureWebpack: config => {
     
        config.module.rules.push({
          // 处理markdown文件
          test: /\.md$/,
          use: [
            {
              loader: "vue-loader"
            },
            {
              loader: require.resolve("./src/common/markdownLoader")
            }
          ],
        },
        );
      },
    // configureWebpack:{
    //     resolve:{
    //       alias:{
    //         "assets":"@/assets",
    //       }
    //     }
    //   }
}
