<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/modules/text_server_fb/doc_classes/TextServerFallback.xml。 -->

<div id="_class_textserverfallback"></div>

# TextServerFallback

**继承：** [`TextServerExtension`](class_textserverextension.md) **<** [`TextServer`](class_textserver.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A fallback implementation of Godot's text server, without support for BiDi and complex text layout.

## 描述

A fallback implementation of Godot's text server. This fallback is faster than [`TextServerAdvanced`](class_textserveradvanced.md) for processing a lot of text, but it does not support BiDi and complex text layout.

 **Note:** This text server is not part of official Godot binaries. If you want to use it, compile the engine with the option `module_text_server_fb_enabled=yes`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
