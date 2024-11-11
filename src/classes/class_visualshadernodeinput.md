<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeInput.xml。 -->

<div id="_class_visualshadernodeinput"></div>

# VisualShaderNodeInput

**继承：** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

Represents the input shader parameter within the visual shader graph.

## 描述

Gives access to input variables (built-ins) available for the shader. See the shading reference for the list of available built-ins for each shader type (check `Tutorials` section for link).

## 属性

|||
|:-:|:--|
| [`String`](class_string.md) | [`input_name`](class_visualshadernodeinput.md#class_visualshadernodeinput_property_input_name) | ``"[None]"`` |

## 方法

|||
|:-:|:--|
| [`String`](class_string.md) | [`get_input_real_name`](class_visualshadernodeinput.md#class_visualshadernodeinput_method_get_input_real_name) ( ) const[^const] |

<!-- rst-class:: classref-section-separator -->

---

## 信号

<div id="_class_class_visualshadernodeinput_signal_input_type_changed"></div>

**input_type_changed** ( ) <div id="class_visualshadernodeinput_signal_input_type_changed"></div>

Emitted when input is changed via [`input_name`](class_visualshadernodeinput.md#class_visualshadernodeinput_property_input_name).

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshadernodeinput_property_input_name"></div>

[`String`](class_string.md) **input_name** = ``"[None]"`` <div id="class_visualshadernodeinput_property_input_name"></div>

- `void` **set_input_name** ( value: [`String`](class_string.md) )
- [`String`](class_string.md) **get_input_name** ( )

One of the several input constants in lower-case style like: "vertex" (`VERTEX`) or "point_size" (`POINT_SIZE`).

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_visualshadernodeinput_method_get_input_real_name"></div>

[`String`](class_string.md) **get_input_real_name** ( ) const[^const]<div id="class_visualshadernodeinput_method_get_input_real_name"></div>

Returns a translated name of the current constant in the Godot Shader Language. E.g. `"ALBEDO"` if the [`input_name`](class_visualshadernodeinput.md#class_visualshadernodeinput_property_input_name) equal to `"albedo"`.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
