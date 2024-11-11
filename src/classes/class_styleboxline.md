<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/StyleBoxLine.xml。 -->

<div id="_class_styleboxline"></div>

# StyleBoxLine

**继承：** [`StyleBox`](class_stylebox.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A [`StyleBox`](class_stylebox.md) that displays a single line of a given color and thickness.

## 描述

A [`StyleBox`](class_stylebox.md) that displays a single line of a given color and thickness. The line can be either horizontal or vertical. Useful for separators.

## 属性

|||
|:-:|:--|
| [`Color`](class_color.md) | [`color`](class_styleboxline.md#class_styleboxline_property_color)           | ``Color(0, 0, 0, 1)`` |
| [`float`](class_float.md) | [`grow_begin`](class_styleboxline.md#class_styleboxline_property_grow_begin) | ``1.0``               |
| [`float`](class_float.md) | [`grow_end`](class_styleboxline.md#class_styleboxline_property_grow_end)     | ``1.0``               |
| [`int`](class_int.md)     | [`thickness`](class_styleboxline.md#class_styleboxline_property_thickness)   | ``1``                 |
| [`bool`](class_bool.md)   | [`vertical`](class_styleboxline.md#class_styleboxline_property_vertical)     | ``false``             |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_styleboxline_property_color"></div>

[`Color`](class_color.md) **color** = ``Color(0, 0, 0, 1)`` <div id="class_styleboxline_property_color"></div>

- `void` **set_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_color** ( )

The line's color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxline_property_grow_begin"></div>

[`float`](class_float.md) **grow_begin** = ``1.0`` <div id="class_styleboxline_property_grow_begin"></div>

- `void` **set_grow_begin** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_grow_begin** ( )

The number of pixels the line will extend before the **StyleBoxLine**'s bounds. If set to a negative value, the line will begin inside the **StyleBoxLine**'s bounds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxline_property_grow_end"></div>

[`float`](class_float.md) **grow_end** = ``1.0`` <div id="class_styleboxline_property_grow_end"></div>

- `void` **set_grow_end** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_grow_end** ( )

The number of pixels the line will extend past the **StyleBoxLine**'s bounds. If set to a negative value, the line will end inside the **StyleBoxLine**'s bounds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxline_property_thickness"></div>

[`int`](class_int.md) **thickness** = ``1`` <div id="class_styleboxline_property_thickness"></div>

- `void` **set_thickness** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_thickness** ( )

The line's thickness in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxline_property_vertical"></div>

[`bool`](class_bool.md) **vertical** = ``false`` <div id="class_styleboxline_property_vertical"></div>

- `void` **set_vertical** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_vertical** ( )

If `true`, the line will be vertical. If `false`, the line will be horizontal.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
