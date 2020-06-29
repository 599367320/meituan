module.exports = {
  // 打包时使用相对路径
  publicPath: './',
  // 构建时的输出目录
  outputDir: 'dist',
  // 放置静态资源的目录
  assetsDir: 'static',
  // 保存的时候使用eslint-loader进行检查
  lintOnSave: true,
  // 使用带有浏览器内编译器的完整构建版本
  runtimeCompiler: true
}
