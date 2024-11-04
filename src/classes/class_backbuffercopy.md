<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/BackBufferCopy.xml。 -->

<div id="_class_backbuffercopy"></div>

# BackBufferCopy

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A node that copies a region of the screen to a buffer for access in shader code.

## 描述

Node for back-buffering the currently-displayed screen. The region defined in the **BackBufferCopy** node is buffered with the content of the screen it covers, or the entire screen according to the [`copy_mode`](#class_backbuffercopy_property_copy_mode). It can be accessed in shader scripts using the screen texture (i.e. a uniform sampler with `hint_screen_texture`).

 **Note:** Since this node inherits from [`Node2D`](class_node2d.md) (and not [`Control`](class_control.md)), anchors and margins won't apply to child [`Control`](class_control.md)-derived nodes. This can be problematic when resizing the window. To avoid this, add [`Control`](class_control.md)-derived nodes as *siblings* to the **BackBufferCopy** node instead of adding them as children.

## 属性

| [CopyMode](#enum_backbuffercopy_copymode) | [`copy_mode`](#class_backbuffercopy_property_copy_mode) | ``1``                           |
| [`Rect2`](class_rect2.md)                 | [`rect`](#class_backbuffercopy_property_rect)           | ``Rect2(-100, -100, 200, 200)`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_backbuffercopy_copymode"></div>

enum **CopyMode**: <div id="enum_backbuffercopy_copymode"></div>

<div id="_class_backbuffercopy_constant_copy_mode_disabled"></div>

[CopyMode](#enum_backbuffercopy_copymode) **COPY_MODE_DISABLED** = ``0``

Disables the buffering mode. This means the **BackBufferCopy** node will directly use the portion of screen it covers.

<div id="_class_backbuffercopy_constant_copy_mode_rect"></div>

[CopyMode](#enum_backbuffercopy_copymode) **COPY_MODE_RECT** = ``1``

**BackBufferCopy** buffers a rectangular region.

<div id="_class_backbuffercopy_constant_copy_mode_viewport"></div>

[CopyMode](#enum_backbuffercopy_copymode) **COPY_MODE_VIEWPORT** = ``2``

**BackBufferCopy** buffers the entire screen.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_backbuffercopy_property_copy_mode"></div>

[CopyMode](#enum_backbuffercopy_copymode) **copy_mode** = ``1`` <div id="class_backbuffercopy_property_copy_mode"></div>

- `void` **set_copy_mode** ( value: [CopyMode](#enum_backbuffercopy_copymode) )
- [CopyMode](#enum_backbuffercopy_copymode) **get_copy_mode** ( )

Buffer mode. See [CopyMode](#enum_backbuffercopy_copymode) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_backbuffercopy_property_rect"></div>

[`Rect2`](class_rect2.md) **rect** = ``Rect2(-100, -100, 200, 200)`` <div id="class_backbuffercopy_property_rect"></div>

- `void` **set_rect** ( value: [`Rect2`](class_rect2.md) )
- [`Rect2`](class_rect2.md) **get_rect** ( )

The area covered by the **BackBufferCopy**. Only used if [`copy_mode`](#class_backbuffercopy_property_copy_mode) is [`COPY_MODE_RECT`](#class_backbuffercopy_constant_copy_mode_rect).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
