# stylus

- weui 源码分析
    1、 widget
    >       以业务模块的方式慢慢迭代
    2、 base  
    > reset 样式重置  
        >mixin、variabe可以在多个widget里复用  

    3、 使用stylus监听整个文件夹目录
    e:\workspace\QM_LESSON\css\stylus\weui>stylus -w  src -d dist  

- 目录
    base 目录下 reset样式  
    fn 通关mixin函数  
    mobile.styl 有特定的意义 设置移动端样式  
    mixin 里面可以给函数设置初始值 因为@是stylus中的一个选择器，而且变量名不能以.开头  