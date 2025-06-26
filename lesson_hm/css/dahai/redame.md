# css底层基础

- 何为css？
```css
h1 {
    color:red;
    text-align:center;
}
```
- css ?
层叠样式
- html DOM 不能裸奔
- css 选择DOM 元素运用样式规则
- css是怎么引入的
   - style 内联样式
   - link 外联样式
   - 行内样式  <p style="color:blue;"></p>
   先下载样式，再解析DOM应用样式
   dom + css = render tree(显示页面 数据结构)
   -> 浏览器渲染引擎 -> 渲染得到页面

- 优先级
  - 从小到大
  - 计算规则
    *10
    标签 1 类名 10 id 100 行内 1000 !import 最大
  - 当选择器比较复杂的时候 优先级加法
    .container ul li:nth-child(ood) 22分
    一定选择最后的元素

    - 兄弟选择器  分为 相邻兄弟选择器（只选择紧挨着的，同父类元素）  通用兄弟选择器（都选，一个父类下的）

- css 选择器分成哪几类
  - 基础选择器
    - 标签选择器
    - 类选择器
    - id选择器
    - 通配符选择器 * 性能不好
  - 组合选择器
    - 后代选择器 空格
    - 子选择器 >
    - 相邻兄弟选择器 +
    - 通用兄弟选择器 ~
  - 伪类选择器
    ::active ::hover ::selection...... 可交互的状态
  - 伪元素选择器
  - 属性选择器





    
