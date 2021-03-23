module.exports = function (config) {
  config.set({
    // 基础路径，用在files，exclude属性上
    basePath: "",
    // 使用的断言库
    frameworks: ["jasmine"],
    // 载入浏览器的文件
    files: ["./utils/*.js", "./tests/unit/**/*.js"],
    // 排除文件列表
    // exclude: ["node_modules"],
    // 预处理
    // 可用的预处理: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "./tests/unit/**/*.js": ["coverage"],
      "./utils/*.js": ["coverage"],
    },
    //  使用测试结果报告者
    //  可能的值: "dots", "progress"
    //  可用的报告者：https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress", "coverage"],
    // 服务端口号
    port: 9876,
    // 启用或禁用输出报告或者日志中的颜色
    colors: true,
    // 日志等级
    // 可能的值: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // 启用或禁用自动检测文件变化进行测试
    autoWatch: false,
    // 测试启动的浏览器
    browsers: ["PhantomJS"],
    // 无头浏览器需要改为true
    singleRun: true,
    // 并发级别（启动的浏览器数）
    concurrency: Infinity,
    // coverage报表设置
    // https://www.npmjs.com/package/karma-coverage
    coverageReporter: {
      type: "html",
      dir: "./docs/coverage/",
    },
  })
}
