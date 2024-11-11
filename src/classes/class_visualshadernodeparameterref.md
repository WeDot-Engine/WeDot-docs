<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeParameterRef.xml。 -->

<div id="_class_visualshadernodeparameterref"></div>

# VisualShaderNodeParameterRef

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A reference to an existing [`VisualShaderNodeParameter`](class_visualshadernodeparameter.md).

## 描述

Creating a reference to a [`VisualShaderNodeParameter`](class_visualshadernodeparameter.md) allows you to reuse this parameter in different shaders or shader stages easily.

## 属性

|||
|:-:|:--|
| [`String`](class_string.md) | [`parameter_name`](class_visualshadernodeparameterref.md#class_visualshadernodeparameterref_property_parameter_name) | ``"[None]"`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodeparameterref_property_parameter_name"></div>

[`String`](class_string.md) **parameter_name** = ``"[None]"`` <div id="class_visualshadernodeparameterref_property_parameter_name"></div>

- `void` **set_parameter_name** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_parameter_name** ( )

The name of the parameter which this reference points to.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
