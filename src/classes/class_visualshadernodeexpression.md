<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisualShaderNodeExpression.xml。 -->

<div id="_class_visualshadernodeexpression"></div>

# VisualShaderNodeExpression

**继承：** [`VisualShaderNodeGroupBase`](class_visualshadernodegroupbase.md) **<** [`VisualShaderNodeResizableBase`](class_visualshadernoderesizablebase.md) **<** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`VisualShaderNodeGlobalExpression`](class_visualshadernodeglobalexpression.md)

A custom visual shader graph expression written in Godot Shading Language.

## 描述

Custom Godot Shading Language expression, with a custom number of input and output ports.

The provided code is directly injected into the graph's matching shader function (`vertex`, `fragment`, or `light`), so it cannot be used to declare functions, varyings, uniforms, or global constants. See [`VisualShaderNodeGlobalExpression`](class_visualshadernodeglobalexpression.md) for such global definitions.

## 属性

| [`String`](class_string.md) | [`expression`](#class_visualshadernodeexpression_property_expression) | ``""`` |

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodeexpression_property_expression"></div>

[`String`](class_string.md) **expression** = ``""`` <div id="class_visualshadernodeexpression_property_expression"></div>

- `void` **set_expression** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_expression** ( )

An expression in Godot Shading Language, which will be injected at the start of the graph's matching shader function (`vertex`, `fragment`, or `light`), and thus cannot be used to declare functions, varyings, uniforms, or global constants.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
