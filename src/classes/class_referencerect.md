<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/ReferenceRect.xml。 -->

<div id="_class_referencerect"></div>

# ReferenceRect

**继承：** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A rectangle hint for designing UIs.

## 描述

A rectangle box that displays only a colored border around its rectangle. It is used to visualize the extents of a [`Control`](class_control.md).

## 属性

| [`Color`](class_color.md) | [`border_color`](#class_referencerect_property_border_color) | ``Color(1, 0, 0, 1)`` |
| [`float`](class_float.md) | [`border_width`](#class_referencerect_property_border_width) | ``1.0``               |
| [`bool`](class_bool.md)   | [`editor_only`](#class_referencerect_property_editor_only)   | ``true``              |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_referencerect_property_border_color"></div>

[`Color`](class_color.md) **border_color** = ``Color(1, 0, 0, 1)`` <div id="class_referencerect_property_border_color"></div>

- `void` **set_border_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_border_color** ( )

Sets the border color of the **ReferenceRect**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_referencerect_property_border_width"></div>

[`float`](class_float.md) **border_width** = ``1.0`` <div id="class_referencerect_property_border_width"></div>

- `void` **set_border_width** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_border_width** ( )

Sets the border width of the **ReferenceRect**. The border grows both inwards and outwards with respect to the rectangle box.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_referencerect_property_editor_only"></div>

[`bool`](class_bool.md) **editor_only** = ``true`` <div id="class_referencerect_property_editor_only"></div>

- `void` **set_editor_only** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_editor_only** ( )

If `true`, the **ReferenceRect** will only be visible while in editor. Otherwise, **ReferenceRect** will be visible in the running project.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
