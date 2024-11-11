<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/RDPipelineSpecializationConstant.xml。 -->

<div id="_class_rdpipelinespecializationconstant"></div>

# RDPipelineSpecializationConstant

**继承：** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Pipeline specialization constant (used by [`RenderingDevice`](class_renderingdevice.md)).

## 描述

A *specialization constant* is a way to create additional variants of shaders without actually increasing the number of shader versions that are compiled. This allows improving performance by reducing the number of shader versions and reducing `if` branching, while still allowing shaders to be flexible for different use cases.

This object is used by [`RenderingDevice`](class_renderingdevice.md).

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)         | [`constant_id`](class_rdpipelinespecializationconstant.md#class_rdpipelinespecializationconstant_property_constant_id) | ``0`` |
| [`Variant`](class_variant.md) | [`value`](class_rdpipelinespecializationconstant.md#class_rdpipelinespecializationconstant_property_value)             |       |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_rdpipelinespecializationconstant_property_constant_id"></div>

[`int`](class_int.md) **constant_id** = ``0`` <div id="class_rdpipelinespecializationconstant_property_constant_id"></div>

- `void` **set_constant_id** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_constant_id** ( )

The identifier of the specialization constant. This is a value starting from `0` and that increments for every different specialization constant for a given shader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_rdpipelinespecializationconstant_property_value"></div>

[`Variant`](class_variant.md) **value** <div id="class_rdpipelinespecializationconstant_property_value"></div>

- `void` **set_value** ( value: [`Variant`](class_variant.md) )
- [`Variant`](class_variant.md) **get_value** ( )

The specialization constant's value. Only [`bool`](class_bool.md), [`int`](class_int.md) and [`float`](class_float.md) types are valid for specialization constants.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
