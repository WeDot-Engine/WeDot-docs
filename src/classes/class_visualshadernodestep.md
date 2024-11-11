<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeStep.xml。 -->

<div id="_class_visualshadernodestep"></div>

# VisualShaderNodeStep

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Calculates a Step function within the visual shader graph.

## 描述

Translates to `step(edge, x)` in the shader language.

Returns `0.0` if `x` is smaller than `edge` and `1.0` otherwise.

## 属性

|||
|:-:|:--|
| [OpType](#enum_visualshadernodestep_optype) | [`op_type`](class_visualshadernodestep.md#class_visualshadernodestep_property_op_type) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodestep_optype"></div>

enum **OpType**: <div id="enum_visualshadernodestep_optype"></div>

<div id="_class_visualshadernodestep_constant_op_type_scalar"></div>

[OpType](#enum_visualshadernodestep_optype) **OP_TYPE_SCALAR** = ``0``

A floating-point scalar type.

<div id="_class_visualshadernodestep_constant_op_type_vector_2d"></div>

[OpType](#enum_visualshadernodestep_optype) **OP_TYPE_VECTOR_2D** = ``1``

A 2D vector type.

<div id="_class_visualshadernodestep_constant_op_type_vector_2d_scalar"></div>

[OpType](#enum_visualshadernodestep_optype) **OP_TYPE_VECTOR_2D_SCALAR** = ``2``

The `x` port uses a 2D vector type, while the `edge` port uses a floating-point scalar type.

<div id="_class_visualshadernodestep_constant_op_type_vector_3d"></div>

[OpType](#enum_visualshadernodestep_optype) **OP_TYPE_VECTOR_3D** = ``3``

A 3D vector type.

<div id="_class_visualshadernodestep_constant_op_type_vector_3d_scalar"></div>

[OpType](#enum_visualshadernodestep_optype) **OP_TYPE_VECTOR_3D_SCALAR** = ``4``

The `x` port uses a 3D vector type, while the `edge` port uses a floating-point scalar type.

<div id="_class_visualshadernodestep_constant_op_type_vector_4d"></div>

[OpType](#enum_visualshadernodestep_optype) **OP_TYPE_VECTOR_4D** = ``5``

A 4D vector type.

<div id="_class_visualshadernodestep_constant_op_type_vector_4d_scalar"></div>

[OpType](#enum_visualshadernodestep_optype) **OP_TYPE_VECTOR_4D_SCALAR** = ``6``

The `a` and `b` ports use a 4D vector type. The `weight` port uses a scalar type.

<div id="_class_visualshadernodestep_constant_op_type_max"></div>

[OpType](#enum_visualshadernodestep_optype) **OP_TYPE_MAX** = ``7``

Represents the size of the [OpType](#enum_visualshadernodestep_optype) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodestep_property_op_type"></div>

[OpType](#enum_visualshadernodestep_optype) **op_type** = ``0`` <div id="class_visualshadernodestep_property_op_type"></div>

- `void` **set_op_type** ( value: [OpType](#enum_visualshadernodestep_optype) )
- [OpType](#enum_visualshadernodestep_optype) **get_op_type** ( )

A type of operands and returned value.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
