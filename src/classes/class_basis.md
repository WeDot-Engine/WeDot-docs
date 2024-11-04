<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Basis.xml。 -->

<div id="_class_basis"></div>

# Basis

A 3×3 matrix for representing 3D rotation and scale.

## 描述

The **Basis** built-in [`Variant`](class_variant.md) type is a 3×3 [*matrix*](https://en.wikipedia.org/wiki/Matrix_(mathematics)) used to represent 3D rotation, scale, and shear. It is frequently used within a [`Transform3D`](class_transform3d.md).

A **Basis** is composed by 3 axis vectors, each representing a column of the matrix: [`x`](#class_basis_property_x), [`y`](#class_basis_property_y), and [`z`](#class_basis_property_z). The length of each axis ([`Vector3.length`](#class_vector3_method_length)) influences the basis's scale, while the direction of all axes influence the rotation. Usually, these axes are perpendicular to one another. However, when you rotate any axis individually, the basis becomes sheared. Applying a sheared basis to a 3D model will make the model appear distorted.

A **Basis** is **orthogonal** if its axes are perpendicular to each other. A basis is **normalized** if the length of every axis is `1`. A basis is **uniform** if all axes share the same length (see [`get_scale`](#class_basis_method_get_scale)). A basis is **orthonormal** if it is both orthogonal and normalized, which allows it to only represent rotations. A basis is **conformal** if it is both orthogonal and uniform, which ensures it is not distorted.

For a general introduction, see the [*Matrices and transforms*](../tutorials/math/matrices_and_transforms) tutorial.

 **Note:** Godot uses a [*right-handed coordinate system*](https://en.wikipedia.org/wiki/Right-hand_rule), which is a common standard. For directions, the convention for built-in types like [`Camera3D`](class_camera3d.md) is for -Z to point forward (+X is right, +Y is up, and +Z is back). Other objects may use different direction conventions. For more information, see the [*3D asset direction conventions*](../tutorials/assets_pipeline/importing_3d_scenes/model_export_considerations.md#d-asset-direction-conventions) tutorial.

 **Note:** The basis matrices are exposed as [*column-major*](https://www.mindcontrol.org/~hplus/graphics/matrix-layout.html) order, which is the same as OpenGL. However, they are stored internally in row-major order, which is the same as DirectX.

通过 C# 使用该 API 时会有显著不同，详见 :ref:`doc_c_sharp_differences`\ 。

## 属性

| [`Vector3`](class_vector3.md) | [`x`](#class_basis_property_x) | ``Vector3(1, 0, 0)`` |
| [`Vector3`](class_vector3.md) | [`y`](#class_basis_property_y) | ``Vector3(0, 1, 0)`` |
| [`Vector3`](class_vector3.md) | [`z`](#class_basis_property_z) | ``Vector3(0, 0, 1)`` |

## 构造函数

| [`Basis`](class_basis.md) | [`Basis`](#class_basis_constructor_basis) ( )                                                                                                                     |
| [`Basis`](class_basis.md) | [`Basis`](#class_basis_constructor_basis) ( from: [`Basis`](class_basis.md) )                                                                                     |
| [`Basis`](class_basis.md) | [`Basis`](#class_basis_constructor_basis) ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) )                                               |
| [`Basis`](class_basis.md) | [`Basis`](#class_basis_constructor_basis) ( from: [`Quaternion`](class_quaternion.md) )                                                                           |
| [`Basis`](class_basis.md) | [`Basis`](#class_basis_constructor_basis) ( x_axis: [`Vector3`](class_vector3.md), y_axis: [`Vector3`](class_vector3.md), z_axis: [`Vector3`](class_vector3.md) ) |

## 方法

| [`float`](class_float.md)           | [`determinant`](#class_basis_method_determinant) ( ) const[^const]                                                                                                                                               |
| [`Basis`](class_basis.md)           | [`from_euler`](#class_basis_method_from_euler) ( euler: [`Vector3`](class_vector3.md), order: [`int`](class_int.md) = 2 ) static[^static]                                                                        |
| [`Basis`](class_basis.md)           | [`from_scale`](#class_basis_method_from_scale) ( scale: [`Vector3`](class_vector3.md) ) static[^static]                                                                                                          |
| [`Vector3`](class_vector3.md)       | [`get_euler`](#class_basis_method_get_euler) ( order: [`int`](class_int.md) = 2 ) const[^const]                                                                                                                  |
| [`Quaternion`](class_quaternion.md) | [`get_rotation_quaternion`](#class_basis_method_get_rotation_quaternion) ( ) const[^const]                                                                                                                       |
| [`Vector3`](class_vector3.md)       | [`get_scale`](#class_basis_method_get_scale) ( ) const[^const]                                                                                                                                                   |
| [`Basis`](class_basis.md)           | [`inverse`](#class_basis_method_inverse) ( ) const[^const]                                                                                                                                                       |
| [`bool`](class_bool.md)             | [`is_conformal`](#class_basis_method_is_conformal) ( ) const[^const]                                                                                                                                             |
| [`bool`](class_bool.md)             | [`is_equal_approx`](#class_basis_method_is_equal_approx) ( b: [`Basis`](class_basis.md) ) const[^const]                                                                                                          |
| [`bool`](class_bool.md)             | [`is_finite`](#class_basis_method_is_finite) ( ) const[^const]                                                                                                                                                   |
| [`Basis`](class_basis.md)           | [`looking_at`](#class_basis_method_looking_at) ( target: [`Vector3`](class_vector3.md), up: [`Vector3`](class_vector3.md) = Vector3(0, 1, 0), use_model_front: [`bool`](class_bool.md) = false ) static[^static] |
| [`Basis`](class_basis.md)           | [`orthonormalized`](#class_basis_method_orthonormalized) ( ) const[^const]                                                                                                                                       |
| [`Basis`](class_basis.md)           | [`rotated`](#class_basis_method_rotated) ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) ) const[^const]                                                                                 |
| [`Basis`](class_basis.md)           | [`scaled`](#class_basis_method_scaled) ( scale: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                    |
| [`Basis`](class_basis.md)           | [`slerp`](#class_basis_method_slerp) ( to: [`Basis`](class_basis.md), weight: [`float`](class_float.md) ) const[^const]                                                                                          |
| [`float`](class_float.md)           | [`tdotx`](#class_basis_method_tdotx) ( with: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                       |
| [`float`](class_float.md)           | [`tdoty`](#class_basis_method_tdoty) ( with: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                       |
| [`float`](class_float.md)           | [`tdotz`](#class_basis_method_tdotz) ( with: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                       |
| [`Basis`](class_basis.md)           | [`transposed`](#class_basis_method_transposed) ( ) const[^const]                                                                                                                                                 |

## 运算符

| [`bool`](class_bool.md)       | [`operator !=`](class_Basis.md#operator_neq_Basis) ( right: [`Basis`](class_basis.md) )      |
| [`Basis`](class_basis.md)     | [`operator *`](class_Basis.md#operator_mul_Basis) ( right: [`Basis`](class_basis.md) )       |
| [`Vector3`](class_vector3.md) | [`operator *`](class_Basis.md#operator_mul_Vector3) ( right: [`Vector3`](class_vector3.md) ) |
| [`Basis`](class_basis.md)     | [`operator *`](class_Basis.md#operator_mul_float) ( right: [`float`](class_float.md) )       |
| [`Basis`](class_basis.md)     | [`operator *`](class_Basis.md#operator_mul_int) ( right: [`int`](class_int.md) )             |
| [`Basis`](class_basis.md)     | [`operator /`](class_Basis.md#operator_div_float) ( right: [`float`](class_float.md) )       |
| [`Basis`](class_basis.md)     | [`operator /`](class_Basis.md#operator_div_int) ( right: [`int`](class_int.md) )             |
| [`bool`](class_bool.md)       | [`operator ==`](class_Basis.md#operator_eq_Basis) ( right: [`Basis`](class_basis.md) )       |
| [`Vector3`](class_vector3.md) | [`operator []`](class_Basis.md#operator_idx_int) ( index: [`int`](class_int.md) )            |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_basis_constant_identity"></div>

**IDENTITY** = ``Basis(1, 0, 0, 0, 1, 0, 0, 0, 1)`` <div id="class_basis_constant_identity"></div>

The identity basis. This is a basis with no rotation, no shear, and its scale being `1`. This means that:

- The [`x`](#class_basis_property_x) points right ([`Vector3.RIGHT`](#class_vector3_constant_right));

- The [`y`](#class_basis_property_y) points up ([`Vector3.UP`](#class_vector3_constant_up));

- The [`z`](#class_basis_property_z) points back ([`Vector3.BACK`](#class_vector3_constant_back)).

```

    var basis := Basis.IDENTITY
    print("| X | Y | Z")
    print("| %s | %s | %s" % [basis.x.x, basis.y.x, basis.z.x])
    print("| %s | %s | %s" % [basis.x.y, basis.y.y, basis.z.y])
    print("| %s | %s | %s" % [basis.x.z, basis.y.z, basis.z.z])
    # Prints:
    # | X | Y | Z
    # | 1 | 0 | 0
    # | 0 | 1 | 0
    # | 0 | 0 | 1
```

This is identical to creating [`Basis`](#class_basis_constructor_basis) without any parameters. This constant can be used to make your code clearer, and for consistency with C#.



<div id="_class_basis_constant_flip_x"></div>

**FLIP_X** = ``Basis(-1, 0, 0, 0, 1, 0, 0, 0, 1)`` <div id="class_basis_constant_flip_x"></div>

When any basis is multiplied by [`FLIP_X`](#class_basis_constant_flip_x), it negates all components of the [`x`](#class_basis_property_x) axis (the X column).

When [`FLIP_X`](#class_basis_constant_flip_x) is multiplied by any basis, it negates the [`Vector3.x`](#class_vector3_property_x) component of all axes (the X row).

<div id="_class_basis_constant_flip_y"></div>

**FLIP_Y** = ``Basis(1, 0, 0, 0, -1, 0, 0, 0, 1)`` <div id="class_basis_constant_flip_y"></div>

When any basis is multiplied by [`FLIP_Y`](#class_basis_constant_flip_y), it negates all components of the [`y`](#class_basis_property_y) axis (the Y column).

When [`FLIP_Y`](#class_basis_constant_flip_y) is multiplied by any basis, it negates the [`Vector3.y`](#class_vector3_property_y) component of all axes (the Y row).

<div id="_class_basis_constant_flip_z"></div>

**FLIP_Z** = ``Basis(1, 0, 0, 0, 1, 0, 0, 0, -1)`` <div id="class_basis_constant_flip_z"></div>

When any basis is multiplied by [`FLIP_Z`](#class_basis_constant_flip_z), it negates all components of the [`z`](#class_basis_property_z) axis (the Z column).

When [`FLIP_Z`](#class_basis_constant_flip_z) is multiplied by any basis, it negates the [`Vector3.z`](#class_vector3_property_z) component of all axes (the Z row).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_basis_property_x"></div>

[`Vector3`](class_vector3.md) **x** = ``Vector3(1, 0, 0)`` <div id="class_basis_property_x"></div>

The basis's X axis, and the column `0` of the matrix.

On the identity basis, this vector points right ([`Vector3.RIGHT`](#class_vector3_constant_right)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_property_y"></div>

[`Vector3`](class_vector3.md) **y** = ``Vector3(0, 1, 0)`` <div id="class_basis_property_y"></div>

The basis's Y axis, and the column `1` of the matrix.

On the identity basis, this vector points up ([`Vector3.UP`](#class_vector3_constant_up)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_property_z"></div>

[`Vector3`](class_vector3.md) **z** = ``Vector3(0, 0, 1)`` <div id="class_basis_property_z"></div>

The basis's Z axis, and the column `2` of the matrix.

On the identity basis, this vector points back ([`Vector3.BACK`](#class_vector3_constant_back)).

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_basis_constructor_basis"></div>

[`Basis`](class_basis.md) **Basis** ( )<div id="class_basis_constructor_basis"></div>

Constructs a **Basis** identical to the [`IDENTITY`](#class_basis_constant_identity).

<!-- rst-class:: classref-item-separator -->

---

[`Basis`](class_basis.md) **Basis** ( from: [`Basis`](class_basis.md) )

Constructs a **Basis** as a copy of the given **Basis**.

<!-- rst-class:: classref-item-separator -->

---

[`Basis`](class_basis.md) **Basis** ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) )

Constructs a **Basis** that only represents rotation, rotated around the `axis` by the given `angle`, in radians. The axis must be a normalized vector.

 **Note:** This is the same as using [`rotated`](#class_basis_method_rotated) on the [`IDENTITY`](#class_basis_constant_identity) basis. With more than one angle consider using [`from_euler`](#class_basis_method_from_euler), instead.

<!-- rst-class:: classref-item-separator -->

---

[`Basis`](class_basis.md) **Basis** ( from: [`Quaternion`](class_quaternion.md) )

Constructs a **Basis** that only represents rotation from the given [`Quaternion`](class_quaternion.md).

 **Note:** Quaternions *only* store rotation, not scale. Because of this, conversions from **Basis** to [`Quaternion`](class_quaternion.md) cannot always be reversed.

<!-- rst-class:: classref-item-separator -->

---

[`Basis`](class_basis.md) **Basis** ( x_axis: [`Vector3`](class_vector3.md), y_axis: [`Vector3`](class_vector3.md), z_axis: [`Vector3`](class_vector3.md) )

Constructs a **Basis** from 3 axis vectors. These are the columns of the basis matrix.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_basis_method_determinant"></div>

[`float`](class_float.md) **determinant** ( ) const[^const]<div id="class_basis_method_determinant"></div>

Returns the [*determinant*](https://en.wikipedia.org/wiki/Determinant) of this basis's matrix. For advanced math, this number can be used to determine a few attributes:

- If the determinant is exactly `0`, the basis is not invertible (see [`inverse`](#class_basis_method_inverse)).

- If the determinant is a negative number, the basis represents a negative scale.

 **Note:** If the basis's scale is the same for every axis, its determinant is always that scale by the power of 2.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_from_euler"></div>

[`Basis`](class_basis.md) **from_euler** ( euler: [`Vector3`](class_vector3.md), order: [`int`](class_int.md) = 2 ) static[^static]<div id="class_basis_method_from_euler"></div>

Constructs a new **Basis** that only represents rotation from the given [`Vector3`](class_vector3.md) of [*Euler angles*](https://en.wikipedia.org/wiki/Euler_angles), in radians.

- The [`Vector3.x`](#class_vector3_property_x) should contain the angle around the [`x`](#class_basis_property_x) axis (pitch).

- The [`Vector3.y`](#class_vector3_property_y) should contain the angle around the [`y`](#class_basis_property_y) axis (yaw).

- The [`Vector3.z`](#class_vector3_property_z) should contain the angle around the [`z`](#class_basis_property_z) axis (roll).



```gdscript

    # Creates a Basis whose z axis points down.
    var my_basis = Basis.from_euler(Vector3(TAU / 4, 0, 0))
    
    print(my_basis.z) # Prints (0, -1, 0).
```

```csharp

    // Creates a Basis whose z axis points down.
    var myBasis = Basis.FromEuler(new Vector3(Mathf.Tau / 4.0f, 0.0f, 0.0f));
    
    GD.Print(myBasis.Z); // Prints (0, -1, 0).
```



The order of each consecutive rotation can be changed with `order` (see [EulerOrder](#enum_@globalscope_eulerorder) constants). By default, the YXZ convention is used ([`@GlobalScope.EULER_ORDER_YXZ`](#class_@globalscope_constant_euler_order_yxz)): the basis rotates first around the Y axis (yaw), then X (pitch), and lastly Z (roll). When using the opposite method [`get_euler`](#class_basis_method_get_euler), this order is reversed.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_from_scale"></div>

[`Basis`](class_basis.md) **from_scale** ( scale: [`Vector3`](class_vector3.md) ) static[^static]<div id="class_basis_method_from_scale"></div>

Constructs a new **Basis** that only represents scale, with no rotation or shear, from the given `scale` vector.



```gdscript

    var my_basis = Basis.from_scale(Vector3(2, 4, 8))
    
    print(my_basis.x) # Prints (2, 0, 0).
    print(my_basis.y) # Prints (0, 4, 0).
    print(my_basis.z) # Prints (0, 0, 8).
```

```csharp

    var myBasis = Basis.FromScale(new Vector3(2.0f, 4.0f, 8.0f));
    
    GD.Print(myBasis.X); // Prints (2, 0, 0).
    GD.Print(myBasis.Y); // Prints (0, 4, 0).
    GD.Print(myBasis.Z); // Prints (0, 0, 8).
```



 **Note:** In linear algebra, the matrix of this basis is also known as a [*diagonal matrix*](https://en.wikipedia.org/wiki/Diagonal_matrix).





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_get_euler"></div>

[`Vector3`](class_vector3.md) **get_euler** ( order: [`int`](class_int.md) = 2 ) const[^const]<div id="class_basis_method_get_euler"></div>

Returns this basis's rotation as a [`Vector3`](class_vector3.md) of [*Euler angles*](https://en.wikipedia.org/wiki/Euler_angles), in radians.

- The [`Vector3.x`](#class_vector3_property_x) contains the angle around the [`x`](#class_basis_property_x) axis (pitch);

- The [`Vector3.y`](#class_vector3_property_y) contains the angle around the [`y`](#class_basis_property_y) axis (yaw);

- The [`Vector3.z`](#class_vector3_property_z) contains the angle around the [`z`](#class_basis_property_z) axis (roll).

The order of each consecutive rotation can be changed with `order` (see [EulerOrder](#enum_@globalscope_eulerorder) constants). By default, the YXZ convention is used ([`@GlobalScope.EULER_ORDER_YXZ`](#class_@globalscope_constant_euler_order_yxz)): Z (roll) is calculated first, then X (pitch), and lastly Y (yaw). When using the opposite method [`from_euler`](#class_basis_method_from_euler), this order is reversed.

 **Note:** Euler angles are much more intuitive but are not suitable for 3D math. Because of this, consider using the [`get_rotation_quaternion`](#class_basis_method_get_rotation_quaternion) method instead, which returns a [`Quaternion`](class_quaternion.md).

 **Note:** In the Inspector dock, a basis's rotation is often displayed in Euler angles (in degrees), as is the case with the [`Node3D.rotation`](#class_node3d_property_rotation) property.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_get_rotation_quaternion"></div>

[`Quaternion`](class_quaternion.md) **get_rotation_quaternion** ( ) const[^const]<div id="class_basis_method_get_rotation_quaternion"></div>

Returns this basis's rotation as a [`Quaternion`](class_quaternion.md).

 **Note:** Quatenions are much more suitable for 3D math but are less intuitive. For user interfaces, consider using the [`get_euler`](#class_basis_method_get_euler) method, which returns Euler angles.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_get_scale"></div>

[`Vector3`](class_vector3.md) **get_scale** ( ) const[^const]<div id="class_basis_method_get_scale"></div>

Returns the length of each axis of this basis, as a [`Vector3`](class_vector3.md). If the basis is not sheared, this is the scaling factor. It is not affected by rotation.



```gdscript

    var my_basis = Basis(
        Vector3(2, 0, 0),
        Vector3(0, 4, 0),
        Vector3(0, 0, 8)
    )
    # Rotating the Basis in any way preserves its scale.
    my_basis = my_basis.rotated(Vector3.UP, TAU / 2)
    my_basis = my_basis.rotated(Vector3.RIGHT, TAU / 4)
    
    print(my_basis.get_scale()) # Prints (2, 4, 8).
```

```csharp

    var myBasis = new Basis(
        Vector3(2.0f, 0.0f, 0.0f),
        Vector3(0.0f, 4.0f, 0.0f),
        Vector3(0.0f, 0.0f, 8.0f)
    );
    // Rotating the Basis in any way preserves its scale.
    myBasis = myBasis.Rotated(Vector3.Up, Mathf.Tau / 2.0f);
    myBasis = myBasis.Rotated(Vector3.Right, Mathf.Tau / 4.0f);
    
    GD.Print(myBasis.Scale); // Prints (2, 4, 8).
```



 **Note:** If the value returned by [`determinant`](#class_basis_method_determinant) is negative, the scale is also negative.





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_inverse"></div>

[`Basis`](class_basis.md) **inverse** ( ) const[^const]<div id="class_basis_method_inverse"></div>

Returns the [*inverse of this basis's matrix*](https://en.wikipedia.org/wiki/Invertible_matrix).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_is_conformal"></div>

[`bool`](class_bool.md) **is_conformal** ( ) const[^const]<div id="class_basis_method_is_conformal"></div>

Returns `true` if this basis is conformal. A conformal basis is both *orthogonal* (the axes are perpendicular to each other) and *uniform* (the axes share the same length). This method can be especially useful during physics calculations.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_is_equal_approx"></div>

[`bool`](class_bool.md) **is_equal_approx** ( b: [`Basis`](class_basis.md) ) const[^const]<div id="class_basis_method_is_equal_approx"></div>

Returns `true` if this basis and `b` are approximately equal, by calling [`@GlobalScope.is_equal_approx`](#class_@globalscope_method_is_equal_approx) on all vector components.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_is_finite"></div>

[`bool`](class_bool.md) **is_finite** ( ) const[^const]<div id="class_basis_method_is_finite"></div>

Returns `true` if this basis is finite, by calling [`@GlobalScope.is_finite`](#class_@globalscope_method_is_finite) on all vector components.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_looking_at"></div>

[`Basis`](class_basis.md) **looking_at** ( target: [`Vector3`](class_vector3.md), up: [`Vector3`](class_vector3.md) = Vector3(0, 1, 0), use_model_front: [`bool`](class_bool.md) = false ) static[^static]<div id="class_basis_method_looking_at"></div>

Creates a new **Basis** with a rotation such that the forward axis (-Z) points towards the `target` position.

By default, the -Z axis (camera forward) is treated as forward (implies +X is right). If `use_model_front` is `true`, the +Z axis (asset front) is treated as forward (implies +X is left) and points toward the `target` position.

The up axis (+Y) points as close to the `up` vector as possible while staying perpendicular to the forward axis. The returned basis is orthonormalized (see [`orthonormalized`](#class_basis_method_orthonormalized)). The `target` and `up` vectors cannot be [`Vector3.ZERO`](#class_vector3_constant_zero), and cannot be parallel to each other.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_orthonormalized"></div>

[`Basis`](class_basis.md) **orthonormalized** ( ) const[^const]<div id="class_basis_method_orthonormalized"></div>

Returns the orthonormalized version of this basis. An orthonormal basis is both *orthogonal* (the axes are perpendicular to each other) and *normalized* (the axes have a length of `1`), which also means it can only represent rotation.

It is often useful to call this method to avoid rounding errors on a rotating basis:



```gdscript

    # Rotate this Node3D every frame.
    func _process(delta):
        basis = basis.rotated(Vector3.UP, TAU * delta)
        basis = basis.rotated(Vector3.RIGHT, TAU * delta)
    
        basis = basis.orthonormalized()
```

```csharp

    // Rotate this Node3D every frame.
    public override void _Process(double delta)
    {
        Basis = Basis.Rotated(Vector3.Up, Mathf.Tau * (float)delta)
                     .Rotated(Vector3.Right, Mathf.Tau * (float)delta)
                     .Orthonormalized();
    }
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_rotated"></div>

[`Basis`](class_basis.md) **rotated** ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) ) const[^const]<div id="class_basis_method_rotated"></div>

Returns this basis rotated around the given `axis` by `angle` (in radians). The `axis` must be a normalized vector (see [`Vector3.normalized`](#class_vector3_method_normalized)).

Positive values rotate this basis clockwise around the axis, while negative values rotate it counterclockwise.



```gdscript

    var my_basis = Basis.IDENTITY
    var angle = TAU / 2
    
    my_basis = my_basis.rotated(Vector3.UP, angle)    # Rotate around the up axis (yaw).
    my_basis = my_basis.rotated(Vector3.RIGHT, angle) # Rotate around the right axis (pitch).
    my_basis = my_basis.rotated(Vector3.BACK, angle)  # Rotate around the back axis (roll).
```

```csharp

    var myBasis = Basis.Identity;
    var angle = Mathf.Tau / 2.0f;
    
    myBasis = myBasis.Rotated(Vector3.Up, angle);    // Rotate around the up axis (yaw).
    myBasis = myBasis.Rotated(Vector3.Right, angle); // Rotate around the right axis (pitch).
    myBasis = myBasis.Rotated(Vector3.Back, angle);  // Rotate around the back axis (roll).
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_scaled"></div>

[`Basis`](class_basis.md) **scaled** ( scale: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_basis_method_scaled"></div>

Returns this basis with each axis's components scaled by the given `scale`'s components.

The basis matrix's rows are multiplied by `scale`'s components. This operation is a global scale (relative to the parent).



```gdscript

    var my_basis = Basis(
        Vector3(1, 1, 1),
        Vector3(2, 2, 2),
        Vector3(3, 3, 3)
    )
    my_basis = my_basis.scaled(Vector3(0, 2, -2))
    
    print(my_basis.x) # Prints (0, 2, -2).
    print(my_basis.y) # Prints (0, 4, -4).
    print(my_basis.z) # Prints (0, 6, -6).
```

```csharp

    var myBasis = new Basis(
        new Vector3(1.0f, 1.0f, 1.0f),
        new Vector3(2.0f, 2.0f, 2.0f),
        new Vector3(3.0f, 3.0f, 3.0f)
    );
    myBasis = myBasis.Scaled(new Vector3(0.0f, 2.0f, -2.0f));
    
    GD.Print(myBasis.X); // Prints (0, 2, -2).
    GD.Print(myBasis.Y); // Prints (0, 4, -4).
    GD.Print(myBasis.Z); // Prints (0, 6, -6).
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_slerp"></div>

[`Basis`](class_basis.md) **slerp** ( to: [`Basis`](class_basis.md), weight: [`float`](class_float.md) ) const[^const]<div id="class_basis_method_slerp"></div>

Performs a spherical-linear interpolation with the `to` basis, given a `weight`. Both this basis and `to` should represent a rotation.

 **Example:** Smoothly rotate a [`Node3D`](class_node3d.md) to the target basis over time, with a [`Tween`](class_tween.md).

```

    var start_basis = Basis.IDENTITY
    var target_basis = Basis.IDENTITY.rotated(Vector3.UP, TAU / 2)
    
    func _ready():
        create_tween().tween_method(interpolate, 0.0, 1.0, 5.0).set_trans(Tween.TRANS_EXPO)
    
    func interpolate(weight):
        basis = start_basis.slerp(target_basis, weight)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_tdotx"></div>

[`float`](class_float.md) **tdotx** ( with: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_basis_method_tdotx"></div>

Returns the transposed dot product between `with` and the [`x`](#class_basis_property_x) axis (see [`transposed`](#class_basis_method_transposed)).

This is equivalent to `basis.x.dot(vector)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_tdoty"></div>

[`float`](class_float.md) **tdoty** ( with: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_basis_method_tdoty"></div>

Returns the transposed dot product between `with` and the [`y`](#class_basis_property_y) axis (see [`transposed`](#class_basis_method_transposed)).

This is equivalent to `basis.y.dot(vector)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_tdotz"></div>

[`float`](class_float.md) **tdotz** ( with: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_basis_method_tdotz"></div>

Returns the transposed dot product between `with` and the [`z`](#class_basis_property_z) axis (see [`transposed`](#class_basis_method_transposed)).

This is equivalent to `basis.z.dot(vector)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_method_transposed"></div>

[`Basis`](class_basis.md) **transposed** ( ) const[^const]<div id="class_basis_method_transposed"></div>

Returns the transposed version of this basis. This turns the basis matrix's columns into rows, and its rows into columns.



```gdscript

    var my_basis = Basis(
        Vector3(1, 2, 3),
        Vector3(4, 5, 6),
        Vector3(7, 8, 9)
    )
    my_basis = my_basis.transposed()
    
    print(my_basis.x) # Prints (1, 4, 7).
    print(my_basis.y) # Prints (2, 5, 8).
    print(my_basis.z) # Prints (3, 6, 9).
```

```csharp

    var myBasis = new Basis(
        new Vector3(1.0f, 2.0f, 3.0f),
        new Vector3(4.0f, 5.0f, 6.0f),
        new Vector3(7.0f, 8.0f, 9.0f)
    );
    myBasis = myBasis.Transposed();
    
    GD.Print(myBasis.X); // Prints (1, 4, 7).
    GD.Print(myBasis.Y); // Prints (2, 5, 8).
    GD.Print(myBasis.Z); // Prints (3, 6, 9).
```







<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_basis_operator_neq_basis"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`Basis`](class_basis.md) ) <div id="class_basis_operator_neq_basis"></div>

Returns `true` if the components of both **Basis** matrices are not equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](#class_basis_method_is_equal_approx) instead, which is more reliable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_operator_mul_basis"></div>

[`Basis`](class_basis.md) **operator *** ( right: [`Basis`](class_basis.md) ) <div id="class_basis_operator_mul_basis"></div>

Transforms (multiplies) the `right` basis by this basis.

This is the operation performed between parent and child [`Node3D`](class_node3d.md) s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_operator_mul_vector3"></div>

[`Vector3`](class_vector3.md) **operator *** ( right: [`Vector3`](class_vector3.md) ) <div id="class_basis_operator_mul_vector3"></div>

Transforms (multiplies) the `right` vector by this basis, returning a [`Vector3`](class_vector3.md).



```gdscript

    # Basis that swaps the X/Z axes and doubles the scale.
    var my_basis = Basis(Vector3(0, 2, 0), Vector3(2, 0, 0), Vector3(0, 0, 2))
    print(my_basis * Vector3(1, 2, 3)) # Prints (4, 2, 6)
```

```csharp

    // Basis that swaps the X/Z axes and doubles the scale.
    var myBasis = new Basis(new Vector3(0, 2, 0), new Vector3(2, 0, 0), new Vector3(0, 0, 2));
    GD.Print(myBasis * new Vector3(1, 2, 3)); // Prints (4, 2, 6)
```







<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_operator_mul_float"></div>

[`Basis`](class_basis.md) **operator *** ( right: [`float`](class_float.md) ) <div id="class_basis_operator_mul_float"></div>

Multiplies all components of the **Basis** by the given [`float`](class_float.md). This affects the basis's scale uniformly, resizing all 3 axes by the `right` value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_operator_mul_int"></div>

[`Basis`](class_basis.md) **operator *** ( right: [`int`](class_int.md) ) <div id="class_basis_operator_mul_int"></div>

Multiplies all components of the **Basis** by the given [`int`](class_int.md). This affects the basis's scale uniformly, resizing all 3 axes by the `right` value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_operator_div_float"></div>

[`Basis`](class_basis.md) **operator /** ( right: [`float`](class_float.md) ) <div id="class_basis_operator_div_float"></div>

Divides all components of the **Basis** by the given [`float`](class_float.md). This affects the basis's scale uniformly, resizing all 3 axes by the `right` value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_operator_div_int"></div>

[`Basis`](class_basis.md) **operator /** ( right: [`int`](class_int.md) ) <div id="class_basis_operator_div_int"></div>

Divides all components of the **Basis** by the given [`int`](class_int.md). This affects the basis's scale uniformly, resizing all 3 axes by the `right` value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_operator_eq_basis"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`Basis`](class_basis.md) ) <div id="class_basis_operator_eq_basis"></div>

Returns `true` if the components of both **Basis** matrices are exactly equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](#class_basis_method_is_equal_approx) instead, which is more reliable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_basis_operator_idx_int"></div>

[`Vector3`](class_vector3.md) **operator []** ( index: [`int`](class_int.md) ) <div id="class_basis_operator_idx_int"></div>

Accesses each axis (column) of this basis by their index. Index `0` is the same as [`x`](#class_basis_property_x), index `1` is the same as [`y`](#class_basis_property_y), and index `2` is the same as [`z`](#class_basis_property_z).

 **Note:** In C++, this operator accesses the rows of the basis matrix, *not* the columns. For the same behavior as scripting languages, use the `set_column` and `get_column` methods.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
