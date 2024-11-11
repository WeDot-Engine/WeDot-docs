<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeVectorOp.xml。 -->

<div id="_class_visualshadernodevectorop"></div>

# VisualShaderNodeVectorOp

**继承：** [`VisualShaderNodeVectorBase`](class_visualshadernodevectorbase.md) **<** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A vector operator to be used within the visual shader graph.

## 描述

A visual shader node for use of vector operators. Operates on vector `a` and vector `b`.

## 属性

|||
|:-:|:--|
| [Operator](#enum_visualshadernodevectorop_operator) | [`operator`](class_visualshadernodevectorop.md#class_visualshadernodevectorop_property_operator) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodevectorop_operator"></div>

enum **Operator**: <div id="enum_visualshadernodevectorop_operator"></div>

<div id="_class_visualshadernodevectorop_constant_op_add"></div>

[Operator](#enum_visualshadernodevectorop_operator) **OP_ADD** = ``0``

Adds two vectors.

<div id="_class_visualshadernodevectorop_constant_op_sub"></div>

[Operator](#enum_visualshadernodevectorop_operator) **OP_SUB** = ``1``

Subtracts a vector from a vector.

<div id="_class_visualshadernodevectorop_constant_op_mul"></div>

[Operator](#enum_visualshadernodevectorop_operator) **OP_MUL** = ``2``

Multiplies two vectors.

<div id="_class_visualshadernodevectorop_constant_op_div"></div>

[Operator](#enum_visualshadernodevectorop_operator) **OP_DIV** = ``3``

Divides vector by vector.

<div id="_class_visualshadernodevectorop_constant_op_mod"></div>

[Operator](#enum_visualshadernodevectorop_operator) **OP_MOD** = ``4``

Returns the remainder of the two vectors.

<div id="_class_visualshadernodevectorop_constant_op_pow"></div>

[Operator](#enum_visualshadernodevectorop_operator) **OP_POW** = ``5``

Returns the value of the first parameter raised to the power of the second, for each component of the vectors.

<div id="_class_visualshadernodevectorop_constant_op_max"></div>

[Operator](#enum_visualshadernodevectorop_operator) **OP_MAX** = ``6``

Returns the greater of two values, for each component of the vectors.

<div id="_class_visualshadernodevectorop_constant_op_min"></div>

[Operator](#enum_visualshadernodevectorop_operator) **OP_MIN** = ``7``

Returns the lesser of two values, for each component of the vectors.

<div id="_class_visualshadernodevectorop_constant_op_cross"></div>

[Operator](#enum_visualshadernodevectorop_operator) **OP_CROSS** = ``8``

Calculates the cross product of two vectors.

<div id="_class_visualshadernodevectorop_constant_op_atan2"></div>

[Operator](#enum_visualshadernodevectorop_operator) **OP_ATAN2** = ``9``

Returns the arc-tangent of the parameters.

<div id="_class_visualshadernodevectorop_constant_op_reflect"></div>

[Operator](#enum_visualshadernodevectorop_operator) **OP_REFLECT** = ``10``

Returns the vector that points in the direction of reflection. `a` is incident vector and `b` is the normal vector.

<div id="_class_visualshadernodevectorop_constant_op_step"></div>

[Operator](#enum_visualshadernodevectorop_operator) **OP_STEP** = ``11``

Vector step operator. Returns `0.0` if `a` is smaller than `b` and `1.0` otherwise.

<div id="_class_visualshadernodevectorop_constant_op_enum_size"></div>

[Operator](#enum_visualshadernodevectorop_operator) **OP_ENUM_SIZE** = ``12``

Represents the size of the [Operator](#enum_visualshadernodevectorop_operator) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodevectorop_property_operator"></div>

[Operator](#enum_visualshadernodevectorop_operator) **operator** = ``0`` <div id="class_visualshadernodevectorop_property_operator"></div>

- `void` **set_operator** ( value: [Operator](#enum_visualshadernodevectorop_operator) )
- [Operator](#enum_visualshadernodevectorop_operator) **get_operator** ( )

The operator to be used. See [Operator](#enum_visualshadernodevectorop_operator) for options.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
