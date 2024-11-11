<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeIntOp.xml。 -->

<div id="_class_visualshadernodeintop"></div>

# VisualShaderNodeIntOp

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

An integer scalar operator to be used within the visual shader graph.

## 描述

Applies [`operator`](class_visualshadernodeintop.md#class_visualshadernodeintop_property_operator) to two integer inputs: `a` and `b`.

## 属性

|||
|:-:|:--|
| [Operator](#enum_visualshadernodeintop_operator) | [`operator`](class_visualshadernodeintop.md#class_visualshadernodeintop_property_operator) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodeintop_operator"></div>

enum **Operator**: <div id="enum_visualshadernodeintop_operator"></div>

<div id="_class_visualshadernodeintop_constant_op_add"></div>

[Operator](#enum_visualshadernodeintop_operator) **OP_ADD** = ``0``

Sums two numbers using `a + b`.

<div id="_class_visualshadernodeintop_constant_op_sub"></div>

[Operator](#enum_visualshadernodeintop_operator) **OP_SUB** = ``1``

Subtracts two numbers using `a - b`.

<div id="_class_visualshadernodeintop_constant_op_mul"></div>

[Operator](#enum_visualshadernodeintop_operator) **OP_MUL** = ``2``

Multiplies two numbers using `a * b`.

<div id="_class_visualshadernodeintop_constant_op_div"></div>

[Operator](#enum_visualshadernodeintop_operator) **OP_DIV** = ``3``

Divides two numbers using `a / b`.

<div id="_class_visualshadernodeintop_constant_op_mod"></div>

[Operator](#enum_visualshadernodeintop_operator) **OP_MOD** = ``4``

Calculates the remainder of two numbers using `a % b`.

<div id="_class_visualshadernodeintop_constant_op_max"></div>

[Operator](#enum_visualshadernodeintop_operator) **OP_MAX** = ``5``

Returns the greater of two numbers. Translates to `max(a, b)` in the Godot Shader Language.

<div id="_class_visualshadernodeintop_constant_op_min"></div>

[Operator](#enum_visualshadernodeintop_operator) **OP_MIN** = ``6``

Returns the lesser of two numbers. Translates to `max(a, b)` in the Godot Shader Language.

<div id="_class_visualshadernodeintop_constant_op_bitwise_and"></div>

[Operator](#enum_visualshadernodeintop_operator) **OP_BITWISE_AND** = ``7``

Returns the result of bitwise `AND` operation on the integer. Translates to `a & b` in the Godot Shader Language.

<div id="_class_visualshadernodeintop_constant_op_bitwise_or"></div>

[Operator](#enum_visualshadernodeintop_operator) **OP_BITWISE_OR** = ``8``

Returns the result of bitwise `OR` operation for two integers. Translates to `a | b` in the Godot Shader Language.

<div id="_class_visualshadernodeintop_constant_op_bitwise_xor"></div>

[Operator](#enum_visualshadernodeintop_operator) **OP_BITWISE_XOR** = ``9``

Returns the result of bitwise `XOR` operation for two integers. Translates to `a ^ b` in the Godot Shader Language.

<div id="_class_visualshadernodeintop_constant_op_bitwise_left_shift"></div>

[Operator](#enum_visualshadernodeintop_operator) **OP_BITWISE_LEFT_SHIFT** = ``10``

Returns the result of bitwise left shift operation on the integer. Translates to `a << b` in the Godot Shader Language.

<div id="_class_visualshadernodeintop_constant_op_bitwise_right_shift"></div>

[Operator](#enum_visualshadernodeintop_operator) **OP_BITWISE_RIGHT_SHIFT** = ``11``

Returns the result of bitwise right shift operation on the integer. Translates to `a >> b` in the Godot Shader Language.

<div id="_class_visualshadernodeintop_constant_op_enum_size"></div>

[Operator](#enum_visualshadernodeintop_operator) **OP_ENUM_SIZE** = ``12``

Represents the size of the [Operator](#enum_visualshadernodeintop_operator) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodeintop_property_operator"></div>

[Operator](#enum_visualshadernodeintop_operator) **operator** = ``0`` <div id="class_visualshadernodeintop_property_operator"></div>

- `void` **set_operator** ( value: [Operator](#enum_visualshadernodeintop_operator) )
- [Operator](#enum_visualshadernodeintop_operator) **get_operator** ( )

An operator to be applied to the inputs. See [Operator](#enum_visualshadernodeintop_operator) for options.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
