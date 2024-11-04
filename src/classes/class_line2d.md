<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Line2D.xml。 -->

<div id="_class_line2d"></div>

# Line2D

**继承：** [`Node2D`](class_node2d.md) **<** [`CanvasItem`](class_canvasitem.md) **<** [`Node`](class_node.md) **<** [`Object`](class_object.md)

A 2D polyline that can optionally be textured.

## 描述

This node draws a 2D polyline, i.e. a shape consisting of several points connected by segments. **Line2D** is not a mathematical polyline, i.e. the segments are not infinitely thin. It is intended for rendering and it can be colored and optionally textured.

 **Warning:** Certain configurations may be impossible to draw nicely, such as very sharp angles. In these situations, the node uses fallback drawing logic to look decent.

 **Note:** **Line2D** is drawn using a 2D mesh.

## 属性

| [`bool`](class_bool.md)                             | [`antialiased`](#class_line2d_property_antialiased)         | ``false``                |
| [LineCapMode](#enum_line2d_linecapmode)             | [`begin_cap_mode`](#class_line2d_property_begin_cap_mode)   | ``0``                    |
| [`bool`](class_bool.md)                             | [`closed`](#class_line2d_property_closed)                   | ``false``                |
| [`Color`](class_color.md)                           | [`default_color`](#class_line2d_property_default_color)     | ``Color(1, 1, 1, 1)``    |
| [LineCapMode](#enum_line2d_linecapmode)             | [`end_cap_mode`](#class_line2d_property_end_cap_mode)       | ``0``                    |
| [`Gradient`](class_gradient.md)                     | [`gradient`](#class_line2d_property_gradient)               |                          |
| [LineJointMode](#enum_line2d_linejointmode)         | [`joint_mode`](#class_line2d_property_joint_mode)           | ``0``                    |
| [`PackedVector2Array`](class_packedvector2array.md) | [`points`](#class_line2d_property_points)                   | ``PackedVector2Array()`` |
| [`int`](class_int.md)                               | [`round_precision`](#class_line2d_property_round_precision) | ``8``                    |
| [`float`](class_float.md)                           | [`sharp_limit`](#class_line2d_property_sharp_limit)         | ``2.0``                  |
| [`Texture2D`](class_texture2d.md)                   | [`texture`](#class_line2d_property_texture)                 |                          |
| [LineTextureMode](#enum_line2d_linetexturemode)     | [`texture_mode`](#class_line2d_property_texture_mode)       | ``0``                    |
| [`float`](class_float.md)                           | [`width`](#class_line2d_property_width)                     | ``10.0``                 |
| [`Curve`](class_curve.md)                           | [`width_curve`](#class_line2d_property_width_curve)         |                          |

## 方法

| `void`                        | [`add_point`](#class_line2d_method_add_point) ( position: [`Vector2`](class_vector2.md), index: [`int`](class_int.md) = -1 )              |
| `void`                        | [`clear_points`](#class_line2d_method_clear_points) ( )                                                                                   |
| [`int`](class_int.md)         | [`get_point_count`](#class_line2d_method_get_point_count) ( ) const[^const]                                                               |
| [`Vector2`](class_vector2.md) | [`get_point_position`](#class_line2d_method_get_point_position) ( index: [`int`](class_int.md) ) const[^const]                            |
| `void`                        | [`remove_point`](#class_line2d_method_remove_point) ( index: [`int`](class_int.md) )                                                      |
| `void`                        | [`set_point_position`](#class_line2d_method_set_point_position) ( index: [`int`](class_int.md), position: [`Vector2`](class_vector2.md) ) |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_line2d_linejointmode"></div>

enum **LineJointMode**: <div id="enum_line2d_linejointmode"></div>

<div id="_class_line2d_constant_line_joint_sharp"></div>

[LineJointMode](#enum_line2d_linejointmode) **LINE_JOINT_SHARP** = ``0``

Makes the polyline's joints pointy, connecting the sides of the two segments by extending them until they intersect. If the rotation of a joint is too big (based on [`sharp_limit`](#class_line2d_property_sharp_limit)), the joint falls back to [`LINE_JOINT_BEVEL`](#class_line2d_constant_line_joint_bevel) to prevent very long miters.

<div id="_class_line2d_constant_line_joint_bevel"></div>

[LineJointMode](#enum_line2d_linejointmode) **LINE_JOINT_BEVEL** = ``1``

Makes the polyline's joints bevelled/chamfered, connecting the sides of the two segments with a simple line.

<div id="_class_line2d_constant_line_joint_round"></div>

[LineJointMode](#enum_line2d_linejointmode) **LINE_JOINT_ROUND** = ``2``

Makes the polyline's joints rounded, connecting the sides of the two segments with an arc. The detail of this arc depends on [`round_precision`](#class_line2d_property_round_precision).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_line2d_linecapmode"></div>

enum **LineCapMode**: <div id="enum_line2d_linecapmode"></div>

<div id="_class_line2d_constant_line_cap_none"></div>

[LineCapMode](#enum_line2d_linecapmode) **LINE_CAP_NONE** = ``0``

Draws no line cap.

<div id="_class_line2d_constant_line_cap_box"></div>

[LineCapMode](#enum_line2d_linecapmode) **LINE_CAP_BOX** = ``1``

Draws the line cap as a box, slightly extending the first/last segment.

<div id="_class_line2d_constant_line_cap_round"></div>

[LineCapMode](#enum_line2d_linecapmode) **LINE_CAP_ROUND** = ``2``

Draws the line cap as a semicircle attached to the first/last segment.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_line2d_linetexturemode"></div>

enum **LineTextureMode**: <div id="enum_line2d_linetexturemode"></div>

<div id="_class_line2d_constant_line_texture_none"></div>

[LineTextureMode](#enum_line2d_linetexturemode) **LINE_TEXTURE_NONE** = ``0``

Takes the left pixels of the texture and renders them over the whole polyline.

<div id="_class_line2d_constant_line_texture_tile"></div>

[LineTextureMode](#enum_line2d_linetexturemode) **LINE_TEXTURE_TILE** = ``1``

Tiles the texture over the polyline. [`CanvasItem.texture_repeat`](#class_canvasitem_property_texture_repeat) of the **Line2D** node must be [`CanvasItem.TEXTURE_REPEAT_ENABLED`](#class_canvasitem_constant_texture_repeat_enabled) or [`CanvasItem.TEXTURE_REPEAT_MIRROR`](#class_canvasitem_constant_texture_repeat_mirror) for it to work properly.

<div id="_class_line2d_constant_line_texture_stretch"></div>

[LineTextureMode](#enum_line2d_linetexturemode) **LINE_TEXTURE_STRETCH** = ``2``

Stretches the texture across the polyline. [`CanvasItem.texture_repeat`](#class_canvasitem_property_texture_repeat) of the **Line2D** node must be [`CanvasItem.TEXTURE_REPEAT_DISABLED`](#class_canvasitem_constant_texture_repeat_disabled) for best results.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_line2d_property_antialiased"></div>

[`bool`](class_bool.md) **antialiased** = ``false`` <div id="class_line2d_property_antialiased"></div>

- `void` **set_antialiased** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_antialiased** ( )

If `true`, the polyline's border will be anti-aliased.

 **Note:** **Line2D** is not accelerated by batching when being anti-aliased.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_property_begin_cap_mode"></div>

[LineCapMode](#enum_line2d_linecapmode) **begin_cap_mode** = ``0`` <div id="class_line2d_property_begin_cap_mode"></div>

- `void` **set_begin_cap_mode** ( value: [LineCapMode](#enum_line2d_linecapmode) )
- [LineCapMode](#enum_line2d_linecapmode) **get_begin_cap_mode** ( )

The style of the beginning of the polyline, if [`closed`](#class_line2d_property_closed) is `false`. Use [LineCapMode](#enum_line2d_linecapmode) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_property_closed"></div>

[`bool`](class_bool.md) **closed** = ``false`` <div id="class_line2d_property_closed"></div>

- `void` **set_closed** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_closed** ( )

If `true` and the polyline has more than 2 points, the last point and the first one will be connected by a segment.

 **Note:** The shape of the closing segment is not guaranteed to be seamless if a [`width_curve`](#class_line2d_property_width_curve) is provided.

 **Note:** The joint between the closing segment and the first segment is drawn first and it samples the [`gradient`](#class_line2d_property_gradient) and the [`width_curve`](#class_line2d_property_width_curve) at the beginning. This is an implementation detail that might change in a future version.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_property_default_color"></div>

[`Color`](class_color.md) **default_color** = ``Color(1, 1, 1, 1)`` <div id="class_line2d_property_default_color"></div>

- `void` **set_default_color** ( value: [`Color`](class_color.md) )
- [`Color`](class_color.md) **get_default_color** ( )

The color of the polyline. Will not be used if a gradient is set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_property_end_cap_mode"></div>

[LineCapMode](#enum_line2d_linecapmode) **end_cap_mode** = ``0`` <div id="class_line2d_property_end_cap_mode"></div>

- `void` **set_end_cap_mode** ( value: [LineCapMode](#enum_line2d_linecapmode) )
- [LineCapMode](#enum_line2d_linecapmode) **get_end_cap_mode** ( )

The style of the end of the polyline, if [`closed`](#class_line2d_property_closed) is `false`. Use [LineCapMode](#enum_line2d_linecapmode) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_property_gradient"></div>

[`Gradient`](class_gradient.md) **gradient** <div id="class_line2d_property_gradient"></div>

- `void` **set_gradient** ( value: [`Gradient`](class_gradient.md) )
- [`Gradient`](class_gradient.md) **get_gradient** ( )

The gradient is drawn through the whole line from start to finish. The [`default_color`](#class_line2d_property_default_color) will not be used if this property is set.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_property_joint_mode"></div>

[LineJointMode](#enum_line2d_linejointmode) **joint_mode** = ``0`` <div id="class_line2d_property_joint_mode"></div>

- `void` **set_joint_mode** ( value: [LineJointMode](#enum_line2d_linejointmode) )
- [LineJointMode](#enum_line2d_linejointmode) **get_joint_mode** ( )

The style of the connections between segments of the polyline. Use [LineJointMode](#enum_line2d_linejointmode) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_property_points"></div>

[`PackedVector2Array`](class_packedvector2array.md) **points** = ``PackedVector2Array()`` <div id="class_line2d_property_points"></div>

- `void` **set_points** ( value: [`PackedVector2Array`](class_packedvector2array.md) )
- [`PackedVector2Array`](class_packedvector2array.md) **get_points** ( )

The points of the polyline, interpreted in local 2D coordinates. Segments are drawn between the adjacent points in this array.

**Note:** The returned array is *copied* and any changes to it will not update the original property value. See [`PackedVector2Array`](class_packedvector2array.md) for more details.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_property_round_precision"></div>

[`int`](class_int.md) **round_precision** = ``8`` <div id="class_line2d_property_round_precision"></div>

- `void` **set_round_precision** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_round_precision** ( )

The smoothness used for rounded joints and caps. Higher values result in smoother corners, but are more demanding to render and update.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_property_sharp_limit"></div>

[`float`](class_float.md) **sharp_limit** = ``2.0`` <div id="class_line2d_property_sharp_limit"></div>

- `void` **set_sharp_limit** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_sharp_limit** ( )

Determines the miter limit of the polyline. Normally, when [`joint_mode`](#class_line2d_property_joint_mode) is set to [`LINE_JOINT_SHARP`](#class_line2d_constant_line_joint_sharp), sharp angles fall back to using the logic of [`LINE_JOINT_BEVEL`](#class_line2d_constant_line_joint_bevel) joints to prevent very long miters. Higher values of this property mean that the fallback to a bevel joint will happen at sharper angles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_property_texture"></div>

[`Texture2D`](class_texture2d.md) **texture** <div id="class_line2d_property_texture"></div>

- `void` **set_texture** ( value: [`Texture2D`](class_texture2d.md) )
- [`Texture2D`](class_texture2d.md) **get_texture** ( )

The texture used for the polyline. Uses [`texture_mode`](#class_line2d_property_texture_mode) for drawing style.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_property_texture_mode"></div>

[LineTextureMode](#enum_line2d_linetexturemode) **texture_mode** = ``0`` <div id="class_line2d_property_texture_mode"></div>

- `void` **set_texture_mode** ( value: [LineTextureMode](#enum_line2d_linetexturemode) )
- [LineTextureMode](#enum_line2d_linetexturemode) **get_texture_mode** ( )

The style to render the [`texture`](#class_line2d_property_texture) of the polyline. Use [LineTextureMode](#enum_line2d_linetexturemode) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_property_width"></div>

[`float`](class_float.md) **width** = ``10.0`` <div id="class_line2d_property_width"></div>

- `void` **set_width** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_width** ( )

The polyline's width.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_property_width_curve"></div>

[`Curve`](class_curve.md) **width_curve** <div id="class_line2d_property_width_curve"></div>

- `void` **set_curve** ( value: [`Curve`](class_curve.md) )
- [`Curve`](class_curve.md) **get_curve** ( )

The polyline's width curve. The width of the polyline over its length will be equivalent to the value of the width curve over its domain.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_line2d_method_add_point"></div>

`void` **add_point** ( position: [`Vector2`](class_vector2.md), index: [`int`](class_int.md) = -1 )<div id="class_line2d_method_add_point"></div>

Adds a point with the specified `position` relative to the polyline's own position. If no `index` is provided, the new point will be added to the end of the points array.

If `index` is given, the new point is inserted before the existing point identified by index `index`. The indices of the points after the new point get increased by 1. The provided `index` must not exceed the number of existing points in the polyline. See [`get_point_count`](#class_line2d_method_get_point_count).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_method_clear_points"></div>

`void` **clear_points** ( )<div id="class_line2d_method_clear_points"></div>

Removes all points from the polyline, making it empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_method_get_point_count"></div>

[`int`](class_int.md) **get_point_count** ( ) const[^const]<div id="class_line2d_method_get_point_count"></div>

Returns the number of points in the polyline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_method_get_point_position"></div>

[`Vector2`](class_vector2.md) **get_point_position** ( index: [`int`](class_int.md) ) const[^const]<div id="class_line2d_method_get_point_position"></div>

Returns the position of the point at index `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_method_remove_point"></div>

`void` **remove_point** ( index: [`int`](class_int.md) )<div id="class_line2d_method_remove_point"></div>

Removes the point at index `index` from the polyline.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_line2d_method_set_point_position"></div>

`void` **set_point_position** ( index: [`int`](class_int.md), position: [`Vector2`](class_vector2.md) )<div id="class_line2d_method_set_point_position"></div>

Overwrites the position of the point at the given `index` with the supplied `position`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
