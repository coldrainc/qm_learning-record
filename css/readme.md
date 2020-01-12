# css

- 元素
  - 块级元素
    1. 可以设置宽度和高度
    2. margin和padding上下左右都有效
    3. 可以自动换行
    4. 块级元素占一行
  - 内联元素
    1. 设置不能设置宽度和高度
    2. 设置margin只有左右有效， padding左右都有效
    3. 不会自动换行
  - 行内块级元素
    不自动换行
    能够识别宽高
    默认排列方式为从左到右

- 盒子模型
  - 标准盒子模型 border-sizing: context-box;
    width/height + padding + border + margin
    当给盒子设置大小时，使用padding或者设置border时会撑开盒子
    若不使用怪异盒子又不想，padding撑大，使用width：auto 自动满屏
  - 怪异盒子 border-sizing: border-box;
    width/height + mragin
    设置大小固定，不会别padding撑开，而是向内缩小内容的大小

