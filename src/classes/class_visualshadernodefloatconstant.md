<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeFloatConstant.xml。 -->

<div id="_class_visualshadernodefloatconstant"></div>

# VisualShaderNodeFloatConstant

**继承：** [`VisualShaderNodeConstant`](class_visualshadernodeconstant.md) **<** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A scalar floating-point constant to be used within the visual shader graph.

## 描述

Translated to `float` in the shader language.

## 属性

|||
|:-:|:--|
| [`float`](class_float.md) | [`constant`](class_visualshadernodefloatconstant.md#class_visualshadernodefloatconstant_property_constant) | ``0.0`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodefloatconstant_property_constant"></div>

[`float`](class_float.md) **constant** = ``0.0`` <div id="class_visualshadernodefloatconstant_property_constant"></div>

- `void` **set_constant** ( value: [`float`](class_float.md) )
- [`float`](class_float.md) **get_constant** ( )

A floating-point constant which represents a state of this node.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
