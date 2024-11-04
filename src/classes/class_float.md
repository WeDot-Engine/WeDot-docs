<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/float.xml。 -->

<div id="_class_float"></div>

# float

A built-in type for floating-point numbers.

## 描述

The **float** built-in type is a 64-bit double-precision floating-point number, equivalent to `double` in C++. This type has 14 reliable decimal digits of precision. The maximum value of **float** is approximately `1.79769e308`, and the minimum is approximately `-1.79769e308`.

Many methods and properties in the engine use 32-bit single-precision floating-point numbers instead, equivalent to `float` in C++, which have 6 reliable decimal digits of precision. For data structures such as [`Vector2`](class_vector2.md) and [`Vector3`](class_vector3.md), Godot uses 32-bit floating-point numbers by default, but it can be changed to use 64-bit doubles if Godot is compiled with the `precision=double` option.

Math done using the **float** type is not guaranteed to be exact and will often result in small errors. You should usually use the [`@GlobalScope.is_equal_approx`](#class_@globalscope_method_is_equal_approx) and [`@GlobalScope.is_zero_approx`](#class_@globalscope_method_is_zero_approx) methods instead of `==` to compare **float** values for equality.

## 构造函数

| [`float`](class_float.md) | [`float`](#class_float_constructor_float) ( )                                   |
| [`float`](class_float.md) | [`float`](#class_float_constructor_float) ( from: [`float`](class_float.md) )   |
| [`float`](class_float.md) | [`float`](#class_float_constructor_float) ( from: [`String`](class_string.md) ) |
| [`float`](class_float.md) | [`float`](#class_float_constructor_float) ( from: [`bool`](class_bool.md) )     |
| [`float`](class_float.md) | [`float`](#class_float_constructor_float) ( from: [`int`](class_int.md) )       |

## 运算符

| [`bool`](class_bool.md)             | [`operator !=`](class_float.md#operator_neq_float) ( right: [`float`](class_float.md) )               |
| [`bool`](class_bool.md)             | [`operator !=`](class_float.md#operator_neq_int) ( right: [`int`](class_int.md) )                     |
| [`Color`](class_color.md)           | [`operator *`](class_float.md#operator_mul_Color) ( right: [`Color`](class_color.md) )                |
| [`Quaternion`](class_quaternion.md) | [`operator *`](class_float.md#operator_mul_Quaternion) ( right: [`Quaternion`](class_quaternion.md) ) |
| [`Vector2`](class_vector2.md)       | [`operator *`](class_float.md#operator_mul_Vector2) ( right: [`Vector2`](class_vector2.md) )          |
| [`Vector2`](class_vector2.md)       | [`operator *`](class_float.md#operator_mul_Vector2i) ( right: [`Vector2i`](class_vector2i.md) )       |
| [`Vector3`](class_vector3.md)       | [`operator *`](class_float.md#operator_mul_Vector3) ( right: [`Vector3`](class_vector3.md) )          |
| [`Vector3`](class_vector3.md)       | [`operator *`](class_float.md#operator_mul_Vector3i) ( right: [`Vector3i`](class_vector3i.md) )       |
| [`Vector4`](class_vector4.md)       | [`operator *`](class_float.md#operator_mul_Vector4) ( right: [`Vector4`](class_vector4.md) )          |
| [`Vector4`](class_vector4.md)       | [`operator *`](class_float.md#operator_mul_Vector4i) ( right: [`Vector4i`](class_vector4i.md) )       |
| [`float`](class_float.md)           | [`operator *`](class_float.md#operator_mul_float) ( right: [`float`](class_float.md) )                |
| [`float`](class_float.md)           | [`operator *`](class_float.md#operator_mul_int) ( right: [`int`](class_int.md) )                      |
| [`float`](class_float.md)           | [`operator **`](class_float.md#operator_pow_float) ( right: [`float`](class_float.md) )               |
| [`float`](class_float.md)           | [`operator **`](class_float.md#operator_pow_int) ( right: [`int`](class_int.md) )                     |
| [`float`](class_float.md)           | [`operator +`](class_float.md#operator_sum_float) ( right: [`float`](class_float.md) )                |
| [`float`](class_float.md)           | [`operator +`](class_float.md#operator_sum_int) ( right: [`int`](class_int.md) )                      |
| [`float`](class_float.md)           | [`operator -`](class_float.md#operator_dif_float) ( right: [`float`](class_float.md) )                |
| [`float`](class_float.md)           | [`operator -`](class_float.md#operator_dif_int) ( right: [`int`](class_int.md) )                      |
| [`float`](class_float.md)           | [`operator /`](class_float.md#operator_div_float) ( right: [`float`](class_float.md) )                |
| [`float`](class_float.md)           | [`operator /`](class_float.md#operator_div_int) ( right: [`int`](class_int.md) )                      |
| [`bool`](class_bool.md)             | [`operator <`](class_float.md#operator_lt_float) ( right: [`float`](class_float.md) )                 |
| [`bool`](class_bool.md)             | [`operator <`](class_float.md#operator_lt_int) ( right: [`int`](class_int.md) )                       |
| [`bool`](class_bool.md)             | [`operator <=`](class_float.md#operator_lte_float) ( right: [`float`](class_float.md) )               |
| [`bool`](class_bool.md)             | [`operator <=`](class_float.md#operator_lte_int) ( right: [`int`](class_int.md) )                     |
| [`bool`](class_bool.md)             | [`operator ==`](class_float.md#operator_eq_float) ( right: [`float`](class_float.md) )                |
| [`bool`](class_bool.md)             | [`operator ==`](class_float.md#operator_eq_int) ( right: [`int`](class_int.md) )                      |
| [`bool`](class_bool.md)             | [`operator >`](class_float.md#operator_gt_float) ( right: [`float`](class_float.md) )                 |
| [`bool`](class_bool.md)             | [`operator >`](class_float.md#operator_gt_int) ( right: [`int`](class_int.md) )                       |
| [`bool`](class_bool.md)             | [`operator >=`](class_float.md#operator_gte_float) ( right: [`float`](class_float.md) )               |
| [`bool`](class_bool.md)             | [`operator >=`](class_float.md#operator_gte_int) ( right: [`int`](class_int.md) )                     |
| [`float`](class_float.md)           | [`operator unary+`](class_float.md#operator_unplus) ( )                                               |
| [`float`](class_float.md)           | [`operator unary-`](class_float.md#operator_unminus) ( )                                              |

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_float_constructor_float"></div>

[`float`](class_float.md) **float** ( )<div id="class_float_constructor_float"></div>

Constructs a default-initialized **float** set to `0.0`.

<!-- rst-class:: classref-item-separator -->

---

[`float`](class_float.md) **float** ( from: [`float`](class_float.md) )

Constructs a **float** as a copy of the given **float**.

<!-- rst-class:: classref-item-separator -->

---

[`float`](class_float.md) **float** ( from: [`String`](class_string.md) )

Converts a [`String`](class_string.md) to a **float**, following the same rules as [`String.to_float`](#class_string_method_to_float).

<!-- rst-class:: classref-item-separator -->

---

[`float`](class_float.md) **float** ( from: [`bool`](class_bool.md) )

Cast a [`bool`](class_bool.md) value to a floating-point value, `float(true)` will be equal to 1.0 and `float(false)` will be equal to 0.0.

<!-- rst-class:: classref-item-separator -->

---

[`float`](class_float.md) **float** ( from: [`int`](class_int.md) )

Cast an [`int`](class_int.md) value to a floating-point value, `float(1)` will be equal to `1.0`.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_float_operator_neq_float"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`float`](class_float.md) ) <div id="class_float_operator_neq_float"></div>

Returns `true` if two floats are different from each other.

 **Note:** [`@GDScript.NAN`](#class_@gdscript_constant_nan) doesn't behave the same as other numbers. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_neq_int"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`int`](class_int.md) ) <div id="class_float_operator_neq_int"></div>

Returns `true` if the integer has different value than the float.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_mul_color"></div>

[`Color`](class_color.md) **operator *** ( right: [`Color`](class_color.md) ) <div id="class_float_operator_mul_color"></div>

Multiplies each component of the [`Color`](class_color.md), including the alpha, by the given **float**.

```

    print(1.5 * Color(0.5, 0.5, 0.5)) # Prints "(0.75, 0.75, 0.75, 1.5)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_mul_quaternion"></div>

[`Quaternion`](class_quaternion.md) **operator *** ( right: [`Quaternion`](class_quaternion.md) ) <div id="class_float_operator_mul_quaternion"></div>

Multiplies each component of the [`Quaternion`](class_quaternion.md) by the given **float**. This operation is not meaningful on its own, but it can be used as a part of a larger expression.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_mul_vector2"></div>

[`Vector2`](class_vector2.md) **operator *** ( right: [`Vector2`](class_vector2.md) ) <div id="class_float_operator_mul_vector2"></div>

Multiplies each component of the [`Vector2`](class_vector2.md) by the given **float**.

```

    print(2.5 * Vector2(1, 3)) # Prints "(2.5, 7.5)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_mul_vector2i"></div>

[`Vector2`](class_vector2.md) **operator *** ( right: [`Vector2i`](class_vector2i.md) ) <div id="class_float_operator_mul_vector2i"></div>

Multiplies each component of the [`Vector2i`](class_vector2i.md) by the given **float**. Returns a [`Vector2`](class_vector2.md).

```

    print(0.9 * Vector2i(10, 15)) # Prints "(9, 13.5)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_mul_vector3"></div>

[`Vector3`](class_vector3.md) **operator *** ( right: [`Vector3`](class_vector3.md) ) <div id="class_float_operator_mul_vector3"></div>

Multiplies each component of the [`Vector3`](class_vector3.md) by the given **float**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_mul_vector3i"></div>

[`Vector3`](class_vector3.md) **operator *** ( right: [`Vector3i`](class_vector3i.md) ) <div id="class_float_operator_mul_vector3i"></div>

Multiplies each component of the [`Vector3i`](class_vector3i.md) by the given **float**. Returns a [`Vector3`](class_vector3.md).

```

    print(0.9 * Vector3i(10, 15, 20)) # Prints "(9, 13.5, 18)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_mul_vector4"></div>

[`Vector4`](class_vector4.md) **operator *** ( right: [`Vector4`](class_vector4.md) ) <div id="class_float_operator_mul_vector4"></div>

Multiplies each component of the [`Vector4`](class_vector4.md) by the given **float**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_mul_vector4i"></div>

[`Vector4`](class_vector4.md) **operator *** ( right: [`Vector4i`](class_vector4i.md) ) <div id="class_float_operator_mul_vector4i"></div>

Multiplies each component of the [`Vector4i`](class_vector4i.md) by the given **float**. Returns a [`Vector4`](class_vector4.md).

```

    print(0.9 * Vector4i(10, 15, 20, -10)) # Prints "(9, 13.5, 18, -9)"
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_mul_float"></div>

[`float`](class_float.md) **operator *** ( right: [`float`](class_float.md) ) <div id="class_float_operator_mul_float"></div>

Multiplies two **float** s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_mul_int"></div>

[`float`](class_float.md) **operator *** ( right: [`int`](class_int.md) ) <div id="class_float_operator_mul_int"></div>

Multiplies a **float** and an [`int`](class_int.md). The result is a **float**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_pow_float"></div>

[`float`](class_float.md) **operator **** ( right: [`float`](class_float.md) ) <div id="class_float_operator_pow_float"></div>

Raises a **float** to a power of a **float**.

```

    print(39.0625**0.25) # 2.5
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_pow_int"></div>

[`float`](class_float.md) **operator **** ( right: [`int`](class_int.md) ) <div id="class_float_operator_pow_int"></div>

Raises a **float** to a power of an [`int`](class_int.md). The result is a **float**.

```

    print(0.9**3) # 0.729
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_sum_float"></div>

[`float`](class_float.md) **operator +** ( right: [`float`](class_float.md) ) <div id="class_float_operator_sum_float"></div>

Adds two floats.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_sum_int"></div>

[`float`](class_float.md) **operator +** ( right: [`int`](class_int.md) ) <div id="class_float_operator_sum_int"></div>

Adds a **float** and an [`int`](class_int.md). The result is a **float**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_dif_float"></div>

[`float`](class_float.md) **operator -** ( right: [`float`](class_float.md) ) <div id="class_float_operator_dif_float"></div>

Subtracts a float from a float.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_dif_int"></div>

[`float`](class_float.md) **operator -** ( right: [`int`](class_int.md) ) <div id="class_float_operator_dif_int"></div>

Subtracts an [`int`](class_int.md) from a **float**. The result is a **float**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_div_float"></div>

[`float`](class_float.md) **operator /** ( right: [`float`](class_float.md) ) <div id="class_float_operator_div_float"></div>

Divides two floats.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_div_int"></div>

[`float`](class_float.md) **operator /** ( right: [`int`](class_int.md) ) <div id="class_float_operator_div_int"></div>

Divides a **float** by an [`int`](class_int.md). The result is a **float**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_lt_float"></div>

[`bool`](class_bool.md) **operator <** ( right: [`float`](class_float.md) ) <div id="class_float_operator_lt_float"></div>

Returns `true` if the left float is less than the right one.

 **Note:** [`@GDScript.NAN`](#class_@gdscript_constant_nan) doesn't behave the same as other numbers. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_lt_int"></div>

[`bool`](class_bool.md) **operator <** ( right: [`int`](class_int.md) ) <div id="class_float_operator_lt_int"></div>

Returns `true` if this **float** is less than the given [`int`](class_int.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_lte_float"></div>

[`bool`](class_bool.md) **operator <=** ( right: [`float`](class_float.md) ) <div id="class_float_operator_lte_float"></div>

Returns `true` if the left float is less than or equal to the right one.

 **Note:** [`@GDScript.NAN`](#class_@gdscript_constant_nan) doesn't behave the same as other numbers. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_lte_int"></div>

[`bool`](class_bool.md) **operator <=** ( right: [`int`](class_int.md) ) <div id="class_float_operator_lte_int"></div>

Returns `true` if this **float** is less than or equal to the given [`int`](class_int.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_eq_float"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`float`](class_float.md) ) <div id="class_float_operator_eq_float"></div>

Returns `true` if both floats are exactly equal.

 **Note:** Due to floating-point precision errors, consider using [`@GlobalScope.is_equal_approx`](#class_@globalscope_method_is_equal_approx) or [`@GlobalScope.is_zero_approx`](#class_@globalscope_method_is_zero_approx) instead, which are more reliable.

 **Note:** [`@GDScript.NAN`](#class_@gdscript_constant_nan) doesn't behave the same as other numbers. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_eq_int"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`int`](class_int.md) ) <div id="class_float_operator_eq_int"></div>

Returns `true` if the **float** and the given [`int`](class_int.md) are equal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_gt_float"></div>

[`bool`](class_bool.md) **operator >** ( right: [`float`](class_float.md) ) <div id="class_float_operator_gt_float"></div>

Returns `true` if the left float is greater than the right one.

 **Note:** [`@GDScript.NAN`](#class_@gdscript_constant_nan) doesn't behave the same as other numbers. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_gt_int"></div>

[`bool`](class_bool.md) **operator >** ( right: [`int`](class_int.md) ) <div id="class_float_operator_gt_int"></div>

Returns `true` if this **float** is greater than the given [`int`](class_int.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_gte_float"></div>

[`bool`](class_bool.md) **operator >=** ( right: [`float`](class_float.md) ) <div id="class_float_operator_gte_float"></div>

Returns `true` if the left float is greater than or equal to the right one.

 **Note:** [`@GDScript.NAN`](#class_@gdscript_constant_nan) doesn't behave the same as other numbers. Therefore, the results from this operator may not be accurate if NaNs are included.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_gte_int"></div>

[`bool`](class_bool.md) **operator >=** ( right: [`int`](class_int.md) ) <div id="class_float_operator_gte_int"></div>

Returns `true` if this **float** is greater than or equal to the given [`int`](class_int.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_unplus"></div>

[`float`](class_float.md) **operator unary+** ( ) <div id="class_float_operator_unplus"></div>

Returns the same value as if the `+` was not there. Unary `+` does nothing, but sometimes it can make your code more readable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_float_operator_unminus"></div>

[`float`](class_float.md) **operator unary-** ( ) <div id="class_float_operator_unminus"></div>

Returns the negative value of the **float**. If positive, turns the number negative. If negative, turns the number positive. With floats, the number zero can be either positive or negative.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
