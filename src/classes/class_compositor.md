<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Compositor.xml。 -->

<div id="_class_compositor"></div>

# Compositor

**实验性：** More customization of the rendering pipeline will be added in the future.

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Stores attributes used to customize how a Viewport is rendered.

## 描述

The compositor resource stores attributes used to customize how a [`Viewport`](class_viewport.md) is rendered.

## 属性

|||
|:-:|:--|
| [Array](class_array.md) [`CompositorEffect`](class_compositoreffect.md) | [`compositor_effects`](class_compositor.md#class_compositor_property_compositor_effects) | ``[]`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_compositor_property_compositor_effects"></div>

[Array](class_array.md) [`CompositorEffect`](class_compositoreffect.md) **compositor_effects** = ``[]`` <div id="class_compositor_property_compositor_effects"></div>

- `void` **set_compositor_effects** ( value: [Array](class_array.md) [`CompositorEffect`](class_compositoreffect.md) )
- [Array](class_array.md) [`CompositorEffect`](class_compositoreffect.md) **get_compositor_effects** ( )

The custom [`CompositorEffect`](class_compositoreffect.md) s that are applied during rendering of viewports using this compositor.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
