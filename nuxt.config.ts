// https://nuxt.com/docs/api/configuration/nuxt-config
import eslint from "vite-plugin-eslint";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  typescript: { typeCheck: true },
  // vite 构建工具配置
  vite: {
    // vite 插件配置
    plugins: [
      // 运行或构建项目时，能够自动执行 ESLint 代码检查和修复的插件
      eslint({
        // 缓存现在可以正确识别文件更改，以减少执行时间
        cache: true,
        // 开启自动修复
        fix: true,
        // 打印警告信息
        emitWarning: true,
        // 发生警告不停止构建继续执行
        failOnWarning: false,
        // 打印错误信息
        emitError: true,
        // 发生错误停止构建
        failOnError: true,
        // 指定排除检查的文件和目录
        exclude: [
          "**/node_modules/**",
          "**/dist/**",
          "**/public/**",
          "**/.nuxt/**",
          "**/.output/**",
          "**/.nitro/**",
          "**/.data/**",
        ],
        // 指定要执行检查的文件和目录
        include: [
          "./**/*.ts",
          "./**/*.tsx",
          "./**/*.js",
          "./**/*.jsx",
          "./**/*.vue",
          "./*.ts",
          "./*.tsx",
          "./*.js",
          "./*.jsx",
          "./*.vue",
        ],
      }),
    ],
    // 样式处理配置
    css: {
      // css 预处理器配置选项
      preprocessorOptions: {
        // sass 预处理器
        scss: {
          javascriptEnabled: true,
          // additionalData: `@import "用于声明全局 sass 变量的文件的路径";`
          // 将用于声明全局 sass 变量的文件导入到每个 Vue 文件中的 style 样式模块中
          additionalData: `@import "./assets/styles/var.scss";`,
        },
      },
    },
  },
});
