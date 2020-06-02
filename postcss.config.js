module.exports = {
  plugins: {
    "autoprefixer": {},
    // "postcss-px-to-viewport": {
    //   viewportWidth: 375,   // 视窗的宽度，对应的是我们设计稿的宽度，Iphone6的一般是375 （xx/375*100vw）
    //   viewportHeight: 667, // 视窗的高度，Iphone6的一般是667
    //   unitPrecision: 3,     // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
    //   viewportUnit: "vw",   // 指定需要转换成的视窗单位，建议使用vw
    //   selectorBlackList: ['.ignore', '.hairlines'],// 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
    //   minPixelValue: 1,     // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
    //   mediaQuery: false,     // 允许在媒体查询中转换`px`
    //   // exclude: /(node_module)/i
    // },
    "postcss-plugin-px2rem": {
      rootValue: 37.5,// 换算基准，配合lib-flexible使用 750 的设计稿 如果使用 rem.js 则基准为 16
      unitPrecision: 5,
      mediaQuery: true,
      exclude: /(node_module)/i,
      selectorBlackList: ['html', 'mint-', 'mt-', 'mpvue-', 'calendar', 'iconfont'], // 在rem.js全局作用下，排除指定的文件的影响
      propBlackList: ['border'] // 过滤属性
    }  
  }
}