const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
          .set("@", resolve("src"))
          .set("assets", resolve("src/assets"))
          .set("components", resolve("src/components"))
          .set("base", resolve("baseConfig"))
          .set("public", resolve("public"));
    },
    // configureWebpack: {
    //     optimization: {
    //       minimizer: [
    //         new UglifyJsPlugin({
    //           uglifyOptions: {
    //             compress: {
    //               warnings: false,
    //               drop_console: true, //console
    //               drop_debugger: false,
    //               pure_funcs: ["console.log"] //移除console
    //             }
    //           }
    //         })
    //       ]
    //     }
    // },
    // 所有 webpack-dev-server 的选项都支持,最常用的配置
    devServer: {
        open: true,//设置自动打开
        port: 3333,//设置端口
    }
    
}
/**
项目开发阶段经常需要console一些测试数据，查看开发过程中遇到的问题，但生产环境中这些console数据需要清掉，以前操作是项目配置一个全局的标志，
判断是否打印console数据，近期发现一个更简便的方法，通过webpack配置生产环境自动清除console。
 */