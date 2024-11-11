<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeDerivativeFunc.xml。 -->

<div id="_class_visualshadernodederivativefunc"></div>

# VisualShaderNodeDerivativeFunc

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Calculates a derivative within the visual shader graph.

## 描述

This node is only available in `Fragment` and `Light` visual shaders.

## 属性

|||
|:-:|:--|
| [Function](#enum_visualshadernodederivativefunc_function)   | [`function`](class_visualshadernodederivativefunc.md#class_visualshadernodederivativefunc_property_function)   | ``0`` |
| [OpType](#enum_visualshadernodederivativefunc_optype)       | [`op_type`](class_visualshadernodederivativefunc.md#class_visualshadernodederivativefunc_property_op_type)     | ``0`` |
| [Precision](#enum_visualshadernodederivativefunc_precision) | [`precision`](class_visualshadernodederivativefunc.md#class_visualshadernodederivativefunc_property_precision) | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodederivativefunc_optype"></div>

enum **OpType**: <div id="enum_visualshadernodederivativefunc_optype"></div>

<div id="_class_visualshadernodederivativefunc_constant_op_type_scalar"></div>

[OpType](#enum_visualshadernodederivativefunc_optype) **OP_TYPE_SCALAR** = ``0``

A floating-point scalar.

<div id="_class_visualshadernodederivativefunc_constant_op_type_vector_2d"></div>

[OpType](#enum_visualshadernodederivativefunc_optype) **OP_TYPE_VECTOR_2D** = ``1``

A 2D vector type.

<div id="_class_visualshadernodederivativefunc_constant_op_type_vector_3d"></div>

[OpType](#enum_visualshadernodederivativefunc_optype) **OP_TYPE_VECTOR_3D** = ``2``

A 3D vector type.

<div id="_class_visualshadernodederivativefunc_constant_op_type_vector_4d"></div>

[OpType](#enum_visualshadernodederivativefunc_optype) **OP_TYPE_VECTOR_4D** = ``3``

A 4D vector type.

<div id="_class_visualshadernodederivativefunc_constant_op_type_max"></div>

[OpType](#enum_visualshadernodederivativefunc_optype) **OP_TYPE_MAX** = ``4``

Represents the size of the [OpType](#enum_visualshadernodederivativefunc_optype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_visualshadernodederivativefunc_function"></div>

enum **Function**: <div id="enum_visualshadernodederivativefunc_function"></div>

<div id="_class_visualshadernodederivativefunc_constant_func_sum"></div>

[Function](#enum_visualshadernodederivativefunc_function) **FUNC_SUM** = ``0``

Sum of absolute derivative in `x` and `y`.

<div id="_class_visualshadernodederivativefunc_constant_func_x"></div>

[Function](#enum_visualshadernodederivativefunc_function) **FUNC_X** = ``1``

Derivative in `x` using local differencing.

<div id="_class_visualshadernodederivativefunc_constant_func_y"></div>

[Function](#enum_visualshadernodederivativefunc_function) **FUNC_Y** = ``2``

Derivative in `y` using local differencing.

<div id="_class_visualshadernodederivativefunc_constant_func_max"></div>

[Function](#enum_visualshadernodederivativefunc_function) **FUNC_MAX** = ``3``

Represents the size of the [Function](#enum_visualshadernodederivativefunc_function) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_visualshadernodederivativefunc_precision"></div>

enum **Precision**: <div id="enum_visualshadernodederivativefunc_precision"></div>

<div id="_class_visualshadernodederivativefunc_constant_precision_none"></div>

[Precision](#enum_visualshadernodederivativefunc_precision) **PRECISION_NONE** = ``0``

No precision is specified, the GPU driver is allowed to use whatever level of precision it chooses. This is the default option and is equivalent to using `dFdx()` or `dFdy()` in text shaders.

<div id="_class_visualshadernodederivativefunc_constant_precision_coarse"></div>

[Precision](#enum_visualshadernodederivativefunc_precision) **PRECISION_COARSE** = ``1``

The derivative will be calculated using the current fragment's neighbors (which may not include the current fragment). This tends to be faster than using [`PRECISION_FINE`](class_visualshadernodederivativefunc.md#class_visualshadernodederivativefunc_constant_precision_fine), but may not be suitable when more precision is needed. This is equivalent to using `dFdxCoarse()` or `dFdyCoarse()` in text shaders.

<div id="_class_visualshadernodederivativefunc_constant_precision_fine"></div>

[Precision](#enum_visualshadernodederivativefunc_precision) **PRECISION_FINE** = ``2``

The derivative will be calculated using the current fragment and its immediate neighbors. This tends to be slower than using [`PRECISION_COARSE`](class_visualshadernodederivativefunc.md#class_visualshadernodederivativefunc_constant_precision_coarse), but may be necessary when more precision is needed. This is equivalent to using `dFdxFine()` or `dFdyFine()` in text shaders.

<div id="_class_visualshadernodederivativefunc_constant_precision_max"></div>

[Precision](#enum_visualshadernodederivativefunc_precision) **PRECISION_MAX** = ``3``

Represents the size of the [Precision](#enum_visualshadernodederivativefunc_precision) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodederivativefunc_property_function"></div>

[Function](#enum_visualshadernodederivativefunc_function) **function** = ``0`` <div id="class_visualshadernodederivativefunc_property_function"></div>

- `void` **set_function** ( value: [Function](#enum_visualshadernodederivativefunc_function) )
- [Function](#enum_visualshadernodederivativefunc_function) **get_function** ( )

A derivative function type. See [Function](#enum_visualshadernodederivativefunc_function) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodederivativefunc_property_op_type"></div>

[OpType](#enum_visualshadernodederivativefunc_optype) **op_type** = ``0`` <div id="class_visualshadernodederivativefunc_property_op_type"></div>

- `void` **set_op_type** ( value: [OpType](#enum_visualshadernodederivativefunc_optype) )
- [OpType](#enum_visualshadernodederivativefunc_optype) **get_op_type** ( )

A type of operands and returned value. See [OpType](#enum_visualshadernodederivativefunc_optype) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodederivativefunc_property_precision"></div>

[Precision](#enum_visualshadernodederivativefunc_precision) **precision** = ``0`` <div id="class_visualshadernodederivativefunc_property_precision"></div>

- `void` **set_precision** ( value: [Precision](#enum_visualshadernodederivativefunc_precision) )
- [Precision](#enum_visualshadernodederivativefunc_precision) **get_precision** ( )

Sets the level of precision to use for the derivative function. See [Precision](#enum_visualshadernodederivativefunc_precision) for options. When using the GL Compatibility renderer, this setting has no effect.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
