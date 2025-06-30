# 开发weather

- 组件思维
- 切页面
  - 先写template {{占位数据}}
  - html5 语义化
  - BEM 命名

- BFC 基本概念
  Block Formating Context
  - 浮动float 用来实现两（多）列式布局的方案
    float:left float:right 左右
  - 副作用：
    - 子元素离开了文档流，父元素高度塌陷
    - 后面的元素挤占nav空间
  - 和position有区别 四个方向上的定位，完全离开文档流
    float 左右  没有完全离开文档流 影响周边文字，形成环绕效果

  - overflow:auto  等 开启了一个BFC
   - 规则，BFC 元素可以得到内部浮动元素的高度
   - 块级元素不等于BFC 