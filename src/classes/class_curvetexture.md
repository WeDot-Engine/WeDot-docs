<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/CurveTexture.xml。 -->

<div id="_class_curvetexture"></div>

# CurveTexture

**继承：** [`Texture2D`](class_texture2d.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A 1D texture where pixel brightness corresponds to points on a curve.

## 描述

A 1D texture where pixel brightness corresponds to points on a [`Curve`](class_curve.md) resource, either in grayscale or in red. This visual representation simplifies the task of saving curves as image files.

If you need to store up to 3 curves within a single texture, use [`CurveXYZTexture`](class_curvexyztexture.md) instead. See also [`GradientTexture1D`](class_gradienttexture1d.md) and [`GradientTexture2D`](class_gradienttexture2d.md).

## 属性

| [`Curve`](class_curve.md)                     | [`curve`](#class_curvetexture_property_curve)               |                                                                                      |
| [`bool`](class_bool.md)                       | resource_local_to_scene                                     | ``false`` (overrides [`Resource`](#class_resource_property_resource_local_to_scene)) |
| [TextureMode](#enum_curvetexture_texturemode) | [`texture_mode`](#class_curvetexture_property_texture_mode) | ``0``                                                                                |
| [`int`](class_int.md)                         | [`width`](#class_curvetexture_property_width)               | ``256``                                                                              |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_curvetexture_texturemode"></div>

enum **TextureMode**: <div id="enum_curvetexture_texturemode"></div>

<div id="_class_curvetexture_constant_texture_mode_rgb"></div>

[TextureMode](#enum_curvetexture_texturemode) **TEXTURE_MODE_RGB** = ``0``

Store the curve equally across the red, green and blue channels. This uses more video memory, but is more compatible with shaders that only read the green and blue values.

<div id="_class_curvetexture_constant_texture_mode_red"></div>

[TextureMode](#enum_curvetexture_texturemode) **TEXTURE_MODE_RED** = ``1``

Store the curve only in the red channel. This saves video memory, but some custom shaders may not be able to work with this.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_curvetexture_property_curve"></div>

[`Curve`](class_curve.md) **curve** <div id="class_curvetexture_property_curve"></div>

- `void` **set_curve** ( value: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_curve** ( )

The [`Curve`](class_curve.md) that is rendered onto the texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curvetexture_property_texture_mode"></div>

[TextureMode](#enum_curvetexture_texturemode) **texture_mode** = ``0`` <div id="class_curvetexture_property_texture_mode"></div>

- `void` **set_texture_mode** ( value: [TextureMode](#enum_curvetexture_texturemode) )
- [TextureMode](#enum_curvetexture_texturemode) **get_texture_mode** ( )

The format the texture should be generated with. When passing a CurveTexture as an input to a [`Shader`](class_shader.md), this may need to be adjusted.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curvetexture_property_width"></div>

[`int`](class_int.md) **width** = ``256`` <div id="class_curvetexture_property_width"></div>

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
