# html之打地鼠

1. 分析布局+建立HTML结构
2. box-sizing
    盒子模型在默认的时候对宽度高度的设置是对盒子模型里面内容的设置，然而在元素在页面上的真正的占得位置是整个模型，内容》padding》border》margin，元素出现在页面上，其实是一个paiting绘制原则。
    如何解决？
    box-sizing: border-box;
    占位大小 = border + padding + conten = 设置的width=50% 优先border padding 占位置，余下的才是内容