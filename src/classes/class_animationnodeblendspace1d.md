<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/AnimationNodeBlendSpace1D.xml。 -->

<div id="_class_animationnodeblendspace1d"></div>

# AnimationNodeBlendSpace1D

**继承：** [`AnimationRootNode`](class_animationrootnode.md) **<** [`AnimationNode`](class_animationnode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A set of [`AnimationRootNode`](class_animationrootnode.md) s placed on a virtual axis, crossfading between the two adjacent ones. Used by [`AnimationTree`](class_animationtree.md).

## 描述

A resource used by [`AnimationNodeBlendTree`](class_animationnodeblendtree.md).

 **AnimationNodeBlendSpace1D** represents a virtual axis on which any type of [`AnimationRootNode`](class_animationrootnode.md) s can be added using [`add_blend_point`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_method_add_blend_point). Outputs the linear blend of the two [`AnimationRootNode`](class_animationrootnode.md) s adjacent to the current value.

You can set the extents of the axis with [`min_space`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_property_min_space) and [`max_space`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_property_max_space).

## 属性

|||
|:-:|:--|
| [BlendMode](#enum_animationnodeblendspace1d_blendmode) | [`blend_mode`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_property_blend_mode)   | ``0``       |
| [`float`](class_float.md)                              | [`max_space`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_property_max_space)     | ``1.0``     |
| [`float`](class_float.md)                              | [`min_space`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_property_min_space)     | ``-1.0``    |
| [`float`](class_float.md)                              | [`snap`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_property_snap)               | ``0.1``     |
| [`bool`](class_bool.md)                                | [`sync`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_property_sync)               | ``false``   |
| [`String`](class_string.md)                            | [`value_label`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_property_value_label) | ``"value"`` |

## 方法

|||
|:-:|:--|
| `void`                                            | [`add_blend_point`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_method_add_blend_point) ( node: [`AnimationRootNode`](class_animationrootnode.md), pos: [`float`](class_float.md), at_index: [`int`](class_int.md) = -1 ) |
| [`int`](class_int.md)                             | [`get_blend_point_count`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_method_get_blend_point_count) ( ) const[^const]                                                                                                     |
| [`AnimationRootNode`](class_animationrootnode.md) | [`get_blend_point_node`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_method_get_blend_point_node) ( point: [`int`](class_int.md) ) const[^const]                                                                          |
| [`float`](class_float.md)                         | [`get_blend_point_position`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_method_get_blend_point_position) ( point: [`int`](class_int.md) ) const[^const]                                                                  |
| `void`                                            | [`remove_blend_point`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_method_remove_blend_point) ( point: [`int`](class_int.md) )                                                                                            |
| `void`                                            | [`set_blend_point_node`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_method_set_blend_point_node) ( point: [`int`](class_int.md), node: [`AnimationRootNode`](class_animationrootnode.md) )                               |
| `void`                                            | [`set_blend_point_position`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_method_set_blend_point_position) ( point: [`int`](class_int.md), pos: [`float`](class_float.md) )                                                |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_animationnodeblendspace1d_blendmode"></div>

enum **BlendMode**: <div id="enum_animationnodeblendspace1d_blendmode"></div>

<div id="_class_animationnodeblendspace1d_constant_blend_mode_interpolated"></div>

[BlendMode](#enum_animationnodeblendspace1d_blendmode) **BLEND_MODE_INTERPOLATED** = ``0``

The interpolation between animations is linear.

<div id="_class_animationnodeblendspace1d_constant_blend_mode_discrete"></div>

[BlendMode](#enum_animationnodeblendspace1d_blendmode) **BLEND_MODE_DISCRETE** = ``1``

The blend space plays the animation of the animation node which blending position is closest to. Useful for frame-by-frame 2D animations.

<div id="_class_animationnodeblendspace1d_constant_blend_mode_discrete_carry"></div>

[BlendMode](#enum_animationnodeblendspace1d_blendmode) **BLEND_MODE_DISCRETE_CARRY** = ``2``

Similar to [`BLEND_MODE_DISCRETE`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_constant_blend_mode_discrete), but starts the new animation at the last animation's playback position.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_animationnodeblendspace1d_property_blend_mode"></div>

[BlendMode](#enum_animationnodeblendspace1d_blendmode) **blend_mode** = ``0`` <div id="class_animationnodeblendspace1d_property_blend_mode"></div>

- `void` **set_blend_mode** ( value: [BlendMode](#enum_animationnodeblendspace1d_blendmode) )
- [BlendMode](#enum_animationnodeblendspace1d_blendmode) **get_blend_mode** ( )

Controls the interpolation between animations. See [BlendMode](#enum_animationnodeblendspace1d_blendmode) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace1d_property_max_space"></div>

[`float`](class_float.md) **max_space** = ``1.0`` <div id="class_animationnodeblendspace1d_property_max_space"></div>

- `void` **set_max_space** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_max_space** ( )

The blend space's axis's upper limit for the points' position. See [`add_blend_point`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_method_add_blend_point).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace1d_property_min_space"></div>

[`float`](class_float.md) **min_space** = ``-1.0`` <div id="class_animationnodeblendspace1d_property_min_space"></div>

- `void` **set_min_space** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_min_space** ( )

The blend space's axis's lower limit for the points' position. See [`add_blend_point`](class_animationnodeblendspace1d.md#class_animationnodeblendspace1d_method_add_blend_point).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace1d_property_snap"></div>

[`float`](class_float.md) **snap** = ``0.1`` <div id="class_animationnodeblendspace1d_property_snap"></div>

- `void` **set_snap** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_snap** ( )

Position increment to snap to when moving a point on the axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace1d_property_sync"></div>

[`bool`](class_bool.md) **sync** = ``false`` <div id="class_animationnodeblendspace1d_property_sync"></div>

- `void` **set_use_sync** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_sync** ( )

If `false`, the blended animations' frame are stopped when the blend value is `0`.

If `true`, forcing the blended animations to advance frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace1d_property_value_label"></div>

[`String`](class_string.md) **value_label** = ``"value"`` <div id="class_animationnodeblendspace1d_property_value_label"></div>

- `void` **set_value_label** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_value_label** ( )

Label of the virtual axis of the blend space.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_animationnodeblendspace1d_method_add_blend_point"></div>

`void` **add_blend_point** ( node: [`AnimationRootNode`](class_animationrootnode.md), pos: [`float`](class_float.md), at_index: [`int`](class_int.md) = -1 )<div id="class_animationnodeblendspace1d_method_add_blend_point"></div>

Adds a new point that represents a `node` on the virtual axis at a given position set by `pos`. You can insert it at a specific index using the `at_index` argument. If you use the default value for `at_index`, the point is inserted at the end of the blend points array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace1d_method_get_blend_point_count"></div>

[`int`](class_int.md) **get_blend_point_count** ( ) const[^const]<div id="class_animationnodeblendspace1d_method_get_blend_point_count"></div>

Returns the number of points on the blend axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace1d_method_get_blend_point_node"></div>

[`AnimationRootNode`](class_animationrootnode.md) **get_blend_point_node** ( point: [`int`](class_int.md) ) const[^const]<div id="class_animationnodeblendspace1d_method_get_blend_point_node"></div>

Returns the [`AnimationNode`](class_animationnode.md) referenced by the point at index `point`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace1d_method_get_blend_point_position"></div>

[`float`](class_float.md) **get_blend_point_position** ( point: [`int`](class_int.md) ) const[^const]<div id="class_animationnodeblendspace1d_method_get_blend_point_position"></div>

Returns the position of the point at index `point`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace1d_method_remove_blend_point"></div>

`void` **remove_blend_point** ( point: [`int`](class_int.md) )<div id="class_animationnodeblendspace1d_method_remove_blend_point"></div>

Removes the point at index `point` from the blend axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace1d_method_set_blend_point_node"></div>

`void` **set_blend_point_node** ( point: [`int`](class_int.md), node: [`AnimationRootNode`](class_animationrootnode.md) )<div id="class_animationnodeblendspace1d_method_set_blend_point_node"></div>

Changes the [`AnimationNode`](class_animationnode.md) referenced by the point at index `point`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace1d_method_set_blend_point_position"></div>

`void` **set_blend_point_position** ( point: [`int`](class_int.md), pos: [`float`](class_float.md) )<div id="class_animationnodeblendspace1d_method_set_blend_point_position"></div>

Updates the position of the point at index `point` on the blend axis.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
