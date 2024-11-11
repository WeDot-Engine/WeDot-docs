<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Curve.xml。 -->

<div id="_class_curve"></div>

# Curve

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A mathematical curve.

## 描述

This resource describes a mathematical curve by defining a set of points and tangents at each point. By default, it ranges between `0` and `1` on the Y axis and positions points relative to the `0.5` Y position.

See also [`Gradient`](class_gradient.md) which is designed for color interpolation. See also [`Curve2D`](class_curve2d.md) and [`Curve3D`](class_curve3d.md).

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)     | [`bake_resolution`](class_curve.md#class_curve_property_bake_resolution) | ``100`` |
| [`float`](class_float.md) | [`max_value`](class_curve.md#class_curve_property_max_value)             | ``1.0`` |
| [`float`](class_float.md) | [`min_value`](class_curve.md#class_curve_property_min_value)             | ``0.0`` |
| [`int`](class_int.md)     | [`point_count`](class_curve.md#class_curve_property_point_count)         | ``0``   |

## 方法

|||
|:-:|:--|
| [`int`](class_int.md)                  | [`add_point`](class_curve.md#class_curve_method_add_point) ( position: [`Vector2`](class_vector2.md), left_tangent: [`float`](class_float.md) = 0, right_tangent: [`float`](class_float.md) = 0, left_mode: [TangentMode](#enum_curve_tangentmode) = 0, right_mode: [TangentMode](#enum_curve_tangentmode) = 0 ) |
| `void`                                 | [`bake`](class_curve.md#class_curve_method_bake) ( )                                                                                                                                                                                                                                                             |
| `void`                                 | [`clean_dupes`](class_curve.md#class_curve_method_clean_dupes) ( )                                                                                                                                                                                                                                               |
| `void`                                 | [`clear_points`](class_curve.md#class_curve_method_clear_points) ( )                                                                                                                                                                                                                                             |
| [TangentMode](#enum_curve_tangentmode) | [`get_point_left_mode`](class_curve.md#class_curve_method_get_point_left_mode) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                    |
| [`float`](class_float.md)              | [`get_point_left_tangent`](class_curve.md#class_curve_method_get_point_left_tangent) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                              |
| [`Vector2`](class_vector2.md)          | [`get_point_position`](class_curve.md#class_curve_method_get_point_position) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                      |
| [TangentMode](#enum_curve_tangentmode) | [`get_point_right_mode`](class_curve.md#class_curve_method_get_point_right_mode) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                                  |
| [`float`](class_float.md)              | [`get_point_right_tangent`](class_curve.md#class_curve_method_get_point_right_tangent) ( index: [`int`](class_int.md) ) const[^const]                                                                                                                                                                            |
| `void`                                 | [`remove_point`](class_curve.md#class_curve_method_remove_point) ( index: [`int`](class_int.md) )                                                                                                                                                                                                                |
| [`float`](class_float.md)              | [`sample`](class_curve.md#class_curve_method_sample) ( offset: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                         |
| [`float`](class_float.md)              | [`sample_baked`](class_curve.md#class_curve_method_sample_baked) ( offset: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                             |
| `void`                                 | [`set_point_left_mode`](class_curve.md#class_curve_method_set_point_left_mode) ( index: [`int`](class_int.md), mode: [TangentMode](#enum_curve_tangentmode) )                                                                                                                                                    |
| `void`                                 | [`set_point_left_tangent`](class_curve.md#class_curve_method_set_point_left_tangent) ( index: [`int`](class_int.md), tangent: [`float`](class_float.md) )                                                                                                                                                        |
| [`int`](class_int.md)                  | [`set_point_offset`](class_curve.md#class_curve_method_set_point_offset) ( index: [`int`](class_int.md), offset: [`float`](class_float.md) )                                                                                                                                                                     |
| `void`                                 | [`set_point_right_mode`](class_curve.md#class_curve_method_set_point_right_mode) ( index: [`int`](class_int.md), mode: [TangentMode](#enum_curve_tangentmode) )                                                                                                                                                  |
| `void`                                 | [`set_point_right_tangent`](class_curve.md#class_curve_method_set_point_right_tangent) ( index: [`int`](class_int.md), tangent: [`float`](class_float.md) )                                                                                                                                                      |
| `void`                                 | [`set_point_value`](class_curve.md#class_curve_method_set_point_value) ( index: [`int`](class_int.md), y: [`float`](class_float.md) )                                                                                                                                                                            |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_curve_signal_range_changed"></div>

**range_changed** ( ) <div id="class_curve_signal_range_changed"></div>

Emitted when [`max_value`](class_curve.md#class_curve_property_max_value) or [`min_value`](class_curve.md#class_curve_property_min_value) is changed.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_curve_tangentmode"></div>

enum **TangentMode**: <div id="enum_curve_tangentmode"></div>

<div id="_class_curve_constant_tangent_free"></div>

[TangentMode](#enum_curve_tangentmode) **TANGENT_FREE** = ``0``

The tangent on this side of the point is user-defined.

<div id="_class_curve_constant_tangent_linear"></div>

[TangentMode](#enum_curve_tangentmode) **TANGENT_LINEAR** = ``1``

The curve calculates the tangent on this side of the point as the slope halfway towards the adjacent point.

<div id="_class_curve_constant_tangent_mode_count"></div>

[TangentMode](#enum_curve_tangentmode) **TANGENT_MODE_COUNT** = ``2``

The total number of available tangent modes.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_curve_property_bake_resolution"></div>

[`int`](class_int.md) **bake_resolution** = ``100`` <div id="class_curve_property_bake_resolution"></div>

- `void` **set_bake_resolution** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_bake_resolution** ( )

The number of points to include in the baked (i.e. cached) curve data.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_property_max_value"></div>

[`float`](class_float.md) **max_value** = ``1.0`` <div id="class_curve_property_max_value"></div>

- `void` **set_max_value** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_max_value** ( )

The maximum value the curve can reach.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_property_min_value"></div>

[`float`](class_float.md) **min_value** = ``0.0`` <div id="class_curve_property_min_value"></div>

- `void` **set_min_value** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_min_value** ( )

The minimum value the curve can reach.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_property_point_count"></div>

[`int`](class_int.md) **point_count** = ``0`` <div id="class_curve_property_point_count"></div>

- `void` **set_point_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_point_count** ( )

The number of points describing the curve.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_curve_method_add_point"></div>

[`int`](class_int.md) **add_point** ( position: [`Vector2`](class_vector2.md), left_tangent: [`float`](class_float.md) = 0, right_tangent: [`float`](class_float.md) = 0, left_mode: [TangentMode](#enum_curve_tangentmode) = 0, right_mode: [TangentMode](#enum_curve_tangentmode) = 0 )<div id="class_curve_method_add_point"></div>

Adds a point to the curve. For each side, if the `*_mode` is [`TANGENT_LINEAR`](class_curve.md#class_curve_constant_tangent_linear), the `*_tangent` angle (in degrees) uses the slope of the curve halfway to the adjacent point. Allows custom assignments to the `*_tangent` angle if `*_mode` is set to [`TANGENT_FREE`](class_curve.md#class_curve_constant_tangent_free).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_method_bake"></div>

`void` **bake** ( )<div id="class_curve_method_bake"></div>

Recomputes the baked cache of points for the curve.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_method_clean_dupes"></div>

`void` **clean_dupes** ( )<div id="class_curve_method_clean_dupes"></div>

Removes duplicate points, i.e. points that are less than 0.00001 units (engine epsilon value) away from their neighbor on the curve.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_method_clear_points"></div>

`void` **clear_points** ( )<div id="class_curve_method_clear_points"></div>

Removes all points from the curve.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_method_get_point_left_mode"></div>

[TangentMode](#enum_curve_tangentmode) **get_point_left_mode** ( index: [`int`](class_int.md) ) const[^const]<div id="class_curve_method_get_point_left_mode"></div>

Returns the left [TangentMode](#enum_curve_tangentmode) for the point at `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_method_get_point_left_tangent"></div>

[`float`](class_float.md) **get_point_left_tangent** ( index: [`int`](class_int.md) ) const[^const]<div id="class_curve_method_get_point_left_tangent"></div>

Returns the left tangent angle (in degrees) for the point at `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_method_get_point_position"></div>

[`Vector2`](class_vector2.md) **get_point_position** ( index: [`int`](class_int.md) ) const[^const]<div id="class_curve_method_get_point_position"></div>

Returns the curve coordinates for the point at `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_method_get_point_right_mode"></div>

[TangentMode](#enum_curve_tangentmode) **get_point_right_mode** ( index: [`int`](class_int.md) ) const[^const]<div id="class_curve_method_get_point_right_mode"></div>

Returns the right [TangentMode](#enum_curve_tangentmode) for the point at `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_method_get_point_right_tangent"></div>

[`float`](class_float.md) **get_point_right_tangent** ( index: [`int`](class_int.md) ) const[^const]<div id="class_curve_method_get_point_right_tangent"></div>

Returns the right tangent angle (in degrees) for the point at `index`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_method_remove_point"></div>

`void` **remove_point** ( index: [`int`](class_int.md) )<div id="class_curve_method_remove_point"></div>

Removes the point at `index` from the curve.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_method_sample"></div>

[`float`](class_float.md) **sample** ( offset: [`float`](class_float.md) ) const[^const]<div id="class_curve_method_sample"></div>

Returns the Y value for the point that would exist at the X position `offset` along the curve.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_method_sample_baked"></div>

[`float`](class_float.md) **sample_baked** ( offset: [`float`](class_float.md) ) const[^const]<div id="class_curve_method_sample_baked"></div>

Returns the Y value for the point that would exist at the X position `offset` along the curve using the baked cache. Bakes the curve's points if not already baked.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_method_set_point_left_mode"></div>

`void` **set_point_left_mode** ( index: [`int`](class_int.md), mode: [TangentMode](#enum_curve_tangentmode) )<div id="class_curve_method_set_point_left_mode"></div>

Sets the left [TangentMode](#enum_curve_tangentmode) for the point at `index` to `mode`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_method_set_point_left_tangent"></div>

`void` **set_point_left_tangent** ( index: [`int`](class_int.md), tangent: [`float`](class_float.md) )<div id="class_curve_method_set_point_left_tangent"></div>

Sets the left tangent angle for the point at `index` to `tangent`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_method_set_point_offset"></div>

[`int`](class_int.md) **set_point_offset** ( index: [`int`](class_int.md), offset: [`float`](class_float.md) )<div id="class_curve_method_set_point_offset"></div>

Sets the offset from `0.5`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_method_set_point_right_mode"></div>

`void` **set_point_right_mode** ( index: [`int`](class_int.md), mode: [TangentMode](#enum_curve_tangentmode) )<div id="class_curve_method_set_point_right_mode"></div>

Sets the right [TangentMode](#enum_curve_tangentmode) for the point at `index` to `mode`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_method_set_point_right_tangent"></div>

`void` **set_point_right_tangent** ( index: [`int`](class_int.md), tangent: [`float`](class_float.md) )<div id="class_curve_method_set_point_right_tangent"></div>

Sets the right tangent angle for the point at `index` to `tangent`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve_method_set_point_value"></div>

`void` **set_point_value** ( index: [`int`](class_int.md), y: [`float`](class_float.md) )<div id="class_curve_method_set_point_value"></div>

Assigns the vertical position `y` to the point at `index`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
