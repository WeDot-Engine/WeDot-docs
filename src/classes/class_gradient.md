<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Gradient.xml。 -->

<div id="_class_gradient"></div>

# Gradient

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A color transition.

## 描述

This resource describes a color transition by defining a set of colored points and how to interpolate between them.

See also [`Curve`](class_curve.md) which supports more complex easing methods, but does not support colors.

## 属性

|||
|:-:|:--|
| [`PackedColorArray`](class_packedcolorarray.md)       | [`colors`](class_gradient.md#class_gradient_property_colors)                                       | ``PackedColorArray(0, 0, 0, 1, 1, 1, 1, 1)`` |
| [ColorSpace](#enum_gradient_colorspace)               | [`interpolation_color_space`](class_gradient.md#class_gradient_property_interpolation_color_space) | ``0``                                        |
| [InterpolationMode](#enum_gradient_interpolationmode) | [`interpolation_mode`](class_gradient.md#class_gradient_property_interpolation_mode)               | ``0``                                        |
| [`PackedFloat32Array`](class_packedfloat32array.md)   | [`offsets`](class_gradient.md#class_gradient_property_offsets)                                     | ``PackedFloat32Array(0, 1)``                 |

## 方法

|||
|:-:|:--|
| `void`                    | [`add_point`](class_gradient.md#class_gradient_method_add_point) ( offset: [`float`](class_float.md), color: [`Color`](class_color.md) ) |
| [`Color`](class_color.md) | [`get_color`](class_gradient.md#class_gradient_method_get_color) ( point: [`int`](class_int.md) )                                        |
| [`float`](class_float.md) | [`get_offset`](class_gradient.md#class_gradient_method_get_offset) ( point: [`int`](class_int.md) )                                      |
| [`int`](class_int.md)     | [`get_point_count`](class_gradient.md#class_gradient_method_get_point_count) ( ) const[^const]                                           |
| `void`                    | [`remove_point`](class_gradient.md#class_gradient_method_remove_point) ( point: [`int`](class_int.md) )                                  |
| `void`                    | [`reverse`](class_gradient.md#class_gradient_method_reverse) ( )                                                                         |
| [`Color`](class_color.md) | [`sample`](class_gradient.md#class_gradient_method_sample) ( offset: [`float`](class_float.md) )                                         |
| `void`                    | [`set_color`](class_gradient.md#class_gradient_method_set_color) ( point: [`int`](class_int.md), color: [`Color`](class_color.md) )      |
| `void`                    | [`set_offset`](class_gradient.md#class_gradient_method_set_offset) ( point: [`int`](class_int.md), offset: [`float`](class_float.md) )   |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_gradient_interpolationmode"></div>

enum **InterpolationMode**: <div id="enum_gradient_interpolationmode"></div>

<div id="_class_gradient_constant_gradient_interpolate_linear"></div>

[InterpolationMode](#enum_gradient_interpolationmode) **GRADIENT_INTERPOLATE_LINEAR** = ``0``

Linear interpolation.

<div id="_class_gradient_constant_gradient_interpolate_constant"></div>

[InterpolationMode](#enum_gradient_interpolationmode) **GRADIENT_INTERPOLATE_CONSTANT** = ``1``

Constant interpolation, color changes abruptly at each point and stays uniform between. This might cause visible aliasing when used for a gradient texture in some cases.

<div id="_class_gradient_constant_gradient_interpolate_cubic"></div>

[InterpolationMode](#enum_gradient_interpolationmode) **GRADIENT_INTERPOLATE_CUBIC** = ``2``

Cubic interpolation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_gradient_colorspace"></div>

enum **ColorSpace**: <div id="enum_gradient_colorspace"></div>

<div id="_class_gradient_constant_gradient_color_space_srgb"></div>

[ColorSpace](#enum_gradient_colorspace) **GRADIENT_COLOR_SPACE_SRGB** = ``0``

sRGB color space.

<div id="_class_gradient_constant_gradient_color_space_linear_srgb"></div>

[ColorSpace](#enum_gradient_colorspace) **GRADIENT_COLOR_SPACE_LINEAR_SRGB** = ``1``

Linear sRGB color space.

<div id="_class_gradient_constant_gradient_color_space_oklab"></div>

[ColorSpace](#enum_gradient_colorspace) **GRADIENT_COLOR_SPACE_OKLAB** = ``2``

[*Oklab*](https://bottosson.github.io/posts/oklab/) color space. This color space provides a smooth and uniform-looking transition between colors.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_gradient_property_colors"></div>

[`PackedColorArray`](class_packedcolorarray.md) **colors** = ``PackedColorArray(0, 0, 0, 1, 1, 1, 1, 1)`` <div id="class_gradient_property_colors"></div>

- `void` **set_colors** ( value: [`PackedColorArray`](class_packedcolorarray.md) )
- [`PackedColorArray`](class_packedcolorarray.md) **get_colors** ( )

Gradient's colors as a [`PackedColorArray`](class_packedcolorarray.md).

 **Note:** Setting this property updates all colors at once. To update any color individually use [`set_color`](class_gradient.md#class_gradient_method_set_color).

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedColorArray`](class_packedcolorarray.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradient_property_interpolation_color_space"></div>

[ColorSpace](#enum_gradient_colorspace) **interpolation_color_space** = ``0`` <div id="class_gradient_property_interpolation_color_space"></div>

- `void` **set_interpolation_color_space** ( value: [ColorSpace](#enum_gradient_colorspace) )
- [ColorSpace](#enum_gradient_colorspace) **get_interpolation_color_space** ( )

The color space used to interpolate between points of the gradient. It does not affect the returned colors, which will always be in sRGB space. See [ColorSpace](#enum_gradient_colorspace) for available modes.

 **Note:** This setting has no effect when [`interpolation_mode`](class_gradient.md#class_gradient_property_interpolation_mode) is set to [`GRADIENT_INTERPOLATE_CONSTANT`](class_gradient.md#class_gradient_constant_gradient_interpolate_constant).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradient_property_interpolation_mode"></div>

[InterpolationMode](#enum_gradient_interpolationmode) **interpolation_mode** = ``0`` <div id="class_gradient_property_interpolation_mode"></div>

- `void` **set_interpolation_mode** ( value: [InterpolationMode](#enum_gradient_interpolationmode) )
- [InterpolationMode](#enum_gradient_interpolationmode) **get_interpolation_mode** ( )

The algorithm used to interpolate between points of the gradient. See [InterpolationMode](#enum_gradient_interpolationmode) for available modes.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradient_property_offsets"></div>

[`PackedFloat32Array`](class_packedfloat32array.md) **offsets** = ``PackedFloat32Array(0, 1)`` <div id="class_gradient_property_offsets"></div>

- `void` **set_offsets** ( value: [`PackedFloat32Array`](class_packedfloat32array.md) )
- [`PackedFloat32Array`](class_packedfloat32array.md) **get_offsets** ( )

Gradient's offsets as a [`PackedFloat32Array`](class_packedfloat32array.md).

 **Note:** Setting this property updates all offsets at once. To update any offset individually use [`set_offset`](class_gradient.md#class_gradient_method_set_offset).

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedFloat32Array`](class_packedfloat32array.md) for more details.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_gradient_method_add_point"></div>

`void` **add_point** ( offset: [`float`](class_float.md), color: [`Color`](class_color.md) )<div id="class_gradient_method_add_point"></div>

Adds the specified color to the gradient, with the specified offset.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradient_method_get_color"></div>

[`Color`](class_color.md) **get_color** ( point: [`int`](class_int.md) )<div id="class_gradient_method_get_color"></div>

Returns the color of the gradient color at index `point`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradient_method_get_offset"></div>

[`float`](class_float.md) **get_offset** ( point: [`int`](class_int.md) )<div id="class_gradient_method_get_offset"></div>

Returns the offset of the gradient color at index `point`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradient_method_get_point_count"></div>

[`int`](class_int.md) **get_point_count** ( ) const[^const]<div id="class_gradient_method_get_point_count"></div>

Returns the number of colors in the gradient.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradient_method_remove_point"></div>

`void` **remove_point** ( point: [`int`](class_int.md) )<div id="class_gradient_method_remove_point"></div>

Removes the color at index `point`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradient_method_reverse"></div>

`void` **reverse** ( )<div id="class_gradient_method_reverse"></div>

Reverses/mirrors the gradient.

 **Note:** This method mirrors all points around the middle of the gradient, which may produce unexpected results when [`interpolation_mode`](class_gradient.md#class_gradient_property_interpolation_mode) is set to [`GRADIENT_INTERPOLATE_CONSTANT`](class_gradient.md#class_gradient_constant_gradient_interpolate_constant).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradient_method_sample"></div>

[`Color`](class_color.md) **sample** ( offset: [`float`](class_float.md) )<div id="class_gradient_method_sample"></div>

Returns the interpolated color specified by `offset`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradient_method_set_color"></div>

`void` **set_color** ( point: [`int`](class_int.md), color: [`Color`](class_color.md) )<div id="class_gradient_method_set_color"></div>

Sets the color of the gradient color at index `point`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_gradient_method_set_offset"></div>

`void` **set_offset** ( point: [`int`](class_int.md), offset: [`float`](class_float.md) )<div id="class_gradient_method_set_offset"></div>

Sets the offset for the gradient color at index `point`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
