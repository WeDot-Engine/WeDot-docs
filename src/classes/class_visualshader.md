<!-- ⚠ 请勿编辑本文件 ⚠ -->
<!-- 本文档使用脚本从 WeDot 引擎源码仓库生成。 -->
<!-- 生成脚本：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/tools/make_md.py； -->
<!-- 原文件：https://github.com/WeDot-Engine/WeDot/tree/4.3/doc/classes/VisualShader.xml。 -->

<div id="_class_visualshader"></div>

# VisualShader

**继承：** [`Shader`](class_shader.md) **<** [`Resource`](class_resource.md) **<** [`RefCounted`](class_refcounted.md) **<** [`Object`](class_object.md)

A custom shader program with a visual editor.

## 描述

This class provides a graph-like visual editor for creating a [`Shader`](class_shader.md). Although **VisualShader** s do not require coding, they share the same logic with script shaders. They use [`VisualShaderNode`](class_visualshadernode.md) s that can be connected to each other to control the flow of the shader. The visual shader graph is converted to a script shader behind the scenes.

## 属性

| [`Vector2`](class_vector2.md) | [`graph_offset`](#class_visualshader_property_graph_offset) | ``Vector2(0, 0)`` |

## 方法

| `void`                                                      | [`add_node`](#class_visualshader_method_add_node) ( type: [Type](#enum_visualshader_type), node: [`VisualShaderNode`](class_visualshadernode.md), position: [`Vector2`](class_vector2.md), id: [`int`](class_int.md) )                                            |
| `void`                                                      | [`add_varying`](#class_visualshader_method_add_varying) ( name: [`String`](class_string.md), mode: [VaryingMode](#enum_visualshader_varyingmode), type: [VaryingType](#enum_visualshader_varyingtype) )                                                           |
| `void`                                                      | [`attach_node_to_frame`](#class_visualshader_method_attach_node_to_frame) ( type: [Type](#enum_visualshader_type), id: [`int`](class_int.md), frame: [`int`](class_int.md) )                                                                                      |
| [`bool`](class_bool.md)                                     | [`can_connect_nodes`](#class_visualshader_method_can_connect_nodes) ( type: [Type](#enum_visualshader_type), from_node: [`int`](class_int.md), from_port: [`int`](class_int.md), to_node: [`int`](class_int.md), to_port: [`int`](class_int.md) ) const[^const]   |
| [Error](#enum_@globalscope_error)                           | [`connect_nodes`](#class_visualshader_method_connect_nodes) ( type: [Type](#enum_visualshader_type), from_node: [`int`](class_int.md), from_port: [`int`](class_int.md), to_node: [`int`](class_int.md), to_port: [`int`](class_int.md) )                         |
| `void`                                                      | [`connect_nodes_forced`](#class_visualshader_method_connect_nodes_forced) ( type: [Type](#enum_visualshader_type), from_node: [`int`](class_int.md), from_port: [`int`](class_int.md), to_node: [`int`](class_int.md), to_port: [`int`](class_int.md) )           |
| `void`                                                      | [`detach_node_from_frame`](#class_visualshader_method_detach_node_from_frame) ( type: [Type](#enum_visualshader_type), id: [`int`](class_int.md) )                                                                                                                |
| `void`                                                      | [`disconnect_nodes`](#class_visualshader_method_disconnect_nodes) ( type: [Type](#enum_visualshader_type), from_node: [`int`](class_int.md), from_port: [`int`](class_int.md), to_node: [`int`](class_int.md), to_port: [`int`](class_int.md) )                   |
| [`VisualShaderNode`](class_visualshadernode.md)             | [`get_node`](#class_visualshader_method_get_node) ( type: [Type](#enum_visualshader_type), id: [`int`](class_int.md) ) const[^const]                                                                                                                              |
| [Array](class_array.md) [`Dictionary`](class_dictionary.md) | [`get_node_connections`](#class_visualshader_method_get_node_connections) ( type: [Type](#enum_visualshader_type) ) const[^const]                                                                                                                                 |
| [`PackedInt32Array`](class_packedint32array.md)             | [`get_node_list`](#class_visualshader_method_get_node_list) ( type: [Type](#enum_visualshader_type) ) const[^const]                                                                                                                                               |
| [`Vector2`](class_vector2.md)                               | [`get_node_position`](#class_visualshader_method_get_node_position) ( type: [Type](#enum_visualshader_type), id: [`int`](class_int.md) ) const[^const]                                                                                                            |
| [`int`](class_int.md)                                       | [`get_valid_node_id`](#class_visualshader_method_get_valid_node_id) ( type: [Type](#enum_visualshader_type) ) const[^const]                                                                                                                                       |
| [`bool`](class_bool.md)                                     | [`has_varying`](#class_visualshader_method_has_varying) ( name: [`String`](class_string.md) ) const[^const]                                                                                                                                                       |
| [`bool`](class_bool.md)                                     | [`is_node_connection`](#class_visualshader_method_is_node_connection) ( type: [Type](#enum_visualshader_type), from_node: [`int`](class_int.md), from_port: [`int`](class_int.md), to_node: [`int`](class_int.md), to_port: [`int`](class_int.md) ) const[^const] |
| `void`                                                      | [`remove_node`](#class_visualshader_method_remove_node) ( type: [Type](#enum_visualshader_type), id: [`int`](class_int.md) )                                                                                                                                      |
| `void`                                                      | [`remove_varying`](#class_visualshader_method_remove_varying) ( name: [`String`](class_string.md) )                                                                                                                                                               |
| `void`                                                      | [`replace_node`](#class_visualshader_method_replace_node) ( type: [Type](#enum_visualshader_type), id: [`int`](class_int.md), new_class: [`StringName`](class_stringname.md) )                                                                                    |
| `void`                                                      | [`set_mode`](#class_visualshader_method_set_mode) ( mode: [Mode](#enum_shader_mode) )                                                                                                                                                                             |
| `void`                                                      | [`set_node_position`](#class_visualshader_method_set_node_position) ( type: [Type](#enum_visualshader_type), id: [`int`](class_int.md), position: [`Vector2`](class_vector2.md) )                                                                                 |

<!-- rst-class:: classref-section-separator -->

---

## 枚举

<div id="_class_enum_visualshader_type"></div>

enum **Type**: <div id="enum_visualshader_type"></div>

<div id="_class_visualshader_constant_type_vertex"></div>

[Type](#enum_visualshader_type) **TYPE_VERTEX** = ``0``

A vertex shader, operating on vertices.

<div id="_class_visualshader_constant_type_fragment"></div>

[Type](#enum_visualshader_type) **TYPE_FRAGMENT** = ``1``

A fragment shader, operating on fragments (pixels).

<div id="_class_visualshader_constant_type_light"></div>

[Type](#enum_visualshader_type) **TYPE_LIGHT** = ``2``

A shader for light calculations.

<div id="_class_visualshader_constant_type_start"></div>

[Type](#enum_visualshader_type) **TYPE_START** = ``3``

A function for the "start" stage of particle shader.

<div id="_class_visualshader_constant_type_process"></div>

[Type](#enum_visualshader_type) **TYPE_PROCESS** = ``4``

A function for the "process" stage of particle shader.

<div id="_class_visualshader_constant_type_collide"></div>

[Type](#enum_visualshader_type) **TYPE_COLLIDE** = ``5``

A function for the "collide" stage (particle collision handler) of particle shader.

<div id="_class_visualshader_constant_type_start_custom"></div>

[Type](#enum_visualshader_type) **TYPE_START_CUSTOM** = ``6``

A function for the "start" stage of particle shader, with customized output.

<div id="_class_visualshader_constant_type_process_custom"></div>

[Type](#enum_visualshader_type) **TYPE_PROCESS_CUSTOM** = ``7``

A function for the "process" stage of particle shader, with customized output.

<div id="_class_visualshader_constant_type_sky"></div>

[Type](#enum_visualshader_type) **TYPE_SKY** = ``8``

A shader for 3D environment's sky.

<div id="_class_visualshader_constant_type_fog"></div>

[Type](#enum_visualshader_type) **TYPE_FOG** = ``9``

A compute shader that runs for each froxel of the volumetric fog map.

<div id="_class_visualshader_constant_type_max"></div>

[Type](#enum_visualshader_type) **TYPE_MAX** = ``10``

Represents the size of the [Type](#enum_visualshader_type) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_visualshader_varyingmode"></div>

enum **VaryingMode**: <div id="enum_visualshader_varyingmode"></div>

<div id="_class_visualshader_constant_varying_mode_vertex_to_frag_light"></div>

[VaryingMode](#enum_visualshader_varyingmode) **VARYING_MODE_VERTEX_TO_FRAG_LIGHT** = ``0``

Varying is passed from `Vertex` function to `Fragment` and `Light` functions.

<div id="_class_visualshader_constant_varying_mode_frag_to_light"></div>

[VaryingMode](#enum_visualshader_varyingmode) **VARYING_MODE_FRAG_TO_LIGHT** = ``1``

Varying is passed from `Fragment` function to `Light` function.

<div id="_class_visualshader_constant_varying_mode_max"></div>

[VaryingMode](#enum_visualshader_varyingmode) **VARYING_MODE_MAX** = ``2``

Represents the size of the [VaryingMode](#enum_visualshader_varyingmode) enum.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_enum_visualshader_varyingtype"></div>

enum **VaryingType**: <div id="enum_visualshader_varyingtype"></div>

<div id="_class_visualshader_constant_varying_type_float"></div>

[VaryingType](#enum_visualshader_varyingtype) **VARYING_TYPE_FLOAT** = ``0``

Varying is of type [`float`](class_float.md).

<div id="_class_visualshader_constant_varying_type_int"></div>

[VaryingType](#enum_visualshader_varyingtype) **VARYING_TYPE_INT** = ``1``

Varying is of type [`int`](class_int.md).

<div id="_class_visualshader_constant_varying_type_uint"></div>

[VaryingType](#enum_visualshader_varyingtype) **VARYING_TYPE_UINT** = ``2``

Varying is of type unsigned [`int`](class_int.md).

<div id="_class_visualshader_constant_varying_type_vector_2d"></div>

[VaryingType](#enum_visualshader_varyingtype) **VARYING_TYPE_VECTOR_2D** = ``3``

Varying is of type [`Vector2`](class_vector2.md).

<div id="_class_visualshader_constant_varying_type_vector_3d"></div>

[VaryingType](#enum_visualshader_varyingtype) **VARYING_TYPE_VECTOR_3D** = ``4``

Varying is of type [`Vector3`](class_vector3.md).

<div id="_class_visualshader_constant_varying_type_vector_4d"></div>

[VaryingType](#enum_visualshader_varyingtype) **VARYING_TYPE_VECTOR_4D** = ``5``

Varying is of type [`Vector4`](class_vector4.md).

<div id="_class_visualshader_constant_varying_type_boolean"></div>

[VaryingType](#enum_visualshader_varyingtype) **VARYING_TYPE_BOOLEAN** = ``6``

Varying is of type [`bool`](class_bool.md).

<div id="_class_visualshader_constant_varying_type_transform"></div>

[VaryingType](#enum_visualshader_varyingtype) **VARYING_TYPE_TRANSFORM** = ``7``

Varying is of type [`Transform3D`](class_transform3d.md).

<div id="_class_visualshader_constant_varying_type_max"></div>

[VaryingType](#enum_visualshader_varyingtype) **VARYING_TYPE_MAX** = ``8``

Represents the size of the [VaryingType](#enum_visualshader_varyingtype) enum.

<!-- rst-class:: classref-section-separator -->

---

## 常量

<div id="_class_visualshader_constant_node_id_invalid"></div>

**NODE_ID_INVALID** = ``-1`` <div id="class_visualshader_constant_node_id_invalid"></div>

Indicates an invalid **VisualShader** node.

<div id="_class_visualshader_constant_node_id_output"></div>

**NODE_ID_OUTPUT** = ``0`` <div id="class_visualshader_constant_node_id_output"></div>

Indicates an output node of **VisualShader**.

<!-- rst-class:: classref-section-separator -->

---

## 属性说明

<div id="_class_visualshader_property_graph_offset"></div>

[`Vector2`](class_vector2.md) **graph_offset** = ``Vector2(0, 0)`` <div id="class_visualshader_property_graph_offset"></div>

- `void` **set_graph_offset** ( value: [`Vector2`](class_vector2.md) )
- [`Vector2`](class_vector2.md) **get_graph_offset** ( )

The offset vector of the whole graph.

<!-- rst-class:: classref-section-separator -->

---

## 方法说明

<div id="_class_visualshader_method_add_node"></div>

`void` **add_node** ( type: [Type](#enum_visualshader_type), node: [`VisualShaderNode`](class_visualshadernode.md), position: [`Vector2`](class_vector2.md), id: [`int`](class_int.md) )<div id="class_visualshader_method_add_node"></div>

Adds the specified `node` to the shader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_add_varying"></div>

`void` **add_varying** ( name: [`String`](class_string.md), mode: [VaryingMode](#enum_visualshader_varyingmode), type: [VaryingType](#enum_visualshader_varyingtype) )<div id="class_visualshader_method_add_varying"></div>

Adds a new varying value node to the shader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_attach_node_to_frame"></div>

`void` **attach_node_to_frame** ( type: [Type](#enum_visualshader_type), id: [`int`](class_int.md), frame: [`int`](class_int.md) )<div id="class_visualshader_method_attach_node_to_frame"></div>

Attaches the given node to the given frame.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_can_connect_nodes"></div>

[`bool`](class_bool.md) **can_connect_nodes** ( type: [Type](#enum_visualshader_type), from_node: [`int`](class_int.md), from_port: [`int`](class_int.md), to_node: [`int`](class_int.md), to_port: [`int`](class_int.md) ) const[^const]<div id="class_visualshader_method_can_connect_nodes"></div>

Returns `true` if the specified nodes and ports can be connected together.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_connect_nodes"></div>

[Error](#enum_@globalscope_error) **connect_nodes** ( type: [Type](#enum_visualshader_type), from_node: [`int`](class_int.md), from_port: [`int`](class_int.md), to_node: [`int`](class_int.md), to_port: [`int`](class_int.md) )<div id="class_visualshader_method_connect_nodes"></div>

Connects the specified nodes and ports.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_connect_nodes_forced"></div>

`void` **connect_nodes_forced** ( type: [Type](#enum_visualshader_type), from_node: [`int`](class_int.md), from_port: [`int`](class_int.md), to_node: [`int`](class_int.md), to_port: [`int`](class_int.md) )<div id="class_visualshader_method_connect_nodes_forced"></div>

Connects the specified nodes and ports, even if they can't be connected. Such connection is invalid and will not function properly.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_detach_node_from_frame"></div>

`void` **detach_node_from_frame** ( type: [Type](#enum_visualshader_type), id: [`int`](class_int.md) )<div id="class_visualshader_method_detach_node_from_frame"></div>

Detaches the given node from the frame it is attached to.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_disconnect_nodes"></div>

`void` **disconnect_nodes** ( type: [Type](#enum_visualshader_type), from_node: [`int`](class_int.md), from_port: [`int`](class_int.md), to_node: [`int`](class_int.md), to_port: [`int`](class_int.md) )<div id="class_visualshader_method_disconnect_nodes"></div>

Connects the specified nodes and ports.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_get_node"></div>

[`VisualShaderNode`](class_visualshadernode.md) **get_node** ( type: [Type](#enum_visualshader_type), id: [`int`](class_int.md) ) const[^const]<div id="class_visualshader_method_get_node"></div>

Returns the shader node instance with specified `type` and `id`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_get_node_connections"></div>

[Array](class_array.md) [`Dictionary`](class_dictionary.md) **get_node_connections** ( type: [Type](#enum_visualshader_type) ) const[^const]<div id="class_visualshader_method_get_node_connections"></div>

Returns the list of connected nodes with the specified type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_get_node_list"></div>

[`PackedInt32Array`](class_packedint32array.md) **get_node_list** ( type: [Type](#enum_visualshader_type) ) const[^const]<div id="class_visualshader_method_get_node_list"></div>

Returns the list of all nodes in the shader with the specified type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_get_node_position"></div>

[`Vector2`](class_vector2.md) **get_node_position** ( type: [Type](#enum_visualshader_type), id: [`int`](class_int.md) ) const[^const]<div id="class_visualshader_method_get_node_position"></div>

Returns the position of the specified node within the shader graph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_get_valid_node_id"></div>

[`int`](class_int.md) **get_valid_node_id** ( type: [Type](#enum_visualshader_type) ) const[^const]<div id="class_visualshader_method_get_valid_node_id"></div>

Returns next valid node ID that can be added to the shader graph.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_has_varying"></div>

[`bool`](class_bool.md) **has_varying** ( name: [`String`](class_string.md) ) const[^const]<div id="class_visualshader_method_has_varying"></div>

Returns `true` if the shader has a varying with the given `name`.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_is_node_connection"></div>

[`bool`](class_bool.md) **is_node_connection** ( type: [Type](#enum_visualshader_type), from_node: [`int`](class_int.md), from_port: [`int`](class_int.md), to_node: [`int`](class_int.md), to_port: [`int`](class_int.md) ) const[^const]<div id="class_visualshader_method_is_node_connection"></div>

Returns `true` if the specified node and port connection exist.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_remove_node"></div>

`void` **remove_node** ( type: [Type](#enum_visualshader_type), id: [`int`](class_int.md) )<div id="class_visualshader_method_remove_node"></div>

Removes the specified node from the shader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_remove_varying"></div>

`void` **remove_varying** ( name: [`String`](class_string.md) )<div id="class_visualshader_method_remove_varying"></div>

Removes a varying value node with the given `name`. Prints an error if a node with this name is not found.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_replace_node"></div>

`void` **replace_node** ( type: [Type](#enum_visualshader_type), id: [`int`](class_int.md), new_class: [`StringName`](class_stringname.md) )<div id="class_visualshader_method_replace_node"></div>

Replaces the specified node with a node of new class type.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_set_mode"></div>

`void` **set_mode** ( mode: [Mode](#enum_shader_mode) )<div id="class_visualshader_method_set_mode"></div>

Sets the mode of this shader.

<!-- rst-class:: classref-item-separator -->

---

<div id="_class_visualshader_method_set_node_position"></div>

`void` **set_node_position** ( type: [Type](#enum_visualshader_type), id: [`int`](class_int.md), position: [`Vector2`](class_vector2.md) )<div id="class_visualshader_method_set_node_position"></div>

Sets the position of the specified node.

[^virtual]: 本方法通常需要用户覆盖才能生效。
[^const]: 本方法无副作用，不会修改该实例的任何成员变量。
[^vararg]: 本方法除了能接受在此处描述的参数外，还能够继续接受任意数量的参数。
[^constructor]: 本方法用于构造某个类型。
[^static]: 调用本方法无需实例，可直接使用类名进行调用。
[^operator]: 本方法描述的是使用本类型作为左操作数的有效运算符。
[^bitfield]: 这个值是由下列位标志构成位掩码的整数。
[^void]: 无返回值。
