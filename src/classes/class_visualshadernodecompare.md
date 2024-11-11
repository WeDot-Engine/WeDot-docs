<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeCompare.xml。 -->

<div id="_class_visualshadernodecompare"></div>

# VisualShaderNodeCompare

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A comparison function for common types within the visual shader graph.

## 描述

Compares `a` and `b` of [`type`](class_visualshadernodecompare.md#class_visualshadernodecompare_property_type) by [`function`](class_visualshadernodecompare.md#class_visualshadernodecompare_property_function). Returns a boolean scalar. Translates to `if` instruction in shader code.

## 属性

|||
|:-:|:--|
| [Condition](#enum_visualshadernodecompare_condition)           | [`condition`](class_visualshadernodecompare.md#class_visualshadernodecompare_property_condition) | ``0`` |
| [Function](#enum_visualshadernodecompare_function)             | [`function`](class_visualshadernodecompare.md#class_visualshadernodecompare_property_function)   | ``0`` |
| [ComparisonType](#enum_visualshadernodecompare_comparisontype) | [`type`](class_visualshadernodecompare.md#class_visualshadernodecompare_property_type)           | ``0`` |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodecompare_comparisontype"></div>

enum **ComparisonType**: <div id="enum_visualshadernodecompare_comparisontype"></div>

<div id="_class_visualshadernodecompare_constant_ctype_scalar"></div>

[ComparisonType](#enum_visualshadernodecompare_comparisontype) **CTYPE_SCALAR** = ``0``

A floating-point scalar.

<div id="_class_visualshadernodecompare_constant_ctype_scalar_int"></div>

[ComparisonType](#enum_visualshadernodecompare_comparisontype) **CTYPE_SCALAR_INT** = ``1``

An integer scalar.

<div id="_class_visualshadernodecompare_constant_ctype_scalar_uint"></div>

[ComparisonType](#enum_visualshadernodecompare_comparisontype) **CTYPE_SCALAR_UINT** = ``2``

An unsigned integer scalar.

<div id="_class_visualshadernodecompare_constant_ctype_vector_2d"></div>

[ComparisonType](#enum_visualshadernodecompare_comparisontype) **CTYPE_VECTOR_2D** = ``3``

A 2D vector type.

<div id="_class_visualshadernodecompare_constant_ctype_vector_3d"></div>

[ComparisonType](#enum_visualshadernodecompare_comparisontype) **CTYPE_VECTOR_3D** = ``4``

A 3D vector type.

<div id="_class_visualshadernodecompare_constant_ctype_vector_4d"></div>

[ComparisonType](#enum_visualshadernodecompare_comparisontype) **CTYPE_VECTOR_4D** = ``5``

A 4D vector type.

<div id="_class_visualshadernodecompare_constant_ctype_boolean"></div>

[ComparisonType](#enum_visualshadernodecompare_comparisontype) **CTYPE_BOOLEAN** = ``6``

A boolean type.

<div id="_class_visualshadernodecompare_constant_ctype_transform"></div>

[ComparisonType](#enum_visualshadernodecompare_comparisontype) **CTYPE_TRANSFORM** = ``7``

A transform (`mat4`) type.

<div id="_class_visualshadernodecompare_constant_ctype_max"></div>

[ComparisonType](#enum_visualshadernodecompare_comparisontype) **CTYPE_MAX** = ``8``

Represents the size of the [ComparisonType](#enum_visualshadernodecompare_comparisontype) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_visualshadernodecompare_function"></div>

enum **Function**: <div id="enum_visualshadernodecompare_function"></div>

<div id="_class_visualshadernodecompare_constant_func_equal"></div>

[Function](#enum_visualshadernodecompare_function) **FUNC_EQUAL** = ``0``

Comparison for equality (`a == b`).

<div id="_class_visualshadernodecompare_constant_func_not_equal"></div>

[Function](#enum_visualshadernodecompare_function) **FUNC_NOT_EQUAL** = ``1``

Comparison for inequality (`a != b`).

<div id="_class_visualshadernodecompare_constant_func_greater_than"></div>

[Function](#enum_visualshadernodecompare_function) **FUNC_GREATER_THAN** = ``2``

Comparison for greater than (`a > b`). Cannot be used if [`type`](class_visualshadernodecompare.md#class_visualshadernodecompare_property_type) set to [`CTYPE_BOOLEAN`](class_visualshadernodecompare.md#class_visualshadernodecompare_constant_ctype_boolean) or [`CTYPE_TRANSFORM`](class_visualshadernodecompare.md#class_visualshadernodecompare_constant_ctype_transform).

<div id="_class_visualshadernodecompare_constant_func_greater_than_equal"></div>

[Function](#enum_visualshadernodecompare_function) **FUNC_GREATER_THAN_EQUAL** = ``3``

Comparison for greater than or equal (`a >= b`). Cannot be used if [`type`](class_visualshadernodecompare.md#class_visualshadernodecompare_property_type) set to [`CTYPE_BOOLEAN`](class_visualshadernodecompare.md#class_visualshadernodecompare_constant_ctype_boolean) or [`CTYPE_TRANSFORM`](class_visualshadernodecompare.md#class_visualshadernodecompare_constant_ctype_transform).

<div id="_class_visualshadernodecompare_constant_func_less_than"></div>

[Function](#enum_visualshadernodecompare_function) **FUNC_LESS_THAN** = ``4``

Comparison for less than (`a < b`). Cannot be used if [`type`](class_visualshadernodecompare.md#class_visualshadernodecompare_property_type) set to [`CTYPE_BOOLEAN`](class_visualshadernodecompare.md#class_visualshadernodecompare_constant_ctype_boolean) or [`CTYPE_TRANSFORM`](class_visualshadernodecompare.md#class_visualshadernodecompare_constant_ctype_transform).

<div id="_class_visualshadernodecompare_constant_func_less_than_equal"></div>

[Function](#enum_visualshadernodecompare_function) **FUNC_LESS_THAN_EQUAL** = ``5``

Comparison for less than or equal (`a <= b`). Cannot be used if [`type`](class_visualshadernodecompare.md#class_visualshadernodecompare_property_type) set to [`CTYPE_BOOLEAN`](class_visualshadernodecompare.md#class_visualshadernodecompare_constant_ctype_boolean) or [`CTYPE_TRANSFORM`](class_visualshadernodecompare.md#class_visualshadernodecompare_constant_ctype_transform).

<div id="_class_visualshadernodecompare_constant_func_max"></div>

[Function](#enum_visualshadernodecompare_function) **FUNC_MAX** = ``6``

Represents the size of the [Function](#enum_visualshadernodecompare_function) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_visualshadernodecompare_condition"></div>

enum **Condition**: <div id="enum_visualshadernodecompare_condition"></div>

<div id="_class_visualshadernodecompare_constant_cond_all"></div>

[Condition](#enum_visualshadernodecompare_condition) **COND_ALL** = ``0``

The result will be true if all of component in vector satisfy the comparison condition.

<div id="_class_visualshadernodecompare_constant_cond_any"></div>

[Condition](#enum_visualshadernodecompare_condition) **COND_ANY** = ``1``

The result will be true if any of component in vector satisfy the comparison condition.

<div id="_class_visualshadernodecompare_constant_cond_max"></div>

[Condition](#enum_visualshadernodecompare_condition) **COND_MAX** = ``2``

Represents the size of the [Condition](#enum_visualshadernodecompare_condition) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodecompare_property_condition"></div>

[Condition](#enum_visualshadernodecompare_condition) **condition** = ``0`` <div id="class_visualshadernodecompare_property_condition"></div>

- `void` **set_condition** ( value: [Condition](#enum_visualshadernodecompare_condition) )
- [Condition](#enum_visualshadernodecompare_condition) **get_condition** ( )

Extra condition which is applied if [`type`](class_visualshadernodecompare.md#class_visualshadernodecompare_property_type) is set to [`CTYPE_VECTOR_3D`](class_visualshadernodecompare.md#class_visualshadernodecompare_constant_ctype_vector_3d).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecompare_property_function"></div>

[Function](#enum_visualshadernodecompare_function) **function** = ``0`` <div id="class_visualshadernodecompare_property_function"></div>

- `void` **set_function** ( value: [Function](#enum_visualshadernodecompare_function) )
- [Function](#enum_visualshadernodecompare_function) **get_function** ( )

A comparison function. See [Function](#enum_visualshadernodecompare_function) for options.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodecompare_property_type"></div>

[ComparisonType](#enum_visualshadernodecompare_comparisontype) **type** = ``0`` <div id="class_visualshadernodecompare_property_type"></div>

- `void` **set_comparison_type** ( value: [ComparisonType](#enum_visualshadernodecompare_comparisontype) )
- [ComparisonType](#enum_visualshadernodecompare_comparisontype) **get_comparison_type** ( )

The type to be used in the comparison. See [ComparisonType](#enum_visualshadernodecompare_comparisontype) for options.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
