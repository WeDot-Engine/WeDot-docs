<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/FramebufferCacheRD.xml。 -->

<div id="_class_framebuffercacherd"></div>

# FramebufferCacheRD

**继承：** [`Object`](class_object.md)

Framebuffer cache manager for Rendering Device based renderers.

## 描述

Framebuffer cache manager for Rendering Device based renderers. Provides a way to create a framebuffer and reuse it in subsequent calls for as long as the used textures exists. Framebuffers will automatically be cleaned up when dependent objects are freed.

## 方法

|||
|:-:|:--|
| [`RID`](class_rid.md) | [`get_cache_multipass`](class_framebuffercacherd.md#class_framebuffercacherd_method_get_cache_multipass) ( textures: [Array](class_array.md) [`RID`](class_rid.md), passes: [Array](class_array.md) [`RDFramebufferPass`](class_rdframebufferpass.md), views: [`int`](class_int.md) ) static[^static] |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_framebuffercacherd_method_get_cache_multipass"></div>

[`RID`](class_rid.md) **get_cache_multipass** ( textures: [Array](class_array.md) [`RID`](class_rid.md), passes: [Array](class_array.md) [`RDFramebufferPass`](class_rdframebufferpass.md), views: [`int`](class_int.md) ) static[^static]<div id="class_framebuffercacherd_method_get_cache_multipass"></div>

Creates, or obtains a cached, framebuffer. `textures` lists textures accessed. `passes` defines the subpasses and texture allocation, if left empty a single pass is created and textures are allocated depending on their usage flags. `views` defines the number of views used when rendering.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
