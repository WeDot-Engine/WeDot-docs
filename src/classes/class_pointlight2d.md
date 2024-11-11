<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/PointLight2D.xml。 -->

<div id="_class_pointlight2d"></div>

# PointLight2D

**继承：** [`Light2D`](class_light2d.md) **<** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Positional 2D light source.

## 描述

Casts light in a 2D environment. This light's shape is defined by a (usually grayscale) texture.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)         | [`height`](class_pointlight2d.md#class_pointlight2d_property_height)               | ``0.0``           |
| [`Vector2`](class_vector2.md)     | [`offset`](class_pointlight2d.md#class_pointlight2d_property_offset)               | ``Vector2(0, 0)`` |
| [`Texture2D`](class_texture2d.md) | [`texture`](class_pointlight2d.md#class_pointlight2d_property_texture)             |                   |
| [`float`](class_float.md)         | [`texture_scale`](class_pointlight2d.md#class_pointlight2d_property_texture_scale) | ``1.0``           |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_pointlight2d_property_height"></div>

[`float`](class_float.md) **height** = ``0.0`` <div id="class_pointlight2d_property_height"></div>

- `void` **set_height** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_height** ( )

The height of the light. Used with 2D normal mapping. The units are in pixels, e.g. if the height is 100, then it will illuminate an object 100 pixels away at a 45° angle to the plane.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pointlight2d_property_offset"></div>

[`Vector2`](class_vector2.md) **offset** = ``Vector2(0, 0)`` <div id="class_pointlight2d_property_offset"></div>

- `void` **set_texture_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_texture_offset** ( )

The offset of the light's [`texture`](class_pointlight2d.md#class_pointlight2d_property_texture).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pointlight2d_property_texture"></div>

[`Texture2D`](class_texture2d.md) **texture** <div id="class_pointlight2d_property_texture"></div>

- `void` **set_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( )

[`Texture2D`](class_texture2d.md) used for the light's appearance.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_pointlight2d_property_texture_scale"></div>

[`float`](class_float.md) **texture_scale** = ``1.0`` <div id="class_pointlight2d_property_texture_scale"></div>

- `void` **set_texture_scale** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_texture_scale** ( )

The [`texture`](class_pointlight2d.md#class_pointlight2d_property_texture)'s scale factor.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
