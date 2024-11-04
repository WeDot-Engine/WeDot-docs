<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Curve3D.xml。 -->

<div id="_class_curve3d"></div>

# Curve3D

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Describes a Bézier curve in 3D space.

## 描述

This class describes a Bézier curve in 3D space. It is mainly used to give a shape to a [`Path3D`](class_path3d.md), but can be manually sampled for other purposes.

It keeps a cache of precalculated points along the curve, to speed up further calculations.

## 属性

| [`float`](class_float.md) | [`bake_interval`](#class_curve3d_property_bake_interval)         | ``0.2``  |
| [`int`](class_int.md)     | [`point_count`](#class_curve3d_property_point_count)             | ``0``    |
| [`bool`](class_bool.md)   | [`up_vector_enabled`](#class_curve3d_property_up_vector_enabled) | ``true`` |

## 方法

| `void`                                              | [`add_point`](#class_curve3d_method_add_point) ( position: [`Vector3`](class_vector3.md), in: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0), out: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0), index: [`int`](class_int.md) = -1 ) |
| `void`                                              | [`clear_points`](#class_curve3d_method_clear_points) ( )                                                                                                                                                                                   |
| [`float`](class_float.md)                           | [`get_baked_length`](#class_curve3d_method_get_baked_length) ( ) const[^const]                                                                                                                                                             |
| [`PackedVector3Array`](class_packedvector3array.md) | [`get_baked_points`](#class_curve3d_method_get_baked_points) ( ) const[^const]                                                                                                                                                             |
| [`PackedFloat32Array`](class_packedfloat32array.md) | [`get_baked_tilts`](#class_curve3d_method_get_baked_tilts) ( ) const[^const]                                                                                                                                                               |
| [`PackedVector3Array`](class_packedvector3array.md) | [`get_baked_up_vectors`](#class_curve3d_method_get_baked_up_vectors) ( ) const[^const]                                                                                                                                                     |
| [`float`](class_float.md)                           | [`get_closest_offset`](#class_curve3d_method_get_closest_offset) ( to_point: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                 |
| [`Vector3`](class_vector3.md)                       | [`get_closest_point`](#class_curve3d_method_get_closest_point) ( to_point: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                   |
| [`Vector3`](class_vector3.md)                       | [`get_point_in`](#class_curve3d_method_get_point_in) ( idx: [`int`](class_int.md) ) const[^const]                                                                                                                                          |
| [`Vector3`](class_vector3.md)                       | [`get_point_out`](#class_curve3d_method_get_point_out) ( idx: [`int`](class_int.md) ) const[^const]                                                                                                                                        |
| [`Vector3`](class_vector3.md)                       | [`get_point_position`](#class_curve3d_method_get_point_position) ( idx: [`int`](class_int.md) ) const[^const]                                                                                                                              |
| [`float`](class_float.md)                           | [`get_point_tilt`](#class_curve3d_method_get_point_tilt) ( idx: [`int`](class_int.md) ) const[^const]                                                                                                                                      |
| `void`                                              | [`remove_point`](#class_curve3d_method_remove_point) ( idx: [`int`](class_int.md) )                                                                                                                                                        |
| [`Vector3`](class_vector3.md)                       | [`sample`](#class_curve3d_method_sample) ( idx: [`int`](class_int.md), t: [`float`](class_float.md) ) const[^const]                                                                                                                        |
| [`Vector3`](class_vector3.md)                       | [`sample_baked`](#class_curve3d_method_sample_baked) ( offset: [`float`](class_float.md) = 0.0, cubic: [`bool`](class_bool.md) = false ) const[^const]                                                                                     |
| [`Vector3`](class_vector3.md)                       | [`sample_baked_up_vector`](#class_curve3d_method_sample_baked_up_vector) ( offset: [`float`](class_float.md), apply_tilt: [`bool`](class_bool.md) = false ) const[^const]                                                                  |
| [`Transform3D`](class_transform3d.md)               | [`sample_baked_with_rotation`](#class_curve3d_method_sample_baked_with_rotation) ( offset: [`float`](class_float.md) = 0.0, cubic: [`bool`](class_bool.md) = false, apply_tilt: [`bool`](class_bool.md) = false ) const[^const]            |
| [`Vector3`](class_vector3.md)                       | [`samplef`](#class_curve3d_method_samplef) ( fofs: [`float`](class_float.md) ) const[^const]                                                                                                                                               |
| `void`                                              | [`set_point_in`](#class_curve3d_method_set_point_in) ( idx: [`int`](class_int.md), position: [`Vector3`](class_vector3.md) )                                                                                                               |
| `void`                                              | [`set_point_out`](#class_curve3d_method_set_point_out) ( idx: [`int`](class_int.md), position: [`Vector3`](class_vector3.md) )                                                                                                             |
| `void`                                              | [`set_point_position`](#class_curve3d_method_set_point_position) ( idx: [`int`](class_int.md), position: [`Vector3`](class_vector3.md) )                                                                                                   |
| `void`                                              | [`set_point_tilt`](#class_curve3d_method_set_point_tilt) ( idx: [`int`](class_int.md), tilt: [`float`](class_float.md) )                                                                                                                   |
| [`PackedVector3Array`](class_packedvector3array.md) | [`tessellate`](#class_curve3d_method_tessellate) ( max_stages: [`int`](class_int.md) = 5, tolerance_degrees: [`float`](class_float.md) = 4 ) const[^const]                                                                                 |
| [`PackedVector3Array`](class_packedvector3array.md) | [`tessellate_even_length`](#class_curve3d_method_tessellate_even_length) ( max_stages: [`int`](class_int.md) = 5, tolerance_length: [`float`](class_float.md) = 0.2 ) const[^const]                                                        |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_curve3d_property_bake_interval"></div>

[`float`](class_float.md) **bake_interval** = ``0.2`` <div id="class_curve3d_property_bake_interval"></div>

- `void` **set_bake_interval** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_bake_interval** ( )

The distance in meters between two adjacent cached points. Changing it forces the cache to be recomputed the next time the [`get_baked_points`](#class_curve3d_method_get_baked_points) or [`get_baked_length`](#class_curve3d_method_get_baked_length) function is called. The smaller the distance, the more points in the cache and the more memory it will consume, so use with care.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_property_point_count"></div>

[`int`](class_int.md) **point_count** = ``0`` <div id="class_curve3d_property_point_count"></div>

- `void` **set_point_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_point_count** ( )

The number of points describing the curve.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_property_up_vector_enabled"></div>

[`bool`](class_bool.md) **up_vector_enabled** = ``true`` <div id="class_curve3d_property_up_vector_enabled"></div>

- `void` **set_up_vector_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_up_vector_enabled** ( )

If `true`, the curve will bake up vectors used for orientation. This is used when [`PathFollow3D.rotation_mode`](#class_pathfollow3d_property_rotation_mode) is set to [`PathFollow3D.ROTATION_ORIENTED`](#class_pathfollow3d_constant_rotation_oriented). Changing it forces the cache to be recomputed.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_curve3d_method_add_point"></div>

`void` **add_point** ( position: [`Vector3`](class_vector3.md), in: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0), out: [`Vector3`](class_vector3.md) = Vector3(0, 0, 0), index: [`int`](class_int.md) = -1 )<div id="class_curve3d_method_add_point"></div>

Adds a point with the specified `position` relative to the curve's own position, with control points `in` and `out`. Appends the new point at the end of the point list.

If `index` is given, the new point is inserted before the existing point identified by index `index`. Every existing point starting from `index` is shifted further down the list of points. The index must be greater than or equal to `0` and must not exceed the number of existing points in the line. See [`point_count`](#class_curve3d_property_point_count).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_clear_points"></div>

`void` **clear_points** ( )<div id="class_curve3d_method_clear_points"></div>

Removes all points from the curve.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_get_baked_length"></div>

[`float`](class_float.md) **get_baked_length** ( ) const[^const]<div id="class_curve3d_method_get_baked_length"></div>

Returns the total length of the curve, based on the cached points. Given enough density (see [`bake_interval`](#class_curve3d_property_bake_interval)), it should be approximate enough.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_get_baked_points"></div>

[`PackedVector3Array`](class_packedvector3array.md) **get_baked_points** ( ) const[^const]<div id="class_curve3d_method_get_baked_points"></div>

Returns the cache of points as a [`PackedVector3Array`](class_packedvector3array.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_get_baked_tilts"></div>

[`PackedFloat32Array`](class_packedfloat32array.md) **get_baked_tilts** ( ) const[^const]<div id="class_curve3d_method_get_baked_tilts"></div>

Returns the cache of tilts as a [`PackedFloat32Array`](class_packedfloat32array.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_get_baked_up_vectors"></div>

[`PackedVector3Array`](class_packedvector3array.md) **get_baked_up_vectors** ( ) const[^const]<div id="class_curve3d_method_get_baked_up_vectors"></div>

Returns the cache of up vectors as a [`PackedVector3Array`](class_packedvector3array.md).

If [`up_vector_enabled`](#class_curve3d_property_up_vector_enabled) is `false`, the cache will be empty.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_get_closest_offset"></div>

[`float`](class_float.md) **get_closest_offset** ( to_point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_curve3d_method_get_closest_offset"></div>

Returns the closest offset to `to_point`. This offset is meant to be used in [`sample_baked`](#class_curve3d_method_sample_baked) or [`sample_baked_up_vector`](#class_curve3d_method_sample_baked_up_vector).

 `to_point` must be in this curve's local space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_get_closest_point"></div>

[`Vector3`](class_vector3.md) **get_closest_point** ( to_point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_curve3d_method_get_closest_point"></div>

Returns the closest point on baked segments (in curve's local space) to `to_point`.

 `to_point` must be in this curve's local space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_get_point_in"></div>

[`Vector3`](class_vector3.md) **get_point_in** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_curve3d_method_get_point_in"></div>

Returns the position of the control point leading to the vertex `idx`. The returned position is relative to the vertex `idx`. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0, 0)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_get_point_out"></div>

[`Vector3`](class_vector3.md) **get_point_out** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_curve3d_method_get_point_out"></div>

Returns the position of the control point leading out of the vertex `idx`. The returned position is relative to the vertex `idx`. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0, 0)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_get_point_position"></div>

[`Vector3`](class_vector3.md) **get_point_position** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_curve3d_method_get_point_position"></div>

Returns the position of the vertex `idx`. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0, 0)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_get_point_tilt"></div>

[`float`](class_float.md) **get_point_tilt** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_curve3d_method_get_point_tilt"></div>

Returns the tilt angle in radians for the point `idx`. If the index is out of bounds, the function sends an error to the console, and returns `0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_remove_point"></div>

`void` **remove_point** ( idx: [`int`](class_int.md) )<div id="class_curve3d_method_remove_point"></div>

Deletes the point `idx` from the curve. Sends an error to the console if `idx` is out of bounds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_sample"></div>

[`Vector3`](class_vector3.md) **sample** ( idx: [`int`](class_int.md), t: [`float`](class_float.md) ) const[^const]<div id="class_curve3d_method_sample"></div>

Returns the position between the vertex `idx` and the vertex `idx + 1`, where `t` controls if the point is the first vertex (`t = 0.0`), the last vertex (`t = 1.0`), or in between. Values of `t` outside the range (`0.0 >= t <=1`) give strange, but predictable results.

If `idx` is out of bounds it is truncated to the first or last vertex, and `t` is ignored. If the curve has no points, the function sends an error to the console, and returns `(0, 0, 0)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_sample_baked"></div>

[`Vector3`](class_vector3.md) **sample_baked** ( offset: [`float`](class_float.md) = 0.0, cubic: [`bool`](class_bool.md) = false ) const[^const]<div id="class_curve3d_method_sample_baked"></div>

Returns a point within the curve at position `offset`, where `offset` is measured as a distance in 3D units along the curve. To do that, it finds the two cached points where the `offset` lies between, then interpolates the values. This interpolation is cubic if `cubic` is set to `true`, or linear if set to `false`.

Cubic interpolation tends to follow the curves better, but linear is faster (and often, precise enough).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_sample_baked_up_vector"></div>

[`Vector3`](class_vector3.md) **sample_baked_up_vector** ( offset: [`float`](class_float.md), apply_tilt: [`bool`](class_bool.md) = false ) const[^const]<div id="class_curve3d_method_sample_baked_up_vector"></div>

Returns an up vector within the curve at position `offset`, where `offset` is measured as a distance in 3D units along the curve. To do that, it finds the two cached up vectors where the `offset` lies between, then interpolates the values. If `apply_tilt` is `true`, an interpolated tilt is applied to the interpolated up vector.

If the curve has no up vectors, the function sends an error to the console, and returns `(0, 1, 0)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_sample_baked_with_rotation"></div>

[`Transform3D`](class_transform3d.md) **sample_baked_with_rotation** ( offset: [`float`](class_float.md) = 0.0, cubic: [`bool`](class_bool.md) = false, apply_tilt: [`bool`](class_bool.md) = false ) const[^const]<div id="class_curve3d_method_sample_baked_with_rotation"></div>

Returns a [`Transform3D`](class_transform3d.md) with `origin` as point position, `basis.x` as sideway vector, `basis.y` as up vector, `basis.z` as forward vector. When the curve length is 0, there is no reasonable way to calculate the rotation, all vectors aligned with global space axes. See also [`sample_baked`](#class_curve3d_method_sample_baked).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_samplef"></div>

[`Vector3`](class_vector3.md) **samplef** ( fofs: [`float`](class_float.md) ) const[^const]<div id="class_curve3d_method_samplef"></div>

Returns the position at the vertex `fofs`. It calls [`sample`](#class_curve3d_method_sample) using the integer part of `fofs` as `idx`, and its fractional part as `t`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_set_point_in"></div>

`void` **set_point_in** ( idx: [`int`](class_int.md), position: [`Vector3`](class_vector3.md) )<div id="class_curve3d_method_set_point_in"></div>

Sets the position of the control point leading to the vertex `idx`. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_set_point_out"></div>

`void` **set_point_out** ( idx: [`int`](class_int.md), position: [`Vector3`](class_vector3.md) )<div id="class_curve3d_method_set_point_out"></div>

Sets the position of the control point leading out of the vertex `idx`. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_set_point_position"></div>

`void` **set_point_position** ( idx: [`int`](class_int.md), position: [`Vector3`](class_vector3.md) )<div id="class_curve3d_method_set_point_position"></div>

Sets the position for the vertex `idx`. If the index is out of bounds, the function sends an error to the console.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_set_point_tilt"></div>

`void` **set_point_tilt** ( idx: [`int`](class_int.md), tilt: [`float`](class_float.md) )<div id="class_curve3d_method_set_point_tilt"></div>

Sets the tilt angle in radians for the point `idx`. If the index is out of bounds, the function sends an error to the console.

The tilt controls the rotation along the look-at axis an object traveling the path would have. In the case of a curve controlling a [`PathFollow3D`](class_pathfollow3d.md), this tilt is an offset over the natural tilt the [`PathFollow3D`](class_pathfollow3d.md) calculates.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_tessellate"></div>

[`PackedVector3Array`](class_packedvector3array.md) **tessellate** ( max_stages: [`int`](class_int.md) = 5, tolerance_degrees: [`float`](class_float.md) = 4 ) const[^const]<div id="class_curve3d_method_tessellate"></div>

Returns a list of points along the curve, with a curvature controlled point density. That is, the curvier parts will have more points than the straighter parts.

This approximation makes straight segments between each point, then subdivides those segments until the resulting shape is similar enough.

 `max_stages` controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!

 `tolerance_degrees` controls how many degrees the midpoint of a segment may deviate from the real curve, before the segment has to be subdivided.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve3d_method_tessellate_even_length"></div>

[`PackedVector3Array`](class_packedvector3array.md) **tessellate_even_length** ( max_stages: [`int`](class_int.md) = 5, tolerance_length: [`float`](class_float.md) = 0.2 ) const[^const]<div id="class_curve3d_method_tessellate_even_length"></div>

Returns a list of points along the curve, with almost uniform density. `max_stages` controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!

 `tolerance_length` controls the maximal distance between two neighboring points, before the segment has to be subdivided.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
