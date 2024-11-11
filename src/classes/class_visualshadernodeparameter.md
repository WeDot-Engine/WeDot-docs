<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeParameter.xml。 -->

<div id="_class_visualshadernodeparameter"></div>

# VisualShaderNodeParameter

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`VisualShaderNodeBooleanParameter`](class_visualshadernodebooleanparameter.md), [`VisualShaderNodeColorParameter`](class_visualshadernodecolorparameter.md), [`VisualShaderNodeFloatParameter`](class_visualshadernodefloatparameter.md), [`VisualShaderNodeIntParameter`](class_visualshadernodeintparameter.md), [`VisualShaderNodeTextureParameter`](class_visualshadernodetextureparameter.md), [`VisualShaderNodeTransformParameter`](class_visualshadernodetransformparameter.md), [`VisualShaderNodeUIntParameter`](class_visualshadernodeuintparameter.md), [`VisualShaderNodeVec2Parameter`](class_visualshadernodevec2parameter.md), [`VisualShaderNodeVec3Parameter`](class_visualshadernodevec3parameter.md), [`VisualShaderNodeVec4Parameter`](class_visualshadernodevec4parameter.md)

A base type for the parameters within the visual shader graph.

## 描述

A parameter represents a variable in the shader which is set externally, i.e. from the [`ShaderMaterial`](class_shadermaterial.md). Parameters are exposed as properties in the [`ShaderMaterial`](class_shadermaterial.md) and can be assigned from the Inspector or from a script.

## 属性

|||
|:-:|:--|
| [`String`](class_string.md)                            | [`parameter_name`](class_visualshadernodeparameter.md#class_visualshadernodeparameter_property_parameter_name) | ``""`` |
| [Qualifier](#enum_visualshadernodeparameter_qualifier) | [`qualifier`](class_visualshadernodeparameter.md#class_visualshadernodeparameter_property_qualifier)           | ``0``  |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshadernodeparameter_qualifier"></div>

enum **Qualifier**: <div id="enum_visualshadernodeparameter_qualifier"></div>

<div id="_class_visualshadernodeparameter_constant_qual_none"></div>

[Qualifier](#enum_visualshadernodeparameter_qualifier) **QUAL_NONE** = ``0``

The parameter will be tied to the [`ShaderMaterial`](class_shadermaterial.md) using this shader.

<div id="_class_visualshadernodeparameter_constant_qual_global"></div>

[Qualifier](#enum_visualshadernodeparameter_qualifier) **QUAL_GLOBAL** = ``1``

The parameter will use a global value, defined in Project Settings.

<div id="_class_visualshadernodeparameter_constant_qual_instance"></div>

[Qualifier](#enum_visualshadernodeparameter_qualifier) **QUAL_INSTANCE** = ``2``

The parameter will be tied to the node with attached [`ShaderMaterial`](class_shadermaterial.md) using this shader.

<div id="_class_visualshadernodeparameter_constant_qual_max"></div>

[Qualifier](#enum_visualshadernodeparameter_qualifier) **QUAL_MAX** = ``3``

Represents the size of the [Qualifier](#enum_visualshadernodeparameter_qualifier) enum.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodeparameter_property_parameter_name"></div>

[`String`](class_string.md) **parameter_name** = ``""`` <div id="class_visualshadernodeparameter_property_parameter_name"></div>

- `void` **set_parameter_name** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_parameter_name** ( )

Name of the parameter, by which it can be accessed through the [`ShaderMaterial`](class_shadermaterial.md) properties.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodeparameter_property_qualifier"></div>

[Qualifier](#enum_visualshadernodeparameter_qualifier) **qualifier** = ``0`` <div id="class_visualshadernodeparameter_property_qualifier"></div>

- `void` **set_qualifier** ( value: [Qualifier](#enum_visualshadernodeparameter_qualifier) )
- [Qualifier](#enum_visualshadernodeparameter_qualifier) **get_qualifier** ( )

Defines the scope of the parameter.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
