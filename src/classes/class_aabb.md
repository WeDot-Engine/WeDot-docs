<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/AABB.xml。 -->

<div id="_class_aabb"></div>

# AABB

A 3D axis-aligned bounding box.

## 描述

The **AABB** built-in [`Variant`](class_variant.md) type represents an axis-aligned bounding box in a 3D space. It is defined by its [`position`](#class_aabb_property_position) and [`size`](#class_aabb_property_size), which are [`Vector3`](class_vector3.md). It is frequently used for fast overlap tests (see [`intersects`](#class_aabb_method_intersects)). Although **AABB** itself is axis-aligned, it can be combined with [`Transform3D`](class_transform3d.md) to represent a rotated or skewed bounding box.

It uses floating-point coordinates. The 2D counterpart to **AABB** is [`Rect2`](class_rect2.md). There is no version of **AABB** that uses integer coordinates.

 **Note:** Negative values for [`size`](#class_aabb_property_size) are not supported. With negative size, most **AABB** methods do not work correctly. Use [`abs`](#class_aabb_method_abs) to get an equivalent **AABB** with a non-negative size.

 **Note:** In a boolean context, a **AABB** evaluates to `false` if both [`position`](#class_aabb_property_position) and [`size`](#class_aabb_property_size) are zero (equal to [`Vector3.ZERO`](#class_vector3_constant_zero)). Otherwise, it always evaluates to `true`.

通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 属性

| [`Vector3`](class_vector3.md) | [`end`](#class_aabb_property_end)           | ``Vector3(0, 0, 0)`` |
| [`Vector3`](class_vector3.md) | [`position`](#class_aabb_property_position) | ``Vector3(0, 0, 0)`` |
| [`Vector3`](class_vector3.md) | [`size`](#class_aabb_property_size)         | ``Vector3(0, 0, 0)`` |

## 构造函数

| [`AABB`](class_aabb.md) | [`AABB`](#class_aabb_constructor_aabb) ( )                                                                              |
| [`AABB`](class_aabb.md) | [`AABB`](#class_aabb_constructor_aabb) ( from: [`AABB`](class_aabb.md) )                                                |
| [`AABB`](class_aabb.md) | [`AABB`](#class_aabb_constructor_aabb) ( position: [`Vector3`](class_vector3.md), size: [`Vector3`](class_vector3.md) ) |

## 方法

| [`AABB`](class_aabb.md)       | [`abs`](#class_aabb_method_abs) ( ) const[^const]                                                                                                      |
| [`bool`](class_bool.md)       | [`encloses`](#class_aabb_method_encloses) ( with: [`AABB`](class_aabb.md) ) const[^const]                                                              |
| [`AABB`](class_aabb.md)       | [`expand`](#class_aabb_method_expand) ( to_point: [`Vector3`](class_vector3.md) ) const[^const]                                                        |
| [`Vector3`](class_vector3.md) | [`get_center`](#class_aabb_method_get_center) ( ) const[^const]                                                                                        |
| [`Vector3`](class_vector3.md) | [`get_endpoint`](#class_aabb_method_get_endpoint) ( idx: [`int`](class_int.md) ) const[^const]                                                         |
| [`Vector3`](class_vector3.md) | [`get_longest_axis`](#class_aabb_method_get_longest_axis) ( ) const[^const]                                                                            |
| [`int`](class_int.md)         | [`get_longest_axis_index`](#class_aabb_method_get_longest_axis_index) ( ) const[^const]                                                                |
| [`float`](class_float.md)     | [`get_longest_axis_size`](#class_aabb_method_get_longest_axis_size) ( ) const[^const]                                                                  |
| [`Vector3`](class_vector3.md) | [`get_shortest_axis`](#class_aabb_method_get_shortest_axis) ( ) const[^const]                                                                          |
| [`int`](class_int.md)         | [`get_shortest_axis_index`](#class_aabb_method_get_shortest_axis_index) ( ) const[^const]                                                              |
| [`float`](class_float.md)     | [`get_shortest_axis_size`](#class_aabb_method_get_shortest_axis_size) ( ) const[^const]                                                                |
| [`Vector3`](class_vector3.md) | [`get_support`](#class_aabb_method_get_support) ( dir: [`Vector3`](class_vector3.md) ) const[^const]                                                   |
| [`float`](class_float.md)     | [`get_volume`](#class_aabb_method_get_volume) ( ) const[^const]                                                                                        |
| [`AABB`](class_aabb.md)       | [`grow`](#class_aabb_method_grow) ( by: [`float`](class_float.md) ) const[^const]                                                                      |
| [`bool`](class_bool.md)       | [`has_point`](#class_aabb_method_has_point) ( point: [`Vector3`](class_vector3.md) ) const[^const]                                                     |
| [`bool`](class_bool.md)       | [`has_surface`](#class_aabb_method_has_surface) ( ) const[^const]                                                                                      |
| [`bool`](class_bool.md)       | [`has_volume`](#class_aabb_method_has_volume) ( ) const[^const]                                                                                        |
| [`AABB`](class_aabb.md)       | [`intersection`](#class_aabb_method_intersection) ( with: [`AABB`](class_aabb.md) ) const[^const]                                                      |
| [`bool`](class_bool.md)       | [`intersects`](#class_aabb_method_intersects) ( with: [`AABB`](class_aabb.md) ) const[^const]                                                          |
| [`bool`](class_bool.md)       | [`intersects_plane`](#class_aabb_method_intersects_plane) ( plane: [`Plane`](class_plane.md) ) const[^const]                                           |
| [`Variant`](class_variant.md) | [`intersects_ray`](#class_aabb_method_intersects_ray) ( from: [`Vector3`](class_vector3.md), dir: [`Vector3`](class_vector3.md) ) const[^const]        |
| [`Variant`](class_variant.md) | [`intersects_segment`](#class_aabb_method_intersects_segment) ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md) ) const[^const] |
| [`bool`](class_bool.md)       | [`is_equal_approx`](#class_aabb_method_is_equal_approx) ( aabb: [`AABB`](class_aabb.md) ) const[^const]                                                |
| [`bool`](class_bool.md)       | [`is_finite`](#class_aabb_method_is_finite) ( ) const[^const]                                                                                          |
| [`AABB`](class_aabb.md)       | [`merge`](#class_aabb_method_merge) ( with: [`AABB`](class_aabb.md) ) const[^const]                                                                    |

## 运算符

| [`bool`](class_bool.md) | [`operator !=`](class_AABB.md#operator_neq_AABB) ( right: [`AABB`](class_aabb.md) )                     |
| [`AABB`](class_aabb.md) | [`operator *`](class_AABB.md#operator_mul_Transform3D) ( right: [`Transform3D`](class_transform3d.md) ) |
| [`bool`](class_bool.md) | [`operator ==`](class_AABB.md#operator_eq_AABB) ( right: [`AABB`](class_aabb.md) )                      |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_aabb_property_end"></div>

[`Vector3`](class_vector3.md) **end** = ``Vector3(0, 0, 0)`` <div id="class_aabb_property_end"></div>

The ending point. This is usually the corner on the top-right and forward of the bounding box, and is equivalent to `position + size`. Setting this point affects the [`size`](#class_aabb_property_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_property_position"></div>

[`Vector3`](class_vector3.md) **position** = ``Vector3(0, 0, 0)`` <div id="class_aabb_property_position"></div>

The origin point. This is usually the corner on the bottom-left and back of the bounding box.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_property_size"></div>

[`Vector3`](class_vector3.md) **size** = ``Vector3(0, 0, 0)`` <div id="class_aabb_property_size"></div>

The bounding box's width, height, and depth starting from [`position`](#class_aabb_property_position). Setting this value also affects the [`end`](#class_aabb_property_end) point.

 **Note:** It's recommended setting the width, height, and depth to non-negative values. This is because most methods in Godot assume that the [`position`](#class_aabb_property_position) is the bottom-left-back corner, and the [`end`](#class_aabb_property_end) is the top-right-forward corner. To get an equivalent bounding box with non-negative size, use [`abs`](#class_aabb_method_abs).

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_aabb_constructor_aabb"></div>

[`AABB`](class_aabb.md) **AABB** ( )<div id="class_aabb_constructor_aabb"></div>

Constructs an **AABB** with its [`position`](#class_aabb_property_position) and [`size`](#class_aabb_property_size) set to [`Vector3.ZERO`](#class_vector3_constant_zero).

<!-- rst-class:: classref-item-separator -->

---

[`AABB`](class_aabb.md) **AABB** ( from: [`AABB`](class_aabb.md) )

Constructs an **AABB** as a copy of the given **AABB**.

<!-- rst-class:: classref-item-separator -->

---

[`AABB`](class_aabb.md) **AABB** ( position: [`Vector3`](class_vector3.md), size: [`Vector3`](class_vector3.md) )

Constructs an **AABB** by `position` and `size`.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_aabb_method_abs"></div>

[`AABB`](class_aabb.md) **abs** ( ) const[^const]<div id="class_aabb_method_abs"></div>

Returns an **AABB** equivalent to this bounding box, with its width, height, and depth modified to be non-negative values.



```gdscript

    var box = AABB(Vector3(5, 0, 5), Vector3(-20, -10, -5))
    var absolute = box.abs()
    print(absolute.position) # Prints (-15, -10, 0)
    print(absolute.size)     # Prints (20, 10, 5)
```

```csharp

    var box = new Aabb(new Vector3(5, 0, 5), new Vector3(-20, -10, -5));
    var absolute = box.Abs();
    GD.Print(absolute.Position); // Prints (-15, -10, 0)
    GD.Print(absolute.Size);     // Prints (20, 10, 5)
```



 **Note:** It's recommended to use this method when [`size`](#class_aabb_property_size) is negative, as most other methods in Godot assume that the [`size`](#class_aabb_property_size)'s components are greater than `0`.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_encloses"></div>

[`bool`](class_bool.md) **encloses** ( with: [`AABB`](class_aabb.md) ) const[^const]<div id="class_aabb_method_encloses"></div>

Returns `true` if this bounding box *completely* encloses the `with` box. The edges of both boxes are included.



```gdscript

    var a = AABB(Vector3(0, 0, 0), Vector3(4, 4, 4))
    var b = AABB(Vector3(1, 1, 1), Vector3(3, 3, 3))
    var c = AABB(Vector3(2, 2, 2), Vector3(8, 8, 8))
    
    print(a.encloses(a)) # Prints true
    print(a.encloses(b)) # Prints true
    print(a.encloses(c)) # Prints false
```

```csharp

    var a = new Aabb(new Vector3(0, 0, 0), new Vector3(4, 4, 4));
    var b = new Aabb(new Vector3(1, 1, 1), new Vector3(3, 3, 3));
    var c = new Aabb(new Vector3(2, 2, 2), new Vector3(8, 8, 8));
    
    GD.Print(a.Encloses(a)); // Prints True
    GD.Print(a.Encloses(b)); // Prints True
    GD.Print(a.Encloses(c)); // Prints False
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_expand"></div>

[`AABB`](class_aabb.md) **expand** ( to_point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_aabb_method_expand"></div>

Returns a copy of this bounding box expanded to align the edges with the given `to_point`, if necessary.



```gdscript

    var box = AABB(Vector3(0, 0, 0), Vector3(5, 2, 5))
    
    box = box.expand(Vector3(10, 0, 0))
    print(box.position) # Prints (0, 0, 0)
    print(box.size)     # Prints (10, 2, 5)
    
    box = box.expand(Vector3(-5, 0, 5))
    print(box.position) # Prints (-5, 0, 0)
    print(box.size)     # Prints (15, 2, 5)
```

```csharp

    var box = new Aabb(new Vector3(0, 0, 0), new Vector3(5, 2, 5));
    
    box = box.Expand(new Vector3(10, 0, 0));
    GD.Print(box.Position); // Prints (0, 0, 0)
    GD.Print(box.Size);     // Prints (10, 2, 5)
    
    box = box.Expand(new Vector3(-5, 0, 5));
    GD.Print(box.Position); // Prints (-5, 0, 0)
    GD.Print(box.Size);     // Prints (15, 2, 5)
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_get_center"></div>

[`Vector3`](class_vector3.md) **get_center** ( ) const[^const]<div id="class_aabb_method_get_center"></div>

Returns the center point of the bounding box. This is the same as `position + (size / 2.0)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_get_endpoint"></div>

[`Vector3`](class_vector3.md) **get_endpoint** ( idx: [`int`](class_int.md) ) const[^const]<div id="class_aabb_method_get_endpoint"></div>

Returns the position of one of the 8 vertices that compose this bounding box. With a `idx` of `0` this is the same as [`position`](#class_aabb_property_position), and a `idx` of `7` is the same as [`end`](#class_aabb_property_end).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_get_longest_axis"></div>

[`Vector3`](class_vector3.md) **get_longest_axis** ( ) const[^const]<div id="class_aabb_method_get_longest_axis"></div>

Returns the longest normalized axis of this bounding box's [`size`](#class_aabb_property_size), as a [`Vector3`](class_vector3.md) ([`Vector3.RIGHT`](#class_vector3_constant_right), [`Vector3.UP`](#class_vector3_constant_up), or [`Vector3.BACK`](#class_vector3_constant_back)).



```gdscript

    var box = AABB(Vector3(0, 0, 0), Vector3(2, 4, 8))
    
    print(box.get_longest_axis())       # Prints (0, 0, 1)
    print(box.get_longest_axis_index()) # Prints 2
    print(box.get_longest_axis_size())  # Prints 8
```

```csharp

    var box = new Aabb(new Vector3(0, 0, 0), new Vector3(2, 4, 8));
    
    GD.Print(box.GetLongestAxis());      // Prints (0, 0, 1)
    GD.Print(box.GetLongestAxisIndex()); // Prints 2
    GD.Print(box.GetLongestAxisSize());  // Prints 8
```



See also [`get_longest_axis_index`](#class_aabb_method_get_longest_axis_index) and [`get_longest_axis_size`](#class_aabb_method_get_longest_axis_size).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_get_longest_axis_index"></div>

[`int`](class_int.md) **get_longest_axis_index** ( ) const[^const]<div id="class_aabb_method_get_longest_axis_index"></div>

Returns the index to the longest axis of this bounding box's [`size`](#class_aabb_property_size) (see [`Vector3.AXIS_X`](#class_vector3_constant_axis_x), [`Vector3.AXIS_Y`](#class_vector3_constant_axis_y), and [`Vector3.AXIS_Z`](#class_vector3_constant_axis_z)).

For an example, see [`get_longest_axis`](#class_aabb_method_get_longest_axis).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_get_longest_axis_size"></div>

[`float`](class_float.md) **get_longest_axis_size** ( ) const[^const]<div id="class_aabb_method_get_longest_axis_size"></div>

Returns the longest dimension of this bounding box's [`size`](#class_aabb_property_size).

For an example, see [`get_longest_axis`](#class_aabb_method_get_longest_axis).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_get_shortest_axis"></div>

[`Vector3`](class_vector3.md) **get_shortest_axis** ( ) const[^const]<div id="class_aabb_method_get_shortest_axis"></div>

Returns the shortest normalized axis of this bounding box's [`size`](#class_aabb_property_size), as a [`Vector3`](class_vector3.md) ([`Vector3.RIGHT`](#class_vector3_constant_right), [`Vector3.UP`](#class_vector3_constant_up), or [`Vector3.BACK`](#class_vector3_constant_back)).



```gdscript

    var box = AABB(Vector3(0, 0, 0), Vector3(2, 4, 8))
    
    print(box.get_shortest_axis())       # Prints (1, 0, 0)
    print(box.get_shortest_axis_index()) # Prints 0
    print(box.get_shortest_axis_size())  # Prints 2
```

```csharp

    var box = new Aabb(new Vector3(0, 0, 0), new Vector3(2, 4, 8));
    
    GD.Print(box.GetShortestAxis());      // Prints (1, 0, 0)
    GD.Print(box.GetShortestAxisIndex()); // Prints 0
    GD.Print(box.GetShortestAxisSize());  // Prints 2
```



See also [`get_shortest_axis_index`](#class_aabb_method_get_shortest_axis_index) and [`get_shortest_axis_size`](#class_aabb_method_get_shortest_axis_size).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_get_shortest_axis_index"></div>

[`int`](class_int.md) **get_shortest_axis_index** ( ) const[^const]<div id="class_aabb_method_get_shortest_axis_index"></div>

Returns the index to the shortest axis of this bounding box's [`size`](#class_aabb_property_size) (see [`Vector3.AXIS_X`](#class_vector3_constant_axis_x), [`Vector3.AXIS_Y`](#class_vector3_constant_axis_y), and [`Vector3.AXIS_Z`](#class_vector3_constant_axis_z)).

For an example, see [`get_shortest_axis`](#class_aabb_method_get_shortest_axis).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_get_shortest_axis_size"></div>

[`float`](class_float.md) **get_shortest_axis_size** ( ) const[^const]<div id="class_aabb_method_get_shortest_axis_size"></div>

Returns the shortest dimension of this bounding box's [`size`](#class_aabb_property_size).

For an example, see [`get_shortest_axis`](#class_aabb_method_get_shortest_axis).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_get_support"></div>

[`Vector3`](class_vector3.md) **get_support** ( dir: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_aabb_method_get_support"></div>

Returns the vertex's position of this bounding box that's the farthest in the given direction. This point is commonly known as the support point in collision detection algorithms.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_get_volume"></div>

[`float`](class_float.md) **get_volume** ( ) const[^const]<div id="class_aabb_method_get_volume"></div>

Returns the bounding box's volume. This is equivalent to `size.x * size.y * size.z`. See also [`has_volume`](#class_aabb_method_has_volume).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_grow"></div>

[`AABB`](class_aabb.md) **grow** ( by: [`float`](class_float.md) ) const[^const]<div id="class_aabb_method_grow"></div>

Returns a copy of this bounding box extended on all sides by the given amount `by`. A negative amount shrinks the box instead.



```gdscript

    var a = AABB(Vector3(4, 4, 4), Vector3(8, 8, 8)).grow(4)
    print(a.position) # Prints (0, 0, 0)
    print(a.size)     # Prints (16, 16, 16)
    
    var b = AABB(Vector3(0, 0, 0), Vector3(8, 4, 2)).grow(2)
    print(b.position) # Prints (-2, -2, -2)
    print(b.size)     # Prints (12, 8, 6)
```

```csharp

    var a = new Aabb(new Vector3(4, 4, 4), new Vector3(8, 8, 8)).Grow(4);
    GD.Print(a.Position); // Prints (0, 0, 0)
    GD.Print(a.Size);     // Prints (16, 16, 16)
    
    var b = new Aabb(new Vector3(0, 0, 0), new Vector3(8, 4, 2)).Grow(2);
    GD.Print(b.Position); // Prints (-2, -2, -2)
    GD.Print(b.Size);     // Prints (12, 8, 6)
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_has_point"></div>

[`bool`](class_bool.md) **has_point** ( point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_aabb_method_has_point"></div>

Returns `true` if the bounding box contains the given `point`. By convention, points exactly on the right, top, and front sides are **not** included.

 **Note:** This method is not reliable for **AABB** with a *negative* [`size`](#class_aabb_property_size). Use [`abs`](#class_aabb_method_abs) first to get a valid bounding box.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_has_surface"></div>

[`bool`](class_bool.md) **has_surface** ( ) const[^const]<div id="class_aabb_method_has_surface"></div>

Returns `true` if this bounding box has a surface or a length, that is, at least one component of [`size`](#class_aabb_property_size) is greater than `0`. Otherwise, returns `false`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_has_volume"></div>

[`bool`](class_bool.md) **has_volume** ( ) const[^const]<div id="class_aabb_method_has_volume"></div>

Returns `true` if this bounding box's width, height, and depth are all positive. See also [`get_volume`](#class_aabb_method_get_volume).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_intersection"></div>

[`AABB`](class_aabb.md) **intersection** ( with: [`AABB`](class_aabb.md) ) const[^const]<div id="class_aabb_method_intersection"></div>

Returns the intersection between this bounding box and `with`. If the boxes do not intersect, returns an empty **AABB**. If the boxes intersect at the edge, returns a flat **AABB** with no volume (see [`has_surface`](#class_aabb_method_has_surface) and [`has_volume`](#class_aabb_method_has_volume)).



```gdscript

    var box1 = AABB(Vector3(0, 0, 0), Vector3(5, 2, 8))
    var box2 = AABB(Vector3(2, 0, 2), Vector3(8, 4, 4))
    
    var intersection = box1.intersection(box2)
    print(intersection.position) # Prints (2, 0, 2)
    print(intersection.size)     # Prints (3, 2, 4)
```

```csharp

    var box1 = new Aabb(new Vector3(0, 0, 0), new Vector3(5, 2, 8));
    var box2 = new Aabb(new Vector3(2, 0, 2), new Vector3(8, 4, 4));
    
    var intersection = box1.Intersection(box2);
    GD.Print(intersection.Position); // Prints (2, 0, 2)
    GD.Print(intersection.Size);     // Prints (3, 2, 4)
```



 **Note:** If you only need to know whether two bounding boxes are intersecting, use [`intersects`](#class_aabb_method_intersects), instead.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_intersects"></div>

[`bool`](class_bool.md) **intersects** ( with: [`AABB`](class_aabb.md) ) const[^const]<div id="class_aabb_method_intersects"></div>

Returns `true` if this bounding box overlaps with the box `with`. The edges of both boxes are *always* excluded.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_intersects_plane"></div>

[`bool`](class_bool.md) **intersects_plane** ( plane: [`Plane`](class_plane.md) ) const[^const]<div id="class_aabb_method_intersects_plane"></div>

Returns `true` if this bounding box is on both sides of the given `plane`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_intersects_ray"></div>

[`Variant`](class_variant.md) **intersects_ray** ( from: [`Vector3`](class_vector3.md), dir: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_aabb_method_intersects_ray"></div>

Returns the first point where this bounding box and the given ray intersect, as a [`Vector3`](class_vector3.md). If no intersection occurs, returns `null`.

The ray begin at `from`, faces `dir` and extends towards infinity.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_intersects_segment"></div>

[`Variant`](class_variant.md) **intersects_segment** ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_aabb_method_intersects_segment"></div>

Returns the first point where this bounding box and the given segment intersect, as a [`Vector3`](class_vector3.md). If no intersection occurs, returns `null`.

The segment begins at `from` and ends at `to`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_is_equal_approx"></div>

[`bool`](class_bool.md) **is_equal_approx** ( aabb: [`AABB`](class_aabb.md) ) const[^const]<div id="class_aabb_method_is_equal_approx"></div>

Returns `true` if this bounding box and `aabb` are approximately equal, by calling [`Vector2.is_equal_approx`](#class_vector2_method_is_equal_approx) on the [`position`](#class_aabb_property_position) and the [`size`](#class_aabb_property_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_is_finite"></div>

[`bool`](class_bool.md) **is_finite** ( ) const[^const]<div id="class_aabb_method_is_finite"></div>

Returns `true` if this bounding box's values are finite, by calling [`Vector2.is_finite`](#class_vector2_method_is_finite) on the [`position`](#class_aabb_property_position) and the [`size`](#class_aabb_property_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_method_merge"></div>

[`AABB`](class_aabb.md) **merge** ( with: [`AABB`](class_aabb.md) ) const[^const]<div id="class_aabb_method_merge"></div>

Returns an **AABB** that encloses both this bounding box and `with` around the edges. See also [`encloses`](#class_aabb_method_encloses).

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_aabb_operator_neq_aabb"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`AABB`](class_aabb.md) ) <div id="class_aabb_operator_neq_aabb"></div>

Returns `true` if the [`position`](#class_aabb_property_position) or [`size`](#class_aabb_property_size) of both bounding boxes are not equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](#class_aabb_method_is_equal_approx) instead, which is more reliable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_operator_mul_transform3d"></div>

[`AABB`](class_aabb.md) **operator *** ( right: [`Transform3D`](class_transform3d.md) ) <div id="class_aabb_operator_mul_transform3d"></div>

Inversely transforms (multiplies) the **AABB** by the given [`Transform3D`](class_transform3d.md) transformation matrix, under the assumption that the transformation basis is orthonormal (i.e. rotation/reflection is fine, scaling/skew is not).

 `aabb * transform` is equivalent to `transform.inverse() * aabb`. See [`Transform3D.inverse`](#class_transform3d_method_inverse).

For transforming by inverse of an affine transformation (e.g. with scaling) `transform.affine_inverse() * aabb` can be used instead. See [`Transform3D.affine_inverse`](#class_transform3d_method_affine_inverse).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_aabb_operator_eq_aabb"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`AABB`](class_aabb.md) ) <div id="class_aabb_operator_eq_aabb"></div>

Returns `true` if both [`position`](#class_aabb_property_position) and [`size`](#class_aabb_property_size) of the bounding boxes are exactly equal, respectively.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](#class_aabb_method_is_equal_approx) instead, which is more reliable.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
