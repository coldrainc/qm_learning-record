# jquery 加载

- 性能优化
    script 标签 具有阻塞性， src下载代码，或行内的js
    并执行， 不要放在头部
    页面的显示， painting 绘制 排列 重绘重排
    声明周期 ， window.onload document.DOMContentLoad

    js 开始 不要阻止页面的下载dom的绘制，但是也不要等到window onload
        DOMContentLoad dom ready img

- $(callback)
    jquery $第一种使用的用途是dom ready 事件
    $(function() {
        // js here
    })
    $(selector) 用于选择元素
    动态页面 Ajax
    可以不用等数据取出来，先显示页面，再去取数据，快的多。