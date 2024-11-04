<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisualShaderNodeFloatOp.xml。 -->

<div id="_class_visualshadernodefloatop"></div>

# VisualShaderNodeFloatOp

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A floating-point scalar operator to be used within the visual shader graph.

## 描述

Applies [`operator`](#class_visualshadernodefloatop_property_operator) to two floating-point inputs: `a` and `b`.

## 属性

| [Operator](#enum_visualshadernodefloatop_operator) | [`operator`](#class_visualshadernodefloatop_property_operator) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodefloatop_operator"></div>

enum **Operator**: <div id="enum_visualshadernodefloatop_operator"></div>

<div id="_class_visualshadernodefloatop_constant_op_add"></div>

[Operator](#enum_visualshadernodefloatop_operator) **OP_ADD** = ``0``

Sums two numbers using `a + b`.

<div id="_class_visualshadernodefloatop_constant_op_sub"></div>

[Operator](#enum_visualshadernodefloatop_operator) **OP_SUB** = ``1``

Subtracts two numbers using `a - b`.

<div id="_class_visualshadernodefloatop_constant_op_mul"></div>

[Operator](#enum_visualshadernodefloatop_operator) **OP_MUL** = ``2``

Multiplies two numbers using `a * b`.

<div id="_class_visualshadernodefloatop_constant_op_div"></div>

[Operator](#enum_visualshadernodefloatop_operator) **OP_DIV** = ``3``

Divides two numbers using `a / b`.

<div id="_class_visualshadernodefloatop_constant_op_mod"></div>

[Operator](#enum_visualshadernodefloatop_operator) **OP_MOD** = ``4``

Calculates the remainder of two numbers. Translates to `mod(a, b)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatop_constant_op_pow"></div>

[Operator](#enum_visualshadernodefloatop_operator) **OP_POW** = ``5``

Raises the `a` to the power of `b`. Translates to `pow(a, b)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatop_constant_op_max"></div>

[Operator](#enum_visualshadernodefloatop_operator) **OP_MAX** = ``6``

Returns the greater of two numbers. Translates to `max(a, b)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatop_constant_op_min"></div>

[Operator](#enum_visualshadernodefloatop_operator) **OP_MIN** = ``7``

Returns the lesser of two numbers. Translates to `min(a, b)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatop_constant_op_atan2"></div>

[Operator](#enum_visualshadernodefloatop_operator) **OP_ATAN2** = ``8``

Returns the arc-tangent of the parameters. Translates to `atan(a, b)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatop_constant_op_step"></div>

[Operator](#enum_visualshadernodefloatop_operator) **OP_STEP** = ``9``

Generates a step function by comparing `b` (x) to `a` (edge). Returns 0.0 if `x` is smaller than `edge` and otherwise 1.0. Translates to `step(a, b)` in the Godot Shader Language.

<div id="_class_visualshadernodefloatop_constant_op_enum_size"></div>

[Operator](#enum_visualshadernodefloatop_operator) **OP_ENUM_SIZE** = ``10``

Represents the size of the [Operator](#enum_visualshadernodefloatop_operator) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodefloatop_property_operator"></div>

[Operator](#enum_visualshadernodefloatop_operator) **operator** = ``0`` <div id="class_visualshadernodefloatop_property_operator"></div>

- `void` **set_operator** ( value: [Operator](#enum_visualshadernodefloatop_operator) )
- [Operator](#enum_visualshadernodefloatop_operator) **get_operator** ( )

An operator to be applied to the inputs. See [Operator](#enum_visualshadernodefloatop_operator) for options.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
