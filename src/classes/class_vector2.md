<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/Vector2.xml。 -->

<div id="_class_vector2"></div>

# Vector2

A 2D vector using floating-point coordinates.

## 描述

A 2-element structure that can be used to represent 2D coordinates or any other pair of numeric values.

It uses floating-point coordinates. By default, these floating-point values use 32-bit precision, unlike [`float`](class_float.md) which is always 64-bit. If double precision is needed, compile the engine with the option `precision=double`.

See [`Vector2i`](class_vector2i.md) for its integer counterpart.

 **Note:** In a boolean context, a Vector2 will evaluate to `false` if it's equal to `Vector2(0, 0)`. Otherwise, a Vector2 will always evaluate to `true`.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`x`](class_vector2.md#class_vector2_property_x) | ``0.0`` |
| [`float`](class_float.md) | [`y`](class_vector2.md#class_vector2_property_y) | ``0.0`` |

## 构造函数

|||
|:-:|:--|
| [`Vector2`](class_vector2.md) | [`Vector2`](class_vector2.md#class_vector2_constructor_vector2) ( )                                                            |
| [`Vector2`](class_vector2.md) | [`Vector2`](class_vector2.md#class_vector2_constructor_vector2) ( from: [`Vector2`](class_vector2.md) )                        |
| [`Vector2`](class_vector2.md) | [`Vector2`](class_vector2.md#class_vector2_constructor_vector2) ( from: [`Vector2i`](class_vector2i.md) )                      |
| [`Vector2`](class_vector2.md) | [`Vector2`](class_vector2.md#class_vector2_constructor_vector2) ( x: [`float`](class_float.md), y: [`float`](class_float.md) ) |

## 方法

|||
|:-:|:--|
| [`Vector2`](class_vector2.md) | [`abs`](class_vector2.md#class_vector2_method_abs) ( ) const[^const]                                                                                                                                                                                                                                                                                                       |
| [`float`](class_float.md)     | [`angle`](class_vector2.md#class_vector2_method_angle) ( ) const[^const]                                                                                                                                                                                                                                                                                                   |
| [`float`](class_float.md)     | [`angle_to`](class_vector2.md#class_vector2_method_angle_to) ( to: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                                           |
| [`float`](class_float.md)     | [`angle_to_point`](class_vector2.md#class_vector2_method_angle_to_point) ( to: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                               |
| [`float`](class_float.md)     | [`aspect`](class_vector2.md#class_vector2_method_aspect) ( ) const[^const]                                                                                                                                                                                                                                                                                                 |
| [`Vector2`](class_vector2.md) | [`bezier_derivative`](class_vector2.md#class_vector2_method_bezier_derivative) ( control_1: [`Vector2`](class_vector2.md), control_2: [`Vector2`](class_vector2.md), end: [`Vector2`](class_vector2.md), t: [`float`](class_float.md) ) const[^const]                                                                                                                      |
| [`Vector2`](class_vector2.md) | [`bezier_interpolate`](class_vector2.md#class_vector2_method_bezier_interpolate) ( control_1: [`Vector2`](class_vector2.md), control_2: [`Vector2`](class_vector2.md), end: [`Vector2`](class_vector2.md), t: [`float`](class_float.md) ) const[^const]                                                                                                                    |
| [`Vector2`](class_vector2.md) | [`bounce`](class_vector2.md#class_vector2_method_bounce) ( n: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                                                |
| [`Vector2`](class_vector2.md) | [`ceil`](class_vector2.md#class_vector2_method_ceil) ( ) const[^const]                                                                                                                                                                                                                                                                                                     |
| [`Vector2`](class_vector2.md) | [`clamp`](class_vector2.md#class_vector2_method_clamp) ( min: [`Vector2`](class_vector2.md), max: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                            |
| [`Vector2`](class_vector2.md) | [`clampf`](class_vector2.md#class_vector2_method_clampf) ( min: [`float`](class_float.md), max: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                  |
| [`float`](class_float.md)     | [`cross`](class_vector2.md#class_vector2_method_cross) ( with: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                                               |
| [`Vector2`](class_vector2.md) | [`cubic_interpolate`](class_vector2.md#class_vector2_method_cubic_interpolate) ( b: [`Vector2`](class_vector2.md), pre_a: [`Vector2`](class_vector2.md), post_b: [`Vector2`](class_vector2.md), weight: [`float`](class_float.md) ) const[^const]                                                                                                                          |
| [`Vector2`](class_vector2.md) | [`cubic_interpolate_in_time`](class_vector2.md#class_vector2_method_cubic_interpolate_in_time) ( b: [`Vector2`](class_vector2.md), pre_a: [`Vector2`](class_vector2.md), post_b: [`Vector2`](class_vector2.md), weight: [`float`](class_float.md), b_t: [`float`](class_float.md), pre_a_t: [`float`](class_float.md), post_b_t: [`float`](class_float.md) ) const[^const] |
| [`Vector2`](class_vector2.md) | [`direction_to`](class_vector2.md#class_vector2_method_direction_to) ( to: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                                   |
| [`float`](class_float.md)     | [`distance_squared_to`](class_vector2.md#class_vector2_method_distance_squared_to) ( to: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                     |
| [`float`](class_float.md)     | [`distance_to`](class_vector2.md#class_vector2_method_distance_to) ( to: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                                     |
| [`float`](class_float.md)     | [`dot`](class_vector2.md#class_vector2_method_dot) ( with: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                                                   |
| [`Vector2`](class_vector2.md) | [`floor`](class_vector2.md#class_vector2_method_floor) ( ) const[^const]                                                                                                                                                                                                                                                                                                   |
| [`Vector2`](class_vector2.md) | [`from_angle`](class_vector2.md#class_vector2_method_from_angle) ( angle: [`float`](class_float.md) ) static[^static]                                                                                                                                                                                                                                                      |
| [`bool`](class_bool.md)       | [`is_equal_approx`](class_vector2.md#class_vector2_method_is_equal_approx) ( to: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                             |
| [`bool`](class_bool.md)       | [`is_finite`](class_vector2.md#class_vector2_method_is_finite) ( ) const[^const]                                                                                                                                                                                                                                                                                           |
| [`bool`](class_bool.md)       | [`is_normalized`](class_vector2.md#class_vector2_method_is_normalized) ( ) const[^const]                                                                                                                                                                                                                                                                                   |
| [`bool`](class_bool.md)       | [`is_zero_approx`](class_vector2.md#class_vector2_method_is_zero_approx) ( ) const[^const]                                                                                                                                                                                                                                                                                 |
| [`float`](class_float.md)     | [`length`](class_vector2.md#class_vector2_method_length) ( ) const[^const]                                                                                                                                                                                                                                                                                                 |
| [`float`](class_float.md)     | [`length_squared`](class_vector2.md#class_vector2_method_length_squared) ( ) const[^const]                                                                                                                                                                                                                                                                                 |
| [`Vector2`](class_vector2.md) | [`lerp`](class_vector2.md#class_vector2_method_lerp) ( to: [`Vector2`](class_vector2.md), weight: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                |
| [`Vector2`](class_vector2.md) | [`limit_length`](class_vector2.md#class_vector2_method_limit_length) ( length: [`float`](class_float.md) = 1.0 ) const[^const]                                                                                                                                                                                                                                             |
| [`Vector2`](class_vector2.md) | [`max`](class_vector2.md#class_vector2_method_max) ( with: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)         | [`max_axis_index`](class_vector2.md#class_vector2_method_max_axis_index) ( ) const[^const]                                                                                                                                                                                                                                                                                 |
| [`Vector2`](class_vector2.md) | [`maxf`](class_vector2.md#class_vector2_method_maxf) ( with: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                                                     |
| [`Vector2`](class_vector2.md) | [`min`](class_vector2.md#class_vector2_method_min) ( with: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                                                   |
| [`int`](class_int.md)         | [`min_axis_index`](class_vector2.md#class_vector2_method_min_axis_index) ( ) const[^const]                                                                                                                                                                                                                                                                                 |
| [`Vector2`](class_vector2.md) | [`minf`](class_vector2.md#class_vector2_method_minf) ( with: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                                                     |
| [`Vector2`](class_vector2.md) | [`move_toward`](class_vector2.md#class_vector2_method_move_toward) ( to: [`Vector2`](class_vector2.md), delta: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                   |
| [`Vector2`](class_vector2.md) | [`normalized`](class_vector2.md#class_vector2_method_normalized) ( ) const[^const]                                                                                                                                                                                                                                                                                         |
| [`Vector2`](class_vector2.md) | [`orthogonal`](class_vector2.md#class_vector2_method_orthogonal) ( ) const[^const]                                                                                                                                                                                                                                                                                         |
| [`Vector2`](class_vector2.md) | [`posmod`](class_vector2.md#class_vector2_method_posmod) ( mod: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                                                  |
| [`Vector2`](class_vector2.md) | [`posmodv`](class_vector2.md#class_vector2_method_posmodv) ( modv: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                                           |
| [`Vector2`](class_vector2.md) | [`project`](class_vector2.md#class_vector2_method_project) ( b: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                                              |
| [`Vector2`](class_vector2.md) | [`reflect`](class_vector2.md#class_vector2_method_reflect) ( line: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                                           |
| [`Vector2`](class_vector2.md) | [`rotated`](class_vector2.md#class_vector2_method_rotated) ( angle: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                                              |
| [`Vector2`](class_vector2.md) | [`round`](class_vector2.md#class_vector2_method_round) ( ) const[^const]                                                                                                                                                                                                                                                                                                   |
| [`Vector2`](class_vector2.md) | [`sign`](class_vector2.md#class_vector2_method_sign) ( ) const[^const]                                                                                                                                                                                                                                                                                                     |
| [`Vector2`](class_vector2.md) | [`slerp`](class_vector2.md#class_vector2_method_slerp) ( to: [`Vector2`](class_vector2.md), weight: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                              |
| [`Vector2`](class_vector2.md) | [`slide`](class_vector2.md#class_vector2_method_slide) ( n: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                                                  |
| [`Vector2`](class_vector2.md) | [`snapped`](class_vector2.md#class_vector2_method_snapped) ( step: [`Vector2`](class_vector2.md) ) const[^const]                                                                                                                                                                                                                                                           |
| [`Vector2`](class_vector2.md) | [`snappedf`](class_vector2.md#class_vector2_method_snappedf) ( step: [`float`](class_float.md) ) const[^const]                                                                                                                                                                                                                                                             |

## 运算符

|||
|:-:|:--|
| [`bool`](class_bool.md)       | [`operator !=`](class_Vector2.md#operator_neq_Vector2) ( right: [`Vector2`](class_vector2.md) )            |
| [`Vector2`](class_vector2.md) | [`operator *`](class_Vector2.md#operator_mul_Transform2D) ( right: [`Transform2D`](class_transform2d.md) ) |
| [`Vector2`](class_vector2.md) | [`operator *`](class_Vector2.md#operator_mul_Vector2) ( right: [`Vector2`](class_vector2.md) )             |
| [`Vector2`](class_vector2.md) | [`operator *`](class_Vector2.md#operator_mul_float) ( right: [`float`](class_float.md) )                   |
| [`Vector2`](class_vector2.md) | [`operator *`](class_Vector2.md#operator_mul_int) ( right: [`int`](class_int.md) )                         |
| [`Vector2`](class_vector2.md) | [`operator +`](class_Vector2.md#operator_sum_Vector2) ( right: [`Vector2`](class_vector2.md) )             |
| [`Vector2`](class_vector2.md) | [`operator -`](class_Vector2.md#operator_dif_Vector2) ( right: [`Vector2`](class_vector2.md) )             |
| [`Vector2`](class_vector2.md) | [`operator /`](class_Vector2.md#operator_div_Vector2) ( right: [`Vector2`](class_vector2.md) )             |
| [`Vector2`](class_vector2.md) | [`operator /`](class_Vector2.md#operator_div_float) ( right: [`float`](class_float.md) )                   |
| [`Vector2`](class_vector2.md) | [`operator /`](class_Vector2.md#operator_div_int) ( right: [`int`](class_int.md) )                         |
| [`bool`](class_bool.md)       | [`operator <`](class_Vector2.md#operator_lt_Vector2) ( right: [`Vector2`](class_vector2.md) )              |
| [`bool`](class_bool.md)       | [`operator <=`](class_Vector2.md#operator_lte_Vector2) ( right: [`Vector2`](class_vector2.md) )            |
| [`bool`](class_bool.md)       | [`operator ==`](class_Vector2.md#operator_eq_Vector2) ( right: [`Vector2`](class_vector2.md) )             |
| [`bool`](class_bool.md)       | [`operator >`](class_Vector2.md#operator_gt_Vector2) ( right: [`Vector2`](class_vector2.md) )              |
| [`bool`](class_bool.md)       | [`operator >=`](class_Vector2.md#operator_gte_Vector2) ( right: [`Vector2`](class_vector2.md) )            |
| [`float`](class_float.md)     | [`operator []`](class_Vector2.md#operator_idx_int) ( index: [`int`](class_int.md) )                        |
| [`Vector2`](class_vector2.md) | [`operator unary+`](class_Vector2.md#operator_unplus) ( )                                                  |
| [`Vector2`](class_vector2.md) | [`operator unary-`](class_Vector2.md#operator_unminus) ( )                                                 |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_vector2_constant_axis_x"></div>

**AXIS_X** = ``0`` <div id="class_vector2_constant_axis_x"></div>

Enumerated value for the X axis. Returned by [`max_axis_index`](class_vector2.md#class_vector2_method_max_axis_index) and [`min_axis_index`](class_vector2.md#class_vector2_method_min_axis_index).

<div id="_class_vector2_constant_axis_y"></div>

**AXIS_Y** = ``1`` <div id="class_vector2_constant_axis_y"></div>

Enumerated value for the Y axis. Returned by [`max_axis_index`](class_vector2.md#class_vector2_method_max_axis_index) and [`min_axis_index`](class_vector2.md#class_vector2_method_min_axis_index).

<div id="_class_vector2_constant_zero"></div>

**ZERO** = ``Vector2(0, 0)`` <div id="class_vector2_constant_zero"></div>

Zero vector, a vector with all components set to `0`.

<div id="_class_vector2_constant_one"></div>

**ONE** = ``Vector2(1, 1)`` <div id="class_vector2_constant_one"></div>

One vector, a vector with all components set to `1`.

<div id="_class_vector2_constant_inf"></div>

**INF** = ``Vector2(inf, inf)`` <div id="class_vector2_constant_inf"></div>

Infinity vector, a vector with all components set to [`@GDScript.INF`](class_@gdscript.md#class_@gdscript_constant_inf).

<div id="_class_vector2_constant_left"></div>

**LEFT** = ``Vector2(-1, 0)`` <div id="class_vector2_constant_left"></div>

Left unit vector. Represents the direction of left.

<div id="_class_vector2_constant_right"></div>

**RIGHT** = ``Vector2(1, 0)`` <div id="class_vector2_constant_right"></div>

Right unit vector. Represents the direction of right.

<div id="_class_vector2_constant_up"></div>

**UP** = ``Vector2(0, -1)`` <div id="class_vector2_constant_up"></div>

Up unit vector. Y is down in 2D, so this vector points -Y.

<div id="_class_vector2_constant_down"></div>

**DOWN** = ``Vector2(0, 1)`` <div id="class_vector2_constant_down"></div>

Down unit vector. Y is down in 2D, so this vector points +Y.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_vector2_property_x"></div>

[`float`](class_float.md) **x** = ``0.0`` <div id="class_vector2_property_x"></div>

The vector's X component. Also accessible by using the index position `[0]`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_property_y"></div>

[`float`](class_float.md) **y** = ``0.0`` <div id="class_vector2_property_y"></div>

The vector's Y component. Also accessible by using the index position `[1]`.

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_vector2_constructor_vector2"></div>

[`Vector2`](class_vector2.md) **Vector2** ( )<div id="class_vector2_constructor_vector2"></div>

Constructs a default-initialized **Vector2** with all components set to `0`.

<!-- rst-class:: classref-item-separator -->

---

[`Vector2`](class_vector2.md) **Vector2** ( from: [`Vector2`](class_vector2.md) )

Constructs a **Vector2** as a copy of the given **Vector2**.

<!-- rst-class:: classref-item-separator -->

---

[`Vector2`](class_vector2.md) **Vector2** ( from: [`Vector2i`](class_vector2i.md) )

Constructs a new **Vector2** from [`Vector2i`](class_vector2i.md).

<!-- rst-class:: classref-item-separator -->

---

[`Vector2`](class_vector2.md) **Vector2** ( x: [`float`](class_float.md), y: [`float`](class_float.md) )

Constructs a new **Vector2** from the given `x` and `y`.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_vector2_method_abs"></div>

[`Vector2`](class_vector2.md) **abs** ( ) const[^const]<div id="class_vector2_method_abs"></div>

Returns a new vector with all components in absolute values (i.e. positive).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_angle"></div>

[`float`](class_float.md) **angle** ( ) const[^const]<div id="class_vector2_method_angle"></div>

Returns this vector's angle with respect to the positive X axis, or `(1, 0)` vector, in radians.

For example, `Vector2.RIGHT.angle()` will return zero, `Vector2.DOWN.angle()` will return `PI / 2` (a quarter turn, or 90 degrees), and `Vector2(1, -1).angle()` will return `-PI / 4` (a negative eighth turn, or -45 degrees).

 [*Illustration of the returned angle.*](https://raw.githubusercontent.com/godotengine/godot-docs/master/img/vector2_angle.png) 

Equivalent to the result of [`@GlobalScope.atan2`](class_@globalscope.md#class_@globalscope_method_atan2) when called with the vector's [`y`](class_vector2.md#class_vector2_property_y) and [`x`](class_vector2.md#class_vector2_property_x) as parameters: `atan2(y, x)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_angle_to"></div>

[`float`](class_float.md) **angle_to** ( to: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_vector2_method_angle_to"></div>

Returns the angle to the given vector, in radians.

 [*Illustration of the returned angle.*](https://raw.githubusercontent.com/godotengine/godot-docs/master/img/vector2_angle_to.png)

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_angle_to_point"></div>

[`float`](class_float.md) **angle_to_point** ( to: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_vector2_method_angle_to_point"></div>

Returns the angle between the line connecting the two points and the X axis, in radians.

 `a.angle_to_point(b)` is equivalent of doing `(b - a).angle()`.

 [*Illustration of the returned angle.*](https://raw.githubusercontent.com/godotengine/godot-docs/master/img/vector2_angle_to_point.png)

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_aspect"></div>

[`float`](class_float.md) **aspect** ( ) const[^const]<div id="class_vector2_method_aspect"></div>

Returns the aspect ratio of this vector, the ratio of [`x`](class_vector2.md#class_vector2_property_x) to [`y`](class_vector2.md#class_vector2_property_y).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_bezier_derivative"></div>

[`Vector2`](class_vector2.md) **bezier_derivative** ( control_1: [`Vector2`](class_vector2.md), control_2: [`Vector2`](class_vector2.md), end: [`Vector2`](class_vector2.md), t: [`float`](class_float.md) ) const[^const]<div id="class_vector2_method_bezier_derivative"></div>

Returns the derivative at the given `t` on the [*Bézier curve*](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) defined by this vector and the given `control_1`, `control_2`, and `end` points.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_bezier_interpolate"></div>

[`Vector2`](class_vector2.md) **bezier_interpolate** ( control_1: [`Vector2`](class_vector2.md), control_2: [`Vector2`](class_vector2.md), end: [`Vector2`](class_vector2.md), t: [`float`](class_float.md) ) const[^const]<div id="class_vector2_method_bezier_interpolate"></div>

Returns the point at the given `t` on the [*Bézier curve*](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) defined by this vector and the given `control_1`, `control_2`, and `end` points.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_bounce"></div>

[`Vector2`](class_vector2.md) **bounce** ( n: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_vector2_method_bounce"></div>

Returns the vector "bounced off" from a line defined by the given normal `n` perpendicular to the line.

 **Note:** [`bounce`](class_vector2.md#class_vector2_method_bounce) performs the operation that most engines and frameworks call `reflect()`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_ceil"></div>

[`Vector2`](class_vector2.md) **ceil** ( ) const[^const]<div id="class_vector2_method_ceil"></div>

Returns a new vector with all components rounded up (towards positive infinity).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_clamp"></div>

[`Vector2`](class_vector2.md) **clamp** ( min: [`Vector2`](class_vector2.md), max: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_vector2_method_clamp"></div>

Returns a new vector with all components clamped between the components of `min` and `max`, by running [`@GlobalScope.clamp`](class_@globalscope.md#class_@globalscope_method_clamp) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_clampf"></div>

[`Vector2`](class_vector2.md) **clampf** ( min: [`float`](class_float.md), max: [`float`](class_float.md) ) const[^const]<div id="class_vector2_method_clampf"></div>

Returns a new vector with all components clamped between `min` and `max`, by running [`@GlobalScope.clamp`](class_@globalscope.md#class_@globalscope_method_clamp) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_cross"></div>

[`float`](class_float.md) **cross** ( with: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_vector2_method_cross"></div>

Returns the 2D analog of the cross product for this vector and `with`.

This is the signed area of the parallelogram formed by the two vectors. If the second vector is clockwise from the first vector, then the cross product is the positive area. If counter-clockwise, the cross product is the negative area. If the two vectors are parallel this returns zero, making it useful for testing if two vectors are parallel.

 **Note:** Cross product is not defined in 2D mathematically. This method embeds the 2D vectors in the XY plane of 3D space and uses their cross product's Z component as the analog.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_cubic_interpolate"></div>

[`Vector2`](class_vector2.md) **cubic_interpolate** ( b: [`Vector2`](class_vector2.md), pre_a: [`Vector2`](class_vector2.md), post_b: [`Vector2`](class_vector2.md), weight: [`float`](class_float.md) ) const[^const]<div id="class_vector2_method_cubic_interpolate"></div>

Performs a cubic interpolation between this vector and `b` using `pre_a` and `post_b` as handles, and returns the result at position `weight`. `weight` is on the range of 0.0 to 1.0, representing the amount of interpolation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_cubic_interpolate_in_time"></div>

[`Vector2`](class_vector2.md) **cubic_interpolate_in_time** ( b: [`Vector2`](class_vector2.md), pre_a: [`Vector2`](class_vector2.md), post_b: [`Vector2`](class_vector2.md), weight: [`float`](class_float.md), b_t: [`float`](class_float.md), pre_a_t: [`float`](class_float.md), post_b_t: [`float`](class_float.md) ) const[^const]<div id="class_vector2_method_cubic_interpolate_in_time"></div>

Performs a cubic interpolation between this vector and `b` using `pre_a` and `post_b` as handles, and returns the result at position `weight`. `weight` is on the range of 0.0 to 1.0, representing the amount of interpolation.

It can perform smoother interpolation than [`cubic_interpolate`](class_vector2.md#class_vector2_method_cubic_interpolate) by the time values.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_direction_to"></div>

[`Vector2`](class_vector2.md) **direction_to** ( to: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_vector2_method_direction_to"></div>

Returns the normalized vector pointing from this vector to `to`. This is equivalent to using `(b - a).normalized()`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_distance_squared_to"></div>

[`float`](class_float.md) **distance_squared_to** ( to: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_vector2_method_distance_squared_to"></div>

Returns the squared distance between this vector and `to`.

This method runs faster than [`distance_to`](class_vector2.md#class_vector2_method_distance_to), so prefer it if you need to compare vectors or need the squared distance for some formula.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_distance_to"></div>

[`float`](class_float.md) **distance_to** ( to: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_vector2_method_distance_to"></div>

Returns the distance between this vector and `to`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_dot"></div>

[`float`](class_float.md) **dot** ( with: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_vector2_method_dot"></div>

Returns the dot product of this vector and `with`. This can be used to compare the angle between two vectors. For example, this can be used to determine whether an enemy is facing the player.

The dot product will be `0` for a right angle (90 degrees), greater than 0 for angles narrower than 90 degrees and lower than 0 for angles wider than 90 degrees.

When using unit (normalized) vectors, the result will always be between `-1.0` (180 degree angle) when the vectors are facing opposite directions, and `1.0` (0 degree angle) when the vectors are aligned.

 **Note:** `a.dot(b)` is equivalent to `b.dot(a)`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_floor"></div>

[`Vector2`](class_vector2.md) **floor** ( ) const[^const]<div id="class_vector2_method_floor"></div>

Returns a new vector with all components rounded down (towards negative infinity).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_from_angle"></div>

[`Vector2`](class_vector2.md) **from_angle** ( angle: [`float`](class_float.md) ) static[^static]<div id="class_vector2_method_from_angle"></div>

Creates a unit **Vector2** rotated to the given `angle` in radians. This is equivalent to doing `Vector2(cos(angle), sin(angle))` or `Vector2.RIGHT.rotated(angle)`.

```

    print(Vector2.from_angle(0)) # Prints (1, 0).
    print(Vector2(1, 0).angle()) # Prints 0, which is the angle used above.
    print(Vector2.from_angle(PI / 2)) # Prints (0, 1).
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_is_equal_approx"></div>

[`bool`](class_bool.md) **is_equal_approx** ( to: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_vector2_method_is_equal_approx"></div>

Returns `true` if this vector and `to` are approximately equal, by running [`@GlobalScope.is_equal_approx`](class_@globalscope.md#class_@globalscope_method_is_equal_approx) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_is_finite"></div>

[`bool`](class_bool.md) **is_finite** ( ) const[^const]<div id="class_vector2_method_is_finite"></div>

Returns `true` if this vector is finite, by calling [`@GlobalScope.is_finite`](class_@globalscope.md#class_@globalscope_method_is_finite) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_is_normalized"></div>

[`bool`](class_bool.md) **is_normalized** ( ) const[^const]<div id="class_vector2_method_is_normalized"></div>

Returns `true` if the vector is normalized, i.e. its length is approximately equal to 1.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_is_zero_approx"></div>

[`bool`](class_bool.md) **is_zero_approx** ( ) const[^const]<div id="class_vector2_method_is_zero_approx"></div>

Returns `true` if this vector's values are approximately zero, by running [`@GlobalScope.is_zero_approx`](class_@globalscope.md#class_@globalscope_method_is_zero_approx) on each component.

This method is faster than using [`is_equal_approx`](class_vector2.md#class_vector2_method_is_equal_approx) with one value as a zero vector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_length"></div>

[`float`](class_float.md) **length** ( ) const[^const]<div id="class_vector2_method_length"></div>

Returns the length (magnitude) of this vector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_length_squared"></div>

[`float`](class_float.md) **length_squared** ( ) const[^const]<div id="class_vector2_method_length_squared"></div>

Returns the squared length (squared magnitude) of this vector.

This method runs faster than [`length`](class_vector2.md#class_vector2_method_length), so prefer it if you need to compare vectors or need the squared distance for some formula.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_lerp"></div>

[`Vector2`](class_vector2.md) **lerp** ( to: [`Vector2`](class_vector2.md), weight: [`float`](class_float.md) ) const[^const]<div id="class_vector2_method_lerp"></div>

Returns the result of the linear interpolation between this vector and `to` by amount `weight`. `weight` is on the range of `0.0` to `1.0`, representing the amount of interpolation.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_limit_length"></div>

[`Vector2`](class_vector2.md) **limit_length** ( length: [`float`](class_float.md) = 1.0 ) const[^const]<div id="class_vector2_method_limit_length"></div>

Returns the vector with a maximum length by limiting its length to `length`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_max"></div>

[`Vector2`](class_vector2.md) **max** ( with: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_vector2_method_max"></div>

Returns the component-wise maximum of this and `with`, equivalent to `Vector2(maxf(x, with.x), maxf(y, with.y))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_max_axis_index"></div>

[`int`](class_int.md) **max_axis_index** ( ) const[^const]<div id="class_vector2_method_max_axis_index"></div>

Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns [`AXIS_X`](class_vector2.md#class_vector2_constant_axis_x).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_maxf"></div>

[`Vector2`](class_vector2.md) **maxf** ( with: [`float`](class_float.md) ) const[^const]<div id="class_vector2_method_maxf"></div>

Returns the component-wise maximum of this and `with`, equivalent to `Vector2(maxf(x, with), maxf(y, with))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_min"></div>

[`Vector2`](class_vector2.md) **min** ( with: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_vector2_method_min"></div>

Returns the component-wise minimum of this and `with`, equivalent to `Vector2(minf(x, with.x), minf(y, with.y))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_min_axis_index"></div>

[`int`](class_int.md) **min_axis_index** ( ) const[^const]<div id="class_vector2_method_min_axis_index"></div>

Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns [`AXIS_Y`](class_vector2.md#class_vector2_constant_axis_y).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_minf"></div>

[`Vector2`](class_vector2.md) **minf** ( with: [`float`](class_float.md) ) const[^const]<div id="class_vector2_method_minf"></div>

Returns the component-wise minimum of this and `with`, equivalent to `Vector2(minf(x, with), minf(y, with))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_move_toward"></div>

[`Vector2`](class_vector2.md) **move_toward** ( to: [`Vector2`](class_vector2.md), delta: [`float`](class_float.md) ) const[^const]<div id="class_vector2_method_move_toward"></div>

Returns a new vector moved toward `to` by the fixed `delta` amount. Will not go past the final value.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_normalized"></div>

[`Vector2`](class_vector2.md) **normalized** ( ) const[^const]<div id="class_vector2_method_normalized"></div>

Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. Returns `(0, 0)` if `v.length() == 0`. See also [`is_normalized`](class_vector2.md#class_vector2_method_is_normalized).

 **Note:** This function may return incorrect values if the input vector length is near zero.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_orthogonal"></div>

[`Vector2`](class_vector2.md) **orthogonal** ( ) const[^const]<div id="class_vector2_method_orthogonal"></div>

Returns a perpendicular vector rotated 90 degrees counter-clockwise compared to the original, with the same length.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_posmod"></div>

[`Vector2`](class_vector2.md) **posmod** ( mod: [`float`](class_float.md) ) const[^const]<div id="class_vector2_method_posmod"></div>

Returns a vector composed of the [`@GlobalScope.fposmod`](class_@globalscope.md#class_@globalscope_method_fposmod) of this vector's components and `mod`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_posmodv"></div>

[`Vector2`](class_vector2.md) **posmodv** ( modv: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_vector2_method_posmodv"></div>

Returns a vector composed of the [`@GlobalScope.fposmod`](class_@globalscope.md#class_@globalscope_method_fposmod) of this vector's components and `modv`'s components.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_project"></div>

[`Vector2`](class_vector2.md) **project** ( b: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_vector2_method_project"></div>

Returns a new vector resulting from projecting this vector onto the given vector `b`. The resulting new vector is parallel to `b`. See also [`slide`](class_vector2.md#class_vector2_method_slide).

 **Note:** If the vector `b` is a zero vector, the components of the resulting new vector will be [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_reflect"></div>

[`Vector2`](class_vector2.md) **reflect** ( line: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_vector2_method_reflect"></div>

Returns the result of reflecting the vector from a line defined by the given direction vector `line`.

 **Note:** [`reflect`](class_vector2.md#class_vector2_method_reflect) differs from what other engines and frameworks call `reflect()`. In other engines, `reflect()` takes a normal direction which is a direction perpendicular to the line. In Godot, you specify the direction of the line directly. See also [`bounce`](class_vector2.md#class_vector2_method_bounce) which does what most engines call `reflect()`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_rotated"></div>

[`Vector2`](class_vector2.md) **rotated** ( angle: [`float`](class_float.md) ) const[^const]<div id="class_vector2_method_rotated"></div>

Returns the result of rotating this vector by `angle` (in radians). See also [`@GlobalScope.deg_to_rad`](class_@globalscope.md#class_@globalscope_method_deg_to_rad).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_round"></div>

[`Vector2`](class_vector2.md) **round** ( ) const[^const]<div id="class_vector2_method_round"></div>

Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_sign"></div>

[`Vector2`](class_vector2.md) **sign** ( ) const[^const]<div id="class_vector2_method_sign"></div>

Returns a new vector with each component set to `1.0` if it's positive, `-1.0` if it's negative, and `0.0` if it's zero. The result is identical to calling [`@GlobalScope.sign`](class_@globalscope.md#class_@globalscope_method_sign) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_slerp"></div>

[`Vector2`](class_vector2.md) **slerp** ( to: [`Vector2`](class_vector2.md), weight: [`float`](class_float.md) ) const[^const]<div id="class_vector2_method_slerp"></div>

Returns the result of spherical linear interpolation between this vector and `to`, by amount `weight`. `weight` is on the range of 0.0 to 1.0, representing the amount of interpolation.

This method also handles interpolating the lengths if the input vectors have different lengths. For the special case of one or both input vectors having zero length, this method behaves like [`lerp`](class_vector2.md#class_vector2_method_lerp).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_slide"></div>

[`Vector2`](class_vector2.md) **slide** ( n: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_vector2_method_slide"></div>

Returns a new vector resulting from sliding this vector along a line with normal `n`. The resulting new vector is perpendicular to `n`, and is equivalent to this vector minus its projection on `n`. See also [`project`](class_vector2.md#class_vector2_method_project).

 **Note:** The vector `n` must be normalized. See also [`normalized`](class_vector2.md#class_vector2_method_normalized).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_snapped"></div>

[`Vector2`](class_vector2.md) **snapped** ( step: [`Vector2`](class_vector2.md) ) const[^const]<div id="class_vector2_method_snapped"></div>

Returns a new vector with each component snapped to the nearest multiple of the corresponding component in `step`. This can also be used to round the components to an arbitrary number of decimals.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_method_snappedf"></div>

[`Vector2`](class_vector2.md) **snappedf** ( step: [`float`](class_float.md) ) const[^const]<div id="class_vector2_method_snappedf"></div>

Returns a new vector with each component snapped to the nearest multiple of `step`. This can also be used to round the components to an arbitrary number of decimals.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_vector2_operator_neq_vector2"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`Vector2`](class_vector2.md) ) <div id="class_vector2_operator_neq_vector2"></div>

Returns `true` if the vectors are not equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](class_vector2.md#class_vector2_method_is_equal_approx) instead, which is more reliable.

 **Note:** Vectors with [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_operator_mul_transform2d"></div>

[`Vector2`](class_vector2.md) **operator *** ( right: [`Transform2D`](class_transform2d.md) ) <div id="class_vector2_operator_mul_transform2d"></div>

Inversely transforms (multiplies) the **Vector2** by the given [`Transform2D`](class_transform2d.md) transformation matrix, under the assumption that the transformation basis is orthonormal (i.e. rotation/reflection is fine, scaling/skew is not).

 `vector * transform` is equivalent to `transform.inverse() * vector`. See [`Transform2D.inverse`](class_transform2d.md#class_transform2d_method_inverse).

For transforming by inverse of an affine transformation (e.g. with scaling) `transform.affine_inverse() * vector` can be used instead. See [`Transform2D.affine_inverse`](class_transform2d.md#class_transform2d_method_affine_inverse).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_operator_mul_vector2"></div>

[`Vector2`](class_vector2.md) **operator *** ( right: [`Vector2`](class_vector2.md) ) <div id="class_vector2_operator_mul_vector2"></div>

Multiplies each component of the **Vector2** by the components of the given **Vector2**.

```

    print(Vector2(10, 20) * Vector2(3, 4)) # Prints "(30, 80)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_operator_mul_float"></div>

[`Vector2`](class_vector2.md) **operator *** ( right: [`float`](class_float.md) ) <div id="class_vector2_operator_mul_float"></div>

Multiplies each component of the **Vector2** by the given [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_operator_mul_int"></div>

[`Vector2`](class_vector2.md) **operator *** ( right: [`int`](class_int.md) ) <div id="class_vector2_operator_mul_int"></div>

Multiplies each component of the **Vector2** by the given [`int`](class_int.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_operator_sum_vector2"></div>

[`Vector2`](class_vector2.md) **operator +** ( right: [`Vector2`](class_vector2.md) ) <div id="class_vector2_operator_sum_vector2"></div>

Adds each component of the **Vector2** by the components of the given **Vector2**.

```

    print(Vector2(10, 20) + Vector2(3, 4)) # Prints "(13, 24)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_operator_dif_vector2"></div>

[`Vector2`](class_vector2.md) **operator -** ( right: [`Vector2`](class_vector2.md) ) <div id="class_vector2_operator_dif_vector2"></div>

Subtracts each component of the **Vector2** by the components of the given **Vector2**.

```

    print(Vector2(10, 20) - Vector2(3, 4)) # Prints "(7, 16)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_operator_div_vector2"></div>

[`Vector2`](class_vector2.md) **operator /** ( right: [`Vector2`](class_vector2.md) ) <div id="class_vector2_operator_div_vector2"></div>

Divides each component of the **Vector2** by the components of the given **Vector2**.

```

    print(Vector2(10, 20) / Vector2(2, 5)) # Prints "(5, 4)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_operator_div_float"></div>

[`Vector2`](class_vector2.md) **operator /** ( right: [`float`](class_float.md) ) <div id="class_vector2_operator_div_float"></div>

Divides each component of the **Vector2** by the given [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_operator_div_int"></div>

[`Vector2`](class_vector2.md) **operator /** ( right: [`int`](class_int.md) ) <div id="class_vector2_operator_div_int"></div>

Divides each component of the **Vector2** by the given [`int`](class_int.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_operator_lt_vector2"></div>

[`bool`](class_bool.md) **operator <** ( right: [`Vector2`](class_vector2.md) ) <div id="class_vector2_operator_lt_vector2"></div>

Compares two **Vector2** vectors by first checking if the X value of the left vector is less than the X value of the `right` vector. If the X values are exactly equal, then it repeats this check with the Y values of the two vectors. This operator is useful for sorting vectors.

 **Note:** Vectors with [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_operator_lte_vector2"></div>

[`bool`](class_bool.md) **operator <=** ( right: [`Vector2`](class_vector2.md) ) <div id="class_vector2_operator_lte_vector2"></div>

Compares two **Vector2** vectors by first checking if the X value of the left vector is less than or equal to the X value of the `right` vector. If the X values are exactly equal, then it repeats this check with the Y values of the two vectors. This operator is useful for sorting vectors.

 **Note:** Vectors with [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_operator_eq_vector2"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`Vector2`](class_vector2.md) ) <div id="class_vector2_operator_eq_vector2"></div>

Returns `true` if the vectors are exactly equal.

 **Note:** Due to floating-point precision errors, consider using [`is_equal_approx`](class_vector2.md#class_vector2_method_is_equal_approx) instead, which is more reliable.

 **Note:** Vectors with [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_operator_gt_vector2"></div>

[`bool`](class_bool.md) **operator >** ( right: [`Vector2`](class_vector2.md) ) <div id="class_vector2_operator_gt_vector2"></div>

Compares two **Vector2** vectors by first checking if the X value of the left vector is greater than the X value of the `right` vector. If the X values are exactly equal, then it repeats this check with the Y values of the two vectors. This operator is useful for sorting vectors.

 **Note:** Vectors with [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_operator_gte_vector2"></div>

[`bool`](class_bool.md) **operator >=** ( right: [`Vector2`](class_vector2.md) ) <div id="class_vector2_operator_gte_vector2"></div>

Compares two **Vector2** vectors by first checking if the X value of the left vector is greater than or equal to the X value of the `right` vector. If the X values are exactly equal, then it repeats this check with the Y values of the two vectors. This operator is useful for sorting vectors.

 **Note:** Vectors with [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan) elements don't behave the same as other vectors. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_operator_idx_int"></div>

[`float`](class_float.md) **operator []** ( index: [`int`](class_int.md) ) <div id="class_vector2_operator_idx_int"></div>

Access vector components using their `index`. `v[0]` is equivalent to `v.x`, and `v[1]` is equivalent to `v.y`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_operator_unplus"></div>

[`Vector2`](class_vector2.md) **operator unary+** ( ) <div id="class_vector2_operator_unplus"></div>

Returns the same value as if the `+` was not there. Unary `+` does nothing, but sometimes it can make your code more readable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2_operator_unminus"></div>

[`Vector2`](class_vector2.md) **operator unary-** ( ) <div id="class_vector2_operator_unminus"></div>

Returns the negative value of the **Vector2**. This is the same as writing `Vector2(-v.x, -v.y)`. This operation flips the direction of the vector while keeping the same magnitude. With floats, the number zero can be either positive or negative.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
