<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/CurveXYZTexture.xml。 -->

<div id="_class_curvexyztexture"></div>

# CurveXYZTexture

**继承：** [`Texture2D`](class_texture2d.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A 1D texture where the red, green, and blue color channels correspond to points on 3 curves.

## 描述

A 1D texture where the red, green, and blue color channels correspond to points on 3 [`Curve`](class_curve.md) resources. Compared to using separate [`CurveTexture`](class_curvetexture.md) s, this further simplifies the task of saving curves as image files.

If you only need to store one curve within a single texture, use [`CurveTexture`](class_curvetexture.md) instead. See also [`GradientTexture1D`](class_gradienttexture1d.md) and [`GradientTexture2D`](class_gradienttexture2d.md).

## 属性

| [`Curve`](class_curve.md) | [`curve_x`](#class_curvexyztexture_property_curve_x) |                                                                                      |
| [`Curve`](class_curve.md) | [`curve_y`](#class_curvexyztexture_property_curve_y) |                                                                                      |
| [`Curve`](class_curve.md) | [`curve_z`](#class_curvexyztexture_property_curve_z) |                                                                                      |
| [`bool`](class_bool.md)   | resource_local_to_scene                              | ``false`` (overrides [`Resource`](#class_resource_property_resource_local_to_scene)) |
| [`int`](class_int.md)     | [`width`](#class_curvexyztexture_property_width)     | ``256``                                                                              |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_curvexyztexture_property_curve_x"></div>

[`Curve`](class_curve.md) **curve_x** <div id="class_curvexyztexture_property_curve_x"></div>

- `void` **set_curve_x** ( value: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_curve_x** ( )

The [`Curve`](class_curve.md) that is rendered onto the texture's red channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curvexyztexture_property_curve_y"></div>

[`Curve`](class_curve.md) **curve_y** <div id="class_curvexyztexture_property_curve_y"></div>

- `void` **set_curve_y** ( value: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_curve_y** ( )

The [`Curve`](class_curve.md) that is rendered onto the texture's green channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curvexyztexture_property_curve_z"></div>

[`Curve`](class_curve.md) **curve_z** <div id="class_curvexyztexture_property_curve_z"></div>

- `void` **set_curve_z** ( value: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_curve_z** ( )

The [`Curve`](class_curve.md) that is rendered onto the texture's blue channel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curvexyztexture_property_width"></div>

[`int`](class_int.md) **width** = ``256`` <div id="class_curvexyztexture_property_width"></div>

- `void` **set_width** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_width** ( )

The width of the texture (in pixels). Higher values make it possible to represent high-frequency data better (such as sudden direction changes), at the cost of increased generation time and memory usage.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
