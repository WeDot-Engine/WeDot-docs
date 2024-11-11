<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/GradientTexture1D.xml。 -->

<div id="_class_gradienttexture1d"></div>

# GradientTexture1D

**继承：** [`Texture2D`](class_texture2d.md) **<** [`Texture`](class_texture.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A 1D texture that uses colors obtained from a [`Gradient`](class_gradient.md).

## 描述

A 1D texture that obtains colors from a [`Gradient`](class_gradient.md) to fill the texture data. The texture is filled by sampling the gradient for each pixel. Therefore, the texture does not necessarily represent an exact copy of the gradient, as it may miss some colors if there are not enough pixels. See also [`GradientTexture2D`](class_gradienttexture2d.md), [`CurveTexture`](class_curvetexture.md) and [`CurveXYZTexture`](class_curvexyztexture.md).

## 属性

|||
|:-:|:--|
| [`Gradient`](class_gradient.md) | [`gradient`](class_gradienttexture1d.md#class_gradienttexture1d_property_gradient) |                                                                                                       |
| [`bool`](class_bool.md)         | resource_local_to_scene                                                            | ``false`` (overrides [`Resource`](class_resource.md#class_resource_property_resource_local_to_scene)) |
| [`bool`](class_bool.md)         | [`use_hdr`](class_gradienttexture1d.md#class_gradienttexture1d_property_use_hdr)   | ``false``                                                                                             |
| [`int`](class_int.md)           | [`width`](class_gradienttexture1d.md#class_gradienttexture1d_property_width)       | ``256``                                                                                               |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gradienttexture1d_property_gradient"></div>

[`Gradient`](class_gradient.md) **gradient** <div id="class_gradienttexture1d_property_gradient"></div>

- `void` **set_gradient** ( value: [`Gradient`](class_gradient.md) )
- [`Gradient`](class_gradient.md) **get_gradient** ( )

The [`Gradient`](class_gradient.md) used to fill the texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradienttexture1d_property_use_hdr"></div>

[`bool`](class_bool.md) **use_hdr** = ``false`` <div id="class_gradienttexture1d_property_use_hdr"></div>

- `void` **set_use_hdr** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_hdr** ( )

If `true`, the generated texture will support high dynamic range ([`Image.FORMAT_RGBAF`](class_image.md#class_image_constant_format_rgbaf) format). This allows for glow effects to work if [`Environment.glow_enabled`](class_environment.md#class_environment_property_glow_enabled) is `true`. If `false`, the generated texture will use low dynamic range; overbright colors will be clamped ([`Image.FORMAT_RGBA8`](class_image.md#class_image_constant_format_rgba8) format).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradienttexture1d_property_width"></div>

[`int`](class_int.md) **width** = ``256`` <div id="class_gradienttexture1d_property_width"></div>

- `void` **set_width** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_width** ( )

The number of color samples that will be obtained from the [`Gradient`](class_gradient.md).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
