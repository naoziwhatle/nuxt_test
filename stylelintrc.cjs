// @see https://stylelint.bootcss.com/

module.exports = {
  // 继承规则配置
  extends: [
    // 继承 Stylelint 中标准的配置
    "stylelint-config-standard",
    // 继承 Stylelint 中适合于 vue 中 template 样式格式化的配置
    "stylelint-config-html/vue",
    // 继承 Stylelint 中标准的适合 scss 的配置
    "stylelint-config-standard-scss",
    // 继承 Stylelint 中推荐的适合于 vue 中 scss 样式格式化的配置
    "stylelint-config-recommended-vue/scss",
    // 继承 Stylelint 中以 recess 的方式对 CSS 属性进行排序的配置
    "stylelint-config-recess-order",
    // 继承规则配置，关闭 Stylelint 中所有不必要的或可能与 Prettier 冲突的规则
    "stylelint-config-prettier",
  ],
  // 对继承的规则配置进行重写覆盖
  overrides: [
    // 使用 PostCSS 的 scss 语法解析器解析匹配文件中的样式代码
    {
      files: ["**/*.(scss|css|vue|html)"],
      customSyntax: "postcss-scss",
    },
    // 使用 PostCSS 的 html 语法解析器解析匹配文件中的代码
    {
      files: ["**/*.(html|vue)"],
      customSyntax: "postcss-html",
    },
  ],
  // 配置不需要 Stylelint 检查的文件类型
  ignoreFiles: [
    "**/*.js",
    "**/*.jsx",
    "**/*.tsx",
    "**/*.ts",
    "**/*.json",
    "**/*.md",
    "**/*.yaml",
  ],
  /**
   * 自定义 Stylelint 规则
   * null  => 关闭该规则
   * always => 必须
   */
  rules: {
    // 为样式属性关键字的属性值指定小写或大写，"lower"(属性值必须小写)|"upper"(属性值必须大写)
    "value-keyword-case": null,
    // 关闭禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    "no-descending-specificity": null,
    // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    "function-url-quotes": "always",
    // 关闭禁止存在空的源码，即样式代码块中可以为空
    "no-empty-source": null,
    // 关闭强制选择器类名的格式
    "selector-class-pattern": null,
    // 关闭禁止未知的样式属性，即允许使用未知的样式属性
    "property-no-unknown": null,
    // 大括号之前必须有一个空格或不能有空白符，always —— 大括号 {} 之前必须有一个空格
    "block-opening-brace-space-before": "always",
    // 关闭禁止使用带有浏览器前缀的属性值，如 --webkit-box，即允许使用
    "value-no-vendor-prefix": null,
    // 关闭禁止使用带有浏览器前缀的属性，如 -webkit-mask，即允许使用
    "property-no-vendor-prefix": null,
    // 禁止使用未知的伪类选择器
    "selector-pseudo-class-no-unknown": [
      // 不允许使用未知的伪类选择器
      true,
      {
        // 忽略属性，对于配置在 ignorePseudoClasses 中的伪类选择器允许使用
        // 修改element默认样式的时候能使用到
        ignorePseudoClasses: ["global", "v-deep", "deep"],
      },
    ],
  },
};
