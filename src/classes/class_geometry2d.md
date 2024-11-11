<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Geometry2D.xml。 -->

<div id="_class_geometry2d"></div>

# Geometry2D

**继承：** [`Object`](class_object.md)

Provides methods for some common 2D geometric operations.

## 描述

Provides a set of helper functions to create geometric shapes, compute intersections between shapes, and process various other geometric operations in 2D.

## 方法

|||
|:-:|:--|
| [Array](class_array.md) [`Vector2i`](class_vector2i.md)                     | [`bresenham_line`](class_geometry2d.md#class_geometry2d_method_bresenham_line) ( from: [`Vector2i`](class_vector2i.md), to: [`Vector2i`](class_vector2i.md) )                                                                                                                                                 |
| [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) | [`clip_polygons`](class_geometry2d.md#class_geometry2d_method_clip_polygons) ( polygon_a: [`PackedVector2Array`](class_packedvector2array.md), polygon_b: [`PackedVector2Array`](class_packedvector2array.md) )                                                                                               |
| [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) | [`clip_polyline_with_polygon`](class_geometry2d.md#class_geometry2d_method_clip_polyline_with_polygon) ( polyline: [`PackedVector2Array`](class_packedvector2array.md), polygon: [`PackedVector2Array`](class_packedvector2array.md) )                                                                        |
| [`PackedVector2Array`](class_packedvector2array.md)                         | [`convex_hull`](class_geometry2d.md#class_geometry2d_method_convex_hull) ( points: [`PackedVector2Array`](class_packedvector2array.md) )                                                                                                                                                                      |
| [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) | [`decompose_polygon_in_convex`](class_geometry2d.md#class_geometry2d_method_decompose_polygon_in_convex) ( polygon: [`PackedVector2Array`](class_packedvector2array.md) )                                                                                                                                     |
| [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) | [`exclude_polygons`](class_geometry2d.md#class_geometry2d_method_exclude_polygons) ( polygon_a: [`PackedVector2Array`](class_packedvector2array.md), polygon_b: [`PackedVector2Array`](class_packedvector2array.md) )                                                                                         |
| [`Vector2`](class_vector2.md)                                               | [`get_closest_point_to_segment`](class_geometry2d.md#class_geometry2d_method_get_closest_point_to_segment) ( point: [`Vector2`](class_vector2.md), s1: [`Vector2`](class_vector2.md), s2: [`Vector2`](class_vector2.md) )                                                                                     |
| [`Vector2`](class_vector2.md)                                               | [`get_closest_point_to_segment_uncapped`](class_geometry2d.md#class_geometry2d_method_get_closest_point_to_segment_uncapped) ( point: [`Vector2`](class_vector2.md), s1: [`Vector2`](class_vector2.md), s2: [`Vector2`](class_vector2.md) )                                                                   |
| [`PackedVector2Array`](class_packedvector2array.md)                         | [`get_closest_points_between_segments`](class_geometry2d.md#class_geometry2d_method_get_closest_points_between_segments) ( p1: [`Vector2`](class_vector2.md), q1: [`Vector2`](class_vector2.md), p2: [`Vector2`](class_vector2.md), q2: [`Vector2`](class_vector2.md) )                                       |
| [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) | [`intersect_polygons`](class_geometry2d.md#class_geometry2d_method_intersect_polygons) ( polygon_a: [`PackedVector2Array`](class_packedvector2array.md), polygon_b: [`PackedVector2Array`](class_packedvector2array.md) )                                                                                     |
| [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) | [`intersect_polyline_with_polygon`](class_geometry2d.md#class_geometry2d_method_intersect_polyline_with_polygon) ( polyline: [`PackedVector2Array`](class_packedvector2array.md), polygon: [`PackedVector2Array`](class_packedvector2array.md) )                                                              |
| [`bool`](class_bool.md)                                                     | [`is_point_in_circle`](class_geometry2d.md#class_geometry2d_method_is_point_in_circle) ( point: [`Vector2`](class_vector2.md), circle_position: [`Vector2`](class_vector2.md), circle_radius: [`float`](class_float.md) )                                                                                     |
| [`bool`](class_bool.md)                                                     | [`is_point_in_polygon`](class_geometry2d.md#class_geometry2d_method_is_point_in_polygon) ( point: [`Vector2`](class_vector2.md), polygon: [`PackedVector2Array`](class_packedvector2array.md) )                                                                                                               |
| [`bool`](class_bool.md)                                                     | [`is_polygon_clockwise`](class_geometry2d.md#class_geometry2d_method_is_polygon_clockwise) ( polygon: [`PackedVector2Array`](class_packedvector2array.md) )                                                                                                                                                   |
| [`Variant`](class_variant.md)                                               | [`line_intersects_line`](class_geometry2d.md#class_geometry2d_method_line_intersects_line) ( from_a: [`Vector2`](class_vector2.md), dir_a: [`Vector2`](class_vector2.md), from_b: [`Vector2`](class_vector2.md), dir_b: [`Vector2`](class_vector2.md) )                                                       |
| [`Dictionary`](class_dictionary.md)                                         | [`make_atlas`](class_geometry2d.md#class_geometry2d_method_make_atlas) ( sizes: [`PackedVector2Array`](class_packedvector2array.md) )                                                                                                                                                                         |
| [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) | [`merge_polygons`](class_geometry2d.md#class_geometry2d_method_merge_polygons) ( polygon_a: [`PackedVector2Array`](class_packedvector2array.md), polygon_b: [`PackedVector2Array`](class_packedvector2array.md) )                                                                                             |
| [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) | [`offset_polygon`](class_geometry2d.md#class_geometry2d_method_offset_polygon) ( polygon: [`PackedVector2Array`](class_packedvector2array.md), delta: [`float`](class_float.md), join_type: [PolyJoinType](#enum_geometry2d_polyjointype) = 0 )                                                               |
| [Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) | [`offset_polyline`](class_geometry2d.md#class_geometry2d_method_offset_polyline) ( polyline: [`PackedVector2Array`](class_packedvector2array.md), delta: [`float`](class_float.md), join_type: [PolyJoinType](#enum_geometry2d_polyjointype) = 0, end_type: [PolyEndType](#enum_geometry2d_polyendtype) = 3 ) |
| [`bool`](class_bool.md)                                                     | [`point_is_inside_triangle`](class_geometry2d.md#class_geometry2d_method_point_is_inside_triangle) ( point: [`Vector2`](class_vector2.md), a: [`Vector2`](class_vector2.md), b: [`Vector2`](class_vector2.md), c: [`Vector2`](class_vector2.md) ) const[^const]                                               |
| [`float`](class_float.md)                                                   | [`segment_intersects_circle`](class_geometry2d.md#class_geometry2d_method_segment_intersects_circle) ( segment_from: [`Vector2`](class_vector2.md), segment_to: [`Vector2`](class_vector2.md), circle_position: [`Vector2`](class_vector2.md), circle_radius: [`float`](class_float.md) )                     |
| [`Variant`](class_variant.md)                                               | [`segment_intersects_segment`](class_geometry2d.md#class_geometry2d_method_segment_intersects_segment) ( from_a: [`Vector2`](class_vector2.md), to_a: [`Vector2`](class_vector2.md), from_b: [`Vector2`](class_vector2.md), to_b: [`Vector2`](class_vector2.md) )                                             |
| [`PackedInt32Array`](class_packedint32array.md)                             | [`triangulate_delaunay`](class_geometry2d.md#class_geometry2d_method_triangulate_delaunay) ( points: [`PackedVector2Array`](class_packedvector2array.md) )                                                                                                                                                    |
| [`PackedInt32Array`](class_packedint32array.md)                             | [`triangulate_polygon`](class_geometry2d.md#class_geometry2d_method_triangulate_polygon) ( polygon: [`PackedVector2Array`](class_packedvector2array.md) )                                                                                                                                                     |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_geometry2d_polybooleanoperation"></div>

enum **PolyBooleanOperation**: <div id="enum_geometry2d_polybooleanoperation"></div>

<div id="_class_geometry2d_constant_operation_union"></div>

[PolyBooleanOperation](#enum_geometry2d_polybooleanoperation) **OPERATION_UNION** = ``0``

Create regions where either subject or clip polygons (or both) are filled.

<div id="_class_geometry2d_constant_operation_difference"></div>

[PolyBooleanOperation](#enum_geometry2d_polybooleanoperation) **OPERATION_DIFFERENCE** = ``1``

Create regions where subject polygons are filled except where clip polygons are filled.

<div id="_class_geometry2d_constant_operation_intersection"></div>

[PolyBooleanOperation](#enum_geometry2d_polybooleanoperation) **OPERATION_INTERSECTION** = ``2``

Create regions where both subject and clip polygons are filled.

<div id="_class_geometry2d_constant_operation_xor"></div>

[PolyBooleanOperation](#enum_geometry2d_polybooleanoperation) **OPERATION_XOR** = ``3``

Create regions where either subject or clip polygons are filled but not where both are filled.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_geometry2d_polyjointype"></div>

enum **PolyJoinType**: <div id="enum_geometry2d_polyjointype"></div>

<div id="_class_geometry2d_constant_join_square"></div>

[PolyJoinType](#enum_geometry2d_polyjointype) **JOIN_SQUARE** = ``0``

Squaring is applied uniformally at all convex edge joins at `1 * delta`.

<div id="_class_geometry2d_constant_join_round"></div>

[PolyJoinType](#enum_geometry2d_polyjointype) **JOIN_ROUND** = ``1``

While flattened paths can never perfectly trace an arc, they are approximated by a series of arc chords.

<div id="_class_geometry2d_constant_join_miter"></div>

[PolyJoinType](#enum_geometry2d_polyjointype) **JOIN_MITER** = ``2``

There's a necessary limit to mitered joins since offsetting edges that join at very acute angles will produce excessively long and narrow "spikes". For any given edge join, when miter offsetting would exceed that maximum distance, "square" joining is applied.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_geometry2d_polyendtype"></div>

enum **PolyEndType**: <div id="enum_geometry2d_polyendtype"></div>

<div id="_class_geometry2d_constant_end_polygon"></div>

[PolyEndType](#enum_geometry2d_polyendtype) **END_POLYGON** = ``0``

Endpoints are joined using the [PolyJoinType](#enum_geometry2d_polyjointype) value and the path filled as a polygon.

<div id="_class_geometry2d_constant_end_joined"></div>

[PolyEndType](#enum_geometry2d_polyendtype) **END_JOINED** = ``1``

Endpoints are joined using the [PolyJoinType](#enum_geometry2d_polyjointype) value and the path filled as a polyline.

<div id="_class_geometry2d_constant_end_butt"></div>

[PolyEndType](#enum_geometry2d_polyendtype) **END_BUTT** = ``2``

Endpoints are squared off with no extension.

<div id="_class_geometry2d_constant_end_square"></div>

[PolyEndType](#enum_geometry2d_polyendtype) **END_SQUARE** = ``3``

Endpoints are squared off and extended by `delta` units.

<div id="_class_geometry2d_constant_end_round"></div>

[PolyEndType](#enum_geometry2d_polyendtype) **END_ROUND** = ``4``

Endpoints are rounded off and extended by `delta` units.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_geometry2d_method_bresenham_line"></div>

[Array](class_array.md) [`Vector2i`](class_vector2i.md) **bresenham_line** ( from: [`Vector2i`](class_vector2i.md), to: [`Vector2i`](class_vector2i.md) )<div id="class_geometry2d_method_bresenham_line"></div>

Returns the [*Bresenham line*](https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm) between the `from` and `to` points. A Bresenham line is a series of pixels that draws a line and is always 1-pixel thick on every row and column of the drawing (never more, never less).

Example code to draw a line between two [`Marker2D`](class_marker2d.md) nodes using a series of [`CanvasItem.draw_rect`](class_canvasitem.md#class_canvasitem_method_draw_rect) calls:

```

    func _draw():
        for pixel in Geometry2D.bresenham_line($MarkerA.position, $MarkerB.position):
            draw_rect(Rect2(pixel, Vector2.ONE), Color.WHITE)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_clip_polygons"></div>

[Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) **clip_polygons** ( polygon_a: [`PackedVector2Array`](class_packedvector2array.md), polygon_b: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_geometry2d_method_clip_polygons"></div>

Clips `polygon_a` against `polygon_b` and returns an array of clipped polygons. This performs [`OPERATION_DIFFERENCE`](class_geometry2d.md#class_geometry2d_constant_operation_difference) between polygons. Returns an empty array if `polygon_b` completely overlaps `polygon_a`.

If `polygon_b` is enclosed by `polygon_a`, returns an outer polygon (boundary) and inner polygon (hole) which could be distinguished by calling [`is_polygon_clockwise`](class_geometry2d.md#class_geometry2d_method_is_polygon_clockwise).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_clip_polyline_with_polygon"></div>

[Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) **clip_polyline_with_polygon** ( polyline: [`PackedVector2Array`](class_packedvector2array.md), polygon: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_geometry2d_method_clip_polyline_with_polygon"></div>

Clips `polyline` against `polygon` and returns an array of clipped polylines. This performs [`OPERATION_DIFFERENCE`](class_geometry2d.md#class_geometry2d_constant_operation_difference) between the polyline and the polygon. This operation can be thought of as cutting a line with a closed shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_convex_hull"></div>

[`PackedVector2Array`](class_packedvector2array.md) **convex_hull** ( points: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_geometry2d_method_convex_hull"></div>

Given an array of [`Vector2`](class_vector2.md) s, returns the convex hull as a list of points in counterclockwise order. The last point is the same as the first one.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_decompose_polygon_in_convex"></div>

[Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) **decompose_polygon_in_convex** ( polygon: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_geometry2d_method_decompose_polygon_in_convex"></div>

Decomposes the `polygon` into multiple convex hulls and returns an array of [`PackedVector2Array`](class_packedvector2array.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_exclude_polygons"></div>

[Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) **exclude_polygons** ( polygon_a: [`PackedVector2Array`](class_packedvector2array.md), polygon_b: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_geometry2d_method_exclude_polygons"></div>

Mutually excludes common area defined by intersection of `polygon_a` and `polygon_b` (see [`intersect_polygons`](class_geometry2d.md#class_geometry2d_method_intersect_polygons)) and returns an array of excluded polygons. This performs [`OPERATION_XOR`](class_geometry2d.md#class_geometry2d_constant_operation_xor) between polygons. In other words, returns all but common area between polygons.

The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [`is_polygon_clockwise`](class_geometry2d.md#class_geometry2d_method_is_polygon_clockwise).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_get_closest_point_to_segment"></div>

[`Vector2`](class_vector2.md) **get_closest_point_to_segment** ( point: [`Vector2`](class_vector2.md), s1: [`Vector2`](class_vector2.md), s2: [`Vector2`](class_vector2.md) )<div id="class_geometry2d_method_get_closest_point_to_segment"></div>

Returns the 2D point on the 2D segment (`s1`, `s2`) that is closest to `point`. The returned point will always be inside the specified segment.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_get_closest_point_to_segment_uncapped"></div>

[`Vector2`](class_vector2.md) **get_closest_point_to_segment_uncapped** ( point: [`Vector2`](class_vector2.md), s1: [`Vector2`](class_vector2.md), s2: [`Vector2`](class_vector2.md) )<div id="class_geometry2d_method_get_closest_point_to_segment_uncapped"></div>

Returns the 2D point on the 2D line defined by (`s1`, `s2`) that is closest to `point`. The returned point can be inside the segment (`s1`, `s2`) or outside of it, i.e. somewhere on the line extending from the segment.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_get_closest_points_between_segments"></div>

[`PackedVector2Array`](class_packedvector2array.md) **get_closest_points_between_segments** ( p1: [`Vector2`](class_vector2.md), q1: [`Vector2`](class_vector2.md), p2: [`Vector2`](class_vector2.md), q2: [`Vector2`](class_vector2.md) )<div id="class_geometry2d_method_get_closest_points_between_segments"></div>

Given the two 2D segments (`p1`, `q1`) and (`p2`, `q2`), finds those two points on the two segments that are closest to each other. Returns a [`PackedVector2Array`](class_packedvector2array.md) that contains this point on (`p1`, `q1`) as well the accompanying point on (`p2`, `q2`).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_intersect_polygons"></div>

[Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) **intersect_polygons** ( polygon_a: [`PackedVector2Array`](class_packedvector2array.md), polygon_b: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_geometry2d_method_intersect_polygons"></div>

Intersects `polygon_a` with `polygon_b` and returns an array of intersected polygons. This performs [`OPERATION_INTERSECTION`](class_geometry2d.md#class_geometry2d_constant_operation_intersection) between polygons. In other words, returns common area shared by polygons. Returns an empty array if no intersection occurs.

The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [`is_polygon_clockwise`](class_geometry2d.md#class_geometry2d_method_is_polygon_clockwise).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_intersect_polyline_with_polygon"></div>

[Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) **intersect_polyline_with_polygon** ( polyline: [`PackedVector2Array`](class_packedvector2array.md), polygon: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_geometry2d_method_intersect_polyline_with_polygon"></div>

Intersects `polyline` with `polygon` and returns an array of intersected polylines. This performs [`OPERATION_INTERSECTION`](class_geometry2d.md#class_geometry2d_constant_operation_intersection) between the polyline and the polygon. This operation can be thought of as chopping a line with a closed shape.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_is_point_in_circle"></div>

[`bool`](class_bool.md) **is_point_in_circle** ( point: [`Vector2`](class_vector2.md), circle_position: [`Vector2`](class_vector2.md), circle_radius: [`float`](class_float.md) )<div id="class_geometry2d_method_is_point_in_circle"></div>

Returns `true` if `point` is inside the circle or if it's located exactly *on* the circle's boundary, otherwise returns `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_is_point_in_polygon"></div>

[`bool`](class_bool.md) **is_point_in_polygon** ( point: [`Vector2`](class_vector2.md), polygon: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_geometry2d_method_is_point_in_polygon"></div>

Returns `true` if `point` is inside `polygon` or if it's located exactly *on* polygon's boundary, otherwise returns `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_is_polygon_clockwise"></div>

[`bool`](class_bool.md) **is_polygon_clockwise** ( polygon: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_geometry2d_method_is_polygon_clockwise"></div>

Returns `true` if `polygon`'s vertices are ordered in clockwise order, otherwise returns `false`.

 **Note:** Assumes a Cartesian coordinate system where `+x` is right and `+y` is up. If using screen coordinates (`+y` is down), the result will need to be flipped (i.e. a `true` result will indicate counter-clockwise).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_line_intersects_line"></div>

[`Variant`](class_variant.md) **line_intersects_line** ( from_a: [`Vector2`](class_vector2.md), dir_a: [`Vector2`](class_vector2.md), from_b: [`Vector2`](class_vector2.md), dir_b: [`Vector2`](class_vector2.md) )<div id="class_geometry2d_method_line_intersects_line"></div>

Returns the point of intersection between the two lines (`from_a`, `dir_a`) and (`from_b`, `dir_b`). Returns a [`Vector2`](class_vector2.md), or `null` if the lines are parallel.

 `from` and `dir` are *not* endpoints of a line segment or ray but the slope (`dir`) and a known point (`from`) on that line.



```gdscript

    var from_a = Vector2.ZERO
    var dir_a = Vector2.RIGHT
    var from_b = Vector2.DOWN
    
    # Returns Vector2(1, 0)
    Geometry2D.line_intersects_line(from_a, dir_a, from_b, Vector2(1, -1))
    # Returns Vector2(-1, 0)
    Geometry2D.line_intersects_line(from_a, dir_a, from_b, Vector2(-1, -1))
    # Returns null
    Geometry2D.line_intersects_line(from_a, dir_a, from_b, Vector2.RIGHT)
```

```csharp

    var fromA = Vector2.Zero;
    var dirA = Vector2.Right;
    var fromB = Vector2.Down;
    
    // Returns new Vector2(1, 0)
    Geometry2D.LineIntersectsLine(fromA, dirA, fromB, new Vector2(1, -1));
    // Returns new Vector2(-1, 0)
    Geometry2D.LineIntersectsLine(fromA, dirA, fromB, new Vector2(-1, -1));
    // Returns null
    Geometry2D.LineIntersectsLine(fromA, dirA, fromB, Vector2.Right);
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_make_atlas"></div>

[`Dictionary`](class_dictionary.md) **make_atlas** ( sizes: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_geometry2d_method_make_atlas"></div>

Given an array of [`Vector2`](class_vector2.md) s representing tiles, builds an atlas. The returned dictionary has two keys: `points` is a [`PackedVector2Array`](class_packedvector2array.md) that specifies the positions of each tile, `size` contains the overall size of the whole atlas as [`Vector2i`](class_vector2i.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_merge_polygons"></div>

[Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) **merge_polygons** ( polygon_a: [`PackedVector2Array`](class_packedvector2array.md), polygon_b: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_geometry2d_method_merge_polygons"></div>

Merges (combines) `polygon_a` and `polygon_b` and returns an array of merged polygons. This performs [`OPERATION_UNION`](class_geometry2d.md#class_geometry2d_constant_operation_union) between polygons.

The operation may result in an outer polygon (boundary) and multiple inner polygons (holes) produced which could be distinguished by calling [`is_polygon_clockwise`](class_geometry2d.md#class_geometry2d_method_is_polygon_clockwise).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_offset_polygon"></div>

[Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) **offset_polygon** ( polygon: [`PackedVector2Array`](class_packedvector2array.md), delta: [`float`](class_float.md), join_type: [PolyJoinType](#enum_geometry2d_polyjointype) = 0 )<div id="class_geometry2d_method_offset_polygon"></div>

Inflates or deflates `polygon` by `delta` units (pixels). If `delta` is positive, makes the polygon grow outward. If `delta` is negative, shrinks the polygon inward. Returns an array of polygons because inflating/deflating may result in multiple discrete polygons. Returns an empty array if `delta` is negative and the absolute value of it approximately exceeds the minimum bounding rectangle dimensions of the polygon.

Each polygon's vertices will be rounded as determined by `join_type`, see [PolyJoinType](#enum_geometry2d_polyjointype).

The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [`is_polygon_clockwise`](class_geometry2d.md#class_geometry2d_method_is_polygon_clockwise).

 **Note:** To translate the polygon's vertices specifically, multiply them to a [`Transform2D`](class_transform2d.md):



```gdscript

    var polygon = PackedVector2Array([Vector2(0, 0), Vector2(100, 0), Vector2(100, 100), Vector2(0, 100)])
    var offset = Vector2(50, 50)
    polygon = Transform2D(0, offset) * polygon
    print(polygon) # prints [(50, 50), (150, 50), (150, 150), (50, 150)]
```

```csharp

    var polygon = new Vector2[] { new Vector2(0, 0), new Vector2(100, 0), new Vector2(100, 100), new Vector2(0, 100) };
    var offset = new Vector2(50, 50);
    polygon = new Transform2D(0, offset) * polygon;
    GD.Print((Variant)polygon); // prints [(50, 50), (150, 50), (150, 150), (50, 150)]
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_offset_polyline"></div>

[Array](class_array.md) [`PackedVector2Array`](class_packedvector2array.md) **offset_polyline** ( polyline: [`PackedVector2Array`](class_packedvector2array.md), delta: [`float`](class_float.md), join_type: [PolyJoinType](#enum_geometry2d_polyjointype) = 0, end_type: [PolyEndType](#enum_geometry2d_polyendtype) = 3 )<div id="class_geometry2d_method_offset_polyline"></div>

Inflates or deflates `polyline` by `delta` units (pixels), producing polygons. If `delta` is positive, makes the polyline grow outward. Returns an array of polygons because inflating/deflating may result in multiple discrete polygons. If `delta` is negative, returns an empty array.

Each polygon's vertices will be rounded as determined by `join_type`, see [PolyJoinType](#enum_geometry2d_polyjointype).

Each polygon's endpoints will be rounded as determined by `end_type`, see [PolyEndType](#enum_geometry2d_polyendtype).

The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [`is_polygon_clockwise`](class_geometry2d.md#class_geometry2d_method_is_polygon_clockwise).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_point_is_inside_triangle"></div>

[`bool`](class_bool.md) **point_is_inside_triangle** ( point: [`Vector2`](class_vector2.md), a: [`Vector2`](class_vector2.md), b: [`Vector2`](class_vector2.md), c: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_geometry2d_method_point_is_inside_triangle"></div>

Returns if `point` is inside the triangle specified by `a`, `b` and `c`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_segment_intersects_circle"></div>

[`float`](class_float.md) **segment_intersects_circle** ( segment_from: [`Vector2`](class_vector2.md), segment_to: [`Vector2`](class_vector2.md), circle_position: [`Vector2`](class_vector2.md), circle_radius: [`float`](class_float.md) )<div id="class_geometry2d_method_segment_intersects_circle"></div>

Given the 2D segment (`segment_from`, `segment_to`), returns the position on the segment (as a number between 0 and 1) at which the segment hits the circle that is located at position `circle_position` and has radius `circle_radius`. If the segment does not intersect the circle, -1 is returned (this is also the case if the line extending the segment would intersect the circle, but the segment does not).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_segment_intersects_segment"></div>

[`Variant`](class_variant.md) **segment_intersects_segment** ( from_a: [`Vector2`](class_vector2.md), to_a: [`Vector2`](class_vector2.md), from_b: [`Vector2`](class_vector2.md), to_b: [`Vector2`](class_vector2.md) )<div id="class_geometry2d_method_segment_intersects_segment"></div>

Checks if the two segments (`from_a`, `to_a`) and (`from_b`, `to_b`) intersect. If yes, return the point of intersection as [`Vector2`](class_vector2.md). If no intersection takes place, returns `null`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_triangulate_delaunay"></div>

[`PackedInt32Array`](class_packedint32array.md) **triangulate_delaunay** ( points: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_geometry2d_method_triangulate_delaunay"></div>

Triangulates the area specified by discrete set of `points` such that no point is inside the circumcircle of any resulting triangle. Returns a [`PackedInt32Array`](class_packedint32array.md) where each triangle consists of three consecutive point indices into `points` (i.e. the returned array will have `n * 3` elements, with `n` being the number of found triangles). If the triangulation did not succeed, an empty [`PackedInt32Array`](class_packedint32array.md) is returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_geometry2d_method_triangulate_polygon"></div>

[`PackedInt32Array`](class_packedint32array.md) **triangulate_polygon** ( polygon: [`PackedVector2Array`](class_packedvector2array.md) )<div id="class_geometry2d_method_triangulate_polygon"></div>

Triangulates the polygon specified by the points in `polygon`. Returns a [`PackedInt32Array`](class_packedint32array.md) where each triangle consists of three consecutive point indices into `polygon` (i.e. the returned array will have `n * 3` elements, with `n` being the number of found triangles). Output triangles will always be counter clockwise, and the contour will be flipped if it's clockwise. If the triangulation did not succeed, an empty [`PackedInt32Array`](class_packedint32array.md) is returned.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
