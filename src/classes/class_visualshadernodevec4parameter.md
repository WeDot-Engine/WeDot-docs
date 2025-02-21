<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeVec4Parameter.xml。 -->

<div id="_class_visualshadernodevec4parameter"></div>

# VisualShaderNodeVec4Parameter

**继承：** [`VisualShaderNodeParameter`](class_visualshadernodeparameter.md) **<** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A 4D vector parameter to be used within the visual shader graph.

## 描述

Translated to `uniform vec4` in the shader language.

## 属性

|||
|:-:|:--|
| [`Vector4`](class_vector4.md) | [`default_value`](class_visualshadernodevec4parameter.md#class_visualshadernodevec4parameter_property_default_value)                 | ``Vector4(0, 0, 0, 0)`` |
| [`bool`](class_bool.md)       | [`default_value_enabled`](class_visualshadernodevec4parameter.md#class_visualshadernodevec4parameter_property_default_value_enabled) | ``false``               |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodevec4parameter_property_default_value"></div>

[`Vector4`](class_vector4.md) **default_value** = ``Vector4(0, 0, 0, 0)`` <div id="class_visualshadernodevec4parameter_property_default_value"></div>

- `void` **set_default_value** ( value: [`Vector4`](class_vector4.md) )
- [`Vector4`](class_vector4.md) **get_default_value** ( )

A default value to be assigned within the shader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodevec4parameter_property_default_value_enabled"></div>

[`bool`](class_bool.md) **default_value_enabled** = ``false`` <div id="class_visualshadernodevec4parameter_property_default_value_enabled"></div>

- `void` **set_default_value_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_default_value_enabled** ( )

Enables usage of the [`default_value`](class_visualshadernodevec4parameter.md#class_visualshadernodevec4parameter_property_default_value).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
