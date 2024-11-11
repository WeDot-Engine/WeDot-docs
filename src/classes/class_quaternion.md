<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Quaternion.xml。 -->

<div id="_class_quaternion"></div>

# Quaternion

A unit quaternion used for representing 3D rotations.

## 描述

The **Quaternion** built-in [`Variant`](class_variant.md) type is a 4D data structure that represents rotation in the form of a [*Hamilton convention quaternion*](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation). Compared to the [`Basis`](class_basis.md) type which can store both rotation and scale, quaternions can *only* store rotation.

A **Quaternion** is composed by 4 floating-point components: [`w`](class_quaternion.md#class_quaternion_property_w), [`x`](class_quaternion.md#class_quaternion_property_x), [`y`](class_quaternion.md#class_quaternion_property_y), and [`z`](class_quaternion.md#class_quaternion_property_z). These components are very compact in memory, and because of this some operations are more efficient and less likely to cause floating-point errors. Methods such as [`get_angle`](class_quaternion.md#class_quaternion_method_get_angle), [`get_axis`](class_quaternion.md#class_quaternion_method_get_axis), and [`slerp`](class_quaternion.md#class_quaternion_method_slerp) are faster than their [`Basis`](class_basis.md) counterparts.

For a great introduction to quaternions, see [*this video by 3Blue1Brown*](https://www.youtube.com/watch?v=d4EgbgTm0Bg). You do not need to know the math behind quaternions, as Godot provides several helper methods that handle it for you. These include [`slerp`](class_quaternion.md#class_quaternion_method_slerp) and [`spherical_cubic_interpolate`](class_quaternion.md#class_quaternion_method_spherical_cubic_interpolate), as well as the `*` operator.

 **Note:** Quaternions must be normalized before being used for rotation (see [`normalized`](class_quaternion.md#class_quaternion_method_normalized)).

 **Note:** Similarly to [`Vector2`](class_vector2.md) and [`Vector3`](class_vector3.md), the components of a quaternion use 32-bit precision by default, unlike [`float`](class_float.md) which is always 64-bit. If double precision is needed, compile the engine with the option `precision=double`.

通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`w`](class_quaternion.md#class_quaternion_property_w) | ``1.0`` |
| [`float`](class_float.md) | [`x`](class_quaternion.md#class_quaternion_property_x) | ``0.0`` |
| [`float`](class_float.md) | [`y`](class_quaternion.md#class_quaternion_property_y) | ``0.0`` |
| [`float`](class_float.md) | [`z`](class_quaternion.md#class_quaternion_property_z) | ``0.0`` |

## 构造函数

|||
|:-:|:--|
| [`Quaternion`](class_quaternion.md) | [`Quaternion`](class_quaternion.md#class_quaternion_constructor_quaternion) ( )                                                                                                                        |
| [`Quaternion`](class_quaternion.md) | [`Quaternion`](class_quaternion.md#class_quaternion_constructor_quaternion) ( from: [`Quaternion`](class_quaternion.md) )                                                                              |
| [`Quaternion`](class_quaternion.md) | [`Quaternion`](class_quaternion.md#class_quaternion_constructor_quaternion) ( arc_from: [`Vector3`](class_vector3.md), arc_to: [`Vector3`](class_vector3.md) )                                         |
| [`Quaternion`](class_quaternion.md) | [`Quaternion`](class_quaternion.md#class_quaternion_constructor_quaternion) ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) )                                                  |
| [`Quaternion`](class_quaternion.md) | [`Quaternion`](class_quaternion.md#class_quaternion_constructor_quaternion) ( from: [`Basis`](class_basis.md) )                                                                                        |
| [`Quaternion`](class_quaternion.md) | [`Quaternion`](class_quaternion.md#class_quaternion_constructor_quaternion) ( x: [`float`](class_float.md), y: [`float`](class_float.md), z: [`float`](class_float.md), w: [`float`](class_float.md) ) |

## 方法

|||
|:-:|:--|
| [`float`](class_float.md)           | [`angle_to`](class_quaternion.md#class_quaternion_method_angle_to) ( to: [`Quaternion`](class_quaternion.md) ) const[^const]                                                                                                                                                                                                                                                                                           |
| [`float`](class_float.md)           | [`dot`](class_quaternion.md#class_quaternion_method_dot) ( with: [`Quaternion`](class_quaternion.md) ) const[^const]                                                                                                                                                                                                                                                                                                   |
| [`Quaternion`](class_quaternion.md) | [`exp`](class_quaternion.md#class_quaternion_method_exp) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                             |
| [`Quaternion`](class_quaternion.md) | [`from_euler`](class_quaternion.md#class_quaternion_method_from_euler) ( euler: [`Vector3`](class_vector3.md) ) static[^static]                                                                                                                                                                                                                                                                                        |
| [`float`](class_float.md)           | [`get_angle`](class_quaternion.md#class_quaternion_method_get_angle) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                 |
| [`Vector3`](class_vector3.md)       | [`get_axis`](class_quaternion.md#class_quaternion_method_get_axis) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                   |
| [`Vector3`](class_vector3.md)       | [`get_euler`](class_quaternion.md#class_quaternion_method_get_euler) ( order: [`int`](class_int.md) = 2 ) const[^const]                                                                                                                                                                                                                                                                                                |
| [`Quaternion`](class_quaternion.md) | [`inverse`](class_quaternion.md#class_quaternion_method_inverse) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                     |
| [`bool`](class_bool.md)             | [`is_equal_approx`](class_quaternion.md#class_quaternion_method_is_equal_approx) ( to: [`Quaternion`](class_quaternion.md) ) const[^const]                                                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)             | [`is_finite`](class_quaternion.md#class_quaternion_method_is_finite) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                 |
| [`bool`](class_bool.md)             | [`is_normalized`](class_quaternion.md#class_quaternion_method_is_normalized) ( ) const[^const]                                                                                                                                                                                                                                                                                                                         |
| [`float`](class_float.md)           | [`length`](class_quaternion.md#class_quaternion_method_length) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                       |
| [`float`](class_float.md)           | [`length_squared`](class_quaternion.md#class_quaternion_method_length_squared) ( ) const[^const]                                                                                                                                                                                                                                                                                                                       |
| [`Quaternion`](class_quaternion.md) | [`log`](class_quaternion.md#class_quaternion_method_log) ( ) const[^const]                                                                                                                                                                                                                                                                                                                                             |
| [`Quaternion`](class_quaternion.md) | [`normalized`](class_quaternion.md#class_quaternion_method_normalized) ( ) const[^const]                                                                                                                                                                                                                                                                                                                               |
| [`Quaternion`](class_quaternion.md) | [`slerp`](class_quaternion.md#class_quaternion_method_slerp) ( to: [`Quaternion`](class_quaternion.md), weight: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                                              |
| [`Quaternion`](class_quaternion.md) | [`slerpni`](class_quaternion.md#class_quaternion_method_slerpni) ( to: [`Quaternion`](class_quaternion.md), weight: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                                          |
| [`Quaternion`](class_quaternion.md) | [`spherical_cubic_interpolate`](class_quaternion.md#class_quaternion_method_spherical_cubic_interpolate) ( b: [`Quaternion`](class_quaternion.md), pre_a: [`Quaternion`](class_quaternion.md), post_b: [`Quaternion`](class_quaternion.md), weight: [`float`](class_float.md) ) const[^const]                                                                                                                          |
| [`Quaternion`](class_quaternion.md) | [`spherical_cubic_interpolate_in_time`](class_quaternion.md#class_quaternion_method_spherical_cubic_interpolate_in_time) ( b: [`Quaternion`](class_quaternion.md), pre_a: [`Quaternion`](class_quaternion.md), post_b: [`Quaternion`](class_quaternion.md), weight: [`float`](class_float.md), b_t: [`float`](class_float.md), pre_a_t: [`float`](class_float.md), post_b_t: [`float`](class_float.md) ) const[^const] |

## 运算符

|||
|:-:|:--|
| [`bool`](class_bool.md)             | [`operator !=`](class_Quaternion.md#operator_neq_Quaternion) ( right: [`Quaternion`](class_quaternion.md) ) |
| [`Quaternion`](class_quaternion.md) | [`operator *`](class_Quaternion.md#operator_mul_Quaternion) ( right: [`Quaternion`](class_quaternion.md) )  |
| [`Vector3`](class_vector3.md)       | [`operator *`](class_Quaternion.md#operator_mul_Vector3) ( right: [`Vector3`](class_vector3.md) )           |
| [`Quaternion`](class_quaternion.md) | [`operator *`](class_Quaternion.md#operator_mul_float) ( right: [`float`](class_float.md) )                 |
| [`Quaternion`](class_quaternion.md) | [`operator *`](class_Quaternion.md#operator_mul_int) ( right: [`int`](class_int.md) )                       |
| [`Quaternion`](class_quaternion.md) | [`operator +`](class_Quaternion.md#operator_sum_Quaternion) ( right: [`Quaternion`](class_quaternion.md) )  |
| [`Quaternion`](class_quaternion.md) | [`operator -`](class_Quaternion.md#operator_dif_Quaternion) ( right: [`Quaternion`](class_quaternion.md) )  |
| [`Quaternion`](class_quaternion.md) | [`operator /`](class_Quaternion.md#operator_div_float) ( right: [`float`](class_float.md) )                 |
| [`Quaternion`](class_quaternion.md) | [`operator /`](class_Quaternion.md#operator_div_int) ( right: [`int`](class_int.md) )                       |
| [`bool`](class_bool.md)             | [`operator ==`](class_Quaternion.md#operator_eq_Quaternion) ( right: [`Quaternion`](class_quaternion.md) )  |
| [`float`](class_float.md)           | [`operator []`](class_Quaternion.md#operator_idx_int) ( index: [`int`](class_int.md) )                      |
| [`Quaternion`](class_quaternion.md) | [`operator unary+`](class_Quaternion.md#operator_unplus) ( )                                                |
| [`Quaternion`](class_quaternion.md) | [`operator unary-`](class_Quaternion.md#operator_unminus) ( )                                               |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_quaternion_constant_identity"></div>

**IDENTITY** = ``Quaternion(0, 0, 0, 1)`` <div id="class_quaternion_constant_identity"></div>

The identity quaternion, representing no rotation. This has the same rotation as [`Basis.IDENTITY`](class_basis.md#class_basis_constant_identity).

If a [`Vector3`](class_vector3.md) is rotated (multiplied) by this quaternion, it does not change.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_quaternion_property_w"></div>

[`float`](class_float.md) **w** = ``1.0`` <div id="class_quaternion_property_w"></div>

W component of the quaternion. This is the "real" part.

 **Note:** Quaternion components should usually not be manipulated directly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_property_x"></div>

[`float`](class_float.md) **x** = ``0.0`` <div id="class_quaternion_property_x"></div>

X component of the quaternion. This is the value along the "imaginary" `i` axis.

 **Note:** Quaternion components should usually not be manipulated directly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_property_y"></div>

[`float`](class_float.md) **y** = ``0.0`` <div id="class_quaternion_property_y"></div>

Y component of the quaternion. This is the value along the "imaginary" `j` axis.

 **Note:** Quaternion components should usually not be manipulated directly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_property_z"></div>

[`float`](class_float.md) **z** = ``0.0`` <div id="class_quaternion_property_z"></div>

Z component of the quaternion. This is the value along the "imaginary" `k` axis.

 **Note:** Quaternion components should usually not be manipulated directly.

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_quaternion_constructor_quaternion"></div>

[`Quaternion`](class_quaternion.md) **Quaternion** ( )<div id="class_quaternion_constructor_quaternion"></div>

Constructs a **Quaternion** identical to the [`IDENTITY`](class_quaternion.md#class_quaternion_constant_identity).

<!-- rst-class:: classref-item-separator -->

---

[`Quaternion`](class_quaternion.md) **Quaternion** ( from: [`Quaternion`](class_quaternion.md) )

Constructs a **Quaternion** as a copy of the given **Quaternion**.

<!-- rst-class:: classref-item-separator -->

---

[`Quaternion`](class_quaternion.md) **Quaternion** ( arc_from: [`Vector3`](class_vector3.md), arc_to: [`Vector3`](class_vector3.md) )

Constructs a **Quaternion** representing the shortest arc between `arc_from` and `arc_to`. These can be imagined as two points intersecting a sphere's surface, with a radius of `1.0`.

<!-- rst-class:: classref-item-separator -->

---

[`Quaternion`](class_quaternion.md) **Quaternion** ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) )

Constructs a **Quaternion** representing rotation around the `axis` by the given `angle`, in radians. The axis must be a normalized vector.

<!-- rst-class:: classref-item-separator -->

---

[`Quaternion`](class_quaternion.md) **Quaternion** ( from: [`Basis`](class_basis.md) )

Constructs a **Quaternion** from the given rotation [`Basis`](class_basis.md).

This constructor is faster than [`Basis.get_rotation_quaternion`](class_basis.md#class_basis_method_get_rotation_quaternion), but the given basis must be *orthonormalized* (see [`Basis.orthonormalized`](class_basis.md#class_basis_method_orthonormalized)). Otherwise, the constructor fails and returns [`IDENTITY`](class_quaternion.md#class_quaternion_constant_identity).

<!-- rst-class:: classref-item-separator -->

---

[`Quaternion`](class_quaternion.md) **Quaternion** ( x: [`float`](class_float.md), y: [`float`](class_float.md), z: [`float`](class_float.md), w: [`float`](class_float.md) )

Constructs a **Quaternion** defined by the given values.

 **Note:** Only normalized quaternions represent rotation; if these values are not normalized, the new **Quaternion** will not be a valid rotation.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_quaternion_method_angle_to"></div>

[`float`](class_float.md) **angle_to** ( to: [`Quaternion`](class_quaternion.md) ) const[^const]<div id="class_quaternion_method_angle_to"></div>

Returns the angle between this quaternion and `to`. This is the magnitude of the angle you would need to rotate by to get from one to the other.

 **Note:** The magnitude of the floating-point error for this method is abnormally high, so methods such as `is_zero_approx` will not work reliably.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_dot"></div>

[`float`](class_float.md) **dot** ( with: [`Quaternion`](class_quaternion.md) ) const[^const]<div id="class_quaternion_method_dot"></div>

Returns the dot product between this quaternion and `with`.

This is equivalent to `(quat.x * with.x) + (quat.y * with.y) + (quat.z * with.z) + (quat.w * with.w)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_exp"></div>

[`Quaternion`](class_quaternion.md) **exp** ( ) const[^const]<div id="class_quaternion_method_exp"></div>

Returns the exponential of this quaternion. The rotation axis of the result is the normalized rotation axis of this quaternion, the angle of the result is the length of the vector part of this quaternion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_from_euler"></div>

[`Quaternion`](class_quaternion.md) **from_euler** ( euler: [`Vector3`](class_vector3.md) ) static[^static]<div id="class_quaternion_method_from_euler"></div>

Constructs a new **Quaternion** from the given [`Vector3`](class_vector3.md) of [*Euler angles*](https://en.wikipedia.org/wiki/Euler_angles), in radians. This method always uses the YXZ convention ([`@GlobalScope.EULER_ORDER_YXZ`](class_@globalscope.md#class_@globalscope_constant_euler_order_yxz)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_get_angle"></div>

[`float`](class_float.md) **get_angle** ( ) const[^const]<div id="class_quaternion_method_get_angle"></div>

Returns the angle of the rotation represented by this quaternion.

 **Note:** The quaternion must be normalized.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_get_axis"></div>

[`Vector3`](class_vector3.md) **get_axis** ( ) const[^const]<div id="class_quaternion_method_get_axis"></div>

Returns the rotation axis of the rotation represented by this quaternion.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_get_euler"></div>

[`Vector3`](class_vector3.md) **get_euler** ( order: [`int`](class_int.md) = 2 ) const[^const]<div id="class_quaternion_method_get_euler"></div>

Returns this quaternion's rotation as a [`Vector3`](class_vector3.md) of [*Euler angles*](https://en.wikipedia.org/wiki/Euler_angles), in radians.

The order of each consecutive rotation can be changed with `order` (see [EulerOrder](#enum_@globalscope_eulerorder) constants). By default, the YXZ convention is used ([`@GlobalScope.EULER_ORDER_YXZ`](class_@globalscope.md#class_@globalscope_constant_euler_order_yxz)): Z (roll) is calculated first, then X (pitch), and lastly Y (yaw). When using the opposite method [`from_euler`](class_quaternion.md#class_quaternion_method_from_euler), this order is reversed.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_inverse"></div>

[`Quaternion`](class_quaternion.md) **inverse** ( ) const[^const]<div id="class_quaternion_method_inverse"></div>

Returns the inverse version of this quaternion, inverting the sign of every component except [`w`](class_quaternion.md#class_quaternion_property_w).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_is_equal_approx"></div>

[`bool`](class_bool.md) **is_equal_approx** ( to: [`Quaternion`](class_quaternion.md) ) const[^const]<div id="class_quaternion_method_is_equal_approx"></div>

Returns `true` if this quaternion and `to` are approximately equal, by running [`@GlobalScope.is_equal_approx`](class_@globalscope.md#class_@globalscope_method_is_equal_approx) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_is_finite"></div>

[`bool`](class_bool.md) **is_finite** ( ) const[^const]<div id="class_quaternion_method_is_finite"></div>

Returns `true` if this quaternion is finite, by calling [`@GlobalScope.is_finite`](class_@globalscope.md#class_@globalscope_method_is_finite) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_is_normalized"></div>

[`bool`](class_bool.md) **is_normalized** ( ) const[^const]<div id="class_quaternion_method_is_normalized"></div>

Returns `true` if this quaternion is normalized. See also [`normalized`](class_quaternion.md#class_quaternion_method_normalized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_length"></div>

[`float`](class_float.md) **length** ( ) const[^const]<div id="class_quaternion_method_length"></div>

Returns this quaternion's length, also called magnitude.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_length_squared"></div>

[`float`](class_float.md) **length_squared** ( ) const[^const]<div id="class_quaternion_method_length_squared"></div>

Returns this quaternion's length, squared.

 **Note:** This method is faster than [`length`](class_quaternion.md#class_quaternion_method_length), so prefer it if you only need to compare quaternion lengths.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_log"></div>

[`Quaternion`](class_quaternion.md) **log** ( ) const[^const]<div id="class_quaternion_method_log"></div>

Returns the logarithm of this quaternion. Multiplies this quaternion's rotation axis by its rotation angle, and stores the result in the returned quaternion's vector part ([`x`](class_quaternion.md#class_quaternion_property_x), [`y`](class_quaternion.md#class_quaternion_property_y), and [`z`](class_quaternion.md#class_quaternion_property_z)). The returned quaternion's real part ([`w`](class_quaternion.md#class_quaternion_property_w)) is always `0.0`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_normalized"></div>

[`Quaternion`](class_quaternion.md) **normalized** ( ) const[^const]<div id="class_quaternion_method_normalized"></div>

Returns a copy of this quaternion, normalized so that its length is `1.0`. See also [`is_normalized`](class_quaternion.md#class_quaternion_method_is_normalized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_slerp"></div>

[`Quaternion`](class_quaternion.md) **slerp** ( to: [`Quaternion`](class_quaternion.md), weight: [`float`](class_float.md) ) const[^const]<div id="class_quaternion_method_slerp"></div>

Performs a spherical-linear interpolation with the `to` quaternion, given a `weight` and returns the result. Both this quaternion and `to` must be normalized.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_slerpni"></div>

[`Quaternion`](class_quaternion.md) **slerpni** ( to: [`Quaternion`](class_quaternion.md), weight: [`float`](class_float.md) ) const[^const]<div id="class_quaternion_method_slerpni"></div>

Performs a spherical-linear interpolation with the `to` quaternion, given a `weight` and returns the result. Unlike [`slerp`](class_quaternion.md#class_quaternion_method_slerp), this method does not check if the rotation path is smaller than 90 degrees. Both this quaternion and `to` must be normalized.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_spherical_cubic_interpolate"></div>

[`Quaternion`](class_quaternion.md) **spherical_cubic_interpolate** ( b: [`Quaternion`](class_quaternion.md), pre_a: [`Quaternion`](class_quaternion.md), post_b: [`Quaternion`](class_quaternion.md), weight: [`float`](class_float.md) ) const[^const]<div id="class_quaternion_method_spherical_cubic_interpolate"></div>

Performs a spherical cubic interpolation between quaternions `pre_a`, this vector, `b`, and `post_b`, by the given amount `weight`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_method_spherical_cubic_interpolate_in_time"></div>

[`Quaternion`](class_quaternion.md) **spherical_cubic_interpolate_in_time** ( b: [`Quaternion`](class_quaternion.md), pre_a: [`Quaternion`](class_quaternion.md), post_b: [`Quaternion`](class_quaternion.md), weight: [`float`](class_float.md), b_t: [`float`](class_float.md), pre_a_t: [`float`](class_float.md), post_b_t: [`float`](class_float.md) ) const[^const]<div id="class_quaternion_method_spherical_cubic_interpolate_in_time"></div>

Performs a spherical cubic interpolation between quaternions `pre_a`, this vector, `b`, and `post_b`, by the given amount `weight`.

It can perform smoother interpolation than [`spherical_cubic_interpolate`](class_quaternion.md#class_quaternion_method_spherical_cubic_interpolate) by the time values.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_quaternion_operator_neq_quaternion"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`Quaternion`](class_quaternion.md) ) <div id="class_quaternion_operator_neq_quaternion"></div>

Returns `true` if the components of both quaternions are not exactly equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](class_quaternion.md#class_quaternion_method_is_equal_approx) instead, which is more reliable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_operator_mul_quaternion"></div>

[`Quaternion`](class_quaternion.md) **operator *** ( right: [`Quaternion`](class_quaternion.md) ) <div id="class_quaternion_operator_mul_quaternion"></div>

Composes (multiplies) two quaternions. This rotates the `right` quaternion (the child) by this quaternion (the parent).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_operator_mul_vector3"></div>

[`Vector3`](class_vector3.md) **operator *** ( right: [`Vector3`](class_vector3.md) ) <div id="class_quaternion_operator_mul_vector3"></div>

Rotates (multiplies) the `right` vector by this quaternion, returning a [`Vector3`](class_vector3.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_operator_mul_float"></div>

[`Quaternion`](class_quaternion.md) **operator *** ( right: [`float`](class_float.md) ) <div id="class_quaternion_operator_mul_float"></div>

Multiplies each component of the **Quaternion** by the right [`float`](class_float.md) value.

This operation is not meaningful on its own, but it can be used as a part of a larger expression.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_operator_mul_int"></div>

[`Quaternion`](class_quaternion.md) **operator *** ( right: [`int`](class_int.md) ) <div id="class_quaternion_operator_mul_int"></div>

Multiplies each component of the **Quaternion** by the right [`int`](class_int.md) value.

This operation is not meaningful on its own, but it can be used as a part of a larger expression.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_operator_sum_quaternion"></div>

[`Quaternion`](class_quaternion.md) **operator +** ( right: [`Quaternion`](class_quaternion.md) ) <div id="class_quaternion_operator_sum_quaternion"></div>

Adds each component of the left **Quaternion** to the right **Quaternion**.

This operation is not meaningful on its own, but it can be used as a part of a larger expression, such as approximating an intermediate rotation between two nearby rotations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_operator_dif_quaternion"></div>

[`Quaternion`](class_quaternion.md) **operator -** ( right: [`Quaternion`](class_quaternion.md) ) <div id="class_quaternion_operator_dif_quaternion"></div>

Subtracts each component of the left **Quaternion** by the right **Quaternion**.

This operation is not meaningful on its own, but it can be used as a part of a larger expression.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_operator_div_float"></div>

[`Quaternion`](class_quaternion.md) **operator /** ( right: [`float`](class_float.md) ) <div id="class_quaternion_operator_div_float"></div>

Divides each component of the **Quaternion** by the right [`float`](class_float.md) value.

This operation is not meaningful on its own, but it can be used as a part of a larger expression.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_operator_div_int"></div>

[`Quaternion`](class_quaternion.md) **operator /** ( right: [`int`](class_int.md) ) <div id="class_quaternion_operator_div_int"></div>

Divides each component of the **Quaternion** by the right [`int`](class_int.md) value.

This operation is not meaningful on its own, but it can be used as a part of a larger expression.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_operator_eq_quaternion"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`Quaternion`](class_quaternion.md) ) <div id="class_quaternion_operator_eq_quaternion"></div>

Returns `true` if the components of both quaternions are exactly equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](class_quaternion.md#class_quaternion_method_is_equal_approx) instead, which is more reliable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_operator_idx_int"></div>

[`float`](class_float.md) **operator []** ( index: [`int`](class_int.md) ) <div id="class_quaternion_operator_idx_int"></div>

Accesses each component of this quaternion by their index.

Index `0` is the same as [`x`](class_quaternion.md#class_quaternion_property_x), index `1` is the same as [`y`](class_quaternion.md#class_quaternion_property_y), index `2` is the same as [`z`](class_quaternion.md#class_quaternion_property_z), and index `3` is the same as [`w`](class_quaternion.md#class_quaternion_property_w).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_operator_unplus"></div>

[`Quaternion`](class_quaternion.md) **operator unary+** ( ) <div id="class_quaternion_operator_unplus"></div>

Returns the same value as if the `+` was not there. Unary `+` does nothing, but sometimes it can make your code more readable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_quaternion_operator_unminus"></div>

[`Quaternion`](class_quaternion.md) **operator unary-** ( ) <div id="class_quaternion_operator_unminus"></div>

Returns the negative value of the **Quaternion**. This is the same as multiplying all components by `-1`. This operation results in a quaternion that represents the same rotation.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
