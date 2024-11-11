<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeTransformVecMult.xml。 -->

<div id="_class_visualshadernodetransformvecmult"></div>

# VisualShaderNodeTransformVecMult

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Multiplies a [`Transform3D`](class_transform3d.md) and a [`Vector3`](class_vector3.md) within the visual shader graph.

## 描述

A multiplication operation on a transform (4×4 matrix) and a vector, with support for different multiplication operators.

## 属性

|||
|:-:|:--|
| [Operator](#enum_visualshadernodetransformvecmult_operator) | [`operator`](class_visualshadernodetransformvecmult.md#class_visualshadernodetransformvecmult_property_operator) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodetransformvecmult_operator"></div>

enum **Operator**: <div id="enum_visualshadernodetransformvecmult_operator"></div>

<div id="_class_visualshadernodetransformvecmult_constant_op_axb"></div>

[Operator](#enum_visualshadernodetransformvecmult_operator) **OP_AxB** = ``0``

Multiplies transform `a` by the vector `b`.

<div id="_class_visualshadernodetransformvecmult_constant_op_bxa"></div>

[Operator](#enum_visualshadernodetransformvecmult_operator) **OP_BxA** = ``1``

Multiplies vector `b` by the transform `a`.

<div id="_class_visualshadernodetransformvecmult_constant_op_3x3_axb"></div>

[Operator](#enum_visualshadernodetransformvecmult_operator) **OP_3x3_AxB** = ``2``

Multiplies transform `a` by the vector `b`, skipping the last row and column of the transform.

<div id="_class_visualshadernodetransformvecmult_constant_op_3x3_bxa"></div>

[Operator](#enum_visualshadernodetransformvecmult_operator) **OP_3x3_BxA** = ``3``

Multiplies vector `b` by the transform `a`, skipping the last row and column of the transform.

<div id="_class_visualshadernodetransformvecmult_constant_op_max"></div>

[Operator](#enum_visualshadernodetransformvecmult_operator) **OP_MAX** = ``4``

Represents the size of the [Operator](#enum_visualshadernodetransformvecmult_operator) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodetransformvecmult_property_operator"></div>

[Operator](#enum_visualshadernodetransformvecmult_operator) **operator** = ``0`` <div id="class_visualshadernodetransformvecmult_property_operator"></div>

- `void` **set_operator** ( value: [Operator](#enum_visualshadernodetransformvecmult_operator) )
- [Operator](#enum_visualshadernodetransformvecmult_operator) **get_operator** ( )

The multiplication type to be performed. See [Operator](#enum_visualshadernodetransformvecmult_operator) for options.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
