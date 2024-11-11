<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/bool.xml。 -->

<div id="_class_bool"></div>

# bool

A built-in boolean type.

## 描述

The **bool** is a built-in [`Variant`](class_variant.md) type that may only store one of two values: `true` or `false`. You can imagine it as a switch that can be either turned on or off, or as a binary digit that can either be 1 or 0.

Booleans can be directly used in `if`, and other conditional statements:



```gdscript

    var can_shoot = true
    if can_shoot:
        launch_bullet()
```

```csharp

    bool canShoot = true;
    if (canShoot)
    {
        LaunchBullet();
    }
```



All comparison operators return booleans (`==`, `>`, `<=`, etc.). As such, it is not necessary to compare booleans themselves. You do not need to add `== true` or `== false`.

Booleans can be combined with the logical operators `and`, `or`, `not` to create complex conditions:



```gdscript

    if bullets > 0 and not is_reloading():
        launch_bullet()
    
    if bullets == 0 or is_reloading():
        play_clack_sound()
```

```csharp

    if (bullets > 0 && !IsReloading())
    {
        LaunchBullet();
    }
    
    if (bullets == 0 || IsReloading())
    {
        PlayClackSound();
    }
```



 **Note:** In modern programming languages, logical operators are evaluated in order. All remaining conditions are skipped if their result would have no effect on the final value. This concept is known as [*short-circuit evaluation*](https://en.wikipedia.org/wiki/Short-circuit_evaluation) and can be useful to avoid evaluating expensive conditions in some performance-critical cases.

 **Note:** By convention, built-in methods and properties that return booleans are usually defined as yes-no questions, single adjectives, or similar ([`String.is_empty`](class_string.md#class_string_method_is_empty), [`Node.can_process`](class_node.md#class_node_method_can_process), [`Camera2D.enabled`](class_camera2d.md#class_camera2d_property_enabled), etc.).









## 构造函数

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`bool`](class_bool.md#class_bool_constructor_bool) ( )                                 |
| [`bool`](class_bool.md) | [`bool`](class_bool.md#class_bool_constructor_bool) ( from: [`bool`](class_bool.md) )   |
| [`bool`](class_bool.md) | [`bool`](class_bool.md#class_bool_constructor_bool) ( from: [`float`](class_float.md) ) |
| [`bool`](class_bool.md) | [`bool`](class_bool.md#class_bool_constructor_bool) ( from: [`int`](class_int.md) )     |

## 运算符

|||
|:-:|:--|
| [`bool`](class_bool.md) | [`operator !=`](class_bool.md#operator_neq_bool) ( right: [`bool`](class_bool.md) ) |
| [`bool`](class_bool.md) | [`operator <`](class_bool.md#operator_lt_bool) ( right: [`bool`](class_bool.md) )   |
| [`bool`](class_bool.md) | [`operator ==`](class_bool.md#operator_eq_bool) ( right: [`bool`](class_bool.md) )  |
| [`bool`](class_bool.md) | [`operator >`](class_bool.md#operator_gt_bool) ( right: [`bool`](class_bool.md) )   |

<!-- rst-class:: classref-section-separator -->

---

## 构造函数说明

<div id="_class_bool_constructor_bool"></div>

[`bool`](class_bool.md) **bool** ( )<div id="class_bool_constructor_bool"></div>

Constructs a **bool** set to `false`.

<!-- rst-class:: classref-item-separator -->

---

[`bool`](class_bool.md) **bool** ( from: [`bool`](class_bool.md) )

Constructs a **bool** as a copy of the given **bool**.

<!-- rst-class:: classref-item-separator -->

---

[`bool`](class_bool.md) **bool** ( from: [`float`](class_float.md) )

Cast a [`float`](class_float.md) value to a boolean value. Returns `false` if `from` is equal to `0.0` (including `-0.0`), and `true` for all other values (including [`@GDScript.INF`](class_@gdscript.md#class_@gdscript_constant_inf) and [`@GDScript.NAN`](class_@gdscript.md#class_@gdscript_constant_nan)).

<!-- rst-class:: classref-item-separator -->

---

[`bool`](class_bool.md) **bool** ( from: [`int`](class_int.md) )

Cast an [`int`](class_int.md) value to a boolean value. Returns `false` if `from` is equal to `0`, and `true` for all other values.

<!-- rst-class:: classref-section-separator -->

---

## 运算符说明

<div id="_class_bool_operator_neq_bool"></div>

[`bool`](class_bool.md) **operator !=** ( right: [`bool`](class_bool.md) ) <div id="class_bool_operator_neq_bool"></div>

Returns `true` if the two booleans are not equal. That is, one is `true` and the other is `false`. This operation can be seen as a logical XOR.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bool_operator_lt_bool"></div>

[`bool`](class_bool.md) **operator <** ( right: [`bool`](class_bool.md) ) <div id="class_bool_operator_lt_bool"></div>

Returns `true` if the left operand is `false` and the right operand is `true`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bool_operator_eq_bool"></div>

[`bool`](class_bool.md) **operator ==** ( right: [`bool`](class_bool.md) ) <div id="class_bool_operator_eq_bool"></div>

Returns `true` if the two booleans are equal. That is, both are `true` or both are `false`. This operation can be seen as a logical EQ or XNOR.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_bool_operator_gt_bool"></div>

[`bool`](class_bool.md) **operator >** ( right: [`bool`](class_bool.md) ) <div id="class_bool_operator_gt_bool"></div>

Returns `true` if the left operand is `true` and the right operand is `false`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
