<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/int.xml。 -->

<div id="_class_int"></div>

# int

A built-in type for integers.

## 描述

Signed 64-bit integer type. This means that it can take values from `-2^63` to `2^63 - 1`, i.e. from `-9223372036854775808` to `9223372036854775807`. When it exceeds these bounds, it will wrap around.

 **int** s can be automatically converted to [`float`](class_float.md) s when necessary, for example when passing them as arguments in functions. The [`float`](class_float.md) will be as close to the original integer as possible.

Likewise, [`float`](class_float.md) s can be automatically converted into **int** s. This will truncate the [`float`](class_float.md), discarding anything after the floating-point.

 **Note:** In a boolean context, an **int** will evaluate to `false` if it equals `0`, and to `true` otherwise.



```gdscript

    var x: int = 1 # x is 1
    x = 4.2 # x is 4, because 4.2 gets truncated
    var max_int = 9223372036854775807 # Biggest value an int can store
    max_int += 1 # max_int is -9223372036854775808, because it wrapped around
```

```csharp

    int x = 1; // x is 1
    x = (int)4.2; // x is 4, because 4.2 gets truncated
    // We use long below, because GDScript's int is 64-bit while C#'s int is 32-bit.
    long maxLong = 9223372036854775807; // Biggest value a long can store
    maxLong++; // maxLong is now -9223372036854775808, because it wrapped around.
    
    // Alternatively with C#'s 32-bit int type, which has a smaller maximum value.
    int maxInt = 2147483647; // Biggest value an int can store
    maxInt++; // maxInt is now -2147483648, because it wrapped around
```



You can use the `0b` literal for binary representation, the `0x` literal for hexadecimal representation, and the `_` symbol to separate long numbers and improve readability.



```gdscript

    var x = 0b1001 # x is 9
    var y = 0xF5 # y is 245
    var z = 10_000_000 # z is 10000000
```

```csharp

    int x = 0b1001; // x is 9
    int y = 0xF5; // y is 245
    int z = 10_000_000; // z is 10000000
```











## 构造函数

