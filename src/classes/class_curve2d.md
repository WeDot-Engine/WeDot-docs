<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Curve2D.xml。 -->

<div id="_class_curve2d"></div>

# Curve2D

**继承：** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Describes a Bézier curve in 2D space.

## 描述

This class describes a Bézier curve in 2D space. It is mainly used to give a shape to a [`Path2D`](class_path2d.md), but can be manually sampled for other purposes.

It keeps a cache of precalculated points along the curve, to speed up further calculations.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`bake_interval`](class_curve2d.md#class_curve2d_property_bake_interval) | ``5.0`` |
| [`int`](class_int.md)     | [`point_count`](class_curve2d.md#class_curve2d_property_point_count)     | ``0``   |

## 方法

|||
|:-:|:--|
| `void`                                              | [`add_point`](class_curve2d.md#class_curve2d_method_add_point) ( position: [`Vector2`](class_vector2.md), in: [`Vector2`](class_vector2.md) = Vector2(0, 0), out: [`Vector2`](class_vector2.md) = Vector2(0, 0), index: [`int`](class_int.md) = -1 ) |
| `void`                                              | [`clear_points`](class_curve2d.md#class_curve2d_method_clear_points) ( )                                                                                                                                                                             |
| [`float`](class_float.md)                           | [`get_baked_length`](class_curve2d.md#class_curve2d_method_get_baked_length) ( ) const[^const]                                                                                                                                                       |
| [`PackedVector2Array`](class_packedvector2array.md) | [`get_baked_points`](class_curve2d.md#class_curve2d_method_get_baked_points) ( ) const[^const]                                                                                                                                                       |
| [`float`](class_float.md)                           | [`get_closest_offset`](class_curve2d.md#class_curve2d_method_get_closest_offset) ( to_point: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                           |
| [`Vector2`](class_vector2.md)                       | [`get_closest_point`](class_curve2d.md#class_curve2d_method_get_closest_point) ( to_point: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                             |
| [`Vector2`](class_vector2.md)                       | [`get_point_in`](class_curve2d.md#class_curve2d_method_get_point_in) ( idx: [`int`](class_int.md) ) const[^const]                                                                                                                                    |
| [`Vector2`](class_vector2.md)                       | [`get_point_out`](class_curve2d.md#class_curve2d_method_get_point_out) ( idx: [`int`](class_int.md) ) const[^const]                                                                                                                                  |
| [`Vector2`](class_vector2.md)                       | [`get_point_position`](class_curve2d.md#class_curve2d_method_get_point_position) ( idx: [`int`](class_int.md) ) const[^const]                                                                                                                        |
| `void`                                              | [`remove_point`](class_curve2d.md#class_curve2d_method_remove_point) ( idx: [`int`](class_int.md) )                                                                                                                                                  |
| [`Vector2`](class_vector2.md)                       | [`sample`](class_curve2d.md#class_curve2d_method_sample) ( idx: [`int`](class_int.md), t: [`float`](class_float.md) ) const[^const]                                                                                                                  |
| [`Vector2`](class_vector2.md)                       | [`sample_baked`](class_curve2d.md#class_curve2d_method_sample_baked) ( offset: [`float`](class_float.md) = 0.0, cubic: [`bool`](class_bool.md) = false ) const[^const]                                                                               |
| [`Transform2D`](class_transform2d.md)               | [`sample_baked_with_rotation`](class_curve2d.md#class_curve2d_method_sample_baked_with_rotation) ( offset: [`float`](class_float.md) = 0.0, cubic: [`bool`](class_bool.md) = false ) const[^const]                                                   |
| [`Vector2`](class_vector2.md)                       | [`samplef`](class_curve2d.md#class_curve2d_method_samplef) ( fofs: [`float`](class_float.md) ) const[^const]                                                                                                                                         |
| `void`                                              | [`set_point_in`](class_curve2d.md#class_curve2d_method_set_point_in) ( idx: [`int`](class_int.md), position: [`Vector2`](class_vector2.md) )                                                                                                         |
| `void`                                              | [`set_point_out`](class_curve2d.md#class_curve2d_method_set_point_out) ( idx: [`int`](class_int.md), position: [`Vector2`](class_vector2.md) )                                                                                                       |
| `void`                                              | [`set_point_position`](class_curve2d.md#class_curve2d_method_set_point_position) ( idx: [`int`](class_int.md), position: [`Vector2`](class_vector2.md) )                                                                                             |
| [`PackedVector2Array`](class_packedvector2array.md) | [`tessellate`](class_curve2d.md#class_curve2d_method_tessellate) ( max_stages: [`int`](class_int.md) = 5, tolerance_degrees: [`float`](class_float.md) = 4 ) const[^const]                                                                           |
| [`PackedVector2Array`](class_packedvector2array.md) | [`tessellate_even_length`](class_curve2d.md#class_curve2d_method_tessellate_even_length) ( max_stages: [`int`](class_int.md) = 5, tolerance_length: [`float`](class_float.md) = 20.0 ) const[^const]                                                 |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_curve2d_property_bake_interval"></div>

[`float`](class_float.md) **bake_interval** = ``5.0`` <div id="class_curve2d_property_bake_interval"></div>

- `void` **set_bake_interval** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_bake_interval** ( )

The distance in pixels between two adjacent cached points. Changing it forces the cache to be recomputed the next time the [`get_baked_points`](class_curve2d.md#class_curve2d_method_get_baked_points) or [`get_baked_length`](class_curve2d.md#class_curve2d_method_get_baked_length) function is called. The smaller the distance, the more points in the cache and the more memory it will consume, so use with care.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_property_point_count"></div>

[`int`](class_int.md) **point_count** = ``0`` <div id="class_curve2d_property_point_count"></div>

- `void` **set_point_count** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_point_count** ( )

The number of points describing the curve.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_curve2d_method_add_point"></div>

`void` **add_point** ( position: [`Vector2`](class_vector2.md), in: [`Vector2`](class_vector2.md) = Vector2(0, 0), out: [`Vector2`](class_vector2.md) = Vector2(0, 0), index: [`int`](class_int.md) = -1 )<div id="class_curve2d_method_add_point"></div>

Adds a point with the specified `position` relative to the curve's own position, with control points `in` and `out`. Appends the new point at the end of the point list.

If `index` is given, the new point is inserted before the existing point identified by index `index`. Every existing point starting from `index` is shifted further down the list of points. The index must be greater than or equal to `0` and must not exceed the number of existing points in the line. See [`point_count`](class_curve2d.md#class_curve2d_property_point_count).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_clear_points"></div>

`void` **clear_points** ( )<div id="class_curve2d_method_clear_points"></div>

Removes all points from the curve.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_get_baked_length"></div>

[`float`](class_float.md) **get_baked_length** ( ) const[^const]<div id="class_curve2d_method_get_baked_length"></div>

Returns the total length of the curve, based on the cached points. Given enough density (see [`bake_interval`](class_curve2d.md#class_curve2d_property_bake_interval)), it should be approximate enough.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_get_baked_points"></div>

[`PackedVector2Array`](class_packedvector2array.md) **get_baked_points** ( ) const[^const]<div id="class_curve2d_method_get_baked_points"></div>

Returns the cache of points as a [`PackedVector2Array`](class_packedvector2array.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_get_closest_offset"></div>

[`float`](class_float.md) **get_closest_offset** ( to_point: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_curve2d_method_get_closest_offset"></div>

Returns the closest offset to `to_point`. This offset is meant to be used in [`sample_baked`](class_curve2d.md#class_curve2d_method_sample_baked).

 `to_point` must be in this curve's local space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_get_closest_point"></div>

[`Vector2`](class_vector2.md) **get_closest_point** ( to_point: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_curve2d_method_get_closest_point"></div>

Returns the closest point on baked segments (in curve's local space) to `to_point`.

 `to_point` must be in this curve's local space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_get_point_in"></div>

[`Vector2`](class_vector2.md) **get_point_in** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_curve2d_method_get_point_in"></div>

Returns the position of the control point leading to the vertex `idx`. The returned position is relative to the vertex `idx`. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_get_point_out"></div>

[`Vector2`](class_vector2.md) **get_point_out** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_curve2d_method_get_point_out"></div>

Returns the position of the control point leading out of the vertex `idx`. The returned position is relative to the vertex `idx`. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_get_point_position"></div>

[`Vector2`](class_vector2.md) **get_point_position** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_curve2d_method_get_point_position"></div>

Returns the position of the vertex `idx`. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_remove_point"></div>

`void` **remove_point** ( idx: [`int`](class_int.md) )<div id="class_curve2d_method_remove_point"></div>

Deletes the point `idx` from the curve. Sends an error to the console if `idx` is out of bounds.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_sample"></div>

[`Vector2`](class_vector2.md) **sample** ( idx: [`int`](class_int.md), t: [`float`](class_float.md) ) const[^const]<div id="class_curve2d_method_sample"></div>

Returns the position between the vertex `idx` and the vertex `idx + 1`, where `t` controls if the point is the first vertex (`t = 0.0`), the last vertex (`t = 1.0`), or in between. Values of `t` outside the range (`0.0 <= t <= 1.0`) give strange, but predictable results.

If `idx` is out of bounds it is truncated to the first or last vertex, and `t` is ignored. If the curve has no points, the function sends an error to the console, and returns `(0, 0)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_sample_baked"></div>

[`Vector2`](class_vector2.md) **sample_baked** ( offset: [`float`](class_float.md) = 0.0, cubic: [`bool`](class_bool.md) = false ) const[^const]<div id="class_curve2d_method_sample_baked"></div>

Returns a point within the curve at position `offset`, where `offset` is measured as a pixel distance along the curve.

To do that, it finds the two cached points where the `offset` lies between, then interpolates the values. This interpolation is cubic if `cubic` is set to `true`, or linear if set to `false`.

Cubic interpolation tends to follow the curves better, but linear is faster (and often, precise enough).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_sample_baked_with_rotation"></div>

[`Transform2D`](class_transform2d.md) **sample_baked_with_rotation** ( offset: [`float`](class_float.md) = 0.0, cubic: [`bool`](class_bool.md) = false ) const[^const]<div id="class_curve2d_method_sample_baked_with_rotation"></div>

Similar to [`sample_baked`](class_curve2d.md#class_curve2d_method_sample_baked), but returns [`Transform2D`](class_transform2d.md) that includes a rotation along the curve, with [`Transform2D.origin`](class_transform2d.md#class_transform2d_property_origin) as the point position and the [`Transform2D.x`](class_transform2d.md#class_transform2d_property_x) vector pointing in the direction of the path at that point. Returns an empty transform if the length of the curve is `0`.

```

    var baked = curve.sample_baked_with_rotation(offset)
    # The returned Transform2D can be set directly.
    transform = baked
    # You can also read the origin and rotation separately from the returned Transform2D.
    position = baked.get_origin()
    rotation = baked.get_rotation()
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_samplef"></div>

[`Vector2`](class_vector2.md) **samplef** ( fofs: [`float`](class_float.md) ) const[^const]<div id="class_curve2d_method_samplef"></div>

Returns the position at the vertex `fofs`. It calls [`sample`](class_curve2d.md#class_curve2d_method_sample) using the integer part of `fofs` as `idx`, and its fractional part as `t`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_set_point_in"></div>

`void` **set_point_in** ( idx: [`int`](class_int.md), position: [`Vector2`](class_vector2.md) )<div id="class_curve2d_method_set_point_in"></div>

Sets the position of the control point leading to the vertex `idx`. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_set_point_out"></div>

`void` **set_point_out** ( idx: [`int`](class_int.md), position: [`Vector2`](class_vector2.md) )<div id="class_curve2d_method_set_point_out"></div>

Sets the position of the control point leading out of the vertex `idx`. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_set_point_position"></div>

`void` **set_point_position** ( idx: [`int`](class_int.md), position: [`Vector2`](class_vector2.md) )<div id="class_curve2d_method_set_point_position"></div>

Sets the position for the vertex `idx`. If the index is out of bounds, the function sends an error to the console.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_tessellate"></div>

[`PackedVector2Array`](class_packedvector2array.md) **tessellate** ( max_stages: [`int`](class_int.md) = 5, tolerance_degrees: [`float`](class_float.md) = 4 ) const[^const]<div id="class_curve2d_method_tessellate"></div>

Returns a list of points along the curve, with a curvature controlled point density. That is, the curvier parts will have more points than the straighter parts.

This approximation makes straight segments between each point, then subdivides those segments until the resulting shape is similar enough.

 `max_stages` controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!

 `tolerance_degrees` controls how many degrees the midpoint of a segment may deviate from the real curve, before the segment has to be subdivided.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_curve2d_method_tessellate_even_length"></div>

[`PackedVector2Array`](class_packedvector2array.md) **tessellate_even_length** ( max_stages: [`int`](class_int.md) = 5, tolerance_length: [`float`](class_float.md) = 20.0 ) const[^const]<div id="class_curve2d_method_tessellate_even_length"></div>

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
