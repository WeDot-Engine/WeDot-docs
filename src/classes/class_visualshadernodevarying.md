<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisualShaderNodeVarying.xml。 -->

<div id="_class_visualshadernodevarying"></div>

# VisualShaderNodeVarying

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`VisualShaderNodeVaryingGetter`](class_visualshadernodevaryinggetter.md), [`VisualShaderNodeVaryingSetter`](class_visualshadernodevaryingsetter.md)

A visual shader node that represents a "varying" shader value.

## 描述

Varying values are shader variables that can be passed between shader functions, e.g. from Vertex shader to Fragment shader.

## 属性

| [`String`](class_string.md)                   | [`varying_name`](#class_visualshadernodevarying_property_varying_name) | ``"[None]"`` |
| [VaryingType](#enum_visualshader_varyingtype) | [`varying_type`](#class_visualshadernodevarying_property_varying_type) | ``0``        |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodevarying_property_varying_name"></div>

[`String`](class_string.md) **varying_name** = ``"[None]"`` <div id="class_visualshadernodevarying_property_varying_name"></div>

- `void` **set_varying_name** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_varying_name** ( )

Name of the variable. Must be unique.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodevarying_property_varying_type"></div>

[VaryingType](#enum_visualshader_varyingtype) **varying_type** = ``0`` <div id="class_visualshadernodevarying_property_varying_type"></div>

- `void` **set_varying_type** ( value: [VaryingType](#enum_visualshader_varyingtype) )
- [VaryingType](#enum_visualshader_varyingtype) **get_varying_type** ( )

Type of the variable. Determines where the variable can be accessed.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
