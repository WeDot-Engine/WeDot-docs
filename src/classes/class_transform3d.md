<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Transform3D.xml。 -->

<div id="_class_transform3d"></div>

# Transform3D

A 3×4 matrix representing a 3D transformation.

## 描述

The **Transform3D** built-in [`Variant`](class_variant.md) type is a 3×4 matrix representing a transformation in 3D space. It contains a [`Basis`](class_basis.md), which on its own can represent rotation, scale, and shear. Additionally, combined with its own [`origin`](#class_transform3d_property_origin), the transform can also represent a translation.

For a general introduction, see the [*Matrices and transforms*](../tutorials/math/matrices_and_transforms) tutorial.

 **Note:** Godot uses a [*right-handed coordinate system*](https://en.wikipedia.org/wiki/Right-hand_rule), which is a common standard. For directions, the convention for built-in types like [`Camera3D`](class_camera3d.md) is for -Z to point forward (+X is right, +Y is up, and +Z is back). Other objects may use different direction conventions. For more information, see the [*3D asset direction conventions*](../tutorials/assets_pipeline/importing_3d_scenes/model_export_considerations.md#d-asset-direction-conventions) tutorial.

通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 属性

| [`Basis`](class_basis.md)     | [`basis`](#class_transform3d_property_basis)   | ``Basis(1, 0, 0, 0, 1, 0, 0, 0, 1)`` |
| [`Vector3`](class_vector3.md) | [`origin`](#class_transform3d_property_origin) | ``Vector3(0, 0, 0)``                 |

## 构造函数

| [`Transform3D`](class_transform3d.md) | [`Transform3D`](#class_transform3d_constructor_transform3d) ( )                                                                                                                                                            |
| [`Transform3D`](class_transform3d.md) | [`Transform3D`](#class_transform3d_constructor_transform3d) ( from: [`Transform3D`](class_transform3d.md) )                                                                                                                |
| [`Transform3D`](class_transform3d.md) | [`Transform3D`](#class_transform3d_constructor_transform3d) ( basis: [`Basis`](class_basis.md), origin: [`Vector3`](class_vector3.md) )                                                                                    |
| [`Transform3D`](class_transform3d.md) | [`Transform3D`](#class_transform3d_constructor_transform3d) ( from: [`Projection`](class_projection.md) )                                                                                                                  |
| [`Transform3D`](class_transform3d.md) | [`Transform3D`](#class_transform3d_constructor_transform3d) ( x_axis: [`Vector3`](class_vector3.md), y_axis: [`Vector3`](class_vector3.md), z_axis: [`Vector3`](class_vector3.md), origin: [`Vector3`](class_vector3.md) ) |

## 方法

| [`Transform3D`](class_transform3d.md) | [`affine_inverse`](#class_transform3d_method_affine_inverse) ( ) const[^const]                                                                                                                                       |
| [`Transform3D`](class_transform3d.md) | [`interpolate_with`](#class_transform3d_method_interpolate_with) ( xform: [`Transform3D`](class_transform3d.md), weight: [`float`](class_float.md) ) const[^const]                                                   |
| [`Transform3D`](class_transform3d.md) | [`inverse`](#class_transform3d_method_inverse) ( ) const[^const]                                                                                                                                                     |
| [`bool`](class_bool.md)               | [`is_equal_approx`](#class_transform3d_method_is_equal_approx) ( xform: [`Transform3D`](class_transform3d.md) ) const[^const]                                                                                        |
| [`bool`](class_bool.md)               | [`is_finite`](#class_transform3d_method_is_finite) ( ) const[^const]                                                                                                                                                 |
| [`Transform3D`](class_transform3d.md) | [`looking_at`](#class_transform3d_method_looking_at) ( target: [`Vector3`](class_vector3.md), up: [`Vector3`](class_vector3.md) = Vector3(0, 1, 0), use_model_front: [`bool`](class_bool.md) = false ) const[^const] |
| [`Transform3D`](class_transform3d.md) | [`orthonormalized`](#class_transform3d_method_orthonormalized) ( ) const[^const]                                                                                                                                     |
| [`Transform3D`](class_transform3d.md) | [`rotated`](#class_transform3d_method_rotated) ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) ) const[^const]                                                                               |
| [`Transform3D`](class_transform3d.md) | [`rotated_local`](#class_transform3d_method_rotated_local) ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) ) const[^const]                                                                   |
| [`Transform3D`](class_transform3d.md) | [`scaled`](#class_transform3d_method_scaled) ( scale: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                  |
| [`Transform3D`](class_transform3d.md) | [`scaled_local`](#class_transform3d_method_scaled_local) ( scale: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                      |
| [`Transform3D`](class_transform3d.md) | [`translated`](#class_transform3d_method_translated) ( offset: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                         |
| [`Transform3D`](class_transform3d.md) | [`translated_local`](#class_transform3d_method_translated_local) ( offset: [`Vector3`](class_vector3.md) ) const[^const]                                                                                             |

## 运算符

| [`bool`](class_bool.md)                             | [`operator !=`](class_Transform3D.md#operator_neq_Transform3D) ( right: [`Transform3D`](class_transform3d.md) )                     |
| [`AABB`](class_aabb.md)                             | [`operator *`](class_Transform3D.md#operator_mul_AABB) ( right: [`AABB`](class_aabb.md) )                                           |
| [`PackedVector3Array`](class_packedvector3array.md) | [`operator *`](class_Transform3D.md#operator_mul_PackedVector3Array) ( right: [`PackedVector3Array`](class_packedvector3array.md) ) |
| [`Plane`](class_plane.md)                           | [`operator *`](class_Transform3D.md#operator_mul_Plane) ( right: [`Plane`](class_plane.md) )                                        |
| [`Transform3D`](class_transform3d.md)               | [`operator *`](class_Transform3D.md#operator_mul_Transform3D) ( right: [`Transform3D`](class_transform3d.md) )                      |
| [`Vector3`](class_vector3.md)                       | [`operator *`](class_Transform3D.md#operator_mul_Vector3) ( right: [`Vector3`](class_vector3.md) )                                  |
| [`Transform3D`](class_transform3d.md)               | [`operator *`](class_Transform3D.md#operator_mul_float) ( right: [`float`](class_float.md) )                                        |
| [`Transform3D`](class_transform3d.md)               | [`operator *`](class_Transform3D.md#operator_mul_int) ( right: [`int`](class_int.md) )                                              |
| [`Transform3D`](class_transform3d.md)               | [`operator /`](class_Transform3D.md#operator_div_float) ( right: [`float`](class_float.md) )                                        |
| [`Transform3D`](class_transform3d.md)               | [`operator /`](class_Transform3D.md#operator_div_int) ( right: [`int`](class_int.md) )                                              |
| [`bool`](class_bool.md)                             | [`operator ==`](class_Transform3D.md#operator_eq_Transform3D) ( right: [`Transform3D`](class_transform3d.md) )                      |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_transform3d_constant_identity"></div>

**IDENTITY** = ``Transform3D(1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0)`` <div id="class_transform3d_constant_identity"></div>

A transform with no translation, no rotation, and its scale being `1`. Its [`basis`](#class_transform3d_property_basis) is equal to [`Basis.IDENTITY`](#class_basis_constant_identity).

When multiplied by another [`Variant`](class_variant.md) such as [`AABB`](class_aabb.md) or another **Transform3D**, no transformation occurs.

<div id="_class_transform3d_constant_flip_x"></div>

**FLIP_X** = ``Transform3D(-1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0)`` <div id="class_transform3d_constant_flip_x"></div>

**Transform3D** with mirroring applied perpendicular to the YZ plane. Its [`basis`](#class_transform3d_property_basis) is equal to [`Basis.FLIP_X`](#class_basis_constant_flip_x).

<div id="_class_transform3d_constant_flip_y"></div>

**FLIP_Y** = ``Transform3D(1, 0, 0, 0, -1, 0, 0, 0, 1, 0, 0, 0)`` <div id="class_transform3d_constant_flip_y"></div>

**Transform3D** with mirroring applied perpendicular to the XZ plane. Its [`basis`](#class_transform3d_property_basis) is equal to [`Basis.FLIP_Y`](#class_basis_constant_flip_y).

<div id="_class_transform3d_constant_flip_z"></div>

**FLIP_Z** = ``Transform3D(1, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 0)`` <div id="class_transform3d_constant_flip_z"></div>

**Transform3D** with mirroring applied perpendicular to the XY plane. Its [`basis`](#class_transform3d_property_basis) is equal to [`Basis.FLIP_Z`](#class_basis_constant_flip_z).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_transform3d_property_basis"></div>

[`Basis`](class_basis.md) **basis** = ``Basis(1, 0, 0, 0, 1, 0, 0, 0, 1)`` <div id="class_transform3d_property_basis"></div>

The [`Basis`](class_basis.md) of this transform. It is composed by 3 axes ([`Basis.x`](#class_basis_property_x), [`Basis.y`](#class_basis_property_y), and [`Basis.z`](#class_basis_property_z)). Together, these represent the transform's rotation, scale, and shear.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_property_origin"></div>

[`Vector3`](class_vector3.md) **origin** = ``Vector3(0, 0, 0)`` <div id="class_transform3d_property_origin"></div>

The translation offset of this transform. In 3D space, this can be seen as the position.

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_transform3d_constructor_transform3d"></div>

[`Transform3D`](class_transform3d.md) **Transform3D** ( )<div id="class_transform3d_constructor_transform3d"></div>

Constructs a **Transform3D** identical to the [`IDENTITY`](#class_transform3d_constant_identity).

<!-- rst-class:: classref-item-separator -->

---

[`Transform3D`](class_transform3d.md) **Transform3D** ( from: [`Transform3D`](class_transform3d.md) )

Constructs a **Transform3D** as a copy of the given **Transform3D**.

<!-- rst-class:: classref-item-separator -->

---

[`Transform3D`](class_transform3d.md) **Transform3D** ( basis: [`Basis`](class_basis.md), origin: [`Vector3`](class_vector3.md) )

Constructs a **Transform3D** from a [`Basis`](class_basis.md) and [`Vector3`](class_vector3.md).

<!-- rst-class:: classref-item-separator -->

---

[`Transform3D`](class_transform3d.md) **Transform3D** ( from: [`Projection`](class_projection.md) )

Constructs a **Transform3D** from a [`Projection`](class_projection.md). Because **Transform3D** is a 3×4 matrix and [`Projection`](class_projection.md) is a 4×4 matrix, this operation trims the last row of the projection matrix (`from.x.w`, `from.y.w`, `from.z.w`, and `from.w.w` are not included in the new transform).

<!-- rst-class:: classref-item-separator -->

---

[`Transform3D`](class_transform3d.md) **Transform3D** ( x_axis: [`Vector3`](class_vector3.md), y_axis: [`Vector3`](class_vector3.md), z_axis: [`Vector3`](class_vector3.md), origin: [`Vector3`](class_vector3.md) )

Constructs a **Transform3D** from four [`Vector3`](class_vector3.md) values (also called matrix columns).

The first three arguments are the [`basis`](#class_transform3d_property_basis)'s axes ([`Basis.x`](#class_basis_property_x), [`Basis.y`](#class_basis_property_y), and [`Basis.z`](#class_basis_property_z)).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_transform3d_method_affine_inverse"></div>

[`Transform3D`](class_transform3d.md) **affine_inverse** ( ) const[^const]<div id="class_transform3d_method_affine_inverse"></div>

Returns the inverted version of this transform. Unlike [`inverse`](#class_transform3d_method_inverse), this method works with almost any [`basis`](#class_transform3d_property_basis), including non-uniform ones, but is slower. See also [`Basis.inverse`](#class_basis_method_inverse).

 **Note:** For this method to return correctly, the transform's [`basis`](#class_transform3d_property_basis) needs to have a determinant that is not exactly `0` (see [`Basis.determinant`](#class_basis_method_determinant)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_method_interpolate_with"></div>

[`Transform3D`](class_transform3d.md) **interpolate_with** ( xform: [`Transform3D`](class_transform3d.md), weight: [`float`](class_float.md) ) const[^const]<div id="class_transform3d_method_interpolate_with"></div>

Returns the result of the linear interpolation between this transform and `xform` by the given `weight`.

The `weight` should be between `0.0` and `1.0` (inclusive). Values outside this range are allowed and can be used to perform *extrapolation* instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_method_inverse"></div>

[`Transform3D`](class_transform3d.md) **inverse** ( ) const[^const]<div id="class_transform3d_method_inverse"></div>

Returns the inverted version of this transform. See also [`Basis.inverse`](#class_basis_method_inverse).

 **Note:** For this method to return correctly, the transform's [`basis`](#class_transform3d_property_basis) needs to be *orthonormal* (see [`Basis.orthonormalized`](#class_basis_method_orthonormalized)). That means, the basis should only represent a rotation. If it does not, use [`affine_inverse`](#class_transform3d_method_affine_inverse) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_method_is_equal_approx"></div>

[`bool`](class_bool.md) **is_equal_approx** ( xform: [`Transform3D`](class_transform3d.md) ) const[^const]<div id="class_transform3d_method_is_equal_approx"></div>

Returns `true` if this transform and `xform` are approximately equal, by running [`@GlobalScope.is_equal_approx`](#class_@globalscope_method_is_equal_approx) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_method_is_finite"></div>

[`bool`](class_bool.md) **is_finite** ( ) const[^const]<div id="class_transform3d_method_is_finite"></div>

Returns `true` if this transform is finite, by calling [`@GlobalScope.is_finite`](#class_@globalscope_method_is_finite) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_method_looking_at"></div>

[`Transform3D`](class_transform3d.md) **looking_at** ( target: [`Vector3`](class_vector3.md), up: [`Vector3`](class_vector3.md) = Vector3(0, 1, 0), use_model_front: [`bool`](class_bool.md) = false ) const[^const]<div id="class_transform3d_method_looking_at"></div>

Returns a copy of this transform rotated so that the forward axis (-Z) points towards the `target` position.

The up axis (+Y) points as close to the `up` vector as possible while staying perpendicular to the forward axis. The resulting transform is orthonormalized. The existing rotation, scale, and skew information from the original transform is discarded. The `target` and `up` vectors cannot be zero, cannot be parallel to each other, and are defined in global/parent space.

If `use_model_front` is `true`, the +Z axis (asset front) is treated as forward (implies +X is left) and points toward the `target` position. By default, the -Z axis (camera forward) is treated as forward (implies +X is right).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_method_orthonormalized"></div>

[`Transform3D`](class_transform3d.md) **orthonormalized** ( ) const[^const]<div id="class_transform3d_method_orthonormalized"></div>

Returns a copy of this transform with its [`basis`](#class_transform3d_property_basis) orthonormalized. An orthonormal basis is both *orthogonal* (the axes are perpendicular to each other) and *normalized* (the axes have a length of `1`), which also means it can only represent rotation. See also [`Basis.orthonormalized`](#class_basis_method_orthonormalized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_method_rotated"></div>

[`Transform3D`](class_transform3d.md) **rotated** ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) ) const[^const]<div id="class_transform3d_method_rotated"></div>

Returns a copy of this transform rotated around the given `axis` by the given `angle` (in radians).

The `axis` must be a normalized vector.

This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the left, i.e., `R * X`.

This can be seen as transforming with respect to the global/parent frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_method_rotated_local"></div>

[`Transform3D`](class_transform3d.md) **rotated_local** ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) ) const[^const]<div id="class_transform3d_method_rotated_local"></div>

Returns a copy of this transform rotated around the given `axis` by the given `angle` (in radians).

The `axis` must be a normalized vector.

This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the right, i.e., `X * R`.

This can be seen as transforming with respect to the local frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_method_scaled"></div>

[`Transform3D`](class_transform3d.md) **scaled** ( scale: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_transform3d_method_scaled"></div>

Returns a copy of this transform scaled by the given `scale` factor.

This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the left, i.e., `S * X`.

This can be seen as transforming with respect to the global/parent frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_method_scaled_local"></div>

[`Transform3D`](class_transform3d.md) **scaled_local** ( scale: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_transform3d_method_scaled_local"></div>

Returns a copy of this transform scaled by the given `scale` factor.

This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the right, i.e., `X * S`.

This can be seen as transforming with respect to the local frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_method_translated"></div>

[`Transform3D`](class_transform3d.md) **translated** ( offset: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_transform3d_method_translated"></div>

Returns a copy of this transform translated by the given `offset`.

This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the left, i.e., `T * X`.

This can be seen as transforming with respect to the global/parent frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_method_translated_local"></div>

[`Transform3D`](class_transform3d.md) **translated_local** ( offset: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_transform3d_method_translated_local"></div>

Returns a copy of this transform translated by the given `offset`.

This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the right, i.e., `X * T`.

This can be seen as transforming with respect to the local frame.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_transform3d_operator_neq_transform3d"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`Transform3D`](class_transform3d.md) ) <div id="class_transform3d_operator_neq_transform3d"></div>

Returns `true` if the components of both transforms are not equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](#class_transform3d_method_is_equal_approx) instead, which is more reliable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_operator_mul_aabb"></div>

[`AABB`](class_aabb.md) **operator *** ( right: [`AABB`](class_aabb.md) ) <div id="class_transform3d_operator_mul_aabb"></div>

Transforms (multiplies) the [`AABB`](class_aabb.md) by this transformation matrix.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_operator_mul_packedvector3array"></div>

[`PackedVector3Array`](class_packedvector3array.md) **operator *** ( right: [`PackedVector3Array`](class_packedvector3array.md) ) <div id="class_transform3d_operator_mul_packedvector3array"></div>

Transforms (multiplies) every [`Vector3`](class_vector3.md) element of the given [`PackedVector3Array`](class_packedvector3array.md) by this transformation matrix.

On larger arrays, this operation is much faster than transforming each [`Vector3`](class_vector3.md) individually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_operator_mul_plane"></div>

[`Plane`](class_plane.md) **operator *** ( right: [`Plane`](class_plane.md) ) <div id="class_transform3d_operator_mul_plane"></div>

Transforms (multiplies) the [`Plane`](class_plane.md) by this transformation matrix.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_operator_mul_transform3d"></div>

[`Transform3D`](class_transform3d.md) **operator *** ( right: [`Transform3D`](class_transform3d.md) ) <div id="class_transform3d_operator_mul_transform3d"></div>

Transforms (multiplies) this transform by the `right` transform.

This is the operation performed between parent and child [`Node3D`](class_node3d.md) s.

 **Note:** If you need to only modify one attribute of this transform, consider using one of the following methods, instead:

- For translation, see [`translated`](#class_transform3d_method_translated) or [`translated_local`](#class_transform3d_method_translated_local).

- For rotation, see [`rotated`](#class_transform3d_method_rotated) or [`rotated_local`](#class_transform3d_method_rotated_local).

- For scale, see [`scaled`](#class_transform3d_method_scaled) or [`scaled_local`](#class_transform3d_method_scaled_local).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_operator_mul_vector3"></div>

[`Vector3`](class_vector3.md) **operator *** ( right: [`Vector3`](class_vector3.md) ) <div id="class_transform3d_operator_mul_vector3"></div>

Transforms (multiplies) the [`Vector3`](class_vector3.md) by this transformation matrix.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_operator_mul_float"></div>

[`Transform3D`](class_transform3d.md) **operator *** ( right: [`float`](class_float.md) ) <div id="class_transform3d_operator_mul_float"></div>

Multiplies all components of the **Transform3D** by the given [`float`](class_float.md), including the [`origin`](#class_transform3d_property_origin). This affects the transform's scale uniformly, scaling the [`basis`](#class_transform3d_property_basis).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_operator_mul_int"></div>

[`Transform3D`](class_transform3d.md) **operator *** ( right: [`int`](class_int.md) ) <div id="class_transform3d_operator_mul_int"></div>

Multiplies all components of the **Transform3D** by the given [`int`](class_int.md), including the [`origin`](#class_transform3d_property_origin). This affects the transform's scale uniformly, scaling the [`basis`](#class_transform3d_property_basis).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_operator_div_float"></div>

[`Transform3D`](class_transform3d.md) **operator /** ( right: [`float`](class_float.md) ) <div id="class_transform3d_operator_div_float"></div>

Divides all components of the **Transform3D** by the given [`float`](class_float.md), including the [`origin`](#class_transform3d_property_origin). This affects the transform's scale uniformly, scaling the [`basis`](#class_transform3d_property_basis).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_operator_div_int"></div>

[`Transform3D`](class_transform3d.md) **operator /** ( right: [`int`](class_int.md) ) <div id="class_transform3d_operator_div_int"></div>

Divides all components of the **Transform3D** by the given [`int`](class_int.md), including the [`origin`](#class_transform3d_property_origin). This affects the transform's scale uniformly, scaling the [`basis`](#class_transform3d_property_basis).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform3d_operator_eq_transform3d"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`Transform3D`](class_transform3d.md) ) <div id="class_transform3d_operator_eq_transform3d"></div>

Returns `true` if the components of both transforms are exactly equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](#class_transform3d_method_is_equal_approx) instead, which is more reliable.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
