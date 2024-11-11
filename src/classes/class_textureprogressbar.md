<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/TextureProgressBar.xml。 -->

<div id="_class_textureprogressbar"></div>

# TextureProgressBar

**继承：** [`Range`](class_range.md) **<** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

Texture-based progress bar. Useful for loading screens and life or stamina bars.

## 描述

TextureProgressBar works like [`ProgressBar`](class_progressbar.md), but uses up to 3 textures instead of Godot's [`Theme`](class_theme.md) resource. It can be used to create horizontal, vertical and radial progress bars.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)                    | [`fill_mode`](class_textureprogressbar.md#class_textureprogressbar_property_fill_mode)                             | ``0``                                                                                      |
| [MouseFilter](#enum_control_mousefilter) | mouse_filter                                                                                                       | ``1`` (overrides [`Control`](class_control.md#class_control_property_mouse_filter))        |
| [`bool`](class_bool.md)                  | [`nine_patch_stretch`](class_textureprogressbar.md#class_textureprogressbar_property_nine_patch_stretch)           | ``false``                                                                                  |
| [`Vector2`](class_vector2.md)            | [`radial_center_offset`](class_textureprogressbar.md#class_textureprogressbar_property_radial_center_offset)       | ``Vector2(0, 0)``                                                                          |
| [`float`](class_float.md)                | [`radial_fill_degrees`](class_textureprogressbar.md#class_textureprogressbar_property_radial_fill_degrees)         | ``360.0``                                                                                  |
| [`float`](class_float.md)                | [`radial_initial_angle`](class_textureprogressbar.md#class_textureprogressbar_property_radial_initial_angle)       | ``0.0``                                                                                    |
| [SizeFlags](#enum_control_sizeflags)     | size_flags_vertical                                                                                                | ``1`` (overrides [`Control`](class_control.md#class_control_property_size_flags_vertical)) |
| [`float`](class_float.md)                | step                                                                                                               | ``1.0`` (overrides [`Range`](class_range.md#class_range_property_step))                    |
| [`int`](class_int.md)                    | [`stretch_margin_bottom`](class_textureprogressbar.md#class_textureprogressbar_property_stretch_margin_bottom)     | ``0``                                                                                      |
| [`int`](class_int.md)                    | [`stretch_margin_left`](class_textureprogressbar.md#class_textureprogressbar_property_stretch_margin_left)         | ``0``                                                                                      |
| [`int`](class_int.md)                    | [`stretch_margin_right`](class_textureprogressbar.md#class_textureprogressbar_property_stretch_margin_right)       | ``0``                                                                                      |
| [`int`](class_int.md)                    | [`stretch_margin_top`](class_textureprogressbar.md#class_textureprogressbar_property_stretch_margin_top)           | ``0``                                                                                      |
| [`Texture2D`](class_texture2d.md)        | [`texture_over`](class_textureprogressbar.md#class_textureprogressbar_property_texture_over)                       |                                                                                            |
| [`Texture2D`](class_texture2d.md)        | [`texture_progress`](class_textureprogressbar.md#class_textureprogressbar_property_texture_progress)               |                                                                                            |
| [`Vector2`](class_vector2.md)            | [`texture_progress_offset`](class_textureprogressbar.md#class_textureprogressbar_property_texture_progress_offset) | ``Vector2(0, 0)``                                                                          |
| [`Texture2D`](class_texture2d.md)        | [`texture_under`](class_textureprogressbar.md#class_textureprogressbar_property_texture_under)                     |                                                                                            |
| [`Color`](class_color.md)                | [`tint_over`](class_textureprogressbar.md#class_textureprogressbar_property_tint_over)                             | ``Color(1, 1, 1, 1)``                                                                      |
| [`Color`](class_color.md)                | [`tint_progress`](class_textureprogressbar.md#class_textureprogressbar_property_tint_progress)                     | ``Color(1, 1, 1, 1)``                                                                      |
| [`Color`](class_color.md)                | [`tint_under`](class_textureprogressbar.md#class_textureprogressbar_property_tint_under)                           | ``Color(1, 1, 1, 1)``                                                                      |

## 方法

|||
|:-:|:--|
| [`int`](class_int.md) | [`get_stretch_margin`](class_textureprogressbar.md#class_textureprogressbar_method_get_stretch_margin) ( margin: [Side](#enum_@globalscope_side) ) const[^const]                 |
| `void`                | [`set_stretch_margin`](class_textureprogressbar.md#class_textureprogressbar_method_set_stretch_margin) ( margin: [Side](#enum_@globalscope_side), value: [`int`](class_int.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_textureprogressbar_fillmode"></div>

enum **FillMode**: <div id="enum_textureprogressbar_fillmode"></div>

<div id="_class_textureprogressbar_constant_fill_left_to_right"></div>

[FillMode](#enum_textureprogressbar_fillmode) **FILL_LEFT_TO_RIGHT** = ``0``

The [`texture_progress`](class_textureprogressbar.md#class_textureprogressbar_property_texture_progress) fills from left to right.

<div id="_class_textureprogressbar_constant_fill_right_to_left"></div>

[FillMode](#enum_textureprogressbar_fillmode) **FILL_RIGHT_TO_LEFT** = ``1``

The [`texture_progress`](class_textureprogressbar.md#class_textureprogressbar_property_texture_progress) fills from right to left.

<div id="_class_textureprogressbar_constant_fill_top_to_bottom"></div>

[FillMode](#enum_textureprogressbar_fillmode) **FILL_TOP_TO_BOTTOM** = ``2``

The [`texture_progress`](class_textureprogressbar.md#class_textureprogressbar_property_texture_progress) fills from top to bottom.

<div id="_class_textureprogressbar_constant_fill_bottom_to_top"></div>

[FillMode](#enum_textureprogressbar_fillmode) **FILL_BOTTOM_TO_TOP** = ``3``

The [`texture_progress`](class_textureprogressbar.md#class_textureprogressbar_property_texture_progress) fills from bottom to top.

<div id="_class_textureprogressbar_constant_fill_clockwise"></div>

[FillMode](#enum_textureprogressbar_fillmode) **FILL_CLOCKWISE** = ``4``

Turns the node into a radial bar. The [`texture_progress`](class_textureprogressbar.md#class_textureprogressbar_property_texture_progress) fills clockwise. See [`radial_center_offset`](class_textureprogressbar.md#class_textureprogressbar_property_radial_center_offset), [`radial_initial_angle`](class_textureprogressbar.md#class_textureprogressbar_property_radial_initial_angle) and [`radial_fill_degrees`](class_textureprogressbar.md#class_textureprogressbar_property_radial_fill_degrees) to control the way the bar fills up.

<div id="_class_textureprogressbar_constant_fill_counter_clockwise"></div>

[FillMode](#enum_textureprogressbar_fillmode) **FILL_COUNTER_CLOCKWISE** = ``5``

Turns the node into a radial bar. The [`texture_progress`](class_textureprogressbar.md#class_textureprogressbar_property_texture_progress) fills counterclockwise. See [`radial_center_offset`](class_textureprogressbar.md#class_textureprogressbar_property_radial_center_offset), [`radial_initial_angle`](class_textureprogressbar.md#class_textureprogressbar_property_radial_initial_angle) and [`radial_fill_degrees`](class_textureprogressbar.md#class_textureprogressbar_property_radial_fill_degrees) to control the way the bar fills up.

<div id="_class_textureprogressbar_constant_fill_bilinear_left_and_right"></div>

[FillMode](#enum_textureprogressbar_fillmode) **FILL_BILINEAR_LEFT_AND_RIGHT** = ``6``

The [`texture_progress`](class_textureprogressbar.md#class_textureprogressbar_property_texture_progress) fills from the center, expanding both towards the left and the right.

<div id="_class_textureprogressbar_constant_fill_bilinear_top_and_bottom"></div>

[FillMode](#enum_textureprogressbar_fillmode) **FILL_BILINEAR_TOP_AND_BOTTOM** = ``7``

The [`texture_progress`](class_textureprogressbar.md#class_textureprogressbar_property_texture_progress) fills from the center, expanding both towards the top and the bottom.

<div id="_class_textureprogressbar_constant_fill_clockwise_and_counter_clockwise"></div>

[FillMode](#enum_textureprogressbar_fillmode) **FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE** = ``8``

Turns the node into a radial bar. The [`texture_progress`](class_textureprogressbar.md#class_textureprogressbar_property_texture_progress) fills radially from the center, expanding both clockwise and counterclockwise. See [`radial_center_offset`](class_textureprogressbar.md#class_textureprogressbar_property_radial_center_offset), [`radial_initial_angle`](class_textureprogressbar.md#class_textureprogressbar_property_radial_initial_angle) and [`radial_fill_degrees`](class_textureprogressbar.md#class_textureprogressbar_property_radial_fill_degrees) to control the way the bar fills up.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_textureprogressbar_property_fill_mode"></div>

[`int`](class_int.md) **fill_mode** = ``0`` <div id="class_textureprogressbar_property_fill_mode"></div>

- `void` **set_fill_mode** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_fill_mode** ( )

The fill direction. See [FillMode](#enum_textureprogressbar_fillmode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textureprogressbar_property_nine_patch_stretch"></div>

[`bool`](class_bool.md) **nine_patch_stretch** = ``false`` <div id="class_textureprogressbar_property_nine_patch_stretch"></div>

- `void` **set_nine_patch_stretch** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_nine_patch_stretch** ( )

If `true`, Godot treats the bar's textures like in [`NinePatchRect`](class_ninepatchrect.md). Use the `stretch_margin_*` properties like [`stretch_margin_bottom`](class_textureprogressbar.md#class_textureprogressbar_property_stretch_margin_bottom) to set up the nine patch's 3×3 grid. When using a radial [`fill_mode`](class_textureprogressbar.md#class_textureprogressbar_property_fill_mode), this setting will enable stretching.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textureprogressbar_property_radial_center_offset"></div>

[`Vector2`](class_vector2.md) **radial_center_offset** = ``Vector2(0, 0)`` <div id="class_textureprogressbar_property_radial_center_offset"></div>

- `void` **set_radial_center_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_radial_center_offset** ( )

Offsets [`texture_progress`](class_textureprogressbar.md#class_textureprogressbar_property_texture_progress) if [`fill_mode`](class_textureprogressbar.md#class_textureprogressbar_property_fill_mode) is [`FILL_CLOCKWISE`](class_textureprogressbar.md#class_textureprogressbar_constant_fill_clockwise), [`FILL_COUNTER_CLOCKWISE`](class_textureprogressbar.md#class_textureprogressbar_constant_fill_counter_clockwise), or [`FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE`](class_textureprogressbar.md#class_textureprogressbar_constant_fill_clockwise_and_counter_clockwise).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textureprogressbar_property_radial_fill_degrees"></div>

[`float`](class_float.md) **radial_fill_degrees** = ``360.0`` <div id="class_textureprogressbar_property_radial_fill_degrees"></div>

- `void` **set_fill_degrees** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_fill_degrees** ( )

Upper limit for the fill of [`texture_progress`](class_textureprogressbar.md#class_textureprogressbar_property_texture_progress) if [`fill_mode`](class_textureprogressbar.md#class_textureprogressbar_property_fill_mode) is [`FILL_CLOCKWISE`](class_textureprogressbar.md#class_textureprogressbar_constant_fill_clockwise), [`FILL_COUNTER_CLOCKWISE`](class_textureprogressbar.md#class_textureprogressbar_constant_fill_counter_clockwise), or [`FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE`](class_textureprogressbar.md#class_textureprogressbar_constant_fill_clockwise_and_counter_clockwise). When the node's `value` is equal to its `max_value`, the texture fills up to this angle.

See [`Range.value`](class_range.md#class_range_property_value), [`Range.max_value`](class_range.md#class_range_property_max_value).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textureprogressbar_property_radial_initial_angle"></div>

[`float`](class_float.md) **radial_initial_angle** = ``0.0`` <div id="class_textureprogressbar_property_radial_initial_angle"></div>

- `void` **set_radial_initial_angle** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_radial_initial_angle** ( )

Starting angle for the fill of [`texture_progress`](class_textureprogressbar.md#class_textureprogressbar_property_texture_progress) if [`fill_mode`](class_textureprogressbar.md#class_textureprogressbar_property_fill_mode) is [`FILL_CLOCKWISE`](class_textureprogressbar.md#class_textureprogressbar_constant_fill_clockwise), [`FILL_COUNTER_CLOCKWISE`](class_textureprogressbar.md#class_textureprogressbar_constant_fill_counter_clockwise), or [`FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE`](class_textureprogressbar.md#class_textureprogressbar_constant_fill_clockwise_and_counter_clockwise). When the node's `value` is equal to its `min_value`, the texture doesn't show up at all. When the `value` increases, the texture fills and tends towards [`radial_fill_degrees`](class_textureprogressbar.md#class_textureprogressbar_property_radial_fill_degrees).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textureprogressbar_property_stretch_margin_bottom"></div>

[`int`](class_int.md) **stretch_margin_bottom** = ``0`` <div id="class_textureprogressbar_property_stretch_margin_bottom"></div>

- `void` **set_stretch_margin** ( margin: [Side](#enum_@globalscope_side), value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_stretch_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

The height of the 9-patch's bottom row. A margin of 16 means the 9-slice's bottom corners and side will have a height of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders. Only effective if [`nine_patch_stretch`](class_textureprogressbar.md#class_textureprogressbar_property_nine_patch_stretch) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textureprogressbar_property_stretch_margin_left"></div>

[`int`](class_int.md) **stretch_margin_left** = ``0`` <div id="class_textureprogressbar_property_stretch_margin_left"></div>

- `void` **set_stretch_margin** ( margin: [Side](#enum_@globalscope_side), value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_stretch_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

The width of the 9-patch's left column. Only effective if [`nine_patch_stretch`](class_textureprogressbar.md#class_textureprogressbar_property_nine_patch_stretch) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textureprogressbar_property_stretch_margin_right"></div>

[`int`](class_int.md) **stretch_margin_right** = ``0`` <div id="class_textureprogressbar_property_stretch_margin_right"></div>

- `void` **set_stretch_margin** ( margin: [Side](#enum_@globalscope_side), value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_stretch_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

The width of the 9-patch's right column. Only effective if [`nine_patch_stretch`](class_textureprogressbar.md#class_textureprogressbar_property_nine_patch_stretch) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textureprogressbar_property_stretch_margin_top"></div>

[`int`](class_int.md) **stretch_margin_top** = ``0`` <div id="class_textureprogressbar_property_stretch_margin_top"></div>

- `void` **set_stretch_margin** ( margin: [Side](#enum_@globalscope_side), value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_stretch_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

The height of the 9-patch's top row. Only effective if [`nine_patch_stretch`](class_textureprogressbar.md#class_textureprogressbar_property_nine_patch_stretch) is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textureprogressbar_property_texture_over"></div>

[`Texture2D`](class_texture2d.md) **texture_over** <div id="class_textureprogressbar_property_texture_over"></div>

- `void` **set_over_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_over_texture** ( )

[`Texture2D`](class_texture2d.md) that draws over the progress bar. Use it to add highlights or an upper-frame that hides part of [`texture_progress`](class_textureprogressbar.md#class_textureprogressbar_property_texture_progress).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textureprogressbar_property_texture_progress"></div>

[`Texture2D`](class_texture2d.md) **texture_progress** <div id="class_textureprogressbar_property_texture_progress"></div>

- `void` **set_progress_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_progress_texture** ( )

[`Texture2D`](class_texture2d.md) that clips based on the node's `value` and [`fill_mode`](class_textureprogressbar.md#class_textureprogressbar_property_fill_mode). As `value` increased, the texture fills up. It shows entirely when `value` reaches `max_value`. It doesn't show at all if `value` is equal to `min_value`.

The `value` property comes from [`Range`](class_range.md). See [`Range.value`](class_range.md#class_range_property_value), [`Range.min_value`](class_range.md#class_range_property_min_value), [`Range.max_value`](class_range.md#class_range_property_max_value).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textureprogressbar_property_texture_progress_offset"></div>

[`Vector2`](class_vector2.md) **texture_progress_offset** = ``Vector2(0, 0)`` <div id="class_textureprogressbar_property_texture_progress_offset"></div>

- `void` **set_texture_progress_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_texture_progress_offset** ( )

The offset of [`texture_progress`](class_textureprogressbar.md#class_textureprogressbar_property_texture_progress). Useful for [`texture_over`](class_textureprogressbar.md#class_textureprogressbar_property_texture_over) and [`texture_under`](class_textureprogressbar.md#class_textureprogressbar_property_texture_under) with fancy borders, to avoid transparent margins in your progress texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textureprogressbar_property_texture_under"></div>

[`Texture2D`](class_texture2d.md) **texture_under** <div id="class_textureprogressbar_property_texture_under"></div>

- `void` **set_under_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_under_texture** ( )

[`Texture2D`](class_texture2d.md) that draws under the progress bar. The bar's background.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textureprogressbar_property_tint_over"></div>

[`Color`](class_color.md) **tint_over** = ``Color(1, 1, 1, 1)`` <div id="class_textureprogressbar_property_tint_over"></div>

- `void` **set_tint_over** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_tint_over** ( )

Multiplies the color of the bar's [`texture_over`](class_textureprogressbar.md#class_textureprogressbar_property_texture_over) texture. The effect is similar to [`CanvasItem.modulate`](class_canvasitem.md#class_canvasitem_property_modulate), except it only affects this specific texture instead of the entire node.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textureprogressbar_property_tint_progress"></div>

[`Color`](class_color.md) **tint_progress** = ``Color(1, 1, 1, 1)`` <div id="class_textureprogressbar_property_tint_progress"></div>

- `void` **set_tint_progress** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_tint_progress** ( )

Multiplies the color of the bar's [`texture_progress`](class_textureprogressbar.md#class_textureprogressbar_property_texture_progress) texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textureprogressbar_property_tint_under"></div>

[`Color`](class_color.md) **tint_under** = ``Color(1, 1, 1, 1)`` <div id="class_textureprogressbar_property_tint_under"></div>

- `void` **set_tint_under** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_tint_under** ( )

Multiplies the color of the bar's [`texture_under`](class_textureprogressbar.md#class_textureprogressbar_property_texture_under) texture.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_textureprogressbar_method_get_stretch_margin"></div>

[`int`](class_int.md) **get_stretch_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]<div id="class_textureprogressbar_method_get_stretch_margin"></div>

Returns the stretch margin with the specified index. See [`stretch_margin_bottom`](class_textureprogressbar.md#class_textureprogressbar_property_stretch_margin_bottom) and related properties.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_textureprogressbar_method_set_stretch_margin"></div>

`void` **set_stretch_margin** ( margin: [Side](#enum_@globalscope_side), value: [`int`](class_int.md) )<div id="class_textureprogressbar_method_set_stretch_margin"></div>

Sets the stretch margin with the specified index. See [`stretch_margin_bottom`](class_textureprogressbar.md#class_textureprogressbar_property_stretch_margin_bottom) and related properties.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
