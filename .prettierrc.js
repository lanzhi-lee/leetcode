module.exports = {
  // 不添加行尾分号
  semi: false,
  // 文件使用单引号
  singleQuote: true,
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 2,
      },
    },
  ],
}
