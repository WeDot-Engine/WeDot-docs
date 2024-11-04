<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Vector4.xml。 -->

<div id="_class_vector4"></div>

# Vector4

A 4D vector using floating-point coordinates.

## 描述

A 4-element structure that can be used to represent 4D coordinates or any other quadruplet of numeric values.

It uses floating-point coordinates. By default, these floating-point values use 32-bit precision, unlike [`float`](class_float.md) which is always 64-bit. If double precision is needed, compile the engine with the option `precision=double`.

See [`Vector4i`](class_vector4i.md) for its integer counterpart.

 **Note:** In a boolean context, a Vector4 will evaluate to `false` if it's equal to `Vector4(0, 0, 0, 0)`. Otherwise, a Vector4 will always evaluate to `true`.

## 属性

| [`float`](class_float.md) | [`w`](#class_vector4_property_w) | ``0.0`` |
| [`float`](class_float.md) | [`x`](#class_vector4_property_x) | ``0.0`` |
| [`float`](class_float.md) | [`y`](#class_vector4_property_y) | ``0.0`` |
| [`float`](class_float.md) | [`z`](#class_vector4_property_z) | ``0.0`` |

## 构造函数

| [`Vector4`](class_vector4.md) | [`Vector4`](#class_vector4_constructor_vector4) ( )                                                                                                                        |
| [`Vector4`](class_vector4.md) | [`Vector4`](#class_vector4_constructor_vector4) ( from: [`Vector4`](class_vector4.md) )                                                                                    |
| [`Vector4`](class_vector4.md) | [`Vector4`](#class_vector4_constructor_vector4) ( from: [`Vector4i`](class_vector4i.md) )                                                                                  |
| [`Vector4`](class_vector4.md) | [`Vector4`](#class_vector4_constructor_vector4) ( x: [`float`](class_float.md), y: [`float`](class_float.md), z: [`float`](class_float.md), w: [`float`](class_float.md) ) |

## 方法

| [`Vector4`](class_vector4.md) | [`abs`](#class_vector4_method_abs) ( ) const[^const]                                                                                                                                                                                                                                                                                                       |
| [`Vector4`](class_vector4.md) | [`ceil`](#class_vector4_method_ceil) ( ) const[^const]                                                                                                                                                                                                                                                                                                     |
| [`Vector4`](class_vector4.md) | [`clamp`](#class_vector4_method_clamp) ( min: [`Vector4`](class_vector4.md), max: [`Vector4`](class_vector4.md) ) const[^const]                                                                                                                                                                                                                            |
| [`Vector4`](class_vector4.md) | [`clampf`](#class_vector4_method_clampf) ( min: [`float`](class_float.md), max: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                  |
| [`Vector4`](class_vector4.md) | [`cubic_interpolate`](#class_vector4_method_cubic_interpolate) ( b: [`Vector4`](class_vector4.md), pre_a: [`Vector4`](class_vector4.md), post_b: [`Vector4`](class_vector4.md), weight: [`float`](class_float.md) ) const[^const]                                                                                                                          |
| [`Vector4`](class_vector4.md) | [`cubic_interpolate_in_time`](#class_vector4_method_cubic_interpolate_in_time) ( b: [`Vector4`](class_vector4.md), pre_a: [`Vector4`](class_vector4.md), post_b: [`Vector4`](class_vector4.md), weight: [`float`](class_float.md), b_t: [`float`](class_float.md), pre_a_t: [`float`](class_float.md), post_b_t: [`float`](class_float.md) ) const[^const] |
| [`Vector4`](class_vector4.md) | [`direction_to`](#class_vector4_method_direction_to) ( to: [`Vector4`](class_vector4.md) ) const[^const]                                                                                                                                                                                                                                                   |
| [`float`](class_float.md)     | [`distance_squared_to`](#class_vector4_method_distance_squared_to) ( to: [`Vector4`](class_vector4.md) ) const[^const]                                                                                                                                                                                                                                     |
| [`float`](class_float.md)     | [`distance_to`](#class_vector4_method_distance_to) ( to: [`Vector4`](class_vector4.md) ) const[^const]                                                                                                                                                                                                                                                     |
| [`float`](class_float.md)     | [`dot`](#class_vector4_method_dot) ( with: [`Vector4`](class_vector4.md) ) const[^const]                                                                                                                                                                                                                                                                   |
| [`Vector4`](class_vector4.md) | [`floor`](#class_vector4_method_floor) ( ) const[^const]                                                                                                                                                                                                                                                                                                   |
| [`Vector4`](class_vector4.md) | [`inverse`](#class_vector4_method_inverse) ( ) const[^const]                                                                                                                                                                                                                                                                                               |
| [`bool`](class_bool.md)       | [`is_equal_approx`](#class_vector4_method_is_equal_approx) ( to: [`Vector4`](class_vector4.md) ) const[^const]                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)       | [`is_finite`](#class_vector4_method_is_finite) ( ) const[^const]                                                                                                                                                                                                                                                                                           |
| [`bool`](class_bool.md)       | [`is_normalized`](#class_vector4_method_is_normalized) ( ) const[^const]                                                                                                                                                                                                                                                                                   |
| [`bool`](class_bool.md)       | [`is_zero_approx`](#class_vector4_method_is_zero_approx) ( ) const[^const]                                                                                                                                                                                                                                                                                 |
| [`float`](class_float.md)     | [`length`](#class_vector4_method_length) ( ) const[^const]                                                                                                                                                                                                                                                                                                 |
| [`float`](class_float.md)     | [`length_squared`](#class_vector4_method_length_squared) ( ) const[^const]                                                                                                                                                                                                                                                                                 |
| [`Vector4`](class_vector4.md) | [`lerp`](#class_vector4_method_lerp) ( to: [`Vector4`](class_vector4.md), weight: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                |
| [`Vector4`](class_vector4.md) | [`max`](#class_vector4_method_max) ( with: [`Vector4`](class_vector4.md) ) const[^const]                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)         | [`max_axis_index`](#class_vector4_method_max_axis_index) ( ) const[^const]                                                                                                                                                                                                                                                                                 |
| [`Vector4`](class_vector4.md) | [`maxf`](#class_vector4_method_maxf) ( with: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                                                     |
| [`Vector4`](class_vector4.md) | [`min`](#class_vector4_method_min) ( with: [`Vector4`](class_vector4.md) ) const[^const]                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)         | [`min_axis_index`](#class_vector4_method_min_axis_index) ( ) const[^const]                                                                                                                                                                                                                                                                                 |
| [`Vector4`](class_vector4.md) | [`minf`](#class_vector4_method_minf) ( with: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                                                     |
| [`Vector4`](class_vector4.md) | [`normalized`](#class_vector4_method_normalized) ( ) const[^const]                                                                                                                                                                                                                                                                                         |
| [`Vector4`](class_vector4.md) | [`posmod`](#class_vector4_method_posmod) ( mod: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                                                  |
| [`Vector4`](class_vector4.md) | [`posmodv`](#class_vector4_method_posmodv) ( modv: [`Vector4`](class_vector4.md) ) const[^const]                                                                                                                                                                                                                                                           |
| [`Vector4`](class_vector4.md) | [`round`](#class_vector4_method_round) ( ) const[^const]                                                                                                                                                                                                                                                                                                   |
| [`Vector4`](class_vector4.md) | [`sign`](#class_vector4_method_sign) ( ) const[^const]                                                                                                                                                                                                                                                                                                     |
| [`Vector4`](class_vector4.md) | [`snapped`](#class_vector4_method_snapped) ( step: [`Vector4`](class_vector4.md) ) const[^const]                                                                                                                                                                                                                                                           |
| [`Vector4`](class_vector4.md) | [`snappedf`](#class_vector4_method_snappedf) ( step: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                                             |

## 运算符

| [`bool`](class_bool.md)       | [`operator !=`](class_Vector4.md#operator_neq_Vector4) ( right: [`Vector4`](class_vector4.md) )         |
| [`Vector4`](class_vector4.md) | [`operator *`](class_Vector4.md#operator_mul_Projection) ( right: [`Projection`](class_projection.md) ) |
| [`Vector4`](class_vector4.md) | [`operator *`](class_Vector4.md#operator_mul_Vector4) ( right: [`Vector4`](class_vector4.md) )          |
| [`Vector4`](class_vector4.md) | [`operator *`](class_Vector4.md#operator_mul_float) ( right: [`float`](class_float.md) )                |
| [`Vector4`](class_vector4.md) | [`operator *`](class_Vector4.md#operator_mul_int) ( right: [`int`](class_int.md) )                      |
| [`Vector4`](class_vector4.md) | [`operator +`](class_Vector4.md#operator_sum_Vector4) ( right: [`Vector4`](class_vector4.md) )          |
| [`Vector4`](class_vector4.md) | [`operator -`](class_Vector4.md#operator_dif_Vector4) ( right: [`Vector4`](class_vector4.md) )          |
| [`Vector4`](class_vector4.md) | [`operator /`](class_Vector4.md#operator_div_Vector4) ( right: [`Vector4`](class_vector4.md) )          |
| [`Vector4`](class_vector4.md) | [`operator /`](class_Vector4.md#operator_div_float) ( right: [`float`](class_float.md) )                |
| [`Vector4`](class_vector4.md) | [`operator /`](class_Vector4.md#operator_div_int) ( right: [`int`](class_int.md) )                      |
| [`bool`](class_bool.md)       | [`operator <`](class_Vector4.md#operator_lt_Vector4) ( right: [`Vector4`](class_vector4.md) )           |
| [`bool`](class_bool.md)       | [`operator <=`](class_Vector4.md#operator_lte_Vector4) ( right: [`Vector4`](class_vector4.md) )         |
| [`bool`](class_bool.md)       | [`operator ==`](class_Vector4.md#operator_eq_Vector4) ( right: [`Vector4`](class_vector4.md) )          |
| [`bool`](class_bool.md)       | [`operator >`](class_Vector4.md#operator_gt_Vector4) ( right: [`Vector4`](class_vector4.md) )           |
| [`bool`](class_bool.md)       | [`operator >=`](class_Vector4.md#operator_gte_Vector4) ( right: [`Vector4`](class_vector4.md) )         |
| [`float`](class_float.md)     | [`operator []`](class_Vector4.md#operator_idx_int) ( index: [`int`](class_int.md) )                     |
| [`Vector4`](class_vector4.md) | [`operator unary+`](class_Vector4.md#operator_unplus) ( )                                               |
| [`Vector4`](class_vector4.md) | [`operator unary-`](class_Vector4.md#operator_unminus) ( )                                              |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_vector4_constant_axis_x"></div>

**AXIS_X** = ``0`` <div id="class_vector4_constant_axis_x"></div>

Enumerated value for the X axis. Returned by [`max_axis_index`](#class_vector4_method_max_axis_index) and [`min_axis_index`](#class_vector4_method_min_axis_index).

<div id="_class_vector4_constant_axis_y"></div>

**AXIS_Y** = ``1`` <div id="class_vector4_constant_axis_y"></div>

Enumerated value for the Y axis. Returned by [`max_axis_index`](#class_vector4_method_max_axis_index) and [`min_axis_index`](#class_vector4_method_min_axis_index).

<div id="_class_vector4_constant_axis_z"></div>

**AXIS_Z** = ``2`` <div id="class_vector4_constant_axis_z"></div>

Enumerated value for the Z axis. Returned by [`max_axis_index`](#class_vector4_method_max_axis_index) and [`min_axis_index`](#class_vector4_method_min_axis_index).

<div id="_class_vector4_constant_axis_w"></div>

**AXIS_W** = ``3`` <div id="class_vector4_constant_axis_w"></div>

Enumerated value for the W axis. Returned by [`max_axis_index`](#class_vector4_method_max_axis_index) and [`min_axis_index`](#class_vector4_method_min_axis_index).

<div id="_class_vector4_constant_zero"></div>

**ZERO** = ``Vector4(0, 0, 0, 0)`` <div id="class_vector4_constant_zero"></div>

Zero vector, a vector with all components set to `0`.

<div id="_class_vector4_constant_one"></div>

**ONE** = ``Vector4(1, 1, 1, 1)`` <div id="class_vector4_constant_one"></div>

One vector, a vector with all components set to `1`.

<div id="_class_vector4_constant_inf"></div>

**INF** = ``Vector4(inf, inf, inf, inf)`` <div id="class_vector4_constant_inf"></div>

Infinity vector, a vector with all components set to [`@GDScript.INF`](#class_@gdscript_constant_inf).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_vector4_property_w"></div>

[`float`](class_float.md) **w** = ``0.0`` <div id="class_vector4_property_w"></div>

The vector's W component. Also accessible by using the index position `[3]`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_property_x"></div>

[`float`](class_float.md) **x** = ``0.0`` <div id="class_vector4_property_x"></div>

The vector's X component. Also accessible by using the index position `[0]`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_property_y"></div>

[`float`](class_float.md) **y** = ``0.0`` <div id="class_vector4_property_y"></div>

The vector's Y component. Also accessible by using the index position `[1]`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_property_z"></div>

[`float`](class_float.md) **z** = ``0.0`` <div id="class_vector4_property_z"></div>

The vector's Z component. Also accessible by using the index position `[2]`.

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_vector4_constructor_vector4"></div>

[`Vector4`](class_vector4.md) **Vector4** ( )<div id="class_vector4_constructor_vector4"></div>

Constructs a default-initialized **Vector4** with all components set to `0`.

<!-- rst-class:: classref-item-separator -->

---

[`Vector4`](class_vector4.md) **Vector4** ( from: [`Vector4`](class_vector4.md) )

Constructs a **Vector4** as a copy of the given **Vector4**.

<!-- rst-class:: classref-item-separator -->

---

[`Vector4`](class_vector4.md) **Vector4** ( from: [`Vector4i`](class_vector4i.md) )

Constructs a new **Vector4** from the given [`Vector4i`](class_vector4i.md).

<!-- rst-class:: classref-item-separator -->

---

[`Vector4`](class_vector4.md) **Vector4** ( x: [`float`](class_float.md), y: [`float`](class_float.md), z: [`float`](class_float.md), w: [`float`](class_float.md) )

Returns a **Vector4** with the given components.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_vector4_method_abs"></div>

[`Vector4`](class_vector4.md) **abs** ( ) const[^const]<div id="class_vector4_method_abs"></div>

Returns a new vector with all components in absolute values (i.e. positive).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_ceil"></div>

[`Vector4`](class_vector4.md) **ceil** ( ) const[^const]<div id="class_vector4_method_ceil"></div>

Returns a new vector with all components rounded up (towards positive infinity).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_clamp"></div>

[`Vector4`](class_vector4.md) **clamp** ( min: [`Vector4`](class_vector4.md), max: [`Vector4`](class_vector4.md) ) const[^const]<div id="class_vector4_method_clamp"></div>

Returns a new vector with all components clamped between the components of `min` and `max`, by running [`@GlobalScope.clamp`](#class_@globalscope_method_clamp) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_clampf"></div>

[`Vector4`](class_vector4.md) **clampf** ( min: [`float`](class_float.md), max: [`float`](class_float.md) ) const[^const]<div id="class_vector4_method_clampf"></div>

Returns a new vector with all components clamped between `min` and `max`, by running [`@GlobalScope.clamp`](#class_@globalscope_method_clamp) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_cubic_interpolate"></div>

[`Vector4`](class_vector4.md) **cubic_interpolate** ( b: [`Vector4`](class_vector4.md), pre_a: [`Vector4`](class_vector4.md), post_b: [`Vector4`](class_vector4.md), weight: [`float`](class_float.md) ) const[^const]<div id="class_vector4_method_cubic_interpolate"></div>

Performs a cubic interpolation between this vector and `b` using `pre_a` and `post_b` as handles, and returns the result at position `weight`. `weight` is on the range of 0.0 to 1.0, representing the amount of interpolation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_cubic_interpolate_in_time"></div>

[`Vector4`](class_vector4.md) **cubic_interpolate_in_time** ( b: [`Vector4`](class_vector4.md), pre_a: [`Vector4`](class_vector4.md), post_b: [`Vector4`](class_vector4.md), weight: [`float`](class_float.md), b_t: [`float`](class_float.md), pre_a_t: [`float`](class_float.md), post_b_t: [`float`](class_float.md) ) const[^const]<div id="class_vector4_method_cubic_interpolate_in_time"></div>

Performs a cubic interpolation between this vector and `b` using `pre_a` and `post_b` as handles, and returns the result at position `weight`. `weight` is on the range of 0.0 to 1.0, representing the amount of interpolation.

It can perform smoother interpolation than [`cubic_interpolate`](#class_vector4_method_cubic_interpolate) by the time values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_direction_to"></div>

[`Vector4`](class_vector4.md) **direction_to** ( to: [`Vector4`](class_vector4.md) ) const[^const]<div id="class_vector4_method_direction_to"></div>

Returns the normalized vector pointing from this vector to `to`. This is equivalent to using `(b - a).normalized()`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_distance_squared_to"></div>

[`float`](class_float.md) **distance_squared_to** ( to: [`Vector4`](class_vector4.md) ) const[^const]<div id="class_vector4_method_distance_squared_to"></div>

Returns the squared distance between this vector and `to`.

This method runs faster than [`distance_to`](#class_vector4_method_distance_to), so prefer it if you need to compare vectors or need the squared distance for some formula.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_distance_to"></div>

[`float`](class_float.md) **distance_to** ( to: [`Vector4`](class_vector4.md) ) const[^const]<div id="class_vector4_method_distance_to"></div>

Returns the distance between this vector and `to`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_dot"></div>

[`float`](class_float.md) **dot** ( with: [`Vector4`](class_vector4.md) ) const[^const]<div id="class_vector4_method_dot"></div>

Returns the dot product of this vector and `with`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_floor"></div>

[`Vector4`](class_vector4.md) **floor** ( ) const[^const]<div id="class_vector4_method_floor"></div>

Returns a new vector with all components rounded down (towards negative infinity).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_inverse"></div>

[`Vector4`](class_vector4.md) **inverse** ( ) const[^const]<div id="class_vector4_method_inverse"></div>

Returns the inverse of the vector. This is the same as `Vector4(1.0 / v.x, 1.0 / v.y, 1.0 / v.z, 1.0 / v.w)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_is_equal_approx"></div>

[`bool`](class_bool.md) **is_equal_approx** ( to: [`Vector4`](class_vector4.md) ) const[^const]<div id="class_vector4_method_is_equal_approx"></div>

Returns `true` if this vector and `to` are approximately equal, by running [`@GlobalScope.is_equal_approx`](#class_@globalscope_method_is_equal_approx) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_is_finite"></div>

[`bool`](class_bool.md) **is_finite** ( ) const[^const]<div id="class_vector4_method_is_finite"></div>

Returns `true` if this vector is finite, by calling [`@GlobalScope.is_finite`](#class_@globalscope_method_is_finite) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_is_normalized"></div>

[`bool`](class_bool.md) **is_normalized** ( ) const[^const]<div id="class_vector4_method_is_normalized"></div>

Returns `true` if the vector is normalized, i.e. its length is approximately equal to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_is_zero_approx"></div>

[`bool`](class_bool.md) **is_zero_approx** ( ) const[^const]<div id="class_vector4_method_is_zero_approx"></div>

Returns `true` if this vector's values are approximately zero, by running [`@GlobalScope.is_zero_approx`](#class_@globalscope_method_is_zero_approx) on each component.

This method is faster than using [`is_equal_approx`](#class_vector4_method_is_equal_approx) with one value as a zero vector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_length"></div>

[`float`](class_float.md) **length** ( ) const[^const]<div id="class_vector4_method_length"></div>

Returns the length (magnitude) of this vector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_length_squared"></div>

[`float`](class_float.md) **length_squared** ( ) const[^const]<div id="class_vector4_method_length_squared"></div>

Returns the squared length (squared magnitude) of this vector.

This method runs faster than [`length`](#class_vector4_method_length), so prefer it if you need to compare vectors or need the squared distance for some formula.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_lerp"></div>

[`Vector4`](class_vector4.md) **lerp** ( to: [`Vector4`](class_vector4.md), weight: [`float`](class_float.md) ) const[^const]<div id="class_vector4_method_lerp"></div>

Returns the result of the linear interpolation between this vector and `to` by amount `weight`. `weight` is on the range of `0.0` to `1.0`, representing the amount of interpolation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_max"></div>

[`Vector4`](class_vector4.md) **max** ( with: [`Vector4`](class_vector4.md) ) const[^const]<div id="class_vector4_method_max"></div>

Returns the component-wise maximum of this and `with`, equivalent to `Vector4(maxf(x, with.x), maxf(y, with.y), maxf(z, with.z), maxf(w, with.w))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_max_axis_index"></div>

[`int`](class_int.md) **max_axis_index** ( ) const[^const]<div id="class_vector4_method_max_axis_index"></div>

Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns [`AXIS_X`](#class_vector4_constant_axis_x).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_maxf"></div>

[`Vector4`](class_vector4.md) **maxf** ( with: [`float`](class_float.md) ) const[^const]<div id="class_vector4_method_maxf"></div>

Returns the component-wise maximum of this and `with`, equivalent to `Vector4(maxf(x, with), maxf(y, with), maxf(z, with), maxf(w, with))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_min"></div>

[`Vector4`](class_vector4.md) **min** ( with: [`Vector4`](class_vector4.md) ) const[^const]<div id="class_vector4_method_min"></div>

Returns the component-wise minimum of this and `with`, equivalent to `Vector4(minf(x, with.x), minf(y, with.y), minf(z, with.z), minf(w, with.w))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_min_axis_index"></div>

[`int`](class_int.md) **min_axis_index** ( ) const[^const]<div id="class_vector4_method_min_axis_index"></div>

Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns [`AXIS_W`](#class_vector4_constant_axis_w).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_minf"></div>

[`Vector4`](class_vector4.md) **minf** ( with: [`float`](class_float.md) ) const[^const]<div id="class_vector4_method_minf"></div>

Returns the component-wise minimum of this and `with`, equivalent to `Vector4(minf(x, with), minf(y, with), minf(z, with), minf(w, with))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_normalized"></div>

[`Vector4`](class_vector4.md) **normalized** ( ) const[^const]<div id="class_vector4_method_normalized"></div>

Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. Returns `(0, 0, 0, 0)` if `v.length() == 0`. See also [`is_normalized`](#class_vector4_method_is_normalized).

 **Note:** This function may return incorrect values if the input vector length is near zero.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_posmod"></div>

[`Vector4`](class_vector4.md) **posmod** ( mod: [`float`](class_float.md) ) const[^const]<div id="class_vector4_method_posmod"></div>

Returns a vector composed of the [`@GlobalScope.fposmod`](#class_@globalscope_method_fposmod) of this vector's components and `mod`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_posmodv"></div>

[`Vector4`](class_vector4.md) **posmodv** ( modv: [`Vector4`](class_vector4.md) ) const[^const]<div id="class_vector4_method_posmodv"></div>

Returns a vector composed of the [`@GlobalScope.fposmod`](#class_@globalscope_method_fposmod) of this vector's components and `modv`'s components.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_round"></div>

[`Vector4`](class_vector4.md) **round** ( ) const[^const]<div id="class_vector4_method_round"></div>

Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_sign"></div>

[`Vector4`](class_vector4.md) **sign** ( ) const[^const]<div id="class_vector4_method_sign"></div>

Returns a new vector with each component set to `1.0` if it's positive, `-1.0` if it's negative, and `0.0` if it's zero. The result is identical to calling [`@GlobalScope.sign`](#class_@globalscope_method_sign) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_snapped"></div>

[`Vector4`](class_vector4.md) **snapped** ( step: [`Vector4`](class_vector4.md) ) const[^const]<div id="class_vector4_method_snapped"></div>

Returns a new vector with each component snapped to the nearest multiple of the corresponding component in `step`. This can also be used to round the components to an arbitrary number of decimals.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_method_snappedf"></div>

[`Vector4`](class_vector4.md) **snappedf** ( step: [`float`](class_float.md) ) const[^const]<div id="class_vector4_method_snappedf"></div>

Returns a new vector with each component snapped to the nearest multiple of `step`. This can also be used to round the components to an arbitrary number of decimals.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_vector4_operator_neq_vector4"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`Vector4`](class_vector4.md) ) <div id="class_vector4_operator_neq_vector4"></div>

Returns `true` if the vectors are not equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](#class_vector4_method_is_equal_approx) instead, which is more reliable.

 **Note:** Vectors with [`@GDScript.NAN`](#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_operator_mul_projection"></div>

[`Vector4`](class_vector4.md) **operator *** ( right: [`Projection`](class_projection.md) ) <div id="class_vector4_operator_mul_projection"></div>

Transforms (multiplies) the **Vector4** by the transpose of the given [`Projection`](class_projection.md) matrix.

For transforming by inverse of a projection `projection.inverse() * vector` can be used instead. See [`Projection.inverse`](#class_projection_method_inverse).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_operator_mul_vector4"></div>

[`Vector4`](class_vector4.md) **operator *** ( right: [`Vector4`](class_vector4.md) ) <div id="class_vector4_operator_mul_vector4"></div>

Multiplies each component of the **Vector4** by the components of the given **Vector4**.

```

    print(Vector4(10, 20, 30, 40) * Vector4(3, 4, 5, 6)) # Prints "(30, 80, 150, 240)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_operator_mul_float"></div>

[`Vector4`](class_vector4.md) **operator *** ( right: [`float`](class_float.md) ) <div id="class_vector4_operator_mul_float"></div>

Multiplies each component of the **Vector4** by the given [`float`](class_float.md).

```

    print(Vector4(10, 20, 30, 40) * 2) # Prints "(20, 40, 60, 80)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_operator_mul_int"></div>

[`Vector4`](class_vector4.md) **operator *** ( right: [`int`](class_int.md) ) <div id="class_vector4_operator_mul_int"></div>

Multiplies each component of the **Vector4** by the given [`int`](class_int.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_operator_sum_vector4"></div>

[`Vector4`](class_vector4.md) **operator +** ( right: [`Vector4`](class_vector4.md) ) <div id="class_vector4_operator_sum_vector4"></div>

Adds each component of the **Vector4** by the components of the given **Vector4**.

```

    print(Vector4(10, 20, 30, 40) + Vector4(3, 4, 5, 6)) # Prints "(13, 24, 35, 46)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_operator_dif_vector4"></div>

[`Vector4`](class_vector4.md) **operator -** ( right: [`Vector4`](class_vector4.md) ) <div id="class_vector4_operator_dif_vector4"></div>

Subtracts each component of the **Vector4** by the components of the given **Vector4**.

```

    print(Vector4(10, 20, 30, 40) - Vector4(3, 4, 5, 6)) # Prints "(7, 16, 25, 34)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_operator_div_vector4"></div>

[`Vector4`](class_vector4.md) **operator /** ( right: [`Vector4`](class_vector4.md) ) <div id="class_vector4_operator_div_vector4"></div>

Divides each component of the **Vector4** by the components of the given **Vector4**.

```

    print(Vector4(10, 20, 30, 40) / Vector4(2, 5, 3, 4)) # Prints "(5, 4, 10, 10)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_operator_div_float"></div>

[`Vector4`](class_vector4.md) **operator /** ( right: [`float`](class_float.md) ) <div id="class_vector4_operator_div_float"></div>

Divides each component of the **Vector4** by the given [`float`](class_float.md).

```

    print(Vector4(10, 20, 30, 40) / 2 # Prints "(5, 10, 15, 20)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_operator_div_int"></div>

[`Vector4`](class_vector4.md) **operator /** ( right: [`int`](class_int.md) ) <div id="class_vector4_operator_div_int"></div>

Divides each component of the **Vector4** by the given [`int`](class_int.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_operator_lt_vector4"></div>

[`bool`](class_bool.md) **operator <** ( right: [`Vector4`](class_vector4.md) ) <div id="class_vector4_operator_lt_vector4"></div>

Compares two **Vector4** vectors by first checking if the X value of the left vector is less than the X value of the `right` vector. If the X values are exactly equal, then it repeats this check with the Y values of the two vectors, Z values of the two vectors, and then with the W values. This operator is useful for sorting vectors.

 **Note:** Vectors with [`@GDScript.NAN`](#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_operator_lte_vector4"></div>

[`bool`](class_bool.md) **operator <=** ( right: [`Vector4`](class_vector4.md) ) <div id="class_vector4_operator_lte_vector4"></div>

Compares two **Vector4** vectors by first checking if the X value of the left vector is less than or equal to the X value of the `right` vector. If the X values are exactly equal, then it repeats this check with the Y values of the two vectors, Z values of the two vectors, and then with the W values. This operator is useful for sorting vectors.

 **Note:** Vectors with [`@GDScript.NAN`](#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_operator_eq_vector4"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`Vector4`](class_vector4.md) ) <div id="class_vector4_operator_eq_vector4"></div>

Returns `true` if the vectors are exactly equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](#class_vector4_method_is_equal_approx) instead, which is more reliable.

 **Note:** Vectors with [`@GDScript.NAN`](#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_operator_gt_vector4"></div>

[`bool`](class_bool.md) **operator >** ( right: [`Vector4`](class_vector4.md) ) <div id="class_vector4_operator_gt_vector4"></div>

Compares two **Vector4** vectors by first checking if the X value of the left vector is greater than the X value of the `right` vector. If the X values are exactly equal, then it repeats this check with the Y values of the two vectors, Z values of the two vectors, and then with the W values. This operator is useful for sorting vectors.

 **Note:** Vectors with [`@GDScript.NAN`](#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_operator_gte_vector4"></div>

[`bool`](class_bool.md) **operator >=** ( right: [`Vector4`](class_vector4.md) ) <div id="class_vector4_operator_gte_vector4"></div>

Compares two **Vector4** vectors by first checking if the X value of the left vector is greater than or equal to the X value of the `right` vector. If the X values are exactly equal, then it repeats this check with the Y values of the two vectors, Z values of the two vectors, and then with the W values. This operator is useful for sorting vectors.

 **Note:** Vectors with [`@GDScript.NAN`](#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_operator_idx_int"></div>

[`float`](class_float.md) **operator []** ( index: [`int`](class_int.md) ) <div id="class_vector4_operator_idx_int"></div>

Access vector components using their `index`. `v[0]` is equivalent to `v.x`, `v[1]` is equivalent to `v.y`, `v[2]` is equivalent to `v.z`, and `v[3]` is equivalent to `v.w`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_operator_unplus"></div>

[`Vector4`](class_vector4.md) **operator unary+** ( ) <div id="class_vector4_operator_unplus"></div>

Returns the same value as if the `+` was not there. Unary `+` does nothing, but sometimes it can make your code more readable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector4_operator_unminus"></div>

[`Vector4`](class_vector4.md) **operator unary-** ( ) <div id="class_vector4_operator_unminus"></div>

Returns the negative value of the **Vector4**. This is the same as writing `Vector4(-v.x, -v.y, -v.z, -v.w)`. This operation flips the direction of the vector while keeping the same magnitude. With floats, the number zero can be either positive or negative.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
