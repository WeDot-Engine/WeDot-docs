<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisualShaderNodeTransformOp.xml。 -->

<div id="_class_visualshadernodetransformop"></div>

# VisualShaderNodeTransformOp

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A [`Transform3D`](class_transform3d.md) operator to be used within the visual shader graph.

## 描述

Applies [`operator`](#class_visualshadernodetransformop_property_operator) to two transform (4×4 matrices) inputs.

## 属性

| [Operator](#enum_visualshadernodetransformop_operator) | [`operator`](#class_visualshadernodetransformop_property_operator) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodetransformop_operator"></div>

enum **Operator**: <div id="enum_visualshadernodetransformop_operator"></div>

<div id="_class_visualshadernodetransformop_constant_op_axb"></div>

[Operator](#enum_visualshadernodetransformop_operator) **OP_AxB** = ``0``

Multiplies transform `a` by the transform `b`.

<div id="_class_visualshadernodetransformop_constant_op_bxa"></div>

[Operator](#enum_visualshadernodetransformop_operator) **OP_BxA** = ``1``

Multiplies transform `b` by the transform `a`.

<div id="_class_visualshadernodetransformop_constant_op_axb_comp"></div>

[Operator](#enum_visualshadernodetransformop_operator) **OP_AxB_COMP** = ``2``

Performs a component-wise multiplication of transform `a` by the transform `b`.

<div id="_class_visualshadernodetransformop_constant_op_bxa_comp"></div>

[Operator](#enum_visualshadernodetransformop_operator) **OP_BxA_COMP** = ``3``

Performs a component-wise multiplication of transform `b` by the transform `a`.

<div id="_class_visualshadernodetransformop_constant_op_add"></div>

[Operator](#enum_visualshadernodetransformop_operator) **OP_ADD** = ``4``

Adds two transforms.

<div id="_class_visualshadernodetransformop_constant_op_a_minus_b"></div>

[Operator](#enum_visualshadernodetransformop_operator) **OP_A_MINUS_B** = ``5``

Subtracts the transform `a` from the transform `b`.

<div id="_class_visualshadernodetransformop_constant_op_b_minus_a"></div>

[Operator](#enum_visualshadernodetransformop_operator) **OP_B_MINUS_A** = ``6``

Subtracts the transform `b` from the transform `a`.

<div id="_class_visualshadernodetransformop_constant_op_a_div_b"></div>

[Operator](#enum_visualshadernodetransformop_operator) **OP_A_DIV_B** = ``7``

Divides the transform `a` by the transform `b`.

<div id="_class_visualshadernodetransformop_constant_op_b_div_a"></div>

[Operator](#enum_visualshadernodetransformop_operator) **OP_B_DIV_A** = ``8``

Divides the transform `b` by the transform `a`.

<div id="_class_visualshadernodetransformop_constant_op_max"></div>

[Operator](#enum_visualshadernodetransformop_operator) **OP_MAX** = ``9``

Represents the size of the [Operator](#enum_visualshadernodetransformop_operator) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodetransformop_property_operator"></div>

[Operator](#enum_visualshadernodetransformop_operator) **operator** = ``0`` <div id="class_visualshadernodetransformop_property_operator"></div>

- `void` **set_operator** ( value: [Operator](#enum_visualshadernodetransformop_operator) )
- [Operator](#enum_visualshadernodetransformop_operator) **get_operator** ( )

The type of the operation to be performed on the transforms. See [Operator](#enum_visualshadernodetransformop_operator) for options.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
