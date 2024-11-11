<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Rect2.xml。 -->

<div id="_class_rect2"></div>

# Rect2

A 2D axis-aligned bounding box using floating-point coordinates.

## 描述

The **Rect2** built-in [`Variant`](class_variant.md) type represents an axis-aligned rectangle in a 2D space. It is defined by its [`position`](class_rect2.md#class_rect2_property_position) and [`size`](class_rect2.md#class_rect2_property_size), which are [`Vector2`](class_vector2.md). It is frequently used for fast overlap tests (see [`intersects`](class_rect2.md#class_rect2_method_intersects)). Although **Rect2** itself is axis-aligned, it can be combined with [`Transform2D`](class_transform2d.md) to represent a rotated or skewed rectangle.

For integer coordinates, use [`Rect2i`](class_rect2i.md). The 3D equivalent to **Rect2** is [`AABB`](class_aabb.md).

 **Note:** Negative values for [`size`](class_rect2.md#class_rect2_property_size) are not supported. With negative size, most **Rect2** methods do not work correctly. Use [`abs`](class_rect2.md#class_rect2_method_abs) to get an equivalent **Rect2** with a non-negative size.

 **Note:** In a boolean context, a **Rect2** evaluates to `false` if both [`position`](class_rect2.md#class_rect2_property_position) and [`size`](class_rect2.md#class_rect2_property_size) are zero (equal to [`Vector2.ZERO`](class_vector2.md#class_vector2_constant_zero)). Otherwise, it always evaluates to `true`.

通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 属性

|||
|:-:|:--|
| [`Vector2`](class_vector2.md) | [`end`](class_rect2.md#class_rect2_property_end)           | ``Vector2(0, 0)`` |
| [`Vector2`](class_vector2.md) | [`position`](class_rect2.md#class_rect2_property_position) | ``Vector2(0, 0)`` |
| [`Vector2`](class_vector2.md) | [`size`](class_rect2.md#class_rect2_property_size)         | ``Vector2(0, 0)`` |

## 构造函数

|||
|:-:|:--|
| [`Rect2`](class_rect2.md) | [`Rect2`](class_rect2.md#class_rect2_constructor_rect2) ( )                                                                                                                                 |
| [`Rect2`](class_rect2.md) | [`Rect2`](class_rect2.md#class_rect2_constructor_rect2) ( from: [`Rect2`](class_rect2.md) )                                                                                                 |
| [`Rect2`](class_rect2.md) | [`Rect2`](class_rect2.md#class_rect2_constructor_rect2) ( from: [`Rect2i`](class_rect2i.md) )                                                                                               |
| [`Rect2`](class_rect2.md) | [`Rect2`](class_rect2.md#class_rect2_constructor_rect2) ( position: [`Vector2`](class_vector2.md), size: [`Vector2`](class_vector2.md) )                                                    |
| [`Rect2`](class_rect2.md) | [`Rect2`](class_rect2.md#class_rect2_constructor_rect2) ( x: [`float`](class_float.md), y: [`float`](class_float.md), width: [`float`](class_float.md), height: [`float`](class_float.md) ) |

## 方法

|||
|:-:|:--|
| [`Rect2`](class_rect2.md)     | [`abs`](class_rect2.md#class_rect2_method_abs) ( ) const[^const]                                                                                                                                                              |
| [`bool`](class_bool.md)       | [`encloses`](class_rect2.md#class_rect2_method_encloses) ( b: [`Rect2`](class_rect2.md) ) const[^const]                                                                                                                       |
| [`Rect2`](class_rect2.md)     | [`expand`](class_rect2.md#class_rect2_method_expand) ( to: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                      |
| [`float`](class_float.md)     | [`get_area`](class_rect2.md#class_rect2_method_get_area) ( ) const[^const]                                                                                                                                                    |
| [`Vector2`](class_vector2.md) | [`get_center`](class_rect2.md#class_rect2_method_get_center) ( ) const[^const]                                                                                                                                                |
| [`Vector2`](class_vector2.md) | [`get_support`](class_rect2.md#class_rect2_method_get_support) ( direction: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                     |
| [`Rect2`](class_rect2.md)     | [`grow`](class_rect2.md#class_rect2_method_grow) ( amount: [`float`](class_float.md) ) const[^const]                                                                                                                          |
| [`Rect2`](class_rect2.md)     | [`grow_individual`](class_rect2.md#class_rect2_method_grow_individual) ( left: [`float`](class_float.md), top: [`float`](class_float.md), right: [`float`](class_float.md), bottom: [`float`](class_float.md) ) const[^const] |
| [`Rect2`](class_rect2.md)     | [`grow_side`](class_rect2.md#class_rect2_method_grow_side) ( side: [`int`](class_int.md), amount: [`float`](class_float.md) ) const[^const]                                                                                   |
| [`bool`](class_bool.md)       | [`has_area`](class_rect2.md#class_rect2_method_has_area) ( ) const[^const]                                                                                                                                                    |
| [`bool`](class_bool.md)       | [`has_point`](class_rect2.md#class_rect2_method_has_point) ( point: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                             |
| [`Rect2`](class_rect2.md)     | [`intersection`](class_rect2.md#class_rect2_method_intersection) ( b: [`Rect2`](class_rect2.md) ) const[^const]                                                                                                               |
| [`bool`](class_bool.md)       | [`intersects`](class_rect2.md#class_rect2_method_intersects) ( b: [`Rect2`](class_rect2.md), include_borders: [`bool`](class_bool.md) = false ) const[^const]                                                                 |
| [`bool`](class_bool.md)       | [`is_equal_approx`](class_rect2.md#class_rect2_method_is_equal_approx) ( rect: [`Rect2`](class_rect2.md) ) const[^const]                                                                                                      |
| [`bool`](class_bool.md)       | [`is_finite`](class_rect2.md#class_rect2_method_is_finite) ( ) const[^const]                                                                                                                                                  |
| [`Rect2`](class_rect2.md)     | [`merge`](class_rect2.md#class_rect2_method_merge) ( b: [`Rect2`](class_rect2.md) ) const[^const]                                                                                                                             |

## 运算符

|||
|:-:|:--|
| [`bool`](class_bool.md)   | [`operator !=`](class_Rect2.md#operator_neq_Rect2) ( right: [`Rect2`](class_rect2.md) )                  |
| [`Rect2`](class_rect2.md) | [`operator *`](class_Rect2.md#operator_mul_Transform2D) ( right: [`Transform2D`](class_transform2d.md) ) |
| [`bool`](class_bool.md)   | [`operator ==`](class_Rect2.md#operator_eq_Rect2) ( right: [`Rect2`](class_rect2.md) )                   |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rect2_property_end"></div>

[`Vector2`](class_vector2.md) **end** = ``Vector2(0, 0)`` <div id="class_rect2_property_end"></div>

The ending point. This is usually the bottom-right corner of the rectangle, and is equivalent to `position + size`. Setting this point affects the [`size`](class_rect2.md#class_rect2_property_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_property_position"></div>

[`Vector2`](class_vector2.md) **position** = ``Vector2(0, 0)`` <div id="class_rect2_property_position"></div>

The origin point. This is usually the top-left corner of the rectangle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_property_size"></div>

[`Vector2`](class_vector2.md) **size** = ``Vector2(0, 0)`` <div id="class_rect2_property_size"></div>

The rectangle's width and height, starting from [`position`](class_rect2.md#class_rect2_property_position). Setting this value also affects the [`end`](class_rect2.md#class_rect2_property_end) point.

 **Note:** It's recommended setting the width and height to non-negative values, as most methods in Godot assume that the [`position`](class_rect2.md#class_rect2_property_position) is the top-left corner, and the [`end`](class_rect2.md#class_rect2_property_end) is the bottom-right corner. To get an equivalent rectangle with non-negative size, use [`abs`](class_rect2.md#class_rect2_method_abs).

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_rect2_constructor_rect2"></div>

[`Rect2`](class_rect2.md) **Rect2** ( )<div id="class_rect2_constructor_rect2"></div>

Constructs a **Rect2** with its [`position`](class_rect2.md#class_rect2_property_position) and [`size`](class_rect2.md#class_rect2_property_size) set to [`Vector2.ZERO`](class_vector2.md#class_vector2_constant_zero).

<!-- rst-class:: classref-item-separator -->

---

[`Rect2`](class_rect2.md) **Rect2** ( from: [`Rect2`](class_rect2.md) )

Constructs a **Rect2** as a copy of the given **Rect2**.

<!-- rst-class:: classref-item-separator -->

---

[`Rect2`](class_rect2.md) **Rect2** ( from: [`Rect2i`](class_rect2i.md) )

Constructs a **Rect2** from a [`Rect2i`](class_rect2i.md).

<!-- rst-class:: classref-item-separator -->

---

[`Rect2`](class_rect2.md) **Rect2** ( position: [`Vector2`](class_vector2.md), size: [`Vector2`](class_vector2.md) )

Constructs a **Rect2** by `position` and `size`.

<!-- rst-class:: classref-item-separator -->

---

[`Rect2`](class_rect2.md) **Rect2** ( x: [`float`](class_float.md), y: [`float`](class_float.md), width: [`float`](class_float.md), height: [`float`](class_float.md) )

Constructs a **Rect2** by setting its [`position`](class_rect2.md#class_rect2_property_position) to (`x`, `y`), and its [`size`](class_rect2.md#class_rect2_property_size) to (`width`, `height`).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_rect2_method_abs"></div>

[`Rect2`](class_rect2.md) **abs** ( ) const[^const]<div id="class_rect2_method_abs"></div>

Returns a **Rect2** equivalent to this rectangle, with its width and height modified to be non-negative values, and with its [`position`](class_rect2.md#class_rect2_property_position) being the top-left corner of the rectangle.



```gdscript

    var rect = Rect2(25, 25, -100, -50)
    var absolute = rect.abs() # absolute is Rect2(-75, -25, 100, 50)
```

```csharp

    var rect = new Rect2(25, 25, -100, -50);
    var absolute = rect.Abs(); // absolute is Rect2(-75, -25, 100, 50)
```



 **Note:** It's recommended to use this method when [`size`](class_rect2.md#class_rect2_property_size) is negative, as most other methods in Godot assume that the [`position`](class_rect2.md#class_rect2_property_position) is the top-left corner, and the [`end`](class_rect2.md#class_rect2_property_end) is the bottom-right corner.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_method_encloses"></div>

[`bool`](class_bool.md) **encloses** ( b: [`Rect2`](class_rect2.md) ) const[^const]<div id="class_rect2_method_encloses"></div>

Returns `true` if this rectangle *completely* encloses the `b` rectangle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_method_expand"></div>

[`Rect2`](class_rect2.md) **expand** ( to: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_rect2_method_expand"></div>

Returns a copy of this rectangle expanded to align the edges with the given `to` point, if necessary.



```gdscript

    var rect = Rect2(0, 0, 5, 2)
    
    rect = rect.expand(Vector2(10, 0)) # rect is Rect2(0, 0, 10, 2)
    rect = rect.expand(Vector2(-5, 5)) # rect is Rect2(-5, 0, 15, 5)
```

```csharp

    var rect = new Rect2(0, 0, 5, 2);
    
    rect = rect.Expand(new Vector2(10, 0)); // rect is Rect2(0, 0, 10, 2)
    rect = rect.Expand(new Vector2(-5, 5)); // rect is Rect2(-5, 0, 15, 5)
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_method_get_area"></div>

[`float`](class_float.md) **get_area** ( ) const[^const]<div id="class_rect2_method_get_area"></div>

Returns the rectangle's area. This is equivalent to `size.x * size.y`. See also [`has_area`](class_rect2.md#class_rect2_method_has_area).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_method_get_center"></div>

[`Vector2`](class_vector2.md) **get_center** ( ) const[^const]<div id="class_rect2_method_get_center"></div>

Returns the center point of the rectangle. This is the same as `position + (size / 2.0)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_method_get_support"></div>

[`Vector2`](class_vector2.md) **get_support** ( direction: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_rect2_method_get_support"></div>

Returns the vertex's position of this rect that's the farthest in the given direction. This point is commonly known as the support point in collision detection algorithms.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_method_grow"></div>

[`Rect2`](class_rect2.md) **grow** ( amount: [`float`](class_float.md) ) const[^const]<div id="class_rect2_method_grow"></div>

Returns a copy of this rectangle extended on all sides by the given `amount`. A negative `amount` shrinks the rectangle instead. See also [`grow_individual`](class_rect2.md#class_rect2_method_grow_individual) and [`grow_side`](class_rect2.md#class_rect2_method_grow_side).



```gdscript

    var a = Rect2(4, 4, 8, 8).grow(4) # a is Rect2(0, 0, 16, 16)
    var b = Rect2(0, 0, 8, 4).grow(2) # b is Rect2(-2, -2, 12, 8)
```

```csharp

    var a = new Rect2(4, 4, 8, 8).Grow(4); // a is Rect2(0, 0, 16, 16)
    var b = new Rect2(0, 0, 8, 4).Grow(2); // b is Rect2(-2, -2, 12, 8)
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_method_grow_individual"></div>

[`Rect2`](class_rect2.md) **grow_individual** ( left: [`float`](class_float.md), top: [`float`](class_float.md), right: [`float`](class_float.md), bottom: [`float`](class_float.md) ) const[^const]<div id="class_rect2_method_grow_individual"></div>

Returns a copy of this rectangle with its `left`, `top`, `right`, and `bottom` sides extended by the given amounts. Negative values shrink the sides, instead. See also [`grow`](class_rect2.md#class_rect2_method_grow) and [`grow_side`](class_rect2.md#class_rect2_method_grow_side).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_method_grow_side"></div>

[`Rect2`](class_rect2.md) **grow_side** ( side: [`int`](class_int.md), amount: [`float`](class_float.md) ) const[^const]<div id="class_rect2_method_grow_side"></div>

Returns a copy of this rectangle with its `side` extended by the given `amount` (see [Side](#enum_@globalscope_side) constants). A negative `amount` shrinks the rectangle, instead. See also [`grow`](class_rect2.md#class_rect2_method_grow) and [`grow_individual`](class_rect2.md#class_rect2_method_grow_individual).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_method_has_area"></div>

[`bool`](class_bool.md) **has_area** ( ) const[^const]<div id="class_rect2_method_has_area"></div>

Returns `true` if this rectangle has positive width and height. See also [`get_area`](class_rect2.md#class_rect2_method_get_area).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_method_has_point"></div>

[`bool`](class_bool.md) **has_point** ( point: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_rect2_method_has_point"></div>

Returns `true` if the rectangle contains the given `point`. By convention, points on the right and bottom edges are **not** included.

 **Note:** This method is not reliable for **Rect2** with a *negative* [`size`](class_rect2.md#class_rect2_property_size). Use [`abs`](class_rect2.md#class_rect2_method_abs) first to get a valid rectangle.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_method_intersection"></div>

[`Rect2`](class_rect2.md) **intersection** ( b: [`Rect2`](class_rect2.md) ) const[^const]<div id="class_rect2_method_intersection"></div>

Returns the intersection between this rectangle and `b`. If the rectangles do not intersect, returns an empty **Rect2**.



```gdscript

    var rect1 = Rect2(0, 0, 5, 10)
    var rect2 = Rect2(2, 0, 8, 4)
    
    var a = rect1.intersection(rect2) # a is Rect2(2, 0, 3, 4)
```

```csharp

    var rect1 = new Rect2(0, 0, 5, 10);
    var rect2 = new Rect2(2, 0, 8, 4);
    
    var a = rect1.Intersection(rect2); // a is Rect2(2, 0, 3, 4)
```



 **Note:** If you only need to know whether two rectangles are overlapping, use [`intersects`](class_rect2.md#class_rect2_method_intersects), instead.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_method_intersects"></div>

[`bool`](class_bool.md) **intersects** ( b: [`Rect2`](class_rect2.md), include_borders: [`bool`](class_bool.md) = false ) const[^const]<div id="class_rect2_method_intersects"></div>

Returns `true` if this rectangle overlaps with the `b` rectangle. The edges of both rectangles are excluded, unless `include_borders` is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_method_is_equal_approx"></div>

[`bool`](class_bool.md) **is_equal_approx** ( rect: [`Rect2`](class_rect2.md) ) const[^const]<div id="class_rect2_method_is_equal_approx"></div>

Returns `true` if this rectangle and `rect` are approximately equal, by calling [`Vector2.is_equal_approx`](class_vector2.md#class_vector2_method_is_equal_approx) on the [`position`](class_rect2.md#class_rect2_property_position) and the [`size`](class_rect2.md#class_rect2_property_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_method_is_finite"></div>

[`bool`](class_bool.md) **is_finite** ( ) const[^const]<div id="class_rect2_method_is_finite"></div>

Returns `true` if this rectangle's values are finite, by calling [`Vector2.is_finite`](class_vector2.md#class_vector2_method_is_finite) on the [`position`](class_rect2.md#class_rect2_property_position) and the [`size`](class_rect2.md#class_rect2_property_size).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_method_merge"></div>

[`Rect2`](class_rect2.md) **merge** ( b: [`Rect2`](class_rect2.md) ) const[^const]<div id="class_rect2_method_merge"></div>

Returns a **Rect2** that encloses both this rectangle and `b` around the edges. See also [`encloses`](class_rect2.md#class_rect2_method_encloses).

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_rect2_operator_neq_rect2"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`Rect2`](class_rect2.md) ) <div id="class_rect2_operator_neq_rect2"></div>

Returns `true` if the [`position`](class_rect2.md#class_rect2_property_position) or [`size`](class_rect2.md#class_rect2_property_size) of both rectangles are not equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](class_rect2.md#class_rect2_method_is_equal_approx) instead, which is more reliable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_operator_mul_transform2d"></div>

[`Rect2`](class_rect2.md) **operator *** ( right: [`Transform2D`](class_transform2d.md) ) <div id="class_rect2_operator_mul_transform2d"></div>

Inversely transforms (multiplies) the **Rect2** by the given [`Transform2D`](class_transform2d.md) transformation matrix, under the assumption that the transformation basis is orthonormal (i.e. rotation/reflection is fine, scaling/skew is not).

 `rect * transform` is equivalent to `transform.inverse() * rect`. See [`Transform2D.inverse`](class_transform2d.md#class_transform2d_method_inverse).

For transforming by inverse of an affine transformation (e.g. with scaling) `transform.affine_inverse() * rect` can be used instead. See [`Transform2D.affine_inverse`](class_transform2d.md#class_transform2d_method_affine_inverse).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rect2_operator_eq_rect2"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`Rect2`](class_rect2.md) ) <div id="class_rect2_operator_eq_rect2"></div>

Returns `true` if both [`position`](class_rect2.md#class_rect2_property_position) and [`size`](class_rect2.md#class_rect2_property_size) of the rectangles are exactly equal, respectively.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](class_rect2.md#class_rect2_method_is_equal_approx) instead, which is more reliable.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
