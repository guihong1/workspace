# Symbol

- 唯一值
  - 用Symbol 函数来声明
  - 给一个label 可选
  - 返回值唯一值
  - 常用于对象字面量 不会，不需要担心 会被覆盖
    key 的用法 这是需要Symbol 需要的原因
    大厂大型项目，对象复杂，难维护 多人协作 
  - Object.keys() 对象的键名数组，但是不包括Symbol 类型的键名
  - Object.values() 对象的键值对数组，但是不包括Symbol 类型的键值对
  - Object.entries() 对象的键值对数组，但是不包含Symbol 类型的键值对
  - Object.getOwnPropertySymbols() 获得对象的Symbol 类型的键名
  - Reflect.ownKeys() 获得对象的所有键名
    Object.getOwnPropertyDescriptors() 获得对象的所有属性的描述对象
    描述对象 有 configurable enumerable value writable
    configurable 可配置的
    enumerable 可枚举的
    value 值
    writable 可写的
    - 虽然 symboles emumberable 属性为true，但是不可枚举。
      因为 Symbols 独特设计，就是提供唯一值，只能通过
      Object.getOwnPropertySymbols() 获得对象的Symbol 类型的键名

- ownProperty ?  
    Object.getOwnPropertyNames(obj) 只获取自身的属性
    