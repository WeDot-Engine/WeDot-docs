<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/master/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/master/doc/classes/VisualShaderNodeGroupBase.xml。 -->

<div id="_class_visualshadernodegroupbase"></div>

# VisualShaderNodeGroupBase

**继承：** [`VisualShaderNodeResizableBase`](class_visualshadernoderesizablebase.md) **<** [`VisualShaderNode`](class_visualshadernode.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

**派生：** [`VisualShaderNodeExpression`](class_visualshadernodeexpression.md)

Base class for a family of nodes with variable number of input and output ports within the visual shader graph.

## 描述

Currently, has no direct usage, use the derived classes instead.

## 方法

|||
|:-:|:--|
| `void`                      | [`add_input_port`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_add_input_port) ( id: [`int`](class_int.md), type: [`int`](class_int.md), name: [`String`](class_string.md) )   |
| `void`                      | [`add_output_port`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_add_output_port) ( id: [`int`](class_int.md), type: [`int`](class_int.md), name: [`String`](class_string.md) ) |
| `void`                      | [`clear_input_ports`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_clear_input_ports) ( )                                                                                       |
| `void`                      | [`clear_output_ports`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_clear_output_ports) ( )                                                                                     |
| [`int`](class_int.md)       | [`get_free_input_port_id`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_get_free_input_port_id) ( ) const[^const]                                                               |
| [`int`](class_int.md)       | [`get_free_output_port_id`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_get_free_output_port_id) ( ) const[^const]                                                             |
| [`int`](class_int.md)       | [`get_input_port_count`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_get_input_port_count) ( ) const[^const]                                                                   |
| [`String`](class_string.md) | [`get_inputs`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_get_inputs) ( ) const[^const]                                                                                       |
| [`int`](class_int.md)       | [`get_output_port_count`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_get_output_port_count) ( ) const[^const]                                                                 |
| [`String`](class_string.md) | [`get_outputs`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_get_outputs) ( ) const[^const]                                                                                     |
| [`bool`](class_bool.md)     | [`has_input_port`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_has_input_port) ( id: [`int`](class_int.md) ) const[^const]                                                     |
| [`bool`](class_bool.md)     | [`has_output_port`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_has_output_port) ( id: [`int`](class_int.md) ) const[^const]                                                   |
| [`bool`](class_bool.md)     | [`is_valid_port_name`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_is_valid_port_name) ( name: [`String`](class_string.md) ) const[^const]                                     |
| `void`                      | [`remove_input_port`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_remove_input_port) ( id: [`int`](class_int.md) )                                                             |
| `void`                      | [`remove_output_port`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_remove_output_port) ( id: [`int`](class_int.md) )                                                           |
| `void`                      | [`set_input_port_name`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_set_input_port_name) ( id: [`int`](class_int.md), name: [`String`](class_string.md) )                      |
| `void`                      | [`set_input_port_type`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_set_input_port_type) ( id: [`int`](class_int.md), type: [`int`](class_int.md) )                            |
| `void`                      | [`set_inputs`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_set_inputs) ( inputs: [`String`](class_string.md) )                                                                 |
| `void`                      | [`set_output_port_name`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_set_output_port_name) ( id: [`int`](class_int.md), name: [`String`](class_string.md) )                    |
| `void`                      | [`set_output_port_type`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_set_output_port_type) ( id: [`int`](class_int.md), type: [`int`](class_int.md) )                          |
| `void`                      | [`set_outputs`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_set_outputs) ( outputs: [`String`](class_string.md) )                                                              |

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_visualshadernodegroupbase_method_add_input_port"></div>

`void` **add_input_port** ( id: [`int`](class_int.md), type: [`int`](class_int.md), name: [`String`](class_string.md) )<div id="class_visualshadernodegroupbase_method_add_input_port"></div>

Adds an input port with the specified `type` (see [PortType](#enum_visualshadernode_porttype)) and `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_add_output_port"></div>

`void` **add_output_port** ( id: [`int`](class_int.md), type: [`int`](class_int.md), name: [`String`](class_string.md) )<div id="class_visualshadernodegroupbase_method_add_output_port"></div>

Adds an output port with the specified `type` (see [PortType](#enum_visualshadernode_porttype)) and `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_clear_input_ports"></div>

`void` **clear_input_ports** ( )<div id="class_visualshadernodegroupbase_method_clear_input_ports"></div>

Removes all previously specified input ports.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_clear_output_ports"></div>

`void` **clear_output_ports** ( )<div id="class_visualshadernodegroupbase_method_clear_output_ports"></div>

Removes all previously specified output ports.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_get_free_input_port_id"></div>

[`int`](class_int.md) **get_free_input_port_id** ( ) const[^const]<div id="class_visualshadernodegroupbase_method_get_free_input_port_id"></div>

Returns a free input port ID which can be used in [`add_input_port`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_add_input_port).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_get_free_output_port_id"></div>

[`int`](class_int.md) **get_free_output_port_id** ( ) const[^const]<div id="class_visualshadernodegroupbase_method_get_free_output_port_id"></div>

Returns a free output port ID which can be used in [`add_output_port`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_add_output_port).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_get_input_port_count"></div>

[`int`](class_int.md) **get_input_port_count** ( ) const[^const]<div id="class_visualshadernodegroupbase_method_get_input_port_count"></div>

Returns the number of input ports in use. Alternative for [`get_free_input_port_id`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_get_free_input_port_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_get_inputs"></div>

[`String`](class_string.md) **get_inputs** ( ) const[^const]<div id="class_visualshadernodegroupbase_method_get_inputs"></div>

Returns a [`String`](class_string.md) description of the input ports as a colon-separated list using the format `id,type,name;` (see [`add_input_port`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_add_input_port)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_get_output_port_count"></div>

[`int`](class_int.md) **get_output_port_count** ( ) const[^const]<div id="class_visualshadernodegroupbase_method_get_output_port_count"></div>

Returns the number of output ports in use. Alternative for [`get_free_output_port_id`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_get_free_output_port_id).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_get_outputs"></div>

[`String`](class_string.md) **get_outputs** ( ) const[^const]<div id="class_visualshadernodegroupbase_method_get_outputs"></div>

Returns a [`String`](class_string.md) description of the output ports as a colon-separated list using the format `id,type,name;` (see [`add_output_port`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_add_output_port)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_has_input_port"></div>

[`bool`](class_bool.md) **has_input_port** ( id: [`int`](class_int.md) ) const[^const]<div id="class_visualshadernodegroupbase_method_has_input_port"></div>

Returns `true` if the specified input port exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_has_output_port"></div>

[`bool`](class_bool.md) **has_output_port** ( id: [`int`](class_int.md) ) const[^const]<div id="class_visualshadernodegroupbase_method_has_output_port"></div>

Returns `true` if the specified output port exists.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_is_valid_port_name"></div>

[`bool`](class_bool.md) **is_valid_port_name** ( name: [`String`](class_string.md) ) const[^const]<div id="class_visualshadernodegroupbase_method_is_valid_port_name"></div>

Returns `true` if the specified port name does not override an existed port name and is valid within the shader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_remove_input_port"></div>

`void` **remove_input_port** ( id: [`int`](class_int.md) )<div id="class_visualshadernodegroupbase_method_remove_input_port"></div>

Removes the specified input port.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_remove_output_port"></div>

`void` **remove_output_port** ( id: [`int`](class_int.md) )<div id="class_visualshadernodegroupbase_method_remove_output_port"></div>

Removes the specified output port.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_set_input_port_name"></div>

`void` **set_input_port_name** ( id: [`int`](class_int.md), name: [`String`](class_string.md) )<div id="class_visualshadernodegroupbase_method_set_input_port_name"></div>

Renames the specified input port.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_set_input_port_type"></div>

`void` **set_input_port_type** ( id: [`int`](class_int.md), type: [`int`](class_int.md) )<div id="class_visualshadernodegroupbase_method_set_input_port_type"></div>

Sets the specified input port's type (see [PortType](#enum_visualshadernode_porttype)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_set_inputs"></div>

`void` **set_inputs** ( inputs: [`String`](class_string.md) )<div id="class_visualshadernodegroupbase_method_set_inputs"></div>

Defines all input ports using a [`String`](class_string.md) formatted as a colon-separated list: `id,type,name;` (see [`add_input_port`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_add_input_port)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_set_output_port_name"></div>

`void` **set_output_port_name** ( id: [`int`](class_int.md), name: [`String`](class_string.md) )<div id="class_visualshadernodegroupbase_method_set_output_port_name"></div>

Renames the specified output port.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_set_output_port_type"></div>

`void` **set_output_port_type** ( id: [`int`](class_int.md), type: [`int`](class_int.md) )<div id="class_visualshadernodegroupbase_method_set_output_port_type"></div>

Sets the specified output port's type (see [PortType](#enum_visualshadernode_porttype)).

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshadernodegroupbase_method_set_outputs"></div>

`void` **set_outputs** ( outputs: [`String`](class_string.md) )<div id="class_visualshadernodegroupbase_method_set_outputs"></div>

Defines all output ports using a [`String`](class_string.md) formatted as a colon-separated list: `id,type,name;` (see [`add_output_port`](class_visualshadernodegroupbase.md#class_visualshadernodegroupbase_method_add_output_port)).

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
