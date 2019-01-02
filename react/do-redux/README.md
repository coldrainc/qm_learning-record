# 实现react

- redux 让所有的状态共享， 读可， 写要遵守规则， 这也是redux基本规则， 只有action可以修改state（执行相应的reducer）组件只能dispatch一个action

- reducer 是闺房 不可以直接调用，
  action 才可以
  组件帅哥 不能见面 需要通过dispatch reducer 小姐
  要保护好数据 设置了reducer 提供并且精确计算状态的函数， 组件只有dispatch一个action才能执行reducer