<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/StyleBoxTexture.xml。 -->

<div id="_class_styleboxtexture"></div>

# StyleBoxTexture

**继承：** [`StyleBox`](class_stylebox.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A texture-based nine-patch [`StyleBox`](class_stylebox.md).

## 描述

A texture-based nine-patch [`StyleBox`](class_stylebox.md), in a way similar to [`NinePatchRect`](class_ninepatchrect.md). This stylebox performs a 3×3 scaling of a texture, where only the center cell is fully stretched. This makes it possible to design bordered styles regardless of the stylebox's size.

## 属性

| [AxisStretchMode](#enum_styleboxtexture_axisstretchmode) | [`axis_stretch_horizontal`](#class_styleboxtexture_property_axis_stretch_horizontal) | ``0``                 |
| [AxisStretchMode](#enum_styleboxtexture_axisstretchmode) | [`axis_stretch_vertical`](#class_styleboxtexture_property_axis_stretch_vertical)     | ``0``                 |
| [`bool`](class_bool.md)                                  | [`draw_center`](#class_styleboxtexture_property_draw_center)                         | ``true``              |
| [`float`](class_float.md)                                | [`expand_margin_bottom`](#class_styleboxtexture_property_expand_margin_bottom)       | ``0.0``               |
| [`float`](class_float.md)                                | [`expand_margin_left`](#class_styleboxtexture_property_expand_margin_left)           | ``0.0``               |
| [`float`](class_float.md)                                | [`expand_margin_right`](#class_styleboxtexture_property_expand_margin_right)         | ``0.0``               |
| [`float`](class_float.md)                                | [`expand_margin_top`](#class_styleboxtexture_property_expand_margin_top)             | ``0.0``               |
| [`Color`](class_color.md)                                | [`modulate_color`](#class_styleboxtexture_property_modulate_color)                   | ``Color(1, 1, 1, 1)`` |
| [`Rect2`](class_rect2.md)                                | [`region_rect`](#class_styleboxtexture_property_region_rect)                         | ``Rect2(0, 0, 0, 0)`` |
| [`Texture2D`](class_texture2d.md)                        | [`texture`](#class_styleboxtexture_property_texture)                                 |                       |
| [`float`](class_float.md)                                | [`texture_margin_bottom`](#class_styleboxtexture_property_texture_margin_bottom)     | ``0.0``               |
| [`float`](class_float.md)                                | [`texture_margin_left`](#class_styleboxtexture_property_texture_margin_left)         | ``0.0``               |
| [`float`](class_float.md)                                | [`texture_margin_right`](#class_styleboxtexture_property_texture_margin_right)       | ``0.0``               |
| [`float`](class_float.md)                                | [`texture_margin_top`](#class_styleboxtexture_property_texture_margin_top)           | ``0.0``               |

## 方法

| [`float`](class_float.md) | [`get_expand_margin`](#class_styleboxtexture_method_get_expand_margin) ( margin: [Side](#enum_@globalscope_side) ) const[^const]                      |
| [`float`](class_float.md) | [`get_texture_margin`](#class_styleboxtexture_method_get_texture_margin) ( margin: [Side](#enum_@globalscope_side) ) const[^const]                    |
| `void`                    | [`set_expand_margin`](#class_styleboxtexture_method_set_expand_margin) ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) )   |
| `void`                    | [`set_expand_margin_all`](#class_styleboxtexture_method_set_expand_margin_all) ( size: [`float`](class_float.md) )                                    |
| `void`                    | [`set_texture_margin`](#class_styleboxtexture_method_set_texture_margin) ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) ) |
| `void`                    | [`set_texture_margin_all`](#class_styleboxtexture_method_set_texture_margin_all) ( size: [`float`](class_float.md) )                                  |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_styleboxtexture_axisstretchmode"></div>

enum **AxisStretchMode**: <div id="enum_styleboxtexture_axisstretchmode"></div>

<div id="_class_styleboxtexture_constant_axis_stretch_mode_stretch"></div>

[AxisStretchMode](#enum_styleboxtexture_axisstretchmode) **AXIS_STRETCH_MODE_STRETCH** = ``0``

Stretch the stylebox's texture. This results in visible distortion unless the texture size matches the stylebox's size perfectly.

<div id="_class_styleboxtexture_constant_axis_stretch_mode_tile"></div>

[AxisStretchMode](#enum_styleboxtexture_axisstretchmode) **AXIS_STRETCH_MODE_TILE** = ``1``

Repeats the stylebox's texture to match the stylebox's size according to the nine-patch system.

<div id="_class_styleboxtexture_constant_axis_stretch_mode_tile_fit"></div>

[AxisStretchMode](#enum_styleboxtexture_axisstretchmode) **AXIS_STRETCH_MODE_TILE_FIT** = ``2``

Repeats the stylebox's texture to match the stylebox's size according to the nine-patch system. Unlike [`AXIS_STRETCH_MODE_TILE`](#class_styleboxtexture_constant_axis_stretch_mode_tile), the texture may be slightly stretched to make the nine-patch texture tile seamlessly.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_styleboxtexture_property_axis_stretch_horizontal"></div>

[AxisStretchMode](#enum_styleboxtexture_axisstretchmode) **axis_stretch_horizontal** = ``0`` <div id="class_styleboxtexture_property_axis_stretch_horizontal"></div>

- `void` **set_h_axis_stretch_mode** ( value: [AxisStretchMode](#enum_styleboxtexture_axisstretchmode) )
- [AxisStretchMode](#enum_styleboxtexture_axisstretchmode) **get_h_axis_stretch_mode** ( )

Controls how the stylebox's texture will be stretched or tiled horizontally. See [AxisStretchMode](#enum_styleboxtexture_axisstretchmode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_property_axis_stretch_vertical"></div>

[AxisStretchMode](#enum_styleboxtexture_axisstretchmode) **axis_stretch_vertical** = ``0`` <div id="class_styleboxtexture_property_axis_stretch_vertical"></div>

- `void` **set_v_axis_stretch_mode** ( value: [AxisStretchMode](#enum_styleboxtexture_axisstretchmode) )
- [AxisStretchMode](#enum_styleboxtexture_axisstretchmode) **get_v_axis_stretch_mode** ( )

Controls how the stylebox's texture will be stretched or tiled vertically. See [AxisStretchMode](#enum_styleboxtexture_axisstretchmode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_property_draw_center"></div>

[`bool`](class_bool.md) **draw_center** = ``true`` <div id="class_styleboxtexture_property_draw_center"></div>

- `void` **set_draw_center** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_draw_center_enabled** ( )

If `true`, the nine-patch texture's center tile will be drawn.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_property_expand_margin_bottom"></div>

[`float`](class_float.md) **expand_margin_bottom** = ``0.0`` <div id="class_styleboxtexture_property_expand_margin_bottom"></div>

- `void` **set_expand_margin** ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) )
- [`float`](class_float.md) **get_expand_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Expands the bottom margin of this style box when drawing, causing it to be drawn larger than requested.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_property_expand_margin_left"></div>

[`float`](class_float.md) **expand_margin_left** = ``0.0`` <div id="class_styleboxtexture_property_expand_margin_left"></div>

- `void` **set_expand_margin** ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) )
- [`float`](class_float.md) **get_expand_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Expands the left margin of this style box when drawing, causing it to be drawn larger than requested.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_property_expand_margin_right"></div>

[`float`](class_float.md) **expand_margin_right** = ``0.0`` <div id="class_styleboxtexture_property_expand_margin_right"></div>

- `void` **set_expand_margin** ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) )
- [`float`](class_float.md) **get_expand_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Expands the right margin of this style box when drawing, causing it to be drawn larger than requested.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_property_expand_margin_top"></div>

[`float`](class_float.md) **expand_margin_top** = ``0.0`` <div id="class_styleboxtexture_property_expand_margin_top"></div>

- `void` **set_expand_margin** ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) )
- [`float`](class_float.md) **get_expand_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Expands the top margin of this style box when drawing, causing it to be drawn larger than requested.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_property_modulate_color"></div>

[`Color`](class_color.md) **modulate_color** = ``Color(1, 1, 1, 1)`` <div id="class_styleboxtexture_property_modulate_color"></div>

- `void` **set_modulate** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_modulate** ( )

Modulates the color of the texture when this style box is drawn.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_property_region_rect"></div>

[`Rect2`](class_rect2.md) **region_rect** = ``Rect2(0, 0, 0, 0)`` <div id="class_styleboxtexture_property_region_rect"></div>

- `void` **set_region_rect** ( value: [`Rect2`](class_rect2.md) )
- [`Rect2`](class_rect2.md) **get_region_rect** ( )

Species a sub-region of the texture to use.

This is equivalent to first wrapping the texture in an [`AtlasTexture`](class_atlastexture.md) with the same region.

If empty (`Rect2(0, 0, 0, 0)`), the whole texture will be used.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_property_texture"></div>

[`Texture2D`](class_texture2d.md) **texture** <div id="class_styleboxtexture_property_texture"></div>

- `void` **set_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( )

The texture to use when drawing this style box.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_property_texture_margin_bottom"></div>

[`float`](class_float.md) **texture_margin_bottom** = ``0.0`` <div id="class_styleboxtexture_property_texture_margin_bottom"></div>

- `void` **set_texture_margin** ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) )
- [`float`](class_float.md) **get_texture_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Increases the bottom margin of the 3×3 texture box.

A higher value means more of the source texture is considered to be part of the bottom border of the 3×3 box.

This is also the value used as fallback for [`StyleBox.content_margin_bottom`](#class_stylebox_property_content_margin_bottom) if it is negative.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_property_texture_margin_left"></div>

[`float`](class_float.md) **texture_margin_left** = ``0.0`` <div id="class_styleboxtexture_property_texture_margin_left"></div>

- `void` **set_texture_margin** ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) )
- [`float`](class_float.md) **get_texture_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Increases the left margin of the 3×3 texture box.

A higher value means more of the source texture is considered to be part of the left border of the 3×3 box.

This is also the value used as fallback for [`StyleBox.content_margin_left`](#class_stylebox_property_content_margin_left) if it is negative.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_property_texture_margin_right"></div>

[`float`](class_float.md) **texture_margin_right** = ``0.0`` <div id="class_styleboxtexture_property_texture_margin_right"></div>

- `void` **set_texture_margin** ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) )
- [`float`](class_float.md) **get_texture_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Increases the right margin of the 3×3 texture box.

A higher value means more of the source texture is considered to be part of the right border of the 3×3 box.

This is also the value used as fallback for [`StyleBox.content_margin_right`](#class_stylebox_property_content_margin_right) if it is negative.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_property_texture_margin_top"></div>

[`float`](class_float.md) **texture_margin_top** = ``0.0`` <div id="class_styleboxtexture_property_texture_margin_top"></div>

- `void` **set_texture_margin** ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) )
- [`float`](class_float.md) **get_texture_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Increases the top margin of the 3×3 texture box.

A higher value means more of the source texture is considered to be part of the top border of the 3×3 box.

This is also the value used as fallback for [`StyleBox.content_margin_top`](#class_stylebox_property_content_margin_top) if it is negative.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_styleboxtexture_method_get_expand_margin"></div>

[`float`](class_float.md) **get_expand_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]<div id="class_styleboxtexture_method_get_expand_margin"></div>

Returns the expand margin size of the specified [Side](#enum_@globalscope_side).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_method_get_texture_margin"></div>

[`float`](class_float.md) **get_texture_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]<div id="class_styleboxtexture_method_get_texture_margin"></div>

Returns the margin size of the specified [Side](#enum_@globalscope_side).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_method_set_expand_margin"></div>

`void` **set_expand_margin** ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) )<div id="class_styleboxtexture_method_set_expand_margin"></div>

Sets the expand margin to `size` pixels for the specified [Side](#enum_@globalscope_side).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_method_set_expand_margin_all"></div>

`void` **set_expand_margin_all** ( size: [`float`](class_float.md) )<div id="class_styleboxtexture_method_set_expand_margin_all"></div>

Sets the expand margin to `size` pixels for all sides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_method_set_texture_margin"></div>

`void` **set_texture_margin** ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) )<div id="class_styleboxtexture_method_set_texture_margin"></div>

Sets the margin to `size` pixels for the specified [Side](#enum_@globalscope_side).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxtexture_method_set_texture_margin_all"></div>

`void` **set_texture_margin_all** ( size: [`float`](class_float.md) )<div id="class_styleboxtexture_method_set_texture_margin_all"></div>

Sets the margin to `size` pixels for all sides.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
