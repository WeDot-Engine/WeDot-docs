<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/NinePatchRect.xml。 -->

<div id="_class_ninepatchrect"></div>

# NinePatchRect

**继承：** [`Control`](class_control.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A control that displays a texture by keeping its corners intact, but tiling its edges and center.

## 描述

Also known as 9-slice panels, **NinePatchRect** produces clean panels of any size based on a small texture. To do so, it splits the texture in a 3×3 grid. When you scale the node, it tiles the texture's edges horizontally or vertically, tiles the center on both axes, and leaves the corners unchanged.

## 属性

|||
|:-:|:--|
| [AxisStretchMode](#enum_ninepatchrect_axisstretchmode) | [`axis_stretch_horizontal`](class_ninepatchrect.md#class_ninepatchrect_property_axis_stretch_horizontal) | ``0``                                                                               |
| [AxisStretchMode](#enum_ninepatchrect_axisstretchmode) | [`axis_stretch_vertical`](class_ninepatchrect.md#class_ninepatchrect_property_axis_stretch_vertical)     | ``0``                                                                               |
| [`bool`](class_bool.md)                                | [`draw_center`](class_ninepatchrect.md#class_ninepatchrect_property_draw_center)                         | ``true``                                                                            |
| [MouseFilter](#enum_control_mousefilter)               | mouse_filter                                                                                             | ``2`` (overrides [`Control`](class_control.md#class_control_property_mouse_filter)) |
| [`int`](class_int.md)                                  | [`patch_margin_bottom`](class_ninepatchrect.md#class_ninepatchrect_property_patch_margin_bottom)         | ``0``                                                                               |
| [`int`](class_int.md)                                  | [`patch_margin_left`](class_ninepatchrect.md#class_ninepatchrect_property_patch_margin_left)             | ``0``                                                                               |
| [`int`](class_int.md)                                  | [`patch_margin_right`](class_ninepatchrect.md#class_ninepatchrect_property_patch_margin_right)           | ``0``                                                                               |
| [`int`](class_int.md)                                  | [`patch_margin_top`](class_ninepatchrect.md#class_ninepatchrect_property_patch_margin_top)               | ``0``                                                                               |
| [`Rect2`](class_rect2.md)                              | [`region_rect`](class_ninepatchrect.md#class_ninepatchrect_property_region_rect)                         | ``Rect2(0, 0, 0, 0)``                                                               |
| [`Texture2D`](class_texture2d.md)                      | [`texture`](class_ninepatchrect.md#class_ninepatchrect_property_texture)                                 |                                                                                     |

## 方法

|||
|:-:|:--|
| [`int`](class_int.md) | [`get_patch_margin`](class_ninepatchrect.md#class_ninepatchrect_method_get_patch_margin) ( margin: [Side](#enum_@globalscope_side) ) const[^const]                 |
| `void`                | [`set_patch_margin`](class_ninepatchrect.md#class_ninepatchrect_method_set_patch_margin) ( margin: [Side](#enum_@globalscope_side), value: [`int`](class_int.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_ninepatchrect_signal_texture_changed"></div>

**texture_changed** ( ) <div id="class_ninepatchrect_signal_texture_changed"></div>

Emitted when the node's texture changes.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_ninepatchrect_axisstretchmode"></div>

enum **AxisStretchMode**: <div id="enum_ninepatchrect_axisstretchmode"></div>

<div id="_class_ninepatchrect_constant_axis_stretch_mode_stretch"></div>

[AxisStretchMode](#enum_ninepatchrect_axisstretchmode) **AXIS_STRETCH_MODE_STRETCH** = ``0``

Stretches the center texture across the NinePatchRect. This may cause the texture to be distorted.

<div id="_class_ninepatchrect_constant_axis_stretch_mode_tile"></div>

[AxisStretchMode](#enum_ninepatchrect_axisstretchmode) **AXIS_STRETCH_MODE_TILE** = ``1``

Repeats the center texture across the NinePatchRect. This won't cause any visible distortion. The texture must be seamless for this to work without displaying artifacts between edges.

<div id="_class_ninepatchrect_constant_axis_stretch_mode_tile_fit"></div>

[AxisStretchMode](#enum_ninepatchrect_axisstretchmode) **AXIS_STRETCH_MODE_TILE_FIT** = ``2``

Repeats the center texture across the NinePatchRect, but will also stretch the texture to make sure each tile is visible in full. This may cause the texture to be distorted, but less than [`AXIS_STRETCH_MODE_STRETCH`](class_ninepatchrect.md#class_ninepatchrect_constant_axis_stretch_mode_stretch). The texture must be seamless for this to work without displaying artifacts between edges.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_ninepatchrect_property_axis_stretch_horizontal"></div>

[AxisStretchMode](#enum_ninepatchrect_axisstretchmode) **axis_stretch_horizontal** = ``0`` <div id="class_ninepatchrect_property_axis_stretch_horizontal"></div>

- `void` **set_h_axis_stretch_mode** ( value: [AxisStretchMode](#enum_ninepatchrect_axisstretchmode) )
- [AxisStretchMode](#enum_ninepatchrect_axisstretchmode) **get_h_axis_stretch_mode** ( )

The stretch mode to use for horizontal stretching/tiling. See [AxisStretchMode](#enum_ninepatchrect_axisstretchmode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ninepatchrect_property_axis_stretch_vertical"></div>

[AxisStretchMode](#enum_ninepatchrect_axisstretchmode) **axis_stretch_vertical** = ``0`` <div id="class_ninepatchrect_property_axis_stretch_vertical"></div>

- `void` **set_v_axis_stretch_mode** ( value: [AxisStretchMode](#enum_ninepatchrect_axisstretchmode) )
- [AxisStretchMode](#enum_ninepatchrect_axisstretchmode) **get_v_axis_stretch_mode** ( )

The stretch mode to use for vertical stretching/tiling. See [AxisStretchMode](#enum_ninepatchrect_axisstretchmode) for possible values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ninepatchrect_property_draw_center"></div>

[`bool`](class_bool.md) **draw_center** = ``true`` <div id="class_ninepatchrect_property_draw_center"></div>

- `void` **set_draw_center** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_draw_center_enabled** ( )

If `true`, draw the panel's center. Else, only draw the 9-slice's borders.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ninepatchrect_property_patch_margin_bottom"></div>

[`int`](class_int.md) **patch_margin_bottom** = ``0`` <div id="class_ninepatchrect_property_patch_margin_bottom"></div>

- `void` **set_patch_margin** ( margin: [Side](#enum_@globalscope_side), value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_patch_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

The height of the 9-slice's bottom row. A margin of 16 means the 9-slice's bottom corners and side will have a height of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ninepatchrect_property_patch_margin_left"></div>

[`int`](class_int.md) **patch_margin_left** = ``0`` <div id="class_ninepatchrect_property_patch_margin_left"></div>

- `void` **set_patch_margin** ( margin: [Side](#enum_@globalscope_side), value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_patch_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

The width of the 9-slice's left column. A margin of 16 means the 9-slice's left corners and side will have a width of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ninepatchrect_property_patch_margin_right"></div>

[`int`](class_int.md) **patch_margin_right** = ``0`` <div id="class_ninepatchrect_property_patch_margin_right"></div>

- `void` **set_patch_margin** ( margin: [Side](#enum_@globalscope_side), value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_patch_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

The width of the 9-slice's right column. A margin of 16 means the 9-slice's right corners and side will have a width of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ninepatchrect_property_patch_margin_top"></div>

[`int`](class_int.md) **patch_margin_top** = ``0`` <div id="class_ninepatchrect_property_patch_margin_top"></div>

- `void` **set_patch_margin** ( margin: [Side](#enum_@globalscope_side), value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_patch_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]

The height of the 9-slice's top row. A margin of 16 means the 9-slice's top corners and side will have a height of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ninepatchrect_property_region_rect"></div>

[`Rect2`](class_rect2.md) **region_rect** = ``Rect2(0, 0, 0, 0)`` <div id="class_ninepatchrect_property_region_rect"></div>

- `void` **set_region_rect** ( value: [`Rect2`](class_rect2.md) )
- [`Rect2`](class_rect2.md) **get_region_rect** ( )

Rectangular region of the texture to sample from. If you're working with an atlas, use this property to define the area the 9-slice should use. All other properties are relative to this one. If the rect is empty, NinePatchRect will use the whole texture.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ninepatchrect_property_texture"></div>

[`Texture2D`](class_texture2d.md) **texture** <div id="class_ninepatchrect_property_texture"></div>

- `void` **set_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( )

The node's texture resource.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_ninepatchrect_method_get_patch_margin"></div>

[`int`](class_int.md) **get_patch_margin** ( margin: [Side](#enum_@globalscope_side) ) const[^const]<div id="class_ninepatchrect_method_get_patch_margin"></div>

Returns the size of the margin on the specified [Side](#enum_@globalscope_side).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_ninepatchrect_method_set_patch_margin"></div>

`void` **set_patch_margin** ( margin: [Side](#enum_@globalscope_side), value: [`int`](class_int.md) )<div id="class_ninepatchrect_method_set_patch_margin"></div>

Sets the size of the margin on the specified [Side](#enum_@globalscope_side) to `value` pixels.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
