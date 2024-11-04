<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/Vector2i.xml。 -->

<div id="_class_vector2i"></div>

# Vector2i

A 2D vector using integer coordinates.

## 描述

A 2-element structure that can be used to represent 2D grid coordinates or any other pair of integers.

It uses integer coordinates and is therefore preferable to [`Vector2`](class_vector2.md) when exact precision is required. Note that the values are limited to 32 bits, and unlike [`Vector2`](class_vector2.md) this cannot be configured with an engine build option. Use [`int`](class_int.md) or [`PackedInt64Array`](class_packedint64array.md) if 64-bit values are needed.

 **Note:** In a boolean context, a Vector2i will evaluate to `false` if it's equal to `Vector2i(0, 0)`. Otherwise, a Vector2i will always evaluate to `true`.

## 属性

| [`int`](class_int.md) | [`x`](#class_vector2i_property_x) | ``0`` |
| [`int`](class_int.md) | [`y`](#class_vector2i_property_y) | ``0`` |

## 构造函数

| [`Vector2i`](class_vector2i.md) | [`Vector2i`](#class_vector2i_constructor_vector2i) ( )                                                    |
| [`Vector2i`](class_vector2i.md) | [`Vector2i`](#class_vector2i_constructor_vector2i) ( from: [`Vector2i`](class_vector2i.md) )              |
| [`Vector2i`](class_vector2i.md) | [`Vector2i`](#class_vector2i_constructor_vector2i) ( from: [`Vector2`](class_vector2.md) )                |
| [`Vector2i`](class_vector2i.md) | [`Vector2i`](#class_vector2i_constructor_vector2i) ( x: [`int`](class_int.md), y: [`int`](class_int.md) ) |

## 方法

| [`Vector2i`](class_vector2i.md) | [`abs`](#class_vector2i_method_abs) ( ) const[^const]                                                                                |
| [`float`](class_float.md)       | [`aspect`](#class_vector2i_method_aspect) ( ) const[^const]                                                                          |
| [`Vector2i`](class_vector2i.md) | [`clamp`](#class_vector2i_method_clamp) ( min: [`Vector2i`](class_vector2i.md), max: [`Vector2i`](class_vector2i.md) ) const[^const] |
| [`Vector2i`](class_vector2i.md) | [`clampi`](#class_vector2i_method_clampi) ( min: [`int`](class_int.md), max: [`int`](class_int.md) ) const[^const]                   |
| [`int`](class_int.md)           | [`distance_squared_to`](#class_vector2i_method_distance_squared_to) ( to: [`Vector2i`](class_vector2i.md) ) const[^const]            |
| [`float`](class_float.md)       | [`distance_to`](#class_vector2i_method_distance_to) ( to: [`Vector2i`](class_vector2i.md) ) const[^const]                            |
| [`float`](class_float.md)       | [`length`](#class_vector2i_method_length) ( ) const[^const]                                                                          |
| [`int`](class_int.md)           | [`length_squared`](#class_vector2i_method_length_squared) ( ) const[^const]                                                          |
| [`Vector2i`](class_vector2i.md) | [`max`](#class_vector2i_method_max) ( with: [`Vector2i`](class_vector2i.md) ) const[^const]                                          |
| [`int`](class_int.md)           | [`max_axis_index`](#class_vector2i_method_max_axis_index) ( ) const[^const]                                                          |
| [`Vector2i`](class_vector2i.md) | [`maxi`](#class_vector2i_method_maxi) ( with: [`int`](class_int.md) ) const[^const]                                                  |
| [`Vector2i`](class_vector2i.md) | [`min`](#class_vector2i_method_min) ( with: [`Vector2i`](class_vector2i.md) ) const[^const]                                          |
| [`int`](class_int.md)           | [`min_axis_index`](#class_vector2i_method_min_axis_index) ( ) const[^const]                                                          |
| [`Vector2i`](class_vector2i.md) | [`mini`](#class_vector2i_method_mini) ( with: [`int`](class_int.md) ) const[^const]                                                  |
| [`Vector2i`](class_vector2i.md) | [`sign`](#class_vector2i_method_sign) ( ) const[^const]                                                                              |
| [`Vector2i`](class_vector2i.md) | [`snapped`](#class_vector2i_method_snapped) ( step: [`Vector2i`](class_vector2i.md) ) const[^const]                                  |
| [`Vector2i`](class_vector2i.md) | [`snappedi`](#class_vector2i_method_snappedi) ( step: [`int`](class_int.md) ) const[^const]                                          |

## 运算符

| [`bool`](class_bool.md)         | [`operator !=`](class_Vector2i.md#operator_neq_Vector2i) ( right: [`Vector2i`](class_vector2i.md) ) |
| [`Vector2i`](class_vector2i.md) | [`operator %`](class_Vector2i.md#operator_mod_Vector2i) ( right: [`Vector2i`](class_vector2i.md) )  |
| [`Vector2i`](class_vector2i.md) | [`operator %`](class_Vector2i.md#operator_mod_int) ( right: [`int`](class_int.md) )                 |
| [`Vector2i`](class_vector2i.md) | [`operator *`](class_Vector2i.md#operator_mul_Vector2i) ( right: [`Vector2i`](class_vector2i.md) )  |
| [`Vector2`](class_vector2.md)   | [`operator *`](class_Vector2i.md#operator_mul_float) ( right: [`float`](class_float.md) )           |
| [`Vector2i`](class_vector2i.md) | [`operator *`](class_Vector2i.md#operator_mul_int) ( right: [`int`](class_int.md) )                 |
| [`Vector2i`](class_vector2i.md) | [`operator +`](class_Vector2i.md#operator_sum_Vector2i) ( right: [`Vector2i`](class_vector2i.md) )  |
| [`Vector2i`](class_vector2i.md) | [`operator -`](class_Vector2i.md#operator_dif_Vector2i) ( right: [`Vector2i`](class_vector2i.md) )  |
| [`Vector2i`](class_vector2i.md) | [`operator /`](class_Vector2i.md#operator_div_Vector2i) ( right: [`Vector2i`](class_vector2i.md) )  |
| [`Vector2`](class_vector2.md)   | [`operator /`](class_Vector2i.md#operator_div_float) ( right: [`float`](class_float.md) )           |
| [`Vector2i`](class_vector2i.md) | [`operator /`](class_Vector2i.md#operator_div_int) ( right: [`int`](class_int.md) )                 |
| [`bool`](class_bool.md)         | [`operator <`](class_Vector2i.md#operator_lt_Vector2i) ( right: [`Vector2i`](class_vector2i.md) )   |
| [`bool`](class_bool.md)         | [`operator <=`](class_Vector2i.md#operator_lte_Vector2i) ( right: [`Vector2i`](class_vector2i.md) ) |
| [`bool`](class_bool.md)         | [`operator ==`](class_Vector2i.md#operator_eq_Vector2i) ( right: [`Vector2i`](class_vector2i.md) )  |
| [`bool`](class_bool.md)         | [`operator >`](class_Vector2i.md#operator_gt_Vector2i) ( right: [`Vector2i`](class_vector2i.md) )   |
| [`bool`](class_bool.md)         | [`operator >=`](class_Vector2i.md#operator_gte_Vector2i) ( right: [`Vector2i`](class_vector2i.md) ) |
| [`int`](class_int.md)           | [`operator []`](class_Vector2i.md#operator_idx_int) ( index: [`int`](class_int.md) )                |
| [`Vector2i`](class_vector2i.md) | [`operator unary+`](class_Vector2i.md#operator_unplus) ( )                                          |
| [`Vector2i`](class_vector2i.md) | [`operator unary-`](class_Vector2i.md#operator_unminus) ( )                                         |

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_vector2i_constant_axis_x"></div>

**AXIS_X** = ``0`` <div id="class_vector2i_constant_axis_x"></div>

Enumerated value for the X axis. Returned by [`max_axis_index`](#class_vector2i_method_max_axis_index) and [`min_axis_index`](#class_vector2i_method_min_axis_index).

<div id="_class_vector2i_constant_axis_y"></div>

**AXIS_Y** = ``1`` <div id="class_vector2i_constant_axis_y"></div>

Enumerated value for the Y axis. Returned by [`max_axis_index`](#class_vector2i_method_max_axis_index) and [`min_axis_index`](#class_vector2i_method_min_axis_index).

<div id="_class_vector2i_constant_zero"></div>

**ZERO** = ``Vector2i(0, 0)`` <div id="class_vector2i_constant_zero"></div>

Zero vector, a vector with all components set to `0`.

<div id="_class_vector2i_constant_one"></div>

**ONE** = ``Vector2i(1, 1)`` <div id="class_vector2i_constant_one"></div>

One vector, a vector with all components set to `1`.

<div id="_class_vector2i_constant_min"></div>

**MIN** = ``Vector2i(-2147483648, -2147483648)`` <div id="class_vector2i_constant_min"></div>

Min vector, a vector with all components equal to `INT32_MIN`. Can be used as a negative integer equivalent of [`Vector2.INF`](#class_vector2_constant_inf).

<div id="_class_vector2i_constant_max"></div>

**MAX** = ``Vector2i(2147483647, 2147483647)`` <div id="class_vector2i_constant_max"></div>

Max vector, a vector with all components equal to `INT32_MAX`. Can be used as an integer equivalent of [`Vector2.INF`](#class_vector2_constant_inf).

<div id="_class_vector2i_constant_left"></div>

**LEFT** = ``Vector2i(-1, 0)`` <div id="class_vector2i_constant_left"></div>

Left unit vector. Represents the direction of left.

<div id="_class_vector2i_constant_right"></div>

**RIGHT** = ``Vector2i(1, 0)`` <div id="class_vector2i_constant_right"></div>

Right unit vector. Represents the direction of right.

<div id="_class_vector2i_constant_up"></div>

**UP** = ``Vector2i(0, -1)`` <div id="class_vector2i_constant_up"></div>

Up unit vector. Y is down in 2D, so this vector points -Y.

<div id="_class_vector2i_constant_down"></div>

**DOWN** = ``Vector2i(0, 1)`` <div id="class_vector2i_constant_down"></div>

Down unit vector. Y is down in 2D, so this vector points +Y.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_vector2i_property_x"></div>

[`int`](class_int.md) **x** = ``0`` <div id="class_vector2i_property_x"></div>

The vector's X component. Also accessible by using the index position `[0]`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_property_y"></div>

[`int`](class_int.md) **y** = ``0`` <div id="class_vector2i_property_y"></div>

The vector's Y component. Also accessible by using the index position `[1]`.

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_vector2i_constructor_vector2i"></div>

[`Vector2i`](class_vector2i.md) **Vector2i** ( )<div id="class_vector2i_constructor_vector2i"></div>

Constructs a default-initialized **Vector2i** with all components set to `0`.

<!-- rst-class:: classref-item-separator -->

---

[`Vector2i`](class_vector2i.md) **Vector2i** ( from: [`Vector2i`](class_vector2i.md) )

Constructs a **Vector2i** as a copy of the given **Vector2i**.

<!-- rst-class:: classref-item-separator -->

---

[`Vector2i`](class_vector2i.md) **Vector2i** ( from: [`Vector2`](class_vector2.md) )

Constructs a new **Vector2i** from the given [`Vector2`](class_vector2.md) by truncating components' fractional parts (rounding towards zero). For a different behavior consider passing the result of [`Vector2.ceil`](#class_vector2_method_ceil), [`Vector2.floor`](#class_vector2_method_floor) or [`Vector2.round`](#class_vector2_method_round) to this constructor instead.

<!-- rst-class:: classref-item-separator -->

---

[`Vector2i`](class_vector2i.md) **Vector2i** ( x: [`int`](class_int.md), y: [`int`](class_int.md) )

Constructs a new **Vector2i** from the given `x` and `y`.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_vector2i_method_abs"></div>

[`Vector2i`](class_vector2i.md) **abs** ( ) const[^const]<div id="class_vector2i_method_abs"></div>

Returns a new vector with all components in absolute values (i.e. positive).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_method_aspect"></div>

[`float`](class_float.md) **aspect** ( ) const[^const]<div id="class_vector2i_method_aspect"></div>

Returns the aspect ratio of this vector, the ratio of [`x`](#class_vector2i_property_x) to [`y`](#class_vector2i_property_y).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_method_clamp"></div>

[`Vector2i`](class_vector2i.md) **clamp** ( min: [`Vector2i`](class_vector2i.md), max: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_vector2i_method_clamp"></div>

Returns a new vector with all components clamped between the components of `min` and `max`, by running [`@GlobalScope.clamp`](#class_@globalscope_method_clamp) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_method_clampi"></div>

[`Vector2i`](class_vector2i.md) **clampi** ( min: [`int`](class_int.md), max: [`int`](class_int.md) ) const[^const]<div id="class_vector2i_method_clampi"></div>

Returns a new vector with all components clamped between `min` and `max`, by running [`@GlobalScope.clamp`](#class_@globalscope_method_clamp) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_method_distance_squared_to"></div>

[`int`](class_int.md) **distance_squared_to** ( to: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_vector2i_method_distance_squared_to"></div>

Returns the squared distance between this vector and `to`.

This method runs faster than [`distance_to`](#class_vector2i_method_distance_to), so prefer it if you need to compare vectors or need the squared distance for some formula.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_method_distance_to"></div>

[`float`](class_float.md) **distance_to** ( to: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_vector2i_method_distance_to"></div>

Returns the distance between this vector and `to`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_method_length"></div>

[`float`](class_float.md) **length** ( ) const[^const]<div id="class_vector2i_method_length"></div>

Returns the length (magnitude) of this vector.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_method_length_squared"></div>

[`int`](class_int.md) **length_squared** ( ) const[^const]<div id="class_vector2i_method_length_squared"></div>

Returns the squared length (squared magnitude) of this vector.

This method runs faster than [`length`](#class_vector2i_method_length), so prefer it if you need to compare vectors or need the squared distance for some formula.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_method_max"></div>

[`Vector2i`](class_vector2i.md) **max** ( with: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_vector2i_method_max"></div>

Returns the component-wise maximum of this and `with`, equivalent to `Vector2i(maxi(x, with.x), maxi(y, with.y))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_method_max_axis_index"></div>

[`int`](class_int.md) **max_axis_index** ( ) const[^const]<div id="class_vector2i_method_max_axis_index"></div>

Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns [`AXIS_X`](#class_vector2i_constant_axis_x).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_method_maxi"></div>

[`Vector2i`](class_vector2i.md) **maxi** ( with: [`int`](class_int.md) ) const[^const]<div id="class_vector2i_method_maxi"></div>

Returns the component-wise maximum of this and `with`, equivalent to `Vector2i(maxi(x, with), maxi(y, with))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_method_min"></div>

[`Vector2i`](class_vector2i.md) **min** ( with: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_vector2i_method_min"></div>

Returns the component-wise minimum of this and `with`, equivalent to `Vector2i(mini(x, with.x), mini(y, with.y))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_method_min_axis_index"></div>

[`int`](class_int.md) **min_axis_index** ( ) const[^const]<div id="class_vector2i_method_min_axis_index"></div>

Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns [`AXIS_Y`](#class_vector2i_constant_axis_y).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_method_mini"></div>

[`Vector2i`](class_vector2i.md) **mini** ( with: [`int`](class_int.md) ) const[^const]<div id="class_vector2i_method_mini"></div>

Returns the component-wise minimum of this and `with`, equivalent to `Vector2i(mini(x, with), mini(y, with))`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_method_sign"></div>

[`Vector2i`](class_vector2i.md) **sign** ( ) const[^const]<div id="class_vector2i_method_sign"></div>

Returns a new vector with each component set to `1` if it's positive, `-1` if it's negative, and `0` if it's zero. The result is identical to calling [`@GlobalScope.sign`](#class_@globalscope_method_sign) on each component.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_method_snapped"></div>

[`Vector2i`](class_vector2i.md) **snapped** ( step: [`Vector2i`](class_vector2i.md) ) const[^const]<div id="class_vector2i_method_snapped"></div>

Returns a new vector with each component snapped to the closest multiple of the corresponding component in `step`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_method_snappedi"></div>

[`Vector2i`](class_vector2i.md) **snappedi** ( step: [`int`](class_int.md) ) const[^const]<div id="class_vector2i_method_snappedi"></div>

Returns a new vector with each component snapped to the closest multiple of `step`.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_vector2i_operator_neq_vector2i"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`Vector2i`](class_vector2i.md) ) <div id="class_vector2i_operator_neq_vector2i"></div>

Returns `true` if the vectors are not equal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_mod_vector2i"></div>

[`Vector2i`](class_vector2i.md) **operator %** ( right: [`Vector2i`](class_vector2i.md) ) <div id="class_vector2i_operator_mod_vector2i"></div>

Gets the remainder of each component of the **Vector2i** with the components of the given **Vector2i**. This operation uses truncated division, which is often not desired as it does not work well with negative numbers. Consider using [`@GlobalScope.posmod`](#class_@globalscope_method_posmod) instead if you want to handle negative numbers.

```

    print(Vector2i(10, -20) % Vector2i(7, 8)) # Prints "(3, -4)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_mod_int"></div>

[`Vector2i`](class_vector2i.md) **operator %** ( right: [`int`](class_int.md) ) <div id="class_vector2i_operator_mod_int"></div>

Gets the remainder of each component of the **Vector2i** with the given [`int`](class_int.md). This operation uses truncated division, which is often not desired as it does not work well with negative numbers. Consider using [`@GlobalScope.posmod`](#class_@globalscope_method_posmod) instead if you want to handle negative numbers.

```

    print(Vector2i(10, -20) % 7) # Prints "(3, -6)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_mul_vector2i"></div>

[`Vector2i`](class_vector2i.md) **operator *** ( right: [`Vector2i`](class_vector2i.md) ) <div id="class_vector2i_operator_mul_vector2i"></div>

Multiplies each component of the **Vector2i** by the components of the given **Vector2i**.

```

    print(Vector2i(10, 20) * Vector2i(3, 4)) # Prints "(30, 80)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_mul_float"></div>

[`Vector2`](class_vector2.md) **operator *** ( right: [`float`](class_float.md) ) <div id="class_vector2i_operator_mul_float"></div>

Multiplies each component of the **Vector2i** by the given [`float`](class_float.md). Returns a [`Vector2`](class_vector2.md).

```

    print(Vector2i(10, 15) * 0.9) # Prints "(9, 13.5)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_mul_int"></div>

[`Vector2i`](class_vector2i.md) **operator *** ( right: [`int`](class_int.md) ) <div id="class_vector2i_operator_mul_int"></div>

Multiplies each component of the **Vector2i** by the given [`int`](class_int.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_sum_vector2i"></div>

[`Vector2i`](class_vector2i.md) **operator +** ( right: [`Vector2i`](class_vector2i.md) ) <div id="class_vector2i_operator_sum_vector2i"></div>

Adds each component of the **Vector2i** by the components of the given **Vector2i**.

```

    print(Vector2i(10, 20) + Vector2i(3, 4)) # Prints "(13, 24)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_dif_vector2i"></div>

[`Vector2i`](class_vector2i.md) **operator -** ( right: [`Vector2i`](class_vector2i.md) ) <div id="class_vector2i_operator_dif_vector2i"></div>

Subtracts each component of the **Vector2i** by the components of the given **Vector2i**.

```

    print(Vector2i(10, 20) - Vector2i(3, 4)) # Prints "(7, 16)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_div_vector2i"></div>

[`Vector2i`](class_vector2i.md) **operator /** ( right: [`Vector2i`](class_vector2i.md) ) <div id="class_vector2i_operator_div_vector2i"></div>

Divides each component of the **Vector2i** by the components of the given **Vector2i**.

```

    print(Vector2i(10, 20) / Vector2i(2, 5)) # Prints "(5, 4)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_div_float"></div>

[`Vector2`](class_vector2.md) **operator /** ( right: [`float`](class_float.md) ) <div id="class_vector2i_operator_div_float"></div>

Divides each component of the **Vector2i** by the given [`float`](class_float.md). Returns a [`Vector2`](class_vector2.md).

```

    print(Vector2i(10, 20) / 2.9) # Prints "(5, 10)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_div_int"></div>

[`Vector2i`](class_vector2i.md) **operator /** ( right: [`int`](class_int.md) ) <div id="class_vector2i_operator_div_int"></div>

Divides each component of the **Vector2i** by the given [`int`](class_int.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_lt_vector2i"></div>

[`bool`](class_bool.md) **operator <** ( right: [`Vector2i`](class_vector2i.md) ) <div id="class_vector2i_operator_lt_vector2i"></div>

Compares two **Vector2i** vectors by first checking if the X value of the left vector is less than the X value of the `right` vector. If the X values are exactly equal, then it repeats this check with the Y values of the two vectors. This operator is useful for sorting vectors.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_lte_vector2i"></div>

[`bool`](class_bool.md) **operator <=** ( right: [`Vector2i`](class_vector2i.md) ) <div id="class_vector2i_operator_lte_vector2i"></div>

Compares two **Vector2i** vectors by first checking if the X value of the left vector is less than or equal to the X value of the `right` vector. If the X values are exactly equal, then it repeats this check with the Y values of the two vectors. This operator is useful for sorting vectors.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_eq_vector2i"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`Vector2i`](class_vector2i.md) ) <div id="class_vector2i_operator_eq_vector2i"></div>

Returns `true` if the vectors are equal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_gt_vector2i"></div>

[`bool`](class_bool.md) **operator >** ( right: [`Vector2i`](class_vector2i.md) ) <div id="class_vector2i_operator_gt_vector2i"></div>

Compares two **Vector2i** vectors by first checking if the X value of the left vector is greater than the X value of the `right` vector. If the X values are exactly equal, then it repeats this check with the Y values of the two vectors. This operator is useful for sorting vectors.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_gte_vector2i"></div>

[`bool`](class_bool.md) **operator >=** ( right: [`Vector2i`](class_vector2i.md) ) <div id="class_vector2i_operator_gte_vector2i"></div>

Compares two **Vector2i** vectors by first checking if the X value of the left vector is greater than or equal to the X value of the `right` vector. If the X values are exactly equal, then it repeats this check with the Y values of the two vectors. This operator is useful for sorting vectors.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_idx_int"></div>

[`int`](class_int.md) **operator []** ( index: [`int`](class_int.md) ) <div id="class_vector2i_operator_idx_int"></div>

Access vector components using their `index`. `v[0]` is equivalent to `v.x`, and `v[1]` is equivalent to `v.y`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_unplus"></div>

[`Vector2i`](class_vector2i.md) **operator unary+** ( ) <div id="class_vector2i_operator_unplus"></div>

Returns the same value as if the `+` was not there. Unary `+` does nothing, but sometimes it can make your code more readable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_vector2i_operator_unminus"></div>

[`Vector2i`](class_vector2i.md) **operator unary-** ( ) <div id="class_vector2i_operator_unminus"></div>

Returns the negative value of the **Vector2i**. This is the same as writing `Vector2i(-v.x, -v.y)`. This operation flips the direction of the vector while keeping the same magnitude.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
