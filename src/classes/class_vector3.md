<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Vector3.xml。 -->

<div id="_class_vector3"></div>

# Vector3

A 3D vector using floating-point coordinates.

## 描述

A 3-element structure that can be used to represent 3D coordinates or any other triplet of numeric values.

It uses floating-point coordinates. By default, these floating-point values use 32-bit precision, unlike [`float`](class_float.md) which is always 64-bit. If double precision is needed, compile the engine with the option `precision=double`.

See [`Vector3i`](class_vector3i.md) for its integer counterpart.

 **Note:** In a boolean context, a Vector3 will evaluate to `false` if it's equal to `Vector3(0, 0, 0)`. Otherwise, a Vector3 will always evaluate to `true`.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`x`](class_vector3.md#class_vector3_property_x) | ``0.0`` |
| [`float`](class_float.md) | [`y`](class_vector3.md#class_vector3_property_y) | ``0.0`` |
| [`float`](class_float.md) | [`z`](class_vector3.md#class_vector3_property_z) | ``0.0`` |

## 构造函数

|||
|:-:|:--|
| [`Vector3`](class_vector3.md) | [`Vector3`](class_vector3.md#class_vector3_constructor_vector3) ( )                                                                                          |
| [`Vector3`](class_vector3.md) | [`Vector3`](class_vector3.md#class_vector3_constructor_vector3) ( from: [`Vector3`](class_vector3.md) )                                                      |
| [`Vector3`](class_vector3.md) | [`Vector3`](class_vector3.md#class_vector3_constructor_vector3) ( from: [`Vector3i`](class_vector3i.md) )                                                    |
| [`Vector3`](class_vector3.md) | [`Vector3`](class_vector3.md#class_vector3_constructor_vector3) ( x: [`float`](class_float.md), y: [`float`](class_float.md), z: [`float`](class_float.md) ) |

## 方法

|||
|:-:|:--|
| [`Vector3`](class_vector3.md) | [`abs`](class_vector3.md#class_vector3_method_abs) ( ) const[^const]                                                                                                                                                                                                                                                                                                       |
| [`float`](class_float.md)     | [`angle_to`](class_vector3.md#class_vector3_method_angle_to) ( to: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                                                           |
| [`Vector3`](class_vector3.md) | [`bezier_derivative`](class_vector3.md#class_vector3_method_bezier_derivative) ( control_1: [`Vector3`](class_vector3.md), control_2: [`Vector3`](class_vector3.md), end: [`Vector3`](class_vector3.md), t: [`float`](class_float.md) ) const[^const]                                                                                                                      |
| [`Vector3`](class_vector3.md) | [`bezier_interpolate`](class_vector3.md#class_vector3_method_bezier_interpolate) ( control_1: [`Vector3`](class_vector3.md), control_2: [`Vector3`](class_vector3.md), end: [`Vector3`](class_vector3.md), t: [`float`](class_float.md) ) const[^const]                                                                                                                    |
| [`Vector3`](class_vector3.md) | [`bounce`](class_vector3.md#class_vector3_method_bounce) ( n: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                                                                |
| [`Vector3`](class_vector3.md) | [`ceil`](class_vector3.md#class_vector3_method_ceil) ( ) const[^const]                                                                                                                                                                                                                                                                                                     |
| [`Vector3`](class_vector3.md) | [`clamp`](class_vector3.md#class_vector3_method_clamp) ( min: [`Vector3`](class_vector3.md), max: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                            |
| [`Vector3`](class_vector3.md) | [`clampf`](class_vector3.md#class_vector3_method_clampf) ( min: [`float`](class_float.md), max: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                  |
| [`Vector3`](class_vector3.md) | [`cross`](class_vector3.md#class_vector3_method_cross) ( with: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                                                               |
| [`Vector3`](class_vector3.md) | [`cubic_interpolate`](class_vector3.md#class_vector3_method_cubic_interpolate) ( b: [`Vector3`](class_vector3.md), pre_a: [`Vector3`](class_vector3.md), post_b: [`Vector3`](class_vector3.md), weight: [`float`](class_float.md) ) const[^const]                                                                                                                          |
| [`Vector3`](class_vector3.md) | [`cubic_interpolate_in_time`](class_vector3.md#class_vector3_method_cubic_interpolate_in_time) ( b: [`Vector3`](class_vector3.md), pre_a: [`Vector3`](class_vector3.md), post_b: [`Vector3`](class_vector3.md), weight: [`float`](class_float.md), b_t: [`float`](class_float.md), pre_a_t: [`float`](class_float.md), post_b_t: [`float`](class_float.md) ) const[^const] |
| [`Vector3`](class_vector3.md) | [`direction_to`](class_vector3.md#class_vector3_method_direction_to) ( to: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                                                   |
| [`float`](class_float.md)     | [`distance_squared_to`](class_vector3.md#class_vector3_method_distance_squared_to) ( to: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                                     |
| [`float`](class_float.md)     | [`distance_to`](class_vector3.md#class_vector3_method_distance_to) ( to: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                                                     |
| [`float`](class_float.md)     | [`dot`](class_vector3.md#class_vector3_method_dot) ( with: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                                                                   |
| [`Vector3`](class_vector3.md) | [`floor`](class_vector3.md#class_vector3_method_floor) ( ) const[^const]                                                                                                                                                                                                                                                                                                   |
| [`Vector3`](class_vector3.md) | [`inverse`](class_vector3.md#class_vector3_method_inverse) ( ) const[^const]                                                                                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)       | [`is_equal_approx`](class_vector3.md#class_vector3_method_is_equal_approx) ( to: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)       | [`is_finite`](class_vector3.md#class_vector3_method_is_finite) ( ) const[^const]                                                                                                                                                                                                                                                                                           |
| [`bool`](class_bool.md)       | [`is_normalized`](class_vector3.md#class_vector3_method_is_normalized) ( ) const[^const]                                                                                                                                                                                                                                                                                   |
| [`bool`](class_bool.md)       | [`is_zero_approx`](class_vector3.md#class_vector3_method_is_zero_approx) ( ) const[^const]                                                                                                                                                                                                                                                                                 |
| [`float`](class_float.md)     | [`length`](class_vector3.md#class_vector3_method_length) ( ) const[^const]                                                                                                                                                                                                                                                                                                 |
| [`float`](class_float.md)     | [`length_squared`](class_vector3.md#class_vector3_method_length_squared) ( ) const[^const]                                                                                                                                                                                                                                                                                 |
| [`Vector3`](class_vector3.md) | [`lerp`](class_vector3.md#class_vector3_method_lerp) ( to: [`Vector3`](class_vector3.md), weight: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                |
| [`Vector3`](class_vector3.md) | [`limit_length`](class_vector3.md#class_vector3_method_limit_length) ( length: [`float`](class_float.md) = 1.0 ) const[^const]                                                                                                                                                                                                                                             |
| [`Vector3`](class_vector3.md) | [`max`](class_vector3.md#class_vector3_method_max) ( with: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)         | [`max_axis_index`](class_vector3.md#class_vector3_method_max_axis_index) ( ) const[^const]                                                                                                                                                                                                                                                                                 |
| [`Vector3`](class_vector3.md) | [`maxf`](class_vector3.md#class_vector3_method_maxf) ( with: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                                                     |
| [`Vector3`](class_vector3.md) | [`min`](class_vector3.md#class_vector3_method_min) ( with: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)         | [`min_axis_index`](class_vector3.md#class_vector3_method_min_axis_index) ( ) const[^const]                                                                                                                                                                                                                                                                                 |
| [`Vector3`](class_vector3.md) | [`minf`](class_vector3.md#class_vector3_method_minf) ( with: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                                                     |
| [`Vector3`](class_vector3.md) | [`move_toward`](class_vector3.md#class_vector3_method_move_toward) ( to: [`Vector3`](class_vector3.md), delta: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                   |
| [`Vector3`](class_vector3.md) | [`normalized`](class_vector3.md#class_vector3_method_normalized) ( ) const[^const]                                                                                                                                                                                                                                                                                         |
| [`Vector3`](class_vector3.md) | [`octahedron_decode`](class_vector3.md#class_vector3_method_octahedron_decode) ( uv: [`Vector2`](class_vector2.md) ) static[^static]                                                                                                                                                                                                                                       |
| [`Vector2`](class_vector2.md) | [`octahedron_encode`](class_vector3.md#class_vector3_method_octahedron_encode) ( ) const[^const]                                                                                                                                                                                                                                                                           |
| [`Basis`](class_basis.md)     | [`outer`](class_vector3.md#class_vector3_method_outer) ( with: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                                                               |
| [`Vector3`](class_vector3.md) | [`posmod`](class_vector3.md#class_vector3_method_posmod) ( mod: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                                                  |
| [`Vector3`](class_vector3.md) | [`posmodv`](class_vector3.md#class_vector3_method_posmodv) ( modv: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                                                           |
| [`Vector3`](class_vector3.md) | [`project`](class_vector3.md#class_vector3_method_project) ( b: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                                                              |
| [`Vector3`](class_vector3.md) | [`reflect`](class_vector3.md#class_vector3_method_reflect) ( n: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                                                              |
| [`Vector3`](class_vector3.md) | [`rotated`](class_vector3.md#class_vector3_method_rotated) ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                         |
| [`Vector3`](class_vector3.md) | [`round`](class_vector3.md#class_vector3_method_round) ( ) const[^const]                                                                                                                                                                                                                                                                                                   |
| [`Vector3`](class_vector3.md) | [`sign`](class_vector3.md#class_vector3_method_sign) ( ) const[^const]                                                                                                                                                                                                                                                                                                     |
| [`float`](class_float.md)     | [`signed_angle_to`](class_vector3.md#class_vector3_method_signed_angle_to) ( to: [`Vector3`](class_vector3.md), axis: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                        |
| [`Vector3`](class_vector3.md) | [`slerp`](class_vector3.md#class_vector3_method_slerp) ( to: [`Vector3`](class_vector3.md), weight: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                              |
| [`Vector3`](class_vector3.md) | [`slide`](class_vector3.md#class_vector3_method_slide) ( n: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                                                                  |
| [`Vector3`](class_vector3.md) | [`snapped`](class_vector3.md#class_vector3_method_snapped) ( step: [`Vector3`](class_vector3.md) ) const[^const]                                                                                                                                                                                                                                                           |
| [`Vector3`](class_vector3.md) | [`snappedf`](class_vector3.md#class_vector3_method_snappedf) ( step: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                                             |

## 运算符

|||
|:-:|:--|
| [`bool`](class_bool.md)       | [`operator !=`](class_Vector3.md#operator_neq_Vector3) ( right: [`Vector3`](class_vector3.md) )            |
| [`Vector3`](class_vector3.md) | [`operator *`](class_Vector3.md#operator_mul_Basis) ( right: [`Basis`](class_basis.md) )                   |
| [`Vector3`](class_vector3.md) | [`operator *`](class_Vector3.md#operator_mul_Quaternion) ( right: [`Quaternion`](class_quaternion.md) )    |
| [`Vector3`](class_vector3.md) | [`operator *`](class_Vector3.md#operator_mul_Transform3D) ( right: [`Transform3D`](class_transform3d.md) ) |
| [`Vector3`](class_vector3.md) | [`operator *`](class_Vector3.md#operator_mul_Vector3) ( right: [`Vector3`](class_vector3.md) )             |
| [`Vector3`](class_vector3.md) | [`operator *`](class_Vector3.md#operator_mul_float) ( right: [`float`](class_float.md) )                   |
| [`Vector3`](class_vector3.md) | [`operator *`](class_Vector3.md#operator_mul_int) ( right: [`int`](class_int.md) )                         |
| [`Vector3`](class_vector3.md) | [`operator +`](class_Vector3.md#operator_sum_Vector3) ( right: [`Vector3`](class_vector3.md) )             |
| [`Vector3`](class_vector3.md) | [`operator -`](class_Vector3.md#operator_dif_Vector3) ( right: [`Vector3`](class_vector3.md) )             |
| [`Vector3`](class_vector3.md) | [`operator /`](class_Vector3.md#operator_div_Vector3) ( right: [`Vector3`](class_vector3.md) )             |
| [`Vector3`](class_vector3.md) | [`operator /`](class_Vector3.md#operator_div_float) ( right: [`float`](class_float.md) )                   |
| [`Vector3`](class_vector3.md) | [`operator /`](class_Vector3.md#operator_div_int) ( right: [`int`](class_int.md) )                         |
| [`bool`](class_bool.md)       | [`operator <`](class_Vector3.md#operator_lt_Vector3) ( right: [`Vector3`](class_vector3.md) )              |
| [`bool`](class_bool.md)       | [`operator <=`](class_Vector3.md#operator_lte_Vector3) ( right: [`Vector3`](class_vector3.md) )            |
| [`bool`](class_bool.md)       | [`operator ==`](class_Vector3.md#operator_eq_Vector3) ( right: [`Vector3`](class_vector3.md) )             |
| [`bool`](class_bool.md)       | [`operator >`](class_Vector3.md#operator_gt_Vector3) ( right: [`Vector3`](class_vector3.md) )              |
| [`bool`](class_bool.md)       | [`operator >=`](class_Vector3.md#operator_gte_Vector3) ( right: [`Vector3`](class_vector3.md) )            |
| [`float`](class_float.md)     | [`operator []`](class_Vector3.md#operator_idx_int) ( index: [`int`](class_int.md) )                        |
| [`Vector3`](class_vector3.md) | [`operator unary+`](class_Vector3.md#operator_unplus) ( )                                                  |
| [`Vector3`](class_vector3.md) | [`operator unary-`](class_Vector3.md#operator_unminus) ( )                                                 |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_vector3_constant_axis_x"></div>

**AXIS_X** = ``0`` <div id="class_vector3_constant_axis_x"></div>

Enumerated value for the X axis. Returned by [`max_axis_index`](class_vector3.md#class_vector3_method_max_axis_index) and [`min_axis_index`](class_vector3.md#class_vector3_method_min_axis_index).

<div id="_class_vector3_constant_axis_y"></div>

**AXIS_Y** = ``1`` <div id="class_vector3_constant_axis_y"></div>

Enumerated value for the Y axis. Returned by [`max_axis_index`](class_vector3.md#class_vector3_method_max_axis_index) and [`min_axis_index`](class_vector3.md#class_vector3_method_min_axis_index).

<div id="_class_vector3_constant_axis_z"></div>

**AXIS_Z** = ``2`` <div id="class_vector3_constant_axis_z"></div>

Enumerated value for the Z axis. Returned by [`max_axis_index`](class_vector3.md#class_vector3_method_max_axis_index) and [`min_axis_index`](class_vector3.md#class_vector3_method_min_axis_index).

<div id="_class_vector3_constant_zero"></div>

**ZERO** = ``Vector3(0, 0, 0)`` <div id="class_vector3_constant_zero"></div>

Zero vector, a vector with all components set to `0`.

<div id="_class_vector3_constant_one"></div>

**ONE** = ``Vector3(1, 1, 1)`` <div id="class_vector3_constant_one"></div>

One vector, a vector with all components set to `1`.

<div id="_class_vector3_constant_inf"></div>

**INF** = ``Vector3(inf, inf, inf)`` <div id="class_vector3_constant_inf"></div>

Infinity vector, a vector with all components set to [`@GDScript.INF`](class_@gdscript.md#class_@gdscript_constant_inf).

<div id="_class_vector3_constant_left"></div>

**LEFT** = ``Vector3(-1, 0, 0)`` <div id="class_vector3_constant_left"></div>

Left unit vector. Represents the local direction of left, and the global direction of west.

<div id="_class_vector3_constant_right"></div>

**RIGHT** = ``Vector3(1, 0, 0)`` <div id="class_vector3_constant_right"></div>

Right unit vector. Represents the local direction of right, and the global direction of east.

<div id="_class_vector3_constant_up"></div>

**UP** = ``Vector3(0, 1, 0)`` <div id="class_vector3_constant_up"></div>

Up unit vector.

<div id="_class_vector3_constant_down"></div>

**DOWN** = ``Vector3(0, -1, 0)`` <div id="class_vector3_constant_down"></div>

Down unit vector.

<div id="_class_vector3_constant_forward"></div>

**FORWARD** = ``Vector3(0, 0, -1)`` <div id="class_vector3_constant_forward"></div>

Forward unit vector. Represents the local direction of forward, and the global direction of north. Keep in mind that the forward direction for lights, cameras, etc is different from 3D assets like characters, which face towards the camera by convention. Use [`MODEL_FRONT`](class_vector3.md#class_vector3_constant_model_front) and similar constants when working in 3D asset space.

<div id="_class_vector3_constant_back"></div>

**BACK** = ``Vector3(0, 0, 1)`` <div id="class_vector3_constant_back"></div>

Back unit vector. Represents the local direction of back, and the global direction of south.

<div id="_class_vector3_constant_model_left"></div>

**MODEL_LEFT** = ``Vector3(1, 0, 0)`` <div id="class_vector3_constant_model_left"></div>

Unit vector pointing towards the left side of imported 3D assets.

<div id="_class_vector3_constant_model_right"></div>

**MODEL_RIGHT** = ``Vector3(-1, 0, 0)`` <div id="class_vector3_constant_model_right"></div>

Unit vector pointing towards the right side of imported 3D assets.

<div id="_class_vector3_constant_model_top"></div>

**MODEL_TOP** = ``Vector3(0, 1, 0)`` <div id="class_vector3_constant_model_top"></div>

Unit vector pointing towards the top side (up) of imported 3D assets.

<div id="_class_vector3_constant_model_bottom"></div>

**MODEL_BOTTOM** = ``Vector3(0, -1, 0)`` <div id="class_vector3_constant_model_bottom"></div>

Unit vector pointing towards the bottom side (down) of imported 3D assets.

<div id="_class_vector3_constant_model_front"></div>

**MODEL_FRONT** = ``Vector3(0, 0, 1)`` <div id="class_vector3_constant_model_front"></div>

Unit vector pointing towards the front side (facing forward) of imported 3D assets.

<div id="_class_vector3_constant_model_rear"></div>

**MODEL_REAR** = ``Vector3(0, 0, -1)`` <div id="class_vector3_constant_model_rear"></div>

Unit vector pointing towards the rear side (back) of imported 3D assets.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_vector3_property_x"></div>

[`float`](class_float.md) **x** = ``0.0`` <div id="class_vector3_property_x"></div>

The vector's X component. Also accessible by using the index position `[0]`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_property_y"></div>

[`float`](class_float.md) **y** = ``0.0`` <div id="class_vector3_property_y"></div>

The vector's Y component. Also accessible by using the index position `[1]`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_property_z"></div>

[`float`](class_float.md) **z** = ``0.0`` <div id="class_vector3_property_z"></div>

The vector's Z component. Also accessible by using the index position `[2]`.

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_vector3_constructor_vector3"></div>

[`Vector3`](class_vector3.md) **Vector3** ( )<div id="class_vector3_constructor_vector3"></div>

Constructs a default-initialized **Vector3** with all components set to `0`.

<!-- rst-class:: classref-item-separator -->

---

[`Vector3`](class_vector3.md) **Vector3** ( from: [`Vector3`](class_vector3.md) )

Constructs a **Vector3** as a copy of the given **Vector3**.

<!-- rst-class:: classref-item-separator -->

---

[`Vector3`](class_vector3.md) **Vector3** ( from: [`Vector3i`](class_vector3i.md) )

Constructs a new **Vector3** from [`Vector3i`](class_vector3i.md).

<!-- rst-class:: classref-item-separator -->

---

[`Vector3`](class_vector3.md) **Vector3** ( x: [`float`](class_float.md), y: [`float`](class_float.md), z: [`float`](class_float.md) )

Returns a **Vector3** with the given components.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_vector3_method_abs"></div>

[`Vector3`](class_vector3.md) **abs** ( ) const[^const]<div id="class_vector3_method_abs"></div>

Returns a new vector with all components in absolute values (i.e. positive).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_angle_to"></div>

[`float`](class_float.md) **angle_to** ( to: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_angle_to"></div>

Returns the unsigned minimum angle to the given vector, in radians.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_bezier_derivative"></div>

[`Vector3`](class_vector3.md) **bezier_derivative** ( control_1: [`Vector3`](class_vector3.md), control_2: [`Vector3`](class_vector3.md), end: [`Vector3`](class_vector3.md), t: [`float`](class_float.md) ) const[^const]<div id="class_vector3_method_bezier_derivative"></div>

Returns the derivative at the given `t` on the [*Bézier curve*](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) defined by this vector and the given `control_1`, `control_2`, and `end` points.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_bezier_interpolate"></div>

[`Vector3`](class_vector3.md) **bezier_interpolate** ( control_1: [`Vector3`](class_vector3.md), control_2: [`Vector3`](class_vector3.md), end: [`Vector3`](class_vector3.md), t: [`float`](class_float.md) ) const[^const]<div id="class_vector3_method_bezier_interpolate"></div>

Returns the point at the given `t` on the [*Bézier curve*](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) defined by this vector and the given `control_1`, `control_2`, and `end` points.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_bounce"></div>

[`Vector3`](class_vector3.md) **bounce** ( n: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_bounce"></div>

Returns the vector "bounced off" from a plane defined by the given normal `n`.

 **Note:** [`bounce`](class_vector3.md#class_vector3_method_bounce) performs the operation that most engines and frameworks call `reflect()`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_ceil"></div>

[`Vector3`](class_vector3.md) **ceil** ( ) const[^const]<div id="class_vector3_method_ceil"></div>

Returns a new vector with all components rounded up (towards positive infinity).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_clamp"></div>

[`Vector3`](class_vector3.md) **clamp** ( min: [`Vector3`](class_vector3.md), max: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_clamp"></div>

Returns a new vector with all components clamped between the components of `min` and `max`, by running [`@GlobalScope.clamp`](class_@globalscope.md#class_@globalscope_method_clamp) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_clampf"></div>

[`Vector3`](class_vector3.md) **clampf** ( min: [`float`](class_float.md), max: [`float`](class_float.md) ) const[^const]<div id="class_vector3_method_clampf"></div>

Returns a new vector with all components clamped between `min` and `max`, by running [`@GlobalScope.clamp`](class_@globalscope.md#class_@globalscope_method_clamp) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_cross"></div>

[`Vector3`](class_vector3.md) **cross** ( with: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_cross"></div>

Returns the cross product of this vector and `with`.

This returns a vector perpendicular to both this and `with`, which would be the normal vector of the plane defined by the two vectors. As there are two such vectors, in opposite directions, this method returns the vector defined by a right-handed coordinate system. If the two vectors are parallel this returns an empty vector, making it useful for testing if two vectors are parallel.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_cubic_interpolate"></div>

[`Vector3`](class_vector3.md) **cubic_interpolate** ( b: [`Vector3`](class_vector3.md), pre_a: [`Vector3`](class_vector3.md), post_b: [`Vector3`](class_vector3.md), weight: [`float`](class_float.md) ) const[^const]<div id="class_vector3_method_cubic_interpolate"></div>

Performs a cubic interpolation between this vector and `b` using `pre_a` and `post_b` as handles, and returns the result at position `weight`. `weight` is on the range of 0.0 to 1.0, representing the amount of interpolation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_cubic_interpolate_in_time"></div>

[`Vector3`](class_vector3.md) **cubic_interpolate_in_time** ( b: [`Vector3`](class_vector3.md), pre_a: [`Vector3`](class_vector3.md), post_b: [`Vector3`](class_vector3.md), weight: [`float`](class_float.md), b_t: [`float`](class_float.md), pre_a_t: [`float`](class_float.md), post_b_t: [`float`](class_float.md) ) const[^const]<div id="class_vector3_method_cubic_interpolate_in_time"></div>

Performs a cubic interpolation between this vector and `b` using `pre_a` and `post_b` as handles, and returns the result at position `weight`. `weight` is on the range of 0.0 to 1.0, representing the amount of interpolation.

It can perform smoother interpolation than [`cubic_interpolate`](class_vector3.md#class_vector3_method_cubic_interpolate) by the time values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_direction_to"></div>

[`Vector3`](class_vector3.md) **direction_to** ( to: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_direction_to"></div>

Returns the normalized vector pointing from this vector to `to`. This is equivalent to using `(b - a).normalized()`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_distance_squared_to"></div>

[`float`](class_float.md) **distance_squared_to** ( to: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_distance_squared_to"></div>

Returns the squared distance between this vector and `to`.

This method runs faster than [`distance_to`](class_vector3.md#class_vector3_method_distance_to), so prefer it if you need to compare vectors or need the squared distance for some formula.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_distance_to"></div>

[`float`](class_float.md) **distance_to** ( to: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_distance_to"></div>

Returns the distance between this vector and `to`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_dot"></div>

[`float`](class_float.md) **dot** ( with: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_dot"></div>

Returns the dot product of this vector and `with`. This can be used to compare the angle between two vectors. For example, this can be used to determine whether an enemy is facing the player.

The dot product will be `0` for a right angle (90 degrees), greater than 0 for angles narrower than 90 degrees and lower than 0 for angles wider than 90 degrees.

When using unit (normalized) vectors, the result will always be between `-1.0` (180 degree angle) when the vectors are facing opposite directions, and `1.0` (0 degree angle) when the vectors are aligned.

 **Note:** `a.dot(b)` is equivalent to `b.dot(a)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_floor"></div>

[`Vector3`](class_vector3.md) **floor** ( ) const[^const]<div id="class_vector3_method_floor"></div>

Returns a new vector with all components rounded down (towards negative infinity).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_inverse"></div>

[`Vector3`](class_vector3.md) **inverse** ( ) const[^const]<div id="class_vector3_method_inverse"></div>

Returns the inverse of the vector. This is the same as `Vector3(1.0 / v.x, 1.0 / v.y, 1.0 / v.z)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_is_equal_approx"></div>

[`bool`](class_bool.md) **is_equal_approx** ( to: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_is_equal_approx"></div>

Returns `true` if this vector and `to` are approximately equal, by running [`@GlobalScope.is_equal_approx`](class_@globalscope.md#class_@globalscope_method_is_equal_approx) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_is_finite"></div>

[`bool`](class_bool.md) **is_finite** ( ) const[^const]<div id="class_vector3_method_is_finite"></div>

Returns `true` if this vector is finite, by calling [`@GlobalScope.is_finite`](class_@globalscope.md#class_@globalscope_method_is_finite) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_is_normalized"></div>

[`bool`](class_bool.md) **is_normalized** ( ) const[^const]<div id="class_vector3_method_is_normalized"></div>

Returns `true` if the vector is normalized, i.e. its length is approximately equal to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_is_zero_approx"></div>

[`bool`](class_bool.md) **is_zero_approx** ( ) const[^const]<div id="class_vector3_method_is_zero_approx"></div>

Returns `true` if this vector's values are approximately zero, by running [`@GlobalScope.is_zero_approx`](class_@globalscope.md#class_@globalscope_method_is_zero_approx) on each component.

This method is faster than using [`is_equal_approx`](class_vector3.md#class_vector3_method_is_equal_approx) with one value as a zero vector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_length"></div>

[`float`](class_float.md) **length** ( ) const[^const]<div id="class_vector3_method_length"></div>

Returns the length (magnitude) of this vector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_length_squared"></div>

[`float`](class_float.md) **length_squared** ( ) const[^const]<div id="class_vector3_method_length_squared"></div>

Returns the squared length (squared magnitude) of this vector.

This method runs faster than [`length`](class_vector3.md#class_vector3_method_length), so prefer it if you need to compare vectors or need the squared distance for some formula.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_lerp"></div>

[`Vector3`](class_vector3.md) **lerp** ( to: [`Vector3`](class_vector3.md), weight: [`float`](class_float.md) ) const[^const]<div id="class_vector3_method_lerp"></div>

Returns the result of the linear interpolation between this vector and `to` by amount `weight`. `weight` is on the range of `0.0` to `1.0`, representing the amount of interpolation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_limit_length"></div>

[`Vector3`](class_vector3.md) **limit_length** ( length: [`float`](class_float.md) = 1.0 ) const[^const]<div id="class_vector3_method_limit_length"></div>

Returns the vector with a maximum length by limiting its length to `length`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_max"></div>

[`Vector3`](class_vector3.md) **max** ( with: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_max"></div>

Returns the component-wise maximum of this and `with`, equivalent to `Vector3(maxf(x, with.x), maxf(y, with.y), maxf(z, with.z))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_max_axis_index"></div>

[`int`](class_int.md) **max_axis_index** ( ) const[^const]<div id="class_vector3_method_max_axis_index"></div>

Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns [`AXIS_X`](class_vector3.md#class_vector3_constant_axis_x).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_maxf"></div>

[`Vector3`](class_vector3.md) **maxf** ( with: [`float`](class_float.md) ) const[^const]<div id="class_vector3_method_maxf"></div>

Returns the component-wise maximum of this and `with`, equivalent to `Vector3(maxf(x, with), maxf(y, with), maxf(z, with))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_min"></div>

[`Vector3`](class_vector3.md) **min** ( with: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_min"></div>

Returns the component-wise minimum of this and `with`, equivalent to `Vector3(minf(x, with.x), minf(y, with.y), minf(z, with.z))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_min_axis_index"></div>

[`int`](class_int.md) **min_axis_index** ( ) const[^const]<div id="class_vector3_method_min_axis_index"></div>

Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns [`AXIS_Z`](class_vector3.md#class_vector3_constant_axis_z).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_minf"></div>

[`Vector3`](class_vector3.md) **minf** ( with: [`float`](class_float.md) ) const[^const]<div id="class_vector3_method_minf"></div>

Returns the component-wise minimum of this and `with`, equivalent to `Vector3(minf(x, with), minf(y, with), minf(z, with))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_move_toward"></div>

[`Vector3`](class_vector3.md) **move_toward** ( to: [`Vector3`](class_vector3.md), delta: [`float`](class_float.md) ) const[^const]<div id="class_vector3_method_move_toward"></div>

Returns a new vector moved toward `to` by the fixed `delta` amount. Will not go past the final value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_normalized"></div>

[`Vector3`](class_vector3.md) **normalized** ( ) const[^const]<div id="class_vector3_method_normalized"></div>

Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. Returns `(0, 0, 0)` if `v.length() == 0`. See also [`is_normalized`](class_vector3.md#class_vector3_method_is_normalized).

 **Note:** This function may return incorrect values if the input vector length is near zero.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_octahedron_decode"></div>

[`Vector3`](class_vector3.md) **octahedron_decode** ( uv: [`Vector2`](class_vector2.md) ) static[^static]<div id="class_vector3_method_octahedron_decode"></div>

Returns the **Vector3** from an octahedral-compressed form created using [`octahedron_encode`](class_vector3.md#class_vector3_method_octahedron_encode) (stored as a [`Vector2`](class_vector2.md)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_octahedron_encode"></div>

[`Vector2`](class_vector2.md) **octahedron_encode** ( ) const[^const]<div id="class_vector3_method_octahedron_encode"></div>

Returns the octahedral-encoded (oct32) form of this **Vector3** as a [`Vector2`](class_vector2.md). Since a [`Vector2`](class_vector2.md) occupies 1/3 less memory compared to **Vector3**, this form of compression can be used to pass greater amounts of [`normalized`](class_vector3.md#class_vector3_method_normalized) **Vector3** s without increasing storage or memory requirements. See also [`octahedron_decode`](class_vector3.md#class_vector3_method_octahedron_decode).

 **Note:** [`octahedron_encode`](class_vector3.md#class_vector3_method_octahedron_encode) can only be used for [`normalized`](class_vector3.md#class_vector3_method_normalized) vectors. [`octahedron_encode`](class_vector3.md#class_vector3_method_octahedron_encode) does *not* check whether this **Vector3** is normalized, and will return a value that does not decompress to the original value if the **Vector3** is not normalized.

 **Note:** Octahedral compression is *lossy*, although visual differences are rarely perceptible in real world scenarios.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_outer"></div>

[`Basis`](class_basis.md) **outer** ( with: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_outer"></div>

Returns the outer product with `with`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_posmod"></div>

[`Vector3`](class_vector3.md) **posmod** ( mod: [`float`](class_float.md) ) const[^const]<div id="class_vector3_method_posmod"></div>

Returns a vector composed of the [`@GlobalScope.fposmod`](class_@globalscope.md#class_@globalscope_method_fposmod) of this vector's components and `mod`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_posmodv"></div>

[`Vector3`](class_vector3.md) **posmodv** ( modv: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_posmodv"></div>

Returns a vector composed of the [`@GlobalScope.fposmod`](class_@globalscope.md#class_@globalscope_method_fposmod) of this vector's components and `modv`'s components.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_project"></div>

[`Vector3`](class_vector3.md) **project** ( b: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_project"></div>

Returns a new vector resulting from projecting this vector onto the given vector `b`. The resulting new vector is parallel to `b`. See also [`slide`](class_vector3.md#class_vector3_method_slide).

 **Note:** If the vector `b` is a zero vector, the components of the resulting new vector will be [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_reflect"></div>

[`Vector3`](class_vector3.md) **reflect** ( n: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_reflect"></div>

Returns the result of reflecting the vector through a plane defined by the given normal vector `n`.

 **Note:** [`reflect`](class_vector3.md#class_vector3_method_reflect) differs from what other engines and frameworks call `reflect()`. In other engines, `reflect()` returns the result of the vector reflected by the given plane. The reflection thus passes through the given normal. While in Godot the reflection passes through the plane and can be thought of as bouncing off the normal. See also [`bounce`](class_vector3.md#class_vector3_method_bounce) which does what most engines call `reflect()`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_rotated"></div>

[`Vector3`](class_vector3.md) **rotated** ( axis: [`Vector3`](class_vector3.md), angle: [`float`](class_float.md) ) const[^const]<div id="class_vector3_method_rotated"></div>

Returns the result of rotating this vector around a given axis by `angle` (in radians). The axis must be a normalized vector. See also [`@GlobalScope.deg_to_rad`](class_@globalscope.md#class_@globalscope_method_deg_to_rad).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_round"></div>

[`Vector3`](class_vector3.md) **round** ( ) const[^const]<div id="class_vector3_method_round"></div>

Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_sign"></div>

[`Vector3`](class_vector3.md) **sign** ( ) const[^const]<div id="class_vector3_method_sign"></div>

Returns a new vector with each component set to `1.0` if it's positive, `-1.0` if it's negative, and `0.0` if it's zero. The result is identical to calling [`@GlobalScope.sign`](class_@globalscope.md#class_@globalscope_method_sign) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_signed_angle_to"></div>

[`float`](class_float.md) **signed_angle_to** ( to: [`Vector3`](class_vector3.md), axis: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_signed_angle_to"></div>

Returns the signed angle to the given vector, in radians. The sign of the angle is positive in a counter-clockwise direction and negative in a clockwise direction when viewed from the side specified by the `axis`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_slerp"></div>

[`Vector3`](class_vector3.md) **slerp** ( to: [`Vector3`](class_vector3.md), weight: [`float`](class_float.md) ) const[^const]<div id="class_vector3_method_slerp"></div>

Returns the result of spherical linear interpolation between this vector and `to`, by amount `weight`. `weight` is on the range of 0.0 to 1.0, representing the amount of interpolation.

This method also handles interpolating the lengths if the input vectors have different lengths. For the special case of one or both input vectors having zero length, this method behaves like [`lerp`](class_vector3.md#class_vector3_method_lerp).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_slide"></div>

[`Vector3`](class_vector3.md) **slide** ( n: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_slide"></div>

Returns a new vector resulting from sliding this vector along a plane with normal `n`. The resulting new vector is perpendicular to `n`, and is equivalent to this vector minus its projection on `n`. See also [`project`](class_vector3.md#class_vector3_method_project).

 **Note:** The vector `n` must be normalized. See also [`normalized`](class_vector3.md#class_vector3_method_normalized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_snapped"></div>

[`Vector3`](class_vector3.md) **snapped** ( step: [`Vector3`](class_vector3.md) ) const[^const]<div id="class_vector3_method_snapped"></div>

Returns a new vector with each component snapped to the nearest multiple of the corresponding component in `step`. This can also be used to round the components to an arbitrary number of decimals.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_method_snappedf"></div>

[`Vector3`](class_vector3.md) **snappedf** ( step: [`float`](class_float.md) ) const[^const]<div id="class_vector3_method_snappedf"></div>

Returns a new vector with each component snapped to the nearest multiple of `step`. This can also be used to round the components to an arbitrary number of decimals.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_vector3_operator_neq_vector3"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`Vector3`](class_vector3.md) ) <div id="class_vector3_operator_neq_vector3"></div>

Returns `true` if the vectors are not equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](class_vector3.md#class_vector3_method_is_equal_approx) instead, which is more reliable.

 **Note:** Vectors with [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_mul_basis"></div>

[`Vector3`](class_vector3.md) **operator *** ( right: [`Basis`](class_basis.md) ) <div id="class_vector3_operator_mul_basis"></div>

Inversely transforms (multiplies) the **Vector3** by the given [`Basis`](class_basis.md) matrix, under the assumption that the basis is orthonormal (i.e. rotation/reflection is fine, scaling/skew is not).

 `vector * basis` is equivalent to `basis.transposed() * vector`. See [`Basis.transposed`](class_basis.md#class_basis_method_transposed).

For transforming by inverse of a non-orthonormal basis (e.g. with scaling) `basis.inverse() * vector` can be used instead. See [`Basis.inverse`](class_basis.md#class_basis_method_inverse).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_mul_quaternion"></div>

[`Vector3`](class_vector3.md) **operator *** ( right: [`Quaternion`](class_quaternion.md) ) <div id="class_vector3_operator_mul_quaternion"></div>

Inversely transforms (multiplies) the **Vector3** by the given [`Quaternion`](class_quaternion.md).

 `vector * quaternion` is equivalent to `quaternion.inverse() * vector`. See [`Quaternion.inverse`](class_quaternion.md#class_quaternion_method_inverse).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_mul_transform3d"></div>

[`Vector3`](class_vector3.md) **operator *** ( right: [`Transform3D`](class_transform3d.md) ) <div id="class_vector3_operator_mul_transform3d"></div>

Inversely transforms (multiplies) the **Vector3** by the given [`Transform3D`](class_transform3d.md) transformation matrix, under the assumption that the transformation basis is orthonormal (i.e. rotation/reflection is fine, scaling/skew is not).

 `vector * transform` is equivalent to `transform.inverse() * vector`. See [`Transform3D.inverse`](class_transform3d.md#class_transform3d_method_inverse).

For transforming by inverse of an affine transformation (e.g. with scaling) `transform.affine_inverse() * vector` can be used instead. See [`Transform3D.affine_inverse`](class_transform3d.md#class_transform3d_method_affine_inverse).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_mul_vector3"></div>

[`Vector3`](class_vector3.md) **operator *** ( right: [`Vector3`](class_vector3.md) ) <div id="class_vector3_operator_mul_vector3"></div>

Multiplies each component of the **Vector3** by the components of the given **Vector3**.

```

    print(Vector3(10, 20, 30) * Vector3(3, 4, 5)) # Prints "(30, 80, 150)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_mul_float"></div>

[`Vector3`](class_vector3.md) **operator *** ( right: [`float`](class_float.md) ) <div id="class_vector3_operator_mul_float"></div>

Multiplies each component of the **Vector3** by the given [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_mul_int"></div>

[`Vector3`](class_vector3.md) **operator *** ( right: [`int`](class_int.md) ) <div id="class_vector3_operator_mul_int"></div>

Multiplies each component of the **Vector3** by the given [`int`](class_int.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_sum_vector3"></div>

[`Vector3`](class_vector3.md) **operator +** ( right: [`Vector3`](class_vector3.md) ) <div id="class_vector3_operator_sum_vector3"></div>

Adds each component of the **Vector3** by the components of the given **Vector3**.

```

    print(Vector3(10, 20, 30) + Vector3(3, 4, 5)) # Prints "(13, 24, 35)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_dif_vector3"></div>

[`Vector3`](class_vector3.md) **operator -** ( right: [`Vector3`](class_vector3.md) ) <div id="class_vector3_operator_dif_vector3"></div>

Subtracts each component of the **Vector3** by the components of the given **Vector3**.

```

    print(Vector3(10, 20, 30) - Vector3(3, 4, 5)) # Prints "(7, 16, 25)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_div_vector3"></div>

[`Vector3`](class_vector3.md) **operator /** ( right: [`Vector3`](class_vector3.md) ) <div id="class_vector3_operator_div_vector3"></div>

Divides each component of the **Vector3** by the components of the given **Vector3**.

```

    print(Vector3(10, 20, 30) / Vector3(2, 5, 3)) # Prints "(5, 4, 10)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_div_float"></div>

[`Vector3`](class_vector3.md) **operator /** ( right: [`float`](class_float.md) ) <div id="class_vector3_operator_div_float"></div>

Divides each component of the **Vector3** by the given [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_div_int"></div>

[`Vector3`](class_vector3.md) **operator /** ( right: [`int`](class_int.md) ) <div id="class_vector3_operator_div_int"></div>

Divides each component of the **Vector3** by the given [`int`](class_int.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_lt_vector3"></div>

[`bool`](class_bool.md) **operator <** ( right: [`Vector3`](class_vector3.md) ) <div id="class_vector3_operator_lt_vector3"></div>

Compares two **Vector3** vectors by first checking if the X value of the left vector is less than the X value of the `right` vector. If the X values are exactly equal, then it repeats this check with the Y values of the two vectors, and then with the Z values. This operator is useful for sorting vectors.

 **Note:** Vectors with [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_lte_vector3"></div>

[`bool`](class_bool.md) **operator <=** ( right: [`Vector3`](class_vector3.md) ) <div id="class_vector3_operator_lte_vector3"></div>

Compares two **Vector3** vectors by first checking if the X value of the left vector is less than or equal to the X value of the `right` vector. If the X values are exactly equal, then it repeats this check with the Y values of the two vectors, and then with the Z values. This operator is useful for sorting vectors.

 **Note:** Vectors with [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_eq_vector3"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`Vector3`](class_vector3.md) ) <div id="class_vector3_operator_eq_vector3"></div>

Returns `true` if the vectors are exactly equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](class_vector3.md#class_vector3_method_is_equal_approx) instead, which is more reliable.

 **Note:** Vectors with [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_gt_vector3"></div>

[`bool`](class_bool.md) **operator >** ( right: [`Vector3`](class_vector3.md) ) <div id="class_vector3_operator_gt_vector3"></div>

Compares two **Vector3** vectors by first checking if the X value of the left vector is greater than the X value of the `right` vector. If the X values are exactly equal, then it repeats this check with the Y values of the two vectors, and then with the Z values. This operator is useful for sorting vectors.

 **Note:** Vectors with [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_gte_vector3"></div>

[`bool`](class_bool.md) **operator >=** ( right: [`Vector3`](class_vector3.md) ) <div id="class_vector3_operator_gte_vector3"></div>

Compares two **Vector3** vectors by first checking if the X value of the left vector is greater than or equal to the X value of the `right` vector. If the X values are exactly equal, then it repeats this check with the Y values of the two vectors, and then with the Z values. This operator is useful for sorting vectors.

 **Note:** Vectors with [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_idx_int"></div>

[`float`](class_float.md) **operator []** ( index: [`int`](class_int.md) ) <div id="class_vector3_operator_idx_int"></div>

Access vector components using their `index`. `v[0]` is equivalent to `v.x`, `v[1]` is equivalent to `v.y`, and `v[2]` is equivalent to `v.z`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_unplus"></div>

[`Vector3`](class_vector3.md) **operator unary+** ( ) <div id="class_vector3_operator_unplus"></div>

Returns the same value as if the `+` was not there. Unary `+` does nothing, but sometimes it can make your code more readable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector3_operator_unminus"></div>

[`Vector3`](class_vector3.md) **operator unary-** ( ) <div id="class_vector3_operator_unminus"></div>

Returns the negative value of the **Vector3**. This is the same as writing `Vector3(-v.x, -v.y, -v.z)`. This operation flips the direction of the vector while keeping the same magnitude. With floats, the number zero can be either positive or negative.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
