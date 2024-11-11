<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeRemap.xml。 -->

<div id="_class_visualshadernoderemap"></div>

# VisualShaderNodeRemap

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A visual shader node for remap function.

## 描述

Remap will transform the input range into output range, e.g. you can change a `0..1` value to `-2..2` etc. See [`@GlobalScope.remap`](class_@globalscope.md#class_@globalscope_method_remap) for more details.

## 属性

|||
|:-:|:--|
| [OpType](#enum_visualshadernoderemap_optype) | [`op_type`](class_visualshadernoderemap.md#class_visualshadernoderemap_property_op_type) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernoderemap_optype"></div>

enum **OpType**: <div id="enum_visualshadernoderemap_optype"></div>

<div id="_class_visualshadernoderemap_constant_op_type_scalar"></div>

[OpType](#enum_visualshadernoderemap_optype) **OP_TYPE_SCALAR** = ``0``

A floating-point scalar type.

<div id="_class_visualshadernoderemap_constant_op_type_vector_2d"></div>

[OpType](#enum_visualshadernoderemap_optype) **OP_TYPE_VECTOR_2D** = ``1``

A 2D vector type.

<div id="_class_visualshadernoderemap_constant_op_type_vector_2d_scalar"></div>

[OpType](#enum_visualshadernoderemap_optype) **OP_TYPE_VECTOR_2D_SCALAR** = ``2``

The `value` port uses a 2D vector type, while the `input min`, `input max`, `output min`, and `output max` ports use a floating-point scalar type.

<div id="_class_visualshadernoderemap_constant_op_type_vector_3d"></div>

[OpType](#enum_visualshadernoderemap_optype) **OP_TYPE_VECTOR_3D** = ``3``

A 3D vector type.

<div id="_class_visualshadernoderemap_constant_op_type_vector_3d_scalar"></div>

[OpType](#enum_visualshadernoderemap_optype) **OP_TYPE_VECTOR_3D_SCALAR** = ``4``

The `value` port uses a 3D vector type, while the `input min`, `input max`, `output min`, and `output max` ports use a floating-point scalar type.

<div id="_class_visualshadernoderemap_constant_op_type_vector_4d"></div>

[OpType](#enum_visualshadernoderemap_optype) **OP_TYPE_VECTOR_4D** = ``5``

A 4D vector type.

<div id="_class_visualshadernoderemap_constant_op_type_vector_4d_scalar"></div>

[OpType](#enum_visualshadernoderemap_optype) **OP_TYPE_VECTOR_4D_SCALAR** = ``6``

The `value` port uses a 4D vector type, while the `input min`, `input max`, `output min`, and `output max` ports use a floating-point scalar type.

<div id="_class_visualshadernoderemap_constant_op_type_max"></div>

[OpType](#enum_visualshadernoderemap_optype) **OP_TYPE_MAX** = ``7``

Represents the size of the [OpType](#enum_visualshadernoderemap_optype) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernoderemap_property_op_type"></div>

[OpType](#enum_visualshadernoderemap_optype) **op_type** = ``0`` <div id="class_visualshadernoderemap_property_op_type"></div>

- `void` **set_op_type** ( value: [OpType](#enum_visualshadernoderemap_optype) )
- [OpType](#enum_visualshadernoderemap_optype) **get_op_type** ( )

该属性目前没有描述，请帮我们\ :ref:`贡献一个 <doc_updating_the_class_reference>`\ 吧！

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
