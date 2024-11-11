<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Plane.xml。 -->

<div id="_class_plane"></div>

# Plane

A plane in Hessian normal form.

## 描述

Represents a normalized plane equation. [`normal`](class_plane.md#class_plane_property_normal) is the normal of the plane (a, b, c normalized), and [`d`](class_plane.md#class_plane_property_d) is the distance from the origin to the plane (in the direction of "normal"). "Over" or "Above" the plane is considered the side of the plane towards where the normal is pointing.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md)     | [`d`](class_plane.md#class_plane_property_d)           | ``0.0``              |
| [`Vector3`](class_vector3.md) | [`normal`](class_plane.md#class_plane_property_normal) | ``Vector3(0, 0, 0)`` |
| [`float`](class_float.md)     | [`x`](class_plane.md#class_plane_property_x)           | ``0.0``              |
| [`float`](class_float.md)     | [`y`](class_plane.md#class_plane_property_y)           | ``0.0``              |
| [`float`](class_float.md)     | [`z`](class_plane.md#class_plane_property_z)           | ``0.0``              |

## 构造函数

|||
|:-:|:--|
| [`Plane`](class_plane.md) | [`Plane`](class_plane.md#class_plane_constructor_plane) ( )                                                                                                                        |
| [`Plane`](class_plane.md) | [`Plane`](class_plane.md#class_plane_constructor_plane) ( from: [`Plane`](class_plane.md) )                                                                                        |
| [`Plane`](class_plane.md) | [`Plane`](class_plane.md#class_plane_constructor_plane) ( a: [`float`](class_float.md), b: [`float`](class_float.md), c: [`float`](class_float.md), d: [`float`](class_float.md) ) |
| [`Plane`](class_plane.md) | [`Plane`](class_plane.md#class_plane_constructor_plane) ( normal: [`Vector3`](class_vector3.md) )                                                                                  |
| [`Plane`](class_plane.md) | [`Plane`](class_plane.md#class_plane_constructor_plane) ( normal: [`Vector3`](class_vector3.md), d: [`float`](class_float.md) )                                                    |
| [`Plane`](class_plane.md) | [`Plane`](class_plane.md#class_plane_constructor_plane) ( normal: [`Vector3`](class_vector3.md), point: [`Vector3`](class_vector3.md) )                                            |
| [`Plane`](class_plane.md) | [`Plane`](class_plane.md#class_plane_constructor_plane) ( point1: [`Vector3`](class_vector3.md), point2: [`Vector3`](class_vector3.md), point3: [`Vector3`](class_vector3.md) )    |

## 方法

|||
|:-:|:--|
| [`float`](class_float.md)     | [`distance_to`](class_plane.md#class_plane_method_distance_to) ( point: [`Vector3`](class_vector3.md) ) const[^const]                                                 |
| [`Vector3`](class_vector3.md) | [`get_center`](class_plane.md#class_plane_method_get_center) ( ) const[^const]                                                                                        |
| [`bool`](class_bool.md)       | [`has_point`](class_plane.md#class_plane_method_has_point) ( point: [`Vector3`](class_vector3.md), tolerance: [`float`](class_float.md) = 1e-05 ) const[^const]       |
| [`Variant`](class_variant.md) | [`intersect_3`](class_plane.md#class_plane_method_intersect_3) ( b: [`Plane`](class_plane.md), c: [`Plane`](class_plane.md) ) const[^const]                           |
| [`Variant`](class_variant.md) | [`intersects_ray`](class_plane.md#class_plane_method_intersects_ray) ( from: [`Vector3`](class_vector3.md), dir: [`Vector3`](class_vector3.md) ) const[^const]        |
| [`Variant`](class_variant.md) | [`intersects_segment`](class_plane.md#class_plane_method_intersects_segment) ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md) ) const[^const] |
| [`bool`](class_bool.md)       | [`is_equal_approx`](class_plane.md#class_plane_method_is_equal_approx) ( to_plane: [`Plane`](class_plane.md) ) const[^const]                                          |
| [`bool`](class_bool.md)       | [`is_finite`](class_plane.md#class_plane_method_is_finite) ( ) const[^const]                                                                                          |
| [`bool`](class_bool.md)       | [`is_point_over`](class_plane.md#class_plane_method_is_point_over) ( point: [`Vector3`](class_vector3.md) ) const[^const]                                             |
| [`Plane`](class_plane.md)     | [`normalized`](class_plane.md#class_plane_method_normalized) ( ) const[^const]                                                                                        |
| [`Vector3`](class_vector3.md) | [`project`](class_plane.md#class_plane_method_project) ( point: [`Vector3`](class_vector3.md) ) const[^const]                                                         |

## 运算符

|||
|:-:|:--|
| [`bool`](class_bool.md)   | [`operator !=`](class_Plane.md#operator_neq_Plane) ( right: [`Plane`](class_plane.md) )                  |
| [`Plane`](class_plane.md) | [`operator *`](class_Plane.md#operator_mul_Transform3D) ( right: [`Transform3D`](class_transform3d.md) ) |
| [`bool`](class_bool.md)   | [`operator ==`](class_Plane.md#operator_eq_Plane) ( right: [`Plane`](class_plane.md) )                   |
| [`Plane`](class_plane.md) | [`operator unary+`](class_Plane.md#operator_unplus) ( )                                                  |
| [`Plane`](class_plane.md) | [`operator unary-`](class_Plane.md#operator_unminus) ( )                                                 |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_plane_constant_plane_yz"></div>

**PLANE_YZ** = ``Plane(1, 0, 0, 0)`` <div id="class_plane_constant_plane_yz"></div>

A plane that extends in the Y and Z axes (normal vector points +X).

<div id="_class_plane_constant_plane_xz"></div>

**PLANE_XZ** = ``Plane(0, 1, 0, 0)`` <div id="class_plane_constant_plane_xz"></div>

A plane that extends in the X and Z axes (normal vector points +Y).

<div id="_class_plane_constant_plane_xy"></div>

**PLANE_XY** = ``Plane(0, 0, 1, 0)`` <div id="class_plane_constant_plane_xy"></div>

A plane that extends in the X and Y axes (normal vector points +Z).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_plane_property_d"></div>

[`float`](class_float.md) **d** = ``0.0`` <div id="class_plane_property_d"></div>

The distance from the origin to the plane, expressed in terms of [`normal`](class_plane.md#class_plane_property_normal) (according to its direction and magnitude). Actual absolute distance from the origin to the plane can be calculated as `abs(d) / normal.length()` (if [`normal`](class_plane.md#class_plane_property_normal) has zero length then this **Plane** does not represent a valid plane).

In the scalar equation of the plane `ax + by + cz = d`, this is `d`, while the `(a, b, c)` coordinates are represented by the [`normal`](class_plane.md#class_plane_property_normal) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_property_normal"></div>

[`Vector3`](class_vector3.md) **normal** = ``Vector3(0, 0, 0)`` <div id="class_plane_property_normal"></div>

The normal of the plane, typically a unit vector. Shouldn't be a zero vector as **Plane** with such [`normal`](class_plane.md#class_plane_property_normal) does not represent a valid plane.

In the scalar equation of the plane `ax + by + cz = d`, this is the vector `(a, b, c)`, where `d` is the [`d`](class_plane.md#class_plane_property_d) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_property_x"></div>

[`float`](class_float.md) **x** = ``0.0`` <div id="class_plane_property_x"></div>

The X component of the plane's [`normal`](class_plane.md#class_plane_property_normal) vector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_property_y"></div>

[`float`](class_float.md) **y** = ``0.0`` <div id="class_plane_property_y"></div>

The Y component of the plane's [`normal`](class_plane.md#class_plane_property_normal) vector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_property_z"></div>

[`float`](class_float.md) **z** = ``0.0`` <div id="class_plane_property_z"></div>

The Z component of the plane's [`normal`](class_plane.md#class_plane_property_normal) vector.

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_plane_constructor_plane"></div>

[`Plane`](class_plane.md) **Plane** ( )<div id="class_plane_constructor_plane"></div>

Constructs a default-initialized **Plane** with all components set to `0`.

<!-- rst-class:: classref-item-separator -->

---

[`Plane`](class_plane.md) **Plane** ( from: [`Plane`](class_plane.md) )

Constructs a **Plane** as a copy of the given **Plane**.

<!-- rst-class:: classref-item-separator -->

---

[`Plane`](class_plane.md) **Plane** ( a: [`float`](class_float.md), b: [`float`](class_float.md), c: [`float`](class_float.md), d: [`float`](class_float.md) )

Creates a plane from the four parameters. The three components of the resulting plane's [`normal`](class_plane.md#class_plane_property_normal) are `a`, `b` and `c`, and the plane has a distance of `d` from the origin.

<!-- rst-class:: classref-item-separator -->

---

[`Plane`](class_plane.md) **Plane** ( normal: [`Vector3`](class_vector3.md) )

Creates a plane from the normal vector. The plane will intersect the origin.

The `normal` of the plane must be a unit vector.

<!-- rst-class:: classref-item-separator -->

---

[`Plane`](class_plane.md) **Plane** ( normal: [`Vector3`](class_vector3.md), d: [`float`](class_float.md) )

Creates a plane from the normal vector and the plane's distance from the origin.

The `normal` of the plane must be a unit vector.

<!-- rst-class:: classref-item-separator -->

---

[`Plane`](class_plane.md) **Plane** ( normal: [`Vector3`](class_vector3.md), point: [`Vector3`](class_vector3.md) )

Creates a plane from the normal vector and a point on the plane.

The `normal` of the plane must be a unit vector.

<!-- rst-class:: classref-item-separator -->

---

[`Plane`](class_plane.md) **Plane** ( point1: [`Vector3`](class_vector3.md), point2: [`Vector3`](class_vector3.md), point3: [`Vector3`](class_vector3.md) )

Creates a plane from the three points, given in clockwise order.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_plane_method_distance_to"></div>

[`float`](class_float.md) **distance_to** ( point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_plane_method_distance_to"></div>

Returns the shortest distance from the plane to the position `point`. If the point is above the plane, the distance will be positive. If below, the distance will be negative.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_method_get_center"></div>

[`Vector3`](class_vector3.md) **get_center** ( ) const[^const]<div id="class_plane_method_get_center"></div>

Returns the center of the plane.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_method_has_point"></div>

[`bool`](class_bool.md) **has_point** ( point: [`Vector3`](class_vector3.md), tolerance: [`float`](class_float.md) = 1e-05 ) const[^const]<div id="class_plane_method_has_point"></div>

Returns `true` if `point` is inside the plane. Comparison uses a custom minimum `tolerance` threshold.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_method_intersect_3"></div>

[`Variant`](class_variant.md) **intersect_3** ( b: [`Plane`](class_plane.md), c: [`Plane`](class_plane.md) ) const[^const]<div id="class_plane_method_intersect_3"></div>

Returns the intersection point of the three planes `b`, `c` and this plane. If no intersection is found, `null` is returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_method_intersects_ray"></div>

[`Variant`](class_variant.md) **intersects_ray** ( from: [`Vector3`](class_vector3.md), dir: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_plane_method_intersects_ray"></div>

Returns the intersection point of a ray consisting of the position `from` and the direction normal `dir` with this plane. If no intersection is found, `null` is returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_method_intersects_segment"></div>

[`Variant`](class_variant.md) **intersects_segment** ( from: [`Vector3`](class_vector3.md), to: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_plane_method_intersects_segment"></div>

Returns the intersection point of a segment from position `from` to position `to` with this plane. If no intersection is found, `null` is returned.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_method_is_equal_approx"></div>

[`bool`](class_bool.md) **is_equal_approx** ( to_plane: [`Plane`](class_plane.md) ) const[^const]<div id="class_plane_method_is_equal_approx"></div>

Returns `true` if this plane and `to_plane` are approximately equal, by running [`@GlobalScope.is_equal_approx`](class_@globalscope.md#class_@globalscope_method_is_equal_approx) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_method_is_finite"></div>

[`bool`](class_bool.md) **is_finite** ( ) const[^const]<div id="class_plane_method_is_finite"></div>

Returns `true` if this plane is finite, by calling [`@GlobalScope.is_finite`](class_@globalscope.md#class_@globalscope_method_is_finite) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_method_is_point_over"></div>

[`bool`](class_bool.md) **is_point_over** ( point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_plane_method_is_point_over"></div>

Returns `true` if `point` is located above the plane.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_method_normalized"></div>

[`Plane`](class_plane.md) **normalized** ( ) const[^const]<div id="class_plane_method_normalized"></div>

Returns a copy of the plane, with normalized [`normal`](class_plane.md#class_plane_property_normal) (so it's a unit vector). Returns `Plane(0, 0, 0, 0)` if [`normal`](class_plane.md#class_plane_property_normal) can't be normalized (it has zero length).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_method_project"></div>

[`Vector3`](class_vector3.md) **project** ( point: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_plane_method_project"></div>

Returns the orthogonal projection of `point` into a point in the plane.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_plane_operator_neq_plane"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`Plane`](class_plane.md) ) <div id="class_plane_operator_neq_plane"></div>

Returns `true` if the planes are not equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](class_plane.md#class_plane_method_is_equal_approx) instead, which is more reliable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_operator_mul_transform3d"></div>

[`Plane`](class_plane.md) **operator *** ( right: [`Transform3D`](class_transform3d.md) ) <div id="class_plane_operator_mul_transform3d"></div>

Inversely transforms (multiplies) the **Plane** by the given [`Transform3D`](class_transform3d.md) transformation matrix.

 `plane * transform` is equivalent to `transform.affine_inverse() * plane`. See [`Transform3D.affine_inverse`](class_transform3d.md#class_transform3d_method_affine_inverse).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_operator_eq_plane"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`Plane`](class_plane.md) ) <div id="class_plane_operator_eq_plane"></div>

Returns `true` if the planes are exactly equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](class_plane.md#class_plane_method_is_equal_approx) instead, which is more reliable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_operator_unplus"></div>

[`Plane`](class_plane.md) **operator unary+** ( ) <div id="class_plane_operator_unplus"></div>

Returns the same value as if the `+` was not there. Unary `+` does nothing, but sometimes it can make your code more readable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_plane_operator_unminus"></div>

[`Plane`](class_plane.md) **operator unary-** ( ) <div id="class_plane_operator_unminus"></div>

Returns the negative value of the **Plane**. This is the same as writing `Plane(-p.normal, -p.d)`. This operation flips the direction of the normal vector and also flips the distance value, resulting in a Plane that is in the same place, but facing the opposite direction.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
