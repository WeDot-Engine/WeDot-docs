<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/StyleBoxFlat.xml。 -->

<div id="_class_styleboxflat"></div>

# StyleBoxFlat

**继承：** [`StyleBox`](class_stylebox.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A customizable [`StyleBox`](class_stylebox.md) that doesn't use a texture.

## 描述

By configuring various properties of this style box, you can achieve many common looks without the need of a texture. This includes optionally rounded borders, antialiasing, shadows, and skew.

Setting corner radius to high values is allowed. As soon as corners overlap, the stylebox will switch to a relative system:

```text

    height = 30
    corner_radius_top_left = 50
    corner_radius_bottom_left = 100
```

The relative system now would take the 1:2 ratio of the two left corners to calculate the actual corner width. Both corners added will **never** be more than the height. Result:

```text

    corner_radius_top_left: 10
    corner_radius_bottom_left: 20
```





## 属性

|||
|:-:|:--|
| [`bool`](class_bool.md)       | [`anti_aliasing`](class_styleboxflat.md#class_styleboxflat_property_anti_aliasing)                           | ``true``                    |
| [`float`](class_float.md)     | [`anti_aliasing_size`](class_styleboxflat.md#class_styleboxflat_property_anti_aliasing_size)                 | ``1.0``                     |
| [`Color`](class_color.md)     | [`bg_color`](class_styleboxflat.md#class_styleboxflat_property_bg_color)                                     | ``Color(0.6, 0.6, 0.6, 1)`` |
| [`bool`](class_bool.md)       | [`border_blend`](class_styleboxflat.md#class_styleboxflat_property_border_blend)                             | ``false``                   |
| [`Color`](class_color.md)     | [`border_color`](class_styleboxflat.md#class_styleboxflat_property_border_color)                             | ``Color(0.8, 0.8, 0.8, 1)`` |
| [`int`](class_int.md)         | [`border_width_bottom`](class_styleboxflat.md#class_styleboxflat_property_border_width_bottom)               | ``0``                       |
| [`int`](class_int.md)         | [`border_width_left`](class_styleboxflat.md#class_styleboxflat_property_border_width_left)                   | ``0``                       |
| [`int`](class_int.md)         | [`border_width_right`](class_styleboxflat.md#class_styleboxflat_property_border_width_right)                 | ``0``                       |
| [`int`](class_int.md)         | [`border_width_top`](class_styleboxflat.md#class_styleboxflat_property_border_width_top)                     | ``0``                       |
| [`int`](class_int.md)         | [`corner_detail`](class_styleboxflat.md#class_styleboxflat_property_corner_detail)                           | ``8``                       |
| [`int`](class_int.md)         | [`corner_radius_bottom_left`](class_styleboxflat.md#class_styleboxflat_property_corner_radius_bottom_left)   | ``0``                       |
| [`int`](class_int.md)         | [`corner_radius_bottom_right`](class_styleboxflat.md#class_styleboxflat_property_corner_radius_bottom_right) | ``0``                       |
| [`int`](class_int.md)         | [`corner_radius_top_left`](class_styleboxflat.md#class_styleboxflat_property_corner_radius_top_left)         | ``0``                       |
| [`int`](class_int.md)         | [`corner_radius_top_right`](class_styleboxflat.md#class_styleboxflat_property_corner_radius_top_right)       | ``0``                       |
| [`bool`](class_bool.md)       | [`draw_center`](class_styleboxflat.md#class_styleboxflat_property_draw_center)                               | ``true``                    |
| [`float`](class_float.md)     | [`expand_margin_bottom`](class_styleboxflat.md#class_styleboxflat_property_expand_margin_bottom)             | ``0.0``                     |
| [`float`](class_float.md)     | [`expand_margin_left`](class_styleboxflat.md#class_styleboxflat_property_expand_margin_left)                 | ``0.0``                     |
| [`float`](class_float.md)     | [`expand_margin_right`](class_styleboxflat.md#class_styleboxflat_property_expand_margin_right)               | ``0.0``                     |
| [`float`](class_float.md)     | [`expand_margin_top`](class_styleboxflat.md#class_styleboxflat_property_expand_margin_top)                   | ``0.0``                     |
| [`Color`](class_color.md)     | [`shadow_color`](class_styleboxflat.md#class_styleboxflat_property_shadow_color)                             | ``Color(0, 0, 0, 0.6)``     |
| [`Vector2`](class_vector2.md) | [`shadow_offset`](class_styleboxflat.md#class_styleboxflat_property_shadow_offset)                           | ``Vector2(0, 0)``           |
| [`int`](class_int.md)         | [`shadow_size`](class_styleboxflat.md#class_styleboxflat_property_shadow_size)                               | ``0``                       |
| [`Vector2`](class_vector2.md) | [`skew`](class_styleboxflat.md#class_styleboxflat_property_skew)                                             | ``Vector2(0, 0)``           |

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)     | [`get_border_width`](class_styleboxflat.md#class_styleboxflat_method_get_border_width) ( margin: [Side](#enum_@globalscope_side) ) const[^const]                        |
| [`int`](class_int.md)     | [`get_border_width_min`](class_styleboxflat.md#class_styleboxflat_method_get_border_width_min) ( ) const[^const]                                                        |
| [`int`](class_int.md)     | [`get_corner_radius`](class_styleboxflat.md#class_styleboxflat_method_get_corner_radius) ( corner: [Corner](#enum_@globalscope_corner) ) const[^const]                  |
| [`float`](class_float.md) | [`get_expand_margin`](class_styleboxflat.md#class_styleboxflat_method_get_expand_margin) ( margin: [Side](#enum_@globalscope_side) ) const[^const]                      |
| `void`                    | [`set_border_width`](class_styleboxflat.md#class_styleboxflat_method_set_border_width) ( margin: [Side](#enum_@globalscope_side), width: [`int`](class_int.md) )        |
| `void`                    | [`set_border_width_all`](class_styleboxflat.md#class_styleboxflat_method_set_border_width_all) ( width: [`int`](class_int.md) )                                         |
| `void`                    | [`set_corner_radius`](class_styleboxflat.md#class_styleboxflat_method_set_corner_radius) ( corner: [Corner](#enum_@globalscope_corner), radius: [`int`](class_int.md) ) |
| `void`                    | [`set_corner_radius_all`](class_styleboxflat.md#class_styleboxflat_method_set_corner_radius_all) ( radius: [`int`](class_int.md) )                                      |
| `void`                    | [`set_expand_margin`](class_styleboxflat.md#class_styleboxflat_method_set_expand_margin) ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) )   |
| `void`                    | [`set_expand_margin_all`](class_styleboxflat.md#class_styleboxflat_method_set_expand_margin_all) ( size: [`float`](class_float.md) )                                    |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_styleboxflat_property_anti_aliasing"></div>

[`bool`](class_bool.md) **anti_aliasing** = ``true`` <div id="class_styleboxflat_property_anti_aliasing"></div>

- `void` **set_anti_aliased** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_anti_aliased** ( )

Antialiasing draws a small ring around the edges, which fades to transparency. As a result, edges look much smoother. This is only noticeable when using rounded corners or [`skew`](class_styleboxflat.md#class_styleboxflat_property_skew).

 **Note:** When using beveled corners with 45-degree angles ([`corner_detail`](class_styleboxflat.md#class_styleboxflat_property_corner_detail) = 1), it is recommended to set [`anti_aliasing`](class_styleboxflat.md#class_styleboxflat_property_anti_aliasing) to `false` to ensure crisp visuals and avoid possible visual glitches.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_anti_aliasing_size"></div>

[`float`](class_float.md) **anti_aliasing_size** = ``1.0`` <div id="class_styleboxflat_property_anti_aliasing_size"></div>

- `void` **set_aa_size** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_aa_size** ( )

This changes the size of the antialiasing effect. `1.0` is recommended for an optimal result at 100% scale, identical to how rounded rectangles are rendered in web browsers and most vector drawing software.

 **Note:** Higher values may produce a blur effect but can also create undesired artifacts on small boxes with large-radius corners.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_bg_color"></div>

[`Color`](class_color.md) **bg_color** = ``Color(0.6, 0.6, 0.6, 1)`` <div id="class_styleboxflat_property_bg_color"></div>

- `void` **set_bg_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_bg_color** ( )

The background color of the stylebox.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_border_blend"></div>

[`bool`](class_bool.md) **border_blend** = ``false`` <div id="class_styleboxflat_property_border_blend"></div>

- `void` **set_border_blend** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_border_blend** ( )

If `true`, the border will fade into the background color.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_border_color"></div>

[`Color`](class_color.md) **border_color** = ``Color(0.8, 0.8, 0.8, 1)`` <div id="class_styleboxflat_property_border_color"></div>

- `void` **set_border_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_border_color** ( )

Sets the color of the border.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_border_width_bottom"></div>

[`int`](class_int.md) **border_width_bottom** = ``0`` <div id="class_styleboxflat_property_border_width_bottom"></div>

- `void` **set_border_width** ( margin: [Side](#enum_@globalscope_side), width: [`int`](class_int.md) )
- [`int`](class_int.md) **get_border_width** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Border width for the bottom border.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_border_width_left"></div>

[`int`](class_int.md) **border_width_left** = ``0`` <div id="class_styleboxflat_property_border_width_left"></div>

- `void` **set_border_width** ( margin: [Side](#enum_@globalscope_side), width: [`int`](class_int.md) )
- [`int`](class_int.md) **get_border_width** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Border width for the left border.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_border_width_right"></div>

[`int`](class_int.md) **border_width_right** = ``0`` <div id="class_styleboxflat_property_border_width_right"></div>

- `void` **set_border_width** ( margin: [Side](#enum_@globalscope_side), width: [`int`](class_int.md) )
- [`int`](class_int.md) **get_border_width** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Border width for the right border.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_border_width_top"></div>

[`int`](class_int.md) **border_width_top** = ``0`` <div id="class_styleboxflat_property_border_width_top"></div>

- `void` **set_border_width** ( margin: [Side](#enum_@globalscope_side), width: [`int`](class_int.md) )
- [`int`](class_int.md) **get_border_width** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Border width for the top border.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_corner_detail"></div>

[`int`](class_int.md) **corner_detail** = ``8`` <div id="class_styleboxflat_property_corner_detail"></div>

- `void` **set_corner_detail** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_corner_detail** ( )

This sets the number of vertices used for each corner. Higher values result in rounder corners but take more processing power to compute. When choosing a value, you should take the corner radius ([`set_corner_radius_all`](class_styleboxflat.md#class_styleboxflat_method_set_corner_radius_all)) into account.

For corner radii less than 10, `4` or `5` should be enough. For corner radii less than 30, values between `8` and `12` should be enough.

A corner detail of `1` will result in chamfered corners instead of rounded corners, which is useful for some artistic effects.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_corner_radius_bottom_left"></div>

[`int`](class_int.md) **corner_radius_bottom_left** = ``0`` <div id="class_styleboxflat_property_corner_radius_bottom_left"></div>

- `void` **set_corner_radius** ( corner: [Corner](#enum_@globalscope_corner), radius: [`int`](class_int.md) )
- [`int`](class_int.md) **get_corner_radius** ( corner: [Corner](#enum_@globalscope_corner) ) const[^const]

The bottom-left corner's radius. If `0`, the corner is not rounded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_corner_radius_bottom_right"></div>

[`int`](class_int.md) **corner_radius_bottom_right** = ``0`` <div id="class_styleboxflat_property_corner_radius_bottom_right"></div>

- `void` **set_corner_radius** ( corner: [Corner](#enum_@globalscope_corner), radius: [`int`](class_int.md) )
- [`int`](class_int.md) **get_corner_radius** ( corner: [Corner](#enum_@globalscope_corner) ) const[^const]

The bottom-right corner's radius. If `0`, the corner is not rounded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_corner_radius_top_left"></div>

[`int`](class_int.md) **corner_radius_top_left** = ``0`` <div id="class_styleboxflat_property_corner_radius_top_left"></div>

- `void` **set_corner_radius** ( corner: [Corner](#enum_@globalscope_corner), radius: [`int`](class_int.md) )
- [`int`](class_int.md) **get_corner_radius** ( corner: [Corner](#enum_@globalscope_corner) ) const[^const]

The top-left corner's radius. If `0`, the corner is not rounded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_corner_radius_top_right"></div>

[`int`](class_int.md) **corner_radius_top_right** = ``0`` <div id="class_styleboxflat_property_corner_radius_top_right"></div>

- `void` **set_corner_radius** ( corner: [Corner](#enum_@globalscope_corner), radius: [`int`](class_int.md) )
- [`int`](class_int.md) **get_corner_radius** ( corner: [Corner](#enum_@globalscope_corner) ) const[^const]

The top-right corner's radius. If `0`, the corner is not rounded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_draw_center"></div>

[`bool`](class_bool.md) **draw_center** = ``true`` <div id="class_styleboxflat_property_draw_center"></div>

- `void` **set_draw_center** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_draw_center_enabled** ( )

Toggles drawing of the inner part of the stylebox.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_expand_margin_bottom"></div>

[`float`](class_float.md) **expand_margin_bottom** = ``0.0`` <div id="class_styleboxflat_property_expand_margin_bottom"></div>

- `void` **set_expand_margin** ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) )
- [`float`](class_float.md) **get_expand_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Expands the stylebox outside of the control rect on the bottom edge. Useful in combination with [`border_width_bottom`](class_styleboxflat.md#class_styleboxflat_property_border_width_bottom) to draw a border outside the control rect.

 **Note:** Unlike [`StyleBox.content_margin_bottom`](class_stylebox.md#class_stylebox_property_content_margin_bottom), [`expand_margin_bottom`](class_styleboxflat.md#class_styleboxflat_property_expand_margin_bottom) does *not* affect the size of the clickable area for [`Control`](class_control.md) s. This can negatively impact usability if used wrong, as the user may try to click an area of the StyleBox that cannot actually receive clicks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_expand_margin_left"></div>

[`float`](class_float.md) **expand_margin_left** = ``0.0`` <div id="class_styleboxflat_property_expand_margin_left"></div>

- `void` **set_expand_margin** ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) )
- [`float`](class_float.md) **get_expand_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Expands the stylebox outside of the control rect on the left edge. Useful in combination with [`border_width_left`](class_styleboxflat.md#class_styleboxflat_property_border_width_left) to draw a border outside the control rect.

 **Note:** Unlike [`StyleBox.content_margin_left`](class_stylebox.md#class_stylebox_property_content_margin_left), [`expand_margin_left`](class_styleboxflat.md#class_styleboxflat_property_expand_margin_left) does *not* affect the size of the clickable area for [`Control`](class_control.md) s. This can negatively impact usability if used wrong, as the user may try to click an area of the StyleBox that cannot actually receive clicks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_expand_margin_right"></div>

[`float`](class_float.md) **expand_margin_right** = ``0.0`` <div id="class_styleboxflat_property_expand_margin_right"></div>

- `void` **set_expand_margin** ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) )
- [`float`](class_float.md) **get_expand_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Expands the stylebox outside of the control rect on the right edge. Useful in combination with [`border_width_right`](class_styleboxflat.md#class_styleboxflat_property_border_width_right) to draw a border outside the control rect.

 **Note:** Unlike [`StyleBox.content_margin_right`](class_stylebox.md#class_stylebox_property_content_margin_right), [`expand_margin_right`](class_styleboxflat.md#class_styleboxflat_property_expand_margin_right) does *not* affect the size of the clickable area for [`Control`](class_control.md) s. This can negatively impact usability if used wrong, as the user may try to click an area of the StyleBox that cannot actually receive clicks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_expand_margin_top"></div>

[`float`](class_float.md) **expand_margin_top** = ``0.0`` <div id="class_styleboxflat_property_expand_margin_top"></div>

- `void` **set_expand_margin** ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) )
- [`float`](class_float.md) **get_expand_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

Expands the stylebox outside of the control rect on the top edge. Useful in combination with [`border_width_top`](class_styleboxflat.md#class_styleboxflat_property_border_width_top) to draw a border outside the control rect.

 **Note:** Unlike [`StyleBox.content_margin_top`](class_stylebox.md#class_stylebox_property_content_margin_top), [`expand_margin_top`](class_styleboxflat.md#class_styleboxflat_property_expand_margin_top) does *not* affect the size of the clickable area for [`Control`](class_control.md) s. This can negatively impact usability if used wrong, as the user may try to click an area of the StyleBox that cannot actually receive clicks.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_shadow_color"></div>

[`Color`](class_color.md) **shadow_color** = ``Color(0, 0, 0, 0.6)`` <div id="class_styleboxflat_property_shadow_color"></div>

- `void` **set_shadow_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_shadow_color** ( )

The color of the shadow. This has no effect if [`shadow_size`](class_styleboxflat.md#class_styleboxflat_property_shadow_size) is lower than 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_shadow_offset"></div>

[`Vector2`](class_vector2.md) **shadow_offset** = ``Vector2(0, 0)`` <div id="class_styleboxflat_property_shadow_offset"></div>

- `void` **set_shadow_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_shadow_offset** ( )

The shadow offset in pixels. Adjusts the position of the shadow relatively to the stylebox.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_shadow_size"></div>

[`int`](class_int.md) **shadow_size** = ``0`` <div id="class_styleboxflat_property_shadow_size"></div>

- `void` **set_shadow_size** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_shadow_size** ( )

The shadow size in pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_property_skew"></div>

[`Vector2`](class_vector2.md) **skew** = ``Vector2(0, 0)`` <div id="class_styleboxflat_property_skew"></div>

- `void` **set_skew** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_skew** ( )

If set to a non-zero value on either axis, [`skew`](class_styleboxflat.md#class_styleboxflat_property_skew) distorts the StyleBox horizontally and/or vertically. This can be used for "futuristic"-style UIs. Positive values skew the StyleBox towards the right (X axis) and upwards (Y axis), while negative values skew the StyleBox towards the left (X axis) and downwards (Y axis).

 **Note:** To ensure text does not touch the StyleBox's edges, consider increasing the [`StyleBox`](class_stylebox.md)'s content margin (see [`StyleBox.content_margin_bottom`](class_stylebox.md#class_stylebox_property_content_margin_bottom)). It is preferable to increase the content margin instead of the expand margin (see [`expand_margin_bottom`](class_styleboxflat.md#class_styleboxflat_property_expand_margin_bottom)), as increasing the expand margin does not increase the size of the clickable area for [`Control`](class_control.md) s.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_styleboxflat_method_get_border_width"></div>

[`int`](class_int.md) **get_border_width** ( margin: [Side](#enum_@globalscope_side) ) const[^const]<div id="class_styleboxflat_method_get_border_width"></div>

Returns the specified [Side](#enum_@globalscope_side)'s border width.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_method_get_border_width_min"></div>

[`int`](class_int.md) **get_border_width_min** ( ) const[^const]<div id="class_styleboxflat_method_get_border_width_min"></div>

Returns the smallest border width out of all four borders.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_method_get_corner_radius"></div>

[`int`](class_int.md) **get_corner_radius** ( corner: [Corner](#enum_@globalscope_corner) ) const[^const]<div id="class_styleboxflat_method_get_corner_radius"></div>

Returns the given `corner`'s radius. See [Corner](#enum_@globalscope_corner) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_method_get_expand_margin"></div>

[`float`](class_float.md) **get_expand_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]<div id="class_styleboxflat_method_get_expand_margin"></div>

Returns the size of the specified [Side](#enum_@globalscope_side)'s expand margin.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_method_set_border_width"></div>

`void` **set_border_width** ( margin: [Side](#enum_@globalscope_side), width: [`int`](class_int.md) )<div id="class_styleboxflat_method_set_border_width"></div>

Sets the specified [Side](#enum_@globalscope_side)'s border width to `width` pixels.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_method_set_border_width_all"></div>

`void` **set_border_width_all** ( width: [`int`](class_int.md) )<div id="class_styleboxflat_method_set_border_width_all"></div>

Sets the border width to `width` pixels for all sides.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_method_set_corner_radius"></div>

`void` **set_corner_radius** ( corner: [Corner](#enum_@globalscope_corner), radius: [`int`](class_int.md) )<div id="class_styleboxflat_method_set_corner_radius"></div>

Sets the corner radius to `radius` pixels for the given `corner`. See [Corner](#enum_@globalscope_corner) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_method_set_corner_radius_all"></div>

`void` **set_corner_radius_all** ( radius: [`int`](class_int.md) )<div id="class_styleboxflat_method_set_corner_radius_all"></div>

Sets the corner radius to `radius` pixels for all corners.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_method_set_expand_margin"></div>

`void` **set_expand_margin** ( margin: [Side](#enum_@globalscope_side), size: [`float`](class_float.md) )<div id="class_styleboxflat_method_set_expand_margin"></div>

Sets the expand margin to `size` pixels for the specified [Side](#enum_@globalscope_side).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_styleboxflat_method_set_expand_margin_all"></div>

`void` **set_expand_margin_all** ( size: [`float`](class_float.md) )<div id="class_styleboxflat_method_set_expand_margin_all"></div>

Sets the expand margin to `size` pixels for all sides.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