|||
|:-:|:--|
| [`int`](class_int.md) | [`int`](class_int.md#class_int_constructor_int) ( )                                   |
| [`int`](class_int.md) | [`int`](class_int.md#class_int_constructor_int) ( from: [`int`](class_int.md) )       |
| [`int`](class_int.md) | [`int`](class_int.md#class_int_constructor_int) ( from: [`String`](class_string.md) ) |
| [`int`](class_int.md) | [`int`](class_int.md#class_int_constructor_int) ( from: [`bool`](class_bool.md) )     |
| [`int`](class_int.md) | [`int`](class_int.md#class_int_constructor_int) ( from: [`float`](class_float.md) )   |

## 运算符

|||
|:-:|:--|
| [`bool`](class_bool.md)             | [`operator !=`](class_int.md#operator_neq_float) ( right: [`float`](class_float.md) )               |
| [`bool`](class_bool.md)             | [`operator !=`](class_int.md#operator_neq_int) ( right: [`int`](class_int.md) )                     |
| [`int`](class_int.md)               | [`operator %`](class_int.md#operator_mod_int) ( right: [`int`](class_int.md) )                      |
| [`int`](class_int.md)               | [`operator &`](class_int.md#operator_bwand_int) ( right: [`int`](class_int.md) )                    |
| [`Color`](class_color.md)           | [`operator *`](class_int.md#operator_mul_Color) ( right: [`Color`](class_color.md) )                |
| [`Quaternion`](class_quaternion.md) | [`operator *`](class_int.md#operator_mul_Quaternion) ( right: [`Quaternion`](class_quaternion.md) ) |
| [`Vector2`](class_vector2.md)       | [`operator *`](class_int.md#operator_mul_Vector2) ( right: [`Vector2`](class_vector2.md) )          |
| [`Vector2i`](class_vector2i.md)     | [`operator *`](class_int.md#operator_mul_Vector2i) ( right: [`Vector2i`](class_vector2i.md) )       |
| [`Vector3`](class_vector3.md)       | [`operator *`](class_int.md#operator_mul_Vector3) ( right: [`Vector3`](class_vector3.md) )          |
| [`Vector3i`](class_vector3i.md)     | [`operator *`](class_int.md#operator_mul_Vector3i) ( right: [`Vector3i`](class_vector3i.md) )       |
| [`Vector4`](class_vector4.md)       | [`operator *`](class_int.md#operator_mul_Vector4) ( right: [`Vector4`](class_vector4.md) )          |
| [`Vector4i`](class_vector4i.md)     | [`operator *`](class_int.md#operator_mul_Vector4i) ( right: [`Vector4i`](class_vector4i.md) )       |
| [`float`](class_float.md)           | [`operator *`](class_int.md#operator_mul_float) ( right: [`float`](class_float.md) )                |
| [`int`](class_int.md)               | [`operator *`](class_int.md#operator_mul_int) ( right: [`int`](class_int.md) )                      |
| [`float`](class_float.md)           | [`operator **`](class_int.md#operator_pow_float) ( right: [`float`](class_float.md) )               |
| [`int`](class_int.md)               | [`operator **`](class_int.md#operator_pow_int) ( right: [`int`](class_int.md) )                     |
| [`float`](class_float.md)           | [`operator +`](class_int.md#operator_sum_float) ( right: [`float`](class_float.md) )                |
| [`int`](class_int.md)               | [`operator +`](class_int.md#operator_sum_int) ( right: [`int`](class_int.md) )                      |
| [`float`](class_float.md)           | [`operator -`](class_int.md#operator_dif_float) ( right: [`float`](class_float.md) )                |
| [`int`](class_int.md)               | [`operator -`](class_int.md#operator_dif_int) ( right: [`int`](class_int.md) )                      |
| [`float`](class_float.md)           | [`operator /`](class_int.md#operator_div_float) ( right: [`float`](class_float.md) )                |
| [`int`](class_int.md)               | [`operator /`](class_int.md#operator_div_int) ( right: [`int`](class_int.md) )                      |
| [`bool`](class_bool.md)             | [`operator <`](class_int.md#operator_lt_float) ( right: [`float`](class_float.md) )                 |
| [`bool`](class_bool.md)             | [`operator <`](class_int.md#operator_lt_int) ( right: [`int`](class_int.md) )                       |
| [`int`](class_int.md)               | [`operator <<`](class_int.md#operator_bwsl_int) ( right: [`int`](class_int.md) )                    |
| [`bool`](class_bool.md)             | [`operator <=`](class_int.md#operator_lte_float) ( right: [`float`](class_float.md) )               |
| [`bool`](class_bool.md)             | [`operator <=`](class_int.md#operator_lte_int) ( right: [`int`](class_int.md) )                     |
| [`bool`](class_bool.md)             | [`operator ==`](class_int.md#operator_eq_float) ( right: [`float`](class_float.md) )                |
| [`bool`](class_bool.md)             | [`operator ==`](class_int.md#operator_eq_int) ( right: [`int`](class_int.md) )                      |
| [`bool`](class_bool.md)             | [`operator >`](class_int.md#operator_gt_float) ( right: [`float`](class_float.md) )                 |
| [`bool`](class_bool.md)             | [`operator >`](class_int.md#operator_gt_int) ( right: [`int`](class_int.md) )                       |
| [`bool`](class_bool.md)             | [`operator >=`](class_int.md#operator_gte_float) ( right: [`float`](class_float.md) )               |
| [`bool`](class_bool.md)             | [`operator >=`](class_int.md#operator_gte_int) ( right: [`int`](class_int.md) )                     |
| [`int`](class_int.md)               | [`operator >>`](class_int.md#operator_bwsr_int) ( right: [`int`](class_int.md) )                    |
| [`int`](class_int.md)               | [`operator ^`](class_int.md#operator_bwxor_int) ( right: [`int`](class_int.md) )                    |
| [`int`](class_int.md)               | [`operator unary+`](class_int.md#operator_unplus) ( )                                               |
| [`int`](class_int.md)               | [`operator unary-`](class_int.md#operator_unminus) ( )                                              |
| [`int`](class_int.md)               | [`operator |`](class_int.md#operator_bwor_int) ( right: [`int`](class_int.md) )                     |
| [`int`](class_int.md)               | [`operator ~`](class_int.md#operator_bwnot) ( )                                                     |

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_int_constructor_int"></div>

[`int`](class_int.md) **int** ( )<div id="class_int_constructor_int"></div>

Constructs an **int** set to `0`.

<!-- rst-class:: classref-item-separator -->

---

[`int`](class_int.md) **int** ( from: [`int`](class_int.md) )

Constructs an **int** as a copy of the given **int**.

<!-- rst-class:: classref-item-separator -->

---

[`int`](class_int.md) **int** ( from: [`String`](class_string.md) )

Constructs a new **int** from a [`String`](class_string.md), following the same rules as [`String.to_int`](class_string.md#class_string_method_to_int).

<!-- rst-class:: classref-item-separator -->

---

[`int`](class_int.md) **int** ( from: [`bool`](class_bool.md) )

Constructs a new **int** from a [`bool`](class_bool.md). `true` is converted to `1` and `false` is converted to `0`.

<!-- rst-class:: classref-item-separator -->

---

[`int`](class_int.md) **int** ( from: [`float`](class_float.md) )

Constructs a new **int** from a [`float`](class_float.md). This will truncate the [`float`](class_float.md), discarding anything after the floating point.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_int_operator_neq_float"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`float`](class_float.md) ) <div id="class_int_operator_neq_float"></div>

Returns `true` if the **int** is not equivalent to the [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_neq_int"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`int`](class_int.md) ) <div id="class_int_operator_neq_int"></div>

Returns `true` if the **int** s are not equal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_mod_int"></div>

[`int`](class_int.md) **operator %** ( right: [`int`](class_int.md) ) <div id="class_int_operator_mod_int"></div>

Returns the remainder after dividing two **int** s. Uses truncated division, which returns a negative number if the dividend is negative. If this is not desired, consider using [`@GlobalScope.posmod`](class_@globalscope.md#class_@globalscope_method_posmod).

```

    print(6 % 2) # Prints 0
    print(11 % 4) # Prints 3
    print(-5 % 3) # Prints -2
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_bwand_int"></div>

[`int`](class_int.md) **operator &** ( right: [`int`](class_int.md) ) <div id="class_int_operator_bwand_int"></div>

Performs the bitwise `AND` operation.

```

    print(0b1100 & 0b1010) # Prints 8 (binary 1000)
```

This is useful for retrieving binary flags from a variable.

```

    var flags = 0b101
    # Check if the first or second bit are enabled.
    if flags & 0b011:
        do_stuff() # This line will run.
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_mul_color"></div>

[`Color`](class_color.md) **operator *** ( right: [`Color`](class_color.md) ) <div id="class_int_operator_mul_color"></div>

Multiplies each component of the [`Color`](class_color.md) by the **int**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_mul_quaternion"></div>

[`Quaternion`](class_quaternion.md) **operator *** ( right: [`Quaternion`](class_quaternion.md) ) <div id="class_int_operator_mul_quaternion"></div>

Multiplies each component of the [`Quaternion`](class_quaternion.md) by the **int**. This operation is not meaningful on its own, but it can be used as a part of a larger expression.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_mul_vector2"></div>

[`Vector2`](class_vector2.md) **operator *** ( right: [`Vector2`](class_vector2.md) ) <div id="class_int_operator_mul_vector2"></div>

Multiplies each component of the [`Vector2`](class_vector2.md) by the **int**.

```

    print(2 * Vector2(1, 4)) # Prints (2, 8)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_mul_vector2i"></div>

[`Vector2i`](class_vector2i.md) **operator *** ( right: [`Vector2i`](class_vector2i.md) ) <div id="class_int_operator_mul_vector2i"></div>

Multiplies each component of the [`Vector2i`](class_vector2i.md) by the **int**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_mul_vector3"></div>

[`Vector3`](class_vector3.md) **operator *** ( right: [`Vector3`](class_vector3.md) ) <div id="class_int_operator_mul_vector3"></div>

Multiplies each component of the [`Vector3`](class_vector3.md) by the **int**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_mul_vector3i"></div>

[`Vector3i`](class_vector3i.md) **operator *** ( right: [`Vector3i`](class_vector3i.md) ) <div id="class_int_operator_mul_vector3i"></div>

Multiplies each component of the [`Vector3i`](class_vector3i.md) by the **int**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_mul_vector4"></div>

[`Vector4`](class_vector4.md) **operator *** ( right: [`Vector4`](class_vector4.md) ) <div id="class_int_operator_mul_vector4"></div>

Multiplies each component of the [`Vector4`](class_vector4.md) by the **int**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_mul_vector4i"></div>

[`Vector4i`](class_vector4i.md) **operator *** ( right: [`Vector4i`](class_vector4i.md) ) <div id="class_int_operator_mul_vector4i"></div>

Multiplies each component of the [`Vector4i`](class_vector4i.md) by the **int**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_mul_float"></div>

[`float`](class_float.md) **operator *** ( right: [`float`](class_float.md) ) <div id="class_int_operator_mul_float"></div>

Multiplies the [`float`](class_float.md) by the **int**. The result is a [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_mul_int"></div>

[`int`](class_int.md) **operator *** ( right: [`int`](class_int.md) ) <div id="class_int_operator_mul_int"></div>

Multiplies the two **int** s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_pow_float"></div>

[`float`](class_float.md) **operator **** ( right: [`float`](class_float.md) ) <div id="class_int_operator_pow_float"></div>

Raises an **int** to a power of a [`float`](class_float.md). The result is a [`float`](class_float.md).

```

    print(2 ** 0.5) # Prints 1.4142135623731
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_pow_int"></div>

[`int`](class_int.md) **operator **** ( right: [`int`](class_int.md) ) <div id="class_int_operator_pow_int"></div>

Raises the left **int** to a power of the right **int**.

```

    print(3 ** 4) # Prints 81
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_sum_float"></div>

[`float`](class_float.md) **operator +** ( right: [`float`](class_float.md) ) <div id="class_int_operator_sum_float"></div>

Adds the **int** and the [`float`](class_float.md). The result is a [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_sum_int"></div>

[`int`](class_int.md) **operator +** ( right: [`int`](class_int.md) ) <div id="class_int_operator_sum_int"></div>

Adds the two **int** s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_dif_float"></div>

[`float`](class_float.md) **operator -** ( right: [`float`](class_float.md) ) <div id="class_int_operator_dif_float"></div>

Subtracts the [`float`](class_float.md) from the **int**. The result is a [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_dif_int"></div>

[`int`](class_int.md) **operator -** ( right: [`int`](class_int.md) ) <div id="class_int_operator_dif_int"></div>

Subtracts the two **int** s.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_div_float"></div>

[`float`](class_float.md) **operator /** ( right: [`float`](class_float.md) ) <div id="class_int_operator_div_float"></div>

Divides the **int** by the [`float`](class_float.md). The result is a [`float`](class_float.md).

```

    print(10 / 3.0) # Prints 3.33333333333333
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_div_int"></div>

[`int`](class_int.md) **operator /** ( right: [`int`](class_int.md) ) <div id="class_int_operator_div_int"></div>

Divides the two **int** s. The result is an **int**. This will truncate the [`float`](class_float.md), discarding anything after the floating point.

```

    print(6 / 2) # Prints 3
    print(5 / 3) # Prints 1
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_lt_float"></div>

[`bool`](class_bool.md) **operator <** ( right: [`float`](class_float.md) ) <div id="class_int_operator_lt_float"></div>

Returns `true` if the **int** is less than the [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_lt_int"></div>

[`bool`](class_bool.md) **operator <** ( right: [`int`](class_int.md) ) <div id="class_int_operator_lt_int"></div>

Returns `true` if the left **int** is less than the right **int**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_bwsl_int"></div>

[`int`](class_int.md) **operator <<** ( right: [`int`](class_int.md) ) <div id="class_int_operator_bwsl_int"></div>

Performs the bitwise shift left operation. Effectively the same as multiplying by a power of 2.

```

    print(0b1010 << 1) # Prints 20 (binary 10100)
    print(0b1010 << 3) # Prints 80 (binary 1010000)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_lte_float"></div>

[`bool`](class_bool.md) **operator <=** ( right: [`float`](class_float.md) ) <div id="class_int_operator_lte_float"></div>

Returns `true` if the **int** is less than or equal to the [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_lte_int"></div>

[`bool`](class_bool.md) **operator <=** ( right: [`int`](class_int.md) ) <div id="class_int_operator_lte_int"></div>

Returns `true` if the left **int** is less than or equal to the right **int**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_eq_float"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`float`](class_float.md) ) <div id="class_int_operator_eq_float"></div>

Returns `true` if the **int** is equal to the [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_eq_int"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`int`](class_int.md) ) <div id="class_int_operator_eq_int"></div>

Returns `true` if the two **int** s are equal.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_gt_float"></div>

[`bool`](class_bool.md) **operator >** ( right: [`float`](class_float.md) ) <div id="class_int_operator_gt_float"></div>

Returns `true` if the **int** is greater than the [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_gt_int"></div>

[`bool`](class_bool.md) **operator >** ( right: [`int`](class_int.md) ) <div id="class_int_operator_gt_int"></div>

Returns `true` if the left **int** is greater than the right **int**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_gte_float"></div>

[`bool`](class_bool.md) **operator >=** ( right: [`float`](class_float.md) ) <div id="class_int_operator_gte_float"></div>

Returns `true` if the **int** is greater than or equal to the [`float`](class_float.md).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_gte_int"></div>

[`bool`](class_bool.md) **operator >=** ( right: [`int`](class_int.md) ) <div id="class_int_operator_gte_int"></div>

Returns `true` if the left **int** is greater than or equal to the right **int**.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_bwsr_int"></div>

[`int`](class_int.md) **operator >>** ( right: [`int`](class_int.md) ) <div id="class_int_operator_bwsr_int"></div>

Performs the bitwise shift right operation. Effectively the same as dividing by a power of 2.

```

    print(0b1010 >> 1) # Prints 5 (binary 101)
    print(0b1010 >> 2) # Prints 2 (binary 10)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_bwxor_int"></div>

[`int`](class_int.md) **operator ^** ( right: [`int`](class_int.md) ) <div id="class_int_operator_bwxor_int"></div>

Performs the bitwise `XOR` operation.

```

    print(0b1100 ^ 0b1010) # Prints 6 (binary 110)
```



<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_unplus"></div>

[`int`](class_int.md) **operator unary+** ( ) <div id="class_int_operator_unplus"></div>

Returns the same value as if the `+` was not there. Unary `+` does nothing, but sometimes it can make your code more readable.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_unminus"></div>

[`int`](class_int.md) **operator unary-** ( ) <div id="class_int_operator_unminus"></div>

Returns the negated value of the **int**. If positive, turns the number negative. If negative, turns the number positive. If zero, does nothing.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_bwor_int"></div>

[`int`](class_int.md) **operator |** ( right: [`int`](class_int.md) ) <div id="class_int_operator_bwor_int"></div>

Performs the bitwise `OR` operation.

```

    print(0b1100 | 0b1010) # Prints 14 (binary 1110)
```

This is useful for storing binary flags in a variable.

```

    var flags = 0
    flags |= 0b101 # Turn the first and third bits on.
```





<!-- rst-class:: classref-item-separator -->

---

<div id="_class_int_operator_bwnot"></div>

[`int`](class_int.md) **operator ~** ( ) <div id="class_int_operator_bwnot"></div>

Performs the bitwise `NOT` operation on the **int**. Due to [*2's complement*](https://en.wikipedia.org/wiki/Two%27s_complement), it's effectively equal to `-(int + 1)`.

```

    print(~4) # Prints -5
    print(~(-7)) # Prints 6
```



[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
