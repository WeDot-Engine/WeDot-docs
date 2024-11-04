<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Transform2D.xml。 -->

<div id="_class_transform2d"></div>

# Transform2D

A 2×3 matrix representing a 2D transformation.

## 描述

The **Transform2D** built-in [`Variant`](class_variant.md) type is a 2×3 [*matrix*](https://en.wikipedia.org/wiki/Matrix_(mathematics)) representing a transformation in 2D space. It contains three [`Vector2`](class_vector2.md) values: [`x`](#class_transform2d_property_x), [`y`](#class_transform2d_property_y), and [`origin`](#class_transform2d_property_origin). Together, they can represent translation, rotation, scale, and skew.

The [`x`](#class_transform2d_property_x) and [`y`](#class_transform2d_property_y) axes form a 2×2 matrix, known as the transform's **basis**. The length of each axis ([`Vector2.length`](#class_vector2_method_length)) influences the transform's scale, while the direction of all axes influence the rotation. Usually, both axes are perpendicular to one another. However, when you rotate one axis individually, the transform becomes skewed. Applying a skewed transform to a 2D sprite will make the sprite appear distorted.

For a general introduction, see the [*Matrices and transforms*](../tutorials/math/matrices_and_transforms) tutorial.

 **Note:** Unlike [`Transform3D`](class_transform3d.md), there is no 2D equivalent to the [`Basis`](class_basis.md) type. All mentions of "basis" refer to the [`x`](#class_transform2d_property_x) and [`y`](#class_transform2d_property_y) components of **Transform2D**.

通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 属性

| [`Vector2`](class_vector2.md) | [`origin`](#class_transform2d_property_origin) | ``Vector2(0, 0)`` |
| [`Vector2`](class_vector2.md) | [`x`](#class_transform2d_property_x)           | ``Vector2(1, 0)`` |
| [`Vector2`](class_vector2.md) | [`y`](#class_transform2d_property_y)           | ``Vector2(0, 1)`` |

## 构造函数

| [`Transform2D`](class_transform2d.md) | [`Transform2D`](#class_transform2d_constructor_transform2d) ( )                                                                                                                                                     |
| [`Transform2D`](class_transform2d.md) | [`Transform2D`](#class_transform2d_constructor_transform2d) ( from: [`Transform2D`](class_transform2d.md) )                                                                                                         |
| [`Transform2D`](class_transform2d.md) | [`Transform2D`](#class_transform2d_constructor_transform2d) ( rotation: [`float`](class_float.md), position: [`Vector2`](class_vector2.md) )                                                                        |
| [`Transform2D`](class_transform2d.md) | [`Transform2D`](#class_transform2d_constructor_transform2d) ( rotation: [`float`](class_float.md), scale: [`Vector2`](class_vector2.md), skew: [`float`](class_float.md), position: [`Vector2`](class_vector2.md) ) |
| [`Transform2D`](class_transform2d.md) | [`Transform2D`](#class_transform2d_constructor_transform2d) ( x_axis: [`Vector2`](class_vector2.md), y_axis: [`Vector2`](class_vector2.md), origin: [`Vector2`](class_vector2.md) )                                 |

## 方法

| [`Transform2D`](class_transform2d.md) | [`affine_inverse`](#class_transform2d_method_affine_inverse) ( ) const[^const]                                                                                     |
| [`Vector2`](class_vector2.md)         | [`basis_xform`](#class_transform2d_method_basis_xform) ( v: [`Vector2`](class_vector2.md) ) const[^const]                                                          |
| [`Vector2`](class_vector2.md)         | [`basis_xform_inv`](#class_transform2d_method_basis_xform_inv) ( v: [`Vector2`](class_vector2.md) ) const[^const]                                                  |
| [`float`](class_float.md)             | [`determinant`](#class_transform2d_method_determinant) ( ) const[^const]                                                                                           |
| [`Vector2`](class_vector2.md)         | [`get_origin`](#class_transform2d_method_get_origin) ( ) const[^const]                                                                                             |
| [`float`](class_float.md)             | [`get_rotation`](#class_transform2d_method_get_rotation) ( ) const[^const]                                                                                         |
| [`Vector2`](class_vector2.md)         | [`get_scale`](#class_transform2d_method_get_scale) ( ) const[^const]                                                                                               |
| [`float`](class_float.md)             | [`get_skew`](#class_transform2d_method_get_skew) ( ) const[^const]                                                                                                 |
| [`Transform2D`](class_transform2d.md) | [`interpolate_with`](#class_transform2d_method_interpolate_with) ( xform: [`Transform2D`](class_transform2d.md), weight: [`float`](class_float.md) ) const[^const] |
| [`Transform2D`](class_transform2d.md) | [`inverse`](#class_transform2d_method_inverse) ( ) const[^const]                                                                                                   |
| [`bool`](class_bool.md)               | [`is_conformal`](#class_transform2d_method_is_conformal) ( ) const[^const]                                                                                         |
| [`bool`](class_bool.md)               | [`is_equal_approx`](#class_transform2d_method_is_equal_approx) ( xform: [`Transform2D`](class_transform2d.md) ) const[^const]                                      |
| [`bool`](class_bool.md)               | [`is_finite`](#class_transform2d_method_is_finite) ( ) const[^const]                                                                                               |
| [`Transform2D`](class_transform2d.md) | [`looking_at`](#class_transform2d_method_looking_at) ( target: [`Vector2`](class_vector2.md) = Vector2(0, 0) ) const[^const]                                       |
| [`Transform2D`](class_transform2d.md) | [`orthonormalized`](#class_transform2d_method_orthonormalized) ( ) const[^const]                                                                                   |
| [`Transform2D`](class_transform2d.md) | [`rotated`](#class_transform2d_method_rotated) ( angle: [`float`](class_float.md) ) const[^const]                                                                  |
| [`Transform2D`](class_transform2d.md) | [`rotated_local`](#class_transform2d_method_rotated_local) ( angle: [`float`](class_float.md) ) const[^const]                                                      |
| [`Transform2D`](class_transform2d.md) | [`scaled`](#class_transform2d_method_scaled) ( scale: [`Vector2`](class_vector2.md) ) const[^const]                                                                |
| [`Transform2D`](class_transform2d.md) | [`scaled_local`](#class_transform2d_method_scaled_local) ( scale: [`Vector2`](class_vector2.md) ) const[^const]                                                    |
| [`Transform2D`](class_transform2d.md) | [`translated`](#class_transform2d_method_translated) ( offset: [`Vector2`](class_vector2.md) ) const[^const]                                                       |
| [`Transform2D`](class_transform2d.md) | [`translated_local`](#class_transform2d_method_translated_local) ( offset: [`Vector2`](class_vector2.md) ) const[^const]                                           |

## 运算符

| [`bool`](class_bool.md)                             | [`operator !=`](class_Transform2D.md#operator_neq_Transform2D) ( right: [`Transform2D`](class_transform2d.md) )                     |
| [`PackedVector2Array`](class_packedvector2array.md) | [`operator *`](class_Transform2D.md#operator_mul_PackedVector2Array) ( right: [`PackedVector2Array`](class_packedvector2array.md) ) |
| [`Rect2`](class_rect2.md)                           | [`operator *`](class_Transform2D.md#operator_mul_Rect2) ( right: [`Rect2`](class_rect2.md) )                                        |
| [`Transform2D`](class_transform2d.md)               | [`operator *`](class_Transform2D.md#operator_mul_Transform2D) ( right: [`Transform2D`](class_transform2d.md) )                      |
| [`Vector2`](class_vector2.md)                       | [`operator *`](class_Transform2D.md#operator_mul_Vector2) ( right: [`Vector2`](class_vector2.md) )                                  |
| [`Transform2D`](class_transform2d.md)               | [`operator *`](class_Transform2D.md#operator_mul_float) ( right: [`float`](class_float.md) )                                        |
| [`Transform2D`](class_transform2d.md)               | [`operator *`](class_Transform2D.md#operator_mul_int) ( right: [`int`](class_int.md) )                                              |
| [`Transform2D`](class_transform2d.md)               | [`operator /`](class_Transform2D.md#operator_div_float) ( right: [`float`](class_float.md) )                                        |
| [`Transform2D`](class_transform2d.md)               | [`operator /`](class_Transform2D.md#operator_div_int) ( right: [`int`](class_int.md) )                                              |
| [`bool`](class_bool.md)                             | [`operator ==`](class_Transform2D.md#operator_eq_Transform2D) ( right: [`Transform2D`](class_transform2d.md) )                      |
| [`Vector2`](class_vector2.md)                       | [`operator []`](class_Transform2D.md#operator_idx_int) ( index: [`int`](class_int.md) )                                             |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_transform2d_constant_identity"></div>

**IDENTITY** = ``Transform2D(1, 0, 0, 1, 0, 0)`` <div id="class_transform2d_constant_identity"></div>

The identity **Transform2D**. A transform with no translation, no rotation, and its scale being `1`. When multiplied by another [`Variant`](class_variant.md) such as [`Rect2`](class_rect2.md) or another **Transform2D**, no transformation occurs. This means that:

- The [`x`](#class_transform2d_property_x) points right ([`Vector2.RIGHT`](#class_vector2_constant_right));

- The [`y`](#class_transform2d_property_y) points up ([`Vector2.UP`](#class_vector2_constant_up)).

```

    var transform = Transform2D.IDENTITY
    print("| X | Y | Origin")
    print("| %s | %s | %s" % [transform.x.x, transform.y.x, transform.origin.x])
    print("| %s | %s | %s" % [transform.x.y, transform.y.y, transform.origin.y])
    # Prints:
    # | X | Y | Origin
    # | 1 | 0 | 0
    # | 0 | 1 | 0
```

This is identical to creating [`Transform2D`](#class_transform2d_constructor_transform2d) without any parameters. This constant can be used to make your code clearer, and for consistency with C#.



<div id="_class_transform2d_constant_flip_x"></div>

**FLIP_X** = ``Transform2D(-1, 0, 0, 1, 0, 0)`` <div id="class_transform2d_constant_flip_x"></div>

When any transform is multiplied by [`FLIP_X`](#class_transform2d_constant_flip_x), it negates all components of the [`x`](#class_transform2d_property_x) axis (the X column).

When [`FLIP_X`](#class_transform2d_constant_flip_x) is multiplied by any basis, it negates the [`Vector2.x`](#class_vector2_property_x) component of all axes (the X row).

<div id="_class_transform2d_constant_flip_y"></div>

**FLIP_Y** = ``Transform2D(1, 0, 0, -1, 0, 0)`` <div id="class_transform2d_constant_flip_y"></div>

When any transform is multiplied by [`FLIP_Y`](#class_transform2d_constant_flip_y), it negates all components of the [`y`](#class_transform2d_property_y) axis (the Y column).

When [`FLIP_Y`](#class_transform2d_constant_flip_y) is multiplied by any basis, it negates the [`Vector2.y`](#class_vector2_property_y) component of all axes (the Y row).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_transform2d_property_origin"></div>

[`Vector2`](class_vector2.md) **origin** = ``Vector2(0, 0)`` <div id="class_transform2d_property_origin"></div>

The translation offset of this transform, and the column `2` of the matrix. In 2D space, this can be seen as the position.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_property_x"></div>

[`Vector2`](class_vector2.md) **x** = ``Vector2(1, 0)`` <div id="class_transform2d_property_x"></div>

The transform basis's X axis, and the column `0` of the matrix. Combined with [`y`](#class_transform2d_property_y), this represents the transform's rotation, scale, and skew.

On the identity transform, this vector points right ([`Vector2.RIGHT`](#class_vector2_constant_right)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_property_y"></div>

[`Vector2`](class_vector2.md) **y** = ``Vector2(0, 1)`` <div id="class_transform2d_property_y"></div>

The transform basis's Y axis, and the column `1` of the matrix. Combined with [`x`](#class_transform2d_property_x), this represents the transform's rotation, scale, and skew.

On the identity transform, this vector points up ([`Vector2.UP`](#class_vector2_constant_up)).

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_transform2d_constructor_transform2d"></div>

[`Transform2D`](class_transform2d.md) **Transform2D** ( )<div id="class_transform2d_constructor_transform2d"></div>

Constructs a **Transform2D** identical to [`IDENTITY`](#class_transform2d_constant_identity).

<!-- rst-class:: classref-item-separator -->

---

[`Transform2D`](class_transform2d.md) **Transform2D** ( from: [`Transform2D`](class_transform2d.md) )

Constructs a **Transform2D** as a copy of the given **Transform2D**.

<!-- rst-class:: classref-item-separator -->

---

[`Transform2D`](class_transform2d.md) **Transform2D** ( rotation: [`float`](class_float.md), position: [`Vector2`](class_vector2.md) )

Constructs a **Transform2D** from a given angle (in radians) and position.

<!-- rst-class:: classref-item-separator -->

---

[`Transform2D`](class_transform2d.md) **Transform2D** ( rotation: [`float`](class_float.md), scale: [`Vector2`](class_vector2.md), skew: [`float`](class_float.md), position: [`Vector2`](class_vector2.md) )

Constructs a **Transform2D** from a given angle (in radians), scale, skew (in radians), and position.

<!-- rst-class:: classref-item-separator -->

---

[`Transform2D`](class_transform2d.md) **Transform2D** ( x_axis: [`Vector2`](class_vector2.md), y_axis: [`Vector2`](class_vector2.md), origin: [`Vector2`](class_vector2.md) )

Constructs a **Transform2D** from 3 [`Vector2`](class_vector2.md) values representing [`x`](#class_transform2d_property_x), [`y`](#class_transform2d_property_y), and the [`origin`](#class_transform2d_property_origin) (the three matrix columns).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_transform2d_method_affine_inverse"></div>

[`Transform2D`](class_transform2d.md) **affine_inverse** ( ) const[^const]<div id="class_transform2d_method_affine_inverse"></div>

Returns the inverted version of this transform. Unlike [`inverse`](#class_transform2d_method_inverse), this method works with almost any basis, including non-uniform ones, but is slower. See also [`inverse`](#class_transform2d_method_inverse).

 **Note:** For this method to return correctly, the transform's basis needs to have a determinant that is not exactly `0` (see [`determinant`](#class_transform2d_method_determinant)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_basis_xform"></div>

[`Vector2`](class_vector2.md) **basis_xform** ( v: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_transform2d_method_basis_xform"></div>

Returns a copy of the `v` vector, transformed (multiplied) by the transform basis's matrix. Unlike the multiplication operator (`*`), this method ignores the [`origin`](#class_transform2d_property_origin).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_basis_xform_inv"></div>

[`Vector2`](class_vector2.md) **basis_xform_inv** ( v: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_transform2d_method_basis_xform_inv"></div>

Returns a copy of the `v` vector, transformed (multiplied) by the inverse transform basis's matrix (see [`inverse`](#class_transform2d_method_inverse)). This method ignores the [`origin`](#class_transform2d_property_origin).

 **Note:** This method assumes that this transform's basis is *orthonormal* (see [`orthonormalized`](#class_transform2d_method_orthonormalized)). If the basis is not orthonormal, `transform.affine_inverse().basis_xform(vector)` should be used instead (see [`affine_inverse`](#class_transform2d_method_affine_inverse)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_determinant"></div>

[`float`](class_float.md) **determinant** ( ) const[^const]<div id="class_transform2d_method_determinant"></div>

Returns the [*determinant*](https://en.wikipedia.org/wiki/Determinant) of this transform basis's matrix. For advanced math, this number can be used to determine a few attributes:

- If the determinant is exactly `0`, the basis is not invertible (see [`inverse`](#class_transform2d_method_inverse)).

- If the determinant is a negative number, the basis represents a negative scale.

 **Note:** If the basis's scale is the same for every axis, its determinant is always that scale by the power of 2.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_get_origin"></div>

[`Vector2`](class_vector2.md) **get_origin** ( ) const[^const]<div id="class_transform2d_method_get_origin"></div>

Returns this transform's translation. Equivalent to [`origin`](#class_transform2d_property_origin).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_get_rotation"></div>

[`float`](class_float.md) **get_rotation** ( ) const[^const]<div id="class_transform2d_method_get_rotation"></div>

Returns this transform's rotation (in radians). This is equivalent to [`x`](#class_transform2d_property_x)'s angle (see [`Vector2.angle`](#class_vector2_method_angle)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_get_scale"></div>

[`Vector2`](class_vector2.md) **get_scale** ( ) const[^const]<div id="class_transform2d_method_get_scale"></div>

Returns the length of both [`x`](#class_transform2d_property_x) and [`y`](#class_transform2d_property_y), as a [`Vector2`](class_vector2.md). If this transform's basis is not skewed, this value is the scaling factor. It is not affected by rotation.



```gdscript

    var my_transform = Transform2D(
        Vector2(2, 0),
        Vector2(0, 4),
        Vector2(0, 0)
    )
    # Rotating the Transform2D in any way preserves its scale.
    my_transform = my_transform.rotated(TAU / 2)
    
    print(my_transform.get_scale()) # Prints (2, 4).
```

```csharp

    var myTransform = new Transform2D(
        Vector3(2.0f, 0.0f),
        Vector3(0.0f, 4.0f),
        Vector3(0.0f, 0.0f)
    );
    // Rotating the Transform2D in any way preserves its scale.
    myTransform = myTransform.Rotated(Mathf.Tau / 2.0f);
    
    GD.Print(myTransform.GetScale()); // Prints (2, 4, 8).
```



 **Note:** If the value returned by [`determinant`](#class_transform2d_method_determinant) is negative, the scale is also negative.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_get_skew"></div>

[`float`](class_float.md) **get_skew** ( ) const[^const]<div id="class_transform2d_method_get_skew"></div>

Returns this transform's skew (in radians).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_interpolate_with"></div>

[`Transform2D`](class_transform2d.md) **interpolate_with** ( xform: [`Transform2D`](class_transform2d.md), weight: [`float`](class_float.md) ) const[^const]<div id="class_transform2d_method_interpolate_with"></div>

Returns the result of the linear interpolation between this transform and `xform` by the given `weight`.

The `weight` should be between `0.0` and `1.0` (inclusive). Values outside this range are allowed and can be used to perform *extrapolation* instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_inverse"></div>

[`Transform2D`](class_transform2d.md) **inverse** ( ) const[^const]<div id="class_transform2d_method_inverse"></div>

Returns the [*inverted version of this transform*](https://en.wikipedia.org/wiki/Invertible_matrix).

 **Note:** For this method to return correctly, the transform's basis needs to be *orthonormal* (see [`orthonormalized`](#class_transform2d_method_orthonormalized)). That means, the basis should only represent a rotation. If it does not, use [`affine_inverse`](#class_transform2d_method_affine_inverse) instead.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_is_conformal"></div>

[`bool`](class_bool.md) **is_conformal** ( ) const[^const]<div id="class_transform2d_method_is_conformal"></div>

Returns `true` if this transform's basis is conformal. A conformal basis is both *orthogonal* (the axes are perpendicular to each other) and *uniform* (the axes share the same length). This method can be especially useful during physics calculations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_is_equal_approx"></div>

[`bool`](class_bool.md) **is_equal_approx** ( xform: [`Transform2D`](class_transform2d.md) ) const[^const]<div id="class_transform2d_method_is_equal_approx"></div>

Returns `true` if this transform and `xform` are approximately equal, by running [`@GlobalScope.is_equal_approx`](#class_@globalscope_method_is_equal_approx) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_is_finite"></div>

[`bool`](class_bool.md) **is_finite** ( ) const[^const]<div id="class_transform2d_method_is_finite"></div>

Returns `true` if this transform is finite, by calling [`@GlobalScope.is_finite`](#class_@globalscope_method_is_finite) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_looking_at"></div>

[`Transform2D`](class_transform2d.md) **looking_at** ( target: [`Vector2`](class_vector2.md) = Vector2(0, 0) ) const[^const]<div id="class_transform2d_method_looking_at"></div>

Returns a copy of the transform rotated such that the rotated X-axis points towards the `target` position, in global space.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_orthonormalized"></div>

[`Transform2D`](class_transform2d.md) **orthonormalized** ( ) const[^const]<div id="class_transform2d_method_orthonormalized"></div>

Returns a copy of this transform with its basis orthonormalized. An orthonormal basis is both *orthogonal* (the axes are perpendicular to each other) and *normalized* (the axes have a length of `1`), which also means it can only represent rotation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_rotated"></div>

[`Transform2D`](class_transform2d.md) **rotated** ( angle: [`float`](class_float.md) ) const[^const]<div id="class_transform2d_method_rotated"></div>

Returns a copy of the transform rotated by the given `angle` (in radians).

This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the left, i.e., `R * X`.

This can be seen as transforming with respect to the global/parent frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_rotated_local"></div>

[`Transform2D`](class_transform2d.md) **rotated_local** ( angle: [`float`](class_float.md) ) const[^const]<div id="class_transform2d_method_rotated_local"></div>

Returns a copy of the transform rotated by the given `angle` (in radians).

This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the right, i.e., `X * R`.

This can be seen as transforming with respect to the local frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_scaled"></div>

[`Transform2D`](class_transform2d.md) **scaled** ( scale: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_transform2d_method_scaled"></div>

Returns a copy of the transform scaled by the given `scale` factor.

This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the left, i.e., `S * X`.

This can be seen as transforming with respect to the global/parent frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_scaled_local"></div>

[`Transform2D`](class_transform2d.md) **scaled_local** ( scale: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_transform2d_method_scaled_local"></div>

Returns a copy of the transform scaled by the given `scale` factor.

This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the right, i.e., `X * S`.

This can be seen as transforming with respect to the local frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_translated"></div>

[`Transform2D`](class_transform2d.md) **translated** ( offset: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_transform2d_method_translated"></div>

Returns a copy of the transform translated by the given `offset`.

This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the left, i.e., `T * X`.

This can be seen as transforming with respect to the global/parent frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_method_translated_local"></div>

[`Transform2D`](class_transform2d.md) **translated_local** ( offset: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_transform2d_method_translated_local"></div>

Returns a copy of the transform translated by the given `offset`.

This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the right, i.e., `X * T`.

This can be seen as transforming with respect to the local frame.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_transform2d_operator_neq_transform2d"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`Transform2D`](class_transform2d.md) ) <div id="class_transform2d_operator_neq_transform2d"></div>

Returns `true` if the components of both transforms are not equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](#class_transform2d_method_is_equal_approx) instead, which is more reliable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_operator_mul_packedvector2array"></div>

[`PackedVector2Array`](class_packedvector2array.md) **operator *** ( right: [`PackedVector2Array`](class_packedvector2array.md) ) <div id="class_transform2d_operator_mul_packedvector2array"></div>

Transforms (multiplies) every [`Vector2`](class_vector2.md) element of the given [`PackedVector2Array`](class_packedvector2array.md) by this transformation matrix.

On larger arrays, this operation is much faster than transforming each [`Vector2`](class_vector2.md) individually.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_operator_mul_rect2"></div>

[`Rect2`](class_rect2.md) **operator *** ( right: [`Rect2`](class_rect2.md) ) <div id="class_transform2d_operator_mul_rect2"></div>

Transforms (multiplies) the [`Rect2`](class_rect2.md) by this transformation matrix.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_operator_mul_transform2d"></div>

[`Transform2D`](class_transform2d.md) **operator *** ( right: [`Transform2D`](class_transform2d.md) ) <div id="class_transform2d_operator_mul_transform2d"></div>

Transforms (multiplies) this transform by the `right` transform.

This is the operation performed between parent and child [`CanvasItem`](class_canvasitem.md) nodes.

 **Note:** If you need to only modify one attribute of this transform, consider using one of the following methods, instead:

- For translation, see [`translated`](#class_transform2d_method_translated) or [`translated_local`](#class_transform2d_method_translated_local).

- For rotation, see [`rotated`](#class_transform2d_method_rotated) or [`rotated_local`](#class_transform2d_method_rotated_local).

- For scale, see [`scaled`](#class_transform2d_method_scaled) or [`scaled_local`](#class_transform2d_method_scaled_local).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_operator_mul_vector2"></div>

[`Vector2`](class_vector2.md) **operator *** ( right: [`Vector2`](class_vector2.md) ) <div id="class_transform2d_operator_mul_vector2"></div>

Transforms (multiplies) the [`Vector2`](class_vector2.md) by this transformation matrix.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_operator_mul_float"></div>

[`Transform2D`](class_transform2d.md) **operator *** ( right: [`float`](class_float.md) ) <div id="class_transform2d_operator_mul_float"></div>

Multiplies all components of the **Transform2D** by the given [`float`](class_float.md), including the [`origin`](#class_transform2d_property_origin). This affects the transform's scale uniformly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_operator_mul_int"></div>

[`Transform2D`](class_transform2d.md) **operator *** ( right: [`int`](class_int.md) ) <div id="class_transform2d_operator_mul_int"></div>

Multiplies all components of the **Transform2D** by the given [`int`](class_int.md), including the [`origin`](#class_transform2d_property_origin). This affects the transform's scale uniformly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_operator_div_float"></div>

[`Transform2D`](class_transform2d.md) **operator /** ( right: [`float`](class_float.md) ) <div id="class_transform2d_operator_div_float"></div>

Divides all components of the **Transform2D** by the given [`float`](class_float.md), including the [`origin`](#class_transform2d_property_origin). This affects the transform's scale uniformly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_operator_div_int"></div>

[`Transform2D`](class_transform2d.md) **operator /** ( right: [`int`](class_int.md) ) <div id="class_transform2d_operator_div_int"></div>

Divides all components of the **Transform2D** by the given [`int`](class_int.md), including the [`origin`](#class_transform2d_property_origin). This affects the transform's scale uniformly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_operator_eq_transform2d"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`Transform2D`](class_transform2d.md) ) <div id="class_transform2d_operator_eq_transform2d"></div>

Returns `true` if the components of both transforms are exactly equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](#class_transform2d_method_is_equal_approx) instead, which is more reliable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_transform2d_operator_idx_int"></div>

[`Vector2`](class_vector2.md) **operator []** ( index: [`int`](class_int.md) ) <div id="class_transform2d_operator_idx_int"></div>

Accesses each axis (column) of this transform by their index. Index `0` is the same as [`x`](#class_transform2d_property_x), index `1` is the same as [`y`](#class_transform2d_property_y), and index `2` is the same as [`origin`](#class_transform2d_property_origin).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
