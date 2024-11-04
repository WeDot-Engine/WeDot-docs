<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/GradientTexture2D.xml。 -->

<div id="_class_gradienttexture2d"></div>

# GradientTexture2D

**继承：** [`Texture2D`](class_texture2d.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A 2D texture that creates a pattern with colors obtained from a [`Gradient`](class_gradient.md).

## 描述

A 2D texture that obtains colors from a [`Gradient`](class_gradient.md) to fill the texture data. This texture is able to transform a color transition into different patterns such as a linear or a radial gradient. The gradient is sampled individually for each pixel so it does not necessarily represent an exact copy of the gradient(see [`width`](#class_gradienttexture2d_property_width) and [`height`](#class_gradienttexture2d_property_height)). See also [`GradientTexture1D`](class_gradienttexture1d.md), [`CurveTexture`](class_curvetexture.md) and [`CurveXYZTexture`](class_curvexyztexture.md).

## 属性

| [Fill](#enum_gradienttexture2d_fill)     | [`fill`](#class_gradienttexture2d_property_fill)           | ``0``                                                                                |
| [`Vector2`](class_vector2.md)            | [`fill_from`](#class_gradienttexture2d_property_fill_from) | ``Vector2(0, 0)``                                                                    |
| [`Vector2`](class_vector2.md)            | [`fill_to`](#class_gradienttexture2d_property_fill_to)     | ``Vector2(1, 0)``                                                                    |
| [`Gradient`](class_gradient.md)          | [`gradient`](#class_gradienttexture2d_property_gradient)   |                                                                                      |
| [`int`](class_int.md)                    | [`height`](#class_gradienttexture2d_property_height)       | ``64``                                                                               |
| [Repeat](#enum_gradienttexture2d_repeat) | [`repeat`](#class_gradienttexture2d_property_repeat)       | ``0``                                                                                |
| [`bool`](class_bool.md)                  | resource_local_to_scene                                    | ``false`` (overrides [`Resource`](#class_resource_property_resource_local_to_scene)) |
| [`bool`](class_bool.md)                  | [`use_hdr`](#class_gradienttexture2d_property_use_hdr)     | ``false``                                                                            |
| [`int`](class_int.md)                    | [`width`](#class_gradienttexture2d_property_width)         | ``64``                                                                               |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_gradienttexture2d_fill"></div>

enum **Fill**: <div id="enum_gradienttexture2d_fill"></div>

<div id="_class_gradienttexture2d_constant_fill_linear"></div>

[Fill](#enum_gradienttexture2d_fill) **FILL_LINEAR** = ``0``

The colors are linearly interpolated in a straight line.

<div id="_class_gradienttexture2d_constant_fill_radial"></div>

[Fill](#enum_gradienttexture2d_fill) **FILL_RADIAL** = ``1``

The colors are linearly interpolated in a circular pattern.

<div id="_class_gradienttexture2d_constant_fill_square"></div>

[Fill](#enum_gradienttexture2d_fill) **FILL_SQUARE** = ``2``

The colors are linearly interpolated in a square pattern.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_gradienttexture2d_repeat"></div>

enum **Repeat**: <div id="enum_gradienttexture2d_repeat"></div>

<div id="_class_gradienttexture2d_constant_repeat_none"></div>

[Repeat](#enum_gradienttexture2d_repeat) **REPEAT_NONE** = ``0``

The gradient fill is restricted to the range defined by [`fill_from`](#class_gradienttexture2d_property_fill_from) to [`fill_to`](#class_gradienttexture2d_property_fill_to) offsets.

<div id="_class_gradienttexture2d_constant_repeat"></div>

[Repeat](#enum_gradienttexture2d_repeat) **REPEAT** = ``1``

The texture is filled starting from [`fill_from`](#class_gradienttexture2d_property_fill_from) to [`fill_to`](#class_gradienttexture2d_property_fill_to) offsets, repeating the same pattern in both directions.

<div id="_class_gradienttexture2d_constant_repeat_mirror"></div>

[Repeat](#enum_gradienttexture2d_repeat) **REPEAT_MIRROR** = ``2``

The texture is filled starting from [`fill_from`](#class_gradienttexture2d_property_fill_from) to [`fill_to`](#class_gradienttexture2d_property_fill_to) offsets, mirroring the pattern in both directions.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gradienttexture2d_property_fill"></div>

[Fill](#enum_gradienttexture2d_fill) **fill** = ``0`` <div id="class_gradienttexture2d_property_fill"></div>

- `void` **set_fill** ( value: [Fill](#enum_gradienttexture2d_fill) )
- [Fill](#enum_gradienttexture2d_fill) **get_fill** ( )

The gradient fill type, one of the [Fill](#enum_gradienttexture2d_fill) values. The texture is filled by interpolating colors starting from [`fill_from`](#class_gradienttexture2d_property_fill_from) to [`fill_to`](#class_gradienttexture2d_property_fill_to) offsets.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradienttexture2d_property_fill_from"></div>

[`Vector2`](class_vector2.md) **fill_from** = ``Vector2(0, 0)`` <div id="class_gradienttexture2d_property_fill_from"></div>

- `void` **set_fill_from** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_fill_from** ( )

The initial offset used to fill the texture specified in UV coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradienttexture2d_property_fill_to"></div>

[`Vector2`](class_vector2.md) **fill_to** = ``Vector2(1, 0)`` <div id="class_gradienttexture2d_property_fill_to"></div>

- `void` **set_fill_to** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_fill_to** ( )

The final offset used to fill the texture specified in UV coordinates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradienttexture2d_property_gradient"></div>

[`Gradient`](class_gradient.md) **gradient** <div id="class_gradienttexture2d_property_gradient"></div>

- `void` **set_gradient** ( value: [`Gradient`](class_gradient.md) )
- [`Gradient`](class_gradient.md) **get_gradient** ( )

The [`Gradient`](class_gradient.md) used to fill the texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradienttexture2d_property_height"></div>

[`int`](class_int.md) **height** = ``64`` <div id="class_gradienttexture2d_property_height"></div>

- `void` **set_height** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_height** ( )

The number of vertical color samples that will be obtained from the [`Gradient`](class_gradient.md), which also represents the texture's height.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradienttexture2d_property_repeat"></div>

[Repeat](#enum_gradienttexture2d_repeat) **repeat** = ``0`` <div id="class_gradienttexture2d_property_repeat"></div>

- `void` **set_repeat** ( value: [Repeat](#enum_gradienttexture2d_repeat) )
- [Repeat](#enum_gradienttexture2d_repeat) **get_repeat** ( )

The gradient repeat type, one of the [Repeat](#enum_gradienttexture2d_repeat) values. The texture is filled starting from [`fill_from`](#class_gradienttexture2d_property_fill_from) to [`fill_to`](#class_gradienttexture2d_property_fill_to) offsets by default, but the gradient fill can be repeated to cover the entire texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradienttexture2d_property_use_hdr"></div>

[`bool`](class_bool.md) **use_hdr** = ``false`` <div id="class_gradienttexture2d_property_use_hdr"></div>

- `void` **set_use_hdr** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_hdr** ( )

If `true`, the generated texture will support high dynamic range ([`Image.FORMAT_RGBAF`](#class_image_constant_format_rgbaf) format). This allows for glow effects to work if [`Environment.glow_enabled`](#class_environment_property_glow_enabled) is `true`. If `false`, the generated texture will use low dynamic range; overbright colors will be clamped ([`Image.FORMAT_RGBA8`](#class_image_constant_format_rgba8) format).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradienttexture2d_property_width"></div>

[`int`](class_int.md) **width** = ``64`` <div id="class_gradienttexture2d_property_width"></div>

- `void` **set_width** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_width** ( )

The number of horizontal color samples that will be obtained from the [`Gradient`](class_gradient.md), which also represents the texture's width.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
