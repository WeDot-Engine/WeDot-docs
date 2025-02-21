<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeUIntParameter.xml。 -->

<div id="_class_visualshadernodeuintparameter"></div>

# VisualShaderNodeUIntParameter

**继承：** [`VisualShaderNodeParameter`](class_visualshadernodeparameter.md) **<** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A visual shader node for shader parameter (uniform) of type unsigned [`int`](class_int.md).

## 描述

A [`VisualShaderNodeParameter`](class_visualshadernodeparameter.md) of type unsigned [`int`](class_int.md). Offers additional customization for range of accepted values.

## 属性

|||
|:-:|:--|
| [`int`](class_int.md)   | [`default_value`](class_visualshadernodeuintparameter.md#class_visualshadernodeuintparameter_property_default_value)                 | ``0``     |
| [`bool`](class_bool.md) | [`default_value_enabled`](class_visualshadernodeuintparameter.md#class_visualshadernodeuintparameter_property_default_value_enabled) | ``false`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodeuintparameter_property_default_value"></div>

[`int`](class_int.md) **default_value** = ``0`` <div id="class_visualshadernodeuintparameter_property_default_value"></div>

- `void` **set_default_value** ( value: [`int`](class_int.md) )
- [`int`](class_int.md) **get_default_value** ( )

Default value of this parameter, which will be used if not set externally. [`default_value_enabled`](class_visualshadernodeuintparameter.md#class_visualshadernodeuintparameter_property_default_value_enabled) must be enabled; defaults to `0` otherwise.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodeuintparameter_property_default_value_enabled"></div>

[`bool`](class_bool.md) **default_value_enabled** = ``false`` <div id="class_visualshadernodeuintparameter_property_default_value_enabled"></div>

- `void` **set_default_value_enabled** ( value: [`bool`](class_bool.md) )
- [`bool`](class_bool.md) **is_default_value_enabled** ( )

If `true`, the node will have a custom default value.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
