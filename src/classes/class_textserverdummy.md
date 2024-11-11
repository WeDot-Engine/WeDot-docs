<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/TextServerDummy.xml。 -->

<div id="_class_textserverdummy"></div>

# TextServerDummy

**继承：** [`TextServerExtension`](class_textserverextension.md) **<** [`TextServer`](class_textserver.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A dummy text server that can't render text or manage fonts.

## 描述

A dummy [`TextServer`](class_textserver.md) interface that doesn't do anything. Useful for freeing up memory when rendering text is not needed, as text servers are resource-intensive. It can also be used for performance comparisons in complex GUIs to check the impact of text rendering.

A dummy text server is always available at the start of a project. Here's how to access it:

```

    var dummy_text_server = TextServerManager.find_interface("Dummy")
    if dummy_text_server != null:
        TextServerManager.set_primary_interface(dummy_text_server)
        # If the other text servers are unneeded, they can be removed:
        for i in TextServerManager.get_interface_count():
            var text_server = TextServerManager.get_interface(i)
            if text_server != dummy_text_server:
                TextServerManager.remove_interface(text_server)
```

The command line argument `--text-driver Dummy` (case-sensitive) can be used to force the "Dummy" [`TextServer`](class_textserver.md) on any project.



[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
