<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AnimationNodeBlendSpace2D.xml。 -->

<div id="_class_animationnodeblendspace2d"></div>

# AnimationNodeBlendSpace2D

**继承：** [`AnimationRootNode`](class_animationrootnode.md) **<** [`AnimationNode`](class_animationnode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A set of [`AnimationRootNode`](class_animationrootnode.md) s placed on 2D coordinates, crossfading between the three adjacent ones. Used by [`AnimationTree`](class_animationtree.md).

## 描述

A resource used by [`AnimationNodeBlendTree`](class_animationnodeblendtree.md).

 **AnimationNodeBlendSpace2D** represents a virtual 2D space on which [`AnimationRootNode`](class_animationrootnode.md) s are placed. Outputs the linear blend of the three adjacent animations using a [`Vector2`](class_vector2.md) weight. Adjacent in this context means the three [`AnimationRootNode`](class_animationrootnode.md) s making up the triangle that contains the current value.

You can add vertices to the blend space with [`add_blend_point`](#class_animationnodeblendspace2d_method_add_blend_point) and automatically triangulate it by setting [`auto_triangles`](#class_animationnodeblendspace2d_property_auto_triangles) to `true`. Otherwise, use [`add_triangle`](#class_animationnodeblendspace2d_method_add_triangle) and [`remove_triangle`](#class_animationnodeblendspace2d_method_remove_triangle) to triangulate the blend space by hand.

## 属性

| [`bool`](class_bool.md)                                | [`auto_triangles`](#class_animationnodeblendspace2d_property_auto_triangles) | ``true``              |
| [BlendMode](#enum_animationnodeblendspace2d_blendmode) | [`blend_mode`](#class_animationnodeblendspace2d_property_blend_mode)         | ``0``                 |
| [`Vector2`](class_vector2.md)                          | [`max_space`](#class_animationnodeblendspace2d_property_max_space)           | ``Vector2(1, 1)``     |
| [`Vector2`](class_vector2.md)                          | [`min_space`](#class_animationnodeblendspace2d_property_min_space)           | ``Vector2(-1, -1)``   |
| [`Vector2`](class_vector2.md)                          | [`snap`](#class_animationnodeblendspace2d_property_snap)                     | ``Vector2(0.1, 0.1)`` |
| [`bool`](class_bool.md)                                | [`sync`](#class_animationnodeblendspace2d_property_sync)                     | ``false``             |
| [`String`](class_string.md)                            | [`x_label`](#class_animationnodeblendspace2d_property_x_label)               | ``"x"``               |
| [`String`](class_string.md)                            | [`y_label`](#class_animationnodeblendspace2d_property_y_label)               | ``"y"``               |

## 方法

| `void`                                            | [`add_blend_point`](#class_animationnodeblendspace2d_method_add_blend_point) ( node: [`AnimationRootNode`](class_animationrootnode.md), pos: [`Vector2`](class_vector2.md), at_index: [`int`](class_int.md) = -1 ) |
| `void`                                            | [`add_triangle`](#class_animationnodeblendspace2d_method_add_triangle) ( x: [`int`](class_int.md), y: [`int`](class_int.md), z: [`int`](class_int.md), at_index: [`int`](class_int.md) = -1 )                      |
| [`int`](class_int.md)                             | [`get_blend_point_count`](#class_animationnodeblendspace2d_method_get_blend_point_count) ( ) const[^const]                                                                                                         |
| [`AnimationRootNode`](class_animationrootnode.md) | [`get_blend_point_node`](#class_animationnodeblendspace2d_method_get_blend_point_node) ( point: [`int`](class_int.md) ) const[^const]                                                                              |
| [`Vector2`](class_vector2.md)                     | [`get_blend_point_position`](#class_animationnodeblendspace2d_method_get_blend_point_position) ( point: [`int`](class_int.md) ) const[^const]                                                                      |
| [`int`](class_int.md)                             | [`get_triangle_count`](#class_animationnodeblendspace2d_method_get_triangle_count) ( ) const[^const]                                                                                                               |
| [`int`](class_int.md)                             | [`get_triangle_point`](#class_animationnodeblendspace2d_method_get_triangle_point) ( triangle: [`int`](class_int.md), point: [`int`](class_int.md) )                                                               |
| `void`                                            | [`remove_blend_point`](#class_animationnodeblendspace2d_method_remove_blend_point) ( point: [`int`](class_int.md) )                                                                                                |
| `void`                                            | [`remove_triangle`](#class_animationnodeblendspace2d_method_remove_triangle) ( triangle: [`int`](class_int.md) )                                                                                                   |
| `void`                                            | [`set_blend_point_node`](#class_animationnodeblendspace2d_method_set_blend_point_node) ( point: [`int`](class_int.md), node: [`AnimationRootNode`](class_animationrootnode.md) )                                   |
| `void`                                            | [`set_blend_point_position`](#class_animationnodeblendspace2d_method_set_blend_point_position) ( point: [`int`](class_int.md), pos: [`Vector2`](class_vector2.md) )                                                |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_animationnodeblendspace2d_signal_triangles_updated"></div>

**triangles_updated** ( ) <div id="class_animationnodeblendspace2d_signal_triangles_updated"></div>

Emitted every time the blend space's triangles are created, removed, or when one of their vertices changes position.

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_animationnodeblendspace2d_blendmode"></div>

enum **BlendMode**: <div id="enum_animationnodeblendspace2d_blendmode"></div>

<div id="_class_animationnodeblendspace2d_constant_blend_mode_interpolated"></div>

[BlendMode](#enum_animationnodeblendspace2d_blendmode) **BLEND_MODE_INTERPOLATED** = ``0``

The interpolation between animations is linear.

<div id="_class_animationnodeblendspace2d_constant_blend_mode_discrete"></div>

[BlendMode](#enum_animationnodeblendspace2d_blendmode) **BLEND_MODE_DISCRETE** = ``1``

The blend space plays the animation of the animation node which blending position is closest to. Useful for frame-by-frame 2D animations.

<div id="_class_animationnodeblendspace2d_constant_blend_mode_discrete_carry"></div>

[BlendMode](#enum_animationnodeblendspace2d_blendmode) **BLEND_MODE_DISCRETE_CARRY** = ``2``

Similar to [`BLEND_MODE_DISCRETE`](#class_animationnodeblendspace2d_constant_blend_mode_discrete), but starts the new animation at the last animation's playback position.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_animationnodeblendspace2d_property_auto_triangles"></div>

[`bool`](class_bool.md) **auto_triangles** = ``true`` <div id="class_animationnodeblendspace2d_property_auto_triangles"></div>

- `void` **set_auto_triangles** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **get_auto_triangles** ( )

If `true`, the blend space is triangulated automatically. The mesh updates every time you add or remove points with [`add_blend_point`](#class_animationnodeblendspace2d_method_add_blend_point) and [`remove_blend_point`](#class_animationnodeblendspace2d_method_remove_blend_point).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace2d_property_blend_mode"></div>

[BlendMode](#enum_animationnodeblendspace2d_blendmode) **blend_mode** = ``0`` <div id="class_animationnodeblendspace2d_property_blend_mode"></div>

- `void` **set_blend_mode** ( value: [BlendMode](#enum_animationnodeblendspace2d_blendmode) )
- [BlendMode](#enum_animationnodeblendspace2d_blendmode) **get_blend_mode** ( )

Controls the interpolation between animations. See [BlendMode](#enum_animationnodeblendspace2d_blendmode) constants.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace2d_property_max_space"></div>

[`Vector2`](class_vector2.md) **max_space** = ``Vector2(1, 1)`` <div id="class_animationnodeblendspace2d_property_max_space"></div>

- `void` **set_max_space** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_max_space** ( )

The blend space's X and Y axes' upper limit for the points' position. See [`add_blend_point`](#class_animationnodeblendspace2d_method_add_blend_point).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace2d_property_min_space"></div>

[`Vector2`](class_vector2.md) **min_space** = ``Vector2(-1, -1)`` <div id="class_animationnodeblendspace2d_property_min_space"></div>

- `void` **set_min_space** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_min_space** ( )

The blend space's X and Y axes' lower limit for the points' position. See [`add_blend_point`](#class_animationnodeblendspace2d_method_add_blend_point).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace2d_property_snap"></div>

[`Vector2`](class_vector2.md) **snap** = ``Vector2(0.1, 0.1)`` <div id="class_animationnodeblendspace2d_property_snap"></div>

- `void` **set_snap** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_snap** ( )

Position increment to snap to when moving a point.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace2d_property_sync"></div>

[`bool`](class_bool.md) **sync** = ``false`` <div id="class_animationnodeblendspace2d_property_sync"></div>

- `void` **set_use_sync** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_using_sync** ( )

If `false`, the blended animations' frame are stopped when the blend value is `0`.

If `true`, forcing the blended animations to advance frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace2d_property_x_label"></div>

[`String`](class_string.md) **x_label** = ``"x"`` <div id="class_animationnodeblendspace2d_property_x_label"></div>

- `void` **set_x_label** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_x_label** ( )

Name of the blend space's X axis.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace2d_property_y_label"></div>

[`String`](class_string.md) **y_label** = ``"y"`` <div id="class_animationnodeblendspace2d_property_y_label"></div>

- `void` **set_y_label** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_y_label** ( )

Name of the blend space's Y axis.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_animationnodeblendspace2d_method_add_blend_point"></div>

`void` **add_blend_point** ( node: [`AnimationRootNode`](class_animationrootnode.md), pos: [`Vector2`](class_vector2.md), at_index: [`int`](class_int.md) = -1 )<div id="class_animationnodeblendspace2d_method_add_blend_point"></div>

Adds a new point that represents a `node` at the position set by `pos`. You can insert it at a specific index using the `at_index` argument. If you use the default value for `at_index`, the point is inserted at the end of the blend points array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace2d_method_add_triangle"></div>

`void` **add_triangle** ( x: [`int`](class_int.md), y: [`int`](class_int.md), z: [`int`](class_int.md), at_index: [`int`](class_int.md) = -1 )<div id="class_animationnodeblendspace2d_method_add_triangle"></div>

Creates a new triangle using three points `x`, `y`, and `z`. Triangles can overlap. You can insert the triangle at a specific index using the `at_index` argument. If you use the default value for `at_index`, the point is inserted at the end of the blend points array.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace2d_method_get_blend_point_count"></div>

[`int`](class_int.md) **get_blend_point_count** ( ) const[^const]<div id="class_animationnodeblendspace2d_method_get_blend_point_count"></div>

Returns the number of points in the blend space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace2d_method_get_blend_point_node"></div>

[`AnimationRootNode`](class_animationrootnode.md) **get_blend_point_node** ( point: [`int`](class_int.md) ) const[^const]<div id="class_animationnodeblendspace2d_method_get_blend_point_node"></div>

Returns the [`AnimationRootNode`](class_animationrootnode.md) referenced by the point at index `point`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace2d_method_get_blend_point_position"></div>

[`Vector2`](class_vector2.md) **get_blend_point_position** ( point: [`int`](class_int.md) ) const[^const]<div id="class_animationnodeblendspace2d_method_get_blend_point_position"></div>

Returns the position of the point at index `point`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace2d_method_get_triangle_count"></div>

[`int`](class_int.md) **get_triangle_count** ( ) const[^const]<div id="class_animationnodeblendspace2d_method_get_triangle_count"></div>

Returns the number of triangles in the blend space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace2d_method_get_triangle_point"></div>

[`int`](class_int.md) **get_triangle_point** ( triangle: [`int`](class_int.md), point: [`int`](class_int.md) )<div id="class_animationnodeblendspace2d_method_get_triangle_point"></div>

Returns the position of the point at index `point` in the triangle of index `triangle`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace2d_method_remove_blend_point"></div>

`void` **remove_blend_point** ( point: [`int`](class_int.md) )<div id="class_animationnodeblendspace2d_method_remove_blend_point"></div>

Removes the point at index `point` from the blend space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace2d_method_remove_triangle"></div>

`void` **remove_triangle** ( triangle: [`int`](class_int.md) )<div id="class_animationnodeblendspace2d_method_remove_triangle"></div>

Removes the triangle at index `triangle` from the blend space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace2d_method_set_blend_point_node"></div>

`void` **set_blend_point_node** ( point: [`int`](class_int.md), node: [`AnimationRootNode`](class_animationrootnode.md) )<div id="class_animationnodeblendspace2d_method_set_blend_point_node"></div>

Changes the [`AnimationNode`](class_animationnode.md) referenced by the point at index `point`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_animationnodeblendspace2d_method_set_blend_point_position"></div>

`void` **set_blend_point_position** ( point: [`int`](class_int.md), pos: [`Vector2`](class_vector2.md) )<div id="class_animationnodeblendspace2d_method_set_blend_point_position"></div>

Updates the position of the point at index `point` in the blend space.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
